import React, { Component } from "react";
// import the API from the utils
import API from "../utils/API";
// import the Grid components
import { Container, Row, Col } from "../components/Grid";
// import the jumbotron
import Jumbotron from "../components/Jumbotron";
// import the search bar
import SearchBar from "../components/SearchBar"

class Search extends Component { 
  
  state = {
    bookResults: [],
    bookSearch: ""
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size = "md-10">
          <Jumbotron>
            <h1>Search Books</h1>
          </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size = "md-10">
            <SearchBar
              name = "bookSearch"
              placeholder = "Search the Google API for a Book!"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
// end of the class Search

export default Search;