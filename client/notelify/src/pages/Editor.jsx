import React from "react"
import { RichTextEditor } from "../ui-components/RichTextEditor"
import { Heading, View, Icon, Flex } from "@aws-amplify/ui-react"
import { Download, Save, Edit } from "@mui/icons-material"
import { useLocation, useParams } from "react-router-dom"
import { InviteCollaborator } from "../ui-components/InviteCollaborator"
import { useGetNoteQuery } from "../redux/services/user"

export const Editor = () => {
  const param = useParams()
  const location = useLocation()
  const token = localStorage.getItem("token")
  const { data, isSuccess } = useGetNoteQuery({ id: param.id, token })
  const textContent = isSuccess && JSON.parse(data.note.textContent)
  return (
    <>
      <Flex
        marginBottom={"2rem"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Flex alignItems={"center"}>
          <Heading level={3}>{isSuccess && data.note.label}</Heading>
          <Icon as={Edit} color={"#6B818C"} />
        </Flex>
        <View>
          {location.pathname.indexOf("collab-notes") === -1 && (
            <InviteCollaborator
              fontSize="1.5rem"
              collaborators={isSuccess && data.note.collaborators}
              noteID={isSuccess && data.note._id}
            />
          )}
          <Icon as={Save} fontSize="1.5rem" opacity={"0.7"} marginLeft="1rem" />
          <Icon
            as={Download}
            fontSize="1.5rem"
            opacity={"0.7"}
            marginLeft="1rem"
          />
        </View>
      </Flex>
      {isSuccess !== false ? (
        <RichTextEditor initialValue={textContent} />
      ) : (
        <Heading>Fetching Note....</Heading>
      )}
    </>
  )
}
