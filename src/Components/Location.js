import styles from "./Location.module.scss";
import "./UI/Button.scss";
import arrow from "./../icons/arrow-menu.svg";

const Location = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} content`}>
        <div className={styles.left}>
          <div>
            <h1>Lokalizacja</h1>
            <p>ul. Newtona 12A/34 60-161 Poznań</p>
            <div className={`${styles.button} basicbutton`}>
              <a href="https://goo.gl/maps/8AeJWUxtJs2fGiQC9" target="_blank">
                Otwórz lokalizację w Mapach Google{" "}
              </a>
              <img src={arrow} />
            </div>
          </div>
          <div>
            <p>Godziny otwarcia biura:</p>
            <p>poniedziałek - piątek</p>
            <p>8:00-18:00</p>
            <p>sobota - niedziela</p>
            <p>zamknięte</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1217.606173568815!2d16.865784603587553!3d52.38470076827121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704453cd9072901%3A0xc80d75b7d2d48168!2sGermania.%20Dolata%20T.%2C%20mgr%2C%20t%C5%82umacz%20przysi%C4%99g%C5%82y%20j%C4%99z.%20niemieckiego!5e0!3m2!1sen!2spl!4v1677522368289!5m2!1sen!2spl"
          
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
