import React from "react"
import styles from "./styles.module.css"

export const Layout = ({ children }) => {
  console.log(styles.container)
  return (
    <div className={styles.container}>
      <header>
        <div>theme checker</div>
      </header>
      <main>{children}</main>
    </div>
  );
};
