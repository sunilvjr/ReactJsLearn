import { Container, Row, Col, Card } from "react-bootstrap";

const Whyme = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="border-0 text-center">
              <Card.Body>
                <Card.Title>10+ years of experience</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="border-0 text-center">
              <Card.Body>
                <Card.Title>10+ years of experience</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="border-0 text-center">
              <Card.Body>
                <Card.Title>10+ years of experience</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Whyme;
