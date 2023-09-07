import styles from "./Hamburger.module.css";

type HamburgerProps = {
    clickHam: () => void;
    active: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({clickHam, active}) => {

    return <div onClick={clickHam} className={`${styles.hamburger} ${styles.displayNone} ${active ? styles.hamburgerActive : null}`}>
    <span
      className={`${styles.bar} ${styles.menu}`}
      style={{ color: "white" }}
    ></span>
    <span
      className={`${styles.bar} ${styles.menu}`}
      style={{ color: "white" }}
    ></span>
    <span
      className={`${styles.bar} ${styles.menu}`}
      style={{ color: "white" }}
    ></span>
  </div>
}

export default Hamburger;