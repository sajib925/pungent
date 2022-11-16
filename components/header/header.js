import Link from "next/link";
import React, {useEffect,useState} from "react";
import {useRouter} from "next/router";
import * as s from "./header.module.scss";
import Image from "next/image";
import logo from "../../image/logo/logo.png";

function Header() {
  const {pathname} = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [fix, setFix] = useState(false);

  const MobileMenuClick = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
  };

  const setFixed = () => {
    if (window.scrollY >= 300) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  },[]);


  return (
    <header className={fix ? `${s.header} ${s.fixed__header}` : s.header}>
      <div className="container">
        <nav className={s.nav}>
          <div className="row">
            <div className={s.logo}>
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <div className={s.mobile_btn} onClick={MobileMenuClick}>
              <div
                className={
                  mobileMenu
                    ? `${s.close_mobile_bar} ${s.mobile_bar}`
                    : s.mobile_bar
                }
              >
                <span className={s.icon_bar}></span>
                <span className={s.icon_bar}></span>
                <span className={s.icon_bar}></span>
              </div>
            </div>
            <nav
              className={mobileMenu ? `${s.navbar_open} ${s.navbar}` : s.navbar}
            >
              <ul className={s.nav_links}>
                <li className={s.nav_item}>
                  <Link
                    className={
                      pathname === "/"
                        ? `${s.nav_link} ${s.nav_link_active}`
                        : s.nav_link
                    }
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className={s.nav_item}>
                  <Link
                    className={
                      pathname === "/services"
                        ? `${s.nav_link} ${s.nav_link_active} ${s.color}`
                        : s.nav_link
                    }
                    href="/services"
                  >
                    Services
                  </Link>
                </li>
                <li className={s.nav_item}>
                  <Link
                    className={
                      pathname === "/about_us"
                        ? `${s.nav_link} ${s.nav_link_active}`
                        : s.nav_link
                    }
                    href="/about_us"
                  >
                    About Us
                  </Link>
                </li>
                <li className={s.nav_item}>
                  <Link
                    className={
                      pathname === "/portfolio"
                        ? `${s.nav_link} ${s.nav_link_active}`
                        : s.nav_link
                    }
                    href="/portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className={s.nav_item}>
                  <Link
                    className={
                      pathname === "/pages"
                        ? `${s.nav_link} ${s.nav_link_active}`
                        : s.nav_link
                    }
                    href="/pages"
                  >
                    Pages
                  </Link>
                </li>
                <li className={s.nav_item}>
                  <Link
                    className={
                      pathname === "/blog"
                        ? `${s.nav_link} ${s.nav_link_active}`
                        : s.nav_link
                    }
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className={s.nav_item}>
                  <Link
                    className={
                      pathname === "/contact_us"
                        ? `${s.nav_link} ${s.nav_link_active}`
                        : s.nav_link
                    }
                    href="/contact_us"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className={s.nav_item}>
                  <Link className={s.nav_btn} href="/contact_us">
                    Get Started
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
