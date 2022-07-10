import { useIntl } from 'react-intl';
import * as constant from 'src/locale/constant';
export default (): JSX.Element => {
  const { messages } = useIntl();
  return <>Detail: {messages[constant.language]}</>;
};
