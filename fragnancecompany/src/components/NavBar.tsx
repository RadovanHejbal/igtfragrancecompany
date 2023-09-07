import Hamburger from "./Hamburger";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useState} from "react";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const clickHamHandler = () => {
    setActive(previous => !previous);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <h1>
          <Link to={"/"} onClick={() => {setActive(false)}}>F&F Company</Link>
        </h1>
        <ul className={`${styles.linksContainer} ${active ? styles.linksContainerActive : null}`}>
          <li>
            <Link to={"/"} className={styles.link} onClick={() => {setActive(false)}}>
              All
            </Link>
          </li>
          <li className={styles.navItem}>
            <div className={`${styles.link} ${styles.fragranceLink}`}>
              Fragrance
            </div>
            <div className={styles.popupMenu}>
              <Link to="/fragrances" onClick={() => {setActive(false)}}>All</Link>
              <Link to="/fragrances/floral" onClick={() => {setActive(false)}}>Floral</Link>
              <Link to="/fragrances/fruity" onClick={() => {setActive(false)}}>Fruity</Link>
              <Link to="/fragrances/musk" onClick={() => {setActive(false)}}>Musk</Link>
            </div>
          </li>
          <li className={styles.navItem}>
            <div className={`${styles.link} ${styles.flavorLink}`} >
              Flavor
            </div>
            <div className={styles.popupMenu}>
              <Link to="/flavors" onClick={() => {setActive(false)}}>All</Link>
              <Link to="/flavors/floral" onClick={() => {setActive(false)}}>Floral</Link>
              <Link to="/flavors/fruity" onClick={() => {setActive(false)}}>Fruity</Link>
              <Link to="/flavors/musk" onClick={() => {setActive(false)}}>Musk</Link>
            </div>
          </li>
          <li>
            <Link to={"/favorites"} className={styles.link} style={{color: 'rgb(138, 0, 0)'}} onClick={() => {setActive(false)}}>
              Favorites
            </Link>
          </li>
        </ul>
        <Hamburger clickHam={clickHamHandler} active={active} />
      </div>
    </nav>
  );
};

export default NavBar;
