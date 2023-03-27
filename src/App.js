import React from "react";
import { useRef } from "react";
import "./App.scss";
import "./AppStyleReset.scss";
import styles from "./App.module.scss";
import MySection from "./Components/MySection";
import LandingPage from "./Components/LandingPage";
import Location from "./Components/Location";
import Contact from "./Components/Contact";
import Reviews from "./Components/Reviews";
import Services from "./Components/Services";
import About from "./Components/About";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();

  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.absolutediv}>
          <div className={styles.breakOne}></div>
          <AppBar
            position="sticky"
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              paddingTop: "2vh",
              paddingLeft: "15%",
              height: "fit-content",
              width: "fit-content",
              zIndex: "2",
            }}
          >
            <Toolbar
              style={{
                padding: "0",
                margin: "0",
              }}
            >
              <div className={styles.logo} onClick={() => scrollTo(section1)}>
                <div className={styles.logoImg}></div>
                <div className={styles.logoText}>
                  <h1>Germania</h1>
                  <p>tłumacz przysięgły języka niemieckiego</p>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <div className={styles.breakTwo}></div>
          <AppBar
            position="sticky"
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              paddingTop: "2vh",
              paddingRight: "15%",
              display: "flex",
              alignItems: "flex-end",
              width: "100%",
              zIndex: "1",
              transition: "all 0.5s ease",
            }}
          >
            <Toolbar
              style={{
                padding: "0",
                margin: "0",
              }}
            >
              <ul className={styles.links}>
                <li onClick={() => scrollTo(section2)}>oferta</li>
                <li onClick={() => scrollTo(section3)}>o mnie</li>
                <li onClick={() => scrollTo(section4)}>referencje</li>
                <li onClick={() => scrollTo(section5)}>lokalizacja</li>
                <li onClick={() => scrollTo(section6)}>kontakt</li>
              </ul>
            </Toolbar>
          </AppBar>
        </div>
        <div ref={section1}>
          <MySection
            scrollTo={scrollTo}
            goToSectionRef={section2}
            showArrow={true}
          >
            <LandingPage
              scrollTo={scrollTo}
              section1={section1}
              section2={section2}
              section3={section3}
              section4={section4}
              section5={section5}
              section6={section6}
            />
          </MySection>
        </div>
        <div ref={section2}>
          <MySection
            scrollTo={scrollTo}
            goToSectionRef={section3}
            showArrow={false}
          >
            <Services />
          </MySection>
        </div>
        <div ref={section3}>
          <MySection
            scrollTo={scrollTo}
            goToSectionRef={section4}
            showArrow={false}
          >
            <About />
          </MySection>
        </div>
        <div ref={section4}>
          <MySection
            scrollTo={scrollTo}
            goToSectionRef={section5}
            showArrow={false}
          >
            <Reviews />
          </MySection>
        </div>
        <div ref={section5}>
          <MySection
            scrollTo={scrollTo}
            goToSectionRef={section6}
            showArrow={false}
          >
            <Location />
          </MySection>
        </div>
        <div ref={section6}>
          <MySection showArrow={false}>
            <Contact />
          </MySection>
        </div>
      </div>
    </div>
  );
}

export default App;
