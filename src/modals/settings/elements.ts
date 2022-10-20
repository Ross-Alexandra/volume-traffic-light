import styled from '@emotion/styled';
import { MenuModal as _MenuModal } from '../../components/modal';
import { phoneMediaQuery } from '../../components/modal/menu-modal';
import MultiRangeSlider from 'multi-range-slider-react';

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
    gap: 10px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    :last-of-type {
        border-bottom: unset;
    }
`;

export const SliderLabel = styled.h3``;

export const InputWarning = styled.p`
    color: red;
    font-size: 12px;
`;

export const MicVolumesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
`;

export const VolumeProgress = styled.progress`
    width: 50%;
`;

export const DescriptionText = styled.p`
    color: rgba(0, 0, 0, 0.7);
    font-size: 12px;

    width: 25%;
    text-align: center;
`;

export const MultiSlider = styled(MultiRangeSlider)`
    width: 50%;
    border: none;
    box-shadow: unset;

    .caption {
        left: -3px;
        bottom: 25px;
        letter-spacing: .5px;
    }

    .caption .min-caption, .caption .max-caption {
        background-color: transparent;
        color: black;
        box-shadow: unset;
    }
`;

export const CaptionlessMultiSlider = styled(MultiSlider)`
    .thumb:active .caption {
        display: none;
    }
`;
