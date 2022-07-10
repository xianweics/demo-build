import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { messages, defaultLocale } from './locale/intl';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <IntlProvider
      messages={messages[defaultLocale]}
      locale={defaultLocale}
      defaultLocale={defaultLocale}
    >
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </IntlProvider>
  </React.StrictMode>
);
reportWebVitals();
