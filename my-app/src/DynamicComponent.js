const DynamicComponent = ({ aa, as, children }) => {
  console.log();

  return (
    <div>
      <p>Dynamic Values</p>
      <h1>{aa}</h1>
      <p>{as}</p>
      {children}
    </div>
  );
};

export default DynamicComponent;
