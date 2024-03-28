import React from 'react';
// import ReactDOM from "react-dom/client";
import App from './App.tsx';
import * as ReactDOMClient from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import './index.css';

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// eslint-disable-next-line react-refresh/only-export-components
const WebComponent = reactToWebComponent(App, React, ReactDOMClient);
customElements.define('react-app', WebComponent);
