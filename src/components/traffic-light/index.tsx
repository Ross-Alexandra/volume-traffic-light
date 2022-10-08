import {
    TrafficLightWrapper
} from './elements';

import {Light} from '../';

export interface TrafficLightProps {
    activeColor: LightColor;
}

export const TrafficLight: React.FC<TrafficLightProps> = ({activeColor}) => {
    const lightColors: LightColor[] = ['red', 'yellow', 'green'];

    return (
        <TrafficLightWrapper>
            {lightColors.map((lightColor) => 
                <Light
                    key={lightColor}
                    color={lightColor}
                    active={lightColor === activeColor}
                />    
            )}
        </TrafficLightWrapper>
    );
};