import {get} from 'lodash';

const palette: Palettes = {
    default: {
        backgroundGradientStart: '#77aaff',
        backgroundGradientEnd: '#6699ee',
        trafficLightBackgroundColor: 'string',
        topLightColor: '#aa0000',
        middleLightColor: '#ffff00',
        bottomLightColor: '#00aa00',
        sectionBorderColor: '',
        sectionBackgroundColor: ''
    }
};

export function getPalette(key: keyof Palette, fromTheme: keyof Palettes = 'default') {
    const paletteTheme = get(palette, fromTheme);
    
    return get(paletteTheme, key);
}
