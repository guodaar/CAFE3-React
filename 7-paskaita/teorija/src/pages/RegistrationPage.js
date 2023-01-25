import React from "react";
import styled from "styled-components";
import image from "../assets/snow-sport.jpg";
import Input from "../components/registration/Input";
import Button from "../components/registration/Button";
import { socials } from "../const/socials";

const MainContainer = styled.div`
  width: 60vw;
  display: flex;
  margin: 0 auto;
  height: 80vh;
  background-color: white;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 5vw;
  text-align: center;
`;

const RightContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 40px;
`;

const Title = styled.h2`
  font-size: 1.6rem;
`;

const TitleRight = styled.h1`
  font-size: 2rem;
  color: white;
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 0.7rem;
  color: grey;
  font-weight: 600;
`;

const RegistrationPage = () => {
  const props = {
    textColor: "white",
    buttonColor: "black",
    hoverColor: "#434343",
  };
  return (
    <MainContainer>
      <LeftContainer>
        <Title>Welcome back</Title>
        <Text>Please enter your details.</Text>
        <Input placeholder="Enter your email" />
        <Button
          buttonColor={props.buttonColor}
          textColor={props.textColor}
          hoverColor={props.hoverColor}
        >
          Continue
        </Button>
        {socials.map((social) => (
          <Button>Continue with {social.name}</Button>
        ))}
      </LeftContainer>
      <RightContainer imgUrl={image}>
        <TitleRight>Untitled UI</TitleRight>
      </RightContainer>
    </MainContainer>
  );
};

export default RegistrationPage;
