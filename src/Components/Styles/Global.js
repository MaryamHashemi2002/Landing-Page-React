import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
*{
    box-sizing:border-box;
}
body{
    background: ${({ theme }) => theme.colors.body};
    margin:0;
    font-size:1.15rem;
    color:hsl(192,100%,9%);
    font-family: 'Poppins', sans-serif;
}
p{
    opacity:0.6;
    line-height:1.5;
}

img{
    max-width:100%;
}
`;
