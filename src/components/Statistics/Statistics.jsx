import { Item, List } from "./Statistics.styled";

export const Statistics = ({ values, total, positive }) => {
    return (
      <List>
        <Item>Good: {values.good}</Item>
        <Item>Neutral: {values.neutral}</Item>
        <Item>Bad: {values.bad}</Item>
        <Item>Total: {total}</Item>
        <Item>Positive feedback: {positive}%</Item>
      </List>
    );
}