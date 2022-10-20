import {useCallback} from 'react';
import { useRedThreshold, useYellowThreshold } from '../../services/settingsService';
import { MAX_VOLUME } from '../../services/volumeService';

import {
    SliderLabel,
    SliderInput,
    InputWrapper,
    SliderDescription,
    InputWarning,
    SliderWrapper,
    SliderHint,
    VolumeProgress
} from './elements';

export interface ThresholdSettingsProps {
    micVolume: number;
}

export const ThresholdSettings: React.FC<ThresholdSettingsProps> = ({
    micVolume
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
    const currentVolumePercent = Math.round(micVolume / MAX_VOLUME * 100);
    return (
        <>
            <SliderLabel>Red Light Cutoff</SliderLabel>
            <SliderWrapper>
                <SliderInput
                    type='range'
                    min={0}
                    max={100}
                    step={1}
                    value={sliderRedThreshold}
                    onChange={e => setThreshold(setRedThreshold, e.target.valueAsNumber)}
                />
                <SliderHint>
                    {sliderRedThreshold}%
                </SliderHint>
            </SliderWrapper>
            
            <SliderLabel>Yellow Light Cutoff</SliderLabel>
            <SliderWrapper>
                <SliderInput
                    type='range'
                    min={0}
                    max={100}
                    value={sliderYellowThreshold}
                    onChange={e => setThreshold(setYellowThreshold, e.target.valueAsNumber)}

                />
                <SliderHint>
                    {sliderYellowThreshold}%
                </SliderHint>
            </SliderWrapper>

            <InputWrapper>
                <SliderDescription>Quieter cutoff</SliderDescription>
                <VolumeProgress value={currentVolumePercent} max={100} />
                <SliderDescription>Louder cutoff</SliderDescription>
            </InputWrapper>

            {(yellowThreshold > redThreshold) && (
                <InputWarning>
                    Setting the red light&apos;s cutoff lower than the yellow light&apos;s will cause the yellow light to never turn on.
                </InputWarning>
            )}
        </>
    );
};
