import Parent from "./Parent";

const GrandFather = () => {
  let info = "Heelo this is message";
  return (
    <div className="grandFather">
      <p>Hi This Component refers to Grand Father</p>
      <Parent info={info} />
    </div>
  );
};

export default GrandFather;
