import styles from "./MySection.module.scss";

const MySection = (props) => {
  return (
    <div className={styles.section}>
      {props.children}
      {props.showArrow && (
        <div
          className={styles.downarrow}
          onClick={() => props.scrollTo(props.goToSectionRef)}
        ></div>
      )}
    </div>
  );
};

export default MySection;
