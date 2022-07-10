import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import cn from './locale/cn';
import en from './locale/en';

const messages = {


  'en-us': en,
  'zh-cn': cn,
};
const locale = 'zh-cn';
const defaultLocale = 'zh-cn';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
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
