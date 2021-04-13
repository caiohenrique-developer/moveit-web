import { useChallenges } from '../hooks/useChallenges';
import { Container } from '../styles/components/LevelUpModal';
import Modal from 'react-modal';

export function LevelUpModal() {
    const { level, closeLevelUpModal, isLevelUpModalOpen } = useChallenges();

    return (
        <Modal
            overlayClassName="modalOverlay"
            className="modalContent"
            isOpen={isLevelUpModalOpen}
            onRequestClose={closeLevelUpModal}
        >
            <Container>
                <header>{level}</header>

                <strong>Parabéns</strong>

                <p>Você alcançou um novo nível.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="icons/close.svg" alt="Close modal icon" />
                </button>
            </Container>
        </Modal>
    )
}