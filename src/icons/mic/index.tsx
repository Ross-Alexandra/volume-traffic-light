import _ from 'lodash';
import { IconProps } from '..';

type NoMicColors = {
    primary?: string;
    cross?: string;
}

type NoMicProps = IconProps<NoMicColors>; 

const defaultColors: NoMicColors = {
    primary: '#000000',
    cross: '#ff0000'
};

export const NoMic: React.FC<NoMicProps> = ({
    colors={},
    height=24,
    width=24
}) => {
    const iconColors = _.defaults(colors, defaultColors);

    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M12 20l-5 4h10l-5-4zm0-18c1.103 0 2 .897 2 2v7c0 1.103-.897 2-2 2s-2-.897-2-2v-7c0-1.103.897-2 2-2m0-2c-2.209 0-4 1.791-4 4v7c0 2.209 1.791 4 4 4s4-1.791 4-4v-7c0-2.209-1.791-4-4-4zm8 9v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2z"
                fill={iconColors.primary}
            />
            <line 
                x1={0}
                y1={24}
                x2={24}
                y2={0}
                strokeWidth={2}
                stroke={iconColors.cross}
            />
        </svg>
    );
};
