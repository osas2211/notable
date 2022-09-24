import React from "react"
import {
  Text,
  View,
  Heading,
  Icon,
  Flex,
  Button,
  Card,
  Grid,
} from "@aws-amplify/ui-react"
import BoltIcon from "@mui/icons-material/Bolt"
import DeleteIcon from "@mui/icons-material/Delete"

export const QuickNotes = () => {
  const arr = [0, 1, 2, 3]
  return (
    <View as="div" boxShadow="medium" padding="1.2rem" className="quicknotes">
      <Flex justifyContent={"space-between"} alignItems={"start"}>
        <h2>
          Quicknotes / Todos <Icon as={BoltIcon} color="#F4D35E" />
        </h2>

        <Button variation="primary" size="small">
          + New Todo
        </Button>
      </Flex>

      <View as="div" marginTop="1rem">
        <Grid
          templateColumns={{ base: "1fr 1fr", large: "1fr 1fr 1fr 1fr" }}
          gap="0.8rem"
        >
          {arr.map((data) => (
            <Card
              padding={"1rem 1.7rem 1rem 1rem"}
              borderRadius="8px"
              boxShadow={"medium"}
              className="quicknote"
            >
              <Icon
                as={DeleteIcon}
                className="quicknote-icon"
                color={"#C9C19F"}
              />
              <Heading level={6} fontWeight={"medium"}>
                Take Youtube Tutorial
              </Heading>
              <Text fontSize={"0.85rem"} marginTop="0.5rem">
                Learn about aws amplify and redis by 10pm today.
              </Text>
            </Card>
          ))}
        </Grid>
      </View>
    </View>
  )
}
