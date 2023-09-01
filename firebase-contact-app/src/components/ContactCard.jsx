import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import UpdateContact from "./UpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-hot-toast";

const ContactCard = ({ id, name, email }) => {
  const { openAM, handleCloseAM, handleOpenAM } = useDisclouse();

  const DeleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("contact deleted");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-yellow rounded-lg flex justify-between items-center p-2 mb-[11px]">
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-5xl text-orange" />
          <div className="flex flex-col items-start">
            <h1 className="font-semibold text-[16px] ">{name}</h1>
            <p className=" text-sm">{email}</p>
          </div>
        </div>

        <div className="flex text-3xl">
          <RiEditCircleLine onClick={handleOpenAM} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => {
              DeleteContact(id);
            }}
            className="text-[#5F00D9] cursor-pointer hover:text-[#4B00B9]"
          />
        </div>
      </div>
      <UpdateContact
        isUpdate={true}
        handleCloseAM={handleCloseAM}
        openAM={openAM}
        contact={{ id, name, email }}
      />
    </>
  );
};

export default ContactCard;
