import React from "react";
import * as s from "./hero_section.module.scss";
import Image from "next/image";
import Button from "../Button/Button";
import img from "../../image/hero/banner-img1.png";

// import img1 from "../../image/hero/bn-shape1.png";
// import img2 from "../../image/hero/bn-shape2.png";
// import img3 from "../../image/hero/bn-shape3.png";
// import img4 from "../../image/hero/bn-shape4.png";
// import img5 from "../../image/hero/bn-shape5.png";
// import img6 from "../../image/hero/bn-shape6.png";
// import img7 from "../../image/hero/bn-shape7.png";
// import img8 from "../../image/hero/bn-shape8.png";
// import img9 from "../../image/hero/bn-shape9.png";
// import img10 from "../../image/hero/bn-shape10.png";
// import img11 from "../../image/hero/bn-shape11.png";
// import img12 from "../../image/hero/bn-shape12.png";
// import BsFillPlayFill from "react-icons/bs"

function Hero_section() {
  return (
    <div className={s.hero__section}>
      <div className="container">
        <div className={s.row}>
          <div className={s.hero__section__left}>
            <h5 className={s.hero__section__sm__title}>A Digital Agency</h5>
            <h1 className={s.hero__section__left__title}>
              We're a full-range digital agency.
            </h1>
            <p className={s.hero__section__left__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={s.hero__section__left__btn}>
              <Button variant="primary" url="/" text="Get Started" />
              <Button variant="transparent" url="/" text="How it works" />
            </div>
          </div>
          <div className={s.hero__section__right}>
            {/*
            <div className={s.hero__section__lg__images}>
              <Image
                className={s.hero__section__lg__img1}
                src={img1}
                alt="hero img"
              />
              <Image
                className={s.hero__section__lg__img2}
                src={img2}
                alt="hero img"
              />
              <Image
                className={s.hero__section__lg__img3}
                src={img3}
                alt="hero img"
              />
              <Image
                className={s.hero__section__lg__img4}
                src={img4}
                alt="hero img"
              />
              <Image
                className={s.hero__section__lg__img5}
                src={img5}
                alt="hero img"
              />
              <Image
                className={s.hero__section__lg__img6}
                src={img6}
                alt="hero img"
              />
              <Image
                className={s.hero__section__lg__img7}
                src={img7}
                alt="hero img"
              />
              <Image
                className={s.hero__section__lg__img8}
                src={img8}
                alt="hero img"
              />
              <Image
                className={s.hero__section__lg__img9}
                src={img9}
                alt="hero img"
              />
              <Image
                className={s.hero__section__lg__img10}
                src={img10}
                alt="hero img"
              />
              <Image
                className={s.hero__section__lg__img11}
                src={img11}
                alt="hero img"
              />
              <Image
                className={s.hero__section__lg__img12}
                src={img12}
                alt="hero img"
              />
            </div>
            */}
            <div className={s.hero__section__sm__img}>
              <Image
                className={s.hero__section__sm__image}
                src={img}
                alt="hero img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero_section;
