import React, { useState, useEffect } from "react";

import classes from "./Hero.module.css";
import client from "../../sanity/client";

const Hero = (props) => {
  const [hero, setHero] = useState({ image: "", name: "", title: "" });
  
  useEffect(() => {
    client
      .fetch(`*[_type == 'author'] {name, title, "image": image.asset->url}[0]`)
      .then((data) => setHero(data));
  }, []);

  return (
    <div
      className={classes.hero}
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      {hero.title}
    </div>
  );
};

export default Hero;
