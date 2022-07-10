import { IntlProvider } from 'react-intl';
import { messages, defaultLocale } from './locale/intl';
import { TLanguages } from './Types';

export const intlWrapper = (
  component: JSX.Element,
  props?: {
    language?: TLanguages;
  }
) => {
  const { language = defaultLocale } = props || {};
  return (
    <IntlProvider
      messages={messages[language]}
      locale={language}
      defaultLocale={language}
    >
      {component}
    </IntlProvider>
  );
};
