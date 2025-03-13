import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useSelector} from "react-redux";
import { usePostCommentMutation } from '../../../redux/features/comments/commentApi';
import { useFetchBlogByIdQuery } from '../../../redux/features/blogs/blogsApi';

const PostAComment = () => {
    const {id} = useParams();
    const [comment, setComment] = useState('')
    const {user} = useSelector((state)=> state.auth)
    const navigate = useNavigate()
    const [postComment] = usePostCommentMutation();
    const {refetch} = useFetchBlogByIdQuery(id, {skip: !id})
    
    const handleSubmit = async(e) => {
      e.preventDefault();
      if(!user){
        alert("Vous devez etre connecté pour post un commentaire")
        navigate("/login")
        return;
      }
      const newComment = {
        comment: comment,
        user: user?._id,
        postId: id

      }

      try{
        const response = await postComment(newComment).unwrap();
        console.log(response);
        alert('commetaire poster avce succes');
        refetch()

      }catch(error){
        alert("Une erreur est survenu pdt le commentaire du post");

      }
      console.log(newComment);

    }

  return (
    <div className='mt-8'>
        <h3 className='text-lg font-medium mb-8'>Leave a comment</h3>
        <form onSubmit={handleSubmit}>
            <textarea name="text" 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            cols="30"
            rows="10"
            placeholder='partager un commentaire'
            className='w-full bg-primary focus:outline-none p-5'
            />

            <button type="submit" className='w-full bg-black hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>Submit</button>

        
        </form>
    </div>
  )
}

export default PostAComment