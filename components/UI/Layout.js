import React, { Fragment } from "react";

import { useRouter } from "next/router";

import Navbar from "../navbar/Navbar";
import Hero from "./Hero";

import classes from "./Layout.module.css";

const Layout = (props) => {
  const router = useRouter();

  return (
    <Fragment>
      <header className={classes.gutter} style={{ backgroundColor: `grey` }}>
        <Navbar />
        {router.pathname == "/" && <Hero />}
      </header>
      <main className={classes.gutter}>{props.children}</main>
      <footer
        className={classes.gutter}
        style={{ backgroundColor: `grey`, height: `5rem` }}
      >
        <p>Footer Stuff</p>
      </footer>
    </Fragment>
  );
};

export default Layout;
