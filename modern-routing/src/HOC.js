import UserCard from "./UserCard";

const HOC = () => {
  const users = [
    {
      id: 1,
      name: "Ronit",
      isStudent: true,
    },
    {
      id: 2,
      name: "Abhay",
      isStudent: true,
    },
    {
      id: 3,
      name: "Vivek",
      isStudent: false,
    },
    {
      id: 4,
      name: "Surjeet",
      isStudent: false,
    },
  ];
  return (
    <div>
      <h1>Learning higher Order Components</h1>
      <div className="section">
        {users.map((user) => {
          return <UserCard key={user.id} User={user} />;
        })}
        {/* <UserCard User={users[0]} />
        <UserCard User={users[1]} />
        <UserCard User={users[2]} />
        <UserCard User={users[3]} /> */}
      </div>
    </div>
  );
};

export default HOC;
