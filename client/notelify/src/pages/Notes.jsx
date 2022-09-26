import React from "react"
import { View, Heading, Grid } from "@aws-amplify/ui-react"
import "../styles/notes.css"
import { NoteOverview } from "../ui-components/NoteOverview"
import { useLoginMutation } from "../redux/services/auth"

export const Notes = () => {
  const arr = [0, 1, 2, 3, 4, 6]
  return (
    <View as="div">
      <Heading level={5} margin="2rem 0 1rem 0" fontWeight={"medium"}>
        All Notes
      </Heading>
      <Grid templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }} gap="1rem">
        {arr.map((data) => (
          <NoteOverview isFavourite={true} id={data} />
        ))}
      </Grid>
    </View>
  )
}
