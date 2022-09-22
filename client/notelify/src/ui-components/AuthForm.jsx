/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import XIcon from "./XIcon";
import HideIcon from "./HideIcon";
export default function AuthForm(props) {
  const { title, overrides, ...rest } = props;
  const donthaveanaccountQuestionMarkSignupOnClick = useNavigateAction({
    type: "url",
    url: "/sign-up",
  });
  return (
    <Flex
      gap="42px"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AuthForm")}
    >
      <Flex
        gap="8px"
        direction="column"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Headline")}
      >
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(52,64,84,1)"
          textTransform="capitalize"
          lineHeight="46.875px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.25px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="welcome Back"
          {...getOverrideProps(overrides, "welcome Back")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(102,112,133,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Please fill your detail to access your account."
          {...getOverrideProps(
            overrides,
            "Please fill your detail to access your account."
          )}
        ></Text>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Email101568")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="500"
          color="rgba(52,64,84,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Email"
          {...getOverrideProps(overrides, "Email101140")}
        ></Text>
        <View
          width="360px"
          height="44px"
          shrink="0"
          overflow="hidden"
          position="relative"
          border="1px SOLID rgba(208,213,221,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 3101141")}
        >
          <Flex
            gap="115px"
            position="absolute"
            top="10px"
            left="14px"
            alignItems="center"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 4101148")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(102,112,133,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="debra.holt@example.com"
              {...getOverrideProps(overrides, "debra.holt@example.com")}
            ></Text>
            <XIcon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "X Icon")}
            ></XIcon>
          </Flex>
        </View>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Password101150")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="500"
          color="rgba(52,64,84,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Password"
          {...getOverrideProps(overrides, "Password101151")}
        ></Text>
        <View
          width="360px"
          height="44px"
          shrink="0"
          overflow="hidden"
          position="relative"
          border="1px SOLID rgba(208,213,221,1)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 3101152")}
        >
          <Flex
            gap="236px"
            position="absolute"
            top="10px"
            left="14px"
            alignItems="center"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 4101153")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(102,112,133,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="••••••••"
              {...getOverrideProps(
                overrides,
                "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              )}
            ></Text>
            <HideIcon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Hide Icon")}
            ></HideIcon>
          </Flex>
        </View>
      </Flex>
      <Flex
        gap="113px"
        width="fit-content"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Remember me101170")}
      >
        <Flex
          gap="8px"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="20px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 8")}
        >
          <View
            width="16px"
            height="16px"
            shrink="0"
            overflow="hidden"
            position="relative"
            border="1px SOLID rgba(208,213,221,1)"
            borderRadius="4px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 7")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(52,64,84,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Remember me"
            {...getOverrideProps(overrides, "Remember me101167")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="500"
          color="rgba(84,41,255,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Forgot Password?"
          {...getOverrideProps(overrides, "Forgot Password?")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="8px"
        padding="12px 154px 12px 154px"
        backgroundColor="rgba(45,156,219,1)"
        {...getOverrideProps(overrides, "Sign in101171")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign in"
          {...getOverrideProps(overrides, "Sign in101172")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="360px"
        height="21px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Don’t have an account? Sign up"
        onClick={() => {
          donthaveanaccountQuestionMarkSignupOnClick();
        }}
        {...getOverrideProps(overrides, "Don\u2019t have an account? Sign up")}
      ></Text>
    </Flex>
  );
}
