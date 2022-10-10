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
    background-color: ${({color}) => color};
    filter: ${({active}) => active ? 'brightness(1)' : 'brightness(0.5)'};
`;