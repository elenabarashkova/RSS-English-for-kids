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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://match-match-game/./src/style.css?");

/***/ }),

/***/ "./src/common/constants.ts":
/*!*********************************!*\
  !*** ./src/common/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DEFAULT_WINNERS = void 0;\nexports.DEFAULT_WINNERS = [\n    {\n        firstName: 'User',\n        lastName: 'N1',\n        email: 'user1@mail.ru',\n        score: 100,\n    },\n    {\n        firstName: 'User',\n        lastName: 'N2',\n        email: 'user2@mail.ru',\n        score: 500,\n    },\n    {\n        firstName: 'User',\n        lastName: 'N3',\n        email: 'user3@mail.ru',\n        score: 1000,\n    },\n    {\n        firstName: 'User',\n        lastName: 'N4',\n        email: 'user4@mail.ru',\n        score: 1500,\n    },\n    {\n        firstName: 'User',\n        lastName: 'N5',\n        email: 'user5@mail.ru',\n        score: 2000,\n    },\n    {\n        firstName: 'User',\n        lastName: 'N6',\n        email: 'user6@mail.ru',\n        score: 2500,\n    },\n    {\n        firstName: 'User',\n        lastName: 'N7',\n        email: 'user7@mail.ru',\n        score: 3000,\n    },\n    {\n        firstName: 'Fat',\n        lastName: 'Cat',\n        email: 'fat-cat@mail.ru',\n        score: 3500,\n    },\n    {\n        firstName: 'Mr',\n        lastName: 'Dog',\n        email: 'mr-dog@mail.ru',\n        score: 4000,\n    },\n    {\n        firstName: 'Nice',\n        lastName: 'Cat',\n        email: 'nicecat@gmail.com',\n        score: 8000,\n    }\n];\n\n\n//# sourceURL=webpack://match-match-game/./src/common/constants.ts?");

/***/ }),

/***/ "./src/common/indexedDB.ts":
/*!*********************************!*\
  !*** ./src/common/indexedDB.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getCurrentUser = exports.getScores = exports.addScores = exports.addUser = exports.initializeDB = void 0;\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/common/constants.ts\");\nlet db;\nlet currentUser;\nlet fillDefaultNeeded = false;\nconst fillDefaultUsers = () => {\n    constants_1.DEFAULT_WINNERS.forEach(winner => {\n        const transaction = db.transaction(['scores'], 'readwrite');\n        const store = transaction.objectStore('scores');\n        const { email, firstName, lastName, score } = winner;\n        store.add({\n            email,\n            firstName,\n            lastName,\n            score,\n        });\n    });\n};\nconst initializeDB = (callback) => {\n    const openRequest = indexedDB.open('elenabarashkova', 1);\n    openRequest.onupgradeneeded = () => {\n        const thisDB = openRequest.result;\n        if (!thisDB.objectStoreNames.contains('users')) {\n            thisDB.createObjectStore('users', { keyPath: 'email' });\n        }\n        if (!thisDB.objectStoreNames.contains('scores')) {\n            thisDB.createObjectStore('scores', { autoIncrement: true });\n            fillDefaultNeeded = true;\n        }\n    };\n    openRequest.onsuccess = () => {\n        db = openRequest.result;\n        if (fillDefaultNeeded) {\n            fillDefaultUsers();\n        }\n        callback();\n    };\n};\nexports.initializeDB = initializeDB;\nconst addUser = (personData) => {\n    currentUser = personData;\n    const transaction = db.transaction(['users'], 'readwrite');\n    const store = transaction.objectStore('users');\n    store.add(personData);\n};\nexports.addUser = addUser;\nconst addScores = (score, callback, triesCount = 0) => {\n    const transaction = db.transaction(['scores'], 'readwrite');\n    const store = transaction.objectStore('scores');\n    const { email, firstName, lastName, userPhoto } = currentUser;\n    const request = store.add({\n        email,\n        firstName,\n        lastName,\n        userPhoto,\n        score,\n    });\n    request.onerror = () => {\n        if (triesCount < 5) {\n            exports.addScores(score, callback, triesCount + 1);\n        }\n    };\n    request.onsuccess = () => {\n        callback();\n    };\n};\nexports.addScores = addScores;\nconst getScores = (callback) => {\n    const transaction = db.transaction(['scores'], 'readonly');\n    const objectStore = transaction.objectStore('scores');\n    const request = objectStore.getAll();\n    request.onsuccess = () => {\n        const requestResult = request.result;\n        requestResult.sort((item1, item2) => item2.score - item1.score);\n        const top10Score = requestResult.slice(0, 10);\n        callback(top10Score);\n    };\n};\nexports.getScores = getScores;\nconst getCurrentUser = () => currentUser;\nexports.getCurrentUser = getCurrentUser;\n\n\n//# sourceURL=webpack://match-match-game/./src/common/indexedDB.ts?");

/***/ }),

/***/ "./src/common/pages-config.ts":
/*!************************************!*\
  !*** ./src/common/pages-config.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PAGES_CONFIG = void 0;\nconst render_about_page_1 = __webpack_require__(/*! ../pages/about-game/render-about-page */ \"./src/pages/about-game/render-about-page.ts\");\nconst render_best_score_1 = __webpack_require__(/*! ../pages/best-score/render-best-score */ \"./src/pages/best-score/render-best-score.ts\");\nconst render_settings_1 = __webpack_require__(/*! ../pages/settings/render-settings */ \"./src/pages/settings/render-settings.ts\");\nconst render_board_1 = __webpack_require__(/*! ../pages/game/render-board/render-board */ \"./src/pages/game/render-board/render-board.ts\");\nconst constants_1 = __webpack_require__(/*! ../header/constants */ \"./src/header/constants.ts\");\nexports.PAGES_CONFIG = {\n    [constants_1.PAGES_ID.ABOUT_GAME]: render_about_page_1.initAboutPage,\n    [constants_1.PAGES_ID.BEST_SCORE]: render_best_score_1.initBestScore,\n    [constants_1.PAGES_ID.SETTINGS]: render_settings_1.initSettingsPage,\n    [constants_1.PAGES_ID.GAME]: render_board_1.initGameBoard,\n};\n\n\n//# sourceURL=webpack://match-match-game/./src/common/pages-config.ts?");

/***/ }),

/***/ "./src/common/shared.ts":
/*!******************************!*\
  !*** ./src/common/shared.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.insertHtml = exports.createMain = void 0;\nconst createMain = () => {\n    const main = document.createElement('main');\n    main.id = 'main';\n    main.classList.add('container');\n    const body = document.querySelector('body');\n    body === null || body === void 0 ? void 0 : body.append(main);\n};\nexports.createMain = createMain;\nconst insertHtml = (insertPlace, html) => {\n    insertPlace.insertAdjacentHTML('beforeend', html);\n};\nexports.insertHtml = insertHtml;\n\n\n//# sourceURL=webpack://match-match-game/./src/common/shared.ts?");

/***/ }),

/***/ "./src/header/constants.ts":
/*!*********************************!*\
  !*** ./src/header/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DEFAULT_PAGE = exports.MENU_ITEMS = exports.PAGES_ID = void 0;\nconst aboutGameIconLink = __webpack_require__(/*! ../assets/about-game-icon.svg */ \"./src/assets/about-game-icon.svg\");\nconst bestScoreIconLink = __webpack_require__(/*! ../assets/best-score-icon.svg */ \"./src/assets/best-score-icon.svg\");\nconst settingsIconLink = __webpack_require__(/*! ../assets/settings-icon.svg */ \"./src/assets/settings-icon.svg\");\nexports.PAGES_ID = {\n    ABOUT_GAME: 'about_game',\n    BEST_SCORE: 'best_score',\n    SETTINGS: 'settings',\n    GAME: 'game',\n};\nexports.MENU_ITEMS = [\n    {\n        id: exports.PAGES_ID.ABOUT_GAME,\n        name: 'About Game',\n        icon: aboutGameIconLink,\n    },\n    {\n        id: exports.PAGES_ID.BEST_SCORE,\n        name: 'Best Score',\n        icon: bestScoreIconLink,\n    },\n    {\n        id: exports.PAGES_ID.SETTINGS,\n        name: 'Game Settings',\n        icon: settingsIconLink,\n    },\n];\nexports.DEFAULT_PAGE = exports.PAGES_ID.ABOUT_GAME;\n\n\n//# sourceURL=webpack://match-match-game/./src/header/constants.ts?");

/***/ }),

/***/ "./src/header/render-header/render-header-btns.ts":
/*!********************************************************!*\
  !*** ./src/header/render-header/render-header-btns.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderHeaderBtns = void 0;\nconst renderHeaderBtns = () => (`\n  <div class=\"header-item user-info not-registered\">\n    <button id=\"registerBtn\" data-target=\"registerPopup\" class=\"btn register-btn\">register new player</button>\n    <div class=\"with-user\">\n      <div class=\"user-pic\">\n        <img id=\"headerUserPic\" src=\"./assets/user-default-pic.png\" alt=\"User Picture\">\n      </div>\n      <a href=\"#game\" id=\"gameTumblerBtn\" class=\"btn game-tumbler-btn menu-item\">start game</a>\n    </div>\n  </div>\n`);\nexports.renderHeaderBtns = renderHeaderBtns;\n\n\n//# sourceURL=webpack://match-match-game/./src/header/render-header/render-header-btns.ts?");

/***/ }),

/***/ "./src/header/render-header/render-header.ts":
/*!***************************************************!*\
  !*** ./src/header/render-header/render-header.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderHeader = void 0;\nconst render_menu_1 = __webpack_require__(/*! ./render-menu */ \"./src/header/render-header/render-menu.ts\");\nconst render_header_btns_1 = __webpack_require__(/*! ./render-header-btns */ \"./src/header/render-header/render-header-btns.ts\");\nconst shared_1 = __webpack_require__(/*! ../../common/shared */ \"./src/common/shared.ts\");\nconst headerLogo = () => (`\n  <div class=\"header-item logo\">\n    <h1>\n      <span>Match</span>\n      <span>Match</span>\n    </h1>\n  </div>\n`);\nconst renderHeader = () => {\n    const body = document.querySelector('body');\n    const header = document.createElement('header');\n    body === null || body === void 0 ? void 0 : body.append(header);\n    const headerContainer = document.createElement('div');\n    headerContainer.classList.add('container');\n    header === null || header === void 0 ? void 0 : header.append(headerContainer);\n    const headerComponents = [headerLogo(), render_menu_1.renderMenu(), render_header_btns_1.renderHeaderBtns()];\n    headerComponents.map(component => shared_1.insertHtml(headerContainer, component));\n};\nexports.renderHeader = renderHeader;\n\n\n//# sourceURL=webpack://match-match-game/./src/header/render-header/render-header.ts?");

/***/ }),

/***/ "./src/header/render-header/render-menu.ts":
/*!*************************************************!*\
  !*** ./src/header/render-header/render-menu.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderMenu = void 0;\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./src/header/constants.ts\");\nconst renderMenuItems = () => constants_1.MENU_ITEMS\n    .map(({ id, name, icon }) => (`\n      <li id=${id} class=\"menu-item\">\n        <a href=\"#${id}\" class=\"menu-link\">\n          <div class=\"menu-item-icon\">\n            ${icon}\n          </div>\n          <span>${name}</span>\n        </a>\n      </li>\n    `))\n    .join('');\nconst renderMenu = () => (`\n  <nav class=\"header-item\">\n    <ul id=\"menu\" class=\"menu\">\n      ${renderMenuItems()}\n    </ul>\n  </nav>\n`);\nexports.renderMenu = renderMenu;\n\n\n//# sourceURL=webpack://match-match-game/./src/header/render-header/render-menu.ts?");

/***/ }),

/***/ "./src/header/render-header/switch-to-registered-mode.ts":
/*!***************************************************************!*\
  !*** ./src/header/render-header/switch-to-registered-mode.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.switchToRegisteredMode = void 0;\nconst indexedDB_1 = __webpack_require__(/*! ../../common/indexedDB */ \"./src/common/indexedDB.ts\");\nconst switchToRegisteredMode = () => {\n    const headerUserInfo = document.querySelector('.header-item.user-info');\n    headerUserInfo === null || headerUserInfo === void 0 ? void 0 : headerUserInfo.classList.remove('not-registered');\n    const image = document.getElementById('headerUserPic');\n    const { userPhoto } = indexedDB_1.getCurrentUser();\n    if (userPhoto) {\n        image.src = userPhoto;\n    }\n    headerUserInfo === null || headerUserInfo === void 0 ? void 0 : headerUserInfo.classList.add('registered');\n};\nexports.switchToRegisteredMode = switchToRegisteredMode;\n\n\n//# sourceURL=webpack://match-match-game/./src/header/render-header/switch-to-registered-mode.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst router_1 = __webpack_require__(/*! ./router */ \"./src/router.ts\");\nconst register_1 = __webpack_require__(/*! ./pages/register */ \"./src/pages/register/index.ts\");\nconst indexedDB_1 = __webpack_require__(/*! ./common/indexedDB */ \"./src/common/indexedDB.ts\");\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/render.ts\");\nwindow.addEventListener('load', () => {\n    render_1.render();\n    indexedDB_1.initializeDB(() => {\n        router_1.startRouter();\n        register_1.startRegisterForm();\n    });\n});\n\n\n//# sourceURL=webpack://match-match-game/./src/index.ts?");

/***/ }),

/***/ "./src/pages/about-game/constants.ts":
/*!*******************************************!*\
  !*** ./src/pages/about-game/constants.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.INSTRUCTIONS_ITEMS = void 0;\nexports.INSTRUCTIONS_ITEMS = [\n    { text: 'Register new player in game', },\n    { text: 'Configure your game settings', },\n    { text: 'Start you new game! Remember card positions and match it before times up.', },\n];\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/about-game/constants.ts?");

/***/ }),

/***/ "./src/pages/about-game/render-about-page.ts":
/*!***************************************************!*\
  !*** ./src/pages/about-game/render-about-page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initAboutPage = void 0;\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/pages/about-game/constants.ts\");\nconst aboutPageWrap = () => (`\n  <div class=\"about-game\">\n    <h2>How to play?</h2>\n    <div id=\"instructionsList\" class=\"instructions-list\"></div>\n  </div>\n`);\nconst generateInstructionsItems = () => constants_1.INSTRUCTIONS_ITEMS\n    .map(({ text }, index) => (`\n      <div class=\"instructions-item\">\n        <div class=\"instructions-text\">\n          <div class=\"instructions-text-inner\">\n            <span class=\"step-number\">${index + 1}</span>\n            <span class=\"text\">${text}</span>\n          </div>   \n        </div>\n        <div class=\"instructions-pic\">\n          <img src=\"./assets/about-step-${index + 1}.png\" alt=\"about-step-${index + 1}\">\n        </div>\n      </div>\n      `))\n    .join('');\nconst initAboutPage = () => {\n    const mainHtml = document.getElementById('main');\n    if (mainHtml) {\n        mainHtml.innerHTML = aboutPageWrap();\n    }\n    const instructionsList = document.getElementById('instructionsList');\n    if (instructionsList) {\n        instructionsList.innerHTML = generateInstructionsItems();\n    }\n};\nexports.initAboutPage = initAboutPage;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/about-game/render-about-page.ts?");

/***/ }),

/***/ "./src/pages/best-score/render-best-score.ts":
/*!***************************************************!*\
  !*** ./src/pages/best-score/render-best-score.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initBestScore = void 0;\nconst indexedDB_1 = __webpack_require__(/*! ../../common/indexedDB */ \"./src/common/indexedDB.ts\");\nconst defaultImg = __webpack_require__(/*! ../../assets/user-default-pic.png */ \"./src/assets/user-default-pic.png\");\nconst bestScorePageWrap = () => (`\n  <div id=\"bestScorePage\" class=\"best-score-page\">\n    <h2>Best Players</h2>\n    <div id=\"bestScoreInner\" class=\"best-score-list\"></div>\n  </div>\n`);\nconst generateWinners = (scores) => scores\n    .map(({ firstName, lastName, email, userPhoto, score }) => (`\n      <div class=\"best-score-item\">\n        <div class=\"winner-pic\">\n          <img src=\"${userPhoto || defaultImg}\" alt=\"${firstName} ${lastName}\">\n        </div>\n        <div class=\"winner-info\">\n          <div class=\"winner-name\">\n            <span>${firstName} </span>\n            <span>${lastName}</span>\n          </div>\n          <div class=\"winner-email\">\n            <span>${email} </span>\n          </div>\n        </div>\n        <div class=\"winner-score\">\n          <span>Score: </span>\n          <span>${score}</span>\n        </div>\n      </div>\n    `))\n    .join('');\nconst renderWinners = (scores) => {\n    const winnersHtml = generateWinners(scores);\n    const bestScoreInner = document.getElementById('bestScoreInner');\n    if (bestScoreInner) {\n        bestScoreInner.innerHTML = winnersHtml;\n    }\n};\nconst initBestScore = () => {\n    const mainHtml = document.getElementById('main');\n    if (mainHtml) {\n        mainHtml.innerHTML = bestScorePageWrap();\n    }\n    indexedDB_1.getScores(renderWinners);\n};\nexports.initBestScore = initBestScore;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/best-score/render-best-score.ts?");

/***/ }),

/***/ "./src/pages/game/common-functions.ts":
/*!********************************************!*\
  !*** ./src/pages/game/common-functions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.convertDifficultyToNum = void 0;\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/pages/game/constants.ts\");\nconst convertDifficultyToNum = (difficulty) => { var _a; return ((_a = constants_1.DIFFICULTIES_LIST.find(item => item.difficultyName === difficulty)) === null || _a === void 0 ? void 0 : _a.cardsNum) || constants_1.DEFAULT_CARDS_NUM; };\nexports.convertDifficultyToNum = convertDifficultyToNum;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/game/common-functions.ts?");

/***/ }),

/***/ "./src/pages/game/constants.ts":
/*!*************************************!*\
  !*** ./src/pages/game/constants.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DEFAULT_CARDS_PACK = exports.DEFAULT_CARDS_NUM = exports.DEFAULT_DIFFICULTY = exports.DIFFICULTIES_LIST = void 0;\nexports.DIFFICULTIES_LIST = [\n    {\n        difficultyName: 'easy',\n        cardsNum: 16,\n    },\n    {\n        difficultyName: 'medium',\n        cardsNum: 24,\n    },\n    {\n        difficultyName: 'hard',\n        cardsNum: 36,\n    },\n];\nexports.DEFAULT_DIFFICULTY = exports.DIFFICULTIES_LIST[0].difficultyName;\nexports.DEFAULT_CARDS_NUM = exports.DIFFICULTIES_LIST[0].cardsNum;\nexports.DEFAULT_CARDS_PACK = 'fruits-pack';\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/game/constants.ts?");

/***/ }),

/***/ "./src/pages/game/game-behavior.ts":
/*!*****************************************!*\
  !*** ./src/pages/game/game-behavior.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getMistakenCompareCount = exports.getCompareCount = exports.startGameBehavior = void 0;\nlet compareCount = 0;\nlet mistakenCompareCount = 0;\nconst startGameBehavior = (callback) => {\n    const cards = document.getElementsByClassName('card');\n    let isFlipped = false;\n    let isBoardBlocked = false;\n    let pairFirst;\n    let pairSecond;\n    const resetBoard = () => {\n        [isFlipped, isBoardBlocked] = [false, false];\n        [pairFirst, pairSecond] = [null, null];\n    };\n    const togglePairClass = (className, toggle) => {\n        pairFirst === null || pairFirst === void 0 ? void 0 : pairFirst.classList.toggle(className, toggle === 'add');\n        pairSecond === null || pairSecond === void 0 ? void 0 : pairSecond.classList.toggle(className, toggle === 'add');\n    };\n    const unflipCards = () => {\n        togglePairClass('missmatch', 'remove');\n        togglePairClass('flip', 'remove');\n        resetBoard();\n    };\n    const setMissmatched = () => {\n        isBoardBlocked = true;\n        togglePairClass('missmatch', 'add');\n        setTimeout(unflipCards, 1500);\n        compareCount += 1;\n        mistakenCompareCount += 1;\n    };\n    const flipCard = (event) => {\n        const targetCard = event.currentTarget;\n        if (targetCard === pairFirst || isBoardBlocked) {\n            return;\n        }\n        targetCard === null || targetCard === void 0 ? void 0 : targetCard.classList.add('flip');\n        const setMatched = () => {\n            pairFirst === null || pairFirst === void 0 ? void 0 : pairFirst.removeEventListener('click', flipCard);\n            pairSecond === null || pairSecond === void 0 ? void 0 : pairSecond.removeEventListener('click', flipCard);\n            togglePairClass('matched', 'add');\n            resetBoard();\n            compareCount += 1;\n            if ([...cards].every(card => card.classList.contains('matched'))) {\n                callback();\n            }\n        };\n        const checkForMatch = () => {\n            if ((pairFirst === null || pairFirst === void 0 ? void 0 : pairFirst.dataset.pair_num) === (pairSecond === null || pairSecond === void 0 ? void 0 : pairSecond.dataset.pair_num)) {\n                setMatched();\n            }\n            else {\n                setMissmatched();\n            }\n        };\n        if (!isFlipped) {\n            isFlipped = true;\n            pairFirst = targetCard;\n            return;\n        }\n        pairSecond = targetCard;\n        checkForMatch();\n    };\n    [...cards].forEach(item => item.addEventListener('click', flipCard));\n};\nexports.startGameBehavior = startGameBehavior;\nconst getCompareCount = () => compareCount;\nexports.getCompareCount = getCompareCount;\nconst getMistakenCompareCount = () => mistakenCompareCount;\nexports.getMistakenCompareCount = getMistakenCompareCount;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/game/game-behavior.ts?");

/***/ }),

/***/ "./src/pages/game/index.ts":
/*!*********************************!*\
  !*** ./src/pages/game/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.gamePageBehavior = exports.stopGame = void 0;\nconst game_behavior_1 = __webpack_require__(/*! ./game-behavior */ \"./src/pages/game/game-behavior.ts\");\nconst main_timer_1 = __webpack_require__(/*! ./timers/main-timer */ \"./src/pages/game/timers/main-timer.ts\");\nconst pre_game_timer_1 = __webpack_require__(/*! ./timers/pre-game-timer */ \"./src/pages/game/timers/pre-game-timer.ts\");\nconst score_count_1 = __webpack_require__(/*! ./score-count */ \"./src/pages/game/score-count.ts\");\nconst render_win_popup_1 = __webpack_require__(/*! ./win-popup/render-win-popup */ \"./src/pages/game/win-popup/render-win-popup.ts\");\nconst indexedDB_1 = __webpack_require__(/*! ../../common/indexedDB */ \"./src/common/indexedDB.ts\");\nconst constants_1 = __webpack_require__(/*! ../../header/constants */ \"./src/header/constants.ts\");\nconst shared_1 = __webpack_require__(/*! ../../common/shared */ \"./src/common/shared.ts\");\nconst GAME_BTN_ID = 'gameTumblerBtn';\nlet isGameStarted = false;\nconst changeGameBtn = () => {\n    const btn = document.getElementById(GAME_BTN_ID);\n    const [label, href] = isGameStarted\n        ? ['Stop Game', constants_1.DEFAULT_PAGE]\n        : ['Start Game', constants_1.PAGES_ID.GAME];\n    btn.innerText = label;\n    btn.href = `#${href}`;\n};\nconst stopGame = () => {\n    if (isGameStarted) {\n        main_timer_1.stopTimer();\n        pre_game_timer_1.stopPreGameTimer();\n        isGameStarted = false;\n    }\n    changeGameBtn();\n};\nexports.stopGame = stopGame;\nconst unflipCards = () => {\n    const cards = document.getElementsByClassName('card');\n    [...cards].map(item => item.classList.remove('flip'));\n};\nconst onEndGame = () => {\n    main_timer_1.stopTimer();\n    const score = score_count_1.countScore();\n    const gameDuration = main_timer_1.getGameDuration();\n    const body = document.querySelector('body');\n    if (body) {\n        shared_1.insertHtml(body, render_win_popup_1.winPopup(gameDuration, score));\n    }\n    indexedDB_1.addScores(score, () => {\n        render_win_popup_1.startWinPopup();\n    });\n};\nconst startGame = () => {\n    unflipCards();\n    main_timer_1.startMainTimer();\n    game_behavior_1.startGameBehavior(onEndGame);\n};\nconst gamePageBehavior = () => {\n    isGameStarted = true;\n    pre_game_timer_1.startPreGameTimer(startGame);\n    changeGameBtn();\n};\nexports.gamePageBehavior = gamePageBehavior;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/game/index.ts?");

/***/ }),

/***/ "./src/pages/game/render-board/render-board.ts":
/*!*****************************************************!*\
  !*** ./src/pages/game/render-board/render-board.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initGameBoard = void 0;\nconst settings_1 = __webpack_require__(/*! ../../settings */ \"./src/pages/settings/index.ts\");\nconst render_card_1 = __webpack_require__(/*! ./render-card */ \"./src/pages/game/render-board/render-card.ts\");\nconst set_board_render_1 = __webpack_require__(/*! ./set-board-render */ \"./src/pages/game/render-board/set-board-render.ts\");\nconst render_timers_1 = __webpack_require__(/*! ./render-timers */ \"./src/pages/game/render-board/render-timers.ts\");\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./src/pages/game/constants.ts\");\nconst index_1 = __webpack_require__(/*! ../index */ \"./src/pages/game/index.ts\");\nconst initGameBoard = () => {\n    const boardItem = () => (`\n    <div id=\"gameBoard\" class=\"board\"></div>\n  `);\n    const mainHtml = document.getElementById('main');\n    if (mainHtml) {\n        mainHtml.innerHTML = boardItem();\n    }\n    const board = document.getElementById('gameBoard');\n    const { difficulty, cardsPack } = settings_1.getSettings();\n    board === null || board === void 0 ? void 0 : board.append(render_timers_1.renderPreGameTimer());\n    board === null || board === void 0 ? void 0 : board.append(render_timers_1.renderMainTimer());\n    const boardInner = document.createElement('div');\n    boardInner.classList.add('board-inner');\n    board === null || board === void 0 ? void 0 : board.append(boardInner);\n    const cardsNum = set_board_render_1.applyDifficulty(difficulty) || constants_1.DEFAULT_CARDS_NUM;\n    const randomNums = set_board_render_1.randomNumsShuffle(cardsNum);\n    for (let i = 0; i < cardsNum; i++) {\n        boardInner === null || boardInner === void 0 ? void 0 : boardInner.append(render_card_1.renderCard(cardsNum, cardsPack, randomNums[i]));\n    }\n    index_1.gamePageBehavior();\n};\nexports.initGameBoard = initGameBoard;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/game/render-board/render-board.ts?");

/***/ }),

/***/ "./src/pages/game/render-board/render-card.ts":
/*!****************************************************!*\
  !*** ./src/pages/game/render-board/render-card.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderCard = void 0;\nconst renderCard = (cardsNum, picturePack, pairNumber) => {\n    const card = document.createElement('div');\n    card.classList.add('card', 'flip');\n    card.setAttribute('data-pair_num', String(pairNumber));\n    card.innerHTML = (`\n    <div class=\"card-inner\">\n      <img class=\"front-face\" src=assets/${picturePack}/${pairNumber}.png alt=\"Card-fontface\">\n      <img class=\"back-face\" src=\"assets/card-backside.png\" alt=\"Card-backface\">\n    </div>\n  `);\n    return card;\n};\nexports.renderCard = renderCard;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/game/render-board/render-card.ts?");

/***/ }),

/***/ "./src/pages/game/render-board/render-timers.ts":
/*!******************************************************!*\
  !*** ./src/pages/game/render-board/render-timers.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderMainTimer = exports.renderPreGameTimer = void 0;\nconst renderPreGameTimer = () => {\n    const preGameTimer = document.createElement('div');\n    preGameTimer.id = 'preGameTimer';\n    preGameTimer.innerHTML = (`\n    <div>Remember all cards before the time runs out.</div>\n    <div id=\"preGameTimerClock\"></div>\n  `);\n    return preGameTimer;\n};\nexports.renderPreGameTimer = renderPreGameTimer;\nconst renderMainTimer = () => {\n    const timer = document.createElement('div');\n    timer.id = 'gameTimer';\n    timer.classList.add('hidden');\n    timer.innerHTML = (`\n    <span id=\"hours\">00</span><span>:</span>\n    <span id=\"minutes\">00</span><span>:</span>\n    <span id=\"seconds\">00</span>\n  `);\n    return timer;\n};\nexports.renderMainTimer = renderMainTimer;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/game/render-board/render-timers.ts?");

/***/ }),

/***/ "./src/pages/game/render-board/set-board-render.ts":
/*!*********************************************************!*\
  !*** ./src/pages/game/render-board/set-board-render.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.randomNumsShuffle = exports.applyDifficulty = void 0;\nconst common_functions_1 = __webpack_require__(/*! ../common-functions */ \"./src/pages/game/common-functions.ts\");\nconst applyDifficulty = (difficulty) => {\n    var _a;\n    (_a = document.getElementById('gameBoard')) === null || _a === void 0 ? void 0 : _a.classList.add(difficulty);\n    return common_functions_1.convertDifficultyToNum(difficulty);\n};\nexports.applyDifficulty = applyDifficulty;\nconst randomNumsShuffle = (cardsNum) => {\n    const half = ([...Array(cardsNum / 2 + 1).keys()].slice(1));\n    return ([...half, ...half]).sort(() => Math.random() - 0.5);\n};\nexports.randomNumsShuffle = randomNumsShuffle;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/game/render-board/set-board-render.ts?");

/***/ }),

/***/ "./src/pages/game/score-count.ts":
/*!***************************************!*\
  !*** ./src/pages/game/score-count.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.countScore = void 0;\nconst game_behavior_1 = __webpack_require__(/*! ./game-behavior */ \"./src/pages/game/game-behavior.ts\");\nconst main_timer_1 = __webpack_require__(/*! ./timers/main-timer */ \"./src/pages/game/timers/main-timer.ts\");\nconst countScore = () => {\n    const mistakenCompareCount = game_behavior_1.getMistakenCompareCount();\n    const compareCount = game_behavior_1.getCompareCount();\n    const gameDuration = main_timer_1.getGameDurationSec();\n    const score = (compareCount - mistakenCompareCount) * 100 - gameDuration * 10;\n    return score > 0 ? score : 0;\n};\nexports.countScore = countScore;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/game/score-count.ts?");

/***/ }),

/***/ "./src/pages/game/timers/main-timer.ts":
/*!*********************************************!*\
  !*** ./src/pages/game/timers/main-timer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getGameDuration = exports.getGameDurationSec = exports.stopTimer = exports.startMainTimer = void 0;\nlet mainTimer;\nlet seconds = 0;\nlet minutes = 0;\nlet hours = 0;\nconst startMainTimer = () => {\n    var _a;\n    (_a = document.getElementById('gameTimer')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');\n    const hour = document.getElementById('hours');\n    const mins = document.getElementById('minutes');\n    const secs = document.getElementById('seconds');\n    hours = 0;\n    minutes = 0;\n    seconds = 0;\n    mainTimer = setInterval(() => {\n        seconds = +seconds + 1;\n        if (seconds === 60) {\n            seconds = 0;\n            minutes = +minutes + 1;\n            if (minutes === 60) {\n                minutes = 0;\n                hours = +hours + 1;\n            }\n        }\n        if (secs) {\n            secs.innerText = `${seconds < 10 ? '0' : ''}${seconds}`;\n        }\n        if (mins) {\n            mins.innerText = `${minutes < 10 ? '0' : ''}${minutes}`;\n        }\n        if (hour) {\n            hour.innerText = `${hours < 10 ? '0' : ''}${hours}`;\n        }\n    }, 1000);\n};\nexports.startMainTimer = startMainTimer;\nconst stopTimer = () => {\n    clearTimeout(mainTimer);\n};\nexports.stopTimer = stopTimer;\nconst getGameDurationSec = () => hours * 3600 + minutes * 60 + seconds;\nexports.getGameDurationSec = getGameDurationSec;\nconst getGameDuration = () => (`\n  ${hours ? `${hours} hours` : ''} ${minutes ? `${minutes} minutes` : ''} ${seconds} seconds\n`);\nexports.getGameDuration = getGameDuration;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/game/timers/main-timer.ts?");

/***/ }),

/***/ "./src/pages/game/timers/pre-game-timer.ts":
/*!*************************************************!*\
  !*** ./src/pages/game/timers/pre-game-timer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startPreGameTimer = exports.stopPreGameTimer = void 0;\nlet timer;\nconst stopPreGameTimer = () => {\n    clearTimeout(timer);\n};\nexports.stopPreGameTimer = stopPreGameTimer;\nconst startPreGameTimer = (callback) => {\n    let remainingTime = 30;\n    const preGameTimer = document.getElementById('preGameTimer');\n    const preGameTimerClock = document.getElementById('preGameTimerClock');\n    timer = setInterval(() => {\n        if (remainingTime === -1) {\n            exports.stopPreGameTimer();\n            preGameTimer === null || preGameTimer === void 0 ? void 0 : preGameTimer.classList.add('hidden');\n            callback();\n        }\n        else {\n            if (preGameTimerClock) {\n                preGameTimerClock.innerHTML = `${remainingTime} seconds`;\n            }\n            remainingTime--;\n        }\n    }, 1000);\n};\nexports.startPreGameTimer = startPreGameTimer;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/game/timers/pre-game-timer.ts?");

/***/ }),

/***/ "./src/pages/game/win-popup/render-win-popup.ts":
/*!******************************************************!*\
  !*** ./src/pages/game/win-popup/render-win-popup.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startWinPopup = exports.winPopup = void 0;\nconst popup_1 = __webpack_require__(/*! ../../../popup/popup */ \"./src/popup/popup.ts\");\nconst constants_1 = __webpack_require__(/*! ../../../header/constants */ \"./src/header/constants.ts\");\nconst winPopup = (gameDuration, score) => (`\n  <div id='winPopup' class=\"popup win-popup active\">\n    <div class=\"popup-wrap\">\n      <button class=\"btn-close\">X</button>\n      <div class=\"popup-title\">\n        <h2>Congratulations!</h2>\n      </div>\n      <div class=\"popup-inner\">\n        <div class=\"win-info\">\n          You successfully found all matches on <span id=\"gameDuration\">${gameDuration}</span>. \n          Your score is <b><span id=\"gameScore\">${score}</span></b>.\n        </div> \n        <a href=#${constants_1.PAGES_ID.BEST_SCORE} id=\"winBtn\" class=\"btn\">Ok</a>\n      </div>\n    </div>\n  </div>\n`);\nexports.winPopup = winPopup;\nconst startWinPopup = () => {\n    var _a;\n    (_a = document.getElementById('winBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', popup_1.initializeClosing);\n};\nexports.startWinPopup = startWinPopup;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/game/win-popup/render-win-popup.ts?");

/***/ }),

/***/ "./src/pages/register/addUser.ts":
/*!***************************************!*\
  !*** ./src/pages/register/addUser.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.saveFormData = void 0;\nconst indexedDB_1 = __webpack_require__(/*! ../../common/indexedDB */ \"./src/common/indexedDB.ts\");\nconst photo_behavior_1 = __webpack_require__(/*! ./photo-behavior */ \"./src/pages/register/photo-behavior.ts\");\nconst saveFormData = () => {\n    const personData = ['firstName', 'lastName', 'email'].reduce((acc, fieldName) => (Object.assign(Object.assign({}, acc), { [fieldName]: document.getElementById(fieldName).value })), { userPhoto: photo_behavior_1.getCurrentPhoto() });\n    indexedDB_1.addUser(personData);\n};\nexports.saveFormData = saveFormData;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/register/addUser.ts?");

/***/ }),

/***/ "./src/pages/register/constants.ts":
/*!*****************************************!*\
  !*** ./src/pages/register/constants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FIELDS_IDS = exports.FORM_INPUTS = void 0;\nexports.FORM_INPUTS = [\n    {\n        fieldName: 'First name',\n        id: 'firstName',\n        type: 'text',\n        placeholder: 'Lena',\n        pattern: `pattern=\"^[\\\\p{L}0-9\\\\\\\\-]*[\\\\p{L}]{1}[\\\\p{L}0-9\\\\\\\\-]*$\"`,\n        required: 'required',\n    },\n    {\n        fieldName: 'Last name',\n        id: 'lastName',\n        type: 'text',\n        placeholder: 'Barashkova',\n        pattern: `pattern=\"^[\\\\p{L}0-9\\\\\\\\-]*[\\\\p{L}]{1}[\\\\p{L}0-9\\\\\\\\-]*$\"`,\n        required: 'required',\n    },\n    {\n        fieldName: 'Email',\n        id: 'email',\n        type: 'email',\n        placeholder: 'lenabarashkova@mail.ru',\n        pattern: '',\n        required: 'required',\n    }\n];\nexports.FIELDS_IDS = exports.FORM_INPUTS.map(({ id }) => id);\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/register/constants.ts?");

/***/ }),

/***/ "./src/pages/register/index.ts":
/*!*************************************!*\
  !*** ./src/pages/register/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startRegisterForm = exports.startRegisterFormBehavior = void 0;\nconst popup_1 = __webpack_require__(/*! ../../popup/popup */ \"./src/popup/popup.ts\");\nconst validation_1 = __webpack_require__(/*! ./validation */ \"./src/pages/register/validation.ts\");\nconst photo_behavior_1 = __webpack_require__(/*! ./photo-behavior */ \"./src/pages/register/photo-behavior.ts\");\nconst startRegisterFormBehavior = () => {\n    var _a;\n    const registerBtn = document.getElementById('registerBtn');\n    registerBtn === null || registerBtn === void 0 ? void 0 : registerBtn.addEventListener('click', popup_1.openPopupHandler);\n    const registerForm = document.getElementById('registerForm');\n    (_a = document.getElementById('cancel')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {\n        var _a;\n        (_a = registerForm) === null || _a === void 0 ? void 0 : _a.reset();\n    });\n    photo_behavior_1.handlePhotoInput();\n};\nexports.startRegisterFormBehavior = startRegisterFormBehavior;\nconst startRegisterForm = () => {\n    exports.startRegisterFormBehavior();\n    validation_1.startValidation();\n};\nexports.startRegisterForm = startRegisterForm;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/register/index.ts?");

/***/ }),

/***/ "./src/pages/register/photo-behavior.ts":
/*!**********************************************!*\
  !*** ./src/pages/register/photo-behavior.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getCurrentPhoto = exports.handlePhotoInput = void 0;\nlet currentPhoto = '';\nconst handlePhotoInput = () => {\n    const photoInput = document.getElementById('userPhoto');\n    photoInput === null || photoInput === void 0 ? void 0 : photoInput.addEventListener('change', (event) => {\n        var _a;\n        const target = event.currentTarget;\n        const targetFiles = ((_a = target) === null || _a === void 0 ? void 0 : _a.files) || [];\n        const file = targetFiles[0];\n        const reader = new FileReader();\n        reader.readAsDataURL(file);\n        const image = document.getElementById('userPhotoImg');\n        reader.onload = () => {\n            currentPhoto = reader.result;\n            image.src = currentPhoto;\n        };\n    });\n};\nexports.handlePhotoInput = handlePhotoInput;\nconst getCurrentPhoto = () => currentPhoto;\nexports.getCurrentPhoto = getCurrentPhoto;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/register/photo-behavior.ts?");

/***/ }),

/***/ "./src/pages/register/render-register-popup.ts":
/*!*****************************************************!*\
  !*** ./src/pages/register/render-register-popup.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderRegisterPopup = exports.renderRegisterInputs = void 0;\nconst render_popup_1 = __webpack_require__(/*! ../../popup/render-popup */ \"./src/popup/render-popup.ts\");\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/pages/register/constants.ts\");\nconst renderRegisterInputs = () => constants_1.FORM_INPUTS\n    .map(({ fieldName, id, type, placeholder, pattern, required }) => (`\n      <label>\n        <span>${fieldName}</span>\n        <input id=${id} class=\"register-input\" type=${type} name=${id}\n        placeholder=${placeholder} ${pattern} ${required} maxlength=\"30\">\n        <span class=\"error-text\"></span>\n      </label>\n      `))\n    .join('');\nexports.renderRegisterInputs = renderRegisterInputs;\nconst content = (`\n  <form id=\"registerForm\" class=\"register-form\" action=\"#\">\n    <div class=\"form-inner\">\n      ${exports.renderRegisterInputs()}\n      <label class=\"add-user-pic\">\n        <span>Add user picture</span>\n        <span class=\"user-picture\">\n          <img id=\"userPhotoImg\" src=\"./assets/user-default-pic.png\" alt=\"User-pic\">\n        </span>\n        <input id=\"userPhoto\" type=\"file\" name=\"userPhoto\">\n      </label>\n    </div>\n    <div class=\"buttons-wrap\">\n      <button id=\"registerSubmit\" class=\"btn btn-dark\" type=\"submit\">Add user</button>\n      <div id=\"cancel\" class=\"btn btn-dark\">Cancel</div>\n    </div>\n  </form>\n`);\nconst registerContent = {\n    title: 'Register new player',\n    id: 'registerPopup',\n    className: 'register-popup',\n    content,\n};\nexports.renderRegisterPopup = render_popup_1.renderPopup(registerContent);\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/register/render-register-popup.ts?");

/***/ }),

/***/ "./src/pages/register/validation.ts":
/*!******************************************!*\
  !*** ./src/pages/register/validation.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startValidation = void 0;\nconst addUser_1 = __webpack_require__(/*! ./addUser */ \"./src/pages/register/addUser.ts\");\nconst popup_1 = __webpack_require__(/*! ../../popup/popup */ \"./src/popup/popup.ts\");\nconst switch_to_registered_mode_1 = __webpack_require__(/*! ../../header/render-header/switch-to-registered-mode */ \"./src/header/render-header/switch-to-registered-mode.ts\");\nconst valid = (field) => {\n    var _a;\n    field.classList.remove('invalid');\n    field.classList.add('valid');\n    const errorItem = (_a = field.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.error-text');\n    errorItem.innerText = '';\n};\nconst invalid = (field, errorText) => {\n    var _a;\n    field.classList.remove('valid');\n    field.classList.add('invalid');\n    const errorTextElement = (_a = field.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.error-text');\n    errorTextElement.innerText = errorText;\n};\nconst inputValidation = (currentField) => {\n    const wrongPattern = currentField.validity.patternMismatch;\n    const wrongType = currentField.validity.typeMismatch;\n    if (wrongPattern || wrongType) {\n        invalid(currentField, 'Invalid value. Please correct your data.');\n        return false;\n    }\n    if (!currentField.value) {\n        invalid(currentField, 'Empty value. Please fill in the field.');\n        return false;\n    }\n    valid(currentField);\n    return true;\n};\nconst handleInputChange = (event) => {\n    inputValidation(event.target);\n};\nconst handleSubmit = (event) => {\n    event.preventDefault();\n    const registerFields = document.getElementsByClassName('register-input');\n    const isValid = [...registerFields].map(item => inputValidation(item)).every((isItemValid) => isItemValid);\n    if (isValid) {\n        addUser_1.saveFormData();\n        popup_1.initializeClosing();\n        document.removeEventListener('click', popup_1.closePopupHandler);\n        switch_to_registered_mode_1.switchToRegisteredMode();\n    }\n};\nconst startValidation = () => {\n    const registerFields = document.getElementsByClassName('register-input');\n    [...registerFields].forEach(item => item.addEventListener('change', handleInputChange));\n    const registerSubmit = document.getElementById('registerSubmit');\n    registerSubmit === null || registerSubmit === void 0 ? void 0 : registerSubmit.addEventListener('click', handleSubmit);\n};\nexports.startValidation = startValidation;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/register/validation.ts?");

/***/ }),

/***/ "./src/pages/settings/constants.ts":
/*!*****************************************!*\
  !*** ./src/pages/settings/constants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SETTINGS_FIELDS = void 0;\nexports.SETTINGS_FIELDS = [\n    {\n        id: 'gameCards',\n        fieldName: 'Game cards',\n        placeholder: 'Select game cards type',\n        options: ['fruits-pack', 'camping-pack', 'summer-pack',],\n    },\n    {\n        id: 'difficulty',\n        fieldName: 'Difficulty',\n        placeholder: 'Select game type',\n        options: ['easy', 'medium', 'hard',],\n    },\n];\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/settings/constants.ts?");

/***/ }),

/***/ "./src/pages/settings/index.ts":
/*!*************************************!*\
  !*** ./src/pages/settings/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.settingsBehavior = exports.getSettings = void 0;\nconst constants_1 = __webpack_require__(/*! ../game/constants */ \"./src/pages/game/constants.ts\");\nlet cardsPack = constants_1.DEFAULT_CARDS_PACK;\nlet difficulty = constants_1.DEFAULT_DIFFICULTY;\nconst handleCardsPack = (event) => {\n    cardsPack = event.currentTarget.value;\n};\nconst handleDifficulty = (event) => {\n    difficulty = event.currentTarget.value;\n};\nconst getSettings = () => ({\n    cardsPack,\n    difficulty,\n});\nexports.getSettings = getSettings;\nconst onSettingsChange = () => {\n    const cardsPackSelect = document.getElementById('gameCards');\n    cardsPackSelect === null || cardsPackSelect === void 0 ? void 0 : cardsPackSelect.addEventListener('change', handleCardsPack);\n    const difficultySelect = document.getElementById('difficulty');\n    difficultySelect === null || difficultySelect === void 0 ? void 0 : difficultySelect.addEventListener('change', handleDifficulty);\n};\nconst settingsBehavior = () => {\n    onSettingsChange();\n};\nexports.settingsBehavior = settingsBehavior;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/settings/index.ts?");

/***/ }),

/***/ "./src/pages/settings/render-settings.ts":
/*!***********************************************!*\
  !*** ./src/pages/settings/render-settings.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initSettingsPage = void 0;\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/pages/settings/constants.ts\");\nconst index_1 = __webpack_require__(/*! ./index */ \"./src/pages/settings/index.ts\");\nconst settingsPageHtml = () => (`\n  <div id=\"settingsPage\" class=\"settings-page\">\n    <h2>Settings</h2>\n    <form id=\"settingsForm\" action=\"#\"></form>\n  </div>\n`);\nconst generateSettingsFields = () => constants_1.SETTINGS_FIELDS\n    .map(({ fieldName, id, placeholder, options }) => (`\n      <label class=\"select-label\"><span>${fieldName}</span>\n        <select class=\"setting-select\" id=\"${id}\" name=\"${id}\">\n          <option hidden=\"\" disabled=\"\" selected=\"\" value=\"\">${placeholder}</option>\n          ${options.map(item => `<option>${item}</option>`)};\n        </select>\n      </label>\n      `))\n    .join('');\nconst initSettingsPage = () => {\n    const mainHtml = document.getElementById('main');\n    if (mainHtml) {\n        mainHtml.innerHTML = settingsPageHtml();\n    }\n    const settingsForm = document.getElementById('settingsForm');\n    if (settingsForm) {\n        settingsForm.innerHTML = generateSettingsFields();\n    }\n    index_1.settingsBehavior();\n};\nexports.initSettingsPage = initSettingsPage;\n\n\n//# sourceURL=webpack://match-match-game/./src/pages/settings/render-settings.ts?");

/***/ }),

/***/ "./src/popup/popup.ts":
/*!****************************!*\
  !*** ./src/popup/popup.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.openPopupHandler = exports.closePopupHandler = exports.initializeClosing = void 0;\nconst initializeClosing = () => {\n    var _a, _b;\n    (_a = document.querySelector('.popup.active')) === null || _a === void 0 ? void 0 : _a.classList.remove('active');\n    (_b = document.getElementById('winPopup')) === null || _b === void 0 ? void 0 : _b.remove();\n};\nexports.initializeClosing = initializeClosing;\nconst closePopupHandler = (event) => {\n    const eventTarget = event.target;\n    const closeBtn = document.querySelector('.btn-close');\n    const targetsPopup = eventTarget === null || eventTarget === void 0 ? void 0 : eventTarget.closest('.popup-wrap');\n    if (eventTarget === closeBtn || targetsPopup === null) {\n        exports.initializeClosing();\n        document.removeEventListener('click', exports.closePopupHandler);\n    }\n};\nexports.closePopupHandler = closePopupHandler;\nconst openPopupHandler = (event) => {\n    const eventTarget = event.target;\n    const targetPopup = document.getElementById(`${eventTarget.dataset.target}`);\n    targetPopup === null || targetPopup === void 0 ? void 0 : targetPopup.classList.add('active');\n    setTimeout(() => document.addEventListener('click', exports.closePopupHandler), 0);\n};\nexports.openPopupHandler = openPopupHandler;\n\n\n//# sourceURL=webpack://match-match-game/./src/popup/popup.ts?");

/***/ }),

/***/ "./src/popup/render-popup.ts":
/*!***********************************!*\
  !*** ./src/popup/render-popup.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderPopup = void 0;\nconst renderPopup = ({ title, id, className, content }) => (`\n  <div id=${id} class=\"popup ${className}\">\n    <div class=\"popup-wrap\">\n      <button class=\"btn-close\">X</button>\n      <div class=\"popup-title\">\n        <h2>${title}</h2>\n      </div>\n      <div class=\"popup-inner\">\n        ${content}\n      </div>\n    </div>\n  </div>\n`);\nexports.renderPopup = renderPopup;\n\n\n//# sourceURL=webpack://match-match-game/./src/popup/render-popup.ts?");

/***/ }),

/***/ "./src/render.ts":
/*!***********************!*\
  !*** ./src/render.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.render = void 0;\nconst render_header_1 = __webpack_require__(/*! ./header/render-header/render-header */ \"./src/header/render-header/render-header.ts\");\nconst render_register_popup_1 = __webpack_require__(/*! ./pages/register/render-register-popup */ \"./src/pages/register/render-register-popup.ts\");\nconst shared_1 = __webpack_require__(/*! ./common/shared */ \"./src/common/shared.ts\");\nconst render = () => {\n    const body = document.querySelector('body');\n    render_header_1.renderHeader();\n    shared_1.createMain();\n    if (body) {\n        shared_1.insertHtml(body, render_register_popup_1.renderRegisterPopup);\n    }\n};\nexports.render = render;\n\n\n//# sourceURL=webpack://match-match-game/./src/render.ts?");

/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startRouter = void 0;\nconst game_1 = __webpack_require__(/*! ./pages/game */ \"./src/pages/game/index.ts\");\nconst constants_1 = __webpack_require__(/*! ./header/constants */ \"./src/header/constants.ts\");\nconst pages_config_1 = __webpack_require__(/*! ./common/pages-config */ \"./src/common/pages-config.ts\");\nconst setActiveMenuItem = (itemId) => {\n    var _a;\n    const MENU_ITEMS = document.getElementsByClassName('menu-item');\n    [...MENU_ITEMS].forEach(item => item.classList.remove('active'));\n    (_a = document.getElementById(itemId)) === null || _a === void 0 ? void 0 : _a.classList.add('active');\n};\nconst onHashChange = () => {\n    let route = window.location.hash.slice(1);\n    if (!pages_config_1.PAGES_CONFIG[route]) {\n        window.location.hash = constants_1.DEFAULT_PAGE;\n        route = constants_1.DEFAULT_PAGE;\n    }\n    game_1.stopGame();\n    setActiveMenuItem(route);\n    pages_config_1.PAGES_CONFIG[route]();\n};\nconst startRouter = () => {\n    window.addEventListener(\"hashchange\", onHashChange);\n    onHashChange();\n};\nexports.startRouter = startRouter;\n\n\n//# sourceURL=webpack://match-match-game/./src/router.ts?");

/***/ }),

/***/ "./src/assets/about-game-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/about-game-icon.svg ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = \"<svg width=\\\"20\\\" height=\\\"20\\\" viewBox=\\\"0 0 20 20\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n    <circle cx=\\\"10\\\" cy=\\\"10\\\" r=\\\"10\\\" fill=\\\"white\\\"/>\\n    <path d=\\\"M8.88379 12.3965C8.89551 11.6992 8.97461 11.1484 9.12109 10.7441C9.26758 10.3398 9.56641 9.8916 10.0176 9.39941L11.1689 8.21289C11.6611 7.65625 11.9072 7.05859 11.9072 6.41992C11.9072 5.80469 11.7461 5.32422 11.4238 4.97852C11.1016 4.62695 10.6328 4.45117 10.0176 4.45117C9.41992 4.45117 8.93945 4.60938 8.57617 4.92578C8.21289 5.24219 8.03125 5.66699 8.03125 6.2002H6.40527C6.41699 5.25098 6.75391 4.48633 7.41602 3.90625C8.08398 3.32031 8.95117 3.02734 10.0176 3.02734C11.125 3.02734 11.9863 3.32617 12.6016 3.92383C13.2227 4.51562 13.5332 5.33008 13.5332 6.36719C13.5332 7.39258 13.0586 8.40332 12.1094 9.39941L11.1514 10.3486C10.7236 10.8232 10.5098 11.5059 10.5098 12.3965H8.88379ZM8.81348 15.1826C8.81348 14.9189 8.89258 14.6992 9.05078 14.5234C9.21484 14.3418 9.45508 14.251 9.77148 14.251C10.0879 14.251 10.3281 14.3418 10.4922 14.5234C10.6562 14.6992 10.7383 14.9189 10.7383 15.1826C10.7383 15.4463 10.6562 15.666 10.4922 15.8418C10.3281 16.0117 10.0879 16.0967 9.77148 16.0967C9.45508 16.0967 9.21484 16.0117 9.05078 15.8418C8.89258 15.666 8.81348 15.4463 8.81348 15.1826Z\\\"\\n          fill=\\\"#4f4f4f\\\"/>\\n</svg>\";\n\n//# sourceURL=webpack://match-match-game/./src/assets/about-game-icon.svg?");

/***/ }),

/***/ "./src/assets/best-score-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/best-score-icon.svg ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = \"<svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n    <path d=\\\"M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16.23 18L12 15.45L7.77 18L8.89 13.19L5.16 9.96L10.08 9.54L12 5L13.92 9.53L18.84 9.95L15.11 13.18L16.23 18Z\\\"\\n          fill=\\\"#fff\\\"/>\\n</svg>\";\n\n//# sourceURL=webpack://match-match-game/./src/assets/best-score-icon.svg?");

/***/ }),

/***/ "./src/assets/settings-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/settings-icon.svg ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = \"<svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n    <path d=\\\"M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16.23 18L12 15.45L7.77 18L8.89 13.19L5.16 9.96L10.08 9.54L12 5L13.92 9.53L18.84 9.95L15.11 13.18L16.23 18Z\\\"\\n          fill=\\\"white\\\" fill-opacity=\\\"0.7\\\"/>\\n    <circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"10\\\" fill=\\\"white\\\"/>\\n    <path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\"\\n          d=\\\"M16.7487 12.624C16.7727 12.424 16.7887 12.216 16.7887 12C16.7887 11.784 16.7727 11.576 16.7407 11.376L18.0927 10.32C18.2127 10.224 18.2447 10.048 18.1727 9.91201L16.8927 7.69601C16.8127 7.55201 16.6447 7.50401 16.5007 7.55201L14.9087 8.19201C14.5727 7.93601 14.2207 7.72801 13.8287 7.56801L13.5887 5.87201C13.5647 5.71201 13.4287 5.60001 13.2687 5.60001H10.7087C10.5487 5.60001 10.4207 5.71201 10.3967 5.87201L10.1567 7.56801C9.76474 7.72801 9.40474 7.94401 9.07674 8.19201L7.48474 7.55201C7.34074 7.49601 7.17274 7.55201 7.09274 7.69601L5.81274 9.91201C5.73274 10.056 5.76474 10.224 5.89274 10.32L7.24474 11.376C7.21274 11.576 7.18874 11.792 7.18874 12C7.18874 12.208 7.20474 12.424 7.23674 12.624L5.88474 13.68C5.76474 13.776 5.73274 13.952 5.80474 14.088L7.08474 16.304C7.16474 16.448 7.33274 16.496 7.47674 16.448L9.06874 15.808C9.40474 16.064 9.75674 16.272 10.1487 16.432L10.3887 18.128C10.4207 18.288 10.5487 18.4 10.7087 18.4H13.2687C13.4287 18.4 13.5647 18.288 13.5807 18.128L13.8207 16.432C14.2127 16.272 14.5727 16.056 14.9007 15.808L16.4927 16.448C16.6367 16.504 16.8047 16.448 16.8847 16.304L18.1647 14.088C18.2447 13.944 18.2127 13.776 18.0847 13.68L16.7487 12.624ZM11.9887 14.4C10.6687 14.4 9.58874 13.32 9.58874 12C9.58874 10.68 10.6687 9.60001 11.9887 9.60001C13.3087 9.60001 14.3887 10.68 14.3887 12C14.3887 13.32 13.3087 14.4 11.9887 14.4Z\\\"\\n          fill=\\\"#4f4f4f\\\"/>\\n</svg>\";\n\n//# sourceURL=webpack://match-match-game/./src/assets/settings-icon.svg?");

/***/ }),

/***/ "./src/assets/user-default-pic.png":
/*!*****************************************!*\
  !*** ./src/assets/user-default-pic.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/283961a3dbfd3dd58825.png\";\n\n//# sourceURL=webpack://match-match-game/./src/assets/user-default-pic.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;