import { Statistics } from "./Statistics/Statistics";
import { Component } from "react";
// export const App = () => {
//   return (
//     <>
//     </>



//   );
// };


class App extends Component {
  render() {
    return (
      <>
      <Statistics good={2} neutral={3} bad={4} total={5} positivePercentage={6}/>
      </>
    )
  }
}