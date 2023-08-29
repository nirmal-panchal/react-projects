import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`container ${styles.navbar}`}>
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
