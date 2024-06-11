"use server";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 ">
      <div className="bg-gray-200 p-4 rounded-lg ">
        <div className="rounded-full bg-gray-300 size-24 p-4">avatar</div>
        <div className="">cover image</div>
      </div>

      <div>
        <label className="mt-4" htmlFor="usernameIn">
          username
        </label>
        <input id="usernameIn" type="text" placeholder="username" />
      </div>
      <div>
        <label className="mt-4" htmlFor="displayNameIn">
          displayname
        </label>
        <input id="displayNameIn" type="text" placeholder="display name" />
        <div>
          <label className="mt-4" htmlFor="bioIn">
            bio
          </label>
          <textarea id="bioIn" name="" placeholder="bio"></textarea>
        </div>
        <div>
          <button className="bg-yellow-300 px-4 py-2 rounded-lg mt-4 ">
            save changes
          </button>
        </div>
        <div>donatuon list</div>
      </div>
    </div>
  );
};

export default ProfilePage;
