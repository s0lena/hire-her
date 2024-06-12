import './style.css';
import { useState, useEffect } from 'react';
import InterviewData from '../../source/interview-woman';
import { motion, useAnimation } from 'framer-motion';
import { InterviewBubble } from '../../components/InterviewBubble';
import { InterviewAnswerForm } from '../../components/InterviewAnswerForm';
import { InterviewEntry } from '../../components/InterveiwEntry';
import { Footer } from '../../components/Footer';

const STATUS_INITIAL = 'initial';
const STATUS_SHOW_RESPONSES = 'showResponses';
const STATUS_TRY_AGAIN = 'tryAgain';
const STATUS_CONTINUE = 'continue';
const STATUS_FINISH = 'finish';

export const Interview = () => {
  const [interviewStatus, setInterviewStatus] = useState(STATUS_INITIAL);
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const [responses, setResponses] = useState([]);
  const [currentResponses, setCurrentResponses] = useState([]);
  const currentEntry = InterviewData[responses.length];
  const [isFixed, setIsFixed] = useState(false);

  const handleResponseSelected = (index) => {
    const newResponses = [...currentResponses, index];
    const reply = currentEntry.answers[index];

    if (reply.color === 'green') {
      setCurrentResponses([]);
      setResponses([...responses, newResponses]);
      if (responses.length + 1 === InterviewData.length) {
        setInterviewStatus('finish');
      } else {
        setInterviewStatus('continue');
      }
    } else {
      setCurrentResponses(newResponses);
      setInterviewStatus('tryAgain');
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

  const handleScroll = () => {
    if (!isFixed) {
      const currentScrollY = window.scrollY;
      animation1.start({ y: currentScrollY / 2 });
      animation2.start({ y: currentScrollY / 2 });
    }
  };

  useEffect(() => {
    if (interviewStatus === STATUS_SHOW_RESPONSES) {
      animation1.start({ x: '-10vw', y: 0 }).then(() => setIsFixed(true)); // Move the man image to the left side and fix it
      animation2.start({ x: '10vw', y: 0 }).then(() => setIsFixed(true)); // Move the woman image to the right side and fix it
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [interviewStatus, animation1, animation2]);

  return (
    <>
      <div className="container-interview-simulator">
        <h1>Try out our job interview simulator</h1>
        <p>And prep yourself for the toughest questions</p>
        <a href="#interview">
          <button onClick={() => setInterviewStatus('showResponses')}>
            Start interview
          </button>
        </a>
        <div
          className={`interview-characters-container ${
            interviewStatus === 'showResponses' ? 'fixed' : ''
          }`}
        >
          <div className="character-wrapper man">
            <motion.img
              src="/man-with-shadow.svg"
              alt="man"
              initial={{ x: '0vw', opacity: 1 }}
              animate={animation1}
              transition={{ duration: 1.5, delay: 0.1, ease: 'easeInOut' }}
              style={{
                position: isFixed ? 'fixed' : 'absolute',
                left: '10vw',
                top: isFixed ? '10vh' : '20vh',
              }}
            />
          </div>
          <div className="character-wrapper woman">
            <motion.img
              src="/woman-with-shadow.svg"
              alt="woman"
              initial={{ x: '0vw', opacity: 1 }}
              animate={animation2}
              transition={{ duration: 1.5, delay: 0.1, ease: 'easeInOut' }}
              style={{
                position: isFixed ? 'fixed' : 'absolute',
                right: '10vw',
                top: isFixed ? '10vh' : '20vh',
              }}
            />
          </div>
          {/* <div className="characters-static">
            <img src="/man.svg" alt="man" className="character-static" />
            <img src="/woman.svg" alt="woman" className="character-static" />
          </div> */}
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
