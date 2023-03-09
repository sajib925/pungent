import React from 'react'
import * as s from "./rating.module.scss"
import {BsSuitHeart} from "react-icons/bs";
import {IoDiamondOutline} from "react-icons/io5";
import {BiBriefcase} from "react-icons/bi";

function Rating_section() {
  return (
    <div className={s.rating__section}>
      <div className="container">
        <div className={s.rating__section__cards}>
          <div className={s.rating__section__cards__card}>
            <div className={s.rating__section__cards__card__content}>
              <span className={s.rating__section__cards__card__content__icon}>
                <BsSuitHeart size={60} />
              </span>
              <h3 className={s.rating__section__cards__card__content__title}>
                799
                <span>k</span>
              </h3>
              <p
                className={s.rating__section__cards__card__content__description}
              >
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete
              </p>
            </div>
          </div>

          <div className={s.rating__section__cards__card}>
            <div className={s.rating__section__cards__card__content}>
              <span className={s.rating__section__cards__card__content__icon}>
                <IoDiamondOutline size={60} color="#ff2c9c" />
              </span>
              <h3 className={s.rating__section__cards__card__content__title}>
                499
                <span>k</span>
              </h3>
              <p
                className={s.rating__section__cards__card__content__description}
              >
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete
              </p>
            </div>
          </div>

          <div className={s.rating__section__cards__card}>
            <div className={s.rating__section__cards__card__content}>
              <span className={s.rating__section__cards__card__content__icon}>
                <BiBriefcase size={60} />
              </span>
              <h3 className={s.rating__section__cards__card__content__title}>
                990
                <span>k</span>
              </h3>
              <p
                className={s.rating__section__cards__card__content__description}
              >
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating_section