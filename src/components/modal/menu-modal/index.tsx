import { keyframes } from '@emotion/react';
import { ModalProps } from '@ross-alexandra/react-utilities';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Modal } from '../elements';
import { MenuModalModal, phoneMediaQuery } from './elements';

export {phoneMediaQuery};

export interface MenuModalProps extends ModalProps {
    isOpen: boolean;
}

export const MenuModal: React.FC<MenuModalProps> = ({
    isOpen,
    children,
    ...props
}) => {

    const isMobile = useMediaQuery(phoneMediaQuery);

    return (
        <>
            <MenuModalModal
                portalId='settings'
                isOpen={isOpen && isMobile}
                animationIn={keyframes`
                    from {right: -100%;}
                    to {right: 0;}
                `}
                animationOut={keyframes`
                    from {right: 0;}
                    to {right: -100%;}
                `}
                {...props}
            >
                {children}
            </MenuModalModal>
            <Modal
                portalId='settings'
                isOpen={isOpen && !isMobile}
                {...props}
            >
                {children}
            </Modal>
        </>
    );
};
