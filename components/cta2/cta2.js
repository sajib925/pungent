import React from 'react'
import Button from '../Button/Button';
import * as s from "./cta.module.scss"

function Cta2({subTitle, title, }) {
  return (
    <div className={s.cta__section}>
      <div className="container">
        <div className={s.cta__section__content}>
          <span className={s.cta__section__content__sub__title}>
            {/* So What is Next? */}
            {subTitle}
          </span>
          <h3 className={s.cta__section__content__title}>
            {/* Are You Ready? Let's get to work! */}
            {title}
          </h3>
        </div>
        <div className={s.cta__section__btn}>
          <Button url="/contact_us" text="Contact Us" />
        </div>
      </div>
    </div>
  );
}

export default Cta2