import express from "express";
import Blog  from "../model/blog.model.js"
import Comment  from "../model/comment.model.js"
import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

//Create blogs
router.post("/create-post",verifyToken,isAdmin, async (req, res) => {
  try {
   
    const newPost = new Blog({ ...req.body, author: req.userId });
    await newPost.save();

    res.status(201).json({ message: "Le post est créé avec succès", post: newPost });
  } catch (error) {
    console.error("Erreur lors de la création du post", error);
    res.status(500).json({ message: "Erreur lors de la création du post", error: error.message });
  }
});

//All blogs
router.get("/", async(req, res) => {
  try{
    const {search, creatory, location} = req.query;
    console.log(search);
    let query = {}

    if(search){
        query = {
          ...query,
          $or: [
            {title: {$regex: search, $options: "i"}},
            {content: {$regex: search, $options: "i"}}
          ]
        }
    }

    if(creatory){
      query = {
        ...query,
        category
      }
    }

    if(location){
      query = {
        ...query,
        location
      }
    }



    const posts = await Blog.find(query).populate('author', 'email').sort({createdAt: -1});

    res.status(200).send({posts})
  }catch(error){
    console.error("Erreur lors de la création du post", error);
    res.status(500).json({ message: "Erreur lors de la création du post", error: error.message });
  }
 
});


//Detail blog par id 
router.get("/:id", async(req, res) => {
  try{
    const postId = req.params.id
    const post = await Blog.findById(postId);

    if(!post){
      return res.status(404).send({ message: "Post non trouvé"})
    }

    const comment = await Comment.find({postId: postId}).populate('user', 'username email')


    res.status(200).send({
      message: "Post trouvé avec success",
      post: post
    })

  }catch(error){
    console.error("Erreur lors de la correspondace du post", error);
    res.status(500).send({ message: "Erreur lors du detail du post"});
  }
})

//update blog post
router.patch("/update/:id",verifyToken, async(req, res) => {
  try{
    const postId = req.params.id;
    const updatedPost = await Blog.findByIdAndUpdate(postId, {
      ...req.body
    }, {new: true})

    if(!updatedPost){
      return res.status(404).send({ message: "Post non trouvé"})
    }
    res.status(200).send({
      message: "Post modifié avec succes",
      post: updatedPost
    })

  }catch(error){
    console.error("Erreur lors de la correspondace du post", error);
    res.status(500).send({ message: "Erreur lors de la modification du post"});
  }
})

//delete blog post
router.delete("/:id",verifyToken, async(req,res) => {
  try{

    const postId = req.params.id;
    const post = await Blog.findByIdAndDelete(postId)

    if(!post){
      return res.status(404).send({ message: "Post non trouvé"})
    }

    await Comment.deleteMany({postId: postId})

    res.status(200).send({
      message: "Post supprimé avec succes",
      post: post
    })

  }catch(error){
    console.error("Error delete post", error);
    res.status(500).send({ message: "Error delete post"})
  }
})

//related blog post
router.get("/related/:id", async(req, res) => {
  try{
    const {id} = req.params.id;

    if(!id){
      return res.status(404).send({ message: "Post  id est obligatoire"})
    }

    const blog = await Blog.findById(id);
    
    if(!blog){
      return res.status(404).send({ message: "Post n'est pas trouvé"})
    }

    const titleRegex = new RegExp(blog.title.split(' ').join('|'), 'i');

    const relatedQuery = {
      _id: {$ne: id},
      title: {$regex: titleRegex}
    }

    const relatedPost = await Blog.find(relatedQuery)
    res.status(200).send(relatedPost)

  }catch(error){
    console.error("Erreur lors de la correspondace du post", error);
    res.status(500).send({ message: "Erreur lors de la modification du post"});
  }
})



export default router; // ✅ Add default export
