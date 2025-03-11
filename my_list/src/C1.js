import D1 from "./D1";

const C1 = ({ info }) => {
  return (
    <div>
      <p>C1 component</p>
      <p>props from app value is {info.name}</p>
      <D1 info={info}></D1>
    </div>
  );
};

export default C1;
