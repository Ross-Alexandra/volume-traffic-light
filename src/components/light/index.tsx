import {LightWrapper} from './elements';

export interface LightProps {
    color: LightColor;
    active?: boolean;
}

const lightColorToHex = {
    'red': '#aa0000',
    'yellow': '#ffff00',
    'green': '#00aa00'
};

export const Light: React.FC<LightProps> = ({
    color,
    active = false
}) => {
    return (
        <LightWrapper color={lightColorToHex[color]} active={active} />
    );
};
