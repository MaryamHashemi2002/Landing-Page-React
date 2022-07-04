import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import { Container } from "./Components/Styles/ContainerStyled";
import {GlobalStyles} from "./Components/Styles/Global";



const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
}

function App() {
  return (
    <ThemeProvider theme = {theme} >
      <>
      <GlobalStyles/>
        <Header />
        <Container>
          <h1>hello world</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
