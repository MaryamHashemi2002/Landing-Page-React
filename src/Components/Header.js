import React from "react";
import { StyledHeader, Nav, Logo , Image} from "./Styles/HeaderStyled";
import { Container } from "./Styles/ContainerStyled";
import { Button } from "./Styles/ButtonStyle";
import { Flex } from "./Styles/FlexStyle";



const Header = () => {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>try it free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build the community your fans will love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <button bg="#ff099" color="#fff">
              Get started for free
            </button>
            </div>
            <Image src="./images/illustration-mockups.svg" alt=""/>
          
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
