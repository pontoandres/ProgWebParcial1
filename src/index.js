import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import esMessages from './locales/es.json';
import enMessages from './locales/en.json';

// Detecta el idioma del navegador
const language = navigator.language.split(/[-_]/)[0]; // devuelve "en" o "es"

// Selecciona el conjunto de mensajes segun el lenguaje
const messages = language === "es" ? esMessages : enMessages;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
