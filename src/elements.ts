import styled from '@emotion/styled';
import { getPalette } from './palette';
import {
    Settings as _SettingsIcon
} from './icons';

export const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;

    background: linear-gradient(180deg, ${getPalette('backgroundGradientStart')}, ${getPalette('backgroundGradientEnd')});

    display: grid;
    place-items: center;
`;

export const SettingsIconWrapper = styled.div`
    position: fixed;
    z-index: 0;
    top: 25px;
    right: 25px;

    display: grid;
    place-items: center;
    width: 35px;
    height: 35px;

    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;

    cursor: pointer;

    opacity: 0.5;

    transition: background-color 250ms, opacity 250ms;
    :hover {
        background-color: rgba(255, 255, 255, .25);
        opacity: 1;
    }
`;

export const SettingsIcon = styled(_SettingsIcon)``;
