import { useEffect, useRef } from "react";
import styles from "./MySection.module.scss";

const MySection = ({scrollTo, goToSectionRef, showArrow}) => {
  return (
    <div className={styles.section}>
      <div className={styles.copy}>
        <h2>Lorem Ipsum</h2>
      </div>
      {showArrow && <button className={styles.downarrow} onClick={()=> scrollTo(goToSectionRef)}>Learn More</button>}
    </div>
  );
};

export default MySection;
