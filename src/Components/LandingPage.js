import styles from "./LandingPage.module.scss";
import LandingPageCard from "./LandingPageCard";
import NewLandingPageCard from "./NewLandingPageCard";

const LandingPage = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftbox}>
          <h1>Jestem tlumaczem przysieglym jezyka niemieckiego.</h1>
          <p>
            Przedmiotem mojej działalności są tłumaczenia z języka niemieckiego
            na język polski, oraz z języka polskiego na język niemiecki.
            <br /> <br /> Moja oferta skierowana jest zarówno do klientów
            indywidualnych, jak i firm.
            <br /> <br /> Serdecznie zapraszam do skorzystania z{"\u00A0"}uslug
            mojego biura.
          </p>
          <div className={styles.signature}>
            <p>Teresa Dolata</p>
            <p className={styles.handwriting}>Teresa Dolata</p>
          </div>
        </div>
        <div className={styles.rightbox}>
          <div onClick={() => props.scrollTo(props.section2)}>
            <NewLandingPageCard
              number={"01"}
              name={"oferta"}
              text={"Zapoznaj się z moją ofertą i\u00A0zasadami wyceny"}
            />
            {/* <LandingPageCard
              name={"oferta"}
              text={`Zapoznaj się z moją ofertą i\u00A0zasadami wyceny`}
            /> */}
          </div>
          <div onClick={() => props.scrollTo(props.section3)}>
            <NewLandingPageCard
              number={"02"}
              name={"o mnie"}
              text={"Poznaj moje kompetencje i\u00A0uprawnienia"}
            />
            {/* <LandingPageCard
              name={"o mnie"}
              text={"Poznaj moje kompetencje i\u00A0uprawnienia"}
            /> */}
          </div>
          <div onClick={() => props.scrollTo(props.section4)}>
            <NewLandingPageCard
              number={"03"}
              name={"opinie"}
              text={"Przeczytaj referencje moich klientów"}
            />
            {/* <LandingPageCard
              name={"opinie"}
              text={"Przeczytaj referencje moich klientów"}
            /> */}
          </div>
          <div onClick={() => props.scrollTo(props.section5)}>
            <NewLandingPageCard
              number={"04"}
              name={"biuro"}
              text={"Sprawdź dokładną lokalizację mojego biura"}
            />
            {/* <LandingPageCard
              name={"biuro"}
              text={"Sprawdź dokładną lokalizację mojego biura"}
            /> */}
          </div>
          <div onClick={() => props.scrollTo(props.section6)}>
            <NewLandingPageCard
              number={"05"}
              name={"kontakt"}
              text={"Skontaktuj się ze mną"}
            />
            {/* <LandingPageCard name={"kontakt"} text={"Skontaktuj się ze mną"} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
