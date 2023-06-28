import logo from "../../images/logo.png";
import { Button, ImagemLogo, InputSpace, Nav } from "./NavbarStyled";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputSpace>
        <ImagemLogo src={logo} alt="Logo Breaking News" />
        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
