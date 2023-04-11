import styles from "./ReviewsCard.module.scss";
import star from "./../icons/star.png";

const ReviewsCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.toprow}>
        <div className={styles.toprowleft}>
        <p className={styles.textsmall}>{props.initials}</p>
        <p className={styles.textmini}>Wystawiona w Opiniach Google</p>
        </div>
        <div className={styles.stars}>
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
        </div>
      </div>
      <div className={styles.quote}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
