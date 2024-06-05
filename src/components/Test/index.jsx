// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
    return (
      <>
      <div className="test-questions">
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
          
        </Swiper>
        </div>
        </>
    )
}