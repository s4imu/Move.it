import { createContext, useState, ReactNode, useEffect } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye'
    description: string
    amount: number
}

interface ChallengesContexData {
    level: number
    currentExperince: number
    challengesCompleted: number
    experienceToNextLevel: number
    levelUp: () => void
    startNewChallenge: () => void
    resetChallenge: () => void
    completedChallenge: () => void
    activeChallenge: Challenge
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContexData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperince, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        if (Notification.permission === 'granted') {
            new Notification('New Challenge 🎉', {
                body: `It's worthing ${challenge.amount}xp!`
            })
        }

        new Audio('/notification.mp3').play()

    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completedChallenge() {
        if (!activeChallenge) {
            return
        }

        const { amount } = activeChallenge

        let finalExperience = currentExperince + amount

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperince,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completedChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}