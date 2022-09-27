import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

// const token = JSON.parse(localStorage.getItem("token"))

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
  }),
  tagTypes: ["Note, User, Quicknote"],
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

    getQuicknotes: builder.query({
      query: (token) => {
        return {
          url: "quicknotes",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      },
    }),

    addQuicknote: builder.mutation({
      query(args) {
        return {
          url: "quick-note",
          method: "POST",
          headers: {
            authorization: `Bearer ${args.token}`,
          },
          body: args.text,
        }
      },
    }),
    deleteQuicknote: builder.mutation({
      query(args) {
        return {
          url: `quick-note/${args.id}`,
          method: "DELETE",
          headers: {
            authorization: `Bearer ${args.token}`,
          },
        }
      },
    }),
  }),
})

export const {
  useGetNotesQuery,
  useGetQuicknotesQuery,
  useAddQuicknoteMutation,
  useDeleteQuicknoteMutation,
} = userApi
