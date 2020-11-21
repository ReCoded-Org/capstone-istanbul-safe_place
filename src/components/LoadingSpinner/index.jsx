import React from "react";
import { Container, Spinner } from "react-bootstrap";

const spinnerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fe8f7c",
};

export default function LoadingSpinner() {
  return (
    <Container fluid style={spinnerStyle}>
      <Spinner animation="border" role="status" size="md">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Container>
  );
}
