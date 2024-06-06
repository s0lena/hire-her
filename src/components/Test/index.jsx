// Import Swiper React components
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSplit } from '../../components/HeroSplit';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCreative } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

export const Test =()=> {
  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = (event) => {
  event.preventDefault();
  setIsSubmitted(true);
  console.log("Hi")
 }

    return (
      <>
     {isSubmitted? (
      <>
      <div className="test-results-section">
        <Swiper
          
          modules={[Pagination]}
          pagination={{
            type: 'progressbar',
          }}
         className="swiper"
        >
        <SwiperSlide>
          <h3>Results</h3>
          <div className="test-results-section-text">
            <h4>100-75% Cool!</h4>
                <div>How to improve</div>
                <a href="#herosplit"><button className="button-transparent">Find out more</button></a>
          </div>
          </SwiperSlide>
          </Swiper>
          </div>
          <HeroSplit id="herosplit"/> 
        </>
        ):

      (<div className="test-questions" id="test">
        <Swiper
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          modules={[EffectCreative, Navigation, Pagination]}
          pagination={{
            type: 'progressbar',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="swiper"
        >
         
          <SwiperSlide>
          <h3>1. How often does your company employ women on maternity or parental leave? </h3>
          <form>
            <fieldset>
              <div className="answer-section">
                <div className="input"><input type="radio" value="option1" name="answer" id="option1" defaultChecked={true}/><label htmlFor="option1">Monthly/often</label></div>
                <div className="input"><input type="radio" value="option2" name="answer" id="option2"/><label htmlFor="option2">Answer1</label></div>
                <div className="input"><input type="radio" value="option3" name="answer" id="option3"/><label htmlFor="option3">Answer2</label></div>
                <div className="input"><input type="radio" value="option4" name="answer" id="option4"/><label htmlFor="option4">Answer3</label></div>
                  <button className="swiper-button-next">Next</button>
              </div>
            </fieldset>
          </form>
          
          </SwiperSlide>
          <SwiperSlide>
          <h3>2. How often does your company employ women on maternity or parental leave?</h3>
          <form>
            <fieldset>
              <div className="answer-section">
                <div className="input"><input type="radio" value="option1" name="answer" id="option1" defaultChecked={true}/><label htmlFor="option1">Monthly/often</label></div>
                <div className="input"><input type="radio" value="option2" name="answer" id="option2"/><label htmlFor="option2">Answer1</label></div>
                <div className="input"><input type="radio" value="option3" name="answer" id="option3"/><label htmlFor="option3">Answer2</label></div>
                <div className="input"><input type="radio" value="option4" name="answer" id="option4"/><label htmlFor="option4">Answer3</label></div>
                  <button className="swiper-button-next">Next</button>
              </div>
            </fieldset>
          </form>
          </SwiperSlide>
          <SwiperSlide>
          <h3>3. How often does your company employ women on maternity or parental leave?</h3>
          <form >
            <fieldset>
              <div className="answer-section">
                <div className="input"><input type="radio" value="option1" name="answer" id="option1" defaultChecked={true}/><label htmlFor="option1">Monthly/often</label></div>
                <div className="input"><input type="radio" value="option2" name="answer" id="option2"/><label htmlFor="option2">Answer1</label></div>
                <div className="input"><input type="radio" value="option3" name="answer" id="option3"/><label htmlFor="option3">Answer2</label></div>
                <div className="input"><input type="radio" value="option4" name="answer" id="option4"/><label htmlFor="option4">Answer3</label></div>
                  <button className="button-transparent" onClick={handleSubmit}>See results</button>
              </div>
            </fieldset>
          </form>
          </SwiperSlide>
        </Swiper>
        </div>)
        }
        </>
    )
}