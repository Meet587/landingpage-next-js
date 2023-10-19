"use client";
import React from "react";
import style from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo-white.png";
import { usePathname } from "next/navigation";

const Header = () => {
  let path = usePathname();
  return (
    <>
      <div className={`${style.headerWrapper}`}>
        <div className={`${style.header}`}>
          {/* <div className={`${style.logo}`}> */}
          <Link href="/">
            <Image src={logo} width={120} height={`auto`} alt="Investiyd" />
          </Link>
          {/* </div> */}
          <div className={`${style.menu}`}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
