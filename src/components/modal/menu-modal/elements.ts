import styled from '@emotion/styled';
import {
    Modal
} from '..';

export const phoneMediaQuery = '(max-width: 600px)';
export const tinyPhoneMediaQuery = '(max-width: 330px)';

export const MenuModalModal = styled(Modal)`
    .modal {
        @media ${phoneMediaQuery} {
            height: 100vh;
            width: 90vw;
    
            top: 0px;
            bottom: 0px;
            right: 0px;

            max-width: unset;
            transform: unset;
            left: unset;
            margin: unset;
        }

        @media ${tinyPhoneMediaQuery} {
            width: 100vw;
        }
    }
`;
