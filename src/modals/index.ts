export * from './noSoundWarning';
export * from './settings';

export interface CustomModalProps {
    isOpen: boolean;
    handleClose: () => void;
}