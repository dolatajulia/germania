import "./App.scss";
import "./AppStyleReset.scss";
import styles from "./App.module.scss";
import Navbar from "./Components/Navbar";
import MySection from "./Components/MySection";
import LandingPage from "./Components/LandingPage";
import Location from "./Components/Location";
import Contact from "./Components/Contact";
import { useRef, useState, useEffect } from "react";

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

  const [blockScroll, setBlockScroll] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  const handleScroll = (event) => {
    if (blockScroll) {
      return;
    }
    const sections = [section1, section2, section3, section4, section5, section6]
    sections.forEach((section, index) => {
      if (event.currentTarget.scrollTop > 10 + section.current.offsetTop && event.currentTarget.scrollTop < -10 + section.current.offsetTop + window.innerHeight) {
        console.log('index:', index);
        if (prevScroll < event.currentTarget.scrollTop) {
          console.log('scroll down');
          if (index === 5) {
            return;
          }
          scrollTo(sections[index + 1]);
          setBlockScroll(true);
          setPrevScroll(event.currentTarget.scrollTop);
        } if (prevScroll > event.currentTarget.scrollTop) {
          console.log('scroll up');
          if (index === 0) {
            return;
          }
          scrollTo(sections[index - 1]);
          setBlockScroll(true);
          setPrevScroll(event.currentTarget.scrollTop);
        }
        setTimeout(() => {
          setBlockScroll(false);
        }, 500);
      }
    });
  };


  return (
    <div className={styles.app}>
      <div className={styles.container} onScroll={handleScroll}>
        {/* <Navbar
          scrollTo={scrollTo}
          section1={section1}
          section2={section2}
          section3={section3}
          section4={section4}
          section5={section5}
          section6={section6}
        /> */}
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
            <h1>Tu będzie oferta</h1>
          </MySection>
        </div>
        <div ref={section3}>
          <MySection
            scrollTo={scrollTo}
            goToSectionRef={section4}
            showArrow={false}
          >
            <h1>Tu będzie info o mnie</h1>
          </MySection>
        </div>
        <div ref={section4}>
          <MySection
            scrollTo={scrollTo}
            goToSectionRef={section5}
            showArrow={false}
          >
            <h1>Tu będą referencje</h1>
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
