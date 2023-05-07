import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus{
    outline: none;
    box-shadow: 0 0 0 2px ${({theme}) => theme.colors["green-500"]};
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${({theme}) => theme.colors["gray-800"]};
    color: ${({theme}) => theme.colors["gray-100"]};
  }

  
`;

export { GlobalStyle };