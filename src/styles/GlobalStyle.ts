import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0;
    font-family: ${({theme}) => theme.fonts.title};
    background-color: ${({theme}) => theme.colors.black};
    color: white;
    text-align: center;
  }
  a{
    color: white;
    text-decoration: none;
  }
  input{
    border: 0;
  }
  button{
    background-color: #00000000;
    border: 0;
    color: white;
  }
`;

export default GlobalStyle;