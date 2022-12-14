import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('.navigationDrawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange' , () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});