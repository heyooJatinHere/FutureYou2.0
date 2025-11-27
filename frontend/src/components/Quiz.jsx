import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // Fetch questions from backend
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(
          "https://futureyou2-0.onrender.com/api/questions/health"
        );
        const data = await res.json();
        setQuestions(data);
        console.log(questions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  // Guard until data is loaded
  if (loading)
    return <div className="p-10 text-center">Loading questions...</div>;
  if (!questions.length)
    return <div className="p-10 text-center">No questions found.</div>;

  if (submitted || currentQuestionIndex >= questions.length) {
    return <div className="p-10 text-center">Submitting your answers...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerChange = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));

    // If it's a select question, auto move to next (after a short delay)
    if (currentQuestion.type === "select") {
      const followUp = currentQuestion.options?.find(
        (option) => option.value === value
      )?.followUp;

      setTimeout(() => {
        if (followUp) {
          const followUpIndex = questions.findIndex((q) => q.id === followUp);
          if (followUpIndex !== -1) {
            setCurrentQuestionIndex(followUpIndex);
            return;
          }
        }
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 300); // slight delay for smoothness
    }
  };
  console.log("Users Answers:", answers);

  const goNext = () => {
    const answer = answers[currentQuestion.id];

    if (!answer || answer === "") return;

    // Check for follow-up question
    const followUp = currentQuestion.options?.find(
      (option) => option.value === answer
    )?.followUp;

    if (followUp) {
      const followUpIndex = questions.findIndex((q) => q.id === followUp);
      setCurrentQuestionIndex(followUpIndex);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const sendAnswersToBackend = async (answers) => {
    try {
      setSubmitted(true);
      console.log("Sending Answers:", answers);
      const response = await fetch(
        "https://futureyou2-0.onrender.com/submit-answers",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(answers),
        }
      );
      const text = await response.text();
      const data = JSON.parse(text);
      console.log("Data Recieved:", data);

      navigate("/result", { state: { analysis: data.analysis } });
    } catch (error) {
      console.error("Error sending answers:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full">
        {/* Progress */} {/* ProgressBar */}
        <div className="mb-4 text-sm text-gray-500">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        {/* Question */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          {currentQuestion.question}
        </h2>
        {/* Input or Options */}
        {currentQuestion.type === "input" ? (
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your answer"
            value={answers[currentQuestion.id] || ""}
            onChange={(e) => handleAnswerChange(e.target.value)}
          />
        ) : (
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerChange(option.value)}
                className={`w-full text-left px-4 py-3 rounded-xl border transition ${
                  answers[currentQuestion.id] === option.value
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300 hover:bg-blue-50 hover:border-blue-400"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={goPrev}
            disabled={currentQuestionIndex === 0}
            className="bg-gray-200 px-5 py-2 rounded-xl hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          {isLastQuestion ? (
            <button
              onClick={() => sendAnswersToBackend(answers)}
              disabled={!answers[currentQuestion.id]}
              className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 disabled:opacity-50"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={goNext}
              disabled={!answers[currentQuestion.id]}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 disabled:opacity-50"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
