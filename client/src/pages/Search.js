import React, { Component } from "react";
// import the API from the utils
import API from "../utils/API";
// import the Grid components
import { Container, Row, Col } from "../components/Grid";
// import the jumbotron
import Jumbotron from "../components/Jumbotron";
// import the search bar
import SearchBar from "../components/SearchBar";
// import the button component
import Button from "../components/Button";
// import the Results List related components
import { ResultsList, ResultsListItem } from "../components/ResultsList";

class Search extends Component { 
  
  state = {
    bookResults: [],
    bookSearch: ""
  };

  // handler functions
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    // prevent the default behavior
    event.preventDefault();
    API.searchBooks(this.state.bookSearch)
      .then(results => this.setState({ bookResults: results.data.items} ))
      .catch(error => console.log(error));
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
              placeholder = "Search the Google Books API for a Book!"
              onChange = {this.handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <Col size = "md-2">
            <Button
              onClick = {this.handleSearchSubmit}
              type = "success"
              className = "input-lg"
              >
              Search
            </Button>
          </Col>
        </Row>
        <Row>
          <Col size = "xs-12">
            {!this.state.bookResults.length ? (
              <h1 className = "text-center">No Books Found! Sorry :( </h1>
            ) : (
              <ResultsList>
                {this.state.bookResults.map(books => {
                  return (
                    <ResultsListItem 
                      key = {books.id}
                      title = {books.volumeInfo.title}
                      authors = {books.volumeInfo.authors}
                      description = {books.volumeInfo.description}
                      link = {books.volumeInfo.infoLink}
                    />
                  )
                })}
              </ResultsList>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
// end of the class Search

export default Search;