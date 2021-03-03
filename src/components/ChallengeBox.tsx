import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const hasActivedChallenge = true

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActivedChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Earn 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt="Body" />
                        <strong>New Challenge</strong>
                        <p>Stand up and take a walk for 3 minutes</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Succeeded
                        </button>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Failed
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finish a cycle to earn challenges to be completed</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                    Level up completing challenges
                </p>
                    </div>
                )}
        </div>
    )
} 