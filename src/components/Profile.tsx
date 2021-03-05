import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/s4imu.png" alt="Symon Cristhian" />
            <div>
                <strong>Symon Cristhian</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}