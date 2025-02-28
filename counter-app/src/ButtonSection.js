import Buttons from "./Buttons";

const ButtonSection = ({ handleDecrement, handleIncrement }) => {
  return (
    <div className="buttonSection">
      {/* <button onClick={handleIncrement}>Increment</button> */}
      <Buttons func={handleIncrement} Name={"Increment"} />
      <Buttons func={handleDecrement} Name={"decrement"} />
      {/* <button onClick={handleDecrement}>decrement</button> */}
    </div>
  );
};

export default ButtonSection;
