import {useCallback} from 'react';
import { useMaxMicVolume, useMinMicVolume, useRedThreshold, useYellowThreshold } from '../../services/settingsService';
import { MAX_VOLUME } from '../../services/volumeService';
import { ChangeResult } from 'multi-range-slider-react';

import {
    SliderLabel,
    InputWarning,
    MicVolumesWrapper,
    VolumeProgress,
    MultiSlider,
    DescriptionText,
    CaptionlessMultiSlider
} from './elements';
import { getPalette } from '../../palette';

export interface ThresholdSettingsProps {
    micVolume: number;
}

export const ThresholdSettings: React.FC<ThresholdSettingsProps> = ({
    micVolume
}) => {
    const [redThreshold, setRedThreshold] = useRedThreshold();
    const [yellowThreshold, setYellowThreshold] = useYellowThreshold();

    const [minMicVolume, setMinMicVolume] = useMinMicVolume();
    const [maxMicVolume, setMaxMicVolume] = useMaxMicVolume();

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
            <SliderLabel>Traffic Light Cutoffs</SliderLabel>
            <CaptionlessMultiSlider
                min={0}
                max={100}
                step={1}
                minValue={sliderYellowThreshold}
                maxValue={sliderRedThreshold}
                label={false}
                ruler={false}
                barLeftColor={getPalette('bottomLightColor')}
                barInnerColor={getPalette('middleLightColor')}
                barRightColor={getPalette('topLightColor')}
                onChange={(e: ChangeResult) => {
                    setThreshold(setRedThreshold, e.maxValue);
                    setThreshold(setYellowThreshold, e.minValue);
                }}
            />
            <VolumeProgress value={currentVolumePercent} max={100} />

            <SliderLabel>Mic Sensitivity</SliderLabel>
            <MicVolumesWrapper>
                <DescriptionText>-80dB <br/> No incoming sound</DescriptionText>
                <MultiSlider
                    min={-80}
                    max={0.1}
                    step={1}
                    minValue={minMicVolume}
                    maxValue={maxMicVolume}
                    label={false}
                    ruler={false}
                    onChange={(e: ChangeResult) => {
                        setMinMicVolume(e.minValue);
                        setMaxMicVolume(e.maxValue);
                    }}
                />
                <DescriptionText>0dB <br/> Loudest sound mic can hear</DescriptionText>
            </MicVolumesWrapper>

            {(yellowThreshold > redThreshold) && (
                <InputWarning>
                    Setting the red light&apos;s cutoff lower than the yellow light&apos;s will cause the yellow light to never turn on.
                </InputWarning>
            )}
        </>
    );
};
