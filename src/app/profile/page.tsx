"use server";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 ">
      <div className="bg-gray-200 p-4 rounded-lg ">
        <div className="rounded-full bg-gray-300 size-24 p-4">avatar</div>
        <div className="">cover image</div>
      </div>

      <div>cover image</div>
      <div>
        <input type="text" placeholder="username" />
      </div>
      <div>
        <input type="text" placeholder="display name" />
        <div>
          <textarea name="" placeholder="bio"></textarea>
        </div>
        <div>
          <button>save changes</button>
        </div>
        <div>donatuon list</div>
      </div>
    </div>
  );
};

export default ProfilePage;
