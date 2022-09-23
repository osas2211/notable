import React from "react"
import { Flex } from "@aws-amplify/ui-react"
import { AuthForm } from "../ui-components/AuthForm"
import signupImg from "../images/signup.png"

export const SignUp = () => {
  return (
    <div>
      <div className="signup">
        <Flex
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <AuthForm
            variant={"signup"}
            header={"Create an account"}
            subheader={"Start your journey with us for free"}
          />
          <div className="login-img">
            <img src={signupImg} alt="Signup Image" />
          </div>
        </Flex>
      </div>
    </div>
  )
}
