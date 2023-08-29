import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const ClickHandler = (val) => {
    if (val === 1) console.log("via support chat");
    if (val === 2) console.log("Via Call");
    if (val === 3) console.log("Via email");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      text: "",
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={"24px"} />}
            ClickHandler={ClickHandler}
            clkVal={1}
          />
          <Button
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize={"24px"} />}
            ClickHandler={ClickHandler}
            clkVal={2}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          ClickHandler={ClickHandler}
          clkVal={3}
          icon={<HiMail fontSize={"24px"} />}
        />
        <form onSubmit={submitHandler}>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              value={formData.name}
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">email</label>
            <input
              name="email"
              value={formData.email}
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="text">text</label>
            <textarea
              name="text"
              rows="8"
              value={formData.text}
              onChange={(e) =>
                setFormData({ ...formData, text: e.target.value })
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit" icon={<HiMail fontSize={"24px"} />} />
          </div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/person.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
