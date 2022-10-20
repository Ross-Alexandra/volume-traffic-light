import { ModalWrapper } from './elements';
import {
    Modal,
    ModalTitle,
    ModalSubtitle
} from '../components/modal';
import { NoMic } from '../icons';
import { CustomModalProps } from '.';

export const NoSoundsWarning: React.FC<CustomModalProps> = ({
    isOpen
}) => {
    return (
        <Modal 
            isOpen={isOpen}
            portalId='warnings'
        >
            <ModalWrapper>
                <NoMic width={75} height={75}/>
                <ModalTitle>No Access to Microphone</ModalTitle>
                <ModalSubtitle>Please refresh the page and allow access to your microphone for this tool to work</ModalSubtitle>
            </ModalWrapper>
        </Modal>
    );
};
