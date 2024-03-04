import React from "react";
import styles from "../styles/construction.module.css";

const Construction: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="center">
          <div className={styles.animation}></div>
        </div>
        <h1 className={styles.title}>Under Construction</h1>
        <p className={styles.description}>
          We are currently working on this page. Please check back later!
        </p>
      </main>
    </div>
  );
};

export default Construction;
