import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    coverImg: String,
    category: String,
    author: String,
    rating: Number,
    createdAt : {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;