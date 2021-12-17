import { transitionAll } from "@/styles/transitions";
import breakpoints from "@/styles/breakpoints";

const { default: styled } = require("styled-components");

export const BitmojiContainer = styled.div`
  position: relative;
  display: none;
  max-width: 150px;
  min-width: 110px;
  @media ${breakpoints.media_screens.portrait_tablet} {
    display: block;
    margin-bottom: 20px;
    align-self: center;
  }
`;

export const ContactHead = styled.h2`
  font-size: clamp(30px, 20px + 2vw, 60px);
  font-weight: 700;
`;

export const ContactSummary = styled.p`
  line-height: 1.4;
  font-size: 1rem;
  @media ${breakpoints.media_screens.landscape_tablet} {
    font-size: 0.8rem;
  }
`;

export const ContactInterest = styled.h5`
  color: ${(props) => props.theme.colors.text_secondary};
  font-family: ${(props) => props.theme.fonts.mono};
  font-weight: 400;
  font-size: 0.9rem;
  @media ${breakpoints.media_screens.landscape_tablet} {
    font-size: 0.8rem;
  }
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 600px;
  margin: 0px auto 50px;
  padding: 60px 0px;
`;

export const ContactButton = styled.a`
  align-self: center;
  margin-top: 1em;
  padding: 1em;
  line-height: 1;
  border-radius: 3px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.text_secondary};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.text_secondary};
  transition: ${transitionAll};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.hover_button};
  }
`;