import { Container, Navbar } from "react-bootstrap";
const MyNavBar = () => {
  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            Sunil Ratna Bajracharya
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end gap-2">
            <Navbar.Text className="text-white">Contact</Navbar.Text>
            <Navbar.Text className="text-white">About us</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavBar;
