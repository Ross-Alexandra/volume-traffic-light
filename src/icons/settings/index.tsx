import _ from 'lodash';
import { IconProps } from '..';

type SettingsColors = {
    primary?: string;
}

type SettingsProps = IconProps<SettingsColors>; 

const defaultColors: SettingsColors = {
    primary: '#000000',
};

export const Settings: React.FC<SettingsProps> = ({
    colors={},
    height=24,
    width=24,
    className
}) => {

    const iconColors = _.defaults(colors, defaultColors);

    return (
        <svg className={className} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M24 13.616v-3.232l-2.869-1.02c-.198-.687-.472-1.342-.811-1.955l1.308-2.751-2.285-2.285-2.751 1.307c-.613-.339-1.269-.613-1.955-.811l-1.021-2.869h-3.232l-1.021 2.869c-.686.198-1.342.471-1.955.811l-2.751-1.308-2.285 2.285 1.308 2.752c-.339.613-.614 1.268-.811 1.955l-2.869 1.02v3.232l2.869 1.02c.197.687.472 1.342.811 1.955l-1.308 2.751 2.285 2.286 2.751-1.308c.613.339 1.269.613 1.955.811l1.021 2.869h3.232l1.021-2.869c.687-.198 1.342-.472 1.955-.811l2.751 1.308 2.285-2.286-1.308-2.751c.339-.613.613-1.268.811-1.955l2.869-1.02zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" 
                stroke={iconColors.primary}
            />
        </svg>
    );
};
