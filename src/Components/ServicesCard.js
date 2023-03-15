import styles from "./ServicesCard.module.scss";

const ServicesCard = (props) => {
        return (
        <div className={styles.container}>
            <img src={props.icon} />
            <p className={`${styles[props.color]}`}>{props.text}</p>
        </div>
    );
};

export default ServicesCard;