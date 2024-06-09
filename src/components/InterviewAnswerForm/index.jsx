// import './style.css';
import { useState, useEffect } from "react";
import InterviewData from "../../source/interview-woman";
import { motion, useAnimation } from "framer-motion";

export const InterviewAnswerForm = ({
  currentEntry,
  currentResponses,
  onResponseSelected,
}) => {
  return (
    <>
      <div>
        {currentEntry.answers.map((answer, index) =>
          !currentResponses.includes(index) ? (
            <div
              className="woman-reply"
              key={index}
              onClick={() => onResponseSelected(index)}
            >
              <p>{answer.answerText}</p>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};
