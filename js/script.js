import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import MenuMobile from './modules/menu-mobile.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import FetchAnimais from './modules/fetch-animais.js';
import FetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';
import initFuncionamento from './modules/funcionamento.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

document.addEventListener('keydown', (e) => {
  if (e.key.match(/\d/)){
    tabNav.goto(e.key - 1);
  }
});

const menuMobile = new MenuMobile('nav.menu');
menuMobile.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip();
tooltip.init();

FetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

await FetchAnimais('animaisapi.json', '.numeros-grid')

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

initFuncionamento();  
