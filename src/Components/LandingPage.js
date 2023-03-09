import styles from "./LandingPage.module.scss";
import LandingPageCard from "./LandingPageCard";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <h1>
        <span>Jestem tlumaczem przysieglym jezyka niemieckiego.</span> <br /> Serdecznie
        zapraszam do skorzystania z uslug mojego biura.
      </h1>
      <p>
        Przedmiotem mojej działalności są tłumaczenia z języka niemieckiego na
        język polski, oraz z języka polskiego na język niemiecki. Moja oferta
        skierowana jest zarówno do klientów indywidualnych, jak i firm.
      </p>
      <h2>Teresa Dolata</h2> */}
      <div className={styles.rightbox}>
      <LandingPageCard
          name={"oferta"}
          text={"Zapoznaj się z moją ofertą i zasadami wyceny"}
        />
      <LandingPageCard
          name={"o mnie"}
          text={"Poznaj moje kompetencje i uprawnienia"}
        />
        <LandingPageCard
          name={"referencje"}
          text={"Przeczytaj referencje klientów"}
        />
      <LandingPageCard
          name={"lokalizajca"}
          text={"Sprawdź dokładną lokalizację mojego biura"}
        />
        <LandingPageCard
          name={"kontakt"}
          text={"Skontaktuj się ze mną"}
        />
      </div>
        
      </div>
    </div>
  );
};

export default LandingPage;
