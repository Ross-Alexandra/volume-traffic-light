import './service/firebase';

import { useEffect, useState } from 'react';
import { TrafficLight } from './components';
import { AppWrapper } from './elements';
import { setupMic } from './service/volumeService';
import { Modal, ModalFrame } from './components/modal';

export function App() {
    const [activeColor, setActiveColor] = useState<LightColor>('red');
    const [showNoMicWawrning, setShowNoMicWarning] = useState(false);

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
            <Modal 
                isOpen={showNoMicWawrning}
                portalId='warnings'
            >
                <ModalFrame handleClose={() => setShowNoMicWarning(false)}>
                    <p>Drawing some content</p>
                </ModalFrame>
            </Modal>
        </AppWrapper>
    );
}
