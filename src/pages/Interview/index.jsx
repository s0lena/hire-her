import "./style.css";
import { useState, useEffect, useRef } from "react";
import InterviewData from "../../source/interview-woman";
import { motion, useAnimation } from "framer-motion";
import { InterviewBubble } from "../../components/InterviewBubble";
import { InterviewAnswerForm } from "../../components/InterviewAnswerForm";
import { InterviewEntry } from "../../components/InterveiwEntry";
import { Footer } from "../../components/Footer";

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
  const bottomRef = useRef();
  const [isInitialRender, setIsInitialRender] = useState(true);

  let controls = null;

  useEffect(() => {
    if (!isInitialRender && interviewStatus !== STATUS_INITIAL) {
      scrollToBottom(); // Scroll when interviewStatus changes and is not initial
    } else {
      setIsInitialRender(false);
    }
  }, [interviewStatus]);

  useEffect(() => {
    if (interviewStatus === STATUS_SHOW_RESPONSES) {
      animation1.start({ x: "25vw" });
      animation2.start({ x: "-25vw" });
    } else if (interviewStatus === STATUS_INITIAL) {
      animation1.start({ x: "0vw" });
      animation2.start({ x: "0vw" });
    }
  }, [interviewStatus, animation1, animation2]);

  const scrollToBottom = () => {
    setTimeout(() => {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

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
        <span>Share it with others and let them be prepared as well</span>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="instagram.svg" alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="linkedin.svg" alt="linkedin" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="facebook.svg" alt="facebook" />
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="container-interview-simulator">
        <h1>Try out our job interview simulator</h1>
        <p>Prep yourself for the toughest questions</p>
        <a href="#interview">
          <button
            onClick={() => setInterviewStatus("showResponses")}
            className={
              interviewStatus === STATUS_INITIAL ||
              interviewStatus === STATUS_FINISH
                ? ""
                : "display-none"
            }
          >
            Start interview
          </button>
        </a>
        <div
          className={`interview-characters-container ${
            interviewStatus === "showResponses" ? "fixed" : ""
          }`}
        >
          <div className="character-wrapper man">
            <motion.img
              src="/man-with-shadow.svg"
              alt="man"
              initial={{ x: "0vw", opacity: 1 }}
              animate={animation2}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            />
          </div>
          <div className="character-wrapper woman">
            <motion.img
              src="/woman-with-shadow.svg"
              alt="woman"
              initial={{ x: "0vw", opacity: 1 }}
              animate={animation1}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            />
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
            <>
              {interviewStatus !== STATUS_TRY_AGAIN && <div ref={bottomRef} />}
              <InterviewEntry
                currentEntry={currentEntry}
                selectedAnswers={currentResponses}
              />
            </>
          ) : null}
          {controls}
          {interviewStatus === STATUS_TRY_AGAIN ||
          interviewStatus === STATUS_CONTINUE ||
          interviewStatus === STATUS_FINISH ? (
            <div ref={bottomRef} />
          ) : null}
        </div>
      </div>
    </>
  );
};
