import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.5s;
 }
 body{
    font-family: 'Nunito Sans';
    background-color: ${props => props.theme.Background};
    color: ${props => props.theme.color};
   a{
      color: ${props => props.theme.color};
   }
   .color, a, h1, h2, span{
      color: ${props => props.theme.color};
   }
   .element{
      background-color: ${props => props.theme.elements};
      box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.1);;
   }
 }
`