import React, { useRef, useState } from "react";
import * as s from "./feedback_section.module.scss"
import  Image  from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";



import img1 from "../../image/client/client1.png"
import img2 from "../../image/client/client2.png";
import img3 from "../../image/client/client3.png";
import img4 from "../../image/client/client4.png";
import img5 from "../../image/client/client5.png";
import img6 from "../../image/client/client6.png";
import img7 from "../../image/client/client7.png";
import img8 from "../../image/client/client8.png";
import quoteIcon from "../../image/client/left-quote-white.png"


function Feedback_section() {
  return (
    <div className={s.feedback__section}>
      <div className="container">
        <div className={s.feedback__section__feedback__list}>
          <div className={s.feedback__section__feedback__list__quotes__icon}>
            <Image src={quoteIcon} alt="quote icon" />
          </div>
          <div className={s.feedback__section__feedback__list__slider}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className={s.feedback__section__feedback__list__slider__my__swiper}
            >
              <SwiperSlide>
                <p
                  className={
                    s.feedback__section__feedback__list__slider__description
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div
                  className={s.feedback__section__feedback__list__slider__bar}
                ></div>
                <h3
                  className={s.feedback__section__feedback__list__slider__title}
                >
                  John Smith
                </h3>
                <span
                  className={s.feedback__section__feedback__list__slider__meta}
                >
                  CEO & Founder, Envato
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <p
                  className={
                    s.feedback__section__feedback__list__slider__description
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div
                  className={s.feedback__section__feedback__list__slider__bar}
                ></div>
                <h3
                  className={s.feedback__section__feedback__list__slider__title}
                >
                  Oliver Smith
                </h3>
                <span
                  className={s.feedback__section__feedback__list__slider__meta}
                >
                  React JS Specialist
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <p
                  className={
                    s.feedback__section__feedback__list__slider__description
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div
                  className={s.feedback__section__feedback__list__slider__bar}
                ></div>
                <h3
                  className={s.feedback__section__feedback__list__slider__title}
                >
                  Thomas John
                </h3>
                <span
                  className={s.feedback__section__feedback__list__slider__meta}
                >
                  Angular JS Specialist
                </span>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className={s.FeedBack_section__client}>
        <Image
          className={s.FeedBack_section__client__img}
          src={img1}
          alt="client img"
        />
        <Image
          className={s.FeedBack_section__client__img}
          src={img2}
          alt="client img"
        />
        <Image
          className={s.FeedBack_section__client__img}
          src={img3}
          alt="client img"
        />
        <Image
          className={s.FeedBack_section__client__img}
          src={img4}
          alt="client img"
        />
        <Image
          className={s.FeedBack_section__client__img}
          src={img5}
          alt="client img"
        />
        <Image
          className={s.FeedBack_section__client__img}
          src={img6}
          alt="client img"
        />
        <Image
          className={s.FeedBack_section__client__img}
          src={img7}
          alt="client img"
        />
        <Image
          className={s.FeedBack_section__client__img}
          src={img8}
          alt="client img"
        />
      </div>
    </div>
  );
}

export default Feedback_section;