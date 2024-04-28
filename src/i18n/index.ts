import english from '../i18n/en.json'
import spanish from '../i18n/es.json'


const LANGUAGE = {
  ENGLISH: "en", 
  SPANISH: "es"
}


export const getI18N = ({ currentlocale }: {currentLocale: 'en' | 'es'}) => {
  if (currentlocale === LANGUAGE.ENGLISH) return english
  if(currentlocale === LANGUAGE.SPANISH) return spanish
}