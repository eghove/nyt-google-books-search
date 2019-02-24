import React from "react";
import { Container, Row, Col } from "../Grid";

// the ResultsList component
export function ResultsList( {children }) {
  return <ul className = "list-group">{children}</ul>
}