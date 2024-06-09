import "./style.css";
import { useState, useEffect } from "react";
import InterviewData from "../../source/interview-woman";
import { motion, useAnimation } from "framer-motion";
import { InterviewBubble } from "../../components/InterviewBubble";
import { InterviewAnswerForm } from "../../components/InterviewAnswerForm";
import { InterviewEntry } from "../../components/InterveiwEntry";

const STATUS_INITIAL = "initial";
const STATUS_SHOW_RESPONSES = "showResponses";
const STATUS_TRY_AGAIN = "tryAgain";
const STATUS_CONTINUE = "continue";
const STATUS_FINISH = "finish";

export const Interview = () => {
  const [interviewStatus, setInterviewStatus] = useState(STATUS_INITIAL);
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const [responses, setResponses] = useState([]);
  const [currentResponses, setCurrentResponses] = useState([]);
  const currentEntry = InterviewData[responses.length];

  const handleResponseSelected = (index) => {
    const newResponses = [...currentResponses, index];
    const reply = currentEntry.answers[index];

    if (reply.color === "green") {
      setCurrentResponses([]);
      setResponses([...responses, newResponses]);
      if (responses.length + 1 === InterviewData.length) {
        setInterviewStatus("finish");
      } else {
        setInterviewStatus("continue");
      }
    } else {
      setCurrentResponses(newResponses);
      setInterviewStatus("tryAgain");
    }
  };

  const handleContinue = () => {
    setInterviewStatus(STATUS_SHOW_RESPONSES);
  };

  let controls = null;

  if (interviewStatus === STATUS_SHOW_RESPONSES) {
    controls = (
      <InterviewAnswerForm
        currentEntry={currentEntry}
        currentResponses={currentResponses}
        onResponseSelected={handleResponseSelected}
      />
    );
  } else if (interviewStatus === STATUS_TRY_AGAIN) {
    controls = <button onClick={handleContinue}>Try Again</button>;
  } else if (interviewStatus === STATUS_CONTINUE) {
    controls = <button onClick={handleContinue}>Continue</button>;
  } else if (interviewStatus === STATUS_FINISH) {
    controls = (
      <div className="interviewFinish">
        Share it with others and let them be prepared as well
      </div>
    );
  }

  // useEffect(() => {
  //   if (isButtonClicked) {
  //     controls.start({ x: '25vw', y: '100vh' }); // Move the man image to the right side
  //     controls2.start({ x: '-25vw', y: '100vh' }); // Move the woman image to the left side
  //   } else {
  //     controls.start({ x: '0vw' }); // Move the man image to the center
  //     controls2.start({ x: '0vw' }); // Move the woman image to the center
  //   }
  // }, [controls, controls2, isButtonClicked]);

  return (
    <>
      <div className="container-interview-simulator">
        <h1>Try out our job interview simulator</h1>
        <p>And prep yourself for the toughest questions</p>
        <a href="#interview">
          <button onClick={() => setInterviewStatus("showResponses")}>
            Start interview
          </button>
        </a>
        <div className="interview-characters-container">
          <motion.img
            src="/man.svg"
            alt="man"
            initial={{ x: "0vw", opacity: 1 }}
            animate={animation2}
            transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
          />
          <motion.img
            src="/woman.svg"
            alt="woman"
            initial={{ x: "0vw", opacity: 1 }}
            animate={animation1}
            transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
          />
          <div className="characters-static">
            <img src="/man.svg" alt="man" className="character-static" />
            <img src="/woman.svg" alt="woman" className="character-static" />
          </div>
        </div>

        <div className="interview" id="interview">
          {responses.map((selectedAnswers, index) => (
            <InterviewEntry
              key={index}
              currentEntry={InterviewData[index]}
              selectedAnswers={selectedAnswers}
            />
          ))}
          {interviewStatus === STATUS_SHOW_RESPONSES ||
          interviewStatus === STATUS_TRY_AGAIN ? (
            <InterviewEntry
              currentEntry={currentEntry}
              selectedAnswers={currentResponses}
            />
          ) : null}
          {controls}
        </div>
      </div>
    </>
  );
};
