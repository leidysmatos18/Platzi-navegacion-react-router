import React from "react";
import { useAuth } from "../hooks/auth";

const ProfilePage = () => {
  const auth = useAuth();
  return (
    <div>
      <h1 className="fs-1 text-center my-4">Profile</h1>
      <p>Welcome, {auth.user.username}</p>
    </div>
  );
};

export default ProfilePage;
