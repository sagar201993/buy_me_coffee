import { uploadToCloudinary } from "@/actions/uploadActions";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent } from "react";

const UploadButton = () => {
  async function upload(ev: ChangeEvent<HTMLInputElement>) {
    const target = ev.target as HTMLInputElement;
    if (target.files?.length) {
      const file = target.files[0];
      const formData = new FormData();
      console.log(formData);
      formData.set("file", file);

      console.log(await uploadToCloudinary(formData));
    }
  }
  return (
    <>
      <label className="bg-gray-200 p-3">
        <FontAwesomeIcon icon={faUpload} />
        <input className="hidden" type="file" onChange={(ev) => upload(ev)} />
      </label>
    </>
  );
};

export default UploadButton;
