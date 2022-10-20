import './services/firebase';

import { useEffect, useState } from 'react';
import { TrafficLight } from './components';
import { AppWrapper, SettingsIcon, SettingsIconWrapper } from './elements';
import { setupMic } from './services/volumeService';
import { NoSoundsWarning } from './modals';
import { Settings } from './modals/settings';
import { useReadOnlyRedThreshold, useReadOnlyYellowThreshold } from './services/settingsService';

export function App() {
    const [activeColor, setActiveColor] = useState<LightColor>('red');
    const [showNoMicWawrning, setShowNoMicWarning] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [getMicVolume, setGetMicVolume] = useState<() => number>();
    const [micVolume, setMicVolume] = useState<number>(0);

    const redThreshold = useReadOnlyRedThreshold();
    const yellowThreshold = useReadOnlyYellowThreshold();

    useEffect(() => {
        async function setupMicrophone() {
            const _getMicVolume = await setupMic(() => {
                setShowNoMicWarning(true);
            });

            // Return a blank callback here as 
            // setState(function) is an overload
            // allowing for setState(currentState => newState).
            // In this case, ignore the "old" state, 
            // and always return _getMicVolume.
            setGetMicVolume(() => _getMicVolume);
        }

        setupMicrophone();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentVolume = getMicVolume?.();
            if (!currentVolume) return;
    
            setMicVolume(currentVolume);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [getMicVolume, redThreshold, yellowThreshold]);

    useEffect(() => {
        if (micVolume > redThreshold) {
            setActiveColor('red');
            return;
        }
        else if (micVolume > yellowThreshold) {
            setActiveColor('yellow');
            return;
        }
        else {
            setActiveColor('green');
        }
    }, [micVolume]);

    return (
        <AppWrapper>
            <TrafficLight activeColor={activeColor}/>

            <SettingsIconWrapper
                onClick={() => setShowSettings(true)}
            >
                <SettingsIcon />
            </SettingsIconWrapper>

            {/* Top-level modas here below here */}
            <NoSoundsWarning 
                isOpen={showNoMicWawrning}
                handleClose={() => setShowNoMicWarning(false)}
            />

            <Settings
                isOpen={showSettings}
                micVolume={micVolume}
                handleClose={() => setShowSettings(false)}
            />

        </AppWrapper>
    );
}
