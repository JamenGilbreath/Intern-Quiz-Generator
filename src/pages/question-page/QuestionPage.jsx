import "./QuestionPage.css";
import React, { useEffect, useState } from "react";

function QuestionPage() {
  const [trivia, setTrivia] = useState([]);

  useEffect(() => {
    // Define the API endpoint and query parameters
    const apiUrl = "https://the-trivia-api.com/api/questions"; // Replace with the actual API URL
    const limit = 10;
    const categories =
      "science,film_and_tv,music,history,geography,art_and_literature,sport_and_leisure,general_knowledge,science,food_and_drink";
    const difficulties = "easy,medium,hard";
    const types = "text_choice";

    // Construct the full API URL with query parameters
    const fullApiUrl = `${apiUrl}?limit=${limit}&categories=${categories}&difficulties=${difficulties}&types=${types}`;

    // Make the GET request to the API
    fetch(fullApiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTrivia(data); // Assuming the API response is an array of questions
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="QuestionPage">
      <h1>Random Trivia Questions</h1>
      <ul>
        {trivia.map((question, index) => (
          <li key={index}>{question.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionPage;
