import { Button } from "@aws-amplify/ui-react"
import React, { useState } from "react"
import Notelifylogo3 from "./Notelifylogo3"
import { Link, useHref } from "react-router-dom"
import { View, Icon, Flex, SearchField, Text } from "@aws-amplify/ui-react"
import StickyNote2Icon from "@mui/icons-material/StickyNote2"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import ArchiveIcon from "@mui/icons-material/Archive"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import dp from "../images/dp.jpg"
import showcase from "../images/showcase.jpg"
import "../styles/header.css"

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const href = useHref()
  return (
    <div>
      <Button
        variation="primary"
        size="small"
        className="add-btn"
        boxShadow={"large"}
      >
        {" "}
        + Add New Note
      </Button>

      {/* Nav Section */}
      <View
        as="div"
        boxShadow="medium"
        className={`${mobileNav ? "main-header nav-active" : "main-header"}`}
      >
        <View as="div" marginLeft={"1.5rem"}>
          <Notelifylogo3 marginBottom={"2.5rem"} />
          <View as="div" margin="1rem 0 1rem -1rem" width="100%">
            <SearchField
              placeholder="Search notes"
              boxShadow={"medium"}
              size="small"
            />
          </View>
        </View>

        <View as={"nav"} marginTop="2.5rem">
          <ul>
            <li className={href === "/notes" && "active-nav"}>
              <Link to="/notes">
                <Icon as={StickyNote2Icon} color="#A09ABC" /> All Notes
              </Link>
            </li>
            <li className={href === "/favourites" && "active-nav"}>
              <Link to="/favourites">
                <Icon as={FavoriteBorderIcon} color="#EF2D56" /> Favourites
              </Link>
            </li>
            <li className={href === "/notifications" && "active-nav"}>
              <Link to="/notifications">
                <Icon as={NotificationsNoneIcon} color="#2FBF71" /> Notifcations
              </Link>
            </li>
            <li className={href === "/archive" && "active-nav"}>
              <Link to="/archive">
                <Icon as={ArchiveIcon} color="#BABD8D" /> Archive
              </Link>
            </li>
            <li>
              <Icon as={DarkModeIcon} color="#051922" /> Dark Mode
            </li>
          </ul>
        </View>
      </View>

      {/* Showcase Section */}
      <div className="top-header">
        <div className="showcase">
          <img src={showcase} alt="showcase" />
        </div>
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          marginTop={"2rem"}
        >
          <Text color={"#fff"}>
            <h2>Good Morning, John.</h2>
            <p>
              <small>Friday, September 23, 2022</small>
            </p>
          </Text>
          <Link
            to={"/profile"}
            style={{
              marginRight: "1rem",
              display: "inline-block",
              color: "#fff",
            }}
            className="user-icon"
          >
            <Flex
              justifyContent={"space-between"}
              gap="5px"
              alignItems="center"
              backgroundColor={"#565857"}
              padding="0.2rem 0.5rem"
              borderRadius={"large"}
              boxShadow={"large"}
            >
              <img
                src={dp}
                alt="User Image"
                style={{
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "100%",
                  display: "inline-block",
                  margin: "0",
                }}
              />
              <span>John Doe</span>
            </Flex>
          </Link>
        </Flex>
      </div>

      <View className="header-mobile" boxShadow="small">
        <Flex justifyContent={"space-between"} alignItems="center">
          <Notelifylogo3 />

          <div
            className={`${mobileNav ? "ham ham-active" : "ham"}`}
            onClick={() => {
              if (mobileNav) setMobileNav(false)
              else setMobileNav(true)
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Flex>
      </View>
    </div>
  )
}
