import React, { use } from "react";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);

  return <div>Users</div>;
};

export default Users;
