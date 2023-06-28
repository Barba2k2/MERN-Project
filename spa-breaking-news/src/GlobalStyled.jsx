import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
  
  * {
    margin: 0;
    padding: 0;
    font-family: Newsreader, Arial;
  }
  
  html {
    width: auto;
  }
  
  body {
    max-width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
  }
`;


