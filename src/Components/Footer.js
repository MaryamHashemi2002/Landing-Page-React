import React from "react";
import SocialIcon from "./SocialIcon";
import { Container } from "./Styles/ContainerStyled";
import { Flex } from "./Styles/FlexStyle";
import { StyledFooter } from "./Styles/FooterStyle";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo.svg" alt="" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About us</li>
            <li>What we do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>


          <SocialIcon/>
        </Flex>

        <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
