import React, { Fragment } from "react";

import Navbar from "../Navbar/Navbar";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <header
        className={classes.gutter}
        style={{
          backgroundImage: `url(https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India-1200x900.jpg)`,
        }}
      >
        <Navbar />

        <h1 className={classes["main-title"]}>{props.mainMsg}</h1>
      </header>
      <main className={classes.gutter}>{props.children}</main>
      <footer className={classes.gutter}>
        {
          //footer
        }
      </footer>
    </Fragment>
  );
};

export default Layout;
