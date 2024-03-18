import React from "react";
import styles from "../styles/construction.module.css";

const Construction: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="center">
          <div className={styles.animation}></div>
        </div>
        <h1 className={styles.title}>Elvira Glück</h1>
        <h3 className={styles.titleSecondary}>
          Systemische Einzel - Paar - und Familientherapie
        </h3>
        <h3 className={styles.titleSecondary}>Supervision</h3>
        <h3 className={styles.titleSecondary}>ECP</h3>

        <h3 className={styles.titleSecondary}>+49 30 2101 8633</h3>

        <br />
        <h3 className={styles.titleSecondary}>Under Construction</h3>
        <p className={styles.description}>
          We are currently working on this page. Please check back later!
        </p>
      </main>
    </div>
  );
};

export default Construction;
