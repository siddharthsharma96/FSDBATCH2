const UserWithAddtionalData = (Component) => {
  return function addData(props) {
    console.log(props);
    return (
      <div>
        <Component {...props} />
        {props.User.isStudent && <p>Student: {props.User.id}</p>}
      </div>
    );
  };
};

export default UserWithAddtionalData;
