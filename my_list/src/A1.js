import B1 from "./B1";

const A1 = ({ info }) => {
  return (
    <div>
      <p>A1 component</p>
      <p>props from app value is {info.name}</p>
      <B1 info={info}></B1>
    </div>
  );
};

export default A1;
