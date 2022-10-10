import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import {ModalPortal} from '@ross-alexandra/react-utilities';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
        <ModalPortal id='warnings'/>
        <ModalPortal id='settings'/>
    </React.StrictMode>
);
