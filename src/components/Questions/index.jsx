import './style.css';
import '../../global.css';

export const questions = [
  {
    id: 1,
    questionText:
      'How often does your company employ women on maternity or parental leave?',
    options: [
      { answerText: 'Monthly/often', points: 3 },
      { answerText: 'Rarely', points: 2 },
      { answerText: "I'm not sure", points: 1 },
      { answerText: 'Never', points: 0 },
    ],
  },

  {
    id: 2,
    questionText:
      'What are the main reasons why your company employs or does not employ women on maternity leave',
    options: [
      { answerText: ' Lack of available positions', points: 1 },
      { answerText: 'Concerns about job demands', points: 1 },
      { answerText: 'Limited work skills', points: 1 },
      { answerText: 'Restrictions on working hours', points: 1 },
      { answerText: 'we have no worries', points: 3 },
    ],
  },

  {
    id: 3,
    questionText:
      'What measures has your company taken to support the return of women after maternity leave to work?',
    options: [
      {
        answerText:
          'Flexible Work Arrangements: Providing options for flexible hours and remote work to accommodate new mothers.',
        points: 3,
      },
      {
        answerText:
          'Mentoring Programs: Offering mentoring programs to guide and support women as they transition back to work.',
        points: 2,
      },
      {
        answerText:
          'Family-Friendly Policies: Implementing policies that support work-life balance, such as childcare support and parental leave.',
        points: 2,
      },
    ],
  },

  {
    id: 4,
    questionText:
      'What is your companys policy regarding flexible work arrangements for employees after maternity leave?',
    options: [
      {
        answerText:
          'Fully flexible: Employees can choose their own hours and work remotely as needed.',
        points: 3,
      },
      {
        answerText:
          'Partially flexible: Employees have some flexibility in start and end times but must be present in the office a few days a week.',
        points: 2,
      },
      {
        answerText:
          'Limited flexibility: Employees have fixed hours but can occasionally work from home with prior approval.',
        points: 1,
      },
      {
        answerText:
          ' Not flexible: Employees must adhere to strict office hours with no remote work options.',
        points: 0,
      },
    ],
  },

  {
    id: 5,
    questionText:
      'What are the biggest expectations and concerns of employers regarding the return of women after maternity leave?',
    options: [
      { answerText: 'Expectations of successful return', points: 3 },
      { answerText: 'Concerns about lack of job performance', points: 1 },
      { answerText: 'Concerns about insufficient flexibility', points: 1 },
    ],
  },

  {
    id: 6,
    questionText:
      'What are the biggest expectations and concerns of employers regarding the return of women after maternity leave?',
    options: [
      { answerText: 'Providing flexible work arrangements', points: 3 },
      { answerText: 'Providing supportive programs', points: 2 },
      { answerText: 'Improving parental leave policies', points: 2 },
    ],
  },

  {
    id: 7,
    questionText:
      'What impact does the return of women after maternity leave have on the workplace culture in your company?',
    options: [
      { answerText: 'Positive impact', points: 2 },
      { answerText: 'Neutral impact', points: 1 },
      { answerText: 'Negative impact', points: 0 },
    ],
  },

  {
    id: 8,
    questionText:
      'What measures has your company taken to remove barriers preventing women from returning after maternity leave',
    options: [
      { answerText: 'Providing support and mentoring', points: 3 },
      { answerText: 'Ensuring equal job opportunities', points: 2 },
      { answerText: 'Implementing flexible working conditions', points: 2 },
    ],
  },

  {
    id: 9,
    questionText:
      'What is your companys policy on providing mentoring or support for women returning from maternity leave?',
    options: [
      {
        answerText:
          'Comprehensive Internal Support: The company provides systematic mentoring, training, and individual consultations for women returning from maternity leave to help them reintegrate into the work process.',
        points: 3,
      },
      {
        answerText:
          'Partial Support: The company provides occasional training and consultation opportunities as needed, but there is no systematic approach to supporting women returning from maternity leave.',
        points: 2,
      },
      {
        answerText:
          'No Support: The company does not provide any specific mentoring or support for women returning from maternity leave and expects them to reintegrate into the work process without additional assistance.',
        points: 1,
      },
    ],
  },

  {
    id: 10,
    questionText:
      'How does your company communicate its family-friendly policies to current and potential employees?',
    options: [
      { answerText: 'Through onboarding programs', points: 3 },
      { answerText: 'In job postings', points: 2 },
      { answerText: 'During interviews', points: 2 },
      { answerText: 'Regular internal communications', points: 3 },
      { answerText: 'none of the above', points: 0 },
    ],
  },

  {
    id: 11,
    questionText:
      'What training or resources are provided to managers to support employees returning from maternity leave?',
    options: [
      {
        answerText:
          'Leadership Training: Managers receive comprehensive training on how to support returning employees.',
        points: 3,
      },
      {
        answerText:
          'Sensitivity and Awareness Workshops for HR: HR and managers attend workshops to build awareness and sensitivity towards returning mothers.',
        points: 2,
      },
      {
        answerText:
          'Policy Briefings: Managers receive regular briefings on relevant policies and procedures.',
        points: 2,
      },
      { answerText: 'none of the above', points: 0 },
    ],
  },

  {
    id: 12,
    questionText:
      'How does your company ensure equal career progression opportunities for women returning from maternity leave?',
    options: [
      {
        answerText:
          'Regular Performance Reviews: Conducting consistent performance reviews to assess and support career growth.',
        points: 3,
      },
      {
        answerText:
          'Career Development Programs: Offering targeted career development programs and mentorship.',
        points: 2,
      },
      {
        answerText:
          'Equal Access to Promotions and Raises: Ensuring women have the same opportunities for promotions and salary increases as other employees.',
        points: 2,
      },
      { answerText: 'none of the above', points: 1 },
    ],
  },

  {
    id: 13,
    questionText:
      'What feedback mechanisms are in place for women returning from maternity leave to share their experiences and needs?',
    options: [
      { answerText: 'Regular surveys', points: 3 },
      { answerText: 'One-on-one meetings with HR', points: 2 },
      { answerText: 'Anonymous feedback tools', points: 2 },
      { answerText: 'we have no measures', points: 1 },
    ],
  },

  {
    id: 14,
    questionText:
      'How does your company promote a balanced workload for employees returning from maternity leave to prevent burnout?',
    options: [
      { answerText: 'Monitoring work hours', points: 3 },
      { answerText: ' Offering part-time options', points: 2 },
      { answerText: 'Providing access to mental health resource', points: 2 },
      { answerText: 'we have no measures', points: 1 },
    ],
  },
];
