import React from "react"
import "../styles/authForm.css"
import Notelifylogo3 from "./Notelifylogo3"
import { TextField, Flex, CheckboxField, Button } from "@aws-amplify/ui-react"
import { Link } from "react-router-dom"

export const AuthForm = ({ header, subheader, variant }) => {
  return (
    <div className="auth-form">
      <div style={{ margin: "2.5rem 0" }}>
        <Link to={"/"}>
          <Notelifylogo3 />
        </Link>
      </div>
      <div>
        <h2>{header}</h2>
        <p style={{ margin: "0rem 0" }}>
          <small>{subheader}</small>
        </p>
      </div>

      {/* Login Form */}
      {variant === "login" && (
        <form>
          <Flex direction={"column"}>
            <TextField
              placeholder="example@notelify.com"
              label="Email"
              type={"email"}
              boxShadow={"medium"}
              marginBottom="0.8rem"
              required
            />
            <TextField
              label="password"
              type={"password"}
              boxShadow={"medium"}
              required
            />
          </Flex>
          <Flex
            direction={"row"}
            marginTop="1.5rem"
            justifyContent={"space-between"}
          >
            <CheckboxField label="Remember me" name="remember" value="yes" />
            <Link
              to={"/forget-password"}
              style={{ textDecoration: "underline", color: "#0DA2E7" }}
            >
              Forgot password?
            </Link>
          </Flex>

          <Button
            type="submit"
            variation="primary"
            width={"100%"}
            margin="2.3rem 0 0.8rem 0"
          >
            Sign In
          </Button>
          <p style={{ textAlign: "center" }}>
            Don't have an account?
            <Link
              to={"/signup"}
              style={{
                textDecoration: "underline",
                color: "#0DA2E7",
                padding: "0.5rem",
              }}
            >
              Sign up for free
            </Link>
          </p>
        </form>
      )}
      {/* Sign Up */}
      {variant === "signup" && (
        <form>
          <Flex
            direction={"column"}
            justifyContent="space-between"
            // alignItems={"flex-start"}
          >
            <TextField
              placeholder="John Doe"
              label="Full Name"
              type={"text"}
              boxShadow="medium"
              marginBottom="0.8rem"
            />
            <TextField
              placeholder="example@notelify.com"
              label="Email"
              type={"email"}
              boxShadow={"medium"}
              marginBottom="0.8rem"
              required
            />
            <TextField
              placeholder="John247"
              label="Username"
              type={"text"}
              boxShadow="medium"
              marginBottom="0.8rem"
            />
            <TextField
              label="password"
              type={"password"}
              boxShadow={"medium"}
              required
            />
          </Flex>
          <Button
            type="submit"
            variation="primary"
            width={"100%"}
            margin="2.3rem 0 0.8rem 0"
          >
            Sign Up
          </Button>
          <p style={{ textAlign: "center" }}>
            Already have an account?
            <Link
              to={"/login"}
              style={{
                textDecoration: "underline",
                color: "#0DA2E7",
                padding: "0.5rem",
              }}
            >
              Sign In
            </Link>
          </p>
        </form>
      )}
    </div>
  )
}
