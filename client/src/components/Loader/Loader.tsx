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
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const heroStatus = useSelector((state: RootState) => state.hero.status);
  const levelStatus = useSelector((state: RootState) => state.levels.status);
  const questionStatus = useSelector((state: RootState) => state.questions.status);

  return (
    <> 
    {(authStatus || heroStatus || levelStatus || questionStatus) === 'loading' && 
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
