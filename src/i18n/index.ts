import english from '../i18n/en.json'
import spanish from '../i18n/es.json'


const LANGUAGE = {
  ENGLISH: "en", 
  SPANISH: "es"
}


export const getI18N = ( { currentLocale = "en" }: {
  
  currentLocale: string | undefined } ) => {
  
    if (currentLocale === LANGUAGE.ENGLISH) return english
    if(currentLocale === LANGUAGE.SPANISH) return spanish
    return english
}