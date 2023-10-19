import Link from "next/link";
import React from "react";
import style from './footer.module.scss'

const FooterMenu = ({ title, item }) => {
  return (
    <div className={style.list}>
      <h5 className={style.calcTitle}>{title}</h5>
      <ul>
        {item.map((val, i) => {
          return (
            <li key={`link_${i}`}>
              <Link href={val.path}>{val.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterMenu;
