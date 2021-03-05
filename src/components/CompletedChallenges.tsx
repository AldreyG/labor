import { useChallenges } from '../hooks/useChallenges';
import styles from '../styles/elements/CompletedChallenges.module.css';

export function CompletedChallenges() {

    const {challengeCompleted} = useChallenges();

    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengeCompleted}</span>
        </div>
    );
}