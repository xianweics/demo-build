import en from './en';
import cn from './cn';
import { TLanguages, TMessages } from '../Types';

export const messages: TMessages = {
  en,
  'zh-cn': cn,
};

export const defaultLocale: TLanguages = 'en';
