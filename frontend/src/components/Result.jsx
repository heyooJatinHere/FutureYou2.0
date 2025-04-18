import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const analysis = location.state?.analysis;

  if (!analysis) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-8">Error</h1>
          <p className="text-lg text-red-500">
            No analysis available. Please complete the quiz first.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Your Future Analysis
        </h1>
        <pre className="whitespace-pre-wrap text-gray-800 text-lg leading-relaxed">
          {analysis}
        </pre>
      </div>
    </div>
  );
};

export default Result;
