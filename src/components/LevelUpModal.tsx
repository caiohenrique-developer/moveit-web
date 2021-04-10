import { useChallenges } from '../hooks/useChallenges';
import { Container } from '../styles/components/LevelUpModal';

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useChallenges();

    return (
        <Container>
            <div>
                <header>{level}</header>

                <strong>Parabéns</strong>

                <p>Você alcançou um novo nível.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="icons/close.svg" alt="Close modal icon" />
                </button>
            </div>
        </Container>
    )
}