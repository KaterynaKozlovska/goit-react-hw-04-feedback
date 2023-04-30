import React, { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    return this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      handleFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    return (
      <div>
        <Feedback
          options={Object.keys(this.state)}
          onLeaveFeedback={handleFeedback}
        />

        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
export default App;
