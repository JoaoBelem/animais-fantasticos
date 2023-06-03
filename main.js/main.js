/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(item, start) {\r\n    this.accordionList = document.querySelectorAll(item);\r\n    this.activeClass = 'ativo';\r\n    this.activeAccordion = this.activeAccordion.bind(this);\r\n    if (start !== undefined) {\r\n      this.accordionList[start].classList.add(this.activeClass);\r\n      this.accordionList[start].nextElementSibling.classList.add(this.activeClass);\r\n    }\r\n  }\r\n\r\n  addClass(item) {\r\n    if (item !== undefined) {\r\n      this.accordionList[item].classList.add(this.activeClass);\r\n      this.accordionList[item].nextElementSibling.classList.add(\r\n        this.activeClass\r\n      );\r\n    }\r\n  }\r\n\r\n  removeClass(item) {\r\n    if(item !== undefined){\r\n      this.accordionList[item].classList.remove(this.activeClass);\r\n      this.accordionList[item].nextElementSibling.classList.remove(this.activeClass);\r\n    }\r\n  }\r\n\r\n  activeAccordion(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  init() {\r\n    if (this.accordionList.length) {\r\n      this.accordionList.forEach((item) => {\r\n        item.addEventListener('click', () => {\r\n          this.activeAccordion(item);\r\n        });\r\n      });\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const inscremento = Math.floor(total / 100);\n      let start = 0;\n      const timer = setInterval(() => {\n        start += inscremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  let observer;\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n  observer = new MutationObserver(handleMutation);\n  const observerTarget = document.querySelector('.numeros');\n\n  observer.observe(observerTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initDropdownMenu() {\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.toggle('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  dropdownMenus.forEach((menu) => {\n    ['touchstart', 'click'].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction initFetchAnimais() {\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\n    return div;\n  }\n  async function fetchAnimais(url) {\n    try {\n      const animaisResponse = await fetch(url);\n      const animaisJSON = await animaisResponse.json();\n      const numerosGrid = document.querySelector('.numeros-grid');\n      animaisJSON.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n        numerosGrid.appendChild(divAnimal);\n      });\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n  fetchAnimais('./animaisapi.json');\n}\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  fetch('https://blockchain.info/ticker')\n    .then((response) => response.json())\n    .then((bitcoin) => {\n      const btcPreco = document.querySelector('.btc-preco');\n      btcPreco.innerText = (1000 / bitcoin.BRL.buy).toFixed(4);\n    }).catch((erro) => console.log(Error(erro)));\n}\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector('[data-semana]');\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menu = document.querySelector('nav.menu');\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const eventos = ['click', 'touch'];\r\n  const eventos2 = ['click', 'touch', 'touchstart'];\r\n  const opcoesMenu = document.querySelectorAll('[data-menu=\"list\"] > li');\r\n\r\n  opcoesMenu.forEach((e) => {\r\n    e.addEventListener('click', () => {\r\n      menuList.classList.remove('active');\r\n      menuButton.classList.remove('active');\r\n    });\r\n  });\r\n\r\n  function openMenu() {\r\n    menuList.classList.toggle('active');\r\n    menuButton.classList.toggle('active');\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menu, eventos2, () => {\r\n      menuList.classList.remove('active');\r\n      menuButton.classList.remove('active');\r\n    });\r\n  }\r\n\r\n  if (menuButton) {\r\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle('ativo');\n  }\n  function cliqueForaModal(event) {\n    if (event.target === this) {\n      toggleModal(event);\n    }\n  }\n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoAbrir.addEventListener('click', toggleModal);\n    botaoFechar.addEventListener('click', toggleModal);\n    containerModal.addEventListener('click', cliqueForaModal);\n  }\n}\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  const windowMetade = window.innerHeight * 0.8;\r\n  function animaScroll() {\r\n    sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const isSectionVisible = (sectionTop - windowMetade) < 0;\r\n      if (isSectionVisible) section.classList.add('ativo');\r\n      else if (section.classList.contains('ativo')) {\r\n        section.classList.remove('ativo');\r\n      }\r\n    });\r\n  }\r\n  if (sections.length) {\r\n    animaScroll();\r\n    window.addEventListener('scroll', animaScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: 'smooth', block: 'start' };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute('href');\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener('click', this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if(this.linksInternos.length){\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\n// !! Elemento pai de \"tabItem\" deve ter o atributo \"position\" do CSS explicito. Para que este plugin funcione da forma devida.\n\nclass TabNav {\n  constructor(menu, display, initial, activeClassName) {\n    this.tabItem = document.querySelectorAll(menu)\n    this.tabDisplay = document.querySelectorAll(display);\n    this.activeClass = activeClassName;\n    this.initial = initial;\n\n    if (activeClassName === undefined) {\n      this.activeClass = 'ativo';\n    }\n    if (initial === undefined) {\n      this.initial = 0;\n    }\n  }\n\n  // Adiciona a classe de ativação\n  activeTab(index) {\n    this.tabDisplay.forEach((section) => {\n      section.classList.remove(this.activeClass);\n    });\n    const direcao = this.tabDisplay[index].dataset.anime;\n    this.tabDisplay[index].classList.add(this.activeClass, direcao);\n  }\n\n  // Adiciona classe ativa + muda o menu\n  goto(index) {\n    if (index <= this.tabItem.length - 1 && index >= 0) {\n      this.activeTab(index);\n      this.tabItem[0].parentElement.scroll({\n        top: this.tabItem[index].offsetTop,\n        behavior: 'smooth'\n      });\n    }\n  }\n\n  init(){\n    if (this.tabItem.length && this.tabDisplay.length) {\n      this.tabItem.forEach((itemMenu, index) => {\n        itemMenu.addEventListener('click', () => {\n          this.activeTab(index);\n        });\n      });\n      this.goto(this.initial);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\n/* eslint-disable no-inner-declarations */\r\nfunction initTooltip() {\r\n  if (!window.matchMedia('(max-width: 700px)').matches) {\r\n    const tooltips = document.querySelectorAll('[data-tooltip]');\r\n    const onMouseMove = {\r\n      handleEvent(event) {\r\n        this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n        this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n      },\r\n    };\r\n    const onMouseLeave = {\r\n      handleEvent() {\r\n        this.tooltipBox.remove();\r\n        this.element.removeEventListener('mouseleave', onMouseLeave);\r\n        this.element.removeEventListener('mousemove', onMouseMove);\r\n      },\r\n    };\r\n\r\n    function criarTooltipBox(element) {\r\n      const tooltipBox = document.createElement('div');\r\n      const text = element.getAttribute('aria-label');\r\n      tooltipBox.classList.add('tooltip');\r\n      tooltipBox.innerText = text;\r\n      document.body.appendChild(tooltipBox);\r\n      return tooltipBox;\r\n    }\r\n\r\n    function onMouseOver() {\r\n      const tooltipBox = criarTooltipBox(this);\r\n\r\n      onMouseMove.tooltipBox = tooltipBox;\r\n      this.addEventListener('mousemove', onMouseMove);\r\n\r\n      onMouseLeave.tooltipBox = tooltipBox;\r\n      onMouseLeave.element = this;\r\n      this.addEventListener('mouseleave', onMouseLeave);\r\n    }\r\n\r\n    tooltips.forEach((item) => {\r\n      item.addEventListener('mouseover', onMouseOver);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt', 0);\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\r\ntabNav.init();\r\n\r\ndocument.addEventListener('keydown', (e) => {\r\n  if (e.key.match(/\\d/)){\r\n    tabNav.goto(e.key - 1);\r\n  }\r\n});\r\n\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;