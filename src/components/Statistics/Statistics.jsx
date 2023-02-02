export const Statistics = ({good, neutral, bad, total}) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <button>Good</button>
      <button>Natural</button>
      <button>Bad</button>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Natural: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    </>
  );
};
