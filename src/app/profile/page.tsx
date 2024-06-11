"use server";
import ProfileInfoForm from "@/components/ProfileInfoForm";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto px-4 ">
        <ProfileInfoForm />
        <div>donatuon list</div>
      </div>
    </>
  );
};

export default ProfilePage;
