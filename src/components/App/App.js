import React from "react";
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
import Image from "react-bootstrap/Image";

import GameList from "../GameList/GameList";
import TopNav from "../TopNav/TopNav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [
        {
          id: 1,
          imageSrc:
            "https://www.gamehackstudios.com/wp-content/uploads/2015/03/Trove-Free-Download-Full-Version-PC-Crack-1.jpg",
          name: "Game1",
          grade: "Quinto",
          topic: "Historia",
          suptopic: "H",
          category: "RPG",
          rating: 5,
          reviewCount: 20
        },
        {
          id: 1,
          imageSrc:
            "https://www.gamehackstudios.com/wp-content/uploads/2015/03/Trove-Free-Download-Full-Version-PC-Crack-1.jpg",
          name: "Game1",
          grade: "Quinto",
          topic: "Historia",
          suptopic: "H",
          category: "RPG",
          rating: 5,
          reviewCount: 20
        },
        {
          id: 1,
          imageSrc:
            "https://www.gamehackstudios.com/wp-content/uploads/2015/03/Trove-Free-Download-Full-Version-PC-Crack-1.jpg",
          name: "Game1",
          grade: "Quinto",
          topic: "Historia",
          suptopic: "H",
          category: "RPG",
          rating: 5,
          reviewCount: 20
        },
        {
          id: 1,
          imageSrc:
            "https://www.gamehackstudios.com/wp-content/uploads/2015/03/Trove-Free-Download-Full-Version-PC-Crack-1.jpg",
          name: "Game1",
          grade: "Quinto",
          topic: "Historia",
          suptopic: "H",
          category: "RPG",
          rating: 5,
          reviewCount: 20
        },
        {
          id: 1,
          imageSrc:
            "https://www.gamehackstudios.com/wp-content/uploads/2015/03/Trove-Free-Download-Full-Version-PC-Crack-1.jpg",
          name: "Game1",
          grade: "Quinto",
          topic: "Historia",
          suptopic: "H",
          category: "RPG",
          rating: 5,
          reviewCount: 20
        },
        {
          id: 1,
          imageSrc:
            "https://www.gamehackstudios.com/wp-content/uploads/2015/03/Trove-Free-Download-Full-Version-PC-Crack-1.jpg",
          name: "Game1",
          grade: "Quinto",
          topic: "Historia",
          suptopic: "H",
          category: "RPG",
          rating: 5,
          reviewCount: 20
        },
        {
          id: 1,
          imageSrc:
            "https://www.gamehackstudios.com/wp-content/uploads/2015/03/Trove-Free-Download-Full-Version-PC-Crack-1.jpg",
          name: "Game1",
          grade: "Quinto",
          topic: "Historia",
          suptopic: "H",
          category: "RPG",
          rating: 5,
          reviewCount: 20
        },
        {
          id: 1,
          imageSrc:
            "https://www.gamehackstudios.com/wp-content/uploads/2015/03/Trove-Free-Download-Full-Version-PC-Crack-1.jpg",
          name: "Game1",
          grade: "Quinto",
          topic: "Historia",
          suptopic: "H",
          category: "RPG",
          rating: 5,
          reviewCount: 20
        },
        {
          id: 1,
          imageSrc:
            "https://www.gamehackstudios.com/wp-content/uploads/2015/03/Trove-Free-Download-Full-Version-PC-Crack-1.jpg",
          name: "Game1",
          grade: "Quinto",
          topic: "Historia",
          suptopic: "H",
          category: "RPG",
          rating: 5,
          reviewCount: 20
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />

        <TopNav />

        <Container>
          <div style={{ marginBottom: 0 }}>
            <Row>
              <Col sm={3} style={{ background: "lightblue" }}>
                <Image src={require("./logomep.png")} fluid />
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      className="Grade"
                      as={Card.Header}
                      style={{ background: "black", color: "white" }}
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
                                Definición y su importancia en la vida cotidiana
                                de los Estudios Sociales.
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
                                Regiones socioeconómicas de Costa Rica:
                                ubicación y características.
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
                                Definición y su importancia en la vida cotidiana
                                de la Educación Cívica.
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
                      style={{ background: "black", color: "white" }}
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
                                Impactos culturales, demográficos y sociales de
                                la conquista española.
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
                      style={{ background: "black", color: "white" }}
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
                                La Campaña Nacional en la época de la
                                independencia.
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
                                Medidas básicas para el manejo de las redes
                                sociales
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
              <Col lg={9} style={{ marginTop: "10%" }}>
                <div>
                  <h4>
                    LA IMPORTANCIA DE ENSEÑAR Y APRENDER ESTUDIOS SOCIALES El
                    conjunto de los Estudios Sociales en la Educación Básica
                    tiene como objetivo ofrecer a los estudiantes una visión
                    general de la sociedad donde viven; su ubicación y
                    desarrollo en el espacio; su origen y evolución histórica;
                    su papel en el marco de la Geografía y la Historia del
                    mundo, especialmente de América Latina. También se orienta a
                    desarrollar destrezas que les permitan enfrentar otros
                    campos del aprendizaje, los desafíos de la producción y el
                    emprendimiento; así como su identificación con Costa Rica,
                    su patria, y el reconocimiento de los valores de la
                    democracia y la ciudadanía
                  </h4>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
