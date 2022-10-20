import styled from '@emotion/styled';
import { MenuModal as _MenuModal } from '../../components/modal';
import { phoneMediaQuery } from '../../components/modal/menu-modal';

export const MenuModal = styled(_MenuModal)`
    .modal {

        @media ${phoneMediaQuery} {
            backdrop-filter: blur(15px);
            background-color: rgba(255, 255, 255, 0.6);
        }
    }
`;

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 20px;
`;

export const SliderLabel = styled.h3``;

export const SliderInput = styled.input``;