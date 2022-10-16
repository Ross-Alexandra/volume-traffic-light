import styled from '@emotion/styled';
import {
    Modal as _Modal,
    ModalFrame as _ModalFrame
} from '@ross-alexandra/react-utilities';

export const Modal = styled(_Modal)`
    .modal {
        width: 95%;
        max-width: 500px;

        background-color: rgba(255, 255, 255, 1);
        border: 1px solid black;
    }

    .modal-background {
        background-color: rgba(0, 0, 0, 0.75);
    }
`;

export const ModalFrame = styled(_ModalFrame)`
    
`;

export const ModalTitle = styled.h2`
    text-transform: capitalize;
`;

export const ModalSubtitle = styled.p`

`;
