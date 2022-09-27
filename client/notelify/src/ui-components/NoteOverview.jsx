import React from "react"
import { View, Flex, Text, Heading, Icon, Card } from "@aws-amplify/ui-react"
import { Link } from "react-router-dom"
import EditIcon from "@mui/icons-material/Edit"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ArchiveIcon from "@mui/icons-material/Archive"
import DeleteIcon from "@mui/icons-material/Delete"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"

export const NoteOverview = ({
  title,
  time,
  body,
  isFavourite,
  isArchived,
  id,
}) => {
  return (
    <Link to={`/notes/editor/${id}`} className="note">
      <Card padding={"1rem"} boxShadow="medium">
        <Flex justifyContent={"space-between"} alignItems="center">
          <Heading level={6} fontWeight={"medium"}>
            {title}
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
          {body?.slice(0, 20)}....
        </Text>

        <View as="div" marginTop="1.5rem" className="note-icons">
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <div>
              <Icon
                as={FavoriteBorderIcon}
                fontSize="1.2rem"
                opacity={"0.7"}
                style={{ cursor: "pointer" }}
                color={isFavourite && "#EF2D56"}
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
    </Link>
  )
}
