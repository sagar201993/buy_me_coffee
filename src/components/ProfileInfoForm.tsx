"use client";
import { saveProfile } from "@/actions/profileInfoActions";
import { uploadToS3 } from "@/actions/uploadActions";
import { ChangeEvent } from "react";

const ProfileInfoForm = () => {
  async function handlesaveProfile(formData: FormData) {
    const result = await saveProfile(formData);
  }
  async function upload(ev: ChangeEvent<HTMLInputElement>) {
    const target = ev.target as HTMLInputElement;
    if (target.files?.length) {
      const file = target.files[0];
      const formData = new FormData();
      formData.set("file", file);

      console.log(await uploadToS3(formData));
    }
  }
  return (
    <form action={handlesaveProfile}>
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="rounded-full bg-gray-300 w-24 h-24 flex items-center justify-center">
          avatar
        </div>
        <div className="mt-4">
          <input type="file" onChange={(ev) => upload(ev)} />
        </div>
      </div>

      <div className="mt-4">
        <label className="block" htmlFor="usernameIn">
          Username
        </label>
        <input
          id="usernameIn"
          type="text"
          name="username"
          placeholder="username"
          className="w-full p-2 mt-1 border rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block" htmlFor="displayNameIn">
          Display Name
        </label>
        <input
          id="displayNameIn"
          name="displayName"
          type="text"
          placeholder="display name"
          className="w-full p-2 mt-1 border rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block" htmlFor="bioIn">
          Bio
        </label>
        <textarea
          id="bioIn"
          placeholder="bio"
          name="bio"
          className="w-full p-2 mt-1 border rounded"
        ></textarea>
      </div>

      <div className="mt-4">
        <button className="bg-yellow-300 px-4 py-2 rounded-lg">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ProfileInfoForm;
