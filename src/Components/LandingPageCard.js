import styles from "./LandingPageCard.module.scss";

const LandingPageCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentbox}>
        <div className={styles.rotateBox}>
        <p className={styles.rotate}>{props.name}</p>
        </div>
        <div className={styles.textbox}>
          <p>{props.text}</p>
          <button className={styles.rightarrow}></button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageCard;
