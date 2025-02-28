import Grandson from "./Grandson";

const Parent = ({ info }) => {
  console.log(info);

  return (
    <div className="parent">
      <p>Hi This Component refers to Parent</p>
      <Grandson info={info} />
    </div>
  );
};

export default Parent;
