import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:5050/api/auth',
        credentials: 'include'
    }),
    endpoints: (build) => ({
        
        registerUser: build.mutation({
            query: (newUser) => ({
                url: "/register",
                method: "POST",
                body: newUser,
            })
        }),
          
        loginUser: build.mutation({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            })
        }),

        logoutUser : build.mutation({
            query: () => ({
                url: "/logout",
                method: "POST",
            })
        }),

        getUser: build.query({
            query: () => ({
                url: "/users",
                method: "GET",
            }),
            refetchOnMount: true,
            invalidatesTags: ["User"]
        }),
        deleteUser : build.mutation({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: "DELETE",
            }),
        }),
        updateUserRole: build.mutation({
            query: ({userId, role}) => ({
                url: `/users/${userId}`,
                method: "PUT",
                body: {role}
            }),
            refetchOnMount: true,
            invalidatesTags: ["User"]
        })     
    }),
})

export const {useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation,useGetUserQuery, useDeleteUserMutation, useUpdateUserRoleMutation } = authApi;

export default authApi;
