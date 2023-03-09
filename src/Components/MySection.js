import styles from "./MySection.module.scss";

const MySection = (props) => {
  return (
    <div className={styles.section}>
      {props.children}
      {/* {props.image && <img src={props.image} />} */}
      {props.showArrow && (
        <button
          className={styles.downarrow}
          onClick={() => props.scrollTo(props.goToSectionRef)}
        ></button>
      )}
    </div>
  );
};

export default MySection;
