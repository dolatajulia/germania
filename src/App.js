import styles from "./App.module.scss";
import MySection from "./Components/MySection";
import { useRef } from "react";

function App(props) {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();

  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`container ${styles.container}`}>
      <div ref={section1}>
        <MySection
          scrollTo={scrollTo}
          goToSectionRef={section2}
          showArrow={true}
        />
      </div>
      <div ref={section2}>
        <MySection scrollTo={scrollTo} goToSectionRef={section3} showArrow={true} />
      </div>
      <div ref={section3}>
        <MySection showArrow={false} />
      </div>
    </div>
  );
}

export default App;
