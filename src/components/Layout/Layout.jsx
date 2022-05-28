import { Container } from "../Container";
import { AppBar } from "../AppBar";


export const Layout = ({ children }) => {
  return (
    <Container>
      <AppBar />
      {children}
    </Container>
  );
};