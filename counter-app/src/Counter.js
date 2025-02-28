import ButtonSection from "./ButtonSection";

const Counter = ({ val, handleDecrement, handleIncrement }) => {
  return (
    <>
      <p>{val}</p>
      <ButtonSection
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    </>
  );
};

export default Counter;
