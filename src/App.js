import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import AccordionToggle from "react-bootstrap/AccordionToggle";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <div>
          <Col>
            <Accordion>
              <Card>
                <Accordion.Toggle
                  className="Grade"
                  as={Card.Header}
                  eventKey="0"
                >
                  Quarto
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        className="Topic"
                        as={Card.Header}
                        eventKey="0"
                      >
                        Historia
                      </Accordion.Toggle>
                      <Accordion.Collapse className="Subtopic" eventKey="0">
                        <Card.Body>
                          <a href="">
                            Definición y su importancia en la vida cotidiana de
                            los Estudios Sociales.
                          </a>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle
                        className="Topic"
                        as={Card.Header}
                        eventKey="1"
                      >
                        Geografia
                      </Accordion.Toggle>
                      <Accordion.Collapse className="Subtopic" eventKey="1">
                        <Card.Body>
                          <a href="">
                            Ubicación hemisférica y continental del país.
                          </a>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle
                        className="Topic"
                        as={Card.Header}
                        eventKey="2"
                      >
                        Sociologia
                      </Accordion.Toggle>
                      <Accordion.Collapse className="Subtopic" eventKey="2">
                        <Card.Body>
                          <a href="">
                            Regiones socioeconómicas de Costa Rica: ubicación y
                            características.
                          </a>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle
                        className="Topic"
                        as={Card.Header}
                        eventKey="3"
                      >
                        Formacion ciudadana
                      </Accordion.Toggle>
                      <Accordion.Collapse className="Subtopic" eventKey="3">
                        <Card.Body>
                          <a href="">
                            Definición y su importancia en la vida cotidiana de
                            la Educación Cívica.
                          </a>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  className="Grade"
                  as={Card.Header}
                  eventKey="1"
                >
                  Quinto
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        className="Topic"
                        as={Card.Header}
                        eventKey="0"
                      >
                        Historia
                      </Accordion.Toggle>
                      <Accordion.Collapse className="Subtopic" eventKey="0">
                        <Card.Body>
                          <a href="">
                            Etnias de Costa Rica: nombres y ubicación
                            geográfica.
                          </a>
                        </Card.Body>
                      </Accordion.Collapse>
                      <Accordion.Collapse className="Subtopic" eventKey="0">
                        <Card.Body>
                          <a href="">
                            Arte de los pueblos originarios de Costa Rica.
                          </a>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle
                        className="Topic"
                        as={Card.Header}
                        eventKey="1"
                      >
                        Sociologia
                      </Accordion.Toggle>
                      <Accordion.Collapse className="Subtopic" eventKey="1">
                        <Card.Body>
                          <a href="">
                            Impactos culturales, demográficos y sociales de la
                            conquista española.
                          </a>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle
                        className="Topic"
                        as={Card.Header}
                        eventKey="2"
                      >
                        Formacion ciudadana
                      </Accordion.Toggle>
                      <Accordion.Collapse className="Subtopic" eventKey="2">
                        <Card.Body>
                          <a href="">
                            Primera Constitución Política de Costa Rica: El
                            Pacto de Concordia.
                          </a>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  className="Grade"
                  as={Card.Header}
                  eventKey="2"
                >
                  Sexto
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        className="Topic"
                        as={Card.Header}
                        eventKey="0"
                      >
                        Historia
                      </Accordion.Toggle>
                      <Accordion.Collapse className="Subtopic" eventKey="0">
                        <Card.Body>
                          <a href="">
                            La Campaña Nacional en la época de la independencia.
                          </a>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle
                        className="Topic"
                        as={Card.Header}
                        eventKey="1"
                      >
                        Sociologia
                      </Accordion.Toggle>
                      <Accordion.Collapse className="Subtopic" eventKey="1">
                        <Card.Body>
                          <a href="">
                            Medidas básicas para el manejo de las redes sociales
                          </a>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle
                        className="Topic"
                        as={Card.Header}
                        eventKey="2"
                      >
                        Formacion ciudadana
                      </Accordion.Toggle>
                      <Accordion.Collapse className="Subtopic" eventKey="2">
                        <Card.Body>
                          <a href="">
                            Seguridad Vial: Peatones y pasajeros: conductas
                            responsables.
                          </a>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </div>
      </Container>
    </div>
  );
}

export default App;
