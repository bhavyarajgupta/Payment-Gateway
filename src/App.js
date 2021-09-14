import "./App.css";
import logo from "./logo.svg";
import { About } from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import background1 from "./images/bck2.jpg";
import background2 from "./images/bck3.jpg";
import background3 from "./images/bck4.jpg";
import img4 from "./images/L.png";
import img6 from "./images/f.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";
import img9 from "./images/img9.png";
import i1 from "./images/bck1.jpg";
import i3 from "./images/bck7.jpg";
import i2 from "./images/bck6.jpg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
let jumbotron = {
  padding: "4rem 2rem",
  marginBottom: "2rem",
  backgroundColor: "var(--bs-light)",
  borderRadius: ".3rem",
};
let wow1 = {
  marginLeft: "1250px",
};
let style = {
  minWidth: "400px",
  minHeight: "400px",
};

let light = {
  color: "white",
};
let size = {
  width: "50px",
  height: "50px",
  padding: "5px",
};

let margin = {
  marginTop: "20px",
  marginBottom: "20px",
};

let margin1 = {
  marginLeft: "20px",
};

let margin2 = {
  margin: "10px",
};

let wow = {
  paddingLeft: "20px",
  color: "white",
};

let hey = {
  padding: "20px",
};

let hey1 = {
  paddingRight: "10px",
  paddingLeft: "10px",
};

let color = {
  backgroundImage:
    "linear-gradient(to left top, #f3d5c0, #edc5c0, #ddb9c3, #c6b0c4, #aaa8c0, #99a0b8, #8999af, #7a91a4, #6f889c, #657f94, #5a768c, #506d84)",
};
function App() {
  return (
    <>
      <Router>
        <div style={color} className="App">
          <ReactBootStrap.Navbar bg="dark" expand="lg">
            <ReactBootStrap.Navbar.Brand as={Link} style={wow} to="/">
              SAVE WILDCATS ORGANISATION
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
            <ReactBootStrap.Navbar.Collapse
              id="navbarScroll"
              className="justify-content-end me-auto"
              style={{ paddingRight: "10px" }}
            >
              <ReactBootStrap.Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <ReactBootStrap.Nav.Link as={Link} style={wow} to="/about">
                  About
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Button
                style={margin1}
                className="float-right"
                href="https://rzp.io/l/nrFghKz8"
                variant="outline-success"
              >
                Donate
              </ReactBootStrap.Button>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
          <Switch>
            <Route exact path="/">
              {
                <>
                  <div>
                    <ReactBootStrap.Carousel>
                      <ReactBootStrap.Carousel.Item interval={1000}>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={background1}
                          alt="First slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>Save Wildcats</h3>
                          <p style={{ style: "black" }}>
                            Divided by intelligence, united by a heartbeat –
                            Save Wildcats.
                          </p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                      <ReactBootStrap.Carousel.Item interval={500}>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={background2}
                          alt="Second slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>Stand for Animal Rights!</h3>
                          <p style={{ style: "black" }}>
                            Look at the tigers mighty and strong, killing them
                            for their fur is very wrong.
                          </p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                      <ReactBootStrap.Carousel.Item>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={background3}
                          alt="Third slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3 style={{ color: "black" }}>Respect animals</h3>
                          <p>Don't be wild to tigers, help save them!</p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                    </ReactBootStrap.Carousel>
                  </div>
                  <div style={jumbotron} bg="light">
                    <h1 className="display-4">Our Vision</h1>
                    {}
                    <p>
                      At SAVE WILDCATS ORGANISATION we are dedicated to the
                      conservation and protection of wild lion populations. You
                      may be surprised to learn about the many threats to lions,
                      especially when you discover how, despite well intentioned
                      efforts, approximately 93% of wild lion populations have
                      been killed or died in the last 50 years. The usual way of
                      conserving animals has not worked so well which is why
                      SAVE WILDCATS ORGANISATION was created. We are doing
                      things differently by working directly with local
                      communities, leaders and politicians in Africa as well as
                      key decision makers and politicians in India to put in
                      place sustainable policies to ensure that lions don't
                      disappear for ever.{" "}
                    </p>
                    <hr className="my-4" />
                    <a
                      className="btn btn-success btn-lg"
                      href="https://rzp.io/l/nrFghKz8"
                      role="button"
                    >
                      Donate
                    </a>
                  </div>

                  <ReactBootStrap.CardGroup style={hey}>
                    <ReactBootStrap.Card style={(hey, margin2)}>
                      <ReactBootStrap.Card.Img variant="top" src={i3} />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                          Critical Medical Care
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                          You deserve a world where nature is in balance, where
                          we all have fresh air, clean water and live free. You
                          don’t have to be plagued by a climate spiraling out of
                          control; a world where there are wars due to unequal
                          access or pandemics like you are currently trying to
                          survive. Big Cat Rescue sees the world you desire and
                          deserve and we need you to join as a freedom fighter
                          on the frontlines of this change. Join us!
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                          href="https://lionaid.org/"
                          variant="primary"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>

                    <ReactBootStrap.Card style={(hey, margin2)}>
                      <ReactBootStrap.Card.Img variant="top" src={i1} />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                          Lion Conservation
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                          World Lion Day is a day to raise awareness of the real
                          issues facing one of nature’s most majestic predators.
                          Learn more about wild lions in Africa, the
                          conservation challenges they face, and how Wild
                          Tomorrow Fund is helping. Wild Tomorrow Fund
                          ecologist, Clinton Wright, spent five years at Tembe
                          Elephant Park monitoring wild lions (and wild dogs),
                          learning to understand each individual and the big
                          picture issues for wild lion management in fenced
                          reserves. Wild Tomorrow Fund is a member of the Lion
                          Management Forum of South Africa.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                          href="https://www.wildtomorrowfund.org/blog/2018/8/10/wild-lion-conservation"
                          variant="primary"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>

                    <ReactBootStrap.Card style={(hey, margin2)}>
                      <ReactBootStrap.Card.Img variant="top" src={i2} />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                          Habitat For Lions
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                          Stars of movies and characters in books, lions are at
                          the top of the food chain. The Swahili word for lion,
                          simba, also means "king," "strong," and "aggressive."
                          The word lion has similar meaning in our vocabulary.
                          If you call someone lionhearted, you’re describing a
                          courageous and brave person. If you lionize someone,
                          you treat that person with great interest or
                          importance.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                          variant="primary"
                          href="https://animals.sandiegozoo.org/animals/lion"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                  </ReactBootStrap.CardGroup>

                  <section>
                    <div className="text-center">
                      <h2>Connect Us</h2>
                      <div style={margin}>
                        <a href="https://www.linkedin.com/signup">
                          <img style={size} src={img4} />
                        </a>
                        <a style={size} href="https://www.facebook.com/">
                          <img style={size} src={img7} />
                        </a>
                        <a href="https://twitter.com/?lang=en">
                          <img style={size} src={img8} />
                        </a>
                        <a href="https://www.youtube.com/">
                          <img style={size} src={img9} />
                        </a>
                      </div>
                    </div>
                  </section>
                </>
              }
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>

          <footer className="bg-dark">
            <div className="container-fluid padding">
              <div className="row text-center">
                <div className="col-12">
                  <hr className="light" style={light} />
                  <h5 style={light}>Contact Us</h5>
                  <hr className="light" style={light} />
                  <p style={light}>(+91) 9999999999</p>
                  <p style={light}>Contact@savewildcat.org</p>
                </div>

                <div className="col-12">
                  <hr className="light-100" style={light} />
                  <h5 style={light}>&copy; SaveWildCat.org</h5>
                  <h6 style={light}>Developer Contact</h6>
                  <a
                    style={hey1}
                    href="https://www.linkedin.com/in/bhavya-raj-gupta"
                  >
                    Linkedin
                  </a>
                  <a style={hey1} href="https://github.com/bhavyarajgupta">
                    Github
                  </a>
                  <p style={light}>
                    Disclamer : this website is just for visual representation
                    and there is no intention to strike copyright, if you are
                    the publisher and want to remove coprighted content contact
                    Developer.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
