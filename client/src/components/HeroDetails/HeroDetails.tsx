import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./HeroDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { getHero } from "../../state/hero/heroThunks";
import HeroBox from "../HeroBox/HeroBox";

const HeroDetails: React.FC = () => {
  const { heroId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (heroId) {
      dispatch(getHero({ heroId }));
    }
  }, [heroId, dispatch]);

  const hero = useSelector((state: RootState) => state.hero.hero);

  return (
    <div className={styles["hero-container"]}>
      <HeroBox hero={hero} />
    </div>
  );
};

export default HeroDetails;
