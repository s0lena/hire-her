import "./style.css";
import speachBubbleSrc from "./speachbubble-tail.svg";
import speachBubbleSrcWmn from "./speachbubble-tail-woman.svg";
import avatarHr from "./avatar-hr-responsive.svg";
import avatarWoman from "./avatar-woman-responsive.svg";

export const InterviewBubble = ({ text, speaker }) => {
  return (
    <div
      className={
        speaker === "woman" ? "woman-reply woman-reply-selected" : "hr-question"
      }
    >
      <p>{text}</p>
      {speaker === "hr" ? (
        <img src={avatarHr} alt="avatar" className="avatar" id="avatar-hr" />
      ) : (
        <img
          src={avatarWoman}
          alt="avatar"
          className="avatar"
          id="avatar-woman"
        />
      )}
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
