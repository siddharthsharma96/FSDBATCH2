const UserCard = ({ User }) => {
  return (
    <div>
      <p>{User.id}</p>
      <p>{User.name}</p>
    </div>
  );
};

export default UserCard;
