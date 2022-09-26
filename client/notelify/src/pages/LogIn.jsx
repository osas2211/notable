import { Flex } from "@aws-amplify/ui-react"
import React, { useEffect, useState } from "react"
import { AuthForm } from "../ui-components/AuthForm"
import loginImg from "../images/signin.png"
import { useLoginMutation } from "../redux/services/auth"
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const LogIn = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const [login, { data, isError, isLoading, isSuccess, error }] =
    useLoginMutation()
  useEffect(() => {
    if (isSuccess) {
      toast.success("Log in successful!", {
        position: toast.POSITION.TOP_CENTER,
      })
      window.localStorage.setItem("token", JSON.stringify(data.user.token))
      setTimeout(() => {
        navigate("/notes")
      }, 2000)
    }
    if (isError) {
      console.log(error)
      toast.error(error.data.message, {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }, [isSuccess, isError])
  const onLogin = (e) => {
    e.preventDefault()
    login({ userName, password })
  }
  return (
    <div className="login">
      <ToastContainer />
      <Flex
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <AuthForm
          variant={"login"}
          header={"Welcome back"}
          subheader={"Jot down your ideas and thoughts within seconds"}
          userNameLogin={userName}
          setUserNameLogin={setUserName}
          passwordLogin={password}
          setPasswordLogin={setPassword}
          submitLogin={onLogin}
        />
        <div className="login-img">
          <img src={loginImg} alt="Login Image" />
        </div>
      </Flex>
    </div>
  )
}
