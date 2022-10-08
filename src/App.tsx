import { useEffect, useState } from 'react';
import { TrafficLight } from './components';
import { AppWrapper } from './elements';

export function App() {
    const [activeColor, setActiveColor] = useState<LightColor>('red');
    useEffect(() => {
        setTimeout(() => {
            if (activeColor === 'green') setActiveColor('yellow');
            else if (activeColor === 'yellow') setActiveColor('red');
            else setActiveColor('green');
        }, 1000);
    }, [activeColor]);

    return (
        <AppWrapper>
            <TrafficLight activeColor={activeColor}/>
        </AppWrapper>
    );
}
