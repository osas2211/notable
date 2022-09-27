import React, { useState } from "react"
import {
  View,
  Heading,
  Grid,
  Button,
  TextAreaField,
  Text,
  TextField,
} from "@aws-amplify/ui-react"
import "../styles/notes.css"
import { NoteOverview } from "../ui-components/NoteOverview"
import { useGetNotesQuery, useAddNoteMutation } from "../redux/services/user"
import Modal from "@mui/material/Modal"
import { ToastContainer, toast } from "react-toastify"

export const Notes = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    backgroundColor: "#fff",
    padding: "1rem",
  }
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const token = localStorage.getItem("token")
  const { data, isSuccess, refetch } = useGetNotesQuery(token)
  const [addNote] = useAddNoteMutation()
  const [textContent, setTextContent] = useState("")
  const [label, setlabel] = useState("")
  const onAddNote = async () => {
    try {
      await addNote({ label, textContent, token })
      toast.success("Note added", {
        position: toast.POSITION.TOP_CENTER,
      })
      refetch()
      handleClose()
      setTextContent("")
      setlabel("")
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }
  return (
    <View as="div">
      <Button
        variation="primary"
        size="small"
        className="add-btn"
        boxShadow={"large"}
        onClick={handleOpen}
      >
        {" "}
        + Add New Note
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <View style={style}>
          <Text marginBottom={"1rem"}>Add Quicknote</Text>
          <TextField
            placeholder="Enter title..."
            marginBottom={"1rem"}
            label="Title"
            value={label}
            onChange={(e) => setlabel(e.target.value)}
          />
          <TextAreaField
            placeholder="Enter Note..."
            label="Body"
            marginBottom={"1rem"}
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
          />
          <Button variation="primary" size="small" onClick={onAddNote}>
            Add Note
          </Button>
        </View>
      </Modal>
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
              refetchNote={refetch}
            />
          ))}
      </Grid>
    </View>
  )
}
