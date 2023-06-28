import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 8px;
    background-color: ${({theme})=> theme.colors.black};
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: ${({theme})=> theme.colors.red};
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({theme})=> theme.colors.orange};
  }
  body {
    margin: 0 auto;
    padding: 0;
    font-family: ${({theme}) => theme.fonts.title};
    background-color: ${({theme}) => theme.colors.black};
    color: white;
    text-align: center;
    overflow-x: hidden;
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