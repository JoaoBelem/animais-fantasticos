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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\nclass AnimaNumeros {\n  constructor() {\n    this.numeros = document.querySelectorAll('[data-numero]');\n    this.observerTarget = document.querySelector('.numeros');\n\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n\n  incrementarNumero(e) {\n    const total = +e.innerText;\n    const inscremento = Math.floor(total / 100);\n    let start = 0;\n    const timer = setInterval(() => {\n      start += inscremento;\n      e.innerText = start;\n      if (start > total) {\n        e.innerText = total;\n        clearInterval(timer);\n      }\n    }, 25 * Math.random());\n  }\n\n  animaNumeros() {\n    this.numeros.forEach((numero) => this.incrementarNumero(numero));\n  }\n\n  handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      this.observer.disconnect();\n      this.animaNumeros();\n    }\n  }\n\n  addObserver() {\n    this.observer = new MutationObserver(this.handleMutation);\n    this.observer.observe(this.observerTarget, { attributes: true });\n  }\n\n  init() {\n    if(this.numeros && this.observerTarget){\n      this.addObserver();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction FetchAnimais(url, alvo) {\r\n  function createAnimal(animal) {\r\n    const div = document.createElement('div');\r\n    div.classList.add('numero-animal');\r\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\r\n    return div;\r\n  }\r\n\r\n  // Fetch das informações de cada animal e cria o elemento usando createAnimal()\r\n  async function criarAnimais() {\r\n    try {\r\n      const animaisResponse = await fetch(url);\r\n      const animaisJSON = await animaisResponse.json();\r\n      const numerosGrid = document.querySelector(alvo);\r\n\r\n      animaisJSON.forEach((animal) => {\r\n        const divAnimal = createAnimal(animal);\r\n        numerosGrid.appendChild(divAnimal);\r\n      });\r\n      \r\n      const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n      animaNumeros.init();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n  criarAnimais();\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FetchBitcoin)\n/* harmony export */ });\nfunction FetchBitcoin(url, target) {\r\n  fetch(url)\r\n    .then((response) => response.json())\r\n    .then((bitcoin) => {\r\n      const btcPreco = document.querySelector(target);\r\n      btcPreco.innerText = (1000 / bitcoin.BRL.buy).toFixed(4);\r\n    }).catch((erro) => console.log(Error(erro)));\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/fetch-bitcoin.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n/*\r\nO menu deve ser selecionado pela classe.\r\nO botão do menu mobile deve ter o atributo [data-menu=\"button\"].\r\nA lista de itens deve ter o atributo [data-menu=\"list\"].\r\n\r\nCaso haja uma lista de itens(dropdown menu), o item pai deve ter o atributo [data-dropdown].\r\ne a lista de itens(dropdown menu), a mesma deve ter o atributo [data-menu=\"list\"].\r\n*/\r\n\r\n\r\n\r\nclass MenuMobile {\r\n  constructor(nomeMenu){\r\n    if (nomeMenu === undefined) {\r\n      this.menu = document.querySelector('nav.menu');\r\n    } else {\r\n      this.menu = document.querySelector(nomeMenu);\r\n    }\r\n    this.menuButton = document.querySelector('[data-menu=\"button\"]');\r\n    this.menuList = document.querySelector('[data-menu=\"list\"]');\r\n    this.eventos = ['click', 'touch'];\r\n    this.eventos2 = ['click', 'touch', 'touchstart'];\r\n    this.opcoesMenu = document.querySelectorAll('[data-menu=\"list\"] > li:not([data-dropdown])');\r\n    this.dropdownMenus = document.querySelectorAll('[data-dropdown]');\r\n\r\n    this.openMenu = this.openMenu.bind(this);\r\n    this.handleClick = this.handleClick.bind(this);\r\n  }\r\n\r\n  openMenu() {\r\n    this.menuList.classList.toggle('active');\r\n    this.menuButton.classList.toggle('active');\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menu, this.eventos2, () => {\r\n      this.menuList.classList.remove('active');\r\n      this.menuButton.classList.remove('active');\r\n      this.dropdownMenus.forEach((i) => {\r\n        i.classList.remove('active');\r\n      })\r\n    });\r\n  }\r\n\r\n  handleClick() {\r\n    this.classList.toggle('active');\r\n  }\r\n\r\n  init(){\r\n    if (this.menuButton) {\r\n      this.eventos.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));\r\n    }\r\n    \r\n    this.dropdownMenus.forEach((dropdown) => {\r\n      dropdown.addEventListener('click', () => {\r\n        if (window.matchMedia('(max-width: 700px)').matches){\r\n          dropdown.classList.toggle('active');\r\n        }\r\n      });\r\n    });\r\n\r\n    this.opcoesMenu.forEach((i) => {\r\n      i.addEventListener('click', () => {\r\n        this.dropdownMenus.forEach((e) => {\r\n          e.classList.remove('active');\r\n        });\r\n      });\r\n    });\r\n\r\n    this.opcoesMenu.forEach((e) => {\r\n      e.addEventListener('click', () => {\r\n        this.menuList.classList.remove('active');\r\n        this.menuButton.classList.remove('active');\r\n      });\r\n    });\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/*\r\nÉ recomendado que o container do modal tenhas as seguintes propriedades CSS: position absolute e z-index acima da página toda.\r\n*/\r\n\r\nclass Modal {\r\n  constructor(btnAbre, btnFecha, container, activeClass) {\r\n    this.botaoAbrir = document.querySelector(btnAbre);\r\n    this.botaoFechar = document.querySelector(btnFecha);\r\n    this.containerModal = document.querySelector(container);\r\n\r\n    if (activeClass === undefined) {\r\n      this.activeClass = 'ativo';\r\n    } else {\r\n      this.activeClass = activeClass;\r\n    }\r\n\r\n    this.toggleModal = this.toggleModal.bind(this);\r\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\r\n  }\r\n\r\n  toggleModal(event) {\r\n    if (event)\r\n    event.preventDefault();\r\n    this.containerModal.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  cliqueForaModal(event) {\r\n    if (event.target === this.containerModal) {\r\n      this.toggleModal(event);\r\n    }\r\n  }\r\n\r\n  init() {\r\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n      this.botaoAbrir.addEventListener('click', this.toggleModal);\r\n      this.botaoFechar.addEventListener('click', this.toggleModal);\r\n      this.containerModal.addEventListener('click', this.cliqueForaModal);\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-anima.js":
/*!************************************!*\
  !*** ./js/modules/scroll-anima.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\nclass ScrollAnima {\r\n  constructor(sections){\r\n    this.sections = document.querySelectorAll(sections);\r\n    this.windowMetade = window.innerHeight * 0.6;\r\n\r\n    this.animaScroll = this.animaScroll.bind(this);\r\n    this.checkDistance = this.checkDistance.bind(this);\r\n  }\r\n\r\n  getDistance() {\r\n    this.distance = [...this.sections].map((section) => {\r\n      const offset = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        offset\r\n      }\r\n    });\r\n  }\r\n\r\n  checkDistance() {\r\n    console.log(window.scrollY);\r\n    this.distance.forEach((item) => {\r\n      console.log(item);\r\n      if(window.scrollY > item.offset){\r\n        item.element.classList.add('ativo');\r\n      } else {\r\n        item.element.classList.remove('ativo');\r\n      }\r\n    });\r\n  }\r\n\r\n  animaScroll() {\r\n    this.sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const isSectionVisible = (sectionTop - this.windowMetade) < 0;\r\n      if (isSectionVisible) section.classList.add('ativo');\r\n      else if (section.classList.contains('ativo')) {\r\n        section.classList.remove('ativo');\r\n      }\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.sections.forEach((i) => {\r\n      i.classList.add('ativo');\r\n      // console.log(i.offsetTop);\r\n    });\r\n\r\n    const contato = document.querySelector('.contato')\r\n\r\n    console.log('note que os valores bem no inicio ao carregar a página estão errados, mas depois de 1 segundo é o valor real.');\r\n\r\n    console.log(`offsetTop de contato é ${contato.offsetTop}`);\r\n    console.log(`offsetHeight de body é ${document.body.offsetHeight}`);\r\n    setTimeout(() => {\r\n      console.log(`offsetTop de contato depois de 1 segundo é ${contato.offsetTop}`);\r\n      console.log(`offsetHeight de body depois de 1 segundo é ${document.body.offsetHeight}`);\r\n    }, 1000);\r\n\r\n\r\n    // if (this.sections.length) {\r\n    //   // this.animaScroll();\r\n    //   setTimeout(() => {\r\n    //     this.getDistance();\r\n    //     window.addEventListener('scroll', this.checkDistance)\r\n    //   }, 1000)  \r\n    // }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/scroll-anima.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: 'smooth', block: 'start' };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute('href');\r\n    const section = document.querySelector(href);\r\n\r\n    if (window.matchMedia('(max-width:  700px)').matches){\r\n      window.scroll({\r\n        behavior: 'smooth',\r\n        top: section.offsetTop - 54\r\n      });\r\n    }else {\r\n      section.scrollIntoView(this.options);\r\n    }\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener('click', this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if(this.linksInternos.length){\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\n// !! Elemento pai de \"tabItem\" deve ter o atributo \"position\" do CSS explicito. Para que este plugin funcione da forma devida.\r\n\r\nclass TabNav {\r\n  constructor(menu, display, initial, activeClassName) {\r\n    this.tabItem = document.querySelectorAll(menu)\r\n    this.tabDisplay = document.querySelectorAll(display);\r\n    this.activeClass = activeClassName;\r\n    this.initial = initial;\r\n\r\n    if (activeClassName === undefined) {\r\n      this.activeClass = 'ativo';\r\n    }\r\n    if (initial === undefined) {\r\n      this.initial = 0;\r\n    }\r\n  }\r\n\r\n  // Adiciona a classe de ativação\r\n  activeTab(index) {\r\n    this.tabDisplay.forEach((section) => {\r\n      section.classList.remove(this.activeClass);\r\n    });\r\n    const direcao = this.tabDisplay[index].dataset.anime;\r\n    this.tabDisplay[index].classList.add(this.activeClass, direcao);\r\n  }\r\n\r\n  // Adiciona classe ativa + muda o menu\r\n  goto(index) {\r\n    if (index <= this.tabItem.length - 1 && index >= 0) {\r\n      this.activeTab(index);\r\n      this.tabItem[0].parentElement.scroll({\r\n        top: this.tabItem[index].offsetTop,\r\n        behavior: 'smooth'\r\n      });\r\n    }\r\n  }\r\n\r\n  init(){\r\n    if (this.tabItem.length && this.tabDisplay.length) {\r\n      this.tabItem.forEach((itemMenu, index) => {\r\n        itemMenu.addEventListener('click', () => {\r\n          this.activeTab(index);\r\n        });\r\n      });\r\n      this.goto(this.initial);\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\r\n  constructor(tooltipSelector){\r\n    if (tooltipSelector === undefined)\r\n      this.tooltips = document.querySelectorAll('[data-tooltip]');\r\n    else\r\n      this.tooltips = document.querySelectorAll(tooltipSelector);\r\n    \r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n  }\r\n\r\n  onMouseMove(item) {\r\n    this.tooltipBox.style.top = `${item.pageY + 20}px`;\r\n    if ((item.pageX + this.tooltipBox.offsetWidth + 50) > window.innerWidth) {\r\n      this.tooltipBox.style.left = `${item.pageX - this.tooltipBox.offsetWidth - 20}px`;\r\n    } else{\r\n      this.tooltipBox.style.left = `${item.pageX + 20}px`;\r\n    }\r\n  }\r\n\r\n  onMouseLeave({ currentTarget }) {\r\n    this.tooltipBox.remove();\r\n    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\r\n    currentTarget.removeEventListener('mousemove', this.onMouseMove);\r\n  }\r\n  \r\n  criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement('div');\r\n    const text = element.getAttribute('aria-label');\r\n    tooltipBox.classList.add('tooltip');\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n\r\n  onMouseOver(event) {\r\n    this.tooltipBox = this.criarTooltipBox(event.currentTarget);\r\n    event.currentTarget.addEventListener('mousemove', this.onMouseMove);\r\n    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);\r\n  }\r\n\r\n  init() {\r\n    this.tooltips.forEach((item) => {\r\n      item.addEventListener('mouseover', (e) => this.onMouseOver(e));\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./js/modules/scroll-anima.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt', 0);\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\r\ntabNav.init();\r\n\r\ndocument.addEventListener('keydown', (e) => {\r\n  if (e.key.match(/\\d/)){\r\n    tabNav.goto(e.key - 1);\r\n  }\r\n});\r\n\r\n\r\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('nav.menu');\r\nmenuMobile.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\r\nmodal.init();\r\n\r\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\r\ntooltip.init();\r\n\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('animaisapi.json', '.numeros-grid');\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('https://blockchain.info/ticker', '.btc-preco');\r\n\r\nconst scrollAnima = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]('[data-anime=\"scroll\"]');\r\nscrollAnima.init();\r\n\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n\n\n//# sourceURL=webpack://0609-bitcoin-fetch/./js/script.js?");

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