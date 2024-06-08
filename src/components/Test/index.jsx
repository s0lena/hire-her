// Import Swiper React komponenty
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSplit } from '../../components/HeroSplit';
import { TestResults } from '../TestResults';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

import './style.css';

// import required moduls
import { EffectCreative } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { questions } from '../Questions';

export const Test = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const swiperRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const slideToQuestion = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };

  const navigateToNextQuestion = () => {
    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(nextQuestionIndex);
      setSelectedOption(null);
      slideToQuestion(nextQuestionIndex);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleAnswerOptionClick = (points) => {
    setScore((prevScore) => prevScore + points);
    navigateToNextQuestion();
  };

  const getPercentage = () => {
    const maxPointsPerQuestion = 3;
    const maxScore = questions.length * maxPointsPerQuestion;
    const percentage = (score / maxScore) * 100;
    return percentage;
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <>
      {isSubmitted ? (
        <>
          <div className="test-results-section">
            <TestResults percentage={getPercentage()} />
          </div>
          <HeroSplit id="herosplit" />
        </>
      ) : (
        <div className="test-questions" id="test">
          <Swiper
            ref={swiperRef}
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: { shadow: true, translate: [0, 0, -400] },
              next: { translate: ['100%', 0, 0] },
            }}
            modules={[EffectCreative, Navigation, Pagination]}
            pagination={{ type: 'progressbar' }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="swiper"
          >
            {questions.map((question, index) => (
              <SwiperSlide key={index}>
                <h3>
                  {index + 1}. {question.questionText}
                </h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <fieldset>
                    <div className="answer-section">
                      {question.options.map((option, i) => (
                        <div className="input" key={i}>
                          <input
                            type="radio"
                            id={`question${index}_option${i}`}
                            name={`question${index}`}
                            value={i}
                            checked={selectedOption === i}
                            onChange={() => setSelectedOption(i)}
                          />
                          <label htmlFor={`question${index}_option${i}`}>
                            {option.answerText}
                          </label>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="button-transparent"
                        onClick={() =>
                          handleAnswerOptionClick(
                            question.options[selectedOption].points,
                          )
                        }
                        disabled={selectedOption === null}
                      >
                        {isLastQuestion ? 'See results' : 'Next'}
                      </button>
                    </div>
                  </fieldset>
                </form>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};
