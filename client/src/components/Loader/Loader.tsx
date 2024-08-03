import React from "react";
import styles from "./Loader.module.css";

import { CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const override: CSSProperties = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Loader: React.FC = () => {
  const status = useSelector((state: RootState) => state.auth.status);
  return (
    <> 
    {status === 'loading' && 
    <div className={styles["overlay"]}>
        <PacmanLoader
          color={"#f3d22d"}
          loading={true}
          cssOverride={override}
          size={100}
          aria-label="Loading"
          data-testid="loader"
        />
      </div>}
    </>
  );
};

export default Loader;
