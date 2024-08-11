import React from "react"
import styles from './Rules.module.css'
import RulesHeader from "../RulesHeader/RulesHeader";
import RulesList from "../RulesList/RulesList";
import { rulesHeader } from "../../constants/rules";

const Rules: React.FC = () => {
    return (
        <section className={styles['rules-container']}>
            <RulesHeader>
                {rulesHeader}
            </RulesHeader>
            <RulesList />
        </section>
    )
};

export default Rules;