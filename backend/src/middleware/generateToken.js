
import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const generateToken = async(userId) => {
    try{
        const user = await User.findById(userId);

        if(!user){
            throw new Error("user non trouvé");
        }

        const token = jwt.sign({userId: user._id, role: user.role}, JWT_SECRET,{expiresIn: '1h'})
        return token;

    }catch(error){
        console.error("Error generate token", error);
        throw error;
    }

}
export default generateToken;