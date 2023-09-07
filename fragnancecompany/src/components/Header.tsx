import styles from "./Header.module.css";

type HeaderProps = {
  title: string | undefined;
  type: string | undefined;
  backgroundColor?: string | undefined;
};

const Header: React.FC<HeaderProps> = ({ title, type, backgroundColor }) => {
  return (
    <div className={styles.header} style={backgroundColor ? {background: backgroundColor} : undefined}>
      <div className={styles.headerContainer}>
        <div className={styles.infoWrapper}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.type}>{type}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
