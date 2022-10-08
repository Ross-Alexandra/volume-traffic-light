import styled from '@emotion/styled';

export const LightWrapper = styled.div<{
    color: string;
    active: boolean;
}>`
    position: relative;
    height: 20%;
    aspect-ratio: 1;

    border-radius: 50%;
    border: 3px solid black;

    background-color: #000;

    :after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;

        border-radius: 50%;
        z-index: 1;

        background-color: ${({color}) => color};
        ${({active}) => active ? `
            opacity: 1;
        ` : `
            opacity: 0.5;
        `}
    }
`;