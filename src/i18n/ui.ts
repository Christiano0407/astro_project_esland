import  flagSpan from '../components/flags/Spain.astro';
import flagUSA from '../components/flags/unitedStates.astro'; 

// Add missing imports
export const LANGUAGES : Record < string , 
{code: string;  name: string;  flag: typeof flagSpan} > = {
  en: {
		code: 'en',
		name: 'English',
		flag: flagUSA,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: flagSpan,
	},
}; 


export const defaultLang = "en"; 
export const showDefaultLang = false; 


export const ui = {
  es: {
		'nav.inicio': 'Inicio',
		'nav.vota': 'Vota',
		'nav.info': 'Información',
		'nav.archivo': 'Archivo',
		'nav.legal': 'Aviso Legal',
		'nav.privacidad': 'Privacidad',
		'nav.cookies': 'Cookies',
	},
	en: {
		'nav.inicio': 'Home',
		'nav.vota': 'Vote',
		'nav.info': 'Information',
		'nav.archivo': 'Archive',
		'nav.legal': 'Legal Notice',
		'nav.privacidad': 'Privacy',
		'nav.cookies': 'Cookies',
	},
} as const; 


export const routes = {
  es: {
		vota: 'vota',
		info: 'info',
		archivo: 'archivo',
		'aviso-legal': 'aviso-legal',
		privacidad: 'privacidad',
		cookies: 'cookies',
	},
	en: {
		vota: 'vote',
		info: 'information',
		archivo: 'archive',
		'aviso-legal': 'legal-notice',
		privacidad: 'privacy',
		cookies: 'cookies',
	},
}