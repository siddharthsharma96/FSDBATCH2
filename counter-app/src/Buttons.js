const Buttons = ({ func, Name }) => {
  return (
    <button className="btn" onClick={func}>
      {Name}
    </button>
  );
};

export default Buttons;
