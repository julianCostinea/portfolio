import React from "react";

import styles from "./Button.module.css";

const DownloadButton = (props) => {

  return (
    <button className={styles.Button}>
      <a href="/Bekræftelse på vikariat_Lokalevagt_OCC.pdf" download>
        Download C.V.
      </a>
    </button>
  );
};

export default DownloadButton;
