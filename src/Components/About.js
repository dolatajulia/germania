import styles from "./About.module.scss";
import "./UI/Button.scss";
import arrow from "./../icons/arrow-menu.svg";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} content`}>
        <h1>O mnie</h1>
        <p>
          Jestem tłumaczem z wieloletnim doświadczeniem, wpisanym na listę
          tłumaczy Ministerstwa Sprawiedliwości.
        </p>
        <div className={`${styles.button} basicbutton`}>
          <a
            href="https://arch-bip.ms.gov.pl/pl/rejestry-i-ewidencje/tlumacze-przysiegli/lista-tlumaczy-przysieglych/translator,802.html"
            target="_blank"
          >
            Przejdź do wpisu na stronie Ministerstwa Sprawiedliwości{" "}
          </a>
          <img src={arrow} />
        </div>
        <p>
          Moją cechą jest poufność i gwarancja, że tekst nie znajdzie się w
          niepowołanych rękach.
        </p>
      </div>
    </div>
  );
};

export default About;
