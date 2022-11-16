import React from "react";
import * as s from "./team.module.scss";
import Image from "next/image";
import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr"
import {AiOutlineTwitter} from "react-icons/ai";
import {GrFacebookOption} from "react-icons/gr";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineDribbble} from "react-icons/ai";
import img1 from "../../image/team/circle-team1.jpg";
import img2 from "../../image/team/circle-team2.jpg";
import img3 from "../../image/team/circle-team3.jpg";
import img4 from "../../image/team/circle-team4.jpg";


function Team() {

const TEAM_MEMBER = [
  {
    id: "1",
    thumbnail: img1,
    title: "James White",
    meta: "CEO & Founder",
  },
  {
    id: "2",
    thumbnail: img2,
    title: "Johnson Lee",
    meta: "Backend Specialist",
  },
  {
    id: "3",
    thumbnail: img3,
    title: "Williams Smith",
    meta: "Front-end Specialist",
  },
  {
    id: "4",
    thumbnail: img4,
    title: "David Miller",
    meta: "Reactjs Specialist",
  },
]; 

  return (
    <div className={s.team__section}>
      <div className="container">
        <div className={s.team__section__header}>
          <h2 className={s.team__section__header__title}>Skilled Team</h2>
          <p className={s.team__section__header__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={s.team__section__cards}>
          {
           TEAM_MEMBER.map((member) => {

            const { id, thumbnail, title, meta} = member;

            return (
              <div className={s.team__section__cards__card} key={id}>
                <div className={s.team__section__cards__card__content}>
                  <Image
                    className={s.team__section__cards__card__content__thumbnail}
                    src={thumbnail}
                    alt="team member"
                  />
                  <div
                    className={s.team__section__cards__card__content__caption}
                  >
                    <h3
                      className={
                        s.team__section__cards__card__content__caption__title
                      }
                    >
                      {title}
                    </h3>
                    <p
                      className={
                        s.team__section__cards__card__content__caption__meta
                      }
                    >
                      {meta}
                    </p>
                    <div
                      className={
                        s.team__section__cards__card__content__caption__links
                      }
                    >
                      <Link
                        className={
                          s.team__section__cards__card__content__caption__links__link
                        }
                        href="/"
                      >
                        <GrLinkedinOption size={16} />
                      </Link>
                      <Link
                        className={
                          s.team__section__cards__card__content__caption__links__link
                        }
                        href="/"
                      >
                        <AiOutlineTwitter size={16} />
                      </Link>
                      <Link
                        className={
                          s.team__section__cards__card__content__caption__links__link
                        }
                        href="/"
                      >
                        <GrFacebookOption size={16} />
                      </Link>
                      <Link
                        className={
                          s.team__section__cards__card__content__caption__links__link
                        }
                        href="/"
                      >
                        <AiOutlineInstagram size={16} />
                      </Link>
                      <Link
                        className={
                          s.team__section__cards__card__content__caption__links__link
                        }
                        href="/"
                      >
                        <AiOutlineDribbble size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );

           })
          }
        </div>
               
                

          
        
      </div>
    </div>
  );
}

export default Team;
