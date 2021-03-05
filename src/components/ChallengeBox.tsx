import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceed() {
        completedChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Earn {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
                        <strong>New Challenge</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceed}
                        >
                            Succeeded
                        </button>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Failed
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finish a cycle to receive challenges to be completed</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                    Level up completing challenges
                </p>
                    </div>
                )}
        </div>
    )
} 