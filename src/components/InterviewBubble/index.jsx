import './style.css';
import { useState, useEffect } from 'react';
import InterviewData from '../../source/interview-woman';
import { motion, useAnimation } from 'framer-motion';
import speachBubbleSrc from './speachbubble-tail.svg';

export const InterviewBubble = ({ text, speaker }) => {
  return (
    <div className={speaker === 'woman' ? 'woman-reply' : 'hr-question'}>
      <p>{text}</p>
      {speaker==='hr' ?<img src={speachBubbleSrc} alt="speachbubble-tail" />:""}
    </div>
  );
};
