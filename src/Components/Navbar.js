import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        {/* svg file */}
        <div className={styles.logoText}>
          <h1>Germania</h1>
          <p>
            tłumacz przysięgły
            <br />
            języka niemieckiego
          </p>
        </div>
      </div>
      <ul className={styles.links}>
        <li>Oferta</li>
        <li>O mnie</li>
        <li>Referencje</li>
        <li>Lokalizacja</li>
        <li>Kontakt</li>
      </ul>
    </div>
  );
};

export default Navbar;
