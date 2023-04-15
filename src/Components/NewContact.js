import styles from "./NewContact.module.scss";
import email from "./../icons/email.png";
import home from "./../icons/home.png";
import call from "./../icons/call.png";
import arrow from "./../icons/arrow-menu.svg";

const NewContact = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} content`}>
        {/* <div className={styles.contenttext}>

        </div> */}
        <div className={styles.left}>
          <h1 className={styles.text}>Skontaktuj sie ze mna</h1>
          <div className={styles.contactbox}>
            <img src={call} />
            <div className={styles.contactboxtext}>
              <p>Pod numerem telefonu:</p>
              <p>+48 500 039 101</p>
              <p>+48 61 8 670 508</p>
            </div>
          </div>
          <div className={styles.contactbox}>
            <img src={email} />
            <div className={styles.contactboxtext}>
              <p>Poprzez wiadomość e-mail:</p>
              <p>dolata@germania.pl</p>
            </div>
          </div>
          <div className={styles.contactbox}>
            <img src={home} />
            <div className={styles.contactboxtext}>
              <p>Osobiście w biurze:</p>
              <p>ul. Newtona 12A/34</p>
              <p>60-161 Poznań</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <form
            action="https://formsubmit.co/juliadolata007@gmail.com"
            method="POST"
          >
            <p>Lub poprzez formularz kontaktowy:</p>
            <textarea
              type="text"
              name="Wiadomość"
              placeholder="Tutaj wpisz swoją wiadomość"
              required
            ></textarea>
            <p>Podaj swoje dane kontaktowe, aby umożliwić mi odpowiedź:</p>
            <div className={styles.formbottom}>
              <input
                type="text"
                name="Imię i nazwisko"
                placeholder="Imię i nazwisko"
                required
              />
              <input type="email" name="Email" placeholder="E-mail" required />
              <input
                type="text"
                name="Numer telefonu"
                placeholder="Numer telefonu"
              />
            </div>
            <div className={`${styles.button} basicbutton`} type="submit">
              <button type="submit">wyslij</button>
              {/* <a href="https://g.page/r/CWiB1NK3dQ3IEBE/review" target="_blank">
            Napisz opinię
          </a> */}
              <img src={arrow} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
