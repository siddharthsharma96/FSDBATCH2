import C1 from "./C1";

const B1 = ({ info }) => {
  return (
    <div>
      <p>B1 component</p>
      <p>props from app value is {info.name}</p>
      <C1 info={info}></C1>
    </div>
  );
};

export default B1;
