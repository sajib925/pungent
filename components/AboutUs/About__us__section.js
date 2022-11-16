import React from "react";
import Image from "next/image";
import * as s from "./about_us_section.module.scss";
import img from "../../image/about-us/about-img1.jpg";

function About__us__section() {
  return (
    <div className={s.about__us__section}>
      <div className="container">
        <div className={s.about__us__section__content}>
          <div className={s.about__us__section__content__thumbnail}>
            <Image src={img} alt="about us image" />
          </div>
          <div className={s.about__us__section__content__text}>
            <div className={s.about__us__section__content__text__section__top}>
              <h2
                className={
                  s.about__us__section__content__text__section__top__title
                }
              >
                About Us
              </h2>
              <p
                className={
                  s.about__us__section__content__text__section__top__description
                }
              >
                Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In
                sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend
                et tiram.
              </p>
            </div>
            <div
              className={s.about__us__section__content__text__section__bottom}
            >
              <h4
                className={
                  s.about__us__section__content__text__section__bottom__title
                }
              >
                Who We Are
              </h4>
              <p
                className={
                  s.about__us__section__content__text__section__bottom__description
                }
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div
              className={s.about__us__section__content__text__section__bottom}
            >
              <h4
                className={
                  s.about__us__section__content__text__section__bottom__title
                }
              >
                Our History
              </h4>
              <p
                className={
                  s.about__us__section__content__text__section__bottom__description
                }
              >
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth.
              </p>
            </div>
            <div
              className={s.about__us__section__content__text__section__bottom}
            >
              <h4
                className={
                  s.about__us__section__content__text__section__bottom__title
                }
              >
                Our History
              </h4>
              <p
                className={
                  s.about__us__section__content__text__section__bottom__description
                }
              >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About__us__section;
