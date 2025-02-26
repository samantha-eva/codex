import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: {
        type: Object,
        required: true
    },
    coverImg: String,
    category: String,
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    rating: Number,
    createdAt : {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;