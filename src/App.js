import { useState } from "react";
import Data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(Data);

  return (
    <div className="container">
      <h3>questions and answers about login </h3>
      <section className="info">
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
}

export default App;
