import React, { useEffect } from "react";
import styles from "./HeroesList.module.css";
import Hero from "../Hero/Hero";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { getHeroes } from "../../state/hero/heroThunks";
import { resetHeroes } from "../../state/hero/heroSlice";

type HeroesListProps = {
  categoryTitle: string;
};

const HeroesList: React.FC<HeroesListProps> = ({ categoryTitle }) => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(resetHeroes());
        dispatch(getHeroes({ category: categoryTitle }));
      }, [categoryTitle, dispatch]);

    const heroes = useSelector((state: RootState) => state.hero.heroes);

  return (
    <div className={styles["heroes-container"]}>
        {heroes && heroes.map((hero) => 
          <Hero imageUrl={hero.imageUrl} title={hero.title} key={hero._id} heroId={hero._id}/>
        )}
    </div>
  );
};

export default HeroesList;
