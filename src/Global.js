import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  
  body {
    align-items: center;
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    display: flex;
    font-family: 'Varela Round', sans-serif;
    height: auto;
    justify-content: center;
    text-rendering: optimizeLegibility;
    overflow: auto;
  }
  `