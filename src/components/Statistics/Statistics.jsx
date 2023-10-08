export const Statistics = ({ values, total, positive }) => {
    return (
      <ul>
        <li>Good: {values.good}</li>
        <li>Neutral: {values.neutral}</li>
        <li>Bad: {values.bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positive || 0}%</li>
      </ul>
    );
}