import React from "react";
import { Button } from "react-bootstrap";
import "./PrepPage.css";

function PrepPage() {
  const background = {
    /* background:
      "linear-gradient(322deg, rgba(6,0,113,1) 0%, rgba(4,21,162,1) 30%, rgba(123,232,254,1) 100%)",*/

    backgroundImage: 'url("/src/assets/images/cool-background.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center h-100"
      style={background}
    >
      <div
        className="bg-light rounded h-25 p-4 d-flex flex-column align-items-center"
        style={{ width: "50%", minWidth: "20rem" }}
      >
        <h1 className="mb-4">Ready for quizName?</h1>
        <Button size="lg" className="w-50 h-50">
          Start Quiz
        </Button>
      </div>
    </div>
  );
}

export default PrepPage;
