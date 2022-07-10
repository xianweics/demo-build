export type TPerLanguage = {
  [k in string]: string;
};

export type TLanguages = 'en' | 'zh-cn';

export type TMessages = { [k in TLanguages]: TPerLanguage };
