import About__us__section from "../components/AboutUs/About__us__section";
import Blog_section from "../components/Blog_Section/Blog_section";
import Partner__section from "../components/Client/Partner__section";
import CTA__SECTION from "../components/CTA/CTA__SECTION";
import Feedback_section from "../components/Feedback_section/Feedback_section";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/header";
import Hero_section from "../components/Hero_section/Hero_section";
import OurServices from "../components/OurServices/OurServices";
import Our_works from "../components/Our_works/Our_works";
import Our_work_process from "../components/Our_work_process/Our_work_process";
import Rating_section from "../components/Rating/Rating_section";
import Team from "../components/Team/Team";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero_section />
      <OurServices />
      <About__us__section />
      <Our_works />
      <Our_work_process />
      <Feedback_section />
      <Team />
      <Rating_section />
      <Blog_section />
      <CTA__SECTION />
      <Partner__section />
      <Footer />
    </div>
  )
}
