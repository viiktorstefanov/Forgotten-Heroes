import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

type HeroProps = {
    imageUrl: string;
    title: string;
    heroId: string;
};

const Hero: React.FC<HeroProps> = ({ imageUrl, title, heroId }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <Link to={`/heroes/${heroId}`} className={styles["hero"]}>
            <div className={`${styles["hero-img"]} ${isLoaded ? styles["hero-img-loaded"] : ""}`}>
                <img src={imageUrl} alt="hero-img" loading="lazy" onLoad={handleImageLoad} />
            </div>
            <div className={styles["hero-header"]}>
                <h2>{title}</h2>
            </div>
        </Link>
    );
};

export default Hero;
