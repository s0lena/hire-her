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
            <button key={index} onClick={() => onResponseSelected(index)}>
              {answer.answerText}
            </button>
          ) : null
        )}
      </div>
    </>
  );
};
