import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
        <h1>
        <span>Jestem tlumaczem przysieglym jezyka niemieckiego.</span> <br /> Serdecznie
        zapraszam do skorzystania z uslug mojego biura.
      </h1>
      <p>
        Przedmiotem mojej działalności są tłumaczenia z języka niemieckiego na
        język polski, oraz z języka polskiego na język niemiecki. Moja oferta
        skierowana jest zarówno do klientów indywidualnych, jak i firm.
      </p>
      <h2>Teresa Dolata</h2>
        </div>
      
    </div>
  );
};

export default LandingPage;
