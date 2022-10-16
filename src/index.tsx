import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import {ModalPortal} from '@ross-alexandra/react-utilities';
import { ProvideLocalStorage } from './hooks/useStorageState';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ProvideLocalStorage>
            <App />
            <ModalPortal id='warnings'/>
            <ModalPortal id='settings'/>
        </ProvideLocalStorage>
    </React.StrictMode>
);
