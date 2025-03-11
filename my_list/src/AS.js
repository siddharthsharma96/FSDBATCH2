import C from "./C";

const AS = ({ info, aa }) => {
  console.log();

  return (
    <>
      <p>
        name:{info.name} {aa}
      </p>
      <p>fgdsgfjdshg</p>
      <C as={info} />
    </>
  );
};

export default AS;

export const B = () => {
  return (
    <div>
      <p>Hello from named export</p>
    </div>
  );
};
