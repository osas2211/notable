import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

// const token = JSON.parse(localStorage.getItem("token"))

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
  }),
  tagTypes: ["Note, User, Quicknote"],
  endpoints: (builder) => ({
    //User Endpoints
    getUsers: builder.mutation({
      query: (args) => {
        return {
          url: "user",
          method: "POST",
          headers: {
            authorization: `Bearer ${args.token}`,
          },
          body: args.users,
        }
      },
    }),
    // Notes Endpoints
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

    addNote: builder.mutation({
      query(args) {
        return {
          url: "create-note",
          method: "POST",
          headers: {
            authorization: `Bearer ${args.token}`,
          },
          body: args,
        }
      },
    }),
    updateNote: builder.mutation({
      query(args) {
        return {
          url: `notes/${args.id}`,
          method: "PUT",
          headers: {
            authorization: `Bearer ${args.token}`,
          },
          body: args,
        }
      },
    }),
    deleteNote: builder.mutation({
      query(args) {
        return {
          url: `notes/${args.id}`,
          method: "DELETE",
          headers: {
            authorization: `Bearer ${args.token}`,
          },
        }
      },
    }),

    // Collaboration Endpoints
    inviteCollaborator: builder.mutation({
      query(args) {
        return {
          url: `notes/invite`,
          method: "POST",
          headers: {
            authorization: `Bearer ${args.token}`,
          },
          body: {
            noteID: args.noteID,
            userName: args.userName,
          },
        }
      },
    }),

    // Quicknotes Endpoints
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
  useGetUsersMutation,
  useGetNotesQuery,
  useAddNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
  useInviteCollaboratorMutation,
  useGetQuicknotesQuery,
  useAddQuicknoteMutation,
  useDeleteQuicknoteMutation,
} = userApi
