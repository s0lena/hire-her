// import './style.css';
import { useState, useEffect } from "react";
import InterviewData from "../../source/interview-woman";
import { motion, useAnimation } from "framer-motion";

export const InterviewAnswerForm = ({
  currentEntry,
  currentResponses,
  onResponseSelected,
}) => {
  const text = "Please choose your answer. . .";
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
        <div>
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.1,
                delay: index * 0.1,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              style={{
                color: "#7622D7",
                fontWeight: "bold",
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </>
  );
};
