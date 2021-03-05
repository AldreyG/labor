import styles from '../styles/elements/LevelUpModal.module.css';
import {useChallenges} from '../hooks/useChallenges';

export function LevelUpModal() {
    const {level, closeLevelUpModal } = useChallenges();
    
    return(
        <div className={styles.overlay}>
            <div className={styles.content}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>
                <button type="button" onClick={closeLevelUpModal}> 
                    <img src="/icons/close.svg" />
                </button>
            </div>
        </div>
    );
}