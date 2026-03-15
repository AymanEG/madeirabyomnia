import { ui, defaultLang, languages } from './translations';
import type { Lang } from './translations';

export { languages, defaultLang };
export type { Lang };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getLocalizedPath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function alternateLinks(currentPath: string, currentLang: Lang) {
  return Object.keys(languages).map((lang) => {
    const l = lang as Lang;
    const href = l === defaultLang ? currentPath : `/${l}${currentPath}`;
    return { lang: l, href };
  });
}
