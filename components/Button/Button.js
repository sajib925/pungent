import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as s from "./button.module.scss"

function Button({url, text, icon, variant}) {
  return (
    <Link
      href={url}
      className={
        variant === "primary"
          ? `${s.btn} ${s.primary__btn}`
          : variant === "transparent"
          ? `${s.transparent} ${s.btn}`
          : `${s.white__Transparent} ${s.btn}`
      }
    >
      {icon && <Image src={icon} alt="icon" />} {text}
    </Link>
  );
}

export default Button;


