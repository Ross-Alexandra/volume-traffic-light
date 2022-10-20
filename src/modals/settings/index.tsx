import {useCallback} from 'react';
import { ModalFrame } from '@ross-alexandra/react-utilities';
import { CustomModalProps } from '..';
import { useRedThreshold, useYellowThreshold } from '../../services/settingsService';

import {
    MenuModal,
    ModalWrapper,
    SliderLabel,
    SliderInput
} from './elements';
import { MAX_VOLUME } from '../../services/volumeService';

export const Settings: React.FC<CustomModalProps> = ({
    isOpen,
    handleClose
}) => {
    const [redThreshold, setRedThreshold] = useRedThreshold();
    const [yellowThreshold, setYellowThreshold] = useYellowThreshold();

    const setThreshold = useCallback((setter: (a: number) => void, targetPercent: number) => {
        const actualPercent = targetPercent * MAX_VOLUME / 100;
        const roundedToNearest = Math.round(actualPercent);

        setter(roundedToNearest);
    }, []);

    const sliderRedThreshold = Math.round(redThreshold / MAX_VOLUME * 100);
    const sliderYellowThreshold = Math.round(yellowThreshold / MAX_VOLUME * 100);
    return (
        <MenuModal
            isOpen={isOpen}
            onBackgroundClick={handleClose}
        >
            <ModalFrame handleClose={handleClose}>
                <ModalWrapper>
                    <SliderLabel>Red Light Sensitivity</SliderLabel>
                    <SliderInput
                        type='range'
                        title={`${sliderRedThreshold}%`}
                        min={0}
                        max={100}
                        step={1}
                        value={sliderRedThreshold}
                        onChange={e => setThreshold(setRedThreshold, e.target.valueAsNumber)}
                    />
                    <SliderLabel>Yellow Light Sensitivity</SliderLabel>
                    <SliderInput
                        type='range'
                        title={`${sliderYellowThreshold}%`}
                        min={0}
                        max={100}
                        value={sliderYellowThreshold}
                        onChange={e => setThreshold(setYellowThreshold, e.target.valueAsNumber)}

                    />
                </ModalWrapper>
            </ModalFrame>
        </MenuModal>
    );
};
