import styles from "./LandingPage.module.scss";
import LandingPageCard from "./LandingPageCard";

const LandingPage = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftbox}>
          <h1>??? Jestem tlumaczem przysieglym jezyka niemieckiego.</h1>
          <p>
            ??? Przedmiotem mojej działalności są tłumaczenia z języka niemieckiego
            na język polski, oraz z języka polskiego na język niemiecki. Moja
            oferta skierowana jest zarówno do klientów indywidualnych, jak i
            firm.
          </p>
          <h1>??? Serdecznie zapraszam do skorzystania z uslug mojego biura.</h1>
          <h2>??? Teresa Dolata</h2>
        </div>
        <div className={styles.rightbox}>
          <div onClick={() => props.scrollTo(props.section2)}>
            <LandingPageCard
              name={"oferta"}
              text={`Zapoznaj się z moją ofertą i\u00A0zasadami wyceny`}
            />
          </div>
          <div onClick={() => props.scrollTo(props.section3)}>
            <LandingPageCard
              name={"o mnie"}
              text={"Poznaj moje kompetencje i\u00A0uprawnienia"}
            />
          </div>
          <div onClick={() => props.scrollTo(props.section4)}>
            <LandingPageCard
              name={"opinie"}
              text={"Przeczytaj referencje moich klientów"}
            />
          </div>
          <div onClick={() => props.scrollTo(props.section5)}>
            <LandingPageCard
              name={"biuro"}
              text={"Sprawdź dokładną lokalizację mojego biura"}
            />
          </div>
          <div onClick={() => props.scrollTo(props.section6)}>
            <LandingPageCard name={"kontakt"} text={"Skontaktuj się ze mną"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
