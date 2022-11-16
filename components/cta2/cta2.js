import React from 'react'
import * as s from "./cta.module.scss"

function Cta2() {
  return (
    <div className={s.cta__section}>
      <div className="container">
        <div className={s.cta__section__content}>
          <span className={s.cta__section__content__sub__title}>
            So What is Next?
          </span>
          <h3 className={s.cta__section__content__title}>
            Are You Ready? Let's get to work!
          </h3>
        </div>
        <div className={s.cta__section__btn}></div>
      </div>
    </div>
  );
}

export default Cta2