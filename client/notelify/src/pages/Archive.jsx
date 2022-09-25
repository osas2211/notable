import React from "react"
import { View, Heading, Grid } from "@aws-amplify/ui-react"
import { NoteOverview } from "../ui-components/NoteOverview"

export const Archive = () => {
  const arr = [0, 1]
  return (
    <View as="div">
      <Heading level={5} margin="2rem 0 1rem 0" fontWeight={"medium"}>
        Archive
      </Heading>
      <Grid templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }} gap="1rem">
        {arr.map((data) => (
          // render if isArchived
          <NoteOverview isFavourite={true} />
        ))}
      </Grid>
    </View>
  )
}
