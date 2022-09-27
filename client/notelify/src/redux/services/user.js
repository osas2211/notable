import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

// const token = JSON.parse(localStorage.getItem("token"))

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
  }),
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: (token) => {
        return {
          url: "notes",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      },
    }),
  }),
})

export const { useGetNotesQuery } = userApi
