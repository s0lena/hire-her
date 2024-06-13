import { Fragment } from "react";
import { InterviewBubble } from "../InterviewBubble";
import { InterviewFeedback } from "../InterviewFeedback";
import "./style.css";

export const InterviewEntry = ({ currentEntry, selectedAnswers }) => {
  return (
    <>
      <InterviewBubble speaker="hr" text={currentEntry.question_woman} />
      {selectedAnswers.map((answerIndex, order) => {
        const answer = currentEntry.answers[answerIndex];
        return (
          <Fragment key={order}>
            <InterviewBubble speaker="woman" text={answer.answerText} />
            <InterviewFeedback color={answer.color} text={answer.evaluation} />
          </Fragment>
        );
      })}
    </>
  );
};
