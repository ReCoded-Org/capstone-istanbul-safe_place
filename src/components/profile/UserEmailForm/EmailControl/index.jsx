import React from "react";
import { Container } from "react-bootstrap";

export default function emailControl({ userEmail, actions }) {
  return (
    <Container fluid className="emailBlock">
      <div className="emailAddress">
        <p>
          <strong>{userEmail.email}</strong>
        </p>
      </div>
      <div className="emailControl">
        <button
          type="button"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Remove"
          onClick={() => actions.removeEmail(userEmail.id)}
        >
          &#10005;
        </button>
        <button
          type="button"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Make primary"
          disabled={userEmail.isPrimary}
          onClick={() => actions.makeEmailPrimary(userEmail.id)}
        >
          &#10003;
        </button>
      </div>
    </Container>
  );
}
