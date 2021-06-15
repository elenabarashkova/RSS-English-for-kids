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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst store_1 = __importDefault(__webpack_require__(/*! ./redux/core/store */ \"./src/redux/core/store.ts\"));\nconst modules_1 = __webpack_require__(/*! ./modules */ \"./src/modules/index.ts\");\nconst header_1 = __webpack_require__(/*! ./modules/header */ \"./src/modules/header/index.ts\");\nconst garage_1 = __webpack_require__(/*! ./modules/garage */ \"./src/modules/garage/index.ts\");\nconst shared_1 = __webpack_require__(/*! ./shared */ \"./src/shared/index.ts\");\nconst constants_1 = __webpack_require__(/*! ./services/constants */ \"./src/services/constants.ts\");\nconst service_winners_1 = __webpack_require__(/*! ./services/service-winners */ \"./src/services/service-winners.ts\");\nconst winners_1 = __webpack_require__(/*! ./modules/winners */ \"./src/modules/winners/index.ts\");\nconst constants_2 = __webpack_require__(/*! ./modules/constants */ \"./src/modules/constants.ts\");\nwindow.addEventListener('load', () => {\n    let state = store_1.default.getState();\n    modules_1.initCommonPageTemplate();\n    header_1.startRouting(store_1.default);\n    store_1.default.subscribe((prevState) => {\n        state = store_1.default.getState();\n        if (prevState.carsList !== state.carsList) {\n            garage_1.onCarsListUpdate(state.carsList, state.totalCars);\n        }\n        if (state.currentWinner !== null && prevState.currentWinner !== state.currentWinner) {\n            service_winners_1.createWinner(state.currentWinner);\n        }\n        if (prevState.winnersList !== state.winnersList) {\n            winners_1.onWinnersListUpdate(state.winnersList, state.totalWinners);\n        }\n        const currentGaragePage = document.querySelector('#garage.active');\n        if (currentGaragePage) {\n            shared_1.disablePagination(Math.ceil(state.totalCars / constants_1.CARS_LIMIT), constants_2.GARAGE_PAGINATION_CONFIG);\n        }\n        else {\n            shared_1.disablePagination(Math.ceil(state.totalWinners / constants_1.WINNERS_LIMIT), constants_2.WINNERS_PAGINATION_CONFIG);\n        }\n    });\n});\n\n\n//# sourceURL=webpack://match-match-game/./src/index.ts?");

/***/ }),

/***/ "./src/modules/constants.ts":
/*!**********************************!*\
  !*** ./src/modules/constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.WINNERS_PAGINATION_CONFIG = exports.GARAGE_PAGINATION_CONFIG = exports.PAGES_CONFIG = exports.DEFAULT_PAGE = exports.ROUTES = void 0;\nconst garage_1 = __webpack_require__(/*! ./garage */ \"./src/modules/garage/index.ts\");\nconst winners_1 = __webpack_require__(/*! ./winners */ \"./src/modules/winners/index.ts\");\nconst shared_1 = __webpack_require__(/*! ../shared */ \"./src/shared/index.ts\");\nexports.ROUTES = {\n    GARAGE: 'garage',\n    WINNERS: 'winners',\n};\nexports.DEFAULT_PAGE = exports.ROUTES.GARAGE;\nexports.PAGES_CONFIG = {\n    [exports.ROUTES.GARAGE]: {\n        name: 'Garage',\n        start: garage_1.startGaragePage,\n        stop: garage_1.stopGaragePage,\n    },\n    [exports.ROUTES.WINNERS]: {\n        name: 'Winners',\n        start: winners_1.startWinnersPage,\n        stop: winners_1.stopWinnersPage,\n    },\n};\nexports.GARAGE_PAGINATION_CONFIG = {\n    prevPageId: 'prevPage',\n    nextPageId: 'nextPage',\n    currentPageNum: shared_1.getGaragePageNumber,\n};\nexports.WINNERS_PAGINATION_CONFIG = {\n    prevPageId: 'prevPageWinners',\n    nextPageId: 'nextPageWinners',\n    currentPageNum: shared_1.getWinnersPageNumber,\n};\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/constants.ts?");

/***/ }),

/***/ "./src/modules/garage/car/car-animation.ts":
/*!*************************************************!*\
  !*** ./src/modules/garage/car/car-animation.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.stopCarEngine = exports.stopCarAnimation = exports.startCarAnimation = void 0;\nconst shared_1 = __webpack_require__(/*! ../../../shared */ \"./src/shared/index.ts\");\nconst startCarAnimation = ({ id, duration }) => {\n    const car = shared_1.getElement('.car', `${id}`);\n    if (!car) {\n        return;\n    }\n    car.style.animationName = 'drive';\n    car.style.animationDuration = `${duration}s`;\n    car.style.animationPlayState = 'running';\n    const btnStart = shared_1.getElement('.car-nav-a', `${id}`);\n    const btnStop = shared_1.getElement('.car-nav-b', `${id}`);\n    shared_1.switchDisabledState(btnStart, btnStop);\n};\nexports.startCarAnimation = startCarAnimation;\nconst stopCarAnimation = (id) => {\n    const car = shared_1.getElement('.car', `${id}`);\n    if (!car) {\n        return;\n    }\n    car.style.animationPlayState = 'paused';\n};\nexports.stopCarAnimation = stopCarAnimation;\nconst stopCarEngine = (id) => {\n    const car = shared_1.getElement('.car', `${id}`);\n    if (!car) {\n        return;\n    }\n    car.style.animationName = '';\n    car.style.animationDuration = '';\n    car.style.animationPlayState = '';\n    const btnStart = shared_1.getElement('.car-nav-a', `${id}`);\n    const btnStop = shared_1.getElement('.car-nav-b', `${id}`);\n    shared_1.switchDisabledState(btnStop, btnStart);\n};\nexports.stopCarEngine = stopCarEngine;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/garage/car/car-animation.ts?");

/***/ }),

/***/ "./src/modules/garage/car/car-behavior.ts":
/*!************************************************!*\
  !*** ./src/modules/garage/car/car-behavior.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.carBehavior = void 0;\nconst service_car_drive_1 = __webpack_require__(/*! ../../../services/service-car-drive */ \"./src/services/service-car-drive.ts\");\nconst service_car_1 = __webpack_require__(/*! ../../../services/service-car */ \"./src/services/service-car.ts\");\nconst select_car_1 = __webpack_require__(/*! ./select-car */ \"./src/modules/garage/car/select-car.ts\");\nconst carBehavior = () => {\n    const carRemoveBtns = document.getElementsByClassName('car-remove');\n    const carSelectBtns = document.getElementsByClassName('car-select');\n    const carStartBtn = document.getElementsByClassName('car-nav-a');\n    const carStopBtn = document.getElementsByClassName('car-nav-b');\n    [...carRemoveBtns].forEach(btn => btn.addEventListener('click', (event) => {\n        const targetId = event.target.dataset.id;\n        service_car_1.deleteCar((parseInt(targetId, 10)));\n    }));\n    [...carSelectBtns].forEach(btn => btn.addEventListener('click', (event) => {\n        select_car_1.selectCar(event.target.dataset.id);\n    }));\n    [...carStartBtn].forEach(btn => btn.addEventListener('click', (event) => {\n        const targetId = event.target.dataset.id;\n        service_car_drive_1.startCar((parseInt(targetId, 10)));\n    }));\n    [...carStopBtn].forEach(btn => btn.addEventListener('click', (event) => {\n        const targetId = event.target.dataset.id;\n        service_car_drive_1.stopCar((parseInt(targetId, 10)));\n    }));\n};\nexports.carBehavior = carBehavior;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/garage/car/car-behavior.ts?");

/***/ }),

/***/ "./src/modules/garage/car/generate-cars.ts":
/*!*************************************************!*\
  !*** ./src/modules/garage/car/generate-cars.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.generateCarsBehavior = void 0;\nconst service_car_1 = __webpack_require__(/*! ../../../services/service-car */ \"./src/services/service-car.ts\");\nconst generateCarsBehavior = () => {\n    const generateCarsBtn = document.getElementById('generateCarsBtn');\n    const carsNames = [\n        'Tesla',\n        'Batmobile',\n        'Ford',\n        'Audi',\n        'BMW',\n        'Cadillac',\n        'Chevrolet',\n        'Ferrari',\n        'Honda',\n        'Subaru',\n    ];\n    const carsModels = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'SUPER', 'MINI'];\n    generateCarsBtn === null || generateCarsBtn === void 0 ? void 0 : generateCarsBtn.addEventListener('click', () => {\n        for (let i = 0; i < 100; i++) {\n            const name = carsNames[Math.floor(Math.random() * carsNames.length)];\n            const model = carsModels[Math.floor(Math.random() * carsModels.length)];\n            const getRandomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;\n            const newCar = {\n                name: `${name} ${model}`,\n                color: `${getRandomColor}`,\n            };\n            service_car_1.postNewCar(newCar);\n        }\n    });\n};\nexports.generateCarsBehavior = generateCarsBehavior;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/garage/car/generate-cars.ts?");

/***/ }),

/***/ "./src/modules/garage/car/render.ts":
/*!******************************************!*\
  !*** ./src/modules/garage/car/render.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderCar = void 0;\nconst carIcon = __webpack_require__(/*! ../../../assets/car-icon.svg */ \"./src/assets/car-icon.svg\");\nconst finishIcon = __webpack_require__(/*! ../../../assets/finish-icon.png */ \"./src/assets/finish-icon.png\");\nconst renderCar = ({ name, color, id }) => (`\n  <div id=${id} class=\"car-item\" data-name=${name} data-color=${color}>\n    <div class=\"car-header\">\n      <button class='car-select' data-id=${id}>Select</button>\n      <button class='car-remove' data-id=${id}>Remove</button>\n      <h4 class=\"car-name\">${name}</h4>\n    </div>\n    <div class=\"car-field\">\n      <div class=\"car-navigation\">\n        <button class='car-nav-a' data-id=${id}>A</button>\n        <button class='car-nav-b' data-id=${id} disabled>B</button>\n      </div>\n      <div class=\"car-field-inner\">\n        <div class=\"car\" data-id=${id} style=\"color: ${color}\">\n          ${carIcon}\n        </div>\n        <div class=\"finish-line\">\n          <img src=\"${finishIcon}\" alt=\"finish-line\">\n        </div>\n      </div>   \n    </div>\n  </div>\n`);\nexports.renderCar = renderCar;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/garage/car/render.ts?");

/***/ }),

/***/ "./src/modules/garage/car/select-car.ts":
/*!**********************************************!*\
  !*** ./src/modules/garage/car/select-car.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.selectCar = void 0;\nconst actions_1 = __webpack_require__(/*! ../../../redux/actions */ \"./src/redux/actions.ts\");\nconst selectCar = (targetCarId) => {\n    actions_1.selectCarAction(parseInt(targetCarId, 10));\n    const updateCarForm = document.getElementById('updateCarForm');\n    const updateCarName = document.getElementById('updateCarName');\n    const updateCarColor = document.getElementById('updateCarColor');\n    [...updateCarForm.children].forEach((elem) => elem.removeAttribute('disabled'));\n    const targetCar = document.getElementById(targetCarId);\n    updateCarName.value = targetCar === null || targetCar === void 0 ? void 0 : targetCar.dataset.name;\n    updateCarColor.value = targetCar === null || targetCar === void 0 ? void 0 : targetCar.dataset.color;\n};\nexports.selectCar = selectCar;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/garage/car/select-car.ts?");

/***/ }),

/***/ "./src/modules/garage/forms/create-car-form.ts":
/*!*****************************************************!*\
  !*** ./src/modules/garage/forms/create-car-form.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getCreateCarFormData = exports.createCarFormBehavior = exports.createCarFormRender = void 0;\nconst service_car_1 = __webpack_require__(/*! ../../../services/service-car */ \"./src/services/service-car.ts\");\nconst createCarFormRender = ({ createCarName = '', createCarColor = '' }) => (`\n  <form id=\"createNewCar\">\n    <input type=\"text\" id=\"newCarName\" required value=\"${createCarName}\">\n    <input type=\"color\" id=\"newCarColor\" value=\"${createCarColor}\">\n    <button id=\"createCarBtn\" type=\"submit\">Create</button>\n  </form>\n`);\nexports.createCarFormRender = createCarFormRender;\nconst createCarFormBehavior = () => {\n    const newCarName = document.getElementById('newCarName');\n    const newCarColor = document.getElementById('newCarColor');\n    const createNewCarForm = document.getElementById('createNewCar');\n    createNewCarForm === null || createNewCarForm === void 0 ? void 0 : createNewCarForm.addEventListener('submit', (event) => {\n        event.preventDefault();\n        const newCar = {\n            name: newCarName.value,\n            color: newCarColor.value,\n        };\n        service_car_1.postNewCar(newCar);\n        newCarName.value = '';\n        newCarColor.value = '';\n    });\n};\nexports.createCarFormBehavior = createCarFormBehavior;\nconst getCreateCarFormData = () => ({\n    createCarName: document.getElementById('newCarName').value,\n    createCarColor: document.getElementById('newCarColor').value,\n});\nexports.getCreateCarFormData = getCreateCarFormData;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/garage/forms/create-car-form.ts?");

/***/ }),

/***/ "./src/modules/garage/forms/update-car-form.ts":
/*!*****************************************************!*\
  !*** ./src/modules/garage/forms/update-car-form.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getUpdateCarFormData = exports.updateCarFormBehavior = exports.updateCarFormRender = void 0;\nconst service_car_1 = __webpack_require__(/*! ../../../services/service-car */ \"./src/services/service-car.ts\");\nconst updateCarFormRender = ({ updateCarName = '', updateCarColor = '' }) => (`\n  <form id=\"updateCarForm\">\n    <input type=\"text\" id=\"updateCarName\" value=\"${updateCarName}\" ${updateCarName ? '' : 'disabled'}>\n    <input type=\"color\" id=\"updateCarColor\" value=\"${updateCarColor}\" ${updateCarColor ? '' : 'disabled'}>\n    <button id=\"updateCarBtn\" type=\"submit\" ${updateCarName && updateCarColor ? '' : 'disabled'}>Update</button>\n  </form>\n`);\nexports.updateCarFormRender = updateCarFormRender;\nconst updateCarFormBehavior = () => {\n    const updateCarForm = document.getElementById('updateCarForm');\n    const updateCarName = document.getElementById('updateCarName');\n    const updateCarColor = document.getElementById('updateCarColor');\n    updateCarForm === null || updateCarForm === void 0 ? void 0 : updateCarForm.addEventListener('submit', (event) => {\n        event.preventDefault();\n        const updatedCar = {\n            name: updateCarName.value,\n            color: updateCarColor.value,\n        };\n        service_car_1.updateCar(updatedCar);\n        updateCarName.value = '';\n        updateCarColor.value = '';\n        [...updateCarForm.children].forEach((elem) => elem.setAttribute('disabled', ''));\n    });\n};\nexports.updateCarFormBehavior = updateCarFormBehavior;\nconst getUpdateCarFormData = () => ({\n    updateCarName: document.getElementById('updateCarName').value,\n    updateCarColor: document.getElementById('updateCarColor').value,\n});\nexports.getUpdateCarFormData = getUpdateCarFormData;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/garage/forms/update-car-form.ts?");

/***/ }),

/***/ "./src/modules/garage/index.ts":
/*!*************************************!*\
  !*** ./src/modules/garage/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.onCarsListUpdate = exports.stopGaragePage = exports.startGaragePage = void 0;\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/modules/garage/render.ts\");\nconst service_car_1 = __webpack_require__(/*! ../../services/service-car */ \"./src/services/service-car.ts\");\nconst create_car_form_1 = __webpack_require__(/*! ./forms/create-car-form */ \"./src/modules/garage/forms/create-car-form.ts\");\nconst car_behavior_1 = __webpack_require__(/*! ./car/car-behavior */ \"./src/modules/garage/car/car-behavior.ts\");\nconst update_car_form_1 = __webpack_require__(/*! ./forms/update-car-form */ \"./src/modules/garage/forms/update-car-form.ts\");\nconst pagination_1 = __webpack_require__(/*! ./pagination */ \"./src/modules/garage/pagination.ts\");\nconst shared_1 = __webpack_require__(/*! ../../shared */ \"./src/shared/index.ts\");\nconst race_1 = __webpack_require__(/*! ./race */ \"./src/modules/garage/race/index.ts\");\nconst actions_1 = __webpack_require__(/*! ../../redux/actions */ \"./src/redux/actions.ts\");\nconst popup_1 = __webpack_require__(/*! ./race/popup */ \"./src/modules/garage/race/popup.ts\");\nconst generate_cars_1 = __webpack_require__(/*! ./car/generate-cars */ \"./src/modules/garage/car/generate-cars.ts\");\nconst startGaragePage = (garageFormsConfig) => {\n    render_1.renderGaragePage(garageFormsConfig);\n    pagination_1.handlePagination();\n    service_car_1.getCars();\n    car_behavior_1.carBehavior();\n    create_car_form_1.createCarFormBehavior();\n    update_car_form_1.updateCarFormBehavior();\n    generate_cars_1.generateCarsBehavior();\n    pagination_1.pagination();\n    race_1.race();\n};\nexports.startGaragePage = startGaragePage;\nconst stopGaragePage = () => {\n    window.removeEventListener(\"hashchange\", pagination_1.onGarageHashChange);\n    race_1.raceStoptHandler();\n    const garageFormsConfig = Object.assign(Object.assign({}, create_car_form_1.getCreateCarFormData()), update_car_form_1.getUpdateCarFormData());\n    actions_1.saveFormsData(garageFormsConfig);\n    popup_1.removePopup();\n};\nexports.stopGaragePage = stopGaragePage;\nconst onCarsListUpdate = (stateCarsList, stateTotalCars) => {\n    render_1.renderCarsList(stateCarsList);\n    car_behavior_1.carBehavior();\n    render_1.insertCarsCount(stateTotalCars);\n    render_1.insertPageNumber(shared_1.getGaragePageNumber());\n};\nexports.onCarsListUpdate = onCarsListUpdate;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/garage/index.ts?");

/***/ }),

/***/ "./src/modules/garage/pagination.ts":
/*!******************************************!*\
  !*** ./src/modules/garage/pagination.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pagination = exports.handlePagination = exports.onGarageHashChange = void 0;\nconst service_car_1 = __webpack_require__(/*! ../../services/service-car */ \"./src/services/service-car.ts\");\nconst shared_1 = __webpack_require__(/*! ../../shared */ \"./src/shared/index.ts\");\nconst race_1 = __webpack_require__(/*! ./race */ \"./src/modules/garage/race/index.ts\");\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/modules/garage/render.ts\");\nconst onGarageHashChange = () => {\n    render_1.clearCarsList();\n    service_car_1.getCars();\n};\nexports.onGarageHashChange = onGarageHashChange;\nconst handlePagination = () => {\n    window.addEventListener(\"hashchange\", exports.onGarageHashChange);\n};\nexports.handlePagination = handlePagination;\nconst pagination = () => {\n    const prevPage = document.getElementById('prevPage');\n    const nextPage = document.getElementById('nextPage');\n    const re = /garage=\\d+/;\n    prevPage === null || prevPage === void 0 ? void 0 : prevPage.addEventListener('click', () => {\n        const currentPage = shared_1.getGaragePageNumber();\n        if (currentPage) {\n            window.location.hash = window.location.hash.replace(re, `garage=${currentPage - 1}`);\n        }\n        race_1.raceStoptHandler();\n    });\n    nextPage === null || nextPage === void 0 ? void 0 : nextPage.addEventListener('click', () => {\n        const currentPage = shared_1.getGaragePageNumber();\n        if (currentPage) {\n            window.location.hash = window.location.hash.replace(re, `garage=${currentPage + 1}`);\n        }\n        race_1.raceStoptHandler();\n    });\n};\nexports.pagination = pagination;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/garage/pagination.ts?");

/***/ }),

/***/ "./src/modules/garage/race/index.ts":
/*!******************************************!*\
  !*** ./src/modules/garage/race/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.race = exports.raceStoptHandler = void 0;\nconst service_car_drive_1 = __webpack_require__(/*! ../../../services/service-car-drive */ \"./src/services/service-car-drive.ts\");\nconst shared_1 = __webpack_require__(/*! ../../../shared */ \"./src/shared/index.ts\");\nconst actions_1 = __webpack_require__(/*! ../../../redux/actions */ \"./src/redux/actions.ts\");\nconst popup_1 = __webpack_require__(/*! ./popup */ \"./src/modules/garage/race/popup.ts\");\nconst raceStartHandler = () => {\n    const raceBtn = document.getElementById('raceBtn');\n    const resetBtn = document.getElementById('resetBtn');\n    shared_1.switchDisabledState(raceBtn, resetBtn);\n    const carsOnPage = document.getElementsByClassName('car-item');\n    [...carsOnPage].forEach(car => {\n        service_car_drive_1.startCar(parseInt(car.id, 10));\n        car.classList.add('in-race');\n    });\n    actions_1.raceStartAction();\n};\nconst raceStoptHandler = () => {\n    const raceBtn = document.getElementById('raceBtn');\n    const resetBtn = document.getElementById('resetBtn');\n    shared_1.switchDisabledState(resetBtn, raceBtn);\n    actions_1.raceStopAction();\n    const carsInRace = document.getElementsByClassName('car-item in-race');\n    if (carsInRace.length) {\n        [...carsInRace].forEach(car => {\n            service_car_drive_1.stopCar(parseInt(car.id, 10));\n            car.classList.remove('in-race');\n        });\n    }\n    popup_1.removePopup();\n};\nexports.raceStoptHandler = raceStoptHandler;\nconst race = () => {\n    const raceBtn = document.getElementById('raceBtn');\n    const resetBtn = document.getElementById('resetBtn');\n    raceBtn === null || raceBtn === void 0 ? void 0 : raceBtn.addEventListener('click', raceStartHandler);\n    resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', exports.raceStoptHandler);\n};\nexports.race = race;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/garage/race/index.ts?");

/***/ }),

/***/ "./src/modules/garage/race/popup.ts":
/*!******************************************!*\
  !*** ./src/modules/garage/race/popup.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startPopup = exports.removePopup = void 0;\nconst renderPopup = (name, time) => (`\n  <div id=\"raceWinner\" class=\"popup\">\n    <button id=\"btnClose\">X</button>\n    <div class=\"popup-title\">\n      <h2>Car ${name} won!</h2>\n    </div>\n    <div class=\"popup-inner\">\n      Time: ${time} seconds.\n    </div>\n  </div>\n`);\nconst removePopup = () => {\n    const popup = document.getElementById('raceWinner');\n    if (popup) {\n        popup.remove();\n    }\n};\nexports.removePopup = removePopup;\nconst startPopup = (name, time) => {\n    var _a;\n    (_a = document.getElementById('main')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', renderPopup(name, time));\n    const closeBtn = document.getElementById('btnClose');\n    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', () => {\n        exports.removePopup();\n    });\n};\nexports.startPopup = startPopup;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/garage/race/popup.ts?");

/***/ }),

/***/ "./src/modules/garage/render.ts":
/*!**************************************!*\
  !*** ./src/modules/garage/render.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.insertPageNumber = exports.insertCarsCount = exports.renderCarsList = exports.clearCarsList = exports.renderGaragePage = void 0;\nconst create_car_form_1 = __webpack_require__(/*! ./forms/create-car-form */ \"./src/modules/garage/forms/create-car-form.ts\");\nconst update_car_form_1 = __webpack_require__(/*! ./forms/update-car-form */ \"./src/modules/garage/forms/update-car-form.ts\");\nconst render_1 = __webpack_require__(/*! ./car/render */ \"./src/modules/garage/car/render.ts\");\nconst renderGaragePage = (garageFormsConfig) => {\n    var _a;\n    const html = (`\n    <div id=\"garagePage\" class=\"garage\" xmlns=\"http://www.w3.org/1999/html\">\n      <div class=\"form-area\">\n        ${create_car_form_1.createCarFormRender(garageFormsConfig)}\n        ${update_car_form_1.updateCarFormRender(garageFormsConfig)}\n        <div class=\"buttons\">\n          <button id=\"raceBtn\">Race</button>\n          <button id=\"resetBtn\" disabled>Reset</button>\n          <button id=\"generateCarsBtn\">Generate Cars</button>\n        </div>\n      </div>\n      <div class=\"garage-area\">\n        <h2>Garage (<span id=\"garageLength\"></span>)</h2>\n        <div class=\"page-number\">Page #<span id=\"pageNum\"></span></div>\n        <div id=\"carsList\" class=\"garage-area-inner\"></div>\n        <button id=\"prevPage\">Previous</button>\n        <button id=\"nextPage\">Next</button>\n      </div>\n    </div>\n  `);\n    (_a = document.getElementById('main')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', html);\n};\nexports.renderGaragePage = renderGaragePage;\nconst clearCarsList = () => {\n    const carsListElement = document.getElementById('carsList');\n    carsListElement.innerHTML = '';\n};\nexports.clearCarsList = clearCarsList;\nconst renderCarsList = (carsList) => {\n    const carsListElement = document.getElementById('carsList');\n    exports.clearCarsList();\n    carsList.forEach((car) => carsListElement === null || carsListElement === void 0 ? void 0 : carsListElement.insertAdjacentHTML('beforeend', render_1.renderCar(car)));\n};\nexports.renderCarsList = renderCarsList;\nconst insertCarsCount = (carsListLength) => {\n    document.getElementById('garageLength').innerText = `${carsListLength}`;\n};\nexports.insertCarsCount = insertCarsCount;\nconst insertPageNumber = (pageNumber) => {\n    document.getElementById('pageNum').innerText = `${pageNumber}`;\n};\nexports.insertPageNumber = insertPageNumber;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/garage/render.ts?");

/***/ }),

/***/ "./src/modules/header/index.ts":
/*!*************************************!*\
  !*** ./src/modules/header/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.startRouting = exports.getHeader = void 0;\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./src/modules/constants.ts\");\nconst getHeader = () => {\n    const renderMenuItems = () => Object.values(constants_1.ROUTES).map(pageId => (`\n      <button id=\"${pageId}\">${constants_1.PAGES_CONFIG[pageId].name}</button>\n  `)).join('');\n    return (`\n    <header id=\"header\">\n      ${renderMenuItems()}\n    </header> \n  `);\n};\nexports.getHeader = getHeader;\nconst startRouting = (store) => {\n    const header = document.getElementById('header');\n    header === null || header === void 0 ? void 0 : header.addEventListener('click', (event) => {\n        const target = event.target;\n        if (target.parentElement === header) {\n            const prevPageBtn = [...header === null || header === void 0 ? void 0 : header.getElementsByTagName('button')]\n                .find(btn => btn.classList.contains('active'));\n            const prevPageBtnId = prevPageBtn === null || prevPageBtn === void 0 ? void 0 : prevPageBtn.id;\n            prevPageBtn === null || prevPageBtn === void 0 ? void 0 : prevPageBtn.classList.remove('active');\n            target.classList.add('active');\n            constants_1.PAGES_CONFIG[prevPageBtnId].stop();\n            document.getElementById('main').innerHTML = '';\n            const state = store.getState();\n            constants_1.PAGES_CONFIG[target.id].start(state.garageFormsConfig);\n        }\n    });\n};\nexports.startRouting = startRouting;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/header/index.ts?");

/***/ }),

/***/ "./src/modules/index.ts":
/*!******************************!*\
  !*** ./src/modules/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initCommonPageTemplate = void 0;\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/modules/constants.ts\");\nconst header_1 = __webpack_require__(/*! ./header */ \"./src/modules/header/index.ts\");\nconst getMain = () => (`\n  <main id=\"main\"></main>\n`);\nconst renderCommonPageTemplate = () => {\n    document.body.insertAdjacentHTML('beforeend', header_1.getHeader());\n    document.body.insertAdjacentHTML('beforeend', getMain());\n};\nconst startDefaultPage = () => {\n    var _a;\n    (_a = document.getElementById(constants_1.DEFAULT_PAGE)) === null || _a === void 0 ? void 0 : _a.classList.add('active');\n    document.getElementById('main').innerHTML = '';\n    constants_1.PAGES_CONFIG[constants_1.DEFAULT_PAGE].start({});\n};\nconst initCommonPageTemplate = () => {\n    renderCommonPageTemplate();\n    startDefaultPage();\n    if (!window.location.hash) {\n        window.location.hash = 'garage=1&winners=1';\n    }\n};\nexports.initCommonPageTemplate = initCommonPageTemplate;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/index.ts?");

/***/ }),

/***/ "./src/modules/winners/index.ts":
/*!**************************************!*\
  !*** ./src/modules/winners/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.onWinnersListUpdate = exports.stopWinnersPage = exports.startWinnersPage = void 0;\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/modules/winners/render.ts\");\nconst service_winners_1 = __webpack_require__(/*! ../../services/service-winners */ \"./src/services/service-winners.ts\");\nconst pagination_1 = __webpack_require__(/*! ./pagination */ \"./src/modules/winners/pagination.ts\");\nconst shared_1 = __webpack_require__(/*! ../../shared */ \"./src/shared/index.ts\");\nconst winnersSortingBtns = () => {\n    const winsNumberBtn = document.getElementById('winnerWinsNumBtn');\n    const bestTimeBtn = document.getElementById('winnerTimeBtn');\n    winsNumberBtn === null || winsNumberBtn === void 0 ? void 0 : winsNumberBtn.addEventListener('click', () => {\n        winsNumberBtn.classList.toggle('desc');\n        if (winsNumberBtn.classList.contains('desc')) {\n            service_winners_1.getWinners('wins', 'DESC');\n        }\n        else {\n            service_winners_1.getWinners('wins', 'ASC');\n        }\n    });\n    bestTimeBtn === null || bestTimeBtn === void 0 ? void 0 : bestTimeBtn.addEventListener('click', () => {\n        bestTimeBtn.classList.toggle('asc');\n        if (bestTimeBtn.classList.contains('asc')) {\n            service_winners_1.getWinners('time', 'ASC');\n        }\n        else {\n            service_winners_1.getWinners('time', 'DESC');\n        }\n    });\n};\nconst startWinnersPage = () => {\n    render_1.renderWinnersPage();\n    pagination_1.handlePagination();\n    service_winners_1.getWinners();\n    pagination_1.pagination();\n    winnersSortingBtns();\n};\nexports.startWinnersPage = startWinnersPage;\nconst stopWinnersPage = () => {\n    window.removeEventListener(\"hashchange\", pagination_1.onWinnersHashChange);\n};\nexports.stopWinnersPage = stopWinnersPage;\nconst onWinnersListUpdate = (stateWinnersList, stateTotalWinners) => {\n    render_1.renderWinnersList(stateWinnersList);\n    render_1.insertWinnersCount(stateTotalWinners);\n    render_1.insertPageNumber(shared_1.getWinnersPageNumber());\n};\nexports.onWinnersListUpdate = onWinnersListUpdate;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/winners/index.ts?");

/***/ }),

/***/ "./src/modules/winners/pagination.ts":
/*!*******************************************!*\
  !*** ./src/modules/winners/pagination.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pagination = exports.handlePagination = exports.onWinnersHashChange = void 0;\nconst shared_1 = __webpack_require__(/*! ../../shared */ \"./src/shared/index.ts\");\nconst service_winners_1 = __webpack_require__(/*! ../../services/service-winners */ \"./src/services/service-winners.ts\");\nconst onWinnersHashChange = () => {\n    service_winners_1.getWinners();\n};\nexports.onWinnersHashChange = onWinnersHashChange;\nconst handlePagination = () => {\n    window.addEventListener(\"hashchange\", exports.onWinnersHashChange);\n};\nexports.handlePagination = handlePagination;\nconst pagination = () => {\n    const prevPage = document.getElementById('prevPageWinners');\n    const nextPage = document.getElementById('nextPageWinners');\n    const re = /winners=\\d+/;\n    prevPage === null || prevPage === void 0 ? void 0 : prevPage.addEventListener('click', () => {\n        const currentPage = shared_1.getWinnersPageNumber();\n        if (currentPage) {\n            window.location.hash = window.location.hash.replace(re, `winners=${currentPage - 1}`);\n        }\n    });\n    nextPage === null || nextPage === void 0 ? void 0 : nextPage.addEventListener('click', () => {\n        const currentPage = shared_1.getWinnersPageNumber();\n        if (currentPage) {\n            window.location.hash = window.location.hash.replace(re, `winners=${currentPage + 1}`);\n        }\n    });\n};\nexports.pagination = pagination;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/winners/pagination.ts?");

/***/ }),

/***/ "./src/modules/winners/render.ts":
/*!***************************************!*\
  !*** ./src/modules/winners/render.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.insertPageNumber = exports.insertWinnersCount = exports.renderWinnersList = exports.renderWinner = exports.renderWinnersPage = void 0;\nconst shared_1 = __webpack_require__(/*! ../../shared */ \"./src/shared/index.ts\");\nconst renderWinnersPage = () => {\n    var _a;\n    const html = (`\n    <div id=\"winnersPage\" class=\"winners\" xmlns=\"http://www.w3.org/1999/html\">\n      <div class=\"winners-area\">\n        <h2>Winners (<span id=\"winnersLength\"></span>)</h2>\n        <div class=\"page-number\">Page #<span id=\"pageNumWinners\"></span></div>\n        <div class=\"winners-area-inner\">\n          <div id=\"winnersHeader\" class=\"winners-header\">\n            <div id=\"winnerNumberBtn\" class=\"winners-header-item\">Number</div>\n            <div id=\"winnerPicBtn\" class=\"winners-header-item\">Car</div>\n            <div id=\"winnerNameBtn\" class=\"winners-header-item\">Name</div>\n            <button id=\"winnerWinsNumBtn\" class=\"winners-header-item\">Wins</button>\n            <button id=\"winnerTimeBtn\" class=\"winners-header-item\">Best time (seconds)</button>\n          </div>\n          <div id=\"winnersList\" class=\"winners-wrap\"></div>\n        </div>\n        <button id=\"prevPageWinners\">Previous</button>\n        <button id=\"nextPageWinners\">Next</button>\n      </div>\n    </div>\n  `);\n    (_a = document.getElementById('main')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', html);\n};\nexports.renderWinnersPage = renderWinnersPage;\nconst carIcon = __webpack_require__(/*! ../../assets/car-icon.svg */ \"./src/assets/car-icon.svg\");\nconst renderWinner = ({ id, wins, time, name, color }, index) => (`\n  <div class=\"winner-item\" data-id=${id}>\n    <span class=\"winner-number\">${index}</span>\n    <span class=\"winner-picture\" style=\"color: ${color}\">${carIcon}</span>\n    <span class=\"winner-name\">${name}</span>\n    <span class=\"winner-wins-number\">${wins}</span>\n    <span class=\"winner-time\">${time}</span>\n  </div>\n`);\nexports.renderWinner = renderWinner;\nconst renderWinnersList = (winnersList) => {\n    const winnersListElement = document.getElementById('winnersList');\n    winnersListElement.innerHTML = '';\n    const pageNumber = shared_1.getWinnersPageNumber();\n    winnersList.forEach((winner, index) => {\n        const winnerIndex = index + 1 + (pageNumber - 1) * 10;\n        winnersListElement === null || winnersListElement === void 0 ? void 0 : winnersListElement.insertAdjacentHTML('beforeend', exports.renderWinner(winner, (winnerIndex)));\n    });\n};\nexports.renderWinnersList = renderWinnersList;\nconst insertWinnersCount = (winnersListLength) => {\n    document.getElementById('winnersLength').innerText = `${winnersListLength}`;\n};\nexports.insertWinnersCount = insertWinnersCount;\nconst insertPageNumber = (pageNumber) => {\n    document.getElementById('pageNumWinners').innerText = `${pageNumber}`;\n};\nexports.insertPageNumber = insertPageNumber;\n\n\n//# sourceURL=webpack://match-match-game/./src/modules/winners/render.ts?");

/***/ }),

/***/ "./src/redux/action-types.ts":
/*!***********************************!*\
  !*** ./src/redux/action-types.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SAVE_GARAGE_FORMS_DATA = exports.SET_WINNERS_LIST = exports.ADD_NEW_WINNER = exports.STOP_RACE = exports.START_RACE = exports.STOP_CAR = exports.START_CAR = exports.UPDATE_CAR = exports.SELECT_CARS = exports.SET_CARS_LIST = void 0;\nexports.SET_CARS_LIST = 'SET_CARS_LIST';\nexports.SELECT_CARS = 'SELECT_CAR';\nexports.UPDATE_CAR = 'UPDATE_CAR';\nexports.START_CAR = 'START_CAR';\nexports.STOP_CAR = 'STOP_CAR';\nexports.START_RACE = 'START_RACE';\nexports.STOP_RACE = 'STOP_RACE';\nexports.ADD_NEW_WINNER = 'ADD_NEW_WINNER';\nexports.SET_WINNERS_LIST = 'SET_WINNERS_LIST';\nexports.SAVE_GARAGE_FORMS_DATA = 'SAVE_GARAGE_FORMS_DATA';\n\n\n//# sourceURL=webpack://match-match-game/./src/redux/action-types.ts?");

/***/ }),

/***/ "./src/redux/actions.ts":
/*!******************************!*\
  !*** ./src/redux/actions.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.saveFormsData = exports.setWinnersList = exports.addCurrentWinner = exports.raceStopAction = exports.raceStartAction = exports.stopCarAction = exports.startCarAction = exports.selectCarAction = exports.setCarsList = void 0;\nconst store_1 = __importDefault(__webpack_require__(/*! ./core/store */ \"./src/redux/core/store.ts\"));\nconst action_types_1 = __webpack_require__(/*! ./action-types */ \"./src/redux/action-types.ts\");\nconst setCarsList = (carsList, total) => {\n    store_1.default.dispatch({\n        type: action_types_1.SET_CARS_LIST,\n        payload: { carsList, total },\n    });\n};\nexports.setCarsList = setCarsList;\nconst selectCarAction = (carId) => {\n    store_1.default.dispatch({\n        type: action_types_1.SELECT_CARS,\n        payload: carId,\n    });\n};\nexports.selectCarAction = selectCarAction;\nconst startCarAction = (id, duration) => {\n    store_1.default.dispatch({\n        type: action_types_1.START_CAR,\n        payload: { id, duration },\n    });\n};\nexports.startCarAction = startCarAction;\nconst stopCarAction = (id) => {\n    store_1.default.dispatch({\n        type: action_types_1.STOP_CAR,\n        payload: id,\n    });\n};\nexports.stopCarAction = stopCarAction;\nconst raceStartAction = () => {\n    store_1.default.dispatch({\n        type: action_types_1.START_RACE,\n    });\n};\nexports.raceStartAction = raceStartAction;\nconst raceStopAction = () => {\n    store_1.default.dispatch({\n        type: action_types_1.STOP_RACE,\n    });\n};\nexports.raceStopAction = raceStopAction;\nconst addCurrentWinner = (winner) => {\n    store_1.default.dispatch({\n        type: action_types_1.ADD_NEW_WINNER,\n        payload: winner,\n    });\n};\nexports.addCurrentWinner = addCurrentWinner;\nconst setWinnersList = (winnersList, total) => {\n    store_1.default.dispatch({\n        type: action_types_1.SET_WINNERS_LIST,\n        payload: { winnersList, total },\n    });\n};\nexports.setWinnersList = setWinnersList;\nconst saveFormsData = (config) => {\n    store_1.default.dispatch({\n        type: action_types_1.SAVE_GARAGE_FORMS_DATA,\n        payload: config,\n    });\n};\nexports.saveFormsData = saveFormsData;\n\n\n//# sourceURL=webpack://match-match-game/./src/redux/actions.ts?");

/***/ }),

/***/ "./src/redux/core/create-store.ts":
/*!****************************************!*\
  !*** ./src/redux/core/create-store.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createStore = void 0;\nconst createStore = (rootReducer, initialState) => {\n    let state = rootReducer(initialState, { type: '__INIT__' });\n    const subscribers = [];\n    return {\n        dispatch(action) {\n            const prevState = state;\n            state = rootReducer(state, action);\n            subscribers.forEach(callback => callback(prevState));\n        },\n        subscribe(callback) {\n            subscribers.push(callback);\n        },\n        getState() {\n            return state;\n        },\n    };\n};\nexports.createStore = createStore;\n\n\n//# sourceURL=webpack://match-match-game/./src/redux/core/create-store.ts?");

/***/ }),

/***/ "./src/redux/core/store.ts":
/*!*********************************!*\
  !*** ./src/redux/core/store.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = void 0;\nconst create_store_1 = __webpack_require__(/*! ./create-store */ \"./src/redux/core/create-store.ts\");\nconst root_reducer_1 = __webpack_require__(/*! ../root-reducer */ \"./src/redux/root-reducer.ts\");\nconst initial_state_1 = __webpack_require__(/*! ../initial-state */ \"./src/redux/initial-state.ts\");\nconst store = create_store_1.createStore(root_reducer_1.rootReducer, initial_state_1.initialState);\nexports.default = store;\n\n\n//# sourceURL=webpack://match-match-game/./src/redux/core/store.ts?");

/***/ }),

/***/ "./src/redux/initial-state.ts":
/*!************************************!*\
  !*** ./src/redux/initial-state.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initialState = void 0;\nexports.initialState = {\n    carsList: [],\n    totalCars: 0,\n    pageNumber: 1,\n    startedCarsList: [],\n    isRaceStarted: false,\n    currentWinner: null,\n    winnersList: [],\n    totalWinners: 0,\n};\n\n\n//# sourceURL=webpack://match-match-game/./src/redux/initial-state.ts?");

/***/ }),

/***/ "./src/redux/root-reducer.ts":
/*!***********************************!*\
  !*** ./src/redux/root-reducer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rootReducer = void 0;\nconst action_types_1 = __webpack_require__(/*! ./action-types */ \"./src/redux/action-types.ts\");\nconst rootReducer = (state, action) => {\n    if (action.type === action_types_1.SET_CARS_LIST) {\n        return Object.assign(Object.assign({}, state), { carsList: action.payload.carsList, totalCars: action.payload.total });\n    }\n    if (action.type === action_types_1.SELECT_CARS) {\n        return Object.assign(Object.assign({}, state), { selectedCarId: action.payload });\n    }\n    if (action.type === action_types_1.START_CAR) {\n        return Object.assign(Object.assign({}, state), { startedCarsList: [...state.startedCarsList, action.payload] });\n    }\n    if (action.type === action_types_1.STOP_CAR) {\n        return Object.assign(Object.assign({}, state), { startedCarsList: state.startedCarsList.filter((car) => car.id !== action.payload) });\n    }\n    if (action.type === action_types_1.START_RACE) {\n        return Object.assign(Object.assign({}, state), { isRaceStarted: true, currentWinner: null });\n    }\n    if (action.type === action_types_1.STOP_RACE) {\n        return Object.assign(Object.assign({}, state), { isRaceStarted: false });\n    }\n    if (action.type === action_types_1.ADD_NEW_WINNER && state.isRaceStarted) {\n        return Object.assign(Object.assign({}, state), { isRaceStarted: false, currentWinner: action.payload });\n    }\n    if (action.type === action_types_1.SET_WINNERS_LIST) {\n        return Object.assign(Object.assign({}, state), { winnersList: action.payload.winnersList, totalWinners: action.payload.total });\n    }\n    if (action.type === action_types_1.SAVE_GARAGE_FORMS_DATA) {\n        return Object.assign(Object.assign({}, state), { garageFormsConfig: action.payload });\n    }\n    return state;\n};\nexports.rootReducer = rootReducer;\n\n\n//# sourceURL=webpack://match-match-game/./src/redux/root-reducer.ts?");

/***/ }),

/***/ "./src/services/constants.ts":
/*!***********************************!*\
  !*** ./src/services/constants.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.WINNERS_LIMIT = exports.CARS_LIMIT = exports.SERVER_ADDRESS_WINNERS = exports.SERVER_ADDRESS_ENGINE = exports.SERVER_ADDRESS_GARAGE = exports.SERVER_ADDRESS = void 0;\nexports.SERVER_ADDRESS = 'http://127.0.0.1:3000';\nexports.SERVER_ADDRESS_GARAGE = `${exports.SERVER_ADDRESS}/garage`;\nexports.SERVER_ADDRESS_ENGINE = `${exports.SERVER_ADDRESS}/engine`;\nexports.SERVER_ADDRESS_WINNERS = `${exports.SERVER_ADDRESS}/winners`;\nexports.CARS_LIMIT = 7;\nexports.WINNERS_LIMIT = 10;\n\n\n//# sourceURL=webpack://match-match-game/./src/services/constants.ts?");

/***/ }),

/***/ "./src/services/service-car-drive.ts":
/*!*******************************************!*\
  !*** ./src/services/service-car-drive.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.stopCar = exports.startCar = void 0;\nconst store_1 = __importDefault(__webpack_require__(/*! ../redux/core/store */ \"./src/redux/core/store.ts\"));\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/services/constants.ts\");\nconst actions_1 = __webpack_require__(/*! ../redux/actions */ \"./src/redux/actions.ts\");\nconst car_animation_1 = __webpack_require__(/*! ../modules/garage/car/car-animation */ \"./src/modules/garage/car/car-animation.ts\");\nconst startCar = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const result = yield (yield fetch(`${constants_1.SERVER_ADDRESS_ENGINE}?id=${id}&status=started`)).json();\n        const { velocity, distance } = result;\n        const duration = Math.round(distance / velocity) / 1000;\n        actions_1.startCarAction(id, duration);\n        const state = store_1.default.getState();\n        const { startedCarsList } = state;\n        car_animation_1.startCarAnimation(startedCarsList[startedCarsList.length - 1]);\n        const driveResponse = yield fetch(`${constants_1.SERVER_ADDRESS_ENGINE}?id=${id}&status=drive`);\n        if (!driveResponse.ok) {\n            car_animation_1.stopCarAnimation(id);\n        }\n        else {\n            const newWinner = {\n                id,\n                wins: 1,\n                time: duration,\n            };\n            actions_1.addCurrentWinner(newWinner);\n        }\n    }\n    catch (error) {\n        alert('Error starting the car. Please, try again');\n    }\n});\nexports.startCar = startCar;\nconst stopCar = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        yield fetch(`${constants_1.SERVER_ADDRESS_ENGINE}?id=${id}&status=stopped`);\n        actions_1.stopCarAction(id);\n        car_animation_1.stopCarEngine(id);\n    }\n    catch (error) {\n        alert('Error stopping the car. Please, try again');\n    }\n});\nexports.stopCar = stopCar;\n\n\n//# sourceURL=webpack://match-match-game/./src/services/service-car-drive.ts?");

/***/ }),

/***/ "./src/services/service-car.ts":
/*!*************************************!*\
  !*** ./src/services/service-car.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateCar = exports.deleteCar = exports.postNewCar = exports.getCars = void 0;\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/services/constants.ts\");\nconst actions_1 = __webpack_require__(/*! ../redux/actions */ \"./src/redux/actions.ts\");\nconst store_1 = __importDefault(__webpack_require__(/*! ../redux/core/store */ \"./src/redux/core/store.ts\"));\nconst shared_1 = __webpack_require__(/*! ../shared */ \"./src/shared/index.ts\");\nconst getCars = () => __awaiter(void 0, void 0, void 0, function* () {\n    const pageNum = shared_1.getGaragePageNumber();\n    const response = yield fetch(`${constants_1.SERVER_ADDRESS_GARAGE}?_page=${pageNum}&_limit=${constants_1.CARS_LIMIT}`);\n    const total = parseInt(response.headers.get('X-Total-Count'), 10);\n    const result = yield response.json();\n    actions_1.setCarsList(result, total);\n});\nexports.getCars = getCars;\nconst postNewCar = (car) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        yield fetch(`${constants_1.SERVER_ADDRESS_GARAGE}`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(car),\n        });\n        exports.getCars();\n    }\n    catch (error) {\n        alert('Error creating the car. Please, try again');\n    }\n});\nexports.postNewCar = postNewCar;\nconst deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        yield fetch(`${constants_1.SERVER_ADDRESS_GARAGE}/${id}`, {\n            method: 'DELETE',\n        });\n        yield fetch(`${constants_1.SERVER_ADDRESS_WINNERS}/${id}`, {\n            method: 'DELETE',\n        });\n        exports.getCars();\n    }\n    catch (error) {\n        alert('Error deleting the car. Please, try again');\n    }\n});\nexports.deleteCar = deleteCar;\nconst updateCar = (car) => __awaiter(void 0, void 0, void 0, function* () {\n    const { selectedCarId } = store_1.default.getState();\n    try {\n        yield (yield fetch(`${constants_1.SERVER_ADDRESS_GARAGE}/${selectedCarId}`, {\n            method: 'PUT',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(car),\n        })).json();\n        exports.getCars();\n    }\n    catch (error) {\n        alert('Error updating the car. Please, try again');\n    }\n});\nexports.updateCar = updateCar;\n\n\n//# sourceURL=webpack://match-match-game/./src/services/service-car.ts?");

/***/ }),

/***/ "./src/services/service-winners.ts":
/*!*****************************************!*\
  !*** ./src/services/service-winners.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getWinners = exports.createWinner = void 0;\nconst store_1 = __importDefault(__webpack_require__(/*! ../redux/core/store */ \"./src/redux/core/store.ts\"));\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/services/constants.ts\");\nconst popup_1 = __webpack_require__(/*! ../modules/garage/race/popup */ \"./src/modules/garage/race/popup.ts\");\nconst shared_1 = __webpack_require__(/*! ../shared */ \"./src/shared/index.ts\");\nconst actions_1 = __webpack_require__(/*! ../redux/actions */ \"./src/redux/actions.ts\");\nconst createWinner = (winner) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const winnerExisting = yield (yield fetch(`${constants_1.SERVER_ADDRESS_WINNERS}/${winner.id}`)).json();\n        if (!winnerExisting.id) {\n            yield fetch(`${constants_1.SERVER_ADDRESS_WINNERS}`, {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(winner),\n            });\n        }\n        else {\n            const newWinner = Object.assign(Object.assign({}, winnerExisting), { wins: winnerExisting.wins + 1, time: winnerExisting.time > winner.time ? winner.time : winnerExisting.time });\n            yield fetch(`${constants_1.SERVER_ADDRESS_WINNERS}/${newWinner.id}`, {\n                method: 'PUT',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(newWinner),\n            });\n        }\n        const state = store_1.default.getState();\n        const winnerName = state.carsList.find((car) => car.id === winner.id).name;\n        popup_1.startPopup(winnerName, state.currentWinner.time);\n    }\n    catch (error) {\n        alert('Error creating the winner. Please, try again');\n    }\n});\nexports.createWinner = createWinner;\nconst getWinners = (sortBy = 'id', orderBy = 'ASC') => __awaiter(void 0, void 0, void 0, function* () {\n    const pageNum = shared_1.getWinnersPageNumber();\n    const page = `_page=${pageNum}`;\n    const limit = `_limit=${constants_1.WINNERS_LIMIT}`;\n    const sort = `_sort=${sortBy}`;\n    const order = `_order=${orderBy}`;\n    const response = yield fetch(`${constants_1.SERVER_ADDRESS_WINNERS}?${page}&${limit}&${sort}&${order}`);\n    const total = parseInt(response.headers.get('X-Total-Count'), 10);\n    const result = yield response.json();\n    const winnersList = yield Promise.all(result.map((winner) => __awaiter(void 0, void 0, void 0, function* () {\n        const car = yield (yield fetch(`${constants_1.SERVER_ADDRESS_GARAGE}/${winner.id}`)).json();\n        return Object.assign(Object.assign({}, winner), car);\n    })));\n    actions_1.setWinnersList(winnersList, total);\n});\nexports.getWinners = getWinners;\n\n\n//# sourceURL=webpack://match-match-game/./src/services/service-winners.ts?");

/***/ }),

/***/ "./src/shared/index.ts":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.disablePagination = exports.getWinnersPageNumber = exports.getGaragePageNumber = exports.getElement = exports.switchDisabledState = void 0;\nconst switchDisabledState = (btnToDisable, btnToAble) => {\n    btnToDisable === null || btnToDisable === void 0 ? void 0 : btnToDisable.setAttribute('disabled', '');\n    btnToAble === null || btnToAble === void 0 ? void 0 : btnToAble.removeAttribute('disabled');\n};\nexports.switchDisabledState = switchDisabledState;\nconst getElement = (name, id) => document.querySelector(`${name}[data-id='${id}']`);\nexports.getElement = getElement;\nconst getGaragePageNumber = () => (parseInt(window.location.hash.slice(1).split('&')[0].split('=')[1], 10));\nexports.getGaragePageNumber = getGaragePageNumber;\nconst getWinnersPageNumber = () => (parseInt(window.location.hash.slice(1).split('&')[1].split('=')[1], 10));\nexports.getWinnersPageNumber = getWinnersPageNumber;\nconst disablePagination = (maxPageNumber, { prevPageId, nextPageId, currentPageNum }) => {\n    const prevPage = document.getElementById(`${prevPageId}`);\n    const nextPage = document.getElementById(`${nextPageId}`);\n    if (!prevPage || !nextPage) {\n        return;\n    }\n    const currentPage = currentPageNum();\n    if (currentPage === 1) {\n        prevPage.setAttribute('disabled', '');\n    }\n    else {\n        prevPage.removeAttribute('disabled');\n    }\n    if (currentPage === maxPageNumber) {\n        nextPage.setAttribute('disabled', '');\n    }\n    else {\n        nextPage.removeAttribute('disabled');\n    }\n};\nexports.disablePagination = disablePagination;\n\n\n//# sourceURL=webpack://match-match-game/./src/shared/index.ts?");

/***/ }),

/***/ "./src/assets/car-icon.svg":
/*!*********************************!*\
  !*** ./src/assets/car-icon.svg ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = \"<svg version=\\\"1.0\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n width=\\\"1280.000000pt\\\" height=\\\"640.000000pt\\\" viewBox=\\\"0 0 1280.000000 640.000000\\\"\\n preserveAspectRatio=\\\"xMidYMid meet\\\">\\n<g transform=\\\"translate(0.000000,640.000000) scale(0.100000,-0.100000)\\\"\\nfill=\\\"currentColor\\\" stroke=\\\"none\\\">\\n<path d=\\\"M3525 5341 c-72 -18 -79 -28 -90 -121 -4 -30 -11 -62 -16 -71 -4 -9\\n-97 -51 -206 -94 -774 -304 -1348 -540 -1603 -661 -163 -77 -222 -91 -421\\n-104 -85 -5 -170 -14 -189 -20 -101 -32 -362 -58 -620 -63 l-115 -2 -47 -80\\nc-47 -78 -47 -80 -29 -100 34 -36 35 -77 5 -177 -30 -99 -34 -178 -19 -370 5\\n-67 4 -88 -6 -88 -29 0 -83 -56 -110 -114 -50 -106 -74 -343 -48 -467 13 -58\\n13 -62 3 -159 -5 -54 16 -238 28 -244 2 -1 29 -20 61 -41 73 -49 123 -103 132\\n-143 17 -79 167 -155 355 -181 104 -15 969 -97 1087 -104 l32 -2 5 160 c7 230\\n50 394 146 559 281 479 917 673 1405 429 316 -159 530 -424 598 -742 22 -106\\n29 -365 13 -519 l-8 -82 3002 0 c2855 0 3002 1 2995 18 -33 87 -56 325 -45\\n461 28 320 177 567 459 759 399 273 847 282 1243 24 239 -157 397 -392 460\\n-687 18 -84 15 -341 -5 -430 -8 -38 -14 -71 -12 -73 7 -8 386 20 478 34 180\\n28 253 65 304 152 24 41 28 57 28 127 -1 44 -9 117 -20 163 -18 79 -18 88 -2\\n190 31 199 40 306 41 497 1 176 -1 195 -23 260 -46 135 -103 190 -283 274\\n-222 104 -633 220 -1168 330 -523 108 -1524 210 -2054 211 l-229 0 -236 139\\nc-813 477 -1593 884 -1852 966 -498 157 -1598 195 -2892 100 l-188 -14 -47 30\\nc-92 58 -223 89 -297 70z m1912 -311 c13 -45 58 -305 88 -515 33 -226 74 -539\\n71 -542 -7 -7 -1672 40 -2054 58 -357 16 -464 56 -573 215 -62 91 -87 225 -59\\n326 12 40 56 74 192 148 369 198 799 289 1618 340 246 15 290 16 510 16 l194\\n-1 13 -45z m649 10 c383 -36 717 -86 934 -139 210 -52 451 -163 720 -332 141\\n-88 379 -259 380 -271 0 -5 -14 -8 -32 -8 -48 0 -114 -37 -140 -78 -24 -39\\n-30 -113 -15 -189 l9 -43 -904 0 -904 0 -176 540 -175 540 47 0 c25 0 141 -9\\n256 -20z\\\"/>\\n<path d=\\\"M2617 3125 c-431 -82 -774 -440 -838 -875 -17 -117 -7 -292 24 -410\\n113 -436 497 -751 947 -777 507 -29 959 313 1076 813 28 117 26 348 -4 467\\n-94 378 -383 670 -760 768 -105 27 -336 34 -445 14z m378 -310 c84 -21 209\\n-85 280 -142 116 -94 210 -242 251 -393 23 -87 24 -260 0 -355 -58 -237 -242\\n-439 -473 -519 -531 -186 -1074 277 -969 828 30 152 94 274 206 386 111 110\\n237 178 385 206 84 16 235 11 320 -11z\\\"/>\\n<path d=\\\"M2918 2568 c2 -90 7 -167 12 -172 17 -17 108 58 201 166 l51 57 -48\\n31 c-52 33 -131 65 -185 75 l-34 6 3 -163z\\\"/>\\n<path d=\\\"M2591 2700 c-62 -22 -167 -82 -164 -94 3 -13 237 -216 249 -216 7 0\\n15 7 18 16 8 20 8 127 -1 232 -7 95 -8 96 -102 62z\\\"/>\\n<path d=\\\"M3209 2355 c-57 -64 -105 -123 -107 -131 -6 -25 46 -35 157 -29 58 3\\n121 8 139 11 33 5 34 6 27 42 -7 44 -64 167 -92 201 l-19 24 -105 -118z\\\"/>\\n<path d=\\\"M2260 2409 c-31 -44 -68 -133 -77 -186 l-6 -33 155 0 c165 0 201 9\\n181 44 -13 24 -204 216 -214 216 -5 0 -22 -18 -39 -41z\\\"/>\\n<path d=\\\"M2786 2354 c-36 -35 0 -87 44 -64 26 14 26 56 1 70 -25 13 -27 13\\n-45 -6z\\\"/>\\n<path d=\\\"M2751 2186 c-57 -32 -68 -111 -22 -157 43 -42 101 -43 143 -1 42 42\\n41 100 -1 143 -33 32 -78 38 -120 15z\\\"/>\\n<path d=\\\"M2560 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\\n-54 2z\\\"/>\\n<path d=\\\"M3002 2124 c-27 -19 -28 -36 -3 -58 25 -23 61 -6 61 29 0 33 -30 49\\n-58 29z\\\"/>\\n<path d=\\\"M2245 1993 c-77 -6 -76 -5 -59 -65 16 -55 61 -146 92 -186 l18 -23\\n103 122 c57 67 104 129 105 138 1 14 -14 16 -104 17 -58 0 -127 -1 -155 -3z\\\"/>\\n<path d=\\\"M3165 1981 c-44 -4 -61 -10 -63 -22 -3 -16 210 -229 228 -229 22 0\\n86 141 105 228 l7 32 -109 -2 c-59 -1 -135 -4 -168 -7z\\\"/>\\n<path d=\\\"M2776 1914 c-19 -18 -19 -20 -6 -45 6 -11 21 -19 35 -19 20 0 45 24\\n45 44 0 10 -32 36 -45 36 -7 0 -21 -7 -29 -16z\\\"/>\\n<path d=\\\"M2589 1743 c-86 -90 -139 -151 -139 -162 0 -25 179 -101 236 -101\\nl27 0 -7 143 c-9 166 -13 187 -35 187 -9 0 -46 -30 -82 -67z\\\"/>\\n<path d=\\\"M2936 1801 c-6 -10 -24 -168 -29 -258 -3 -60 -2 -63 19 -63 79 0 262\\n68 248 92 -5 7 -53 64 -108 126 -93 105 -117 124 -130 103z\\\"/>\\n<path d=\\\"M10723 3125 c-318 -58 -597 -266 -743 -555 -223 -441 -98 -996 289\\n-1288 112 -84 188 -125 311 -166 274 -91 545 -70 802 61 552 282 735 983 392\\n1500 -225 339 -651 521 -1051 448z m385 -315 c348 -98 579 -443 532 -796 -67\\n-508 -596 -796 -1055 -574 -239 116 -396 352 -412 620 -20 335 192 640 516\\n745 122 40 289 42 419 5z\\\"/>\\n<path d=\\\"M11017 2568 c3 -90 9 -167 14 -172 13 -14 53 18 155 122 l95 97 -23\\n18 c-50 40 -189 97 -235 97 -10 0 -11 -33 -6 -162z\\\"/>\\n<path d=\\\"M10705 2706 c-50 -16 -133 -58 -163 -82 l-23 -19 121 -107 c67 -60\\n128 -108 135 -108 23 0 27 39 20 186 -8 162 -4 157 -90 130z\\\"/>\\n<path d=\\\"M11307 2354 c-59 -65 -107 -126 -107 -136 0 -11 11 -18 38 -22 44 -7\\n278 7 289 17 15 16 -51 183 -94 236 l-19 24 -107 -119z\\\"/>\\n<path d=\\\"M10362 2413 c-39 -62 -70 -134 -78 -184 l-7 -39 152 0 c86 0 161 5\\n172 10 17 10 18 13 5 38 -8 15 -59 71 -114 125 l-99 99 -31 -49z\\\"/>\\n<path d=\\\"M10888 2359 c-24 -14 -23 -56 2 -69 44 -23 80 29 44 64 -18 19 -23\\n19 -46 5z\\\"/>\\n<path d=\\\"M10851 2187 c-49 -29 -66 -101 -35 -146 9 -13 32 -29 50 -37 29 -12\\n39 -12 68 0 99 41 85 180 -19 192 -24 3 -50 -1 -64 -9z\\\"/>\\n<path d=\\\"M10660 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\\n-54 2z\\\"/>\\n<path d=\\\"M11096 2124 c-9 -8 -16 -22 -16 -29 0 -13 26 -45 36 -45 20 0 44 25\\n44 45 0 14 -8 29 -19 35 -25 13 -27 13 -45 -6z\\\"/>\\n<path d=\\\"M10335 1991 c-60 -6 -60 -6 -57 -36 9 -69 104 -248 122 -229 57 61\\n210 250 207 258 -4 12 -176 17 -272 7z\\\"/>\\n<path d=\\\"M11267 1983 c-68 -5 -79 -19 -47 -60 23 -31 200 -193 210 -193 3 0\\n20 24 37 53 29 48 52 111 67 180 l6 27 -107 -2 c-60 -1 -134 -3 -166 -5z\\\"/>\\n<path d=\\\"M10870 1910 c-16 -31 4 -62 38 -58 21 2 28 9 30 32 5 45 -47 65 -68\\n26z\\\"/>\\n<path d=\\\"M10651 1703 c-56 -59 -101 -113 -101 -120 0 -28 172 -103 237 -103\\nl26 0 -7 123 c-10 179 -15 207 -36 207 -10 0 -63 -48 -119 -107z\\\"/>\\n<path d=\\\"M11035 1801 c-7 -12 -23 -144 -29 -243 -4 -77 -4 -78 19 -78 45 0\\n130 22 193 51 l64 29 -19 23 c-65 82 -198 227 -209 227 -7 0 -15 -4 -19 -9z\\\"/>\\n</g>\\n</svg>\\n\";\n\n//# sourceURL=webpack://match-match-game/./src/assets/car-icon.svg?");

/***/ }),

/***/ "./src/assets/finish-icon.png":
/*!************************************!*\
  !*** ./src/assets/finish-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/cf4b63b9981442cf3f18.png\";\n\n//# sourceURL=webpack://match-match-game/./src/assets/finish-icon.png?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;