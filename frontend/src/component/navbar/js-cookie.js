import Cookies from 'js-cookie';

// Pour sauvegarder la langue de l'utilisateur dans un cookie
Cookies.set('lang', 'fr');

// Pour récupérer la langue de l'utilisateur à partir du cookie
const lang = Cookies.get('lang');
