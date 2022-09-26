import React, { useState } from "react"
import { RichTextEditor } from "../ui-components/RichTextEditor"
import { Heading, View, Text, Icon, Flex } from "@aws-amplify/ui-react"
import { Download, Save, Edit } from "@mui/icons-material"
import PersonAddAlt from "@mui/icons-material/PersonAddAlt"
import { useParams } from "react-router-dom"

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
          <Icon as={PersonAddAlt} marginRight="1rem" color={"#6B818C"} />
          <Icon as={Save} marginRight="1rem" color={"#6B818C"} />
          <Icon as={Download} color={"#6B818C"} />
        </View>
      </Flex>
      <RichTextEditor initialValue={text} setText={setText} />
    </>
  )
}
