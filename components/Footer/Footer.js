import React from "react";
import * as s from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../image/logo/logo.png";
import {AiOutlineInstagram} from "react-icons/ai";
import {ImFacebook} from "react-icons/im";
import {ImTwitter} from "react-icons/im";
import {TiSocialLinkedin} from "react-icons/ti";
import {MdLocationPin} from "react-icons/md";
import {TfiHeadphoneAlt} from "react-icons/tfi";
import {CgMail} from "react-icons/cg";

function Footer() {
  return (
    <div className={s.footer__section}>
      <div className="container">
        <div className={s.footer__section__row}>
          <div className={s.footer__section__row__col}>
            <div className={s.footer__section__row__col__content}>
              <div className={s.footer__section__row__col__content__thumbnail}>
                <Link href="/">
                  <Image src={logo} alt="footer logo" />
                </Link>
              </div>

              <p className={s.footer__section__row__col__content__description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <div className={s.slinks}>
                <Link className={s.link} href="/">
                  <ImFacebook size={15} />
                </Link>
                <Link className={s.link} href="/">
                  <ImTwitter size={15} />
                </Link>
                <Link className={s.link} href="/">
                  <TiSocialLinkedin size={20} />
                </Link>
                <Link className={s.link} href="/">
                  <AiOutlineInstagram size={17} />
                </Link>
              </div>
            </div>
          </div>

          <div className={s.footer__section__row__col}>
            <div className={s.footer__section__row__col__content}>
              <h3 className={s.footer__section__row__col__content__title}>
                Explore
              </h3>
              <ul
                className={s.footer__section__row__col__content__footer__links}
              >
                <li
                  className={
                    s.footer__section__row__col__content__footer__links__item
                  }
                >
                  <Link
                    className={
                      s.footer__section__row__col__content__footer__links__item__link
                    }
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li
                  className={
                    s.footer__section__row__col__content__footer__links__item
                  }
                >
                  <Link
                    className={
                      s.footer__section__row__col__content__footer__links__item__link
                    }
                    href="/"
                  >
                    About
                  </Link>
                </li>

                <li
                  className={
                    s.footer__section__row__col__content__footer__links__item
                  }
                >
                  <Link
                    className={
                      s.footer__section__row__col__content__footer__links__item__link
                    }
                    href="/"
                  >
                    Services
                  </Link>
                </li>

                <li
                  className={
                    s.footer__section__row__col__content__footer__links__item
                  }
                >
                  <Link
                    className={
                      s.footer__section__row__col__content__footer__links__item__link
                    }
                    href="/"
                  >
                    Portfolio
                  </Link>
                </li>

                <li
                  className={
                    s.footer__section__row__col__content__footer__links__item
                  }
                >
                  <Link
                    className={
                      s.footer__section__row__col__content__footer__links__item__link
                    }
                    href="/"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={s.footer__section__row__col}>
            <div className={s.footer__section__row__col__content}>
              <h3 className={s.footer__section__row__col__content__title}>
                Quick Links
              </h3>
              <div
                className={s.footer__section__row__col__content__footer__links}
              >
                <li
                  className={
                    s.footer__section__row__col__content__footer__links__item
                  }
                >
                  <Link
                    className={
                      s.footer__section__row__col__content__footer__links__item__link
                    }
                    href="/"
                  >
                    Contact Us
                  </Link>
                </li>

                <li
                  className={
                    s.footer__section__row__col__content__footer__links__item
                  }
                >
                  <Link
                    className={
                      s.footer__section__row__col__content__footer__links__item__link
                    }
                    href="/"
                  >
                    Pricing
                  </Link>
                </li>

                <li
                  className={
                    s.footer__section__row__col__content__footer__links__item
                  }
                >
                  <Link
                    className={
                      s.footer__section__row__col__content__footer__links__item__link
                    }
                    href="/"
                  >
                    Faq
                  </Link>
                </li>

                <li
                  className={
                    s.footer__section__row__col__content__footer__links__item
                  }
                >
                  <Link
                    className={
                      s.footer__section__row__col__content__footer__links__item__link
                    }
                    href="/"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li
                  className={
                    s.footer__section__row__col__content__footer__links__item
                  }
                >
                  <Link
                    className={
                      s.footer__section__row__col__content__footer__links__item__link
                    }
                    href="/"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </div>
            </div>
          </div>

          <div className={s.footer__section__row__col}>
            <div className={s.footer__section__row__col__content}>
              <h3 className={s.footer__section__row__col__content__title}>
                Get in Touch
              </h3>

              <ul className={s.footer__section__address}>
                <li className={s.footer__section__address__item}>
                  <span className={s.footer__section__address__item__icon}>
                    <MdLocationPin size={20} />
                  </span>
                  <span className={s.footer__section__address__item__text}>2750 Quadra Street Victoria, Canada.</span>
                </li>
                <li className={s.footer__section__address__item}>
                  <span className={s.footer__section__address__item__icon}>
                    <TfiHeadphoneAlt size={16} />
                  </span>
                  <div className={s.footer__section__address__item__links}>
                    <Link
                      className={s.footer__section__address__item__links__link}
                      href="/"
                    >
                      +324-9442-515
                    </Link>
                    <Link
                      className={s.footer__section__address__item__links__link}
                      href="#"
                    >
                      +324-9442-999
                    </Link>
                  </div>
                </li>
                <li className={s.footer__section__address__item}>
                  <span className={s.footer__section__address__item__icon}>
                    <CgMail size={20} />
                  </span>

                  <div className={s.footer__section__address__item__links}>
                    <Link
                      className={s.footer__section__address__item__links__link}
                      href="#"
                    >
                      hello@sajib.com
                    </Link>
                    <Link
                      className={s.footer__section__address__item__links__link}
                      href="#"
                    >
                      support@sajib.com
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={s.footer__section__copyright__area}>
        <div className="container">
          <p className={s.footer__section__copyright__area__text}>
            Copyright © 2022 Pungent. All Rights Reserved By
            <Link
              href="/"
              className={s.footer__section__copyright__area__text__link}
            >
              Sajib Ahmed
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
