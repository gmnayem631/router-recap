import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);
  const goBack = useNavigate();
  const { website, phone } = user;
  return (
    <div>
      <p>{website}</p>
      <p>{phone}</p>
      <button
        onClick={() => goBack(-1)}
        className="cursor-pointer border border-amber-500 p-2 rounded-xl"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
