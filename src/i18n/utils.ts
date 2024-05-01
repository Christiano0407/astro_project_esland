import { string } from 'astro/zod';
import { ui, defaultLang, showDefaultLang, routes } from '../i18n/ui'; 

//*? === Get URL */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/'); 
  if ( lang in ui ) return lang as keyof typeof ui; 
  return defaultLang; 
}

//*? === Translate Lang */
export function useTranslation(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]; 
  }
}

//*? === Used */
export function useTranslationPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replaceAll('/', '');
    const hasTranslation = defaultLang !== l && (routes[l as keyof typeof routes] as Record<string, string>)[
      pathName
    ] !== undefined; 
    const translatedPath = hasTranslation ? '/' + (routes[l as keyof typeof routes] as Record<string, string>)[pathName] : path; 
    
    // === Return To Route, Lang & Endpoint ===
    return !showDefaultLang && l === defaultLang 
    ? translatedPath : `/${l}${translatedPath}` 
  }; 
}

//** === GetRoute From URL */
export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname; 
  const parts = pathname?.split('/'); 
  const path = parts.pop() || parts.pop(); 

  if (path === undefined) {
     return undefined; 
  }

  const currentLang = getLangFromUrl(url); 

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0]; 
    return  route[path as keyof typeof route] !== undefined   
    ? route[path as keyof typeof route] 
    : undefined; 
  }

  const getKeyValue = (
    obj: Record<string, string>, 
    value: string
  ): string | undefined => {
    return Object.keys(obj).find(key => obj[key] === value); 
  }


  const reversedKey = getKeyValue(routes[currentLang], path); 

  if ( reversedKey !== undefined) {
    return reversedKey; 
  }

  return undefined; 

}