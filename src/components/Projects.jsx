import React from "react";
import { Card, CardDeck } from "react-bootstrap";

const Projects = (props) => {
  return (
    <>
      <div className="project-title">
        <h1>Projects</h1>
      </div>
      <div className="bg">
        <CardDeck
          style={{ marginLeft: "5%", width: "90%" }}
          className="cardDeck"
        >
          <Card>
            <Card.Img variant="top" src="images/1618592549214.png" />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> 
          </Card>

          <Card>
            <Card.Img variant="top" src="images/1618593647233.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="images/logo12.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </>
  );
};

export default Projects;
