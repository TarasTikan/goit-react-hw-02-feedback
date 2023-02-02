import { Statistics } from "./Statistics/Statistics";
import { Component } from "react";

export class App extends Component {
  state = {
    good: 2,
    neutral: 6,
    bad: 4
  }

handleGoodFeedBack = () => {
  this.setstate((prevState)=>{
      good: prevState.good + 1
  })
}

  render() {
    return (
      <>
      <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={5} positivePercentage={6}/>
      </>
    )
  }
}