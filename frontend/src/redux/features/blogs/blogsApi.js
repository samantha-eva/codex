import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:5050/api/',
        credentials: 'include'
    
    }),
    endpoints: (build) => ({
        
        fetchBlogs: build.query({
            query: ({search='', category='', location=''}) => `/blog?search=${search}&category=${category}&location=${location}`,
          }),
          fetchBlogById: build.query({
            query: (id) => `/blog/${id}`,
        }),

        fetchRelatedBlogs: build.query({
            query: (id) => `/blog/related/${id}`
          }),
         
    }),
})

  export const {useFetchBlogsQuery, useFetchBlogByIdQuery, useFetchRelatedBlogsQuery} = blogApi