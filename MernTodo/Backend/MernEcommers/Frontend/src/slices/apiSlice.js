// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// export const apiSlice = createApi({
//     baseQuary: fetchBaseQuery({ baseUrl: "" }),
//     tagtypes: [],
//     endpoints: () => ({})
// })

// export default apiSlice;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "" }),
    tagTypes: [],
    endpoints: () => ({})
})

export default apiSlice;