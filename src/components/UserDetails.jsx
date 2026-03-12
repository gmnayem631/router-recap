import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);
  const { website, phone } = user;
  return (
    <div>
      <p>{website}</p>
      <p>{phone}</p>
    </div>
  );
};

export default UserDetails;
