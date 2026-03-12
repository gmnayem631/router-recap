import React, { use } from "react";
import User from "./User";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);

  return (
    <div className="flex">
      Users
      <div className="mt-2 p-2">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
