import styles from "./LandingPage.module.scss";
import NewLandingPageCard from "./NewLandingPageCard";

const LandingPage = (props) => {

  const text1 =
    "Przedmiotem mojej działalności są tłumaczenia z języka niemieckiego na język polski, oraz z\u00A0języka polskiego na język niemiecki.";
  const text2 = 'Moja oferta skierowana jest zarówno do klientów indywidualnych, jak i firm. Zlecając mi usługę kontaktują się Państwo bezpośrednio z\u00A0tłumaczem, bez pośredników.';

  return (
    <div className={styles.container}>
      <div className={`${styles.content} content`}>
        <div className={styles.leftbox}>
          <h1>Jestem tlumaczem przysieglym jezyka niemieckiego.</h1>
          <p>
            {text1}
            <br /> <br /> {text2}
            <br /> <br /> Serdecznie zapraszam do skorzystania z usług mojego
            biura.
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
          </div>
          <div onClick={() => props.scrollTo(props.section3)}>
            <NewLandingPageCard
              number={"02"}
              name={"o mnie"}
              text={"Poznaj moje kompetencje i\u00A0uprawnienia"}
            />
          </div>
          <div onClick={() => props.scrollTo(props.section4)}>
            <NewLandingPageCard
              number={"03"}
              name={"referencje"}
              text={"Przeczytaj opinie moich klientów"}
            />
          </div>
          <div onClick={() => props.scrollTo(props.section5)}>
            <NewLandingPageCard
              number={"04"}
              name={"biuro"}
              text={"Sprawdź dokładną lokalizację mojego biura"}
            />
          </div>
          <div onClick={() => props.scrollTo(props.section6)}>
            <NewLandingPageCard
              number={"05"}
              name={"kontakt"}
              text={"Skontaktuj się ze mną"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
