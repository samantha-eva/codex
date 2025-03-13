import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const commentApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:5050/api/comments',
        credentials: 'include'
    
    }),
    tagTypes: ['Comments'],
    endpoints: (build) => ({
        postComment: build.mutation({
            query: (commentData) => ({
                url: "/post-comment",
                method: "POST",
                body: commentData
            }),
            invalidatesTags: (result, error, {postId}) => [{type: 'Comments', id: postId}]
        }),
        getComments: build.query({
            query: () => ({
                url: "/total-comments",
                method: "GET"
            }),
        })     
    }),
})

  
export const {useGetCommentsQuery, usePostCommentMutation} = commentApi;

export default commentApi;