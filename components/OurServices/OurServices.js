import React from "react";
import * as s from "./our_services.module.scss"
import {RiMessage2Line} from "react-icons/ri";

function OurServices() {
  return (
    <div className={s.our__services__section}>
      <div className="container">
        <h2 className={s.our__services__section__title}>Our Services</h2>
        <p className={s.our__services__section__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <div className={s.our__services__section__cards}>
          <div className={s.our__services__section__cards__card}>
            <span className={s.our__services__section__cards__card__icon}>
              <RiMessage2Line />
            </span>
            <h3 className={s.our__services__section__cards__card__title}>
              Business Consultancy
            </h3>
            <p className={s.our__services__section__cards__card__description}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </p>
          </div>
          <div className={s.our__services__section__cards__card}>
            <span className={s.our__services__section__cards__card__icon}>
              <RiMessage2Line />
            </span>
            <h3 className={s.our__services__section__cards__card__title}>
              Web Development
            </h3>
            <p className={s.our__services__section__cards__card__description}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </p>
          </div>
          <div className={s.our__services__section__cards__card}>
            <span className={s.our__services__section__cards__card__icon}>
              <RiMessage2Line />
            </span>
            <h3 className={s.our__services__section__cards__card__title}>
              Digital Marketing
            </h3>
            <p className={s.our__services__section__cards__card__description}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </p>
          </div>
          <div className={s.our__services__section__cards__card}>
            <span className={s.our__services__section__cards__card__icon}>
              <RiMessage2Line />
            </span>
            <h3 className={s.our__services__section__cards__card__title}>
              Mobile App Development
            </h3>
            <p className={s.our__services__section__cards__card__description}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </p>
          </div>
          <div className={s.our__services__section__cards__card}>
            <span className={s.our__services__section__cards__card__icon}>
              <RiMessage2Line />
            </span>
            <h3 className={s.our__services__section__cards__card__title}>
              eCommerce Development
            </h3>
            <p className={s.our__services__section__cards__card__description}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </p>
          </div>
          <div className={s.our__services__section__cards__card}>
            <span className={s.our__services__section__cards__card__icon}>
              <RiMessage2Line />
            </span>
            <h3 className={s.our__services__section__cards__card__title}>
              Marketing & Reporting
            </h3>
            <p className={s.our__services__section__cards__card__description}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
