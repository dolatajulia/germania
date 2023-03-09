import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div
        className={styles.logo}
        onClick={() => props.scrollTo(props.section1)}
      >
        <div className={styles.logoImg}></div>
        <div className={styles.logoText}>
          <h1>Germania</h1>
          <p>tłumacz przysięgły języka niemieckiego</p>
        </div>
      </div>
      <ul className={styles.links}>
        <li onClick={() => props.scrollTo(props.section2)}>oferta</li>
        <li onClick={() => props.scrollTo(props.section3)}>o mnie</li>
        <li onClick={() => props.scrollTo(props.section4)}>referencje</li>
        <li onClick={() => props.scrollTo(props.section5)}>lokalizacja</li>
        <li onClick={() => props.scrollTo(props.section6)}>kontakt</li>
        
      </ul>
    </div>
  );
};

export default Navbar;
