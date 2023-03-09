import { useEffect, useRef } from "react";
import styles from "./MySection.module.scss";

const MySection = (props) => {
  return (
    <div className={styles.section}>
      {props.children}
      {props.showArrow && (
        <button
          className={styles.downarrow}
          onClick={() => props.scrollTo(props.goToSectionRef)}
        >
          Learn More
        </button>
      )}
    </div>
  );
};

export default MySection;
