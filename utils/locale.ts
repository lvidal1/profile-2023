import i18nConfig from '../i18n.json';

export const { locales } = i18nConfig;

type LocaleNamespaceType = {
    [key: string]: string;
};

export const LOCALES_NAMESPACE: LocaleNamespaceType = {
    en: 'common',
    es: 'commonES',
};
