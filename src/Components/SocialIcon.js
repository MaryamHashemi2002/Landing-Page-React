import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons//fa";
import { StyledSocialIcon } from "./Styles/SocialIconStyle";

const SocialIcon = () => {
  return (
    <StyledSocialIcon>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://fasebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcon>
  );
};

export default SocialIcon;
