import { Badge, Container, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/assets/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Bootstrap Testing
          </Navbar.Brand>
        </Container>
      </Navbar>
      Bootstrap testing...{" "}
      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
    </div>
  );
}

export default App;
