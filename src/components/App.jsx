import React, { useState } from 'react';
import FeedbackChoices from './FeedbackChoices';
import Stats from './Stats';
import Section from './Section';
import Notification from './Notification';



const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  
  const handleFeedback = type => {
    switch (type) {

      case 'good': setGood(good + 1)
      break;

      case 'neutral': setNeutral(neutral + 1)
      break;

      case 'bad': setBad(bad + 1)
      break;

      default:
        break;
    }
  };

  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  

  const countPositiveFeedbackPercentage = () => {
    
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  
  const totalFeedback = countTotalFeedback()
  const positivePercentage = countPositiveFeedbackPercentage()

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackChoices
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Stats
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  };


export default App;