import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email, username } = user;
  return (
    <div className="border">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
