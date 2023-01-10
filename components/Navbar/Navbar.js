import React from "react";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <nav>
      <Link href="#">Home</Link>
      <Link href="#">About Me</Link>
      <Link href="#">Posts</Link>
    </nav>
  );
};

export default Navbar;
