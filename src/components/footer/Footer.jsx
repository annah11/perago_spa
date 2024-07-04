import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>perago</div>
      <div className={styles.text}>
        Perago Information Technology© All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
