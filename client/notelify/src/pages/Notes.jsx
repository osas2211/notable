import React from "react"
import {
  View,
  Flex,
  Text,
  Heading,
  Icon,
  Card,
  Grid,
} from "@aws-amplify/ui-react"
import EditIcon from "@mui/icons-material/Edit"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ArchiveIcon from "@mui/icons-material/Archive"
import DeleteIcon from "@mui/icons-material/Delete"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import "../styles/notes.css"

export const Notes = () => {
  const arr = [0, 1, 2, 3, 4, 6]
  return (
    <View as="div">
      <Heading level={5} margin="2rem 0 1rem 0" fontWeight={"medium"}>
        All Notes
      </Heading>
      <Grid templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }} gap="1rem">
        {arr.map((data) => (
          <Card padding={"1rem"} boxShadow="medium">
            <Flex justifyContent={"space-between"} alignItems="center">
              <Heading level={6} fontWeight={"medium"}>
                Deployment of site
              </Heading>
              <Icon
                as={EditIcon}
                fontSize="1rem"
                opacity={"0.7"}
                style={{ cursor: "pointer" }}
              />
            </Flex>
            <View as="div" marginBottom="0.5rem" marginTop="0.2rem">
              <Text as="small" fontSize={"0.8rem"} opacity={"0.7"}>
                21 Thurs, 2022, 9:15am
              </Text>
            </View>
            <Text as="p" fontSize={"0.85rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              officiis nisi fuga voluptatibus dicta ab beatae rerum voluptas....
            </Text>

            <View as="div" marginTop="1.5rem" className="note-icons">
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <div>
                  <Icon
                    as={FavoriteBorderIcon}
                    fontSize="1.2rem"
                    opacity={"0.7"}
                    style={{ cursor: "pointer" }}
                  />
                  <Icon
                    as={PersonAddAltIcon}
                    fontSize="1.2rem"
                    opacity={"0.7"}
                    marginLeft="1rem"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div>
                  <Icon
                    as={ArchiveIcon}
                    fontSize="1.2rem"
                    opacity={"0.7"}
                    marginLeft="1rem"
                    style={{ cursor: "pointer" }}
                  />
                  <Icon
                    as={DeleteIcon}
                    fontSize="1.2rem"
                    opacity={"0.7"}
                    marginLeft="1rem"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </Flex>
            </View>
          </Card>
        ))}
      </Grid>
    </View>
  )
}
