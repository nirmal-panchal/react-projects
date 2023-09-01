import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-hot-toast";

const UpdateContact = ({ isUpdate, handleCloseAM, openAM, contact }) => {
  const AddContact = async (data) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, data);
      toast.success("contact Added");
      handleCloseAM();
    } catch (error) {
      console.log(error);
    }
  };

  const EditContact = async (data, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, data);
      toast.success("contact updated");
      handleCloseAM();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal closeAM={handleCloseAM} openAM={openAM}>
        <Formik
          initialValues={
            isUpdate
              ? {
                  name: contact?.name,
                  email: contact?.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate ? EditContact(values, contact.id) : AddContact(values);
          }}
        >
          <Form className="flex flex-col">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10 rounded-sm p-1"></Field>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="border h-10 rounded-sm p-1"
              ></Field>
            </div>
            <button className="mt-4 self-end bg-darkYellow p-1.5 border border-black rounded-lg">
              {isUpdate ? "Update Contact" : "Add Contact"}
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default UpdateContact;
