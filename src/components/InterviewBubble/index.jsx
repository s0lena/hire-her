import "./style.css";
import { useState, useEffect } from "react";
import InterviewData from "../../source/interview-woman";
import { motion, useAnimation } from "framer-motion";
import speachBubbleSrc from "./speachbubble-tail.svg";
import speachBubbleSrcWmn from "./speachbubble-tail-woman.svg";

export const InterviewBubble = ({ text, speaker }) => {
  return (
    <div
      className={
        speaker === "woman" ? "woman-reply woman-reply-selected" : "hr-question"
      }
    >
      <p>{text}</p>
      {speaker === "hr" ? (
        <img src={speachBubbleSrc} alt="speachbubble-tail" className="tail" />
      ) : (
        <img
          src={speachBubbleSrcWmn}
          alt="speachbubble-tail"
          className="tail"
        />
      )}
    </div>
  );
};
