import './style.css'
import { useState, useEffect } from 'react';
import InterviewData from '../../source/interview-data'
import { motion, useAnimation } from 'framer-motion';


export const Interview1 = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const controls = useAnimation();
    const controls2 = useAnimation();



    useEffect(() => {
        if (isButtonClicked) {
            controls.start({ x: '25vw', y: '100vh' }); // Move the man image to the right side
            controls2.start({ x: '-25vw', y: '100vh' }); // Move the woman image to the left side
          } else {
            controls.start({ x: '0vw' }); // Move the man image to the center
            controls2.start({ x: '0vw' }); // Move the woman image to the center
          }
        }, [controls, controls2, isButtonClicked]);
    
    return (
        <>
    
    <div className="container-interview-simulator">
        <h1>Try out our job interview simulator</h1>
        <p>And prep yourself for the toughest questions</p>
        <a href="#interview"><button onClick={() => setTimeout(setIsButtonClicked(true),3000)}>Start interview</button></a>
    <div className="interview-characters-container">
    <motion.img
    src="/man.svg"
    alt="man"
    initial={{ x: '0vw', opacity: 1 }}
    animate={controls2}
    transition={{ duration: 1.5, delay: 0.1, ease: 'easeInOut' }}
  />
  <motion.img
    src="/woman.svg"
    alt="woman"
    initial={{ x: '0vw', opacity: 1 }}
    animate={controls}
    transition={{ duration: 1.5, delay: 0.1, ease: 'easeInOut' }}
  />
    </div>
    
    <div className="interview" id="interview">
    {InterviewData.map((bok)=>{
            if (bok.question_man===bok.question_woman) {
                return (<motion.div 
                className="question-container" 
                key={bok.id} 
                initial={{opacity:0}} 
                whileInView={{opacity:1}} 
                // viewport={{amount:'all',
                //    once:true,}}
                transition={{ duration: 5, delay: 0.2, ease: 'easeInOut' }} >
                <div className="hr-question">
                    <img src="/interviewer.png" />
                    <p>{bok.question_man}</p>
                </div>
                <div className="interview-reply">
                <p> {bok.answer_man}</p>
                </div>
            </motion.div>)
            }
            else {
                return (
                    <motion.div key={bok.id}
                    initial={{opacity:0}} 
                    whileInView={{opacity:1}} 
                    transition={{ duration: 2, delay: 0.2, ease: 'easeInOut' }} >
                    <div className="columns-2">
                    <div className="hr-question">
                        <img src="/interviewer.png" />
                        <p>{bok.question_man}</p>
                    </div>
                    <div className="hr-question">
                        <img src="/interviewer.png" />
                        <p>{bok.question_woman}</p>
                    </div>
                  </div>
                    
                  <div className="interview-replies">
                        <div className="man-reply">
                        <p>{bok.answer_man}</p>
                        </div>
                        <div className="woman-reply">
                        <p>{bok.answer_woman}</p>
                        </div>
                   </div>
                   </motion.div>
                  
                )
            }

            })}
           



    </div>
    
    </div>
    </>)
}