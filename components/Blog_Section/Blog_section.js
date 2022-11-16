// import React from "react";
import Link from "next/link";
import React from "react";
import * as s from "./blog.module.scss";
import Image from "next/image";
import {HiOutlineChevronDoubleRight} from "react-icons/hi";
import BLOG__DATA from "./Blog_Data";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {Pagination} from "swiper";

function Blog_section() {
  return (
    <div className={s.blog__section}>
      <div className="container">
        <div className={s.blog__section__header}>
          <h2 className={s.blog__section__header__title}>Latest Newss</h2>
          <p className={s.blog__section__header__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={s.blog__section__items}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={s.blog__section__swiper}
          >
            {BLOG__DATA.map(
              ({id, img, imgTitle, date, title, description, link}) => {
                return (
                  <SwiperSlide key={id}>
                    <div className={s.blog__section__items__item}>
                      <div className={s.blog__section__items__item__thumbnail}>
                        <Link
                          className={
                            s.blog__section__items__item__thumbnail__link
                          }
                          href="/"
                        >
                          <Image
                            className={
                              s.blog__section__items__item__thumbnail__link__img
                            }
                            src={img}
                            alt="blog image"
                          />
                        </Link>
                        <div
                          className={
                            s.blog__section__items__item__thumbnail__post__tag
                          }
                        >
                          <Link
                            className={
                              s.blog__section__items__item__thumbnail__post__tag__link
                            }
                            href="/"
                          >
                            {imgTitle}
                          </Link>
                        </div>
                      </div>
                      <div className={s.blog__section__items__item__content}>
                        <span
                          className={
                            s.blog__section__items__item__content__date
                          }
                        >
                          {date}
                        </span>
                        <h3
                          className={
                            s.blog__section__items__item__content__title
                          }
                        >
                          <Link
                            className={
                              s.blog__section__items__item__content__title__link
                            }
                            href="/"
                          >
                            {title}
                          </Link>
                        </h3>
                        <p
                          className={
                            s.blog__section__items__item__content__description
                          }
                        >
                          {description}
                        </p>
                        <Link
                          className={
                            s.blog__section__items__item__content__link
                          }
                          href="/"
                        >
                          {link}
                          <HiOutlineChevronDoubleRight
                            className={
                              s.blog__section__items__item__content__link__icon
                            }
                            size={25}
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Blog_section;
