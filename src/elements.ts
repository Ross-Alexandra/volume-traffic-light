import styled from '@emotion/styled';
import { getPalette } from './palette';

export const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;

    background: linear-gradient(180deg, ${getPalette('backgroundGradientStart')}, ${getPalette('backgroundGradientEnd')});

    display: grid;
    place-items: center;
`;
