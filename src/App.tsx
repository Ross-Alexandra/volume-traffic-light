import './service/firebase';

import { useEffect, useState } from 'react';
import { TrafficLight } from './components';
import { AppWrapper } from './elements';
import { setupMic } from './service/volumeService';

export function App() {
    const [activeColor, setActiveColor] = useState<LightColor>('red');

    useEffect(() => {
        async function setupMicInterval() {
            const getMicVolume = await setupMic(() => {
                console.log('error retrieving mic');
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
        </AppWrapper>
    );
}
