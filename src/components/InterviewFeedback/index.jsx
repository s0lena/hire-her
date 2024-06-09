import './style.css';

export const InterviewFeedback = ({ color, text }) => {
  return (
    <>
      <div className={`feedback feedback-${color}`}>{text}</div>
    </>
  );
};
