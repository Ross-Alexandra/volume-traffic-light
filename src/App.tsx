import './service/firebase';

import { useEffect, useState } from 'react';
import { TrafficLight } from './components';
import { AppWrapper } from './elements';
import { setupMic } from './service/volumeService';
import { NoSoundsWarning } from './modals';
import { numberToStringTransformer, stringToIntTransformer, useStorageState } from './hooks/useStorageState';

export function App() {
    const [activeColor, setActiveColor] = useState<LightColor>('red');
    const [showNoMicWawrning, setShowNoMicWarning] = useState(false);

    const [redThreshold, setRedThreshold] = useStorageState('red-threshold', 190, numberToStringTransformer, stringToIntTransformer);

    useEffect(() => {
        async function setupMicInterval() {
            const getMicVolume = await setupMic(() => {
                setShowNoMicWarning(true);
            });
    
            setInterval(() => {
                const currentVolume = getMicVolume?.();
                if (!currentVolume) return;

                if (currentVolume > 190) {
                    setActiveColor('red');
                    return;
                }
                else if (currentVolume > 150) {
                    setActiveColor('yellow');
                    return;
                }
                else {
                    setActiveColor('green');
                }
            }, 100);
        }

        setupMicInterval();
    }, []);

    return (
        <AppWrapper>
            <TrafficLight activeColor={activeColor}/>
            <NoSoundsWarning 
                isOpen={showNoMicWawrning}
                handleClose={() => setShowNoMicWarning(false)}
            />
            <p>{redThreshold}</p>
            <button onClick={() => setRedThreshold(redThreshold + 1)}>button</button>
        </AppWrapper>
    );
}
