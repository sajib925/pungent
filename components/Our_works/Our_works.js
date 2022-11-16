import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as s from "./our_works.module.scss";
import Button from "./../Button/Button";

/*image import */

import shapeImage1 from "../../image/our-work/studie-shape1.png";
import shapeImage2 from "../../image/our-work/studie-shape2.png";
import shapeImage3 from "../../image/our-work/studie-shape3.png";
import shapeImage4 from "../../image/our-work/studie-shape4.png";
import shapeImage5 from "../../image/our-work/studie-shape5.png";
import shapeImage6 from "../../image/our-work/studie-shape6.png";

function Our_works() {
  return (
    <div className={s.our__works__section}>
      <div className="container">
        <div className={s.our__works__section__header}>
          <h2 className={s.our__works__section__header__title}>Our Works</h2>
          <p className={s.our__works__section__header__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={s.our__works__section__cards}>
          <div className={s.our__works__section__cards__col}>
            <div
              className={`${s.our__works__section__cards__col__card} ${s.our__works__section__cards__col__card__one}`}
            >
              <div className={s.our__works__section__cards__col__card__content}>
                <Link
                  href="/"
                  className={
                    s.our__works__section__cards__col__card__content__sm__title
                  }
                >
                  Web Design
                </Link>
                <h3
                  className={
                    s.our__works__section__cards__col__card__content__title
                  }
                >
                  <Link
                    className={
                      s.our__works__section__cards__col__card__content__title__link
                    }
                    href="/"
                  >
                    Designing a better cinema experience
                  </Link>
                </h3>
              </div>
              <div className={s.our__works__section__cards__col__card__btn}>
                <Button url="/" text="View Case Study" />
              </div>
              <div className={s.our__works__section__cards__col__card__shape}>
                <Image src={shapeImage1} alt="shape" />
              </div>
            </div>
          </div>
          <div className={s.our__works__section__cards__col}>
            <div
              className={`${s.our__works__section__cards__col__card} ${s.our__works__section__cards__col__card__two}`}
            >
              <div className={s.our__works__section__cards__col__card__content}>
                <Link
                  href="/"
                  className={
                    s.our__works__section__cards__col__card__content__sm__title
                  }
                >
                  Development
                </Link>
                <h3
                  className={
                    s.our__works__section__cards__col__card__content__title
                  }
                >
                  <Link
                    className={
                      s.our__works__section__cards__col__card__content__title__link
                    }
                    href="/"
                  >
                    Building design process within teams
                  </Link>
                </h3>
              </div>
              <div className={s.our__works__section__cards__col__card__btn}>
                <Button url="/" text="View Case Study" />
              </div>
              <div className={s.our__works__section__cards__col__card__shape}>
                <Image src={shapeImage2} alt="shape" />
              </div>
            </div>
          </div>
          <div className={s.our__works__section__cards__col}>
            <div
              className={`${s.our__works__section__cards__col__card} ${s.our__works__section__cards__col__card__three}`}
            >
              <div className={s.our__works__section__cards__col__card__content}>
                <Link
                  href="/"
                  className={
                    s.our__works__section__cards__col__card__content__sm__title
                  }
                >
                  Web Development
                </Link>
                <h3
                  className={
                    s.our__works__section__cards__col__card__content__title
                  }
                >
                  <Link
                    className={
                      s.our__works__section__cards__col__card__content__title__link
                    }
                    href="/"
                  >
                    How intercom brings play into their design process
                  </Link>
                </h3>
              </div>
              <div className={s.our__works__section__cards__col__card__btn}>
                <Button url="/" text="View Case Study" />
              </div>
              <div className={s.our__works__section__cards__col__card__shape}>
                <Image src={shapeImage3} alt="shape" />
              </div>
            </div>
          </div>
          <div className={s.our__works__section__cards__col}>
            <div
              className={`${s.our__works__section__cards__col__card} ${s.our__works__section__cards__col__card__four}`}
            >
              <div className={s.our__works__section__cards__col__card__content}>
                <Link
                  href="/"
                  className={
                    s.our__works__section__cards__col__card__content__sm__title
                  }
                >
                  React Development
                </Link>
                <h3
                  className={
                    s.our__works__section__cards__col__card__content__title
                  }
                >
                  <Link 
                  className={s.our__works__section__cards__col__card__content__title__link}
                  href="/">
                    Stuck with to-do list, I created a new app for myself
                  </Link>
                </h3>
              </div>
              <div className={s.our__works__section__cards__col__card__btn}>
                <Button url="/" text="View Case Study" />
              </div>
              <div className={s.our__works__section__cards__col__card__shape}>
                <Image src={shapeImage4} alt="shape" />
              </div>
            </div>
          </div>
          <div className={s.our__works__section__cards__col}>
            <div
              className={`${s.our__works__section__cards__col__card} ${s.our__works__section__cards__col__card__five}`}
            >
              <div className={s.our__works__section__cards__col__card__content}>
                <Link
                  href="/"
                  className={
                    s.our__works__section__cards__col__card__content__sm__title
                  }
                >
                  Angular Development
                </Link>
                <h3
                  className={
                    s.our__works__section__cards__col__card__content__title
                  }
                >
                  <Link 
                  className={s.our__works__section__cards__col__card__content__title__link}
                  href="/">Examples of different types of sprints</Link>
                </h3>
              </div>
              <div className={s.our__works__section__cards__col__card__btn}>
                <Button url="/" text="View Case Study" />
              </div>
              <div className={s.our__works__section__cards__col__card__shape}>
                <Image src={shapeImage5} alt="shape" />
              </div>
            </div>
          </div>
          <div className={s.our__works__section__cards__col}>
            <div
              className={`${s.our__works__section__cards__col__card} ${s.our__works__section__cards__col__card__six}`}
            >
              <div className={s.our__works__section__cards__col__card__content}>
                <Link
                  href="/"
                  className={
                    s.our__works__section__cards__col__card__content__sm__title
                  }
                >
                  App Development
                </Link>
                <h3
                  className={
                    s.our__works__section__cards__col__card__content__title
                  }
                >
                  <Link
                  className={s.our__works__section__cards__col__card__content__title__link}
                  href="/">Redesigning the New York times app</Link>
                </h3>
              </div>
              <div className={s.our__works__section__cards__col__card__btn}>
                <Button url="/" text="View Case Study" />
              </div>
              <div className={s.our__works__section__cards__col__card__shape}>
                <Image src={shapeImage6} alt="shape" />
              </div>
            </div>
          </div>
        </div>
        <div className={s.our__works__section__btn}>
          <Button variant="primary" url="/" text="View More Work" />
        </div>
      </div>
    </div>
  );
}

export default Our_works;
