import React from "react"
import { View, Heading, Flex, Button } from "@aws-amplify/ui-react"
import avatar from "../images/dp.jpg"
import "../styles/notification.css"

export const Notifications = () => {
  const arr = [0, 1]
  return (
    <View as="div">
      <Heading level={5} margin="2rem 0 1rem 0" fontWeight={"medium"}>
        Notifications
      </Heading>
      <View as="div">
        {arr.map((data) => (
          // render invitations
          <View as="div" className="notification">
            <Flex alignItems="center">
              <div className="notification-img">
                <img src={avatar} alt="Note Owner" />
              </div>
              <span>
                User<span style={{ fontWeight: 500 }}> osas2211 </span> invited
                you to collaborate on Note:{" "}
                <span style={{ fontWeight: 500 }}>Deployment of site</span>
              </span>
            </Flex>

            <div>
              <Button
                variation="primary"
                size="small"
                backgroundColor={"#4DA167"}
                color="#fff"
                border={"none"}
                marginRight="0.5rem"
              >
                Accept
              </Button>
              <Button
                backgroundColor={"#F03A47"}
                color="#fff"
                border={"none"}
                size="small"
              >
                Reject
              </Button>
            </div>
          </View>
        ))}
      </View>
    </View>
  )
}
