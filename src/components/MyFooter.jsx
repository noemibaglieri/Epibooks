import { Col, Container, Row } from "react-bootstrap";
import { Instagram, Linkedin, TwitterX } from "react-bootstrap-icons";

const MyFooter = function () {
  return (
    <Container>
      <Row xs={1} md={2} lg={4}>
        <Col>
          <h5>Follow us</h5>
          <Linkedin />
          <Instagram />
          <TwitterX />
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
