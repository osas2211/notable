import React, { useState } from "react"
import { RichTextEditor } from "../ui-components/RichTextEditor"
import { Heading, View, Icon, Flex } from "@aws-amplify/ui-react"
import { Download, Save, Edit } from "@mui/icons-material"
import { useParams } from "react-router-dom"
import { InviteCollaborator } from "../ui-components/InviteCollaborator"

export const Editor = () => {
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]
  const [text, setText] = useState(initialValue)
  return (
    <>
      <Flex
        marginBottom={"2rem"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Flex alignItems={"center"}>
          <Heading level={3}>Note Title</Heading>
          <Icon as={Edit} color={"#6B818C"} />
        </Flex>
        <View>
          <InviteCollaborator fontSize="1.5rem" />
          <Icon as={Save} fontSize="1.5rem" opacity={"0.7"} marginLeft="1rem" />
          <Icon
            as={Download}
            fontSize="1.5rem"
            opacity={"0.7"}
            marginLeft="1rem"
          />
        </View>
      </Flex>
      <RichTextEditor initialValue={text} setText={setText} />
    </>
  )
}
