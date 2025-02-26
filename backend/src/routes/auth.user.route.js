import express from "express";
import User from "../model/user.model.js";
import generateToken from "../middleware/generateToken.js";

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

router.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        console.log(user)

        if(!user){
            return res.status(404).send({message: "user non trouvé"})
        }

        const isMatch = await user.comparePassword(password)

        if(!isMatch){
            return res.status(401).send({message: "invalid password"});
        }

        //generate token
        const token = await generateToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: true
        })

        res.status(200).send({message: "Login success", token,user: {
            _id: user._id,
            email: user.email,
            username: user.username,
            role: user.role
        }})


    }catch(error){
        console.error("failed to login", error);
        res.status(500).json({ message: "login failed essaye"});
    }
})


router.post("/logout", async(req,res) => {
    try{

        res.clearCookie('token');
        res.status(200).send({message: "Logged out success"});

    }catch(error){
        console.error("Failed to log ouut", error);
        res.status(500).json({message: "Logout failded"});
    }
})


router.get("/users", async(req,res) => {
    try{
        const users = await User.find({}, 'id email role');
        res.status(200).send({message: "Users found succeess", users})
    }catch(error){
        console.error("Failed to log ouut", error);
        res.status(500).json({message: "Logout failded"});
    }
})

router.delete("/users/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);

        if(!user){
           return res.status(404).send({message: "User not found "})
        }
        res.status(200).send({message: "User delete avec success"})
    }catch(error){
        console.error("Error delete user", error);
        res.status(500).json({message: "Error delete user"});
    }
})


router.put("/users/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const {role} = req.body;
        const user = await User.findByIdAndUpdate(id, {role}, {new: true});

        if(!user){
           return res.status(404).send({message: "User not found "})
        }
        res.status(200).send({message: "User udpate avec success"})
    }catch(error){
        console.error("Error update user", error);
        res.status(500).json({message: "Error update user"});
    }
})

export default router;