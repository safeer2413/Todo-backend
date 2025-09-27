import { apiSlice } from "./apiSlice";


 const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/api/users',
                method: 'POST',
                body: data
            })
        }),
        registerUser: builder.mutation({
            query: (data) => ({
                url: '/api/users/register',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
} = userApiSlice;