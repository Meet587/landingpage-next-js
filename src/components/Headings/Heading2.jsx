import React from "react";
import style from "./heading2.module.scss";

const Heading2 = ({ title, text }) => {
  return (
    <div className="">
      <h2 className={`${style.heading2}`}>{title}</h2>
      <p className={style.heading2_text}>{text}</p>
    </div>
  );
};

export default Heading2;
