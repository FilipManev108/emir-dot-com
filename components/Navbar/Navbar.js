import React from "react";
import Link from "next/link";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about">About Me</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
};

export default Navbar;
