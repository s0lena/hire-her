import { color } from 'framer-motion';

const InterviewData = [
  {
    id: 'q1',
    question_woman:
      'Hello, my name is Eva, I`ll be your interviewer for today. Nice to meet you.',
    answers: [
      {
        answerText:
          "Hello, Eva. It's a pleasure to meet you. Thank you for taking the time to interview me today. I'm looking forward to our conversation.",
        color: green,
      },
      {
        answerText:
          "Hello, Eva. Nice to meet you too. I hope my lack of extensive experience won't be a major issue today.",
        color: yellow,
      },
      {
        answerText: "Yeah, whatever. Let's just get this over with.",
        color: red,
      },
    ],
  },

  {
    id: 'q2',
    question_woman:
      'Could you tell us a bit about yourself and your work experience?',
    answers: [
      {
        answerText:
          "I'm a software engineer with five years of experience in web application development. I've worked on various projects that included both backend and frontend solutions. I enjoy tackling challenging problems and continuously improving my skills to keep up with the latest industry trends.",
        color: green,
      },
      {
        answerText:
          "I'm a software engineer with five years of experience in web application development. Although I prefer working alone, I can handle team projects when necessary. I tend to focus on my own tasks and avoid getting involved in team discussions unless absolutely needed.",
        color: yellow,
      },
      {
        answerText:
          "Isn't all of that already on my resume? I don't see why I need to repeat it here.",
        color: red,
      },
    ],
  },

  {
    id: 'q3',
    question_woman:
      'That sounds interesting. I see you have solid technical knowledge. How would you describe your approach to teamwork?',
    answers: [
      {
        answerText:
          'I usually work better on my own, and I sometimes find it challenging to contribute effectively in a team setting. I often feel like I do not have as much to offer as others.',
        color: yellow,
      },
      {
        answerText:
          'Teamwork is overrated. I prefer to get things done myself without having to deal with others slowing me down.',
        color: red,
      },
      {
        answerText:
          'Thank you. I believe that teamwork is essential for achieving great results. My approach involves clear communication, active listening, and collaboration. I always strive to understand my teammates strengths and leverage them to accomplish our common goals. I’m proactive in offering support and appreciate the diverse perspectives that a team can bring to a project.',
        color: green,
      },
    ],
  },
  {
    id: 'q4',
    question_woman:
      'Great. How would you handle a high workload if you had to stay late at work? Do you plan to have children in the near future?',
    answers: [
      {
        answerText:
          'I might struggle to manage a high workload if I have to stay late, especially if I have family responsibilities in the future. Planning to have children will definitely affect my availability.',
        color: red,
      },
      {
        answerText:
          "I don't see how my personal plans are any of your business. My work performance should be the only concern here.",
        color: yellow,
      },
      {
        answerText:
          'I am fully committed to delivering high-quality work and am capable of managing high workloads effectively. I prioritize my tasks and manage my time efficiently to meet deadlines. Regarding your second question, my personal plans do not affect my professional dedication and ability to perform my job responsibilities. I am focused on my career and contributing positively to the team.',
        color: green,
      },
    ],
  },

  {
    id: 'q5',
    question_woman: 'Excellent. What are your long-term career plans?',
    answers: [
      {
        answerText:
          'Why does it matter? I am just looking for a job right now, not planning my entire life.',
        color: red,
      },
      {
        answerText:
          'I am not entirely sure about my long-term career plans. I have not really thought that far ahead and I am still trying to figure things out.',
        color: yellow,
      },
      {
        answerText:
          'My long-term career plans involve growing within a company where I can continually develop my skills and take on increasing responsibilities. I aim to advance to a leadership position where I can contribute to strategic decision-making and mentor others. I’m particularly interested in staying in [your field/industry] and making a significant impact by driving innovation and achieving outstanding results.',
        color: green,
      },
    ],
  },
  {
    id: 'q6',
    question_woman:
      'Okay, thank you for your answers. One last question. How would you handle a high workload if you had to stay late at work?',

    answers: [
      {
        answerText:
          'I understand there are times when extra hours are needed, and I am prepared for that. With good organization and family support, I can manage both work and family duties effectively.',
        color: green,
      },
      {
        answerText:
          'While I can occasionally stay late, I prefer clearly defined work hours. Regularly staying late could be challenging for my family.',
        color: yellow,
      },
      {
        answerText:
          'As a mother, my family is my priority, so staying late would be difficult. I prefer positions with fixed working hours.',
        color: red,
      },
    ],
  },

  {
    id: 'q7',
    question_woman:
      'Thank you for your time today. Is there anything else you would like to add or ask before we conclude?',
    answers: [
      {
        answerText:
          'Thank you for the opportunity to interview. I am very excited about the possibility of joining your team and contributing to your projects. Could you tell me more about the next steps in the hiring process?',
        color: green,
      },
      {
        answerText:
          'Thank you for the interview. I think I have covered everything. When can I expect to hear back about the next steps?',
        color: yellow,
      },
      {
        answerText:
          'No, I do not have anything else to add. How soon can I expect a decision?',
        color: red,
      },
    ],
  },
];

export default InterviewData;
