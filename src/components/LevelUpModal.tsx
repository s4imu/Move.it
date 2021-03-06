import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>Level {level}</header>

                <strong>Congratulations</strong>
                <p>You've just reached a new level</p>

                <button
                    type="button"
                    onClick={closeLevelUpModal}
                >
                    <img src="/icons/close.svg" alt="close modal" />
                </button>
            </div>
        </div>
    )
}