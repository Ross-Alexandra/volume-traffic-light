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

export const SettingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 20px;
    gap: 20px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    :last-of-type {
        border-bottom: unset;
    }
`;

export const SliderWrapper = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
`;

export const SliderLabel = styled.h3``;

export const SliderInput = styled.input`
    position: relative;

    width: 50%;
`;

export const SliderHint = styled.p`
    font-size: 12px;
    color: rgba(0, 0, 0, .5);

    align-self: end;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const SliderDescription = styled.p`
    color: rgba(0, 0, 0, .5);
    font-size: 12px;
`;

export const InputWarning = styled.p`
    color: red;
    font-size: 12px;
`;

export const VolumeProgress = styled.progress`
    width: 50%;
`;