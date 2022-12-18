import Image from 'next/image'
import React from 'react'
import * as s from "./partner__section.module.scss"
import img1 from "../../image/partner/partner1.png"
import img2 from "../../image/partner/partner2.png";
import img3 from "../../image/partner/partner3.png"
import img4 from "../../image/partner/partner4.png"
import img5 from "../../image/partner/partner5.png"
import img6 from "../../image/partner/partner6.png";
import img7 from "../../image/partner/partner7.png";
import img8 from "../../image/partner/partner8.png";
import img9 from "../../image/partner/partner9.png";
import img10 from "../../image/partner/partner10.png";
import img11 from "../../image/partner/partner11.png";
import img12 from "../../image/partner/partner12.png";
import Link from 'next/link';



function Partner__section() {
  return (
    <div className={s.client__section}>
      <div className="container">
        <div className={s.client__section__header}>
          <h2 className={s.client__section__header__title}>Trusted By</h2>
          <p className={s.client__section__header__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={s.client__section__cards}>
          <div className={s.client__section__cards}>
            <div className={s.client__section__cards__card}>
              <div className={s.client__section__cards__card__thumbnail}>
                <Link href="/">
                  <Image className={s.client__section__cards__card__thumbnail__img} src={img1} alt="client" />
                </Link>
              </div>
            </div>
            <div className={s.client__section__cards__card}>
              <div className={s.client__section__cards__card__thumbnail}>
                <Link href="/">
                  <Image className={s.client__section__cards__card__thumbnail__img} src={img2} alt="client" />
                </Link>
              </div>
            </div>
            <div className={s.client__section__cards__card}>
              <div className={s.client__section__cards__card__thumbnail}>
                <Link href="/">
                  <Image className={s.client__section__cards__card__thumbnail__img} src={img3} alt="client" />
                </Link>
              </div>
            </div>
            <div className={s.client__section__cards__card}>
              <div className={s.client__section__cards__card__thumbnail}>
                <Link href="/">
                  <Image className={s.client__section__cards__card__thumbnail__img} src={img4} alt="client" />
                </Link>
              </div>
            </div>
            <div className={s.client__section__cards__card}>
              <div className={s.client__section__cards__card__thumbnail}>
                <Link href="/">
                  <Image className={s.client__section__cards__card__thumbnail__img} src={img5} alt="client" />
                </Link>
              </div>
            </div>
            <div className={s.client__section__cards__card}>
              <div className={s.client__section__cards__card__thumbnail}>
                <Link href="/">
                  <Image className={s.client__section__cards__card__thumbnail__img} src={img6} alt="client" />
                </Link>
              </div>
            </div>
            <div className={s.client__section__cards__card}>
              <div className={s.client__section__cards__card__thumbnail}>
                <Link href="/">
                  <Image className={s.client__section__cards__card__thumbnail__img} src={img7} alt="client" />
                </Link>
              </div>
            </div>
            <div className={s.client__section__cards__card}>
              <div className={s.client__section__cards__card__thumbnail}>
                <Link href="/">
                  <Image className={s.client__section__cards__card__thumbnail__img} src={img8} alt="client" />
                </Link>
              </div>
            </div>
            <div className={s.client__section__cards__card}>
              <div className={s.client__section__cards__card__thumbnail}>
                <Link href="/">
                  <Image className={s.client__section__cards__card__thumbnail__img} src={img9} alt="client" />
                </Link>
              </div>
            </div>
            <div className={s.client__section__cards__card}>
              <div className={s.client__section__cards__card__thumbnail}>
                <Link href="/">
                  <Image className={s.client__section__cards__card__thumbnail__img} src={img10} alt="client" />
                </Link>
              </div>
            </div>
             <div className={s.client__section__cards__card}>
              <div className={s.client__section__cards__card__thumbnail}>
                <Link href="/">
                  <Image className={s.client__section__cards__card__thumbnail__img} src={img11} alt="client" />
                </Link>
              </div>
            </div>
             <div className={s.client__section__cards__card}>
              <div className={s.client__section__cards__card__thumbnail}>
                <Link href="/">
                  <Image className={s.client__section__cards__card__thumbnail__img} src={img12} alt="client" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner__section