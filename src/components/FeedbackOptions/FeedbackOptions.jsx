export const FeedbackOptions = ({ handlerAddRate }) => {
  return (
    <div>
      <button type="button" onClick={handlerAddRate}>
        Good
      </button>
      <button type="button" onClick={handlerAddRate}>
        Neutral
      </button>
      <button type="button" onClick={handlerAddRate}>
        Bad
      </button>
    </div>
  );
};