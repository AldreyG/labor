import styles from '../styles/elements/Profile.module.css';
import {useChallenges} from '../hooks/useChallenges';


export function Profile() {
    const {level} = useChallenges ();

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/AldreyG.png" alt="Aldrey Georgetti"/>
            <div>
                <strong>Aldrey Georgetti</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}