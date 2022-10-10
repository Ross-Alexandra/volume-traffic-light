/// <reference types="react-scripts" />

type LightColor = 'red' | 'yellow' | 'green';


interface Palette {
    // Background of the app.
    backgroundGradientStart: string;
    backgroundGradientEnd: string;

    // Add theoretical support for additional
    // non red, yellow, green countries.
    trafficLightBackgroundColor: string;
    topLightColor: string;
    middleLightColor: string;
    bottomLightColor: string;

    // When new levels of UI appear, use this color
    sectionBorderColor: string;
    sectionBackgroundColor: string;
}

interface Palettes {
    default: Palette;
}