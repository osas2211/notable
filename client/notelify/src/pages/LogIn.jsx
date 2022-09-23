import { Flex } from "@aws-amplify/ui-react"
import React from "react"
import { AuthForm } from "../ui-components/AuthForm"
import loginImg from "../images/signin.png"

export const LogIn = () => {
  return (
    <div className="login">
      <Flex
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <AuthForm
          variant={"login"}
          header={"Welcome back"}
          subheader={"Jot down your ideas and thoughts within seconds"}
        />
        <div className="login-img">
          <img src={loginImg} alt="Login Image" />
        </div>
      </Flex>
    </div>
  )
}
