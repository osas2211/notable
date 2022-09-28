import React from "react"
import { RichTextEditor } from "../ui-components/RichTextEditor"
import { Heading, View, Icon, Flex } from "@aws-amplify/ui-react"
import { Download, Save, Edit } from "@mui/icons-material"
import { useLocation, useParams } from "react-router-dom"
import { InviteCollaborator } from "../ui-components/InviteCollaborator"
import {
  useGetNoteQuery,
  useGetNotesQuery,
  useGetCollabNotesQuery,
} from "../redux/services/user"
import { useUpdateNoteMutation } from "../redux/services/user"
import { ToastContainer, toast } from "react-toastify"
import { useSerialize } from "../hooks/useSerialize"

export const Editor = () => {
  const param = useParams()
  const location = useLocation()
  const token = localStorage.getItem("token")
  const { data, isSuccess, refetch } = useGetNoteQuery({ id: param.id, token })
  const collabNotes = useGetCollabNotesQuery(token)
  const notes = useGetNotesQuery(token)
  const textContent = isSuccess && JSON.parse(data.note.textContent)
  const [updateNote] = useUpdateNoteMutation()
  const serialize = useSerialize
  return (
    <>
      <ToastContainer />
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
          <Icon
            as={Save}
            fontSize="1.5rem"
            opacity={"0.7"}
            marginLeft="1rem"
            onClick={async () => {
              try {
                if (
                  serialize(JSON.parse(localStorage.getItem("content"))) !== ""
                ) {
                  await updateNote({
                    token,
                    textContent: localStorage.getItem("content"),
                    id: param.id,
                  })
                  toast.success("Note saved", {
                    position: toast.POSITION.TOP_CENTER,
                  })
                  refetch()
                  notes.refetch()
                  collabNotes.refetch()
                } else {
                  toast.error("note field cannot be empty", {
                    position: toast.POSITION.TOP_CENTER,
                  })
                }
              } catch (error) {
                toast.error("Unable to save note", {
                  position: toast.POSITION.TOP_CENTER,
                })
              }
            }}
          />
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
