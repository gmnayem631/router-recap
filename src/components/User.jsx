import React from "react";
import { Link, useLocation, useNavigate } from "react-router";

const User = ({ user }) => {
  const { id, name, email, username } = user;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/users/${id}`);
  };

  const location = useLocation();
  console.log(location);
  return (
    <div className="border p-3 rounded-2xl">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Username: {username}</p>
      <Link to={`/users/${id}`}>
        <button className="cursor-pointer border border-amber-500 p-2 rounded-xl">
          Show Details
        </button>
      </Link>
      <button
        onClick={handleNavigate}
        className="cursor-pointer border border-amber-500 p-2 rounded-xl"
      >
        Show details of: {id}
      </button>
    </div>
  );
};

export default User;
