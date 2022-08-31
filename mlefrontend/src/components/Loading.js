import React from "react";
import { Row } from "react-bootstrap";

const Loading = () => {
  return (
    <Row style={{ marginLeft: "690px", paddingTop: "150px" }}>
      <svg>
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="red"
          strokeDasharray="78.5 235.5"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="blue"
          strokeDasharray="62.8 188.8"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="20"
          stroke="green"
          strokeDasharray="47.1 141.3"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </Row>
  );
};

export default Loading;
