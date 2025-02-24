import express from "express";
import Blog  from "../model/blog.model.js"

const router = express.Router();

// Define your routes
router.get("/", (req, res) => {
  res.send("Blog route is working gg!");
});

//Create blogs
router.post("/create-post", async (req, res) => {
  try {
    console.log("Données reçues :", req.body); // ✅ Affiche les données dans la console
    
    const newPost = new Blog({ ...req.body });
    await newPost.save();

    res.status(201).json({ message: "Le post est créé avec succès", post: newPost });
  } catch (error) {
    console.error("Erreur lors de la création du post", error);
    res.status(500).json({ message: "Erreur lors de la création du post", error: error.message });
  }
});

export default router; // ✅ Add default export
