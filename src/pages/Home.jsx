import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { homeSection } from "../data/HomeSection";
import { coursesSection } from "../data/CoursesSection";
import { tutorsSection, tutorsList } from "../data/TutorsSection";
import { parnersSection, partnersList } from "../data/PartnersSection";
import { contactSection } from "../data/ContactSection";
import Partners from "../components/Partners";

import Tutors from "../components/Tutors";

import parse from "html-react-parser";
import Contact from "../components/Contact";

import "../styles/Home.css";
function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* Home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>

        {/* course */}
        <section id="courses">
          <div className="kolom">{parse(coursesSection.content)}</div>
          <img src={coursesSection.image} />
        </section>

        {/* Tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorsSection.content)}</div>
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>

        {/* Partners */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(parnersSection.content)}</div>
            <Partners partnersList={partnersList} />
          </div>
        </section>
      </div>
      <Contact contactSection={contactSection} />
      <Footer />
    </>
  );
}

export default Home;
