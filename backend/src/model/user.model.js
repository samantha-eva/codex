import mongoose from "mongoose";
import bcrypt from 'bcryptjs';


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

//hash le mdp avant la sauvegarde  en bdd

UserSchema.pre('save', async function(next) {
    const user = this;
    if(!user.isModified('password')) return next();
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
});

 // compare le mdp quand user essaye de se connecter

 UserSchema.methods.comparePassword = function(givenPassword){
    return bcrypt.compare(givenPassword, this.password)
 }

const User = mongoose.model("User", UserSchema);

export default User;