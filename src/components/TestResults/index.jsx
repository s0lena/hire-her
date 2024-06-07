import React from 'react';

export const TestResults = ({ percentage }) => {
  let resultText;
  let improvementText;

  if (percentage > 75) {
    resultText = '100% - 75%: Performed Exceptionally Well';
    improvementText =
      'Congratulations! Your company excels in supporting women returning from maternity leave. The measures and policies you have implemented serve as a benchmark for other organizations. Your commitment to creating an inclusive and supportive work environment is commendable. Continue to uphold these high standards and inspire others in your industry to follow suit.';
  } else if (percentage > 50) {
    resultText = '75% - 50%: Room for Improvement';
    improvementText =
      'Your company is taking positive steps towards supporting women returning from maternity leave, but there is still room for improvement. While you have some good practices in place, consider further enhancing your support systems. Implementing additional flexible arrangements and supportive programs could significantly benefit both your employees and your organization. Continuous improvement in this area will help foster a more inclusive and productive workplace.';
  } else {
    resultText = 'Less than 50%: Needs Improvement';
    improvementText =
      'There is significant room for growth in how your company supports women returning from maternity leave. It is crucial to reevaluate your current policies and measures to ensure they are conducive to a supportive and equitable work environment. Consider adopting more flexible work arrangements, providing comprehensive support programs, and fostering a culture that values and supports all employees. Making these changes will not only improve employee satisfaction but also enhance overall productivity and morale within your organization.';
  }

  return (
    <SwiperSlide>
      <h3>Results</h3>
      <div className="test-results-section-text">
        <h4>{resultText}</h4>
        <div>{improvementText}</div>
        <button className="button-transparent">
          <a href="#herosplit">Find out more</a>
        </button>
      </div>
    </SwiperSlide>
  );
};
