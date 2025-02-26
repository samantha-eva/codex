import express from "express";
import Comment  from "../model/comment.model.js"

const router = express.Router();

router.post("/post-comment", async(req, res) => {
    try{
        console.log(req.body);
        const newComment = new Comment(req.body);
        await newComment.save();
        res.status(200).send({message: "Comment creer avec success", comment: newComment})
    }catch(error){
        console.error("une erreur est parvenu", error);
        res.status(500).send({message: " un erreur est new comment"})
    }
})


router.post("/total-comments", async(req, res) => {
    try{
        const totalComment  = await Comment.countDocuments({});
        res.status(200).send({message: "Total nb comments", totalComment})
    }catch(error){
        console.error("une erreur est parvenu", error);
        res.status(500).send({message: " un erreur nb comment"})
    }
})


export default router;