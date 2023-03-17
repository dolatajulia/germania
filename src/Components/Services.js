import styles from "./Services.module.scss";
import "./UI/Button.scss";
import arrow from "./../icons/arrow-menu.svg";
import ServicesCard from "./ServicesCard";
import icon1 from "./../icons/law.png";
import icon2 from "./../icons/education.png";
import icon3 from "./../icons/wrench.png";
import icon4 from "./../icons/employee.png";
import icon5 from "./../icons/car.png";
import icon6 from "./../icons/phone-call.png";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} content`}>
        <h1>Oferta</h1>
        <p>Zajmuję się tłumaczeniem uwierzytelnionym dokumentów takich jak:</p>
        <div className={styles.grid}>
          <ServicesCard
            icon={icon1}
            text={
              "dokumenty sądowe, teksty prawnicze, dokumenty notarialne, teksty ekonomiczne"
            }
            color={"black"}
          />
          <ServicesCard
            icon={icon2}
            text={
              "dokumenty związane z\u00A0kształceniem się takie jak świadectwa, dyplomy, certyfikaty"
            }
            color={"black"}
          />
          <ServicesCard
            icon={icon3}
            text={"wszelka dokumentacja techniczna"}
            color={"black"}
          />
          <ServicesCard
            icon={icon4}
            text={"akty USC, dokumenty wystawiane przez ZUS i Urząd Skarbowy"}
            color={"black"}
          />
          <ServicesCard
            icon={icon5}
            text={"dokumentacja samochodowa"}
            color={"black"}
          />
          <ServicesCard
            icon={icon6}
            text={
              "Jestem gotowa podjąć się tłumaczenia każdego innego tekstu po uprzednim kontakcie"
            }
            color={"red"}
          />
        </div>
        <p>
          Wyceny tłumaczenia dokonuję na podstawie dokumentu wysłanego lub
          przedłożonego mi osobiście i uzgadniam ją na wstępie po konsultacji z
          zleceniodawcą.
          <br /> <br /> Tłumaczenie w postaci wydruku opatrzonego pieczęcią,
          datą, numerem repertorium i moim podpisem wydaję osobiście lub odsyłam
          pocztą listem poleconym na adres wskazany przez zleceniodawcę.
          Wystawiam rachunki bez naliczania podatku VAT.
        </p>
        <div className={`${styles.button} basicbutton`}>
          <a href="https://g.page/r/CWiB1NK3dQ3IEBE/review" target="_blank">
            Skontaktuj się ze mną
          </a>
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default Services;
