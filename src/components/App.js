import { Container, Row, Col } from "reactstrap";

import Tabs from "./Tabs";

function App() {
  return (
    <>
      <header
        style={{
          padding: "20px 0",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h1
                style={{
                  margin: "0",
                  fontSize: "24px",
                  textAlign: "center",
                }}
              >
                Form for adding an ad
              </h1>
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        <Container>
          <Row>
            <Col>
              <Tabs />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;
