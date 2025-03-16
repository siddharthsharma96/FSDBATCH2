import { useContext } from "react";
import UserCard from "./UserCard";
import UserWithAddtionalData from "./UserWithAdditonalData";
import UserContext from "./UserContext";
import LoginContext from "./loginContext";

const HOC = () => {
  const { userName } = useContext(UserContext);
  //   const { a } = useContext(LoginContext);
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
  const ASD = UserWithAddtionalData(UserCard);
  return (
    <div>
      <h1>{userName}</h1>
      {/* <h1>{a}</h1> */}
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
      <div className="section">
        {users.map((user) => {
          return <ASD key={user.id} User={user} />;
        })}
      </div>
    </div>
  );
};

export default HOC;
