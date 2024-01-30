import React, { useState } from "react";

const EditUserInfo = ({ user }) => {
  const [userInfo, setUserInfo] = useState({
    name: user.name,
    password: user.password,
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User info updated:", userInfo);
  };

  return (
    <div>
      <h2>Edit User Information</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUserInfo;
