import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        this.setState(prevState => {
          return {
            good: prevState.good + 1,
          };
        });
        break;

      case 'bad':
        this.setState(prevState => {
          return {
            bad: prevState.bad + 1,
          };
        });
        break;

      case 'neutral':
        this.setState(prevState => {
          return {
            neutral: prevState.neutral + 1,
          };
        });
        break;

      default:
        console.log(undefined);
    }
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'bad', 'neutral']}
            onLeaveFeedback={e => {
              this.onLeaveFeedback(e.target.textContent);
            }}
          />
        </Section>

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={(this.state.good * 100) / total}
            />
          </Section>
        )}
      </>
    );
  }
}
