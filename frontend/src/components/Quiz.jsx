import React, { useState } from "react";
import { questions } from "../data/questions";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

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

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full">
        {/* Progress */}
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
              onClick={() => console.log("Answers:", answers)}
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
