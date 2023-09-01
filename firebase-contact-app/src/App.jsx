import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

import Navbar from "./components/Navbar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import UpdateContact from "./components/UpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { Toaster } from "react-hot-toast";
import NoData from "./components/NoData";

const App = () => {
  const [contacts, settContacts] = useState([]);
  const { openAM, handleCloseAM, handleOpenAM } = useDisclouse();

  const fetchContacts = async () => {
    try {
      const contactsRef = collection(db, "contacts");
      onSnapshot(contactsRef, (snapshot) => {
        const contactList = snapshot?.docs?.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        settContacts(contactList);
        return contactList;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot?.docs?.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContacts = contactList?.filter((cont) =>
        cont?.name.toLowerCase().includes(value.toLowerCase())
      );
      settContacts(filteredContacts);
      return filteredContacts;
    });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <Toaster position="bottom" />
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex items-center relative flex-grow">
            <AiOutlineSearch className="ml-1 text-white text-3xl absolute " />
            <input
              onChange={filterContacts}
              className="flex-grow h-10 bg-transparent border-white border rounded-md text-white pl-9"
            />
          </div>
          <div
            onClick={handleOpenAM}
            className="cursor-pointer hover:bg-slate-200 w-[52px] h-[52px] flex items-center justify-center rounded-full bg-white"
          >
            <AiOutlinePlus size={20} />
          </div>
        </div>
        <div className="mt-4">
          {contacts.length < 1 ? (
            <NoData />
          ) : (
            contacts?.map((cont) => <ContactCard {...cont} key={cont?.id} />)
          )}
        </div>
      </div>
      <UpdateContact handleCloseAM={handleCloseAM} openAM={openAM} />
    </>
  );
};

export default App;
