/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apple.js":
/*!**********************!*\
  !*** ./src/apple.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Apple; });\n\nclass Apple {\n    constructor(position =[10,10]) {\n    this.position = position;\n    }\n\n    setnewPosition(widthInBlock,heightInBlock) {\n      const newX = Math.round(Math.random()* (widthInBlock -1));\n      const newY = Math.round(Math.random()* (heightInBlock -1));;\n      this.position= [newX,newY];\n    };\n    isOnsnake(snakeToCheck) {\n      let isOnsnake = false;\n      for ( let block of snakeToCheck.body)\n       {\n         if(this.position[0]=== block[0] && this.position[1] === block[1])\n         {\n           isOnsnake = true;\n         }\n         return isOnsnake\n       }\n    }\n}; \n\n//# sourceURL=webpack:///./src/apple.js?");

/***/ }),

/***/ "./src/draw.js":
/*!*********************!*\
  !*** ./src/draw.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Draw; });\nclass Draw {\n\n    static gameOver(ctx,centreX,centreY) {\n      ctx.save();\n      ctx.font=\"bold 70px sans-serif\";\n      ctx.fillStyle=\"#000\";\n      ctx.textAlign=\"center\";\n      ctx.textBaseline=\"middle\";\n      ctx.strokeStyle =\"white\";\n      ctx.lineWidth = 5;\n      ctx.strokeText('Game over',centreX,centreY-180);\n      ctx.fillText('Game over',centreX,centreY-180);\n      ctx.font=\"bold 30px sans-serif\";\n      ctx.strokeText('Appuyer sur la touche Espace pour rejouer',centreX,centreY-120);\n      ctx.fillText('Appuyer sur la touche Espace pour rejouer',centreX,centreY-120);\n      ctx.restore();\n    };\n\n    static drawScore(ctx,centreX,centreY,score) {\n      ctx.save();\n      ctx.font=\"bold 200px sans-serif\";\n      ctx.fillStyle=\"#fff\";\n      ctx.textAlign=\"center\";\n      ctx.textBaseline=\"middle\"\n      ctx.fillText(score.toString(),centreX,centreY);\n      ctx.restore();\n    };\n\n    static drawSnake(ctx,blockSize,Snake) {\n      ctx.save();\n      ctx.fillStyle=\"#051937\";\n      for (let block of Snake.body){\n        this.drawBlock(ctx,block,blockSize);\n      }\n      ctx.restore();\n    };\n\n    static drawApple(ctx,blockSize,Apple) {\n      const radius = blockSize/2;\n      const x = Apple.position[0]*blockSize + radius;\n      const y = Apple.position[1]*blockSize + radius;\n      ctx.save();\n      ctx.fillStyle=\"#A8EB12\";\n      ctx.beginPath()\n      ctx.arc(x,y,radius,0,Math.PI*2, true);\n      ctx.fill();\n      ctx.restore();\n    };\n\n    static drawBlock(ctx,position,blockSize) {\n      const [x,y] =position\n      ctx.fillRect(x *blockSize,y*blockSize,blockSize,blockSize);\n    };\n\n};\n\n//# sourceURL=webpack:///./src/draw.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake.js */ \"./src/snake.js\");\n/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.js */ \"./src/draw.js\");\n/* harmony import */ var _apple_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apple.js */ \"./src/apple.js\");\n\n\n\n\nclass Game {    \n    constructor(canvasWidht=900,canvasheight=600) {\n      this.canvasWidht = canvasWidht;\n      this.canvasheight = canvasheight;\n      this.blockSize = 30;\n      this.canvas = document.createElement('canvas');\n      this.ctx = this.canvas.getContext('2d');\n      this.widthInBlock = this.canvasWidht /this.blockSize;\n      this.heightInBlock = this.canvasheight /this.blockSize;\n      this.centreX = this.canvasWidht/2;\n      this.centreY = this.canvasheight/2;\n      this.delay = 150;\n      this.snakee;\n      this.applee;\n      this.score;\n      this.timeOut;\n    } \n\n    init() {\n      this.canvas.width = this.canvasWidht;\n      this.canvas.height = this.canvasheight;\n      this.canvas.style.border= \"30px solid #27D5C0\";\n      this.canvas.style.display=\"block\";\n      this.canvas.style.margin=\"50px auto\";\n      // this.canvas.style.backgroundColor=\"#fff\"\n      document.body.appendChild(this.canvas);\n      this.launch();\n    }\n\n    launch() {\n      this.snakee = new _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] (\"right\",[6,4],[5,4],[4,4],[3,4],[2,4]);\n      this.applee = new _apple_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n      this.score=0;\n      clearTimeout(this.timeOut);\n      this.delay=150;\n      this.refreshCanvas();\n    }\n  \n    refreshCanvas() {\n      this.snakee.advance();\n      if(this.snakee.checkCollision(this.widthInBlock,this.heightInBlock))\n      { \n      _draw_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameOver(this.ctx,this.centreX,this.centreY);\n      }\n      else \n      {\n        if(this.snakee.isEatngApple(this.applee))\n        {\n          this.score++;\n          this.snakee.EatApple = true;\n          do\n          {\n            this.applee.setnewPosition(this.widthInBlock,this.heightInBlock);\n          }\n          while(this.applee.isOnsnake(this.snakee));\n          if (this.score % 5 == 0){\n            this.speedUp();\n          }\n        }\n        this.ctx.clearRect(0,0,this.canvasWidht,this.canvasheight);\n        _draw_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawScore(this.ctx,this.centreX,this.centreY,this.score);\n        _draw_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawSnake(this.ctx,this.blockSize,this.snakee)\n        _draw_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawApple(this.ctx,this.blockSize,this.applee);\n        this.timeOut=setTimeout(this.refreshCanvas.bind(this),this.delay);\n      }\n    }\n  \n    speedUp() {\n      this.delay/= 1.25;\n    }\n\n  };\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\nwindow.onload = () =>\n{\n\n  let myGameSnakY = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ();\n  myGameSnakY.init();\n\n  // let myGameSnakYTwo = new Game();\n  // myGameSnakYTwo.init();\n\n  document.onkeydown = (e) =>\n  {\n    const key = e.keyCode;\n    let newDirection;\n    switch(key)\n    {\n      case 37:\n        newDirection = \"left\";\n        break;\n      case 38:\n        newDirection = \"up\";\n        break;\n      case 39:\n        newDirection = \"right\";\n        break;\n      case 40:\n        newDirection = \"down\";\n        break;\n      case 32 :\n        myGameSnakY.launch();\n        // myGameSnakYTwo.launch();\n      default:\n        return;\n    }\n    myGameSnakY.snakee.setDirection(newDirection);\n    // myGameSnakYTwo.snakee.setDirection(newDirection);\n  };\n  \n}\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Snake; });\nclass Snake {\n    constructor(direction,...body) {\n      this.body = body;\n      this.direction= direction;\n      this.EatApple = false;\n    }\n    advance() {\n      const nextPosition = this.body[0].slice();\n      switch(this.direction)\n      {\n        case \"left\":\n          nextPosition[0] -= 1;\n          break;\n        case \"right\":\n           nextPosition[0] += 1;\n          break;\n        case \"down\":\n          nextPosition[1] += 1;\n          break;\n        case \"up\":\n            nextPosition[1] -= 1;\n          break;\n        default:\n          throw(\"invalid direction\");\n      }\n      this.body.unshift(nextPosition);\n      if(!this.EatApple)\n         this.body.pop();\n      else\n        this.EatApple = false;\n    };\n    setDirection(newDirection) {\n      let allowedDirections;\n      switch(this.direction)\n      {\n        case \"left\":\n        case \"right\":\n           allowedDirections = [\"up\" , \"down\"];\n          break;\n        case \"down\":\n        case \"up\":\n            allowedDirections = [\"left\" , \"right\"];\n       break;\n      default:\n        throw(\"invalid direction\");\n      }\n      if (allowedDirections.includes(newDirection))\n      {\n          this.direction = newDirection;\n      }\n    };\n    checkCollision(widthInBlock,heightInBlock) {\n      let wallCollision = false;\n      let SnakeCollision = false;\n      const head = this.body[0];\n      const rest = this.body.slice(1);\n      const SnakeX = head[0];\n      const SnakeY = head[1];\n      const minX = 0;\n      const minY = 0;\n      const maxX = widthInBlock -1 ;\n      const maxY = heightInBlock -1 ;\n      const isNotBetweenHorizontaleWall = SnakeX < minX || SnakeX > maxX;\n      const isNotBetweenVerticaleWall = SnakeY < minY || SnakeY > maxY;\n      if( isNotBetweenHorizontaleWall || isNotBetweenVerticaleWall)\n      {\n        wallCollision = true;\n      }\n      for ( let block of rest){\n        if(SnakeX === block[0] && SnakeY === block[1])\n        {\n          SnakeCollision = true;\n        }\n      }\n      return wallCollision || SnakeCollision;\n    }\n    isEatngApple (appleToEat) {\n      const head = this.body[0];\n      if(head[0]=== appleToEat.position[0] && head[1]=== appleToEat.position[1])\n        return true;\n      else\n        return false;\n    }\n};\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ })

/******/ });