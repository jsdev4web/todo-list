/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\nlet list = []\n\nclass Todolist {\n\n\n    constructor(title, description, duedate, priority) {\n\n        this.title = title;\n        this.description = description;\n        this.duedate = duedate\n        this.priority = priority;\n        this.todos = []\n    }\n\n        \n        addList() {\n            list.push(new Todolist(this.title, this.description, this.duedate, this.priority))\n            console.log(list)\n            return list\n        }\n\n        addTodo(ans) {\n            this.todos.push(ans)\n        }\n\n        removeLastTodo(){\n            console.log(\"this removes last added todo\")\n            this.todos.pop()\n        }\n\n        removeFirstTodo(){\n            console.log(\"this removes last first todo\")\n            this.todos.shift()\n        }\n    }\n\n\n    let myList = new Todolist(\"Work\", \"do work\", 12/11/1999, 3)\n\n\n\n    console.log(myList.todos.push(\"dog\", \"cat\"))\n    myList.addTodo(\"lion\")\n    myList.removeFirstTodo()\n    \n    console.log(myList)\n\n    \n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;