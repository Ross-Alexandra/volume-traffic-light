import { ModalFrame } from '@ross-alexandra/react-utilities';
import { CustomModalProps } from '..';
import { ThresholdSettings } from './thresholdSettings';

import {
    MenuModal,
    ModalWrapper,
    SettingWrapper,
} from './elements';

export interface SettingsProps extends CustomModalProps {
    micVolume: number;
}

export const Settings: React.FC<SettingsProps> = ({
    isOpen,
    micVolume,
    handleClose
}) => {
    return (
        <MenuModal
            isOpen={isOpen}
            onBackgroundClick={handleClose}
        >
            <ModalFrame handleClose={handleClose}>
                <ModalWrapper>
                    <SettingWrapper>
                        <ThresholdSettings micVolume={micVolume}/>
                    </SettingWrapper>
                </ModalWrapper>
            </ModalFrame>
        </MenuModal>
    );
};
