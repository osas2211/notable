import React from "react"
import { View, Heading, Grid } from "@aws-amplify/ui-react"
import "../styles/notes.css"
import { NoteOverview } from "../ui-components/NoteOverview"
import { useGetNotesQuery } from "../redux/services/user"

export const Notes = () => {
  const token = localStorage.getItem("token")
  const { data, isSuccess } = useGetNotesQuery(token)
  return (
    <View as="div">
      <Heading level={5} margin="2rem 0 1rem 0" fontWeight={"medium"}>
        All Notes
      </Heading>
      <Grid templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }} gap="1rem">
        {isSuccess &&
          data.notes.map((note) => (
            <NoteOverview
              isFavourite={note.favourite}
              id={note._id}
              body={note.textContent}
              title={note.label}
            />
          ))}
      </Grid>
    </View>
  )
}
