import React from "react";
import { Spinner } from "react-bootstrap";

const SplashLoading = () => {
  return (
    <div
      style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      className="d-flex align-items-center justify-content-center"
    >
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};

export default SplashLoading;
