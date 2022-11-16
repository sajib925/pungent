import React from 'react'
import * as s from "./CTA.module.scss"
import Button from './../Button/Button';

function CTA__SECTION() {
  return (
    <div className={s.cta__section}>
      <div className="container">
        <div className={s.cta__section__content}>
          <div className={s.cta__section__content__text}>
            <h2 className={s.cta__section__content__text__title}>
              Have a project in mind?
            </h2>
            <p className={s.cta__section__content__text__description}>
              Let's get to work
            </p>
          </div>
          <div className={s.cta__section__content__btn}>
            <Button url="/" text="View Case Study" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA__SECTION