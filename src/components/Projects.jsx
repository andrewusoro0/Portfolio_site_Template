import React from "react";
import { Card, CardDeck } from "react-bootstrap";

const Projects = () => {
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
              <Card.Title>World News</Card.Title>
              <Card.Text>
                This website was built to display latest and most popular news
                and with React.js,Express.js and with the support of News API
                using Express.js request GET to receive data from the Api and
                render the website.
              </Card.Text>
              <Card.Text
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://github.com/andrewusoro0/News-Feed-API",
                    "_blank"
                  )
                }
              >
                Source code
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <p
                className="text-muted"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://elegant-mayer-8afbdf.netlify.app/",
                    "_blank"
                  )
                }
              >
                View website
              </p>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src="images/1618593331143.png" />
            <Card.Body>
              <Card.Title>Ecommerce Shop</Card.Title>
              <Card.Text>
                A Ecommerce site that one can order an item form and pay really
                easy this website is very much user friendly with the help of
                Commerce.js,React.js and stripe.
              </Card.Text>
              <Card.Text
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://github.com/andrewusoro0/Ecommerce",
                    "_blank"
                  )
                }
              >
                Source Code
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <p
                className="text-muted"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://ecommerce-free.netlify.app", "_blank")
                }
              >
                View website
              </p>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img variant="top" src="images/logo12.png" />
            <Card.Body>
              <Card.Title>Picture Gallery</Card.Title>
              <Card.Text>
                This website is meant to display images of best quality and the
                photographers name. Bulit with React.js and the help of Unsplash
                API with the search engine
              </Card.Text>
              <Card.Text
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://github.com/andrewusoro0/GalleryApp",
                    "_blank"
                  )
                }
              >
                Source Code
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <p
                className="text-muted"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://galleryapp.netlify.app/", "_blank")
                }
              >
                View website
              </p>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </>
  );
};

export default Projects;
