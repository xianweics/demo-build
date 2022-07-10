import { useIntl } from 'react-intl';

export const useFormatIntl = (id: string): string => {
  const intl = useIntl();
  return (intl.messages[id] || id) as string;
};
