import { Button } from "@aws-amplify/ui-react"
import React, { useState } from "react"
import Notelifylogo3 from "./Notelifylogo3"
import { Link, useHref } from "react-router-dom"
import { View, Icon, Flex, SearchField } from "@aws-amplify/ui-react"
import StickyNote2Icon from "@mui/icons-material/StickyNote2"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import ArchiveIcon from "@mui/icons-material/Archive"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import SettingsIcon from "@mui/icons-material/Settings"
import dp from "../images/dp.jpg"
import "../styles/header.css"

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const href = useHref()
  return (
    <div>
      <div
        className={`${mobileNav ? "main-header nav-active" : "main-header"}`}
      >
        <View as="div" marginLeft={"1.5rem"}>
          <Notelifylogo3 marginLeft={"1rem"} marginBottom={"2.5rem"} />
          <Button variation="primary" size="small">
            {" "}
            + Add New Note
          </Button>
        </View>

        <View as={"nav"} marginTop="2.5rem">
          <ul>
            <li className={href === "/notes" && "active-nav"}>
              <Link to="/notes">
                <Icon as={StickyNote2Icon} color="#051922" /> All Notes
              </Link>
            </li>
            <li className={href === "/favourites" && "active-nav"}>
              <Link to="/favourites">
                <Icon as={FavoriteBorderIcon} color="#051922" /> Favourites
              </Link>
            </li>
            <li className={href === "/notefication" && "active-nav"}>
              <Link to="/notifications">
                <Icon as={NotificationsNoneIcon} color="#051922" /> Notifcations
              </Link>
            </li>
            <li className={href === "/archive" && "active-nav"}>
              <Link to="/archive">
                <Icon as={ArchiveIcon} color="#051922" /> Archive
              </Link>
            </li>
            <li>
              <Icon as={DarkModeIcon} color="#051922" /> Dark Mode
            </li>
          </ul>
        </View>
      </div>
      <div className="user-icon">
        <Flex justifyContent={"space-between"} alignItems="center">
          <SearchField
            placeholder="Search notes"
            boxShadow={"medium"}
            size="small"
          />

          <Flex alignItems="center">
            <Link
              to={"/settings"}
              style={{ marginRight: "1rem", display: "inline-block" }}
            >
              <Icon as={SettingsIcon} color="#051922" />
            </Link>
            <Flex
              justifyContent={"space-between"}
              gap="5px"
              alignItems="center"
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
          </Flex>
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
