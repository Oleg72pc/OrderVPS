import React from 'react';
import App from './components/App/App';
import { Provider } from 'react-redux';
import * as ReactDOMClient from 'react-dom/client';
import { store } from './redux/store';
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<Provider store={store}><App /></Provider>);
