import styles from "./App.module.scss";
import './App.scss';
import Navbar from "./Components/Navbar";
import MySection from "./Components/MySection";
import Location from "./Components/Location";
import Contact from "./Components/Contact";
import { useRef } from "react";

function App(props) {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();

  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <div ref={section1}>
        <MySection
          scrollTo={scrollTo}
          goToSectionRef={section2}
          showArrow={true}
        >
          <h1>Tu bedzie ogolne info</h1>
        </MySection>
      </div>
      <div ref={section2}>
      <MySection
          scrollTo={scrollTo}
          goToSectionRef={section3}
          showArrow={true}
        >
          <Location />
        </MySection>
      </div>
      <div ref={section3}>
        <MySection showArrow={false}>
          <Contact />
        </MySection>
      </div>
    </div>
  );
}

export default App;
