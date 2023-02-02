export const Statistics = ({good, neutral, bad, total}) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <button>Good</button>
      <button>Natural</button>
      <button>Bad</button>
      <h2>Statistics</h2>
      <ul>
        <li><p>Good: {good}</p></li>
        <li><p>Natural: {neutral}</p></li>
        <li><p>Bad: {bad}</p></li>
      </ul>
    </>
  );
};
