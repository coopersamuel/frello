/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/actionTypes.js":
/*!************************************!*\
  !*** ./src/actions/actionTypes.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Action Types

var ADD_LIST = exports.ADD_LIST = 'ADD_LIST';
var EDIT_LIST = exports.EDIT_LIST = 'EDIT_LIST';
var ADD_CARD = exports.ADD_CARD = 'ADD_CARD';
var EDIT_CARD = exports.EDIT_CARD = 'EDIT_CARD';
var MOVE_CARD = exports.MOVE_CARD = 'MOVE_CARD';
var DELETE_CARD = exports.DELETE_CARD = 'DELETE_CARD';
var TOGGLE_LABEL = exports.TOGGLE_LABEL = 'TOGGLE_LABEL';

/***/ }),

/***/ "./src/actions/actions.js":
/*!********************************!*\
  !*** ./src/actions/actions.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleLabel = exports.deleteCard = exports.moveCard = exports.editCard = exports.addCard = exports.editList = exports.addList = undefined;

var _actionTypes = __webpack_require__(/*! ./actionTypes */ "./src/actions/actionTypes.js");

var ActionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
* Action creators
*/

var addList = exports.addList = function addList(listName) {
    return {
        type: ActionTypes.ADD_LIST,
        payload: listName
    };
};

var editList = exports.editList = function editList(name, listId) {
    return {
        type: ActionTypes.EDIT_LIST,
        payload: {
            name: name,
            listId: listId
        }
    };
};

var addCard = exports.addCard = function addCard(message, listId) {
    return {
        type: ActionTypes.ADD_CARD,
        payload: {
            message: message,
            listId: listId
        }
    };
};

var editCard = exports.editCard = function editCard(message, listId, cardId) {
    return {
        type: ActionTypes.EDIT_CARD,
        payload: {
            message: message,
            listId: listId,
            cardId: cardId
        }
    };
};

var moveCard = exports.moveCard = function moveCard(dragIndex, dragListId, hoverIndex, hoverListId) {
    return {
        type: ActionTypes.MOVE_CARD,
        payload: {
            dragIndex: dragIndex,
            dragListId: dragListId,
            hoverIndex: hoverIndex,
            hoverListId: hoverListId
        }
    };
};

var deleteCard = exports.deleteCard = function deleteCard(listId, cardIndex) {
    return {
        type: ActionTypes.DELETE_CARD,
        payload: {
            listId: listId,
            cardIndex: cardIndex
        }
    };
};

var toggleLabel = exports.toggleLabel = function toggleLabel(listId, cardId, label) {
    return {
        type: ActionTypes.TOGGLE_LABEL,
        payload: {
            listId: listId,
            cardId: cardId,
            label: label
        }
    };
};

/***/ }),

/***/ "./src/components/card/card.jsx":
/*!**************************************!*\
  !*** ./src/components/card/card.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDnd = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");

var _itemTypes = __webpack_require__(/*! ../../constants/itemTypes */ "./src/constants/itemTypes.js");

var _itemTypes2 = _interopRequireDefault(_itemTypes);

var _md = __webpack_require__(/*! react-icons/lib/md */ "./node_modules/react-icons/lib/md/index.js");

__webpack_require__(/*! ./card.scss */ "./src/components/card/card.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cardSource = {
    beginDrag: function beginDrag(props) {
        return {
            id: props.card.id,
            index: props.index,
            listId: props.listId,
            listLength: props.listLength
        };
    },
    canDrag: function canDrag(props, monitor) {
        return !!props.card.message;
    },
    isDragging: function isDragging(props, monitor) {
        return props.card.id === monitor.getItem().id;
    }
};

var cardTarget = {
    hover: function hover(props, monitor, component) {
        var dragIndex = monitor.getItem().index;
        var dragList = monitor.getItem().listId;
        var hoverIndex = props.index;
        var hoverList = props.listId;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex && dragList === hoverList) {
            return;
        }

        // Don't replace an "Add a card" trailing card
        // unless it's the only card in the list
        if (!props.card.message && hoverIndex !== 0) {
            return;
        }

        // Determine rectangle on screen
        var hoverBoundingRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();

        // Get vertical middle
        var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        var clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        var hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.moveCard(dragIndex, dragList, hoverIndex, hoverList);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().listId = hoverList;
        monitor.getItem().index = hoverIndex;
    }
};

var Card = (_dec = (0, _reactDnd.DropTarget)(_itemTypes2.default.CARD, cardTarget, function (connect) {
    return {
        connectDropTarget: connect.dropTarget()
    };
}), _dec2 = (0, _reactDnd.DragSource)(_itemTypes2.default.CARD, cardSource, function (connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}), _dec(_class = _dec2(_class = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card(props) {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

        _this.state = {
            message: _this.props.card.message ? _this.props.card.message : '',
            submitted: _this.props.card.message ? true : false
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Card, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({
                message: event.target.value
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();

            this.setState({
                submitted: true
            });

            if (this.state.message) {
                this.props.editCard(this.state.message, this.props.card.id);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                card = _props.card,
                listId = _props.listId,
                menuCard = _props.menuCard,
                index = _props.index,
                isDragging = _props.isDragging,
                connectDragSource = _props.connectDragSource,
                connectDropTarget = _props.connectDropTarget;

            var isMenuCard = menuCard === card.id; // Is this card the current menu card

            return connectDragSource(connectDropTarget(_react2.default.createElement(
                'div',
                { className: 'card note-card mb-3 ' + (isDragging ? 'dragging' : '') + ' ' + (isMenuCard ? 'card-menu' : '') },
                _react2.default.createElement(
                    'div',
                    { className: 'card-header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row justify-content-left pt-0 ' + (isMenuCard ? 'menu-active' : '') },
                            (card.labels.one || isMenuCard) && _react2.default.createElement(
                                'div',
                                { className: 'col-4 hide-overflow text-center' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'badge align-middle badge-pill label ' + (card.labels.one ? 'active' : '') + ' one', onClick: function onClick() {
                                            if (isMenuCard) {
                                                _this2.props.toggleLabel(listId, card.id, 'one');
                                            }
                                        } },
                                    ' '
                                )
                            ),
                            (card.labels.two || isMenuCard) && _react2.default.createElement(
                                'div',
                                { className: 'col-4 hide-overflow text-center' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'badge align-middle badge-pill label ' + (card.labels.two ? 'active' : '') + ' two', onClick: function onClick() {
                                            if (isMenuCard) {
                                                _this2.props.toggleLabel(listId, card.id, 'two');
                                            }
                                        } },
                                    ' '
                                )
                            ),
                            (card.labels.three || isMenuCard) && _react2.default.createElement(
                                'div',
                                { className: 'col-4 hide-overflow text-center' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'badge align-middle badge-pill label ' + (card.labels.three ? 'active' : '') + ' three', onClick: function onClick() {
                                            if (isMenuCard) {
                                                _this2.props.toggleLabel(listId, card.id, 'three');
                                            }
                                        } },
                                    ' '
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'form',
                        { className: 'input-group', onSubmit: this.handleSubmit },
                        _react2.default.createElement('input', { type: 'text', className: 'form-control pl-3 card-message',
                            placeholder: 'Add a card',
                            onChange: this.handleChange,
                            value: this.state.message,
                            id: 'input_' + card.id,
                            disabled: this.state.submitted,
                            onBlur: function onBlur(event) {
                                if (_this2.state.message) {
                                    _this2.handleSubmit(event);
                                }
                            } }),
                        _react2.default.createElement(
                            'div',
                            { className: 'input-group-append pl-2 pr-1 pt-1' },
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'btn btn-sm btn-light card-menu ' + (isMenuCard ? 'disabled' : ''), onClick: function onClick(event) {
                                            if (card.message) {
                                                _this2.props.onMenuClick(listId, card.id);
                                                _this2.setState({ menu: true });
                                            } else {
                                                if (_this2.state.message) {
                                                    _this2.handleSubmit(event);
                                                } else {
                                                    document.getElementById('input_' + card.id).focus();
                                                }
                                            }
                                        } },
                                    card.message && _react2.default.createElement(_md.MdMoreHoriz, { className: 'mb-1' }) || _react2.default.createElement(_md.MdAdd, { className: 'mb-1' })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: isMenuCard ? 'show-menu container' : 'collapse-menu' },
                        _react2.default.createElement(
                            'div',
                            { className: isMenuCard ? '' : 'd-none' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row justify-content-center mt-1' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-5' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'btn btn-sm btn-light menu-button', onClick: function onClick() {
                                                _this2.setState({ submitted: false }, function () {
                                                    return document.getElementById('input_' + card.id).focus();
                                                });
                                            } },
                                        'Edit'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-5' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'btn btn-sm btn-light menu-button', onClick: function onClick() {
                                                _this2.props.deleteCard(listId, index);
                                            } },
                                        'Delete'
                                    )
                                )
                            )
                        )
                    )
                )
            )));
        }
    }]);

    return Card;
}(_react2.default.Component)) || _class) || _class);
exports.default = Card;

/***/ }),

/***/ "./src/components/card/card.scss":
/*!***************************************!*\
  !*** ./src/components/card/card.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/header/header.jsx":
/*!******************************************!*\
  !*** ./src/components/header/header.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./header.scss */ "./src/components/header/header.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
    return _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
                'div',
                { className: 'row title-container justify-content-center align-items-center' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-12 col-lg-3' },
                    _react2.default.createElement(
                        'div',
                        { className: 'title text-center' },
                        'frello'
                    )
                )
            )
        )
    );
};

exports.default = Header;

/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/list/list.jsx":
/*!**************************************!*\
  !*** ./src/components/list/list.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
//import HTML5Backend from 'react-dnd-html5-backend';


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _card = __webpack_require__(/*! ../card/card */ "./src/components/card/card.jsx");

var _card2 = _interopRequireDefault(_card);

var _reactDnd = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");

var _reactDndMultiBackend = __webpack_require__(/*! react-dnd-multi-backend */ "./node_modules/react-dnd-multi-backend/lib/index.js");

var _reactDndMultiBackend2 = _interopRequireDefault(_reactDndMultiBackend);

var _HTML5toTouch = __webpack_require__(/*! react-dnd-multi-backend/lib/HTML5toTouch */ "./node_modules/react-dnd-multi-backend/lib/HTML5toTouch.js");

var _HTML5toTouch2 = _interopRequireDefault(_HTML5toTouch);

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var _md = __webpack_require__(/*! react-icons/lib/md */ "./node_modules/react-icons/lib/md/index.js");

__webpack_require__(/*! ./list.scss */ "./src/components/list/list.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = (_dec = (0, _reactDnd.DragDropContext)((0, _reactDndMultiBackend2.default)(_HTML5toTouch2.default)), _dec(_class = function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

        _this.state = {
            name: _this.props.list.name ? _this.props.list.name : ''
        };

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(List, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({
                name: event.target.value
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            if (this.state.name) {
                // Don't submit unless there is something for the name
                this.props.editList(this.state.name, this.props.list.id);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var list = this.props.list;


            return _react2.default.createElement(
                'div',
                { className: 'card mb-4 list-card' },
                _react2.default.createElement(
                    'div',
                    { className: 'card-header' },
                    _react2.default.createElement(
                        'form',
                        { className: 'input-group', onSubmit: this.handleSubmit },
                        _react2.default.createElement('input', { type: 'text', className: 'form-control list-name',
                            placeholder: 'Create new list',
                            value: this.state.name,
                            onChange: this.handleChange,
                            id: 'input_' + list.id }),
                        _react2.default.createElement(
                            'div',
                            { className: 'input-group-append pl-2 pt-1' },
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'btn btn-sm btn-light list-menu' },
                                    list.name && _react2.default.createElement(_md.MdMoreHoriz, { className: 'mb-1' }) || _react2.default.createElement(_md.MdAdd, { className: 'mb-1', onClick: function onClick(event) {
                                            if (_this2.state.name) {
                                                _this2.handleSubmit(event);
                                            } else {
                                                document.getElementById('input_' + list.id).focus();
                                            }
                                        } })
                                )
                            )
                        )
                    )
                ),
                list.name && _react2.default.createElement(
                    'div',
                    { className: 'card-body' },
                    (0, _lodash.map)(list.cards, function (card, index) {
                        return _react2.default.createElement(_card2.default, { key: card.id,
                            listId: list.id,
                            card: card,
                            index: index,
                            editCard: _this2.props.editCard,
                            moveCard: _this2.props.moveCard,
                            deleteCard: _this2.props.deleteCard,
                            onMenuClick: _this2.props.onMenuClick,
                            menuCard: _this2.props.menuCard,
                            toggleLabel: _this2.props.toggleLabel });
                    })
                )
            );
        }
    }]);

    return List;
}(_react2.default.Component)) || _class);
exports.default = List;

/***/ }),

/***/ "./src/components/list/list.scss":
/*!***************************************!*\
  !*** ./src/components/list/list.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/constants/itemTypes.js":
/*!************************************!*\
  !*** ./src/constants/itemTypes.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 *  React DnD item types
 */

exports.default = {
    CARD: 'card'
};

/***/ }),

/***/ "./src/containers/board/board.jsx":
/*!****************************************!*\
  !*** ./src/containers/board/board.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _actions = __webpack_require__(/*! ../../actions/actions */ "./src/actions/actions.js");

var _list = __webpack_require__(/*! ../../components/list/list */ "./src/components/list/list.jsx");

var _list2 = _interopRequireDefault(_list);

var _md = __webpack_require__(/*! react-icons/lib/md */ "./node_modules/react-icons/lib/md/index.js");

__webpack_require__(/*! ./board.scss */ "./src/containers/board/board.scss");

var _reducers = __webpack_require__(/*! ../../reducers */ "./src/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getColumn = function getColumn(collection, column) {
    /*
    *   This function handles organizing the collection of lists that is stored in state into four separate arrays for display
    *   This is necessary utility function to display in a masonry-esque format
    */

    var subArray = [];
    var keys = _lodash2.default.keys(collection);

    _lodash2.default.forEach(keys, function (listId, index) {
        if ((index - column) % 4 === 0) {
            subArray.push(collection[listId]);
        }
    });

    return subArray;
};

var Board = function (_React$Component) {
    _inherits(Board, _React$Component);

    function Board(props) {
        _classCallCheck(this, Board);

        var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

        _this.state = {
            overlay: false,
            menuList: null,
            menuCard: null
        };

        _this.submitList = _this.submitList.bind(_this);
        _this.submitCard = _this.submitCard.bind(_this);
        _this.addTrailingList = _this.addTrailingList.bind(_this);
        _this.addTrailingCard = _this.addTrailingCard.bind(_this);
        _this.onMenuClick = _this.onMenuClick.bind(_this);
        _this.deleteCard = _this.deleteCard.bind(_this);
        return _this;
    }

    _createClass(Board, [{
        key: 'submitList',
        value: function submitList(name, id, list) {
            if (!list.name) {
                this.addTrailingList();
            } else {
                document.getElementById('input_' + id).blur();
            }

            this.props.editList(name, id);
        }
    }, {
        key: 'submitCard',
        value: function submitCard(message, cardId, list) {
            var card = _lodash2.default.find(list.cards, { 'id': cardId });

            if (!card.message) {
                this.addTrailingCard(list.id);
            } else {
                document.getElementById('input_' + cardId).blur();
            }

            this.props.editCard(message, list.id, cardId);
        }
    }, {
        key: 'addTrailingList',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var id, nextForm;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.props.addList(null);

                            case 2:
                                // Need to await the completion of this, otherwise you'll target the wrong list

                                // Place the cursor in the new list
                                id = _lodash2.default.findLast(this.props.lists).id; // Grab the last list in the object

                                nextForm = document.getElementById('input_' + id);

                                nextForm.focus();

                                this.props.addCard(null, id); // Add an empty card to each list

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function addTrailingList() {
                return _ref.apply(this, arguments);
            }

            return addTrailingList;
        }()
    }, {
        key: 'addTrailingCard',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(listId) {
                var id, nextForm;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.props.addCard(null, listId);

                            case 2:
                                // Need to await the completion of this, otherwise you'll target the wrong card

                                // Place the cursor in the new list
                                id = _lodash2.default.findLast(this.props.lists[listId].cards).id; // Grab the last list in the object

                                nextForm = document.getElementById('input_' + id);

                                nextForm.focus();

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function addTrailingCard(_x) {
                return _ref2.apply(this, arguments);
            }

            return addTrailingCard;
        }()
    }, {
        key: 'onMenuClick',
        value: function onMenuClick() {
            var listId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var cardId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            this.setState({
                overlay: true,
                menuList: listId, // Pass these to the lists and cards
                menuCard: cardId // so that they will know if they're the menu list/card
            });
        }
    }, {
        key: 'deleteCard',
        value: function deleteCard(listId, cardIndex) {
            // First reset the overlay to default
            this.setState({
                overlay: false,
                menuList: null,
                menuCard: null
            });

            this.props.deleteCard(listId, cardIndex);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var lists = this.props.lists;


            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                    'div',
                    { className: 'row justify-content-center pt-5' },
                    !_lodash2.default.isEmpty(this.props.lists) && _react2.default.createElement(
                        'div',
                        { className: 'col-10' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _lodash2.default.times(4, function (index) {
                                /* Print out four of these */
                                return _react2.default.createElement(
                                    'div',
                                    { key: 'column_' + index, className: 'col-sm-12 col-lg-3' },
                                    _lodash2.default.map(getColumn(lists, index), function (list) {
                                        return _react2.default.createElement(_list2.default, { key: list.id, list: list,
                                            editList: function editList(name, id) {
                                                return _this2.submitList(name, id, list);
                                            },
                                            editCard: function editCard(message, id) {
                                                return _this2.submitCard(message, id, list);
                                            },
                                            moveCard: _this2.props.moveCard,
                                            deleteCard: function deleteCard(listId, cardIndex) {
                                                return _this2.deleteCard(listId, cardIndex);
                                            },
                                            onMenuClick: _this2.onMenuClick,
                                            menuList: _this2.state.menuList,
                                            menuCard: _this2.state.menuCard,
                                            toggleLabel: function toggleLabel(listId, cardId, label) {
                                                return _this2.props.toggleLabel(listId, cardId, label);
                                            } });
                                    })
                                );
                            })
                        )
                    ),
                    _lodash2.default.isEmpty(this.props.lists) && _react2.default.createElement(
                        'div',
                        { className: 'instructions mt-5' },
                        _react2.default.createElement(
                            'div',
                            { className: 'text-center py-4' },
                            _react2.default.createElement(_md.MdSentimentVerySatisfied, { size: 60 })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 text-center' },
                            'Welcome to frello! Let\'s start with your first list'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text-center pt-4' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-light create-button', onClick: function onClick() {
                                        return _this2.addTrailingList();
                                    } },
                                'CREATE LIST'
                            )
                        )
                    )
                ),
                _react2.default.createElement('div', { className: '' + (this.state.overlay ? 'overlay' : ''), onClick: function onClick() {
                        return _this2.setState({
                            overlay: false,
                            menuList: null,
                            menuCard: null
                        });
                    } })
            );
        }
    }]);

    return Board;
}(_react2.default.Component);

function mapStateToProps(state) {
    return {
        lists: state.lists
    };
}

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        addList: _actions.addList,
        editList: _actions.editList,
        addCard: _actions.addCard,
        editCard: _actions.editCard,
        moveCard: _actions.moveCard,
        deleteCard: _actions.deleteCard,
        toggleLabel: _actions.toggleLabel
    }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Board);

/***/ }),

/***/ "./src/containers/board/board.scss":
/*!*****************************************!*\
  !*** ./src/containers/board/board.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");

var _board = __webpack_require__(/*! ./containers/board/board */ "./src/containers/board/board.jsx");

var _board2 = _interopRequireDefault(_board);

var _header = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.jsx");

var _header2 = _interopRequireDefault(_header);

var _reducers = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    var store = (0, _redux.createStore)(_reducers2.default, (0, _reduxDevtoolsExtension.composeWithDevTools)());

    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_header2.default, null),
            _react2.default.createElement(_board2.default, null)
        )
    );
};

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById("root"));

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _lists = __webpack_require__(/*! ./lists */ "./src/reducers/lists.js");

var _lists2 = _interopRequireDefault(_lists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    lists: _lists2.default
});

/***/ }),

/***/ "./src/reducers/lists.js":
/*!*******************************!*\
  !*** ./src/reducers/lists.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.js");

var ActionTypes = _interopRequireWildcard(_actionTypes);

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var _postcss = __webpack_require__(/*! postcss */ "./node_modules/postcss/lib/postcss.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var listId = (0, _lodash.uniqueId)('list_');
    var cardId = (0, _lodash.uniqueId)('card_');

    switch (action.type) {
        case ActionTypes.ADD_LIST:
            return _extends({}, state, _defineProperty({}, listId, { // Unique ID for the list
                name: action.payload,
                id: listId, // The list must be aware of it's own ID
                cards: []
            }));

        case ActionTypes.EDIT_LIST:
            {
                var _action$payload = action.payload,
                    _listId = _action$payload.listId,
                    name = _action$payload.name;

                var currentList = state[_listId];

                currentList.name = name;

                return _extends({}, state, _defineProperty({}, _listId, currentList));
            }

        case ActionTypes.ADD_CARD:
            {
                var _action$payload2 = action.payload,
                    message = _action$payload2.message,
                    _listId2 = _action$payload2.listId;

                var _currentList = state[_listId2];

                _currentList.cards.push({
                    message: action.payload.message,
                    id: cardId, // Every card must have a unique ID,
                    labels: {
                        one: false,
                        two: false,
                        three: false
                    }
                });

                return _extends({}, state, _defineProperty({}, _listId2, _currentList));
            }

        case ActionTypes.EDIT_CARD:
            {
                var _action$payload3 = action.payload,
                    _listId3 = _action$payload3.listId,
                    _cardId = _action$payload3.cardId,
                    _message = _action$payload3.message;

                var _currentList2 = state[_listId3];

                var card = (0, _lodash.find)(_currentList2.cards, { 'id': _cardId });
                card.message = _message;

                return _extends({}, state, _defineProperty({}, _listId3, _currentList2));
            }

        case ActionTypes.MOVE_CARD:
            {
                var _extends6;

                var _action$payload4 = action.payload,
                    dragIndex = _action$payload4.dragIndex,
                    dragListId = _action$payload4.dragListId,
                    hoverIndex = _action$payload4.hoverIndex,
                    hoverListId = _action$payload4.hoverListId;

                var dragList = state[dragListId];
                var hoverList = state[hoverListId];

                var dragCard = dragList.cards[dragIndex]; // Get the dragged card
                dragList.cards.splice(dragIndex, 1); // First remove the dragged card from the array

                if (dragListId === hoverListId) {
                    // This drag is occuring within the same list
                    dragList.cards.splice(hoverIndex, 0, dragCard); // Next, add the dragged card back into the array in the correct spot
                } else {
                    // This is a drag to a separate list
                    hoverList.cards.splice(hoverIndex, 0, dragCard); // Or, add the dragged card into the new list
                }

                return _extends({}, state, (_extends6 = {}, _defineProperty(_extends6, dragListId, dragList), _defineProperty(_extends6, hoverListId, hoverList), _extends6));
            }

        case ActionTypes.DELETE_CARD:
            {
                var _action$payload5 = action.payload,
                    _listId4 = _action$payload5.listId,
                    cardIndex = _action$payload5.cardIndex;

                var _currentList3 = state[_listId4];

                _currentList3.cards.splice(cardIndex, 1); // Simply remove the card from the array

                return _extends({}, state, _defineProperty({}, _listId4, _currentList3));
            }

        case ActionTypes.TOGGLE_LABEL:
            {
                var _action$payload6 = action.payload,
                    _listId5 = _action$payload6.listId,
                    _cardId2 = _action$payload6.cardId,
                    label = _action$payload6.label;

                var _currentList4 = state[_listId5];

                var _card = (0, _lodash.find)(_currentList4.cards, { 'id': _cardId2 });
                _card.labels[label] = !_card.labels[label]; // Toggle the label

                return _extends({}, state, _defineProperty({}, _listId5, _currentList4));
            }

        default:
            return state;
    }
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! /Users/cooper/Documents/projects/frello/src/index.js */"./src/index.js");


/***/ }),

/***/ 4:
/*!********************************!*\
  !*** supports-color (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!***********************!*\
  !*** chalk (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map