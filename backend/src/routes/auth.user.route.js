import express from "express";
import User from "../model/user.model.js";
const router = express.Router();

router.post("/register", async(req, res) => {
    try{
        const {email, password, username} = req.body;
        const user = new User({email, password, username});
        await user.save();
        res.status(200).send({ message: "user registered success", user: user });

    }catch(error){
        console.error("failed to register", error);
        res.status(500).json({message: "Registration failed: "});
    }
})

export default router;