import React, { Component } from "react";
// import the API from the utils
import API from "../utils/API";
// import the Grid components
import { Container, Row, Col } from "../components/Grid";
// import the jumbotron
import Jumbotron from "../components/Jumbotron";

class Search extends Component { 
  // state will likely go here

  render() {
    return (
      <Container>
        <Row>
          <Col size = "md-12">
          <Jumbotron>
            <h1>Search Books</h1>
          </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}
// end of the class Search

export default Search;