import { ModalWrapper } from './elements';
import {
    Modal,
    ModalFrame,
    ModalTitle,
    ModalSubtitle
} from '../components/modal';
import { NoMic } from '../icons';

export interface NoSoundsWarningProps {
    isOpen: boolean;
    handleClose: () => void;
}

export const NoSoundsWarning: React.FC<NoSoundsWarningProps> = ({
    isOpen,
    handleClose
}) => {
    return (
        <Modal 
            isOpen={isOpen}
            portalId='warnings'
        >
            <ModalFrame handleClose={handleClose}>
                <ModalWrapper>
                    <NoMic width={75} height={75}/>
                    <ModalTitle>No Access to Microphone</ModalTitle>
                    <ModalSubtitle>Please refresh the page and allow access to your microphone for this tool to work</ModalSubtitle>
                </ModalWrapper>
            </ModalFrame>
        </Modal>
    );
};
