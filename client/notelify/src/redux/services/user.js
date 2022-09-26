import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const token = JSON.parse(localStorage.getItem("token"))

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/user/",
    headers: {
      authentication: `Bearer ${token}`,
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query() {},
    }),
  }),
})
