
import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar";
import { Container } from "../Container";


export const Layout = ({ children }) => {
  return (
    <Container>
      <AppBar />
      <Outlet/>
    </Container>
  );
};