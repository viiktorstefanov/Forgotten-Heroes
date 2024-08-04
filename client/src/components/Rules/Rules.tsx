import React from "react"
import styles from './Rules.module.css'
import RulesHeader from "../RulesHeader/RulesHeader";
import RulesList from "../RulesList/RulesList";

const Rules: React.FC = () => {
    return (
        <section className={styles['rules-container']}>
            <RulesHeader />
            <RulesList />
        </section>
    )
};

export default Rules;