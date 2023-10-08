import { Button, Container } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ handlerAddRate }) => {
  return (
    <Container>
      <Button type="button" onClick={handlerAddRate}>
        Good
      </Button>
      <Button type="button" onClick={handlerAddRate}>
        Neutral
      </Button>
      <Button type="button" onClick={handlerAddRate}>
        Bad
      </Button>
    </Container>
  );
};