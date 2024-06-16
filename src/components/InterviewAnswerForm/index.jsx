import "./style.css";
import { motion } from "framer-motion";
import avatarWoman from "../InterviewBubble/avatar-woman-responsive.svg";

export const InterviewAnswerForm = ({
  currentEntry,
  currentResponses,
  onResponseSelected,
}) => {
  const text = "Please choose your answer    .   .   .";

  return (
    <>
      <div className="answers-container">
        <img
          src={avatarWoman}
          alt="avatar"
          className="avatar"
          id="avatar-woman-answers"
        />
        <div>
          {text.split("").map((char, index) => {
            let repeatDuration = 0.7; // Duration for repeated symbols
            let fontSize = "25px";
            if (index < text.length - 10) {
              repeatDuration = 0.5;
              fontSize = "16px";
            }

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: repeatDuration,
                  delay: index * 0.05,
                  repeat: index >= text.length - 10 ? Infinity : 0,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
                style={{
                  color: "#7622D7",
                  fontWeight: "bold",
                  fontSize: fontSize,
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </div>
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
