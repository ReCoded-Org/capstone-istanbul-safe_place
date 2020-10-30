/* eslint-disable max-len */
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./index.scss";

export default function LeaveMessageInfo() {
  return (
    <Col className="contactInfo" md={6} xs={12}>
      <h2>Leave us a message</h2>
      <p>
        Torquatos nostros? quos tu tam crudelis fuisse, nihil oportere nimium
        nos causae confidere, sed animo etiam erga nos causae confidere, sed uti
        oratione perpetua malo quam ostendis sed quia dolor repellendus
        temporibus autem.
      </p>
      <Row className="contactMethod">
        <Col>
          <svg
            viewBox="0 0 16 16"
            className="bi bi-geo-alt contactIcon"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
            />
            <path
              fillRule="evenodd"
              d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
          <p>9094 Bay Meadows Street Conyers, GA 30012</p>
        </Col>
        <Col>
          <svg
            viewBox="0 0 16 16"
            className="bi bi-telephone-fill contactIcon"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
            />
          </svg>
          <p>+229-955-5388-336 +229-955-5373-360</p>
        </Col>
        <Col>
          <svg
            viewBox="0 0 16 16"
            className="bi bi-envelope-fill contactIcon"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
            />
          </svg>
          <p>office@mail.com support@mail.com</p>
        </Col>
      </Row>
    </Col>
  );
}
