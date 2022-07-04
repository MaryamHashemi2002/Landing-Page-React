import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
}
body{
    background: ${({theme}) => theme.colors.body};
    margin:0;
    font-size:1.15rem;
    color:hsl(192,100%,9%);

}
p{
    opacity:0.6;
    line-height:1.5;
}

img{
    max-width:100%;
}
`;


