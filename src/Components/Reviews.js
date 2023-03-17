import styles from "./Reviews.module.scss";
import "./UI/Button.scss";
import arrow from "./../icons/arrow-menu.svg";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} content`}>
        <h1>Opinie</h1>
        <p>Przeczytaj opinie wystawione przez moich klientów:</p>
        <div className={styles.row}>
          <ReviewsCard
            initials={"Z. K."}
            text={
              "Bardzo solidna, uprzejma i elastycznie podchodząca do potrzeb klienta pani tłumacz. Błyskawicznie realizuje zlecone prace. Serdecznie polecam!"
            }
          />
          <div className={styles.break}></div>
          <ReviewsCard
            initials={"Ł. Z."}
            text={"Bardzo szybko i profesjonalnie. Polecam."}
          />
        </div>
        <div className={styles.row}>
          <ReviewsCard
            initials={"R. K."}
            text={"Profesjonalizm - to słowo mówi wszystko. Polecam."}
          />
          <div className={styles.break}></div>
          <ReviewsCard
            initials={"M. M."}
            text={
              "Profesjonalna obsługa jak i tłumaczenie, szybko sprawnie do dogadania na każdy temat. Dziękuję, polecam "
            }
          />
        </div>
        <div className={styles.row}>
          <ReviewsCard
            initials={"M. G."}
            text={"Gładko, łatwo i przyjemnie."}
          />
          <div className={styles.break}></div>

          <ReviewsCard
            initials={"M. D."}
            text={
              "Bardzo przyjemna Tłumaczka. Tłumaczenia zawsze wykonane terminowo i wzorowo."
            }
          />
        </div>
        <p>Zachęcam do podzielenia się swoją opinią!</p>
        <div className={`${styles.button} basicbutton`}>
          <a href="https://g.page/r/CWiB1NK3dQ3IEBE/review" target="_blank">
            Napisz opinię
          </a>
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
