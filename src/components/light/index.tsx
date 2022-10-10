import { getPalette } from '../../palette';
import {LightWrapper} from './elements';

export interface LightProps {
    color: LightColor;
    active?: boolean;
}

const lightColorToHex = {
    'red': getPalette('topLightColor'),
    'yellow': getPalette('middleLightColor'),
    'green': getPalette('bottomLightColor')
};

export const Light: React.FC<LightProps> = ({
    color,
    active = false
}) => {
    return (
        <LightWrapper color={lightColorToHex[color]} active={active} />
    );
};
