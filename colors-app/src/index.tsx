import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/application';

import { makeServer } from './api';

import './index.css';
import { ColorProvider } from './context';

const environment = process.env.NODE_ENV;
makeServer({ environment });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    {/* with context */}
    <ColorProvider>
      <Application />
    </ColorProvider>
    {/* with out context */}
    {/* <Application/> */}
  </React.StrictMode>,
);
