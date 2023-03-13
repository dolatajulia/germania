import styles from "./NewLandingPageCard.module.scss";
import arrow from "./../icons/arrow-menu.svg";

const NewLandingPageCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.toprow}>
        <div className={styles.toprowleft}>
          <p>{props.number}</p>
          <h3>{props.name}</h3>
        </div>
        <img src={arrow} />
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default NewLandingPageCard;
