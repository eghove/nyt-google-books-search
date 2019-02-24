import React from "react";
import { Container, Row, Col } from "../Grid";

// the ResultsList component
export function ResultsList( {children }) {
  return <ul className = "list-group">{children}</ul>
}

export function ResultsListItem({
  title,
  authors,
  description,
  link
}) {
  return (
    <li className = "list-group-item">
      <Container>
        <Row>
          <Col size = "xs-8 sm-9">
            <h2>{title}</h2>
            <h3>Author(s): {authors}</h3>
            <p>Description: {description}</p>
            <a rel="noopener noreferrer" target = "_blank" href ={link}>Go to Book!</a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}