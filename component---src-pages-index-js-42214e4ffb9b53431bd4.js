webpackJsonp([35783957827783],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _isPlaceholder = /*#__PURE__*/__webpack_require__(100);
	
	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	
	
	function _curry2(fn) {
	  return function f2(a, b) {
	    switch (arguments.length) {
	      case 0:
	        return f2;
	      case 1:
	        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
	          return fn(a, _b);
	        });
	      default:
	        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
	          return fn(_a, b);
	        }) : _isPlaceholder(b) ? _curry1(function (_b) {
	          return fn(a, _b);
	        }) : fn(a, b);
	    }
	  };
	}
	module.exports = _curry2;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var _isPlaceholder = /*#__PURE__*/__webpack_require__(100);
	
	/**
	 * Optimized internal one-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	
	
	function _curry1(fn) {
	  return function f1(a) {
	    if (arguments.length === 0 || _isPlaceholder(a)) {
	      return f1;
	    } else {
	      return fn.apply(this, arguments);
	    }
	  };
	}
	module.exports = _curry1;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _isPlaceholder = /*#__PURE__*/__webpack_require__(100);
	
	/**
	 * Optimized internal three-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	
	
	function _curry3(fn) {
	  return function f3(a, b, c) {
	    switch (arguments.length) {
	      case 0:
	        return f3;
	      case 1:
	        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
	          return fn(a, _b, _c);
	        });
	      case 2:
	        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
	          return fn(_a, b, _c);
	        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
	          return fn(a, _b, _c);
	        }) : _curry1(function (_c) {
	          return fn(a, b, _c);
	        });
	      default:
	        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
	          return fn(_a, _b, c);
	        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
	          return fn(_a, b, _c);
	        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
	          return fn(a, _b, _c);
	        }) : _isPlaceholder(a) ? _curry1(function (_a) {
	          return fn(_a, b, c);
	        }) : _isPlaceholder(b) ? _curry1(function (_b) {
	          return fn(a, _b, c);
	        }) : _isPlaceholder(c) ? _curry1(function (_c) {
	          return fn(a, b, _c);
	        }) : fn(a, b, c);
	    }
	  };
	}
	module.exports = _curry3;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var _isArray = /*#__PURE__*/__webpack_require__(37);
	
	var _isTransformer = /*#__PURE__*/__webpack_require__(162);
	
	/**
	 * Returns a function that dispatches with different strategies based on the
	 * object in list position (last argument). If it is an array, executes [fn].
	 * Otherwise, if it has a function with one of the given method names, it will
	 * execute that function (functor case). Otherwise, if it is a transformer,
	 * uses transducer [xf] to return a new transformer (transducer case).
	 * Otherwise, it will default to executing [fn].
	 *
	 * @private
	 * @param {Array} methodNames properties to check for a custom implementation
	 * @param {Function} xf transducer to initialize if object is transformer
	 * @param {Function} fn default ramda implementation
	 * @return {Function} A function that dispatches on object in list position
	 */
	
	
	function _dispatchable(methodNames, xf, fn) {
	  return function () {
	    if (arguments.length === 0) {
	      return fn();
	    }
	    var args = Array.prototype.slice.call(arguments, 0);
	    var obj = args.pop();
	    if (!_isArray(obj)) {
	      var idx = 0;
	      while (idx < methodNames.length) {
	        if (typeof obj[methodNames[idx]] === 'function') {
	          return obj[methodNames[idx]].apply(obj, args);
	        }
	        idx += 1;
	      }
	      if (_isTransformer(obj)) {
	        var transducer = xf.apply(null, args);
	        return transducer(obj);
	      }
	    }
	    return fn.apply(this, arguments);
	  };
	}
	module.exports = _dispatchable;

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

	module.exports = {
	  init: function () {
	    return this.xf['@@transducer/init']();
	  },
	  result: function (result) {
	    return this.xf['@@transducer/result'](result);
	  }
	};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var _arity = /*#__PURE__*/__webpack_require__(27);
	
	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _curryN = /*#__PURE__*/__webpack_require__(97);
	
	/**
	 * Returns a curried equivalent of the provided function, with the specified
	 * arity. The curried function has two unusual capabilities. First, its
	 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
	 * the following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @since v0.5.0
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curry
	 * @example
	 *
	 *      var sumArgs = (...args) => R.sum(args);
	 *
	 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	
	
	var curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {
	  if (length === 1) {
	    return _curry1(fn);
	  }
	  return _arity(length, _curryN(length, [], fn));
	});
	module.exports = curryN;

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

	function _has(prop, obj) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	module.exports = _has;

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _map = /*#__PURE__*/__webpack_require__(101);
	
	var _reduce = /*#__PURE__*/__webpack_require__(22);
	
	var _xmap = /*#__PURE__*/__webpack_require__(547);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	var keys = /*#__PURE__*/__webpack_require__(28);
	
	/**
	 * Takes a function and
	 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
	 * applies the function to each of the functor's values, and returns
	 * a functor of the same shape.
	 *
	 * Ramda provides suitable `map` implementations for `Array` and `Object`,
	 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
	 *
	 * Dispatches to the `map` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * Also treats functions as functors and will compose them together.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Functor f => (a -> b) -> f a -> f b
	 * @param {Function} fn The function to be called on every element of the input `list`.
	 * @param {Array} list The list to be iterated over.
	 * @return {Array} The new list.
	 * @see R.transduce, R.addIndex
	 * @example
	 *
	 *      var double = x => x * 2;
	 *
	 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
	 *
	 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
	 * @symb R.map(f, [a, b]) = [f(a), f(b)]
	 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
	 * @symb R.map(f, functor_o) = functor_o.map(f)
	 */
	
	
	var map = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
	  switch (Object.prototype.toString.call(functor)) {
	    case '[object Function]':
	      return curryN(functor.length, function () {
	        return fn.call(this, functor.apply(this, arguments));
	      });
	    case '[object Object]':
	      return _reduce(function (acc, key) {
	        acc[key] = fn(functor[key]);
	        return acc;
	      }, {}, keys(functor));
	    default:
	      return _map(fn, functor);
	  }
	}));
	module.exports = map;

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _equals = /*#__PURE__*/__webpack_require__(522);
	
	/**
	 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
	 * cyclical data structures.
	 *
	 * Dispatches symmetrically to the `equals` methods of both arguments, if
	 * present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category Relation
	 * @sig a -> b -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @example
	 *
	 *      R.equals(1, 1); //=> true
	 *      R.equals(1, '1'); //=> false
	 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
	 *
	 *      var a = {}; a.v = a;
	 *      var b = {}; b.v = b;
	 *      R.equals(a, b); //=> true
	 */
	
	
	var equals = /*#__PURE__*/_curry2(function equals(a, b) {
	  return _equals(a, b, [], []);
	});
	module.exports = equals;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var _isArrayLike = /*#__PURE__*/__webpack_require__(98);
	
	var _xwrap = /*#__PURE__*/__webpack_require__(253);
	
	var bind = /*#__PURE__*/__webpack_require__(231);
	
	function _arrayReduce(xf, acc, list) {
	  var idx = 0;
	  var len = list.length;
	  while (idx < len) {
	    acc = xf['@@transducer/step'](acc, list[idx]);
	    if (acc && acc['@@transducer/reduced']) {
	      acc = acc['@@transducer/value'];
	      break;
	    }
	    idx += 1;
	  }
	  return xf['@@transducer/result'](acc);
	}
	
	function _iterableReduce(xf, acc, iter) {
	  var step = iter.next();
	  while (!step.done) {
	    acc = xf['@@transducer/step'](acc, step.value);
	    if (acc && acc['@@transducer/reduced']) {
	      acc = acc['@@transducer/value'];
	      break;
	    }
	    step = iter.next();
	  }
	  return xf['@@transducer/result'](acc);
	}
	
	function _methodReduce(xf, acc, obj, methodName) {
	  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
	}
	
	var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
	
	function _reduce(fn, acc, list) {
	  if (typeof fn === 'function') {
	    fn = _xwrap(fn);
	  }
	  if (_isArrayLike(list)) {
	    return _arrayReduce(fn, acc, list);
	  }
	  if (typeof list['fantasy-land/reduce'] === 'function') {
	    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
	  }
	  if (list[symIterator] != null) {
	    return _iterableReduce(fn, acc, list[symIterator]());
	  }
	  if (typeof list.next === 'function') {
	    return _iterableReduce(fn, acc, list);
	  }
	  if (typeof list.reduce === 'function') {
	    return _methodReduce(fn, acc, list, 'reduce');
	  }
	
	  throw new TypeError('reduce: list must be array or iterable');
	}
	module.exports = _reduce;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/**
	 * Private `concat` function to merge two array-like objects.
	 *
	 * @private
	 * @param {Array|Arguments} [set1=[]] An array-like object.
	 * @param {Array|Arguments} [set2=[]] An array-like object.
	 * @return {Array} A new, merged array.
	 * @example
	 *
	 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	 */
	function _concat(set1, set2) {
	  set1 = set1 || [];
	  set2 = set2 || [];
	  var idx;
	  var len1 = set1.length;
	  var len2 = set2.length;
	  var result = [];
	
	  idx = 0;
	  while (idx < len1) {
	    result[result.length] = set1[idx];
	    idx += 1;
	  }
	  idx = 0;
	  while (idx < len2) {
	    result[result.length] = set2[idx];
	    idx += 1;
	  }
	  return result;
	}
	module.exports = _concat;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var _checkForMethod = /*#__PURE__*/__webpack_require__(70);
	
	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Returns the elements of the given list or string (or object with a `slice`
	 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
	 *
	 * Dispatches to the `slice` method of the third argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.4
	 * @category List
	 * @sig Number -> Number -> [a] -> [a]
	 * @sig Number -> Number -> String -> String
	 * @param {Number} fromIndex The start index (inclusive).
	 * @param {Number} toIndex The end index (exclusive).
	 * @param {*} list
	 * @return {*}
	 * @example
	 *
	 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
	 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
	 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
	 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
	 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
	 */
	
	
	var slice = /*#__PURE__*/_curry3( /*#__PURE__*/_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
	  return Array.prototype.slice.call(list, fromIndex, toIndex);
	}));
	module.exports = slice;

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

	function _arity(n, fn) {
	  /* eslint-disable no-unused-vars */
	  switch (n) {
	    case 0:
	      return function () {
	        return fn.apply(this, arguments);
	      };
	    case 1:
	      return function (a0) {
	        return fn.apply(this, arguments);
	      };
	    case 2:
	      return function (a0, a1) {
	        return fn.apply(this, arguments);
	      };
	    case 3:
	      return function (a0, a1, a2) {
	        return fn.apply(this, arguments);
	      };
	    case 4:
	      return function (a0, a1, a2, a3) {
	        return fn.apply(this, arguments);
	      };
	    case 5:
	      return function (a0, a1, a2, a3, a4) {
	        return fn.apply(this, arguments);
	      };
	    case 6:
	      return function (a0, a1, a2, a3, a4, a5) {
	        return fn.apply(this, arguments);
	      };
	    case 7:
	      return function (a0, a1, a2, a3, a4, a5, a6) {
	        return fn.apply(this, arguments);
	      };
	    case 8:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	        return fn.apply(this, arguments);
	      };
	    case 9:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	        return fn.apply(this, arguments);
	      };
	    case 10:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	        return fn.apply(this, arguments);
	      };
	    default:
	      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
	  }
	}
	module.exports = _arity;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _has = /*#__PURE__*/__webpack_require__(15);
	
	var _isArguments = /*#__PURE__*/__webpack_require__(248);
	
	// cover IE < 9 keys issues
	
	
	var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
	var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	// Safari bug
	var hasArgsEnumBug = /*#__PURE__*/function () {
	  'use strict';
	
	  return arguments.propertyIsEnumerable('length');
	}();
	
	var contains = function contains(list, item) {
	  var idx = 0;
	  while (idx < list.length) {
	    if (list[idx] === item) {
	      return true;
	    }
	    idx += 1;
	  }
	  return false;
	};
	
	/**
	 * Returns a list containing the names of all the enumerable own properties of
	 * the supplied object.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> [k]
	 * @param {Object} obj The object to extract properties from
	 * @return {Array} An array of the object's own properties.
	 * @see R.keysIn, R.values
	 * @example
	 *
	 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
	 */
	var _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys(obj) {
	  return Object(obj) !== obj ? [] : Object.keys(obj);
	} : function keys(obj) {
	  if (Object(obj) !== obj) {
	    return [];
	  }
	  var prop, nIdx;
	  var ks = [];
	  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
	  for (prop in obj) {
	    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
	      ks[ks.length] = prop;
	    }
	  }
	  if (hasEnumBug) {
	    nIdx = nonEnumerableProps.length - 1;
	    while (nIdx >= 0) {
	      prop = nonEnumerableProps[nIdx];
	      if (_has(prop, obj) && !contains(ks, prop)) {
	        ks[ks.length] = prop;
	      }
	      nIdx -= 1;
	    }
	  }
	  return ks;
	};
	var keys = /*#__PURE__*/_curry1(_keys);
	module.exports = keys;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var _reduce = /*#__PURE__*/__webpack_require__(22);
	
	/**
	 * Returns a single item by iterating through the list, successively calling
	 * the iterator function and passing it an accumulator value and the current
	 * value from the array, and then passing the result to the next call.
	 *
	 * The iterator function receives two values: *(acc, value)*. It may use
	 * [`R.reduced`](#reduced) to shortcut the iteration.
	 *
	 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
	 * is *(value, acc)*.
	 *
	 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
	 * arrays), unlike the native `Array.prototype.reduce` method. For more details
	 * on this behavior, see:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
	 *
	 * Dispatches to the `reduce` method of the third argument, if present. When
	 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
	 * shortcuting, as this is not implemented by `reduce`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig ((a, b) -> a) -> a -> [b] -> a
	 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	 *        current element from the array.
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.reduced, R.addIndex, R.reduceRight
	 * @example
	 *
	 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
	 *      //          -               -10
	 *      //         / \              / \
	 *      //        -   4           -6   4
	 *      //       / \              / \
	 *      //      -   3   ==>     -3   3
	 *      //     / \              / \
	 *      //    -   2           -1   2
	 *      //   / \              / \
	 *      //  0   1            0   1
	 *
	 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
	 */
	
	
	var reduce = /*#__PURE__*/_curry3(_reduce);
	module.exports = reduce;

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {};
	module.exports.F = /*#__PURE__*/__webpack_require__(457);
	module.exports.T = /*#__PURE__*/__webpack_require__(458);
	module.exports.__ = /*#__PURE__*/__webpack_require__(459);
	module.exports.add = /*#__PURE__*/__webpack_require__(93);
	module.exports.addIndex = /*#__PURE__*/__webpack_require__(460);
	module.exports.adjust = /*#__PURE__*/__webpack_require__(226);
	module.exports.all = /*#__PURE__*/__webpack_require__(461);
	module.exports.allPass = /*#__PURE__*/__webpack_require__(462);
	module.exports.always = /*#__PURE__*/__webpack_require__(55);
	module.exports.and = /*#__PURE__*/__webpack_require__(227);
	module.exports.any = /*#__PURE__*/__webpack_require__(228);
	module.exports.anyPass = /*#__PURE__*/__webpack_require__(463);
	module.exports.ap = /*#__PURE__*/__webpack_require__(150);
	module.exports.aperture = /*#__PURE__*/__webpack_require__(464);
	module.exports.append = /*#__PURE__*/__webpack_require__(465);
	module.exports.apply = /*#__PURE__*/__webpack_require__(229);
	module.exports.applySpec = /*#__PURE__*/__webpack_require__(466);
	module.exports.applyTo = /*#__PURE__*/__webpack_require__(467);
	module.exports.ascend = /*#__PURE__*/__webpack_require__(468);
	module.exports.assoc = /*#__PURE__*/__webpack_require__(94);
	module.exports.assocPath = /*#__PURE__*/__webpack_require__(230);
	module.exports.binary = /*#__PURE__*/__webpack_require__(469);
	module.exports.bind = /*#__PURE__*/__webpack_require__(231);
	module.exports.both = /*#__PURE__*/__webpack_require__(470);
	module.exports.call = /*#__PURE__*/__webpack_require__(471);
	module.exports.chain = /*#__PURE__*/__webpack_require__(151);
	module.exports.clamp = /*#__PURE__*/__webpack_require__(472);
	module.exports.clone = /*#__PURE__*/__webpack_require__(473);
	module.exports.comparator = /*#__PURE__*/__webpack_require__(474);
	module.exports.complement = /*#__PURE__*/__webpack_require__(475);
	module.exports.compose = /*#__PURE__*/__webpack_require__(152);
	module.exports.composeK = /*#__PURE__*/__webpack_require__(232);
	module.exports.composeP = /*#__PURE__*/__webpack_require__(476);
	module.exports.concat = /*#__PURE__*/__webpack_require__(153);
	module.exports.cond = /*#__PURE__*/__webpack_require__(477);
	module.exports.construct = /*#__PURE__*/__webpack_require__(478);
	module.exports.constructN = /*#__PURE__*/__webpack_require__(233);
	module.exports.contains = /*#__PURE__*/__webpack_require__(479);
	module.exports.converge = /*#__PURE__*/__webpack_require__(234);
	module.exports.countBy = /*#__PURE__*/__webpack_require__(480);
	module.exports.curry = /*#__PURE__*/__webpack_require__(154);
	module.exports.curryN = /*#__PURE__*/__webpack_require__(13);
	module.exports.dec = /*#__PURE__*/__webpack_require__(481);
	module.exports.defaultTo = /*#__PURE__*/__webpack_require__(235);
	module.exports.descend = /*#__PURE__*/__webpack_require__(482);
	module.exports.difference = /*#__PURE__*/__webpack_require__(236);
	module.exports.differenceWith = /*#__PURE__*/__webpack_require__(237);
	module.exports.dissoc = /*#__PURE__*/__webpack_require__(238);
	module.exports.dissocPath = /*#__PURE__*/__webpack_require__(483);
	module.exports.divide = /*#__PURE__*/__webpack_require__(484);
	module.exports.drop = /*#__PURE__*/__webpack_require__(239);
	module.exports.dropLast = /*#__PURE__*/__webpack_require__(485);
	module.exports.dropLastWhile = /*#__PURE__*/__webpack_require__(486);
	module.exports.dropRepeats = /*#__PURE__*/__webpack_require__(487);
	module.exports.dropRepeatsWith = /*#__PURE__*/__webpack_require__(240);
	module.exports.dropWhile = /*#__PURE__*/__webpack_require__(488);
	module.exports.either = /*#__PURE__*/__webpack_require__(489);
	module.exports.empty = /*#__PURE__*/__webpack_require__(241);
	module.exports.endsWith = /*#__PURE__*/__webpack_require__(490);
	module.exports.eqBy = /*#__PURE__*/__webpack_require__(491);
	module.exports.eqProps = /*#__PURE__*/__webpack_require__(492);
	module.exports.equals = /*#__PURE__*/__webpack_require__(21);
	module.exports.evolve = /*#__PURE__*/__webpack_require__(493);
	module.exports.filter = /*#__PURE__*/__webpack_require__(155);
	module.exports.find = /*#__PURE__*/__webpack_require__(494);
	module.exports.findIndex = /*#__PURE__*/__webpack_require__(495);
	module.exports.findLast = /*#__PURE__*/__webpack_require__(496);
	module.exports.findLastIndex = /*#__PURE__*/__webpack_require__(497);
	module.exports.flatten = /*#__PURE__*/__webpack_require__(498);
	module.exports.flip = /*#__PURE__*/__webpack_require__(95);
	module.exports.forEach = /*#__PURE__*/__webpack_require__(499);
	module.exports.forEachObjIndexed = /*#__PURE__*/__webpack_require__(500);
	module.exports.fromPairs = /*#__PURE__*/__webpack_require__(501);
	module.exports.groupBy = /*#__PURE__*/__webpack_require__(502);
	module.exports.groupWith = /*#__PURE__*/__webpack_require__(503);
	module.exports.gt = /*#__PURE__*/__webpack_require__(504);
	module.exports.gte = /*#__PURE__*/__webpack_require__(505);
	module.exports.has = /*#__PURE__*/__webpack_require__(506);
	module.exports.hasIn = /*#__PURE__*/__webpack_require__(507);
	module.exports.head = /*#__PURE__*/__webpack_require__(508);
	module.exports.identical = /*#__PURE__*/__webpack_require__(242);
	module.exports.identity = /*#__PURE__*/__webpack_require__(156);
	module.exports.ifElse = /*#__PURE__*/__webpack_require__(509);
	module.exports.inc = /*#__PURE__*/__webpack_require__(510);
	module.exports.indexBy = /*#__PURE__*/__webpack_require__(511);
	module.exports.indexOf = /*#__PURE__*/__webpack_require__(512);
	module.exports.init = /*#__PURE__*/__webpack_require__(513);
	module.exports.innerJoin = /*#__PURE__*/__webpack_require__(514);
	module.exports.insert = /*#__PURE__*/__webpack_require__(515);
	module.exports.insertAll = /*#__PURE__*/__webpack_require__(516);
	module.exports.intersection = /*#__PURE__*/__webpack_require__(552);
	module.exports.intersperse = /*#__PURE__*/__webpack_require__(553);
	module.exports.into = /*#__PURE__*/__webpack_require__(554);
	module.exports.invert = /*#__PURE__*/__webpack_require__(555);
	module.exports.invertObj = /*#__PURE__*/__webpack_require__(556);
	module.exports.invoker = /*#__PURE__*/__webpack_require__(72);
	module.exports.is = /*#__PURE__*/__webpack_require__(254);
	module.exports.isEmpty = /*#__PURE__*/__webpack_require__(557);
	module.exports.isNil = /*#__PURE__*/__webpack_require__(255);
	module.exports.join = /*#__PURE__*/__webpack_require__(558);
	module.exports.juxt = /*#__PURE__*/__webpack_require__(256);
	module.exports.keys = /*#__PURE__*/__webpack_require__(28);
	module.exports.keysIn = /*#__PURE__*/__webpack_require__(559);
	module.exports.last = /*#__PURE__*/__webpack_require__(257);
	module.exports.lastIndexOf = /*#__PURE__*/__webpack_require__(560);
	module.exports.length = /*#__PURE__*/__webpack_require__(258);
	module.exports.lens = /*#__PURE__*/__webpack_require__(102);
	module.exports.lensIndex = /*#__PURE__*/__webpack_require__(561);
	module.exports.lensPath = /*#__PURE__*/__webpack_require__(562);
	module.exports.lensProp = /*#__PURE__*/__webpack_require__(563);
	module.exports.lift = /*#__PURE__*/__webpack_require__(103);
	module.exports.liftN = /*#__PURE__*/__webpack_require__(259);
	module.exports.lt = /*#__PURE__*/__webpack_require__(564);
	module.exports.lte = /*#__PURE__*/__webpack_require__(565);
	module.exports.map = /*#__PURE__*/__webpack_require__(17);
	module.exports.mapAccum = /*#__PURE__*/__webpack_require__(566);
	module.exports.mapAccumRight = /*#__PURE__*/__webpack_require__(567);
	module.exports.mapObjIndexed = /*#__PURE__*/__webpack_require__(568);
	module.exports.match = /*#__PURE__*/__webpack_require__(569);
	module.exports.mathMod = /*#__PURE__*/__webpack_require__(570);
	module.exports.max = /*#__PURE__*/__webpack_require__(57);
	module.exports.maxBy = /*#__PURE__*/__webpack_require__(571);
	module.exports.mean = /*#__PURE__*/__webpack_require__(260);
	module.exports.median = /*#__PURE__*/__webpack_require__(572);
	module.exports.memoize = /*#__PURE__*/__webpack_require__(573);
	module.exports.memoizeWith = /*#__PURE__*/__webpack_require__(261);
	module.exports.merge = /*#__PURE__*/__webpack_require__(574);
	module.exports.mergeAll = /*#__PURE__*/__webpack_require__(575);
	module.exports.mergeDeepLeft = /*#__PURE__*/__webpack_require__(576);
	module.exports.mergeDeepRight = /*#__PURE__*/__webpack_require__(577);
	module.exports.mergeDeepWith = /*#__PURE__*/__webpack_require__(578);
	module.exports.mergeDeepWithKey = /*#__PURE__*/__webpack_require__(104);
	module.exports.mergeWith = /*#__PURE__*/__webpack_require__(579);
	module.exports.mergeWithKey = /*#__PURE__*/__webpack_require__(163);
	module.exports.min = /*#__PURE__*/__webpack_require__(580);
	module.exports.minBy = /*#__PURE__*/__webpack_require__(581);
	module.exports.modulo = /*#__PURE__*/__webpack_require__(582);
	module.exports.multiply = /*#__PURE__*/__webpack_require__(262);
	module.exports.nAry = /*#__PURE__*/__webpack_require__(105);
	module.exports.negate = /*#__PURE__*/__webpack_require__(583);
	module.exports.none = /*#__PURE__*/__webpack_require__(584);
	module.exports.not = /*#__PURE__*/__webpack_require__(263);
	module.exports.nth = /*#__PURE__*/__webpack_require__(73);
	module.exports.nthArg = /*#__PURE__*/__webpack_require__(585);
	module.exports.o = /*#__PURE__*/__webpack_require__(586);
	module.exports.objOf = /*#__PURE__*/__webpack_require__(264);
	module.exports.of = /*#__PURE__*/__webpack_require__(587);
	module.exports.omit = /*#__PURE__*/__webpack_require__(588);
	module.exports.once = /*#__PURE__*/__webpack_require__(589);
	module.exports.or = /*#__PURE__*/__webpack_require__(265);
	module.exports.over = /*#__PURE__*/__webpack_require__(266);
	module.exports.pair = /*#__PURE__*/__webpack_require__(590);
	module.exports.partial = /*#__PURE__*/__webpack_require__(591);
	module.exports.partialRight = /*#__PURE__*/__webpack_require__(592);
	module.exports.partition = /*#__PURE__*/__webpack_require__(593);
	module.exports.path = /*#__PURE__*/__webpack_require__(58);
	module.exports.pathEq = /*#__PURE__*/__webpack_require__(594);
	module.exports.pathOr = /*#__PURE__*/__webpack_require__(595);
	module.exports.pathSatisfies = /*#__PURE__*/__webpack_require__(596);
	module.exports.pick = /*#__PURE__*/__webpack_require__(597);
	module.exports.pickAll = /*#__PURE__*/__webpack_require__(267);
	module.exports.pickBy = /*#__PURE__*/__webpack_require__(598);
	module.exports.pipe = /*#__PURE__*/__webpack_require__(268);
	module.exports.pipeK = /*#__PURE__*/__webpack_require__(599);
	module.exports.pipeP = /*#__PURE__*/__webpack_require__(269);
	module.exports.pluck = /*#__PURE__*/__webpack_require__(74);
	module.exports.prepend = /*#__PURE__*/__webpack_require__(270);
	module.exports.product = /*#__PURE__*/__webpack_require__(600);
	module.exports.project = /*#__PURE__*/__webpack_require__(601);
	module.exports.prop = /*#__PURE__*/__webpack_require__(164);
	module.exports.propEq = /*#__PURE__*/__webpack_require__(602);
	module.exports.propIs = /*#__PURE__*/__webpack_require__(603);
	module.exports.propOr = /*#__PURE__*/__webpack_require__(604);
	module.exports.propSatisfies = /*#__PURE__*/__webpack_require__(605);
	module.exports.props = /*#__PURE__*/__webpack_require__(606);
	module.exports.range = /*#__PURE__*/__webpack_require__(607);
	module.exports.reduce = /*#__PURE__*/__webpack_require__(29);
	module.exports.reduceBy = /*#__PURE__*/__webpack_require__(106);
	module.exports.reduceRight = /*#__PURE__*/__webpack_require__(271);
	module.exports.reduceWhile = /*#__PURE__*/__webpack_require__(608);
	module.exports.reduced = /*#__PURE__*/__webpack_require__(609);
	module.exports.reject = /*#__PURE__*/__webpack_require__(107);
	module.exports.remove = /*#__PURE__*/__webpack_require__(272);
	module.exports.repeat = /*#__PURE__*/__webpack_require__(610);
	module.exports.replace = /*#__PURE__*/__webpack_require__(611);
	module.exports.reverse = /*#__PURE__*/__webpack_require__(108);
	module.exports.scan = /*#__PURE__*/__webpack_require__(612);
	module.exports.sequence = /*#__PURE__*/__webpack_require__(273);
	module.exports.set = /*#__PURE__*/__webpack_require__(613);
	module.exports.slice = /*#__PURE__*/__webpack_require__(24);
	module.exports.sort = /*#__PURE__*/__webpack_require__(614);
	module.exports.sortBy = /*#__PURE__*/__webpack_require__(615);
	module.exports.sortWith = /*#__PURE__*/__webpack_require__(616);
	module.exports.split = /*#__PURE__*/__webpack_require__(617);
	module.exports.splitAt = /*#__PURE__*/__webpack_require__(618);
	module.exports.splitEvery = /*#__PURE__*/__webpack_require__(619);
	module.exports.splitWhen = /*#__PURE__*/__webpack_require__(620);
	module.exports.startsWith = /*#__PURE__*/__webpack_require__(621);
	module.exports.subtract = /*#__PURE__*/__webpack_require__(622);
	module.exports.sum = /*#__PURE__*/__webpack_require__(274);
	module.exports.symmetricDifference = /*#__PURE__*/__webpack_require__(623);
	module.exports.symmetricDifferenceWith = /*#__PURE__*/__webpack_require__(624);
	module.exports.tail = /*#__PURE__*/__webpack_require__(165);
	module.exports.take = /*#__PURE__*/__webpack_require__(166);
	module.exports.takeLast = /*#__PURE__*/__webpack_require__(275);
	module.exports.takeLastWhile = /*#__PURE__*/__webpack_require__(625);
	module.exports.takeWhile = /*#__PURE__*/__webpack_require__(626);
	module.exports.tap = /*#__PURE__*/__webpack_require__(627);
	module.exports.test = /*#__PURE__*/__webpack_require__(628);
	module.exports.times = /*#__PURE__*/__webpack_require__(276);
	module.exports.toLower = /*#__PURE__*/__webpack_require__(629);
	module.exports.toPairs = /*#__PURE__*/__webpack_require__(630);
	module.exports.toPairsIn = /*#__PURE__*/__webpack_require__(631);
	module.exports.toString = /*#__PURE__*/__webpack_require__(75);
	module.exports.toUpper = /*#__PURE__*/__webpack_require__(632);
	module.exports.transduce = /*#__PURE__*/__webpack_require__(633);
	module.exports.transpose = /*#__PURE__*/__webpack_require__(634);
	module.exports.traverse = /*#__PURE__*/__webpack_require__(635);
	module.exports.trim = /*#__PURE__*/__webpack_require__(636);
	module.exports.tryCatch = /*#__PURE__*/__webpack_require__(637);
	module.exports.type = /*#__PURE__*/__webpack_require__(167);
	module.exports.unapply = /*#__PURE__*/__webpack_require__(638);
	module.exports.unary = /*#__PURE__*/__webpack_require__(639);
	module.exports.uncurryN = /*#__PURE__*/__webpack_require__(640);
	module.exports.unfold = /*#__PURE__*/__webpack_require__(641);
	module.exports.union = /*#__PURE__*/__webpack_require__(642);
	module.exports.unionWith = /*#__PURE__*/__webpack_require__(643);
	module.exports.uniq = /*#__PURE__*/__webpack_require__(168);
	module.exports.uniqBy = /*#__PURE__*/__webpack_require__(277);
	module.exports.uniqWith = /*#__PURE__*/__webpack_require__(278);
	module.exports.unless = /*#__PURE__*/__webpack_require__(644);
	module.exports.unnest = /*#__PURE__*/__webpack_require__(645);
	module.exports.until = /*#__PURE__*/__webpack_require__(646);
	module.exports.update = /*#__PURE__*/__webpack_require__(169);
	module.exports.useWith = /*#__PURE__*/__webpack_require__(279);
	module.exports.values = /*#__PURE__*/__webpack_require__(280);
	module.exports.valuesIn = /*#__PURE__*/__webpack_require__(647);
	module.exports.view = /*#__PURE__*/__webpack_require__(648);
	module.exports.when = /*#__PURE__*/__webpack_require__(649);
	module.exports.where = /*#__PURE__*/__webpack_require__(281);
	module.exports.whereEq = /*#__PURE__*/__webpack_require__(650);
	module.exports.without = /*#__PURE__*/__webpack_require__(651);
	module.exports.xprod = /*#__PURE__*/__webpack_require__(652);
	module.exports.zip = /*#__PURE__*/__webpack_require__(653);
	module.exports.zipObj = /*#__PURE__*/__webpack_require__(654);
	module.exports.zipWith = /*#__PURE__*/__webpack_require__(655);

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.readFiles = exports.hide = exports.show = exports.scriptAsync = exports.resizeChart = exports.idleCallback = exports.addDownloadImage = exports.domainTransducer = exports.getLegendNodes = exports.maxList = exports.off = exports.minList = undefined;
	
	var _ramda = __webpack_require__(32);
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var minList = exports.minList = (0, _ramda.reduce)(_ramda.min, +Infinity);
	var off = exports.off = (0, _ramda.multiply)(0.8);
	var maxList = exports.maxList = (0, _ramda.reduce)(_ramda.max, -Infinity);
	var getLegendNodes = exports.getLegendNodes = function getLegendNodes(chartSelector) {
	    return Array.from(document.querySelectorAll(chartSelector + ' text[text-anchor="start"]'));
	};
	var domainTransducer = exports.domainTransducer = (0, _ramda.compose)((0, _ramda.pluck)('url'), (0, _ramda.map)((0, _ramda.pipe)((0, _ramda.split)('/'), (0, _ramda.nth)(2))));
	
	var addDownloadImage = exports.addDownloadImage = function addDownloadImage(chart, idDownload) {
	    window.google.visualization.events.addListener(chart, 'ready', function () {
	        document.getElementById(idDownload).href = chart.getImageURI();
	    });
	};
	
	var idleCallback = exports.idleCallback = function idleCallback(cb) {
	    if (window.requestIdleCallback) {
	        requestIdleCallback(cb);
	    } else {
	        requestAnimationFrame(cb);
	    }
	};
	
	var resizeChart = exports.resizeChart = function resizeChart(chart, data, options) {
	    window.resize = function () {
	        chart.draw(data, options);
	    };
	};
	
	var scriptAsync = exports.scriptAsync = function scriptAsync(u, c) {
	    var d = document,
	        t = 'script';
	    var o = d.createElement(t);
	    var s = d.getElementsByTagName(t)[0];
	    o.src = '//' + u;
	    if (c) {
	        o.addEventListener('load', function (e) {
	            c(null, e);
	        }, false);
	    }
	    s.parentNode.insertBefore(o, s);
	};
	
	var show = exports.show = function show(selector) {
	    return document.querySelectorAll(selector)[0].classList.remove('hidden');
	};
	
	var hide = exports.hide = function hide(selector) {
	    return document.querySelectorAll(selector)[0].classList.add('hidden');
	};
	
	var readFiles = exports.readFiles = function () {
	    var _ref = _asyncToGenerator(function* (files) {
	        return Promise.all(Array.from(files).map(function (el) {
	            return new Promise(function (res, rej) {
	                var reader = new FileReader();
	                reader.onload = function () {
	                    try {
	                        var result = JSON.parse(reader.result);
	                        res(result);
	                    } catch (e) {
	                        rej(e);
	                    }
	                };
	                reader.readAsText(el);
	            });
	        }));
	    });
	
	    return function readFiles(_x) {
	        return _ref.apply(this, arguments);
	    };
	}();

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

	/**
	 * Tests whether or not an object is an array.
	 *
	 * @private
	 * @param {*} val The object to test.
	 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
	 * @example
	 *
	 *      _isArray([]); //=> true
	 *      _isArray(null); //=> false
	 *      _isArray({}); //=> false
	 */
	module.exports = Array.isArray || function _isArray(val) {
	  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
	};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	function _reduced(x) {
	  return x && x['@@transducer/reduced'] ? x : {
	    '@@transducer/value': x,
	    '@@transducer/reduced': true
	  };
	}
	module.exports = _reduced;

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Returns a function that always returns the given value. Note that for
	 * non-primitives the value returned is a reference to the original value.
	 *
	 * This function is known as `const`, `constant`, or `K` (for K combinator) in
	 * other languages and libraries.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig a -> (* -> a)
	 * @param {*} val The value to wrap in a function
	 * @return {Function} A Function :: * -> val.
	 * @example
	 *
	 *      var t = R.always('Tee');
	 *      t(); //=> 'Tee'
	 */
	
	
	var always = /*#__PURE__*/_curry1(function always(val) {
	  return function () {
	    return val;
	  };
	});
	module.exports = always;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var _indexOf = /*#__PURE__*/__webpack_require__(247);
	
	function _contains(a, list) {
	  return _indexOf(list, a, 0) >= 0;
	}
	module.exports = _contains;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns the larger of its two arguments.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> a
	 * @param {*} a
	 * @param {*} b
	 * @return {*}
	 * @see R.maxBy, R.min
	 * @example
	 *
	 *      R.max(789, 123); //=> 789
	 *      R.max('a', 'b'); //=> 'b'
	 */
	
	
	var max = /*#__PURE__*/_curry2(function max(a, b) {
	  return b > a ? b : a;
	});
	module.exports = max;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Retrieve the value at a given path.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.0
	 * @category Object
	 * @typedefn Idx = String | Int
	 * @sig [Idx] -> {a} -> a | Undefined
	 * @param {Array} path The path to use.
	 * @param {Object} obj The object to retrieve the nested property from.
	 * @return {*} The data at `path`.
	 * @see R.prop
	 * @example
	 *
	 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
	 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
	 */
	
	
	var path = /*#__PURE__*/_curry2(function path(paths, obj) {
	  var val = obj;
	  var idx = 0;
	  while (idx < paths.length) {
	    if (val == null) {
	      return;
	    }
	    val = val[paths[idx]];
	    idx += 1;
	  }
	  return val;
	});
	module.exports = path;

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var _isArray = /*#__PURE__*/__webpack_require__(37);
	
	/**
	 * This checks whether a function has a [methodname] function. If it isn't an
	 * array it will execute that function otherwise it will default to the ramda
	 * implementation.
	 *
	 * @private
	 * @param {Function} fn ramda implemtation
	 * @param {String} methodname property to check for a custom implementation
	 * @return {Object} Whatever the return value of the method is.
	 */
	
	
	function _checkForMethod(methodname, fn) {
	  return function () {
	    var length = arguments.length;
	    if (length === 0) {
	      return fn();
	    }
	    var obj = arguments[length - 1];
	    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
	  };
	}
	module.exports = _checkForMethod;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	function _isString(x) {
	  return Object.prototype.toString.call(x) === '[object String]';
	}
	module.exports = _isString;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _isFunction = /*#__PURE__*/__webpack_require__(99);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	var toString = /*#__PURE__*/__webpack_require__(75);
	
	/**
	 * Turns a named method with a specified arity into a function that can be
	 * called directly supplied with arguments and a target object.
	 *
	 * The returned function is curried and accepts `arity + 1` parameters where
	 * the final parameter is the target object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
	 * @param {Number} arity Number of arguments the returned function should take
	 *        before the target object.
	 * @param {String} method Name of the method to call.
	 * @return {Function} A new curried function.
	 * @see R.construct
	 * @example
	 *
	 *      var sliceFrom = R.invoker(1, 'slice');
	 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
	 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
	 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
	 * @symb R.invoker(0, 'method')(o) = o['method']()
	 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
	 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
	 */
	
	
	var invoker = /*#__PURE__*/_curry2(function invoker(arity, method) {
	  return curryN(arity + 1, function () {
	    var target = arguments[arity];
	    if (target != null && _isFunction(target[method])) {
	      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
	    }
	    throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
	  });
	});
	module.exports = invoker;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _isString = /*#__PURE__*/__webpack_require__(71);
	
	/**
	 * Returns the nth element of the given list or string. If n is negative the
	 * element at index length + n is returned.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Number -> [a] -> a | Undefined
	 * @sig Number -> String -> String
	 * @param {Number} offset
	 * @param {*} list
	 * @return {*}
	 * @example
	 *
	 *      var list = ['foo', 'bar', 'baz', 'quux'];
	 *      R.nth(1, list); //=> 'bar'
	 *      R.nth(-1, list); //=> 'quux'
	 *      R.nth(-99, list); //=> undefined
	 *
	 *      R.nth(2, 'abc'); //=> 'c'
	 *      R.nth(3, 'abc'); //=> ''
	 * @symb R.nth(-1, [a, b, c]) = c
	 * @symb R.nth(0, [a, b, c]) = a
	 * @symb R.nth(1, [a, b, c]) = b
	 */
	
	
	var nth = /*#__PURE__*/_curry2(function nth(offset, list) {
	  var idx = offset < 0 ? list.length + offset : offset;
	  return _isString(list) ? list.charAt(idx) : list[idx];
	});
	module.exports = nth;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var map = /*#__PURE__*/__webpack_require__(17);
	
	var prop = /*#__PURE__*/__webpack_require__(164);
	
	/**
	 * Returns a new list by plucking the same named property off all objects in
	 * the list supplied.
	 *
	 * `pluck` will work on
	 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
	 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Functor f => k -> f {k: v} -> f v
	 * @param {Number|String} key The key name to pluck off of each object.
	 * @param {Array} f The array or functor to consider.
	 * @return {Array} The list of values for the given key.
	 * @see R.props
	 * @example
	 *
	 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
	 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
	 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
	 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
	 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
	 */
	
	
	var pluck = /*#__PURE__*/_curry2(function pluck(p, list) {
	  return map(prop(p), list);
	});
	module.exports = pluck;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _toString = /*#__PURE__*/__webpack_require__(534);
	
	/**
	 * Returns the string representation of the given value. `eval`'ing the output
	 * should result in a value equivalent to the input value. Many of the built-in
	 * `toString` methods do not satisfy this requirement.
	 *
	 * If the given value is an `[object Object]` with a `toString` method other
	 * than `Object.prototype.toString`, this method is invoked with no arguments
	 * to produce the return value. This means user-defined constructor functions
	 * can provide a suitable `toString` method. For example:
	 *
	 *     function Point(x, y) {
	 *       this.x = x;
	 *       this.y = y;
	 *     }
	 *
	 *     Point.prototype.toString = function() {
	 *       return 'new Point(' + this.x + ', ' + this.y + ')';
	 *     };
	 *
	 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category String
	 * @sig * -> String
	 * @param {*} val
	 * @return {String}
	 * @example
	 *
	 *      R.toString(42); //=> '42'
	 *      R.toString('abc'); //=> '"abc"'
	 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
	 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
	 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
	 */
	
	
	var toString = /*#__PURE__*/_curry1(function toString(val) {
	  return _toString(val, []);
	});
	module.exports = toString;

/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Adds two values.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a
	 * @param {Number} b
	 * @return {Number}
	 * @see R.subtract
	 * @example
	 *
	 *      R.add(2, 3);       //=>  5
	 *      R.add(7)(10);      //=> 17
	 */
	
	
	var add = /*#__PURE__*/_curry2(function add(a, b) {
	  return Number(a) + Number(b);
	});
	module.exports = add;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Makes a shallow clone of an object, setting or overriding the specified
	 * property with the given value. Note that this copies and flattens prototype
	 * properties onto the new object as well. All non-primitive properties are
	 * copied by reference.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Object
	 * @sig String -> a -> {k: v} -> {k: v}
	 * @param {String} prop The property name to set
	 * @param {*} val The new value
	 * @param {Object} obj The object to clone
	 * @return {Object} A new object equivalent to the original except for the changed property.
	 * @see R.dissoc
	 * @example
	 *
	 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
	 */
	
	
	var assoc = /*#__PURE__*/_curry3(function assoc(prop, val, obj) {
	  var result = {};
	  for (var p in obj) {
	    result[p] = obj[p];
	  }
	  result[prop] = val;
	  return result;
	});
	module.exports = assoc;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	/**
	 * Returns a new function much like the supplied one, except that the first two
	 * arguments' order is reversed.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
	 * @param {Function} fn The function to invoke with its first two parameters reversed.
	 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
	 * @example
	 *
	 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
	 *
	 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
	 *
	 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
	 * @symb R.flip(f)(a, b, c) = f(b, a, c)
	 */
	
	
	var flip = /*#__PURE__*/_curry1(function flip(fn) {
	  return curryN(fn.length, function (a, b) {
	    var args = Array.prototype.slice.call(arguments, 0);
	    args[0] = b;
	    args[1] = a;
	    return fn.apply(this, args);
	  });
	});
	module.exports = flip;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	function _containsWith(pred, x, list) {
	  var idx = 0;
	  var len = list.length;
	
	  while (idx < len) {
	    if (pred(x, list[idx])) {
	      return true;
	    }
	    idx += 1;
	  }
	  return false;
	}
	module.exports = _containsWith;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	var _arity = /*#__PURE__*/__webpack_require__(27);
	
	var _isPlaceholder = /*#__PURE__*/__webpack_require__(100);
	
	/**
	 * Internal curryN function.
	 *
	 * @private
	 * @category Function
	 * @param {Number} length The arity of the curried function.
	 * @param {Array} received An array of arguments received thus far.
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	
	
	function _curryN(length, received, fn) {
	  return function () {
	    var combined = [];
	    var argsIdx = 0;
	    var left = length;
	    var combinedIdx = 0;
	    while (combinedIdx < received.length || argsIdx < arguments.length) {
	      var result;
	      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
	        result = received[combinedIdx];
	      } else {
	        result = arguments[argsIdx];
	        argsIdx += 1;
	      }
	      combined[combinedIdx] = result;
	      if (!_isPlaceholder(result)) {
	        left -= 1;
	      }
	      combinedIdx += 1;
	    }
	    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
	  };
	}
	module.exports = _curryN;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _isArray = /*#__PURE__*/__webpack_require__(37);
	
	var _isString = /*#__PURE__*/__webpack_require__(71);
	
	/**
	 * Tests whether or not an object is similar to an array.
	 *
	 * @private
	 * @category Type
	 * @category List
	 * @sig * -> Boolean
	 * @param {*} x The object to test.
	 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
	 * @example
	 *
	 *      _isArrayLike([]); //=> true
	 *      _isArrayLike(true); //=> false
	 *      _isArrayLike({}); //=> false
	 *      _isArrayLike({length: 10}); //=> false
	 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
	 */
	
	
	var _isArrayLike = /*#__PURE__*/_curry1(function isArrayLike(x) {
	  if (_isArray(x)) {
	    return true;
	  }
	  if (!x) {
	    return false;
	  }
	  if (typeof x !== 'object') {
	    return false;
	  }
	  if (_isString(x)) {
	    return false;
	  }
	  if (x.nodeType === 1) {
	    return !!x.length;
	  }
	  if (x.length === 0) {
	    return true;
	  }
	  if (x.length > 0) {
	    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
	  }
	  return false;
	});
	module.exports = _isArrayLike;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	function _isFunction(x) {
	  return Object.prototype.toString.call(x) === '[object Function]';
	}
	module.exports = _isFunction;

/***/ }),
/* 100 */
/***/ (function(module, exports) {

	function _isPlaceholder(a) {
	       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
	}
	module.exports = _isPlaceholder;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	function _map(fn, functor) {
	  var idx = 0;
	  var len = functor.length;
	  var result = Array(len);
	  while (idx < len) {
	    result[idx] = fn(functor[idx]);
	    idx += 1;
	  }
	  return result;
	}
	module.exports = _map;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var map = /*#__PURE__*/__webpack_require__(17);
	
	/**
	 * Returns a lens for the given getter and setter functions. The getter "gets"
	 * the value of the focus; the setter "sets" the value of the focus. The setter
	 * should not mutate the data structure.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
	 * @param {Function} getter
	 * @param {Function} setter
	 * @return {Lens}
	 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
	 * @example
	 *
	 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
	 *
	 *      R.view(xLens, {x: 1, y: 2});            //=> 1
	 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	 */
	
	
	var lens = /*#__PURE__*/_curry2(function lens(getter, setter) {
	  return function (toFunctorFn) {
	    return function (target) {
	      return map(function (focus) {
	        return setter(focus, target);
	      }, toFunctorFn(getter(target)));
	    };
	  };
	});
	module.exports = lens;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var liftN = /*#__PURE__*/__webpack_require__(259);
	
	/**
	 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
	 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Function
	 * @sig (*... -> *) -> ([*]... -> [*])
	 * @param {Function} fn The function to lift into higher context
	 * @return {Function} The lifted function.
	 * @see R.liftN
	 * @example
	 *
	 *      var madd3 = R.lift((a, b, c) => a + b + c);
	 *
	 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	 *
	 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
	 *
	 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
	 */
	
	
	var lift = /*#__PURE__*/_curry1(function lift(fn) {
	  return liftN(fn.length, fn);
	});
	module.exports = lift;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var _isObject = /*#__PURE__*/__webpack_require__(161);
	
	var mergeWithKey = /*#__PURE__*/__webpack_require__(163);
	
	/**
	 * Creates a new object with the own properties of the two provided objects.
	 * If a key exists in both objects:
	 * - and both associated values are also objects then the values will be
	 *   recursively merged.
	 * - otherwise the provided function is applied to the key and associated values
	 *   using the resulting value as the new value associated with the key.
	 * If a key only exists in one object, the value will be associated with the key
	 * of the resulting object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.24.0
	 * @category Object
	 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
	 * @param {Function} fn
	 * @param {Object} lObj
	 * @param {Object} rObj
	 * @return {Object}
	 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
	 * @example
	 *
	 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
	 *      R.mergeDeepWithKey(concatValues,
	 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
	 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
	 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
	 */
	
	
	var mergeDeepWithKey = /*#__PURE__*/_curry3(function mergeDeepWithKey(fn, lObj, rObj) {
	  return mergeWithKey(function (k, lVal, rVal) {
	    if (_isObject(lVal) && _isObject(rVal)) {
	      return mergeDeepWithKey(fn, lVal, rVal);
	    } else {
	      return fn(k, lVal, rVal);
	    }
	  }, lObj, rObj);
	});
	module.exports = mergeDeepWithKey;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Wraps a function of any arity (including nullary) in a function that accepts
	 * exactly `n` parameters. Any extraneous parameters will not be passed to the
	 * supplied function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 * @param {Number} n The desired arity of the new function.
	 * @param {Function} fn The function to wrap.
	 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	 *         arity `n`.
	 * @see R.binary, R.unary
	 * @example
	 *
	 *      var takesTwoArgs = (a, b) => [a, b];
	 *
	 *      takesTwoArgs.length; //=> 2
	 *      takesTwoArgs(1, 2); //=> [1, 2]
	 *
	 *      var takesOneArg = R.nAry(1, takesTwoArgs);
	 *      takesOneArg.length; //=> 1
	 *      // Only `n` arguments are passed to the wrapped function
	 *      takesOneArg(1, 2); //=> [1, undefined]
	 * @symb R.nAry(0, f)(a, b) = f()
	 * @symb R.nAry(1, f)(a, b) = f(a)
	 * @symb R.nAry(2, f)(a, b) = f(a, b)
	 */
	
	
	var nAry = /*#__PURE__*/_curry2(function nAry(n, fn) {
	  switch (n) {
	    case 0:
	      return function () {
	        return fn.call(this);
	      };
	    case 1:
	      return function (a0) {
	        return fn.call(this, a0);
	      };
	    case 2:
	      return function (a0, a1) {
	        return fn.call(this, a0, a1);
	      };
	    case 3:
	      return function (a0, a1, a2) {
	        return fn.call(this, a0, a1, a2);
	      };
	    case 4:
	      return function (a0, a1, a2, a3) {
	        return fn.call(this, a0, a1, a2, a3);
	      };
	    case 5:
	      return function (a0, a1, a2, a3, a4) {
	        return fn.call(this, a0, a1, a2, a3, a4);
	      };
	    case 6:
	      return function (a0, a1, a2, a3, a4, a5) {
	        return fn.call(this, a0, a1, a2, a3, a4, a5);
	      };
	    case 7:
	      return function (a0, a1, a2, a3, a4, a5, a6) {
	        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
	      };
	    case 8:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
	      };
	    case 9:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
	      };
	    case 10:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
	      };
	    default:
	      throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
	  }
	});
	module.exports = nAry;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var _curryN = /*#__PURE__*/__webpack_require__(97);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _has = /*#__PURE__*/__webpack_require__(15);
	
	var _reduce = /*#__PURE__*/__webpack_require__(22);
	
	var _xreduceBy = /*#__PURE__*/__webpack_require__(548);
	
	/**
	 * Groups the elements of the list according to the result of calling
	 * the String-returning function `keyFn` on each element and reduces the elements
	 * of each group to a single value via the reducer function `valueFn`.
	 *
	 * This function is basically a more general [`groupBy`](#groupBy) function.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.20.0
	 * @category List
	 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
	 * @param {Function} valueFn The function that reduces the elements of each group to a single
	 *        value. Receives two values, accumulator for a particular group and the current element.
	 * @param {*} acc The (initial) accumulator value for each group.
	 * @param {Function} keyFn The function that maps the list's element into a key.
	 * @param {Array} list The array to group.
	 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
	 *         `valueFn` for elements which produced that key when passed to `keyFn`.
	 * @see R.groupBy, R.reduce
	 * @example
	 *
	 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
	 *      var namesByGrade = reduceToNamesBy(function(student) {
	 *        var score = student.score;
	 *        return score < 65 ? 'F' :
	 *               score < 70 ? 'D' :
	 *               score < 80 ? 'C' :
	 *               score < 90 ? 'B' : 'A';
	 *      });
	 *      var students = [{name: 'Lucy', score: 92},
	 *                      {name: 'Drew', score: 85},
	 *                      // ...
	 *                      {name: 'Bart', score: 62}];
	 *      namesByGrade(students);
	 *      // {
	 *      //   'A': ['Lucy'],
	 *      //   'B': ['Drew']
	 *      //   // ...,
	 *      //   'F': ['Bart']
	 *      // }
	 */
	
	
	var reduceBy = /*#__PURE__*/_curryN(4, [], /*#__PURE__*/_dispatchable([], _xreduceBy, function reduceBy(valueFn, valueAcc, keyFn, list) {
	  return _reduce(function (acc, elt) {
	    var key = keyFn(elt);
	    acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
	    return acc;
	  }, {}, list);
	}));
	module.exports = reduceBy;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var _complement = /*#__PURE__*/__webpack_require__(245);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var filter = /*#__PURE__*/__webpack_require__(155);
	
	/**
	 * The complement of [`filter`](#filter).
	 *
	 * Acts as a transducer if a transformer is given in list position. Filterable
	 * objects include plain objects or any object that has a filter method such
	 * as `Array`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Filterable f => (a -> Boolean) -> f a -> f a
	 * @param {Function} pred
	 * @param {Array} filterable
	 * @return {Array}
	 * @see R.filter, R.transduce, R.addIndex
	 * @example
	 *
	 *      var isOdd = (n) => n % 2 === 1;
	 *
	 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
	 *
	 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	 */
	
	
	var reject = /*#__PURE__*/_curry2(function reject(pred, filterable) {
	  return filter(_complement(pred), filterable);
	});
	module.exports = reject;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _isString = /*#__PURE__*/__webpack_require__(71);
	
	/**
	 * Returns a new list or string with the elements or characters in reverse
	 * order.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a]
	 * @sig String -> String
	 * @param {Array|String} list
	 * @return {Array|String}
	 * @example
	 *
	 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
	 *      R.reverse([1, 2]);     //=> [2, 1]
	 *      R.reverse([1]);        //=> [1]
	 *      R.reverse([]);         //=> []
	 *
	 *      R.reverse('abc');      //=> 'cba'
	 *      R.reverse('ab');       //=> 'ba'
	 *      R.reverse('a');        //=> 'a'
	 *      R.reverse('');         //=> ''
	 */
	
	
	var reverse = /*#__PURE__*/_curry1(function reverse(list) {
	  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
	});
	module.exports = reverse;

/***/ }),
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ramda = __webpack_require__(32);
	
	var _utils = __webpack_require__(35);
	
	var dataUrl = function dataUrl(reports) {
	    return ['Metrics'].concat((0, _ramda.into)([], _utils.domainTransducer, reports));
	};
	
	exports.default = dataUrl;
	module.exports = exports['default'];

/***/ }),
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(7);
	
	var emptyObject = __webpack_require__(53);
	var _invariant = __webpack_require__(4);
	
	if (false) {
	  var warning = require('fbjs/lib/warning');
	}
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (false) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (false) {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (false) {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (false) {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (false) {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (false) {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (false) {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;
	
	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );
	
	        Constructor[name] = createMergedResultFunction(Constructor[name], property);
	
	        return;
	      }
	
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (false) {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (false) {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (false) {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (false) {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (false) {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (false) {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
	        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
	          'Did you mean UNSAFE_componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;


/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	var _concat = /*#__PURE__*/__webpack_require__(23);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _reduce = /*#__PURE__*/__webpack_require__(22);
	
	var map = /*#__PURE__*/__webpack_require__(17);
	
	/**
	 * ap applies a list of functions to a list of values.
	 *
	 * Dispatches to the `ap` method of the second argument, if present. Also
	 * treats curried functions as applicatives.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Function
	 * @sig [a -> b] -> [a] -> [b]
	 * @sig Apply f => f (a -> b) -> f a -> f b
	 * @sig (a -> b -> c) -> (a -> b) -> (a -> c)
	 * @param {*} applyF
	 * @param {*} applyX
	 * @return {*}
	 * @example
	 *
	 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
	 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
	 *
	 *      // R.ap can also be used as S combinator
	 *      // when only two functions are passed
	 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
	 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
	 */
	
	
	var ap = /*#__PURE__*/_curry2(function ap(applyF, applyX) {
	  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
	    return applyF(x)(applyX(x));
	  } :
	  // else
	  _reduce(function (acc, f) {
	    return _concat(acc, map(f, applyX));
	  }, [], applyF);
	});
	module.exports = ap;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _makeFlat = /*#__PURE__*/__webpack_require__(250);
	
	var _xchain = /*#__PURE__*/__webpack_require__(537);
	
	var map = /*#__PURE__*/__webpack_require__(17);
	
	/**
	 * `chain` maps a function over a list and concatenates the results. `chain`
	 * is also known as `flatMap` in some libraries
	 *
	 * Dispatches to the `chain` method of the second argument, if present,
	 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig Chain m => (a -> m b) -> m a -> m b
	 * @param {Function} fn The function to map with
	 * @param {Array} list The list to map over
	 * @return {Array} The result of flat-mapping `list` with `fn`
	 * @example
	 *
	 *      var duplicate = n => [n, n];
	 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
	 *
	 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
	 */
	
	
	var chain = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/chain', 'chain'], _xchain, function chain(fn, monad) {
	  if (typeof monad === 'function') {
	    return function (x) {
	      return fn(monad(x))(x);
	    };
	  }
	  return _makeFlat(false)(map(fn, monad));
	}));
	module.exports = chain;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	var pipe = /*#__PURE__*/__webpack_require__(268);
	
	var reverse = /*#__PURE__*/__webpack_require__(108);
	
	/**
	 * Performs right-to-left function composition. The rightmost function may have
	 * any arity; the remaining functions must be unary.
	 *
	 * **Note:** The result of compose is not automatically curried.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
	 * @param {...Function} ...functions The functions to compose
	 * @return {Function}
	 * @see R.pipe
	 * @example
	 *
	 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
	 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
	 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
	 *
	 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
	 *
	 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
	 */
	
	
	function compose() {
	  if (arguments.length === 0) {
	    throw new Error('compose requires at least one argument');
	  }
	  return pipe.apply(this, reverse(arguments));
	}
	module.exports = compose;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _isArray = /*#__PURE__*/__webpack_require__(37);
	
	var _isFunction = /*#__PURE__*/__webpack_require__(99);
	
	var _isString = /*#__PURE__*/__webpack_require__(71);
	
	var toString = /*#__PURE__*/__webpack_require__(75);
	
	/**
	 * Returns the result of concatenating the given lists or strings.
	 *
	 * Note: `R.concat` expects both arguments to be of the same type,
	 * unlike the native `Array.prototype.concat` method. It will throw
	 * an error if you `concat` an Array with a non-Array value.
	 *
	 * Dispatches to the `concat` method of the first argument, if present.
	 * Can also concatenate two members of a [fantasy-land
	 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a] -> [a]
	 * @sig String -> String -> String
	 * @param {Array|String} firstList The first list
	 * @param {Array|String} secondList The second list
	 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
	 * `secondList`.
	 *
	 * @example
	 *
	 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
	 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
	 *      R.concat([], []); //=> []
	 */
	
	
	var concat = /*#__PURE__*/_curry2(function concat(a, b) {
	  if (_isArray(a)) {
	    if (_isArray(b)) {
	      return a.concat(b);
	    }
	    throw new TypeError(toString(b) + ' is not an array');
	  }
	  if (_isString(a)) {
	    if (_isString(b)) {
	      return a + b;
	    }
	    throw new TypeError(toString(b) + ' is not a string');
	  }
	  if (a != null && _isFunction(a['fantasy-land/concat'])) {
	    return a['fantasy-land/concat'](b);
	  }
	  if (a != null && _isFunction(a.concat)) {
	    return a.concat(b);
	  }
	  throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
	});
	module.exports = concat;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	/**
	 * Returns a curried equivalent of the provided function. The curried function
	 * has two unusual capabilities. First, its arguments needn't be provided one
	 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
	 * the following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (* -> a) -> (* -> a)
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curryN
	 * @example
	 *
	 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
	 *
	 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	
	
	var curry = /*#__PURE__*/_curry1(function curry(fn) {
	  return curryN(fn.length, fn);
	});
	module.exports = curry;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _filter = /*#__PURE__*/__webpack_require__(158);
	
	var _isObject = /*#__PURE__*/__webpack_require__(161);
	
	var _reduce = /*#__PURE__*/__webpack_require__(22);
	
	var _xfilter = /*#__PURE__*/__webpack_require__(542);
	
	var keys = /*#__PURE__*/__webpack_require__(28);
	
	/**
	 * Takes a predicate and a `Filterable`, and returns a new filterable of the
	 * same type containing the members of the given filterable which satisfy the
	 * given predicate. Filterable objects include plain objects or any object
	 * that has a filter method such as `Array`.
	 *
	 * Dispatches to the `filter` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Filterable f => (a -> Boolean) -> f a -> f a
	 * @param {Function} pred
	 * @param {Array} filterable
	 * @return {Array} Filterable
	 * @see R.reject, R.transduce, R.addIndex
	 * @example
	 *
	 *      var isEven = n => n % 2 === 0;
	 *
	 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
	 *
	 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	 */
	
	
	var filter = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['filter'], _xfilter, function (pred, filterable) {
	  return _isObject(filterable) ? _reduce(function (acc, key) {
	    if (pred(filterable[key])) {
	      acc[key] = filterable[key];
	    }
	    return acc;
	  }, {}, keys(filterable)) :
	  // else
	  _filter(pred, filterable);
	}));
	module.exports = filter;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _identity = /*#__PURE__*/__webpack_require__(159);
	
	/**
	 * A function that does nothing but return the parameter supplied to it. Good
	 * as a default or placeholder function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig a -> a
	 * @param {*} x The value to return.
	 * @return {*} The input value, `x`.
	 * @example
	 *
	 *      R.identity(1); //=> 1
	 *
	 *      var obj = {};
	 *      R.identity(obj) === obj; //=> true
	 * @symb R.identity(a) = a
	 */
	
	
	var identity = /*#__PURE__*/_curry1(_identity);
	module.exports = identity;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	var _objectAssign = /*#__PURE__*/__webpack_require__(527);
	
	module.exports = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

/***/ }),
/* 158 */
/***/ (function(module, exports) {

	function _filter(fn, list) {
	  var idx = 0;
	  var len = list.length;
	  var result = [];
	
	  while (idx < len) {
	    if (fn(list[idx])) {
	      result[result.length] = list[idx];
	    }
	    idx += 1;
	  }
	  return result;
	}
	module.exports = _filter;

/***/ }),
/* 159 */
/***/ (function(module, exports) {

	function _identity(x) {
	  return x;
	}
	module.exports = _identity;

/***/ }),
/* 160 */
/***/ (function(module, exports) {

	/**
	 * Determine if the passed argument is an integer.
	 *
	 * @private
	 * @param {*} n
	 * @category Type
	 * @return {Boolean}
	 */
	module.exports = Number.isInteger || function _isInteger(n) {
	  return n << 0 === n;
	};

/***/ }),
/* 161 */
/***/ (function(module, exports) {

	function _isObject(x) {
	  return Object.prototype.toString.call(x) === '[object Object]';
	}
	module.exports = _isObject;

/***/ }),
/* 162 */
/***/ (function(module, exports) {

	function _isTransformer(obj) {
	  return typeof obj['@@transducer/step'] === 'function';
	}
	module.exports = _isTransformer;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var _has = /*#__PURE__*/__webpack_require__(15);
	
	/**
	 * Creates a new object with the own properties of the two provided objects. If
	 * a key exists in both objects, the provided function is applied to the key
	 * and the values associated with the key in each object, with the result being
	 * used as the value associated with the key in the returned object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Object
	 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
	 * @param {Function} fn
	 * @param {Object} l
	 * @param {Object} r
	 * @return {Object}
	 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
	 * @example
	 *
	 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
	 *      R.mergeWithKey(concatValues,
	 *                     { a: true, thing: 'foo', values: [10, 20] },
	 *                     { b: true, thing: 'bar', values: [15, 35] });
	 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
	 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
	 */
	
	
	var mergeWithKey = /*#__PURE__*/_curry3(function mergeWithKey(fn, l, r) {
	  var result = {};
	  var k;
	
	  for (k in l) {
	    if (_has(k, l)) {
	      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
	    }
	  }
	
	  for (k in r) {
	    if (_has(k, r) && !_has(k, result)) {
	      result[k] = r[k];
	    }
	  }
	
	  return result;
	});
	module.exports = mergeWithKey;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var path = /*#__PURE__*/__webpack_require__(58);
	
	/**
	 * Returns a function that when supplied an object returns the indicated
	 * property of that object, if it exists.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig s -> {s: a} -> a | Undefined
	 * @param {String} p The property name
	 * @param {Object} obj The object to query
	 * @return {*} The value at `obj.p`.
	 * @see R.path
	 * @example
	 *
	 *      R.prop('x', {x: 100}); //=> 100
	 *      R.prop('x', {}); //=> undefined
	 */
	
	var prop = /*#__PURE__*/_curry2(function prop(p, obj) {
	  return path([p], obj);
	});
	module.exports = prop;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var _checkForMethod = /*#__PURE__*/__webpack_require__(70);
	
	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var slice = /*#__PURE__*/__webpack_require__(24);
	
	/**
	 * Returns all but the first element of the given list or string (or object
	 * with a `tail` method).
	 *
	 * Dispatches to the `slice` method of the first argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a]
	 * @sig String -> String
	 * @param {*} list
	 * @return {*}
	 * @see R.head, R.init, R.last
	 * @example
	 *
	 *      R.tail([1, 2, 3]);  //=> [2, 3]
	 *      R.tail([1, 2]);     //=> [2]
	 *      R.tail([1]);        //=> []
	 *      R.tail([]);         //=> []
	 *
	 *      R.tail('abc');  //=> 'bc'
	 *      R.tail('ab');   //=> 'b'
	 *      R.tail('a');    //=> ''
	 *      R.tail('');     //=> ''
	 */
	
	
	var tail = /*#__PURE__*/_curry1( /*#__PURE__*/_checkForMethod('tail', /*#__PURE__*/slice(1, Infinity)));
	module.exports = tail;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xtake = /*#__PURE__*/__webpack_require__(549);
	
	var slice = /*#__PURE__*/__webpack_require__(24);
	
	/**
	 * Returns the first `n` elements of the given list, string, or
	 * transducer/transformer (or object with a `take` method).
	 *
	 * Dispatches to the `take` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Number -> [a] -> [a]
	 * @sig Number -> String -> String
	 * @param {Number} n
	 * @param {*} list
	 * @return {*}
	 * @see R.drop
	 * @example
	 *
	 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
	 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	 *      R.take(3, 'ramda');               //=> 'ram'
	 *
	 *      var personnel = [
	 *        'Dave Brubeck',
	 *        'Paul Desmond',
	 *        'Eugene Wright',
	 *        'Joe Morello',
	 *        'Gerry Mulligan',
	 *        'Bob Bates',
	 *        'Joe Dodge',
	 *        'Ron Crotty'
	 *      ];
	 *
	 *      var takeFive = R.take(5);
	 *      takeFive(personnel);
	 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
	 * @symb R.take(-1, [a, b]) = [a, b]
	 * @symb R.take(0, [a, b]) = []
	 * @symb R.take(1, [a, b]) = [a]
	 * @symb R.take(2, [a, b]) = [a, b]
	 */
	
	
	var take = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['take'], _xtake, function take(n, xs) {
	  return slice(0, n < 0 ? Infinity : n, xs);
	}));
	module.exports = take;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Gives a single-word string description of the (native) type of a value,
	 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
	 * attempt to distinguish user Object types any further, reporting them all as
	 * 'Object'.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Type
	 * @sig (* -> {*}) -> String
	 * @param {*} val The value to test
	 * @return {String}
	 * @example
	 *
	 *      R.type({}); //=> "Object"
	 *      R.type(1); //=> "Number"
	 *      R.type(false); //=> "Boolean"
	 *      R.type('s'); //=> "String"
	 *      R.type(null); //=> "Null"
	 *      R.type([]); //=> "Array"
	 *      R.type(/[A-z]/); //=> "RegExp"
	 *      R.type(() => {}); //=> "Function"
	 *      R.type(undefined); //=> "Undefined"
	 */
	
	
	var type = /*#__PURE__*/_curry1(function type(val) {
	  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
	});
	module.exports = type;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = /*#__PURE__*/__webpack_require__(156);
	
	var uniqBy = /*#__PURE__*/__webpack_require__(277);
	
	/**
	 * Returns a new list containing only one copy of each element in the original
	 * list. [`R.equals`](#equals) is used to determine equality.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a]
	 * @param {Array} list The array to consider.
	 * @return {Array} The list of unique items.
	 * @example
	 *
	 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
	 *      R.uniq([1, '1']);     //=> [1, '1']
	 *      R.uniq([[42], [42]]); //=> [[42]]
	 */
	
	
	var uniq = /*#__PURE__*/uniqBy(identity);
	module.exports = uniq;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var adjust = /*#__PURE__*/__webpack_require__(226);
	
	var always = /*#__PURE__*/__webpack_require__(55);
	
	/**
	 * Returns a new copy of the array with the element at the provided index
	 * replaced with the given value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category List
	 * @sig Number -> a -> [a] -> [a]
	 * @param {Number} idx The index to update.
	 * @param {*} x The value to exist at the given index of the returned array.
	 * @param {Array|Arguments} list The source array-like object to be updated.
	 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
	 * @see R.adjust
	 * @example
	 *
	 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
	 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
	 * @symb R.update(-1, a, [b, c]) = [b, a]
	 * @symb R.update(0, a, [b, c]) = [a, c]
	 * @symb R.update(1, a, [b, c]) = [b, a]
	 */
	
	
	var update = /*#__PURE__*/_curry3(function update(idx, x, list) {
	  return adjust(always(x), idx, list);
	});
	module.exports = update;

/***/ }),
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var suffixFormatter = exports.suffixFormatter = function suffixFormatter(suffix) {
	    return new google.visualization.NumberFormat({ suffix: suffix });
	};

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.audits = undefined;
	
	var _ramda = __webpack_require__(32);
	
	var audits = exports.audits = (0, _ramda.prop)('audits');

/***/ }),
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	var _concat = /*#__PURE__*/__webpack_require__(23);
	
	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Applies a function to the value at the given index of an array, returning a
	 * new copy of the array with the element at the given index replaced with the
	 * result of the function application.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category List
	 * @sig (a -> a) -> Number -> [a] -> [a]
	 * @param {Function} fn The function to apply.
	 * @param {Number} idx The index.
	 * @param {Array|Arguments} list An array-like object whose value
	 *        at the supplied index will be replaced.
	 * @return {Array} A copy of the supplied array-like object with
	 *         the element at index `idx` replaced with the value
	 *         returned by applying `fn` to the existing element.
	 * @see R.update
	 * @example
	 *
	 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
	 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
	 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
	 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
	 */
	
	
	var adjust = /*#__PURE__*/_curry3(function adjust(fn, idx, list) {
	  if (idx >= list.length || idx < -list.length) {
	    return list;
	  }
	  var start = idx < 0 ? list.length : 0;
	  var _idx = start + idx;
	  var _list = _concat(list);
	  _list[_idx] = fn(list[_idx]);
	  return _list;
	});
	module.exports = adjust;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns `true` if both arguments are `true`; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig a -> b -> a | b
	 * @param {Any} a
	 * @param {Any} b
	 * @return {Any} the first argument if it is falsy, otherwise the second argument.
	 * @see R.both
	 * @example
	 *
	 *      R.and(true, true); //=> true
	 *      R.and(true, false); //=> false
	 *      R.and(false, true); //=> false
	 *      R.and(false, false); //=> false
	 */
	
	
	var and = /*#__PURE__*/_curry2(function and(a, b) {
	  return a && b;
	});
	module.exports = and;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xany = /*#__PURE__*/__webpack_require__(251);
	
	/**
	 * Returns `true` if at least one of elements of the list match the predicate,
	 * `false` otherwise.
	 *
	 * Dispatches to the `any` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> Boolean
	 * @param {Function} fn The predicate function.
	 * @param {Array} list The array to consider.
	 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
	 *         otherwise.
	 * @see R.all, R.none, R.transduce
	 * @example
	 *
	 *      var lessThan0 = R.flip(R.lt)(0);
	 *      var lessThan2 = R.flip(R.lt)(2);
	 *      R.any(lessThan0)([1, 2]); //=> false
	 *      R.any(lessThan2)([1, 2]); //=> true
	 */
	
	
	var any = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['any'], _xany, function any(fn, list) {
	  var idx = 0;
	  while (idx < list.length) {
	    if (fn(list[idx])) {
	      return true;
	    }
	    idx += 1;
	  }
	  return false;
	}));
	module.exports = any;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Applies function `fn` to the argument list `args`. This is useful for
	 * creating a fixed-arity function from a variadic function. `fn` should be a
	 * bound function if context is significant.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Function
	 * @sig (*... -> a) -> [*] -> a
	 * @param {Function} fn The function which will be called with `args`
	 * @param {Array} args The arguments to call `fn` with
	 * @return {*} result The result, equivalent to `fn(...args)`
	 * @see R.call, R.unapply
	 * @example
	 *
	 *      var nums = [1, 2, 3, -99, 42, 6, 7];
	 *      R.apply(Math.max, nums); //=> 42
	 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
	 */
	
	
	var apply = /*#__PURE__*/_curry2(function apply(fn, args) {
	  return fn.apply(this, args);
	});
	module.exports = apply;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var _has = /*#__PURE__*/__webpack_require__(15);
	
	var _isArray = /*#__PURE__*/__webpack_require__(37);
	
	var _isInteger = /*#__PURE__*/__webpack_require__(160);
	
	var assoc = /*#__PURE__*/__webpack_require__(94);
	
	var isNil = /*#__PURE__*/__webpack_require__(255);
	
	/**
	 * Makes a shallow clone of an object, setting or overriding the nodes required
	 * to create the given path, and placing the specific value at the tail end of
	 * that path. Note that this copies and flattens prototype properties onto the
	 * new object as well. All non-primitive properties are copied by reference.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Object
	 * @typedefn Idx = String | Int
	 * @sig [Idx] -> a -> {a} -> {a}
	 * @param {Array} path the path to set
	 * @param {*} val The new value
	 * @param {Object} obj The object to clone
	 * @return {Object} A new object equivalent to the original except along the specified path.
	 * @see R.dissocPath
	 * @example
	 *
	 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
	 *
	 *      // Any missing or non-object keys in path will be overridden
	 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
	 */
	
	
	var assocPath = /*#__PURE__*/_curry3(function assocPath(path, val, obj) {
	  if (path.length === 0) {
	    return val;
	  }
	  var idx = path[0];
	  if (path.length > 1) {
	    var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
	    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
	  }
	  if (_isInteger(idx) && _isArray(obj)) {
	    var arr = [].concat(obj);
	    arr[idx] = val;
	    return arr;
	  } else {
	    return assoc(idx, val, obj);
	  }
	});
	module.exports = assocPath;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	var _arity = /*#__PURE__*/__webpack_require__(27);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Creates a function that is bound to a context.
	 * Note: `R.bind` does not provide the additional argument-binding capabilities of
	 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category Function
	 * @category Object
	 * @sig (* -> *) -> {*} -> (* -> *)
	 * @param {Function} fn The function to bind to context
	 * @param {Object} thisObj The context to bind `fn` to
	 * @return {Function} A function that will execute in the context of `thisObj`.
	 * @see R.partial
	 * @example
	 *
	 *      var log = R.bind(console.log, console);
	 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
	 *      // logs {a: 2}
	 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
	 */
	
	
	var bind = /*#__PURE__*/_curry2(function bind(fn, thisObj) {
	  return _arity(fn.length, function () {
	    return fn.apply(thisObj, arguments);
	  });
	});
	module.exports = bind;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	var chain = /*#__PURE__*/__webpack_require__(151);
	
	var compose = /*#__PURE__*/__webpack_require__(152);
	
	var map = /*#__PURE__*/__webpack_require__(17);
	
	/**
	 * Returns the right-to-left Kleisli composition of the provided functions,
	 * each of which must return a value of a type supported by [`chain`](#chain).
	 *
	 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), f)`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Function
	 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
	 * @param {...Function} ...functions The functions to compose
	 * @return {Function}
	 * @see R.pipeK
	 * @example
	 *
	 *       //  get :: String -> Object -> Maybe *
	 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
	 *
	 *       //  getStateCode :: Maybe String -> Maybe String
	 *       var getStateCode = R.composeK(
	 *         R.compose(Maybe.of, R.toUpper),
	 *         get('state'),
	 *         get('address'),
	 *         get('user'),
	 *       );
	 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
	 *       getStateCode({}); //=> Maybe.Nothing()
	 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
	 */
	
	
	function composeK() {
	  if (arguments.length === 0) {
	    throw new Error('composeK requires at least one argument');
	  }
	  var init = Array.prototype.slice.call(arguments);
	  var last = init.pop();
	  return compose(compose.apply(this, map(chain, init)), last);
	}
	module.exports = composeK;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var curry = /*#__PURE__*/__webpack_require__(154);
	
	var nAry = /*#__PURE__*/__webpack_require__(105);
	
	/**
	 * Wraps a constructor function inside a curried function that can be called
	 * with the same arguments and returns the same type. The arity of the function
	 * returned is specified to allow using variadic constructor functions.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.4.0
	 * @category Function
	 * @sig Number -> (* -> {*}) -> (* -> {*})
	 * @param {Number} n The arity of the constructor function.
	 * @param {Function} Fn The constructor function to wrap.
	 * @return {Function} A wrapped, curried constructor function.
	 * @example
	 *
	 *      // Variadic Constructor function
	 *      function Salad() {
	 *        this.ingredients = arguments;
	 *      }
	 *
	 *      Salad.prototype.recipe = function() {
	 *        var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
	 *        return R.join('\n', instructions);
	 *      };
	 *
	 *      var ThreeLayerSalad = R.constructN(3, Salad);
	 *
	 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
	 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
	 *
	 *      console.log(salad.recipe());
	 *      // Add a dollop of Mayonnaise
	 *      // Add a dollop of Potato Chips
	 *      // Add a dollop of Ketchup
	 */
	
	
	var constructN = /*#__PURE__*/_curry2(function constructN(n, Fn) {
	  if (n > 10) {
	    throw new Error('Constructor with greater than ten arguments');
	  }
	  if (n === 0) {
	    return function () {
	      return new Fn();
	    };
	  }
	  return curry(nAry(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
	    switch (arguments.length) {
	      case 1:
	        return new Fn($0);
	      case 2:
	        return new Fn($0, $1);
	      case 3:
	        return new Fn($0, $1, $2);
	      case 4:
	        return new Fn($0, $1, $2, $3);
	      case 5:
	        return new Fn($0, $1, $2, $3, $4);
	      case 6:
	        return new Fn($0, $1, $2, $3, $4, $5);
	      case 7:
	        return new Fn($0, $1, $2, $3, $4, $5, $6);
	      case 8:
	        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
	      case 9:
	        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
	      case 10:
	        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
	    }
	  }));
	});
	module.exports = constructN;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _map = /*#__PURE__*/__webpack_require__(101);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	var max = /*#__PURE__*/__webpack_require__(57);
	
	var pluck = /*#__PURE__*/__webpack_require__(74);
	
	var reduce = /*#__PURE__*/__webpack_require__(29);
	
	/**
	 * Accepts a converging function and a list of branching functions and returns
	 * a new function. When invoked, this new function is applied to some
	 * arguments, each branching function is applied to those same arguments. The
	 * results of each branching function are passed as arguments to the converging
	 * function to produce the return value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.4.2
	 * @category Function
	 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
	 * @param {Function} after A function. `after` will be invoked with the return values of
	 *        `fn1` and `fn2` as its arguments.
	 * @param {Array} functions A list of functions.
	 * @return {Function} A new function.
	 * @see R.useWith
	 * @example
	 *
	 *      var average = R.converge(R.divide, [R.sum, R.length])
	 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
	 *
	 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
	 *      strangeConcat("Yodel") //=> "YODELyodel"
	 *
	 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
	 */
	
	
	var converge = /*#__PURE__*/_curry2(function converge(after, fns) {
	  return curryN(reduce(max, 0, pluck('length', fns)), function () {
	    var args = arguments;
	    var context = this;
	    return after.apply(context, _map(function (fn) {
	      return fn.apply(context, args);
	    }, fns));
	  });
	});
	module.exports = converge;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
	 * otherwise the first argument is returned.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Logic
	 * @sig a -> b -> a | b
	 * @param {a} default The default value.
	 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
	 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
	 * @example
	 *
	 *      var defaultTo42 = R.defaultTo(42);
	 *
	 *      defaultTo42(null);  //=> 42
	 *      defaultTo42(undefined);  //=> 42
	 *      defaultTo42('Ramda');  //=> 'Ramda'
	 *      // parseInt('string') results in NaN
	 *      defaultTo42(parseInt('string')); //=> 42
	 */
	
	
	var defaultTo = /*#__PURE__*/_curry2(function defaultTo(d, v) {
	  return v == null || v !== v ? d : v;
	});
	module.exports = defaultTo;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	var _contains = /*#__PURE__*/__webpack_require__(56);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Finds the set (i.e. no duplicates) of all elements in the first list not
	 * contained in the second list. Objects and Arrays are compared in terms of
	 * value equality, not reference equality.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig [*] -> [*] -> [*]
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The elements in `list1` that are not in `list2`.
	 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
	 * @example
	 *
	 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
	 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
	 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
	 */
	
	
	var difference = /*#__PURE__*/_curry2(function difference(first, second) {
	  var out = [];
	  var idx = 0;
	  var firstLen = first.length;
	  while (idx < firstLen) {
	    if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
	      out[out.length] = first[idx];
	    }
	    idx += 1;
	  }
	  return out;
	});
	module.exports = difference;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	var _containsWith = /*#__PURE__*/__webpack_require__(96);
	
	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Finds the set (i.e. no duplicates) of all elements in the first list not
	 * contained in the second list. Duplication is determined according to the
	 * value returned by applying the supplied predicate to two list elements.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
	 * @param {Function} pred A predicate used to test whether two items are equal.
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The elements in `list1` that are not in `list2`.
	 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
	 * @example
	 *
	 *      var cmp = (x, y) => x.a === y.a;
	 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
	 *      var l2 = [{a: 3}, {a: 4}];
	 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
	 */
	
	
	var differenceWith = /*#__PURE__*/_curry3(function differenceWith(pred, first, second) {
	  var out = [];
	  var idx = 0;
	  var firstLen = first.length;
	  while (idx < firstLen) {
	    if (!_containsWith(pred, first[idx], second) && !_containsWith(pred, first[idx], out)) {
	      out.push(first[idx]);
	    }
	    idx += 1;
	  }
	  return out;
	});
	module.exports = differenceWith;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns a new object that does not contain a `prop` property.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Object
	 * @sig String -> {k: v} -> {k: v}
	 * @param {String} prop The name of the property to dissociate
	 * @param {Object} obj The object to clone
	 * @return {Object} A new object equivalent to the original but without the specified property
	 * @see R.assoc
	 * @example
	 *
	 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
	 */
	
	
	var dissoc = /*#__PURE__*/_curry2(function dissoc(prop, obj) {
	  var result = {};
	  for (var p in obj) {
	    result[p] = obj[p];
	  }
	  delete result[prop];
	  return result;
	});
	module.exports = dissoc;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xdrop = /*#__PURE__*/__webpack_require__(538);
	
	var slice = /*#__PURE__*/__webpack_require__(24);
	
	/**
	 * Returns all but the first `n` elements of the given list, string, or
	 * transducer/transformer (or object with a `drop` method).
	 *
	 * Dispatches to the `drop` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Number -> [a] -> [a]
	 * @sig Number -> String -> String
	 * @param {Number} n
	 * @param {*} list
	 * @return {*} A copy of list without the first `n` elements
	 * @see R.take, R.transduce, R.dropLast, R.dropWhile
	 * @example
	 *
	 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
	 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
	 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
	 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
	 *      R.drop(3, 'ramda');               //=> 'da'
	 */
	
	
	var drop = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['drop'], _xdrop, function drop(n, xs) {
	  return slice(Math.max(0, n), Infinity, xs);
	}));
	module.exports = drop;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xdropRepeatsWith = /*#__PURE__*/__webpack_require__(252);
	
	var last = /*#__PURE__*/__webpack_require__(257);
	
	/**
	 * Returns a new list without any consecutively repeating elements. Equality is
	 * determined by applying the supplied predicate to each pair of consecutive elements. The
	 * first element in a series of equal elements will be preserved.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category List
	 * @sig ((a, a) -> Boolean) -> [a] -> [a]
	 * @param {Function} pred A predicate used to test whether two items are equal.
	 * @param {Array} list The array to consider.
	 * @return {Array} `list` without repeating elements.
	 * @see R.transduce
	 * @example
	 *
	 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
	 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
	 */
	
	
	var dropRepeatsWith = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
	  var result = [];
	  var idx = 1;
	  var len = list.length;
	  if (len !== 0) {
	    result[0] = list[0];
	    while (idx < len) {
	      if (!pred(last(result), list[idx])) {
	        result[result.length] = list[idx];
	      }
	      idx += 1;
	    }
	  }
	  return result;
	}));
	module.exports = dropRepeatsWith;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _isArguments = /*#__PURE__*/__webpack_require__(248);
	
	var _isArray = /*#__PURE__*/__webpack_require__(37);
	
	var _isObject = /*#__PURE__*/__webpack_require__(161);
	
	var _isString = /*#__PURE__*/__webpack_require__(71);
	
	/**
	 * Returns the empty value of its argument's type. Ramda defines the empty
	 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
	 * types are supported if they define `<Type>.empty`,
	 * `<Type>.prototype.empty` or implement the
	 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
	 *
	 * Dispatches to the `empty` method of the first argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Function
	 * @sig a -> a
	 * @param {*} x
	 * @return {*}
	 * @example
	 *
	 *      R.empty(Just(42));      //=> Nothing()
	 *      R.empty([1, 2, 3]);     //=> []
	 *      R.empty('unicorns');    //=> ''
	 *      R.empty({x: 1, y: 2});  //=> {}
	 */
	
	
	var empty = /*#__PURE__*/_curry1(function empty(x) {
	  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function () {
	    return arguments;
	  }() :
	  // else
	  void 0;
	});
	module.exports = empty;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns true if its arguments are identical, false otherwise. Values are
	 * identical if they reference the same memory. `NaN` is identical to `NaN`;
	 * `0` and `-0` are not identical.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category Relation
	 * @sig a -> a -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @example
	 *
	 *      var o = {};
	 *      R.identical(o, o); //=> true
	 *      R.identical(1, 1); //=> true
	 *      R.identical(1, '1'); //=> false
	 *      R.identical([], []); //=> false
	 *      R.identical(0, -0); //=> false
	 *      R.identical(NaN, NaN); //=> true
	 */
	
	
	var identical = /*#__PURE__*/_curry2(function identical(a, b) {
	  // SameValue algorithm
	  if (a === b) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return a !== 0 || 1 / a === 1 / b;
	  } else {
	    // Step 6.a: NaN == NaN
	    return a !== a && b !== b;
	  }
	});
	module.exports = identical;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	var _cloneRegExp = /*#__PURE__*/__webpack_require__(244);
	
	var type = /*#__PURE__*/__webpack_require__(167);
	
	/**
	 * Copies an object.
	 *
	 * @private
	 * @param {*} value The value to be copied
	 * @param {Array} refFrom Array containing the source references
	 * @param {Array} refTo Array containing the copied source references
	 * @param {Boolean} deep Whether or not to perform deep cloning.
	 * @return {*} The copied value.
	 */
	
	
	function _clone(value, refFrom, refTo, deep) {
	  var copy = function copy(copiedValue) {
	    var len = refFrom.length;
	    var idx = 0;
	    while (idx < len) {
	      if (value === refFrom[idx]) {
	        return refTo[idx];
	      }
	      idx += 1;
	    }
	    refFrom[idx + 1] = value;
	    refTo[idx + 1] = copiedValue;
	    for (var key in value) {
	      copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
	    }
	    return copiedValue;
	  };
	  switch (type(value)) {
	    case 'Object':
	      return copy({});
	    case 'Array':
	      return copy([]);
	    case 'Date':
	      return new Date(value.valueOf());
	    case 'RegExp':
	      return _cloneRegExp(value);
	    default:
	      return value;
	  }
	}
	module.exports = _clone;

/***/ }),
/* 244 */
/***/ (function(module, exports) {

	function _cloneRegExp(pattern) {
	                                  return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
	}
	module.exports = _cloneRegExp;

/***/ }),
/* 245 */
/***/ (function(module, exports) {

	function _complement(f) {
	  return function () {
	    return !f.apply(this, arguments);
	  };
	}
	module.exports = _complement;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	var _arity = /*#__PURE__*/__webpack_require__(27);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	function _createPartialApplicator(concat) {
	  return _curry2(function (fn, args) {
	    return _arity(Math.max(0, fn.length - args.length), function () {
	      return fn.apply(this, concat(args, arguments));
	    });
	  });
	}
	module.exports = _createPartialApplicator;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	var equals = /*#__PURE__*/__webpack_require__(21);
	
	function _indexOf(list, a, idx) {
	  var inf, item;
	  // Array.prototype.indexOf doesn't exist below IE9
	  if (typeof list.indexOf === 'function') {
	    switch (typeof a) {
	      case 'number':
	        if (a === 0) {
	          // manually crawl the list to distinguish between +0 and -0
	          inf = 1 / a;
	          while (idx < list.length) {
	            item = list[idx];
	            if (item === 0 && 1 / item === inf) {
	              return idx;
	            }
	            idx += 1;
	          }
	          return -1;
	        } else if (a !== a) {
	          // NaN
	          while (idx < list.length) {
	            item = list[idx];
	            if (typeof item === 'number' && item !== item) {
	              return idx;
	            }
	            idx += 1;
	          }
	          return -1;
	        }
	        // non-zero numbers can utilise Set
	        return list.indexOf(a, idx);
	
	      // all these types can utilise Set
	      case 'string':
	      case 'boolean':
	      case 'function':
	      case 'undefined':
	        return list.indexOf(a, idx);
	
	      case 'object':
	        if (a === null) {
	          // null can utilise Set
	          return list.indexOf(a, idx);
	        }
	    }
	  }
	  // anything else not covered above, defer to R.equals
	  while (idx < list.length) {
	    if (equals(list[idx], a)) {
	      return idx;
	    }
	    idx += 1;
	  }
	  return -1;
	}
	module.exports = _indexOf;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	var _has = /*#__PURE__*/__webpack_require__(15);
	
	var toString = Object.prototype.toString;
	var _isArguments = function () {
	  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
	    return toString.call(x) === '[object Arguments]';
	  } : function _isArguments(x) {
	    return _has('callee', x);
	  };
	};
	
	module.exports = _isArguments;

/***/ }),
/* 249 */
/***/ (function(module, exports) {

	function _isNumber(x) {
	  return Object.prototype.toString.call(x) === '[object Number]';
	}
	module.exports = _isNumber;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	var _isArrayLike = /*#__PURE__*/__webpack_require__(98);
	
	/**
	 * `_makeFlat` is a helper function that returns a one-level or fully recursive
	 * function based on the flag passed in.
	 *
	 * @private
	 */
	
	
	function _makeFlat(recursive) {
	  return function flatt(list) {
	    var value, jlen, j;
	    var result = [];
	    var idx = 0;
	    var ilen = list.length;
	
	    while (idx < ilen) {
	      if (_isArrayLike(list[idx])) {
	        value = recursive ? flatt(list[idx]) : list[idx];
	        j = 0;
	        jlen = value.length;
	        while (j < jlen) {
	          result[result.length] = value[j];
	          j += 1;
	        }
	      } else {
	        result[result.length] = list[idx];
	      }
	      idx += 1;
	    }
	    return result;
	  };
	}
	module.exports = _makeFlat;

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _reduced = /*#__PURE__*/__webpack_require__(38);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XAny = /*#__PURE__*/function () {
	
	  function XAny(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.any = false;
	  }
	  XAny.prototype['@@transducer/init'] = _xfBase.init;
	  XAny.prototype['@@transducer/result'] = function (result) {
	    if (!this.any) {
	      result = this.xf['@@transducer/step'](result, false);
	    }
	    return this.xf['@@transducer/result'](result);
	  };
	  XAny.prototype['@@transducer/step'] = function (result, input) {
	    if (this.f(input)) {
	      this.any = true;
	      result = _reduced(this.xf['@@transducer/step'](result, true));
	    }
	    return result;
	  };
	
	  return XAny;
	}();
	
	var _xany = /*#__PURE__*/_curry2(function _xany(f, xf) {
	  return new XAny(f, xf);
	});
	module.exports = _xany;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XDropRepeatsWith = /*#__PURE__*/function () {
	
	  function XDropRepeatsWith(pred, xf) {
	    this.xf = xf;
	    this.pred = pred;
	    this.lastValue = undefined;
	    this.seenFirstValue = false;
	  }
	
	  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase.init;
	  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase.result;
	  XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
	    var sameAsLast = false;
	    if (!this.seenFirstValue) {
	      this.seenFirstValue = true;
	    } else if (this.pred(this.lastValue, input)) {
	      sameAsLast = true;
	    }
	    this.lastValue = input;
	    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
	  };
	
	  return XDropRepeatsWith;
	}();
	
	var _xdropRepeatsWith = /*#__PURE__*/_curry2(function _xdropRepeatsWith(pred, xf) {
	  return new XDropRepeatsWith(pred, xf);
	});
	module.exports = _xdropRepeatsWith;

/***/ }),
/* 253 */
/***/ (function(module, exports) {

	var XWrap = /*#__PURE__*/function () {
	  function XWrap(fn) {
	    this.f = fn;
	  }
	  XWrap.prototype['@@transducer/init'] = function () {
	    throw new Error('init not implemented on XWrap');
	  };
	  XWrap.prototype['@@transducer/result'] = function (acc) {
	    return acc;
	  };
	  XWrap.prototype['@@transducer/step'] = function (acc, x) {
	    return this.f(acc, x);
	  };
	
	  return XWrap;
	}();
	
	function _xwrap(fn) {
	  return new XWrap(fn);
	}
	module.exports = _xwrap;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * See if an object (`val`) is an instance of the supplied constructor. This
	 * function will check up the inheritance chain, if any.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Type
	 * @sig (* -> {*}) -> a -> Boolean
	 * @param {Object} ctor A constructor
	 * @param {*} val The value to test
	 * @return {Boolean}
	 * @example
	 *
	 *      R.is(Object, {}); //=> true
	 *      R.is(Number, 1); //=> true
	 *      R.is(Object, 1); //=> false
	 *      R.is(String, 's'); //=> true
	 *      R.is(String, new String('')); //=> true
	 *      R.is(Object, new String('')); //=> true
	 *      R.is(Object, 's'); //=> false
	 *      R.is(Number, {}); //=> false
	 */
	
	
	var is = /*#__PURE__*/_curry2(function is(Ctor, val) {
	  return val != null && val.constructor === Ctor || val instanceof Ctor;
	});
	module.exports = is;

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Checks if the input value is `null` or `undefined`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Type
	 * @sig * -> Boolean
	 * @param {*} x The value to test.
	 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
	 * @example
	 *
	 *      R.isNil(null); //=> true
	 *      R.isNil(undefined); //=> true
	 *      R.isNil(0); //=> false
	 *      R.isNil([]); //=> false
	 */
	
	
	var isNil = /*#__PURE__*/_curry1(function isNil(x) {
	  return x == null;
	});
	module.exports = isNil;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var converge = /*#__PURE__*/__webpack_require__(234);
	
	/**
	 * juxt applies a list of functions to a list of values.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Function
	 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
	 * @param {Array} fns An array of functions
	 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
	 * @see R.applySpec
	 * @example
	 *
	 *      var getRange = R.juxt([Math.min, Math.max]);
	 *      getRange(3, 4, 9, -3); //=> [-3, 9]
	 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
	 */
	
	
	var juxt = /*#__PURE__*/_curry1(function juxt(fns) {
	  return converge(function () {
	    return Array.prototype.slice.call(arguments, 0);
	  }, fns);
	});
	module.exports = juxt;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	var nth = /*#__PURE__*/__webpack_require__(73);
	
	/**
	 * Returns the last element of the given list or string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.4
	 * @category List
	 * @sig [a] -> a | Undefined
	 * @sig String -> String
	 * @param {*} list
	 * @return {*}
	 * @see R.init, R.head, R.tail
	 * @example
	 *
	 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
	 *      R.last([]); //=> undefined
	 *
	 *      R.last('abc'); //=> 'c'
	 *      R.last(''); //=> ''
	 */
	
	
	var last = /*#__PURE__*/nth(-1);
	module.exports = last;

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _isNumber = /*#__PURE__*/__webpack_require__(249);
	
	/**
	 * Returns the number of elements in the array by returning `list.length`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig [a] -> Number
	 * @param {Array} list The array to inspect.
	 * @return {Number} The length of the array.
	 * @example
	 *
	 *      R.length([]); //=> 0
	 *      R.length([1, 2, 3]); //=> 3
	 */
	
	
	var length = /*#__PURE__*/_curry1(function length(list) {
	  return list != null && _isNumber(list.length) ? list.length : NaN;
	});
	module.exports = length;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _reduce = /*#__PURE__*/__webpack_require__(22);
	
	var ap = /*#__PURE__*/__webpack_require__(150);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	var map = /*#__PURE__*/__webpack_require__(17);
	
	/**
	 * "lifts" a function to be the specified arity, so that it may "map over" that
	 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Function
	 * @sig Number -> (*... -> *) -> ([*]... -> [*])
	 * @param {Function} fn The function to lift into higher context
	 * @return {Function} The lifted function.
	 * @see R.lift, R.ap
	 * @example
	 *
	 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
	 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
	 */
	
	
	var liftN = /*#__PURE__*/_curry2(function liftN(arity, fn) {
	  var lifted = curryN(arity, fn);
	  return curryN(arity, function () {
	    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
	  });
	});
	module.exports = liftN;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var sum = /*#__PURE__*/__webpack_require__(274);
	
	/**
	 * Returns the mean of the given list of numbers.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Math
	 * @sig [Number] -> Number
	 * @param {Array} list
	 * @return {Number}
	 * @see R.median
	 * @example
	 *
	 *      R.mean([2, 7, 9]); //=> 6
	 *      R.mean([]); //=> NaN
	 */
	
	
	var mean = /*#__PURE__*/_curry1(function mean(list) {
	  return sum(list) / list.length;
	});
	module.exports = mean;

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	var _arity = /*#__PURE__*/__webpack_require__(27);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _has = /*#__PURE__*/__webpack_require__(15);
	
	/**
	 * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an
	 * additional function that will be applied to a given argument set and used to
	 * create the cache key under which the results of the function to be memoized
	 * will be stored. Care must be taken when implementing key generation to avoid
	 * clashes that may overwrite previous entries erroneously.
	 *
	 *
	 * @func
	 * @memberOf R
	 * @since v0.24.0
	 * @category Function
	 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
	 * @param {Function} fn The function to generate the cache key.
	 * @param {Function} fn The function to memoize.
	 * @return {Function} Memoized version of `fn`.
	 * @see R.memoize
	 * @example
	 *
	 *      let count = 0;
	 *      const factorial = R.memoizeWith(R.identity, n => {
	 *        count += 1;
	 *        return R.product(R.range(1, n + 1));
	 *      });
	 *      factorial(5); //=> 120
	 *      factorial(5); //=> 120
	 *      factorial(5); //=> 120
	 *      count; //=> 1
	 */
	
	
	var memoizeWith = /*#__PURE__*/_curry2(function memoizeWith(mFn, fn) {
	  var cache = {};
	  return _arity(fn.length, function () {
	    var key = mFn.apply(this, arguments);
	    if (!_has(key, cache)) {
	      cache[key] = fn.apply(this, arguments);
	    }
	    return cache[key];
	  });
	});
	module.exports = memoizeWith;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Multiplies two numbers. Equivalent to `a * b` but curried.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a The first value.
	 * @param {Number} b The second value.
	 * @return {Number} The result of `a * b`.
	 * @see R.divide
	 * @example
	 *
	 *      var double = R.multiply(2);
	 *      var triple = R.multiply(3);
	 *      double(3);       //=>  6
	 *      triple(4);       //=> 12
	 *      R.multiply(2, 5);  //=> 10
	 */
	
	
	var multiply = /*#__PURE__*/_curry2(function multiply(a, b) {
	  return a * b;
	});
	module.exports = multiply;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * A function that returns the `!` of its argument. It will return `true` when
	 * passed false-y value, and `false` when passed a truth-y one.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig * -> Boolean
	 * @param {*} a any value
	 * @return {Boolean} the logical inverse of passed argument.
	 * @see R.complement
	 * @example
	 *
	 *      R.not(true); //=> false
	 *      R.not(false); //=> true
	 *      R.not(0); //=> true
	 *      R.not(1); //=> false
	 */
	
	
	var not = /*#__PURE__*/_curry1(function not(a) {
	  return !a;
	});
	module.exports = not;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Creates an object containing a single key:value pair.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Object
	 * @sig String -> a -> {String:a}
	 * @param {String} key
	 * @param {*} val
	 * @return {Object}
	 * @see R.pair
	 * @example
	 *
	 *      var matchPhrases = R.compose(
	 *        R.objOf('must'),
	 *        R.map(R.objOf('match_phrase'))
	 *      );
	 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
	 */
	
	
	var objOf = /*#__PURE__*/_curry2(function objOf(key, val) {
	  var obj = {};
	  obj[key] = val;
	  return obj;
	});
	module.exports = objOf;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns `true` if one or both of its arguments are `true`. Returns `false`
	 * if both arguments are `false`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig a -> b -> a | b
	 * @param {Any} a
	 * @param {Any} b
	 * @return {Any} the first argument if truthy, otherwise the second argument.
	 * @see R.either
	 * @example
	 *
	 *      R.or(true, true); //=> true
	 *      R.or(true, false); //=> true
	 *      R.or(false, true); //=> true
	 *      R.or(false, false); //=> false
	 */
	
	
	var or = /*#__PURE__*/_curry2(function or(a, b) {
	  return a || b;
	});
	module.exports = or;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	// `Identity` is a functor that holds a single value, where `map` simply
	// transforms the held value with the provided function.
	
	
	var Identity = function (x) {
	  return { value: x, map: function (f) {
	      return Identity(f(x));
	    } };
	};
	
	/**
	 * Returns the result of "setting" the portion of the given data structure
	 * focused by the given lens to the result of applying the given function to
	 * the focused value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig Lens s a -> (a -> a) -> s -> s
	 * @param {Lens} lens
	 * @param {*} v
	 * @param {*} x
	 * @return {*}
	 * @see R.prop, R.lensIndex, R.lensProp
	 * @example
	 *
	 *      var headLens = R.lensIndex(0);
	 *
	 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
	 */
	var over = /*#__PURE__*/_curry3(function over(lens, f, x) {
	  // The value returned by the getter function is first transformed with `f`,
	  // then set as the value of an `Identity`. This is then mapped over with the
	  // setter function of the lens.
	  return lens(function (y) {
	    return Identity(f(y));
	  })(x).value;
	});
	module.exports = over;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Similar to `pick` except that this one includes a `key: undefined` pair for
	 * properties that don't exist.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig [k] -> {k: v} -> {k: v}
	 * @param {Array} names an array of String property names to copy onto a new object
	 * @param {Object} obj The object to copy from
	 * @return {Object} A new object with only properties from `names` on it.
	 * @see R.pick
	 * @example
	 *
	 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
	 */
	
	
	var pickAll = /*#__PURE__*/_curry2(function pickAll(names, obj) {
	  var result = {};
	  var idx = 0;
	  var len = names.length;
	  while (idx < len) {
	    var name = names[idx];
	    result[name] = obj[name];
	    idx += 1;
	  }
	  return result;
	});
	module.exports = pickAll;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	var _arity = /*#__PURE__*/__webpack_require__(27);
	
	var _pipe = /*#__PURE__*/__webpack_require__(529);
	
	var reduce = /*#__PURE__*/__webpack_require__(29);
	
	var tail = /*#__PURE__*/__webpack_require__(165);
	
	/**
	 * Performs left-to-right function composition. The leftmost function may have
	 * any arity; the remaining functions must be unary.
	 *
	 * In some libraries this function is named `sequence`.
	 *
	 * **Note:** The result of pipe is not automatically curried.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
	 * @param {...Function} functions
	 * @return {Function}
	 * @see R.compose
	 * @example
	 *
	 *      var f = R.pipe(Math.pow, R.negate, R.inc);
	 *
	 *      f(3, 4); // -(3^4) + 1
	 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
	 */
	
	
	function pipe() {
	  if (arguments.length === 0) {
	    throw new Error('pipe requires at least one argument');
	  }
	  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
	}
	module.exports = pipe;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	var _arity = /*#__PURE__*/__webpack_require__(27);
	
	var _pipeP = /*#__PURE__*/__webpack_require__(530);
	
	var reduce = /*#__PURE__*/__webpack_require__(29);
	
	var tail = /*#__PURE__*/__webpack_require__(165);
	
	/**
	 * Performs left-to-right composition of one or more Promise-returning
	 * functions. The leftmost function may have any arity; the remaining functions
	 * must be unary.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Function
	 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
	 * @param {...Function} functions
	 * @return {Function}
	 * @see R.composeP
	 * @example
	 *
	 *      //  followersForUser :: String -> Promise [User]
	 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
	 */
	
	
	function pipeP() {
	  if (arguments.length === 0) {
	    throw new Error('pipeP requires at least one argument');
	  }
	  return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
	}
	module.exports = pipeP;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	var _concat = /*#__PURE__*/__webpack_require__(23);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns a new list with the given element at the front, followed by the
	 * contents of the list.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig a -> [a] -> [a]
	 * @param {*} el The item to add to the head of the output list.
	 * @param {Array} list The array to add to the tail of the output list.
	 * @return {Array} A new array.
	 * @see R.append
	 * @example
	 *
	 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
	 */
	
	
	var prepend = /*#__PURE__*/_curry2(function prepend(el, list) {
	  return _concat([el], list);
	});
	module.exports = prepend;

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Returns a single item by iterating through the list, successively calling
	 * the iterator function and passing it an accumulator value and the current
	 * value from the array, and then passing the result to the next call.
	 *
	 * Similar to [`reduce`](#reduce), except moves through the input list from the
	 * right to the left.
	 *
	 * The iterator function receives two values: *(value, acc)*, while the arguments'
	 * order of `reduce`'s iterator function is *(acc, value)*.
	 *
	 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
	 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
	 * on this behavior, see:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig ((a, b) -> b) -> b -> [a] -> b
	 * @param {Function} fn The iterator function. Receives two values, the current element from the array
	 *        and the accumulator.
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.reduce, R.addIndex
	 * @example
	 *
	 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
	 *      //    -               -2
	 *      //   / \              / \
	 *      //  1   -            1   3
	 *      //     / \              / \
	 *      //    2   -     ==>    2  -1
	 *      //       / \              / \
	 *      //      3   -            3   4
	 *      //         / \              / \
	 *      //        4   0            4   0
	 *
	 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
	 */
	
	
	var reduceRight = /*#__PURE__*/_curry3(function reduceRight(fn, acc, list) {
	  var idx = list.length - 1;
	  while (idx >= 0) {
	    acc = fn(list[idx], acc);
	    idx -= 1;
	  }
	  return acc;
	});
	module.exports = reduceRight;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Removes the sub-list of `list` starting at index `start` and containing
	 * `count` elements. _Note that this is not destructive_: it returns a copy of
	 * the list with the changes.
	 * <small>No lists have been harmed in the application of this function.</small>
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.2
	 * @category List
	 * @sig Number -> Number -> [a] -> [a]
	 * @param {Number} start The position to start removing elements
	 * @param {Number} count The number of elements to remove
	 * @param {Array} list The list to remove from
	 * @return {Array} A new Array with `count` elements from `start` removed.
	 * @example
	 *
	 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
	 */
	
	
	var remove = /*#__PURE__*/_curry3(function remove(start, count, list) {
	  var result = Array.prototype.slice.call(list, 0);
	  result.splice(start, count);
	  return result;
	});
	module.exports = remove;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var ap = /*#__PURE__*/__webpack_require__(150);
	
	var map = /*#__PURE__*/__webpack_require__(17);
	
	var prepend = /*#__PURE__*/__webpack_require__(270);
	
	var reduceRight = /*#__PURE__*/__webpack_require__(271);
	
	/**
	 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
	 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
	 * Applicative of Traversable.
	 *
	 * Dispatches to the `sequence` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
	 * @param {Function} of
	 * @param {*} traversable
	 * @return {*}
	 * @see R.traverse
	 * @example
	 *
	 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
	 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
	 *
	 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
	 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
	 */
	
	
	var sequence = /*#__PURE__*/_curry2(function sequence(of, traversable) {
	  return typeof traversable.sequence === 'function' ? traversable.sequence(of) : reduceRight(function (x, acc) {
	    return ap(map(prepend, x), acc);
	  }, of([]), traversable);
	});
	module.exports = sequence;

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	var add = /*#__PURE__*/__webpack_require__(93);
	
	var reduce = /*#__PURE__*/__webpack_require__(29);
	
	/**
	 * Adds together all the elements of a list.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig [Number] -> Number
	 * @param {Array} list An array of numbers
	 * @return {Number} The sum of all the numbers in the list.
	 * @see R.reduce
	 * @example
	 *
	 *      R.sum([2,4,6,8,100,1]); //=> 121
	 */
	
	
	var sum = /*#__PURE__*/reduce(add, 0);
	module.exports = sum;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var drop = /*#__PURE__*/__webpack_require__(239);
	
	/**
	 * Returns a new list containing the last `n` elements of the given list.
	 * If `n > list.length`, returns a list of `list.length` elements.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig Number -> [a] -> [a]
	 * @sig Number -> String -> String
	 * @param {Number} n The number of elements to return.
	 * @param {Array} xs The collection to consider.
	 * @return {Array}
	 * @see R.dropLast
	 * @example
	 *
	 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
	 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
	 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
	 *      R.takeLast(3, 'ramda');               //=> 'mda'
	 */
	
	
	var takeLast = /*#__PURE__*/_curry2(function takeLast(n, xs) {
	  return drop(n >= 0 ? xs.length - n : 0, xs);
	});
	module.exports = takeLast;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Calls an input function `n` times, returning an array containing the results
	 * of those function calls.
	 *
	 * `fn` is passed one argument: The current value of `n`, which begins at `0`
	 * and is gradually incremented to `n - 1`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.3
	 * @category List
	 * @sig (Number -> a) -> Number -> [a]
	 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
	 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
	 * @return {Array} An array containing the return values of all calls to `fn`.
	 * @see R.repeat
	 * @example
	 *
	 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
	 * @symb R.times(f, 0) = []
	 * @symb R.times(f, 1) = [f(0)]
	 * @symb R.times(f, 2) = [f(0), f(1)]
	 */
	
	
	var times = /*#__PURE__*/_curry2(function times(fn, n) {
	  var len = Number(n);
	  var idx = 0;
	  var list;
	
	  if (len < 0 || isNaN(len)) {
	    throw new RangeError('n must be a non-negative number');
	  }
	  list = new Array(len);
	  while (idx < len) {
	    list[idx] = fn(idx);
	    idx += 1;
	  }
	  return list;
	});
	module.exports = times;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	var _Set = /*#__PURE__*/__webpack_require__(517);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns a new list containing only one copy of each element in the original
	 * list, based upon the value returned by applying the supplied function to
	 * each list element. Prefers the first item if the supplied function produces
	 * the same value on two items. [`R.equals`](#equals) is used for comparison.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig (a -> b) -> [a] -> [a]
	 * @param {Function} fn A function used to produce a value to use during comparisons.
	 * @param {Array} list The array to consider.
	 * @return {Array} The list of unique items.
	 * @example
	 *
	 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
	 */
	
	
	var uniqBy = /*#__PURE__*/_curry2(function uniqBy(fn, list) {
	  var set = new _Set();
	  var result = [];
	  var idx = 0;
	  var appliedItem, item;
	
	  while (idx < list.length) {
	    item = list[idx];
	    appliedItem = fn(item);
	    if (set.add(appliedItem)) {
	      result.push(item);
	    }
	    idx += 1;
	  }
	  return result;
	});
	module.exports = uniqBy;

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	var _containsWith = /*#__PURE__*/__webpack_require__(96);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns a new list containing only one copy of each element in the original
	 * list, based upon the value returned by applying the supplied predicate to
	 * two list elements. Prefers the first item if two items compare equal based
	 * on the predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.0
	 * @category List
	 * @sig ((a, a) -> Boolean) -> [a] -> [a]
	 * @param {Function} pred A predicate used to test whether two items are equal.
	 * @param {Array} list The array to consider.
	 * @return {Array} The list of unique items.
	 * @example
	 *
	 *      var strEq = R.eqBy(String);
	 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
	 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
	 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
	 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
	 */
	
	
	var uniqWith = /*#__PURE__*/_curry2(function uniqWith(pred, list) {
	  var idx = 0;
	  var len = list.length;
	  var result = [];
	  var item;
	  while (idx < len) {
	    item = list[idx];
	    if (!_containsWith(pred, item, result)) {
	      result[result.length] = item;
	    }
	    idx += 1;
	  }
	  return result;
	});
	module.exports = uniqWith;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	/**
	 * Accepts a function `fn` and a list of transformer functions and returns a
	 * new curried function. When the new function is invoked, it calls the
	 * function `fn` with parameters consisting of the result of calling each
	 * supplied handler on successive arguments to the new function.
	 *
	 * If more arguments are passed to the returned function than transformer
	 * functions, those arguments are passed directly to `fn` as additional
	 * parameters. If you expect additional arguments that don't need to be
	 * transformed, although you can ignore them, it's best to pass an identity
	 * function so that the new function reports the correct arity.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
	 * @param {Function} fn The function to wrap.
	 * @param {Array} transformers A list of transformer functions
	 * @return {Function} The wrapped function.
	 * @see R.converge
	 * @example
	 *
	 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
	 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
	 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
	 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
	 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
	 */
	
	
	var useWith = /*#__PURE__*/_curry2(function useWith(fn, transformers) {
	  return curryN(transformers.length, function () {
	    var args = [];
	    var idx = 0;
	    while (idx < transformers.length) {
	      args.push(transformers[idx].call(this, arguments[idx]));
	      idx += 1;
	    }
	    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
	  });
	});
	module.exports = useWith;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var keys = /*#__PURE__*/__webpack_require__(28);
	
	/**
	 * Returns a list of all the enumerable own properties of the supplied object.
	 * Note that the order of the output array is not guaranteed across different
	 * JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> [v]
	 * @param {Object} obj The object to extract values from
	 * @return {Array} An array of the values of the object's own properties.
	 * @see R.valuesIn, R.keys
	 * @example
	 *
	 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
	 */
	
	
	var values = /*#__PURE__*/_curry1(function values(obj) {
	  var props = keys(obj);
	  var len = props.length;
	  var vals = [];
	  var idx = 0;
	  while (idx < len) {
	    vals[idx] = obj[props[idx]];
	    idx += 1;
	  }
	  return vals;
	});
	module.exports = values;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _has = /*#__PURE__*/__webpack_require__(15);
	
	/**
	 * Takes a spec object and a test object; returns true if the test satisfies
	 * the spec. Each of the spec's own properties must be a predicate function.
	 * Each predicate is applied to the value of the corresponding property of the
	 * test object. `where` returns true if all the predicates return true, false
	 * otherwise.
	 *
	 * `where` is well suited to declaratively expressing constraints for other
	 * functions such as [`filter`](#filter) and [`find`](#find).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category Object
	 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
	 * @param {Object} spec
	 * @param {Object} testObj
	 * @return {Boolean}
	 * @see R.propSatisfies, R.whereEq
	 * @example
	 *
	 *      // pred :: Object -> Boolean
	 *      var pred = R.where({
	 *        a: R.equals('foo'),
	 *        b: R.complement(R.equals('bar')),
	 *        x: R.gt(R.__, 10),
	 *        y: R.lt(R.__, 20)
	 *      });
	 *
	 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
	 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
	 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
	 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
	 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
	 */
	
	
	var where = /*#__PURE__*/_curry2(function where(spec, testObj) {
	  for (var prop in spec) {
	    if (_has(prop, spec) && !spec[prop](testObj[prop])) {
	      return false;
	    }
	  }
	  return true;
	});
	module.exports = where;

/***/ }),
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _chartScore = __webpack_require__(325);
	
	var _chartScore2 = _interopRequireDefault(_chartScore);
	
	var _chartTimings = __webpack_require__(326);
	
	var _chartTimings2 = _interopRequireDefault(_chartTimings);
	
	var _chartBytes = __webpack_require__(324);
	
	var _chartBytes2 = _interopRequireDefault(_chartBytes);
	
	var _drag = __webpack_require__(330);
	
	var _utils = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Load the Visualization API and the corechart package.
	
	(0, _utils.scriptAsync)('www.gstatic.com/charts/loader.js', function () {
	    google.charts.load('current', { 'packages': ['corechart'] });
	});
	
	var IndexPage = function (_React$Component) {
	    _inherits(IndexPage, _React$Component);
	
	    function IndexPage(props) {
	        _classCallCheck(this, IndexPage);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.handleFiles = _this.handleFiles.bind(_this);
	        return _this;
	    }
	
	    IndexPage.prototype.handleFiles = function () {
	        var _ref = _asyncToGenerator(function* (files) {
	            var read = yield (0, _utils.readFiles)(files);
	            (0, _utils.idleCallback)(function () {
	                try {
	                    (0, _utils.hide)('#parseError');
	                    (0, _utils.show)('#charts');
	                    console.log(read);
	                    (0, _chartScore2.default)('chart_score', read);
	                    (0, _chartBytes2.default)('chart_bytes', read);
	                    (0, _chartTimings2.default)('chart_timings', read);
	                } catch (e) {
	                    (0, _utils.hide)('#charts');
	                    (0, _utils.show)('#parseError');
	                }
	            });
	        });
	
	        function handleFiles(_x) {
	            return _ref.apply(this, arguments);
	        }
	
	        return handleFiles;
	    }();
	
	    IndexPage.prototype.componentDidMount = function componentDidMount() {
	        console.log(this.handleFiles);
	        (0, _drag.dragDrop)('drop-area', this.handleFiles);
	    };
	
	    IndexPage.prototype.render = function render() {
	        var _this2 = this;
	
	        return _react2.default.createElement(
	            'main',
	            null,
	            _react2.default.createElement(
	                'h2',
	                null,
	                'Keep your website under budget'
	            ),
	            _react2.default.createElement('p', { className: 'description' }),
	            _react2.default.createElement(
	                'div',
	                { id: 'drop-area' },
	                _react2.default.createElement(
	                    'form',
	                    { className: 'my-form' },
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        'Select/Drag multiple Lighthouse reports'
	                    ),
	                    _react2.default.createElement('input', { type: 'file', id: 'fileElem', multiple: true, accept: '.json', onChange: function onChange(e) {
	                            return _this2.handleFiles(e.target.files);
	                        } }),
	                    _react2.default.createElement(
	                        'label',
	                        { className: 'button', htmlFor: 'fileElem' },
	                        'Select reports'
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { id: 'charts' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'score hidden' },
	                    _react2.default.createElement(
	                        'h2',
	                        { className: 'score-title' },
	                        'Score'
	                    ),
	                    _react2.default.createElement('div', { id: 'chart_score' }),
	                    _react2.default.createElement('div', { id: 'legend' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'flexy' },
	                        _react2.default.createElement(
	                            'a',
	                            { id: 'score__download', className: 'button', download: 'score.png' },
	                            'Download'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'bytes hidden' },
	                    _react2.default.createElement(
	                        'h2',
	                        { className: 'chart-bytes' },
	                        'Bytes'
	                    ),
	                    _react2.default.createElement('div', { id: 'chart_bytes' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'flexy' },
	                        _react2.default.createElement(
	                            'a',
	                            { id: 'bytes__download', className: 'button', download: 'bytes.png' },
	                            'Download'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'timings hidden' },
	                    _react2.default.createElement(
	                        'h2',
	                        { className: 'chart-timings' },
	                        'Timings'
	                    ),
	                    _react2.default.createElement('div', { id: 'chart_timings' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'flexy' },
	                        _react2.default.createElement(
	                            'a',
	                            { id: 'timings__download', className: 'button', download: 'timings.png' },
	                            'Download'
	                        )
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { id: 'parseError', className: 'error hidden' },
	                'Oops something wrong happened!!'
	            )
	        );
	    };
	
	    return IndexPage;
	}(_react2.default.Component);
	
	exports.default = IndexPage;
	module.exports = exports['default'];

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = drawChartBytes;
	
	var _formatters = __webpack_require__(191);
	
	var _dataUrl = __webpack_require__(116);
	
	var _dataUrl2 = _interopRequireDefault(_dataUrl);
	
	var _dataBytes = __webpack_require__(327);
	
	var _utils = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function drawChartBytes(idSelector, reports) {
	  var _series;
	
	  // Create the data table.
	  var data = google.visualization.arrayToDataTable([[].concat((0, _dataUrl2.default)(reports), ['Budget'])].concat((0, _dataBytes.dataBytes)(reports)));
	
	  // Set chart options
	  var options = {
	    legend: { position: 'top', maxLines: 1 },
	    bar: { groupWidth: '75%' },
	    seriesType: 'bars',
	    series: (_series = {}, _series[reports.length] = { type: 'line' }, _series)
	  };
	
	  var formatter = (0, _formatters.suffixFormatter)(' KB');
	  reports.forEach(function (el, index) {
	    formatter.format(data, index + 1);
	  });
	  formatter.format(data, reports.length + 1);
	  // Instantiate and draw our chart, passing in some options.
	
	  (0, _utils.show)('.bytes');
	
	  var chart = new google.visualization.ComboChart(document.getElementById(idSelector));
	
	  (0, _utils.addDownloadImage)(chart, 'bytes__download');
	
	  chart.draw(data, options);
	
	  (0, _utils.resizeChart)(chart, data, options);
	}
	module.exports = exports['default'];

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = drawChartScore;
	
	var _dataUrl = __webpack_require__(116);
	
	var _dataUrl2 = _interopRequireDefault(_dataUrl);
	
	var _dataScore = __webpack_require__(328);
	
	var _dataScore2 = _interopRequireDefault(_dataScore);
	
	var _utils = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function drawChartScore(idSelector, reports) {
	  var _series;
	
	  // Create the data table.
	  var data = window.google.visualization.arrayToDataTable([[].concat((0, _dataUrl2.default)(reports), ['Budget'])].concat((0, _dataScore2.default)(reports)));
	
	  // Set chart options
	  var options = {
	    legend: { position: 'top', maxLines: 1 },
	    bar: { groupWidth: '75%' },
	    seriesType: 'bars',
	    series: (_series = {}, _series[reports.length] = { type: 'line' }, _series),
	    animation: { startup: true }
	  };
	
	  (0, _utils.show)('.score');
	  // Instantiate and draw our chart, passing in some options.
	  var chart = new google.visualization.ComboChart(document.getElementById(idSelector));
	
	  (0, _utils.addDownloadImage)(chart, 'score__download');
	
	  chart.draw(data, options);
	
	  (0, _utils.resizeChart)(chart, data, options);
	}
	module.exports = exports['default'];

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = drawChartTimings;
	
	var _dataUrl = __webpack_require__(116);
	
	var _dataUrl2 = _interopRequireDefault(_dataUrl);
	
	var _dataTimings = __webpack_require__(329);
	
	var _formatters = __webpack_require__(191);
	
	var _utils = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function drawChartTimings(idSelector, reports) {
	  var _series;
	
	  // Create the data table.
	  var data = google.visualization.arrayToDataTable([[].concat((0, _dataUrl2.default)(reports), ['Budget'])].concat((0, _dataTimings.dataTimings)(reports)));
	
	  // Set chart options
	  var options = {
	    legend: { position: 'top', maxLines: 1 },
	    bar: { groupWidth: '75%' },
	    seriesType: 'bars',
	    series: (_series = {}, _series[reports.length] = { type: 'line' }, _series)
	  };
	
	  (0, _utils.show)('.timings');
	  // Instantiate and draw our chart, passing in some options.
	  var chart = new google.visualization.ComboChart(document.getElementById(idSelector));
	  var formatter = new _formatters.suffixFormatter(' ms');
	  reports.forEach(function (el, index) {
	    formatter.format(data, index + 1);
	  });
	  formatter.format(data, reports.length + 1);
	
	  (0, _utils.addDownloadImage)(chart, 'timings__download');
	
	  chart.draw(data, options);
	
	  (0, _utils.resizeChart)(chart, data, options);
	}
	module.exports = exports['default'];

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.dataBytes = undefined;
	
	var _ramda = __webpack_require__(32);
	
	var _mappingBytes = __webpack_require__(331);
	
	var _utils = __webpack_require__(35);
	
	var toKb = (0, _ramda.divide)(_ramda.__, 1000);
	var budget = (0, _ramda.pipe)(_utils.minList, _utils.off, function (n) {
	    return n.toFixed(2);
	}, parseFloat);
	
	var dataBytes = exports.dataBytes = function dataBytes(reports) {
	    var listBytes = (0, _ramda.map)((0, _ramda.pipe)(_mappingBytes.totalByteWeightValue, toKb), reports);
	    var listTotalJS = (0, _ramda.map)((0, _ramda.pipe)(_mappingBytes.totalByteWeightJS, toKb), reports);
	    var listTotalCSS = (0, _ramda.map)((0, _ramda.pipe)(_mappingBytes.totalByteWeightCSS, toKb), reports);
	    var listTotalIMG = (0, _ramda.map)((0, _ramda.pipe)(_mappingBytes.totalByteWeightIMG, toKb), reports);
	    var listTotalFONT = (0, _ramda.map)((0, _ramda.pipe)(_mappingBytes.totalByteWeightFONT, toKb), reports);
	    var listTotalJSON = (0, _ramda.map)((0, _ramda.pipe)(_mappingBytes.totalByteWeightJSON, toKb), reports);
	
	    var budgetBytes = budget(listBytes);
	    var budgetJS = budget(listTotalJS);
	    var budgetCSS = budget(listTotalCSS);
	    var budgetIMG = budget(listTotalIMG);
	    var budgetFont = budget(listTotalFONT);
	    var budgetJSON = budget(listTotalJSON);
	
	    return [['Total Size\n ' + budgetBytes].concat(listBytes, [budgetBytes]), ['Total JS\n ' + budgetJS].concat(listTotalJS, [budgetJS]), ['Total CSS\n ' + budgetCSS].concat(listTotalCSS, [budgetCSS]), ['Total IMG\n ' + budgetIMG].concat(listTotalIMG, [budgetIMG]), ['Total Font\n ' + budgetFont].concat(listTotalFONT, [budgetFont]), ['Total JSON\n ' + budgetJSON].concat(listTotalJSON, [budgetJSON])];
	};
	
	// export const budgetBytes = ({
	//   size: pipe(
	//         map(totalByteWeightValue),
	//         minList,
	//         off
	//     ),
	//   js: pipe(
	//         map(totalByteWeightJS),
	//         minList,
	//         off
	//     ),
	//   css: pipe(
	//         map(totalByteWeightCSS),
	//         minList,
	//         off
	//     ),
	//   img: pipe(
	//         map(totalByteWeightIMG),
	//         minList,
	//         off
	//     ),
	//   font: pipe(
	//         map(totalByteWeightFONT),
	//         minList,
	//         off
	//     ),
	//   json: pipe(
	//         map(totalByteWeightJSON),
	//         minList,
	//         off
	//     ),
	// });

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = dataScore;
	
	var _ramda = __webpack_require__(32);
	
	var _mappingScore = __webpack_require__(332);
	
	var _utils = __webpack_require__(35);
	
	var budgetMax = (0, _ramda.pipe)(_utils.maxList, function (n) {
	    return n.toFixed(2);
	}, parseFloat);
	
	function dataScore(reports) {
	    var listPerf = (0, _ramda.map)(_mappingScore.reportCategoriesPerfScore, reports);
	    var listPWA = (0, _ramda.map)(_mappingScore.reportCategoriesPWAScore, reports);
	    var listBestPractice = (0, _ramda.map)(_mappingScore.reportCategoriesBestpracticeScore, reports);
	    var listAccessibility = (0, _ramda.map)(_mappingScore.reportCategoriesAccessibilityScore, reports);
	    var listSEO = (0, _ramda.map)(_mappingScore.reportCategoriesSEOScore, reports);
	
	    var budgetPerf = budgetMax(listPerf);
	    var budgetPWA = budgetMax(listPWA);
	    var budgetBestPractice = budgetMax(listBestPractice);
	    var budgetAccessibility = budgetMax(listAccessibility);
	    var budgetSEO = budgetMax(listSEO);
	
	    return [['Performance\n ' + budgetPerf].concat(listPerf, [budgetPerf]), ['PWA\n ' + budgetPWA].concat(listPWA, [budgetPWA]), ['Best Practice\n ' + budgetBestPractice].concat(listBestPractice, [budgetBestPractice]), ['Accessibility\n ' + budgetAccessibility].concat(listAccessibility, [budgetAccessibility]), ['SEO\n ' + budgetSEO].concat(listSEO, [budgetSEO])];
	}
	module.exports = exports['default'];

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.dataTimings = undefined;
	
	var _ramda = __webpack_require__(32);
	
	var _mappingTimings = __webpack_require__(333);
	
	var _utils = __webpack_require__(35);
	
	var budget = (0, _ramda.pipe)(_utils.minList, _utils.off, function (n) {
	    return n.toFixed(2);
	}, parseFloat);
	
	var dataTimings = exports.dataTimings = function dataTimings(reports) {
	    var listFirstMeaningfulPaint = (0, _ramda.map)(_mappingTimings.firstMeaningfulPaint, reports);
	    var listFirstVisualChange = (0, _ramda.map)(_mappingTimings.firstVisualChange, reports);
	    var listFirstInteractive = (0, _ramda.map)(_mappingTimings.firstInteractive, reports);
	    var listVisuallyComplete = (0, _ramda.map)(_mappingTimings.visuallyComplete, reports);
	    var listTimeToFirstByte = (0, _ramda.map)(_mappingTimings.timeToFirstByte, reports);
	    var listJsParseCompile = (0, _ramda.map)(_mappingTimings.jsParseCompile, reports);
	
	    var budgetFirstMeaningfulPaint = budget(listFirstMeaningfulPaint);
	    var budgetFirstVisualChange = budget(listFirstVisualChange);
	    var budgetFirstInteractive = budget(listFirstInteractive);
	    var budgetVisuallyComplete = budget(listVisuallyComplete);
	    var budgetTimeToFirstByte = budget(listTimeToFirstByte);
	    var budgetJsParseCompile = budget(listJsParseCompile);
	
	    return [['First MeaningfulPaint\n ' + budgetFirstMeaningfulPaint].concat(listFirstMeaningfulPaint, [budgetFirstMeaningfulPaint]), ['First Visual Change\n ' + budgetFirstVisualChange].concat(listFirstVisualChange, [budgetFirstVisualChange]), ['First Interactive\n ' + budgetFirstInteractive].concat(listFirstInteractive, [budgetFirstInteractive]), ['Visually Complete\n ' + budgetVisuallyComplete].concat(listVisuallyComplete, [budgetVisuallyComplete]), ['Time to first byte\n ' + budgetTimeToFirstByte].concat(listTimeToFirstByte, [budgetTimeToFirstByte]), ['JS Parse & Compile\n ' + budgetJsParseCompile].concat(listJsParseCompile, [budgetJsParseCompile])];
	};
	
	// export const budgetTimings = ({
	//   meaningfulPaint: pipe(
	//         map(firstMeaningfulPaint),
	//         minList,
	//         off
	//     ),
	//   firstVisualChange: pipe(
	//         map(firstVisualChange),
	//         minList,
	//         off
	//     ),
	//   firstInteractive: pipe(
	//         map(firstInteractive),
	//         minList,
	//         off
	//     ),
	//   visuallyComplete: pipe(
	//         map(visuallyComplete),
	//         minList,
	//         off
	//     ),
	//   timeToFirstByte: pipe(
	//         map(timeToFirstByte),
	//         minList,
	//         off
	//     ),
	//   parse: pipe(
	//         map(jsParseCompile),
	//         minList,
	//         off
	//     ),
	// });

/***/ }),
/* 330 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var preventDefaults = function preventDefaults(e) {
	  e.preventDefault();
	  e.stopPropagation();
	};
	
	var dragDrop = exports.dragDrop = function dragDrop(idArea, cb) {
	  var dropArea = document.getElementById(idArea);
	
	  function highlight(e) {
	    dropArea.classList.add('highlight');
	  }
	
	  function unhighlight(e) {
	    dropArea.classList.remove('highlight');
	  }
	
	  // Callback that creates and populates a data table,
	  // instantiates the pie chart, passes in the data and
	  // draws it.
	
	  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
	    dropArea.addEventListener(eventName, preventDefaults, false);
	  });
	
	  ['dragenter', 'dragover'].forEach(function (eventName) {
	    dropArea.addEventListener(eventName, highlight, false);
	  });['dragleave', 'drop'].forEach(function (eventName) {
	    dropArea.addEventListener(eventName, unhighlight, false);
	  });
	
	  var handleDrop = function handleDrop(cb) {
	    return function (e) {
	      var dt = e.dataTransfer;
	      var files = dt.files;
	
	      cb(files);
	    };
	  };
	
	  dropArea.addEventListener('drop', handleDrop(cb), false);
	};

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.numberOfRequests = exports.totalByteWeightFONT = exports.totalByteWeightIMG = exports.totalByteWeightJSON = exports.totalByteWeightCSS = exports.totalByteWeightJS = exports.totalByteWeightValue = exports.totalByteWeightExtendedInfo = undefined;
	
	var _ramda = __webpack_require__(32);
	
	var _mappingGeneric = __webpack_require__(192);
	
	/**
	 * Mapping relatives to the total bytes on the page
	 */
	
	var totalByteWeight = (0, _ramda.pipe)(_mappingGeneric.audits, (0, _ramda.prop)('total-byte-weight'));
	var totalByteWeightExtendedInfo = exports.totalByteWeightExtendedInfo = (0, _ramda.pipe)(totalByteWeight, (0, _ramda.path)(['extendedInfo', 'value', 'results']));
	
	var totalByteWeightValue = exports.totalByteWeightValue = (0, _ramda.pipe)(totalByteWeight, (0, _ramda.prop)('rawValue'));
	
	var endsJS = (0, _ramda.test)(/\.js$/g);
	var endsCSS = (0, _ramda.test)(/\.css$/g);
	var endsJSON = (0, _ramda.test)(/\.json$/g);
	var endsIMG = (0, _ramda.test)(/\.(png|jpg|jpeg|svg|webp)/g);
	var endsFONT = (0, _ramda.test)(/\.(ttf|woff|woff2|otf|eot)/g);
	var urlEndsJS = (0, _ramda.pipe)((0, _ramda.prop)('url'), endsJS);
	var urlEndsCSS = (0, _ramda.pipe)((0, _ramda.prop)('url'), endsCSS);
	var urlEndsJSON = (0, _ramda.pipe)((0, _ramda.prop)('url'), endsJSON);
	var urlEndsIMG = (0, _ramda.pipe)((0, _ramda.prop)('url'), endsIMG);
	var urlEndsFONT = (0, _ramda.pipe)((0, _ramda.prop)('url'), endsFONT);
	
	var totalByteWeightJS = exports.totalByteWeightJS = (0, _ramda.pipe)(totalByteWeightExtendedInfo, (0, _ramda.filter)(urlEndsJS), (0, _ramda.pluck)('totalBytes'), _ramda.sum);
	var totalByteWeightCSS = exports.totalByteWeightCSS = (0, _ramda.pipe)(totalByteWeightExtendedInfo, (0, _ramda.filter)(urlEndsCSS), (0, _ramda.pluck)('totalBytes'), _ramda.sum);
	var totalByteWeightJSON = exports.totalByteWeightJSON = (0, _ramda.pipe)(totalByteWeightExtendedInfo, (0, _ramda.filter)(urlEndsJSON), (0, _ramda.pluck)('totalBytes'), _ramda.sum);
	var totalByteWeightIMG = exports.totalByteWeightIMG = (0, _ramda.pipe)(totalByteWeightExtendedInfo, (0, _ramda.filter)(urlEndsIMG), (0, _ramda.pluck)('totalBytes'), _ramda.sum);
	var totalByteWeightFONT = exports.totalByteWeightFONT = (0, _ramda.pipe)(totalByteWeightExtendedInfo, (0, _ramda.filter)(urlEndsFONT), (0, _ramda.pluck)('totalBytes'), _ramda.sum);
	
	var numberOfRequests = exports.numberOfRequests = (0, _ramda.pipe)(_mappingGeneric.audits, (0, _ramda.path)(['total-byte-weight', 'extendedInfo', 'value', 'totalCompletedRequests']));

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.reportCategoriesSEOScore = exports.reportCategoriesBestpracticeScore = exports.reportCategoriesAccessibilityScore = exports.reportCategoriesPWAScore = exports.reportCategoriesPerfScore = undefined;
	
	var _ramda = __webpack_require__(32);
	
	var reportCategories = (0, _ramda.prop)('reportCategories');
	
	var reportCategoriesPerfScore = exports.reportCategoriesPerfScore = (0, _ramda.pipe)(reportCategories, (0, _ramda.find)((0, _ramda.propEq)('id', 'performance')), (0, _ramda.prop)('score'));
	var reportCategoriesPWAScore = exports.reportCategoriesPWAScore = (0, _ramda.pipe)(reportCategories, (0, _ramda.find)((0, _ramda.propEq)('id', 'pwa')), (0, _ramda.prop)('score'));
	var reportCategoriesAccessibilityScore = exports.reportCategoriesAccessibilityScore = (0, _ramda.pipe)(reportCategories, (0, _ramda.find)((0, _ramda.propEq)('id', 'accessibility')), (0, _ramda.prop)('score'));
	var reportCategoriesBestpracticeScore = exports.reportCategoriesBestpracticeScore = (0, _ramda.pipe)(reportCategories, (0, _ramda.find)((0, _ramda.propEq)('id', 'best-practices')), (0, _ramda.prop)('score'));
	var reportCategoriesSEOScore = exports.reportCategoriesSEOScore = (0, _ramda.pipe)(reportCategories, (0, _ramda.find)((0, _ramda.propEq)('id', 'seo')), (0, _ramda.prop)('score'));

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.timeToFirstByte = exports.jsParseCompile = exports.minorGC = exports.compileScript = exports.evaluateScript = exports.firstVisualChange = exports.visuallyComplete = exports.firstInteractive = exports.firstMeaningfulPaint = undefined;
	
	var _ramda = __webpack_require__(32);
	
	var _mappingGeneric = __webpack_require__(192);
	
	var firstMeaningfulPaint = exports.firstMeaningfulPaint = (0, _ramda.pipe)(_mappingGeneric.audits, (0, _ramda.path)(['first-meaningful-paint', 'rawValue'])); //ms
	var firstInteractive = exports.firstInteractive = (0, _ramda.pipe)(_mappingGeneric.audits, (0, _ramda.path)(['first-interactive', 'rawValue'])); //ms
	
	var speedIndexMetricTimings = (0, _ramda.path)(['speed-index-metric', 'extendedInfo', 'value', 'timings']);
	var visuallyComplete = exports.visuallyComplete = (0, _ramda.pipe)(_mappingGeneric.audits, speedIndexMetricTimings, (0, _ramda.prop)('visuallyComplete')); //ms
	var firstVisualChange = exports.firstVisualChange = (0, _ramda.pipe)(_mappingGeneric.audits, speedIndexMetricTimings, (0, _ramda.prop)('firstVisualChange')); //ms
	
	var mainthreadWorkBreakdownExtendedInfo = (0, _ramda.path)(['mainthread-work-breakdown', 'extendedInfo', 'value']);
	
	var evaluateScript = exports.evaluateScript = (0, _ramda.pipe)(_mappingGeneric.audits, mainthreadWorkBreakdownExtendedInfo, (0, _ramda.prop)('Evaluate Script'));
	var compileScript = exports.compileScript = (0, _ramda.pipe)(_mappingGeneric.audits, mainthreadWorkBreakdownExtendedInfo, (0, _ramda.prop)('Compile Script'));
	var minorGC = exports.minorGC = (0, _ramda.pipe)(_mappingGeneric.audits, mainthreadWorkBreakdownExtendedInfo, (0, _ramda.prop)('Minor GC'));
	
	var jsParseCompile = exports.jsParseCompile = (0, _ramda.converge)(function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }
	
	    return (0, _ramda.sum)(args);
	}, [evaluateScript, compileScript, minorGC]);
	var timeToFirstByte = exports.timeToFirstByte = (0, _ramda.pipe)(_mappingGeneric.audits, (0, _ramda.path)(['time-to-first-byte', 'rawValue'])); //ms

/***/ }),
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

	var always = /*#__PURE__*/__webpack_require__(55);
	
	/**
	 * A function that always returns `false`. Any passed in parameters are ignored.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Function
	 * @sig * -> Boolean
	 * @param {*}
	 * @return {Boolean}
	 * @see R.always, R.T
	 * @example
	 *
	 *      R.F(); //=> false
	 */
	
	
	var F = /*#__PURE__*/always(false);
	module.exports = F;

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

	var always = /*#__PURE__*/__webpack_require__(55);
	
	/**
	 * A function that always returns `true`. Any passed in parameters are ignored.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Function
	 * @sig * -> Boolean
	 * @param {*}
	 * @return {Boolean}
	 * @see R.always, R.F
	 * @example
	 *
	 *      R.T(); //=> true
	 */
	
	
	var T = /*#__PURE__*/always(true);
	module.exports = T;

/***/ }),
/* 459 */
/***/ (function(module, exports) {

	/**
	 * A special placeholder value used to specify "gaps" within curried functions,
	 * allowing partial application of any combination of arguments, regardless of
	 * their positions.
	 *
	 * If `g` is a curried ternary function and `_` is `R.__`, the following are
	 * equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2, _)(1, 3)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @constant
	 * @memberOf R
	 * @since v0.6.0
	 * @category Function
	 * @example
	 *
	 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
	 *      greet('Alice'); //=> 'Hello, Alice!'
	 */
	module.exports = { '@@functional/placeholder': true };

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

	var _concat = /*#__PURE__*/__webpack_require__(23);
	
	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	/**
	 * Creates a new list iteration function from an existing one by adding two new
	 * parameters to its callback function: the current index, and the entire list.
	 *
	 * This would turn, for instance, [`R.map`](#map) function into one that
	 * more closely resembles `Array.prototype.map`. Note that this will only work
	 * for functions in which the iteration callback function is the first
	 * parameter, and where the list is the last parameter. (This latter might be
	 * unimportant if the list parameter is not used.)
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category Function
	 * @category List
	 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
	 * @param {Function} fn A list iteration function that does not pass index or list to its callback
	 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
	 * @example
	 *
	 *      var mapIndexed = R.addIndex(R.map);
	 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
	 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
	 */
	
	
	var addIndex = /*#__PURE__*/_curry1(function addIndex(fn) {
	  return curryN(fn.length, function () {
	    var idx = 0;
	    var origFn = arguments[0];
	    var list = arguments[arguments.length - 1];
	    var args = Array.prototype.slice.call(arguments, 0);
	    args[0] = function () {
	      var result = origFn.apply(this, _concat(arguments, [idx, list]));
	      idx += 1;
	      return result;
	    };
	    return fn.apply(this, args);
	  });
	});
	module.exports = addIndex;

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xall = /*#__PURE__*/__webpack_require__(535);
	
	/**
	 * Returns `true` if all elements of the list match the predicate, `false` if
	 * there are any that don't.
	 *
	 * Dispatches to the `all` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> Boolean
	 * @param {Function} fn The predicate function.
	 * @param {Array} list The array to consider.
	 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
	 *         otherwise.
	 * @see R.any, R.none, R.transduce
	 * @example
	 *
	 *      var equals3 = R.equals(3);
	 *      R.all(equals3)([3, 3, 3, 3]); //=> true
	 *      R.all(equals3)([3, 3, 1, 3]); //=> false
	 */
	
	
	var all = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['all'], _xall, function all(fn, list) {
	  var idx = 0;
	  while (idx < list.length) {
	    if (!fn(list[idx])) {
	      return false;
	    }
	    idx += 1;
	  }
	  return true;
	}));
	module.exports = all;

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	var max = /*#__PURE__*/__webpack_require__(57);
	
	var pluck = /*#__PURE__*/__webpack_require__(74);
	
	var reduce = /*#__PURE__*/__webpack_require__(29);
	
	/**
	 * Takes a list of predicates and returns a predicate that returns true for a
	 * given list of arguments if every one of the provided predicates is satisfied
	 * by those arguments.
	 *
	 * The function returned is a curried function whose arity matches that of the
	 * highest-arity predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Logic
	 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	 * @param {Array} predicates An array of predicates to check
	 * @return {Function} The combined predicate
	 * @see R.anyPass
	 * @example
	 *
	 *      var isQueen = R.propEq('rank', 'Q');
	 *      var isSpade = R.propEq('suit', '♠︎');
	 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
	 *
	 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
	 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
	 */
	
	
	var allPass = /*#__PURE__*/_curry1(function allPass(preds) {
	  return curryN(reduce(max, 0, pluck('length', preds)), function () {
	    var idx = 0;
	    var len = preds.length;
	    while (idx < len) {
	      if (!preds[idx].apply(this, arguments)) {
	        return false;
	      }
	      idx += 1;
	    }
	    return true;
	  });
	});
	module.exports = allPass;

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	var max = /*#__PURE__*/__webpack_require__(57);
	
	var pluck = /*#__PURE__*/__webpack_require__(74);
	
	var reduce = /*#__PURE__*/__webpack_require__(29);
	
	/**
	 * Takes a list of predicates and returns a predicate that returns true for a
	 * given list of arguments if at least one of the provided predicates is
	 * satisfied by those arguments.
	 *
	 * The function returned is a curried function whose arity matches that of the
	 * highest-arity predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Logic
	 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
	 * @param {Array} predicates An array of predicates to check
	 * @return {Function} The combined predicate
	 * @see R.allPass
	 * @example
	 *
	 *      var isClub = R.propEq('suit', '♣');
	 *      var isSpade = R.propEq('suit', '♠');
	 *      var isBlackCard = R.anyPass([isClub, isSpade]);
	 *
	 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
	 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
	 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
	 */
	
	
	var anyPass = /*#__PURE__*/_curry1(function anyPass(preds) {
	  return curryN(reduce(max, 0, pluck('length', preds)), function () {
	    var idx = 0;
	    var len = preds.length;
	    while (idx < len) {
	      if (preds[idx].apply(this, arguments)) {
	        return true;
	      }
	      idx += 1;
	    }
	    return false;
	  });
	});
	module.exports = anyPass;

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

	var _aperture = /*#__PURE__*/__webpack_require__(518);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xaperture = /*#__PURE__*/__webpack_require__(536);
	
	/**
	 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
	 * greater than the length of the list, an empty list is returned.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category List
	 * @sig Number -> [a] -> [[a]]
	 * @param {Number} n The size of the tuples to create
	 * @param {Array} list The list to split into `n`-length tuples
	 * @return {Array} The resulting list of `n`-length tuples
	 * @see R.transduce
	 * @example
	 *
	 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
	 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
	 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
	 */
	
	
	var aperture = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xaperture, _aperture));
	module.exports = aperture;

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

	var _concat = /*#__PURE__*/__webpack_require__(23);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns a new list containing the contents of the given list, followed by
	 * the given element.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig a -> [a] -> [a]
	 * @param {*} el The element to add to the end of the new list.
	 * @param {Array} list The list of elements to add a new item to.
	 *        list.
	 * @return {Array} A new list containing the elements of the old list followed by `el`.
	 * @see R.prepend
	 * @example
	 *
	 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
	 *      R.append('tests', []); //=> ['tests']
	 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
	 */
	
	
	var append = /*#__PURE__*/_curry2(function append(el, list) {
	  return _concat(list, [el]);
	});
	module.exports = append;

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var apply = /*#__PURE__*/__webpack_require__(229);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	var map = /*#__PURE__*/__webpack_require__(17);
	
	var max = /*#__PURE__*/__webpack_require__(57);
	
	var pluck = /*#__PURE__*/__webpack_require__(74);
	
	var reduce = /*#__PURE__*/__webpack_require__(29);
	
	var values = /*#__PURE__*/__webpack_require__(280);
	
	/**
	 * Given a spec object recursively mapping properties to functions, creates a
	 * function producing an object of the same structure, by mapping each property
	 * to the result of calling its associated function with the supplied arguments.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.20.0
	 * @category Function
	 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
	 * @param {Object} spec an object recursively mapping properties to functions for
	 *        producing the values for these properties.
	 * @return {Function} A function that returns an object of the same structure
	 * as `spec', with each property set to the value returned by calling its
	 * associated function with the supplied arguments.
	 * @see R.converge, R.juxt
	 * @example
	 *
	 *      var getMetrics = R.applySpec({
	 *        sum: R.add,
	 *        nested: { mul: R.multiply }
	 *      });
	 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
	 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
	 */
	
	
	var applySpec = /*#__PURE__*/_curry1(function applySpec(spec) {
	  spec = map(function (v) {
	    return typeof v == 'function' ? v : applySpec(v);
	  }, spec);
	  return curryN(reduce(max, 0, pluck('length', values(spec))), function () {
	    var args = arguments;
	    return map(function (f) {
	      return apply(f, args);
	    }, spec);
	  });
	});
	module.exports = applySpec;

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	* Takes a value and applies a function to it.
	*
	* This function is also known as the `thrush` combinator.
	*
	* @func
	* @memberOf R
	 * @since v0.25.0
	* @category Function
	* @sig a -> (a -> b) -> b
	* @param {*} x The value
	* @param {Function} f The function to apply
	* @return {*} The result of applying `f` to `x`
	* @example
	*
	*      var t42 = R.applyTo(42);
	*      t42(R.identity); //=> 42
	*      t42(R.add(1)); //=> 43
	*/
	
	
	var applyTo = /*#__PURE__*/_curry2(function applyTo(x, f) {
	  return f(x);
	});
	module.exports = applyTo;

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Makes an ascending comparator function out of a function that returns a value
	 * that can be compared with `<` and `>`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.23.0
	 * @category Function
	 * @sig Ord b => (a -> b) -> a -> a -> Number
	 * @param {Function} fn A function of arity one that returns a value that can be compared
	 * @param {*} a The first item to be compared.
	 * @param {*} b The second item to be compared.
	 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
	 * @see R.descend
	 * @example
	 *
	 *      var byAge = R.ascend(R.prop('age'));
	 *      var people = [
	 *        // ...
	 *      ];
	 *      var peopleByYoungestFirst = R.sort(byAge, people);
	 */
	
	
	var ascend = /*#__PURE__*/_curry3(function ascend(fn, a, b) {
	  var aa = fn(a);
	  var bb = fn(b);
	  return aa < bb ? -1 : aa > bb ? 1 : 0;
	});
	module.exports = ascend;

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var nAry = /*#__PURE__*/__webpack_require__(105);
	
	/**
	 * Wraps a function of any arity (including nullary) in a function that accepts
	 * exactly 2 parameters. Any extraneous parameters will not be passed to the
	 * supplied function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.0
	 * @category Function
	 * @sig (* -> c) -> (a, b -> c)
	 * @param {Function} fn The function to wrap.
	 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	 *         arity 2.
	 * @see R.nAry, R.unary
	 * @example
	 *
	 *      var takesThreeArgs = function(a, b, c) {
	 *        return [a, b, c];
	 *      };
	 *      takesThreeArgs.length; //=> 3
	 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
	 *
	 *      var takesTwoArgs = R.binary(takesThreeArgs);
	 *      takesTwoArgs.length; //=> 2
	 *      // Only 2 arguments are passed to the wrapped function
	 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
	 * @symb R.binary(f)(a, b, c) = f(a, b)
	 */
	
	
	var binary = /*#__PURE__*/_curry1(function binary(fn) {
	  return nAry(2, fn);
	});
	module.exports = binary;

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _isFunction = /*#__PURE__*/__webpack_require__(99);
	
	var and = /*#__PURE__*/__webpack_require__(227);
	
	var lift = /*#__PURE__*/__webpack_require__(103);
	
	/**
	 * A function which calls the two provided functions and returns the `&&`
	 * of the results.
	 * It returns the result of the first function if it is false-y and the result
	 * of the second function otherwise. Note that this is short-circuited,
	 * meaning that the second function will not be invoked if the first returns a
	 * false-y value.
	 *
	 * In addition to functions, `R.both` also accepts any fantasy-land compatible
	 * applicative functor.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category Logic
	 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	 * @param {Function} f A predicate
	 * @param {Function} g Another predicate
	 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
	 * @see R.and
	 * @example
	 *
	 *      var gt10 = R.gt(R.__, 10)
	 *      var lt20 = R.lt(R.__, 20)
	 *      var f = R.both(gt10, lt20);
	 *      f(15); //=> true
	 *      f(30); //=> false
	 */
	
	
	var both = /*#__PURE__*/_curry2(function both(f, g) {
	  return _isFunction(f) ? function _both() {
	    return f.apply(this, arguments) && g.apply(this, arguments);
	  } : lift(and)(f, g);
	});
	module.exports = both;

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

	var curry = /*#__PURE__*/__webpack_require__(154);
	
	/**
	 * Returns the result of calling its first argument with the remaining
	 * arguments. This is occasionally useful as a converging function for
	 * [`R.converge`](#converge): the first branch can produce a function while the
	 * remaining branches produce values to be passed to that function as its
	 * arguments.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Function
	 * @sig (*... -> a),*... -> a
	 * @param {Function} fn The function to apply to the remaining arguments.
	 * @param {...*} args Any number of positional arguments.
	 * @return {*}
	 * @see R.apply
	 * @example
	 *
	 *      R.call(R.add, 1, 2); //=> 3
	 *
	 *      var indentN = R.pipe(R.repeat(' '),
	 *                           R.join(''),
	 *                           R.replace(/^(?!$)/gm));
	 *
	 *      var format = R.converge(R.call, [
	 *                                  R.pipe(R.prop('indent'), indentN),
	 *                                  R.prop('value')
	 *                              ]);
	 *
	 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
	 * @symb R.call(f, a, b) = f(a, b)
	 */
	
	
	var call = /*#__PURE__*/curry(function call(fn) {
	  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
	});
	module.exports = call;

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Restricts a number to be within a range.
	 *
	 * Also works for other ordered types such as Strings and Dates.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.20.0
	 * @category Relation
	 * @sig Ord a => a -> a -> a -> a
	 * @param {Number} minimum The lower limit of the clamp (inclusive)
	 * @param {Number} maximum The upper limit of the clamp (inclusive)
	 * @param {Number} value Value to be clamped
	 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
	 * @example
	 *
	 *      R.clamp(1, 10, -5) // => 1
	 *      R.clamp(1, 10, 15) // => 10
	 *      R.clamp(1, 10, 4)  // => 4
	 */
	
	
	var clamp = /*#__PURE__*/_curry3(function clamp(min, max, value) {
	  if (min > max) {
	    throw new Error('min must not be greater than max in clamp(min, max, value)');
	  }
	  return value < min ? min : value > max ? max : value;
	});
	module.exports = clamp;

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

	var _clone = /*#__PURE__*/__webpack_require__(243);
	
	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Creates a deep copy of the value which may contain (nested) `Array`s and
	 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
	 * assigned by reference rather than copied
	 *
	 * Dispatches to a `clone` method if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {*} -> {*}
	 * @param {*} value The object or array to clone
	 * @return {*} A deeply cloned copy of `val`
	 * @example
	 *
	 *      var objects = [{}, {}, {}];
	 *      var objectsClone = R.clone(objects);
	 *      objects === objectsClone; //=> false
	 *      objects[0] === objectsClone[0]; //=> false
	 */
	
	
	var clone = /*#__PURE__*/_curry1(function clone(value) {
	  return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
	});
	module.exports = clone;

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Makes a comparator function out of a function that reports whether the first
	 * element is less than the second.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
	 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
	 * is less than the second, `false` otherwise
	 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
	 * @example
	 *
	 *      var byAge = R.comparator((a, b) => a.age < b.age);
	 *      var people = [
	 *        // ...
	 *      ];
	 *      var peopleByIncreasingAge = R.sort(byAge, people);
	 */
	
	
	var comparator = /*#__PURE__*/_curry1(function comparator(pred) {
	  return function (a, b) {
	    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
	  };
	});
	module.exports = comparator;

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

	var lift = /*#__PURE__*/__webpack_require__(103);
	
	var not = /*#__PURE__*/__webpack_require__(263);
	
	/**
	 * Takes a function `f` and returns a function `g` such that if called with the same arguments
	 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
	 *
	 * `R.complement` may be applied to any functor
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category Logic
	 * @sig (*... -> *) -> (*... -> Boolean)
	 * @param {Function} f
	 * @return {Function}
	 * @see R.not
	 * @example
	 *
	 *      var isNotNil = R.complement(R.isNil);
	 *      isNil(null); //=> true
	 *      isNotNil(null); //=> false
	 *      isNil(7); //=> false
	 *      isNotNil(7); //=> true
	 */
	
	
	var complement = /*#__PURE__*/lift(not);
	module.exports = complement;

/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

	var pipeP = /*#__PURE__*/__webpack_require__(269);
	
	var reverse = /*#__PURE__*/__webpack_require__(108);
	
	/**
	 * Performs right-to-left composition of one or more Promise-returning
	 * functions. The rightmost function may have any arity; the remaining
	 * functions must be unary.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Function
	 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
	 * @param {...Function} functions The functions to compose
	 * @return {Function}
	 * @see R.pipeP
	 * @example
	 *
	 *      var db = {
	 *        users: {
	 *          JOE: {
	 *            name: 'Joe',
	 *            followers: ['STEVE', 'SUZY']
	 *          }
	 *        }
	 *      }
	 *
	 *      // We'll pretend to do a db lookup which returns a promise
	 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
	 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
	 *      lookupUser('JOE').then(lookupFollowers)
	 *
	 *      //  followersForUser :: String -> Promise [UserId]
	 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
	 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
	 *      // Followers: ["STEVE","SUZY"]
	 */
	
	
	function composeP() {
	  if (arguments.length === 0) {
	    throw new Error('composeP requires at least one argument');
	  }
	  return pipeP.apply(this, reverse(arguments));
	}
	module.exports = composeP;

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

	var _arity = /*#__PURE__*/__webpack_require__(27);
	
	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var map = /*#__PURE__*/__webpack_require__(17);
	
	var max = /*#__PURE__*/__webpack_require__(57);
	
	var reduce = /*#__PURE__*/__webpack_require__(29);
	
	/**
	 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
	 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
	 * to `fn` are applied to each of the predicates in turn until one returns a
	 * "truthy" value, at which point `fn` returns the result of applying its
	 * arguments to the corresponding transformer. If none of the predicates
	 * matches, `fn` returns undefined.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category Logic
	 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
	 * @param {Array} pairs A list of [predicate, transformer]
	 * @return {Function}
	 * @example
	 *
	 *      var fn = R.cond([
	 *        [R.equals(0),   R.always('water freezes at 0°C')],
	 *        [R.equals(100), R.always('water boils at 100°C')],
	 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
	 *      ]);
	 *      fn(0); //=> 'water freezes at 0°C'
	 *      fn(50); //=> 'nothing special happens at 50°C'
	 *      fn(100); //=> 'water boils at 100°C'
	 */
	
	
	var cond = /*#__PURE__*/_curry1(function cond(pairs) {
	  var arity = reduce(max, 0, map(function (pair) {
	    return pair[0].length;
	  }, pairs));
	  return _arity(arity, function () {
	    var idx = 0;
	    while (idx < pairs.length) {
	      if (pairs[idx][0].apply(this, arguments)) {
	        return pairs[idx][1].apply(this, arguments);
	      }
	      idx += 1;
	    }
	  });
	});
	module.exports = cond;

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var constructN = /*#__PURE__*/__webpack_require__(233);
	
	/**
	 * Wraps a constructor function inside a curried function that can be called
	 * with the same arguments and returns the same type.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (* -> {*}) -> (* -> {*})
	 * @param {Function} fn The constructor function to wrap.
	 * @return {Function} A wrapped, curried constructor function.
	 * @see R.invoker
	 * @example
	 *
	 *      // Constructor function
	 *      function Animal(kind) {
	 *        this.kind = kind;
	 *      };
	 *      Animal.prototype.sighting = function() {
	 *        return "It's a " + this.kind + "!";
	 *      }
	 *
	 *      var AnimalConstructor = R.construct(Animal)
	 *
	 *      // Notice we no longer need the 'new' keyword:
	 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
	 *
	 *      var animalTypes = ["Lion", "Tiger", "Bear"];
	 *      var animalSighting = R.invoker(0, 'sighting');
	 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
	 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
	 */
	
	
	var construct = /*#__PURE__*/_curry1(function construct(Fn) {
	  return constructN(Fn.length, Fn);
	});
	module.exports = construct;

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

	var _contains = /*#__PURE__*/__webpack_require__(56);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
	 * terms, to at least one element of the given list; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig a -> [a] -> Boolean
	 * @param {Object} a The item to compare against.
	 * @param {Array} list The array to consider.
	 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
	 * @see R.any
	 * @example
	 *
	 *      R.contains(3, [1, 2, 3]); //=> true
	 *      R.contains(4, [1, 2, 3]); //=> false
	 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
	 *      R.contains([42], [[42]]); //=> true
	 */
	
	
	var contains = /*#__PURE__*/_curry2(_contains);
	module.exports = contains;

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

	var reduceBy = /*#__PURE__*/__webpack_require__(106);
	
	/**
	 * Counts the elements of a list according to how many match each value of a
	 * key generated by the supplied function. Returns an object mapping the keys
	 * produced by `fn` to the number of occurrences in the list. Note that all
	 * keys are coerced to strings because of how JavaScript objects work.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig (a -> String) -> [a] -> {*}
	 * @param {Function} fn The function used to map values to keys.
	 * @param {Array} list The list to count elements from.
	 * @return {Object} An object mapping keys to number of occurrences in the list.
	 * @example
	 *
	 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
	 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
	 *
	 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
	 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
	 */
	
	
	var countBy = /*#__PURE__*/reduceBy(function (acc, elem) {
	  return acc + 1;
	}, 0);
	module.exports = countBy;

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

	var add = /*#__PURE__*/__webpack_require__(93);
	
	/**
	 * Decrements its argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Math
	 * @sig Number -> Number
	 * @param {Number} n
	 * @return {Number} n - 1
	 * @see R.inc
	 * @example
	 *
	 *      R.dec(42); //=> 41
	 */
	
	
	var dec = /*#__PURE__*/add(-1);
	module.exports = dec;

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Makes a descending comparator function out of a function that returns a value
	 * that can be compared with `<` and `>`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.23.0
	 * @category Function
	 * @sig Ord b => (a -> b) -> a -> a -> Number
	 * @param {Function} fn A function of arity one that returns a value that can be compared
	 * @param {*} a The first item to be compared.
	 * @param {*} b The second item to be compared.
	 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
	 * @see R.ascend
	 * @example
	 *
	 *      var byAge = R.descend(R.prop('age'));
	 *      var people = [
	 *        // ...
	 *      ];
	 *      var peopleByOldestFirst = R.sort(byAge, people);
	 */
	
	
	var descend = /*#__PURE__*/_curry3(function descend(fn, a, b) {
	  var aa = fn(a);
	  var bb = fn(b);
	  return aa > bb ? -1 : aa < bb ? 1 : 0;
	});
	module.exports = descend;

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _isInteger = /*#__PURE__*/__webpack_require__(160);
	
	var assoc = /*#__PURE__*/__webpack_require__(94);
	
	var dissoc = /*#__PURE__*/__webpack_require__(238);
	
	var remove = /*#__PURE__*/__webpack_require__(272);
	
	var update = /*#__PURE__*/__webpack_require__(169);
	
	/**
	 * Makes a shallow clone of an object, omitting the property at the given path.
	 * Note that this copies and flattens prototype properties onto the new object
	 * as well. All non-primitive properties are copied by reference.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.11.0
	 * @category Object
	 * @typedefn Idx = String | Int
	 * @sig [Idx] -> {k: v} -> {k: v}
	 * @param {Array} path The path to the value to omit
	 * @param {Object} obj The object to clone
	 * @return {Object} A new object without the property at path
	 * @see R.assocPath
	 * @example
	 *
	 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
	 */
	
	
	var dissocPath = /*#__PURE__*/_curry2(function dissocPath(path, obj) {
	  switch (path.length) {
	    case 0:
	      return obj;
	    case 1:
	      return _isInteger(path[0]) ? remove(path[0], 1, obj) : dissoc(path[0], obj);
	    default:
	      var head = path[0];
	      var tail = Array.prototype.slice.call(path, 1);
	      if (obj[head] == null) {
	        return obj;
	      } else if (_isInteger(path[0])) {
	        return update(head, dissocPath(tail, obj[head]), obj);
	      } else {
	        return assoc(head, dissocPath(tail, obj[head]), obj);
	      }
	  }
	});
	module.exports = dissocPath;

/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Divides two numbers. Equivalent to `a / b`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a The first value.
	 * @param {Number} b The second value.
	 * @return {Number} The result of `a / b`.
	 * @see R.multiply
	 * @example
	 *
	 *      R.divide(71, 100); //=> 0.71
	 *
	 *      var half = R.divide(R.__, 2);
	 *      half(42); //=> 21
	 *
	 *      var reciprocal = R.divide(1);
	 *      reciprocal(4);   //=> 0.25
	 */
	
	
	var divide = /*#__PURE__*/_curry2(function divide(a, b) {
	  return a / b;
	});
	module.exports = divide;

/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _dropLast = /*#__PURE__*/__webpack_require__(520);
	
	var _xdropLast = /*#__PURE__*/__webpack_require__(539);
	
	/**
	 * Returns a list containing all but the last `n` elements of the given `list`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig Number -> [a] -> [a]
	 * @sig Number -> String -> String
	 * @param {Number} n The number of elements of `list` to skip.
	 * @param {Array} list The list of elements to consider.
	 * @return {Array} A copy of the list with only the first `list.length - n` elements
	 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
	 * @example
	 *
	 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
	 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
	 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
	 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
	 *      R.dropLast(3, 'ramda');               //=> 'ra'
	 */
	
	
	var dropLast = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xdropLast, _dropLast));
	module.exports = dropLast;

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _dropLastWhile = /*#__PURE__*/__webpack_require__(521);
	
	var _xdropLastWhile = /*#__PURE__*/__webpack_require__(540);
	
	/**
	 * Returns a new list excluding all the tailing elements of a given list which
	 * satisfy the supplied predicate function. It passes each value from the right
	 * to the supplied predicate function, skipping elements until the predicate
	 * function returns a `falsy` value. The predicate function is applied to one argument:
	 * *(value)*.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> [a]
	 * @sig (a -> Boolean) -> String -> String
	 * @param {Function} predicate The function to be called on each element
	 * @param {Array} xs The collection to iterate over.
	 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
	 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
	 * @example
	 *
	 *      var lteThree = x => x <= 3;
	 *
	 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
	 *
	 *      R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
	 */
	
	
	var dropLastWhile = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xdropLastWhile, _dropLastWhile));
	module.exports = dropLastWhile;

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xdropRepeatsWith = /*#__PURE__*/__webpack_require__(252);
	
	var dropRepeatsWith = /*#__PURE__*/__webpack_require__(240);
	
	var equals = /*#__PURE__*/__webpack_require__(21);
	
	/**
	 * Returns a new list without any consecutively repeating elements.
	 * [`R.equals`](#equals) is used to determine equality.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category List
	 * @sig [a] -> [a]
	 * @param {Array} list The array to consider.
	 * @return {Array} `list` without repeating elements.
	 * @see R.transduce
	 * @example
	 *
	 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
	 */
	
	
	var dropRepeats = /*#__PURE__*/_curry1( /*#__PURE__*/_dispatchable([], /*#__PURE__*/_xdropRepeatsWith(equals), /*#__PURE__*/dropRepeatsWith(equals)));
	module.exports = dropRepeats;

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xdropWhile = /*#__PURE__*/__webpack_require__(541);
	
	var slice = /*#__PURE__*/__webpack_require__(24);
	
	/**
	 * Returns a new list excluding the leading elements of a given list which
	 * satisfy the supplied predicate function. It passes each value to the supplied
	 * predicate function, skipping elements while the predicate function returns
	 * `true`. The predicate function is applied to one argument: *(value)*.
	 *
	 * Dispatches to the `dropWhile` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> [a]
	 * @sig (a -> Boolean) -> String -> String
	 * @param {Function} fn The function called per iteration.
	 * @param {Array} xs The collection to iterate over.
	 * @return {Array} A new array.
	 * @see R.takeWhile, R.transduce, R.addIndex
	 * @example
	 *
	 *      var lteTwo = x => x <= 2;
	 *
	 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
	 *
	 *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
	 */
	
	
	var dropWhile = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, xs) {
	  var idx = 0;
	  var len = xs.length;
	  while (idx < len && pred(xs[idx])) {
	    idx += 1;
	  }
	  return slice(idx, Infinity, xs);
	}));
	module.exports = dropWhile;

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _isFunction = /*#__PURE__*/__webpack_require__(99);
	
	var lift = /*#__PURE__*/__webpack_require__(103);
	
	var or = /*#__PURE__*/__webpack_require__(265);
	
	/**
	 * A function wrapping calls to the two functions in an `||` operation,
	 * returning the result of the first function if it is truth-y and the result
	 * of the second function otherwise. Note that this is short-circuited,
	 * meaning that the second function will not be invoked if the first returns a
	 * truth-y value.
	 *
	 * In addition to functions, `R.either` also accepts any fantasy-land compatible
	 * applicative functor.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category Logic
	 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
	 * @param {Function} f a predicate
	 * @param {Function} g another predicate
	 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
	 * @see R.or
	 * @example
	 *
	 *      var gt10 = x => x > 10;
	 *      var even = x => x % 2 === 0;
	 *      var f = R.either(gt10, even);
	 *      f(101); //=> true
	 *      f(8); //=> true
	 */
	
	
	var either = /*#__PURE__*/_curry2(function either(f, g) {
	  return _isFunction(f) ? function _either() {
	    return f.apply(this, arguments) || g.apply(this, arguments);
	  } : lift(or)(f, g);
	});
	module.exports = either;

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var equals = /*#__PURE__*/__webpack_require__(21);
	
	var takeLast = /*#__PURE__*/__webpack_require__(275);
	
	/**
	 * Checks if a list ends with the provided values
	 *
	 * @func
	 * @memberOf R
	 * @since v0.24.0
	 * @category List
	 * @sig [a] -> Boolean
	 * @sig String -> Boolean
	 * @param {*} suffix
	 * @param {*} list
	 * @return {Boolean}
	 * @example
	 *
	 *      R.endsWith('c', 'abc')                //=> true
	 *      R.endsWith('b', 'abc')                //=> false
	 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
	 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
	 */
	
	
	var endsWith = /*#__PURE__*/_curry2(function (suffix, list) {
	  return equals(takeLast(suffix.length, list), suffix);
	});
	module.exports = endsWith;

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var equals = /*#__PURE__*/__webpack_require__(21);
	
	/**
	 * Takes a function and two values in its domain and returns `true` if the
	 * values map to the same value in the codomain; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Relation
	 * @sig (a -> b) -> a -> a -> Boolean
	 * @param {Function} f
	 * @param {*} x
	 * @param {*} y
	 * @return {Boolean}
	 * @example
	 *
	 *      R.eqBy(Math.abs, 5, -5); //=> true
	 */
	
	
	var eqBy = /*#__PURE__*/_curry3(function eqBy(f, x, y) {
	  return equals(f(x), f(y));
	});
	module.exports = eqBy;

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var equals = /*#__PURE__*/__webpack_require__(21);
	
	/**
	 * Reports whether two objects have the same value, in [`R.equals`](#equals)
	 * terms, for the specified property. Useful as a curried predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig k -> {k: v} -> {k: v} -> Boolean
	 * @param {String} prop The name of the property to compare
	 * @param {Object} obj1
	 * @param {Object} obj2
	 * @return {Boolean}
	 *
	 * @example
	 *
	 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
	 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
	 *      R.eqProps('a', o1, o2); //=> false
	 *      R.eqProps('c', o1, o2); //=> true
	 */
	
	
	var eqProps = /*#__PURE__*/_curry3(function eqProps(prop, obj1, obj2) {
	  return equals(obj1[prop], obj2[prop]);
	});
	module.exports = eqProps;

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Creates a new object by recursively evolving a shallow copy of `object`,
	 * according to the `transformation` functions. All non-primitive properties
	 * are copied by reference.
	 *
	 * A `transformation` function will not be invoked if its corresponding key
	 * does not exist in the evolved object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Object
	 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
	 * @param {Object} transformations The object specifying transformation functions to apply
	 *        to the object.
	 * @param {Object} object The object to be transformed.
	 * @return {Object} The transformed object.
	 * @example
	 *
	 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
	 *      var transformations = {
	 *        firstName: R.trim,
	 *        lastName: R.trim, // Will not get invoked.
	 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
	 *      };
	 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
	 */
	
	
	var evolve = /*#__PURE__*/_curry2(function evolve(transformations, object) {
	  var result = {};
	  var transformation, key, type;
	  for (key in object) {
	    transformation = transformations[key];
	    type = typeof transformation;
	    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
	  }
	  return result;
	});
	module.exports = evolve;

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xfind = /*#__PURE__*/__webpack_require__(543);
	
	/**
	 * Returns the first element of the list which matches the predicate, or
	 * `undefined` if no element matches.
	 *
	 * Dispatches to the `find` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> a | undefined
	 * @param {Function} fn The predicate function used to determine if the element is the
	 *        desired one.
	 * @param {Array} list The array to consider.
	 * @return {Object} The element found, or `undefined`.
	 * @see R.transduce
	 * @example
	 *
	 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
	 *      R.find(R.propEq('a', 4))(xs); //=> undefined
	 */
	
	
	var find = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['find'], _xfind, function find(fn, list) {
	  var idx = 0;
	  var len = list.length;
	  while (idx < len) {
	    if (fn(list[idx])) {
	      return list[idx];
	    }
	    idx += 1;
	  }
	}));
	module.exports = find;

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xfindIndex = /*#__PURE__*/__webpack_require__(544);
	
	/**
	 * Returns the index of the first element of the list which matches the
	 * predicate, or `-1` if no element matches.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> Number
	 * @param {Function} fn The predicate function used to determine if the element is the
	 * desired one.
	 * @param {Array} list The array to consider.
	 * @return {Number} The index of the element found, or `-1`.
	 * @see R.transduce
	 * @example
	 *
	 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
	 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
	 */
	
	
	var findIndex = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xfindIndex, function findIndex(fn, list) {
	  var idx = 0;
	  var len = list.length;
	  while (idx < len) {
	    if (fn(list[idx])) {
	      return idx;
	    }
	    idx += 1;
	  }
	  return -1;
	}));
	module.exports = findIndex;

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xfindLast = /*#__PURE__*/__webpack_require__(545);
	
	/**
	 * Returns the last element of the list which matches the predicate, or
	 * `undefined` if no element matches.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> a | undefined
	 * @param {Function} fn The predicate function used to determine if the element is the
	 * desired one.
	 * @param {Array} list The array to consider.
	 * @return {Object} The element found, or `undefined`.
	 * @see R.transduce
	 * @example
	 *
	 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
	 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
	 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
	 */
	
	
	var findLast = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xfindLast, function findLast(fn, list) {
	  var idx = list.length - 1;
	  while (idx >= 0) {
	    if (fn(list[idx])) {
	      return list[idx];
	    }
	    idx -= 1;
	  }
	}));
	module.exports = findLast;

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xfindLastIndex = /*#__PURE__*/__webpack_require__(546);
	
	/**
	 * Returns the index of the last element of the list which matches the
	 * predicate, or `-1` if no element matches.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> Number
	 * @param {Function} fn The predicate function used to determine if the element is the
	 * desired one.
	 * @param {Array} list The array to consider.
	 * @return {Number} The index of the element found, or `-1`.
	 * @see R.transduce
	 * @example
	 *
	 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
	 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
	 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
	 */
	
	
	var findLastIndex = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
	  var idx = list.length - 1;
	  while (idx >= 0) {
	    if (fn(list[idx])) {
	      return idx;
	    }
	    idx -= 1;
	  }
	  return -1;
	}));
	module.exports = findLastIndex;

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _makeFlat = /*#__PURE__*/__webpack_require__(250);
	
	/**
	 * Returns a new list by pulling every item out of it (and all its sub-arrays)
	 * and putting them in a new array, depth-first.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [b]
	 * @param {Array} list The array to consider.
	 * @return {Array} The flattened list.
	 * @see R.unnest
	 * @example
	 *
	 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
	 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	 */
	
	
	var flatten = /*#__PURE__*/_curry1( /*#__PURE__*/_makeFlat(true));
	module.exports = flatten;

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

	var _checkForMethod = /*#__PURE__*/__webpack_require__(70);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Iterate over an input `list`, calling a provided function `fn` for each
	 * element in the list.
	 *
	 * `fn` receives one argument: *(value)*.
	 *
	 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
	 * arrays), unlike the native `Array.prototype.forEach` method. For more
	 * details on this behavior, see:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
	 *
	 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
	 * the original array. In some libraries this function is named `each`.
	 *
	 * Dispatches to the `forEach` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category List
	 * @sig (a -> *) -> [a] -> [a]
	 * @param {Function} fn The function to invoke. Receives one argument, `value`.
	 * @param {Array} list The list to iterate over.
	 * @return {Array} The original list.
	 * @see R.addIndex
	 * @example
	 *
	 *      var printXPlusFive = x => console.log(x + 5);
	 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
	 *      // logs 6
	 *      // logs 7
	 *      // logs 8
	 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
	 */
	
	
	var forEach = /*#__PURE__*/_curry2( /*#__PURE__*/_checkForMethod('forEach', function forEach(fn, list) {
	  var len = list.length;
	  var idx = 0;
	  while (idx < len) {
	    fn(list[idx]);
	    idx += 1;
	  }
	  return list;
	}));
	module.exports = forEach;

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var keys = /*#__PURE__*/__webpack_require__(28);
	
	/**
	 * Iterate over an input `object`, calling a provided function `fn` for each
	 * key and value in the object.
	 *
	 * `fn` receives three argument: *(value, key, obj)*.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.23.0
	 * @category Object
	 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
	 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
	 * @param {Object} obj The object to iterate over.
	 * @return {Object} The original object.
	 * @example
	 *
	 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
	 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
	 *      // logs x:1
	 *      // logs y:2
	 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
	 */
	
	
	var forEachObjIndexed = /*#__PURE__*/_curry2(function forEachObjIndexed(fn, obj) {
	  var keyList = keys(obj);
	  var idx = 0;
	  while (idx < keyList.length) {
	    var key = keyList[idx];
	    fn(obj[key], key, obj);
	    idx += 1;
	  }
	  return obj;
	});
	module.exports = forEachObjIndexed;

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Creates a new object from a list key-value pairs. If a key appears in
	 * multiple pairs, the rightmost pair is included in the object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig [[k,v]] -> {k: v}
	 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
	 * @return {Object} The object made by pairing up `keys` and `values`.
	 * @see R.toPairs, R.pair
	 * @example
	 *
	 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
	 */
	
	
	var fromPairs = /*#__PURE__*/_curry1(function fromPairs(pairs) {
	  var result = {};
	  var idx = 0;
	  while (idx < pairs.length) {
	    result[pairs[idx][0]] = pairs[idx][1];
	    idx += 1;
	  }
	  return result;
	});
	module.exports = fromPairs;

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

	var _checkForMethod = /*#__PURE__*/__webpack_require__(70);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var reduceBy = /*#__PURE__*/__webpack_require__(106);
	
	/**
	 * Splits a list into sub-lists stored in an object, based on the result of
	 * calling a String-returning function on each element, and grouping the
	 * results according to values returned.
	 *
	 * Dispatches to the `groupBy` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> String) -> [a] -> {String: [a]}
	 * @param {Function} fn Function :: a -> String
	 * @param {Array} list The array to group
	 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
	 *         that produced that key when passed to `fn`.
	 * @see R.transduce
	 * @example
	 *
	 *      var byGrade = R.groupBy(function(student) {
	 *        var score = student.score;
	 *        return score < 65 ? 'F' :
	 *               score < 70 ? 'D' :
	 *               score < 80 ? 'C' :
	 *               score < 90 ? 'B' : 'A';
	 *      });
	 *      var students = [{name: 'Abby', score: 84},
	 *                      {name: 'Eddy', score: 58},
	 *                      // ...
	 *                      {name: 'Jack', score: 69}];
	 *      byGrade(students);
	 *      // {
	 *      //   'A': [{name: 'Dianne', score: 99}],
	 *      //   'B': [{name: 'Abby', score: 84}]
	 *      //   // ...,
	 *      //   'F': [{name: 'Eddy', score: 58}]
	 *      // }
	 */
	
	
	var groupBy = /*#__PURE__*/_curry2( /*#__PURE__*/_checkForMethod('groupBy', /*#__PURE__*/reduceBy(function (acc, item) {
	  if (acc == null) {
	    acc = [];
	  }
	  acc.push(item);
	  return acc;
	}, null)));
	module.exports = groupBy;

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Takes a list and returns a list of lists where each sublist's elements are
	 * all satisfied pairwise comparison according to the provided function.
	 * Only adjacent elements are passed to the comparison function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.21.0
	 * @category List
	 * @sig ((a, a) → Boolean) → [a] → [[a]]
	 * @param {Function} fn Function for determining whether two given (adjacent)
	 *        elements should be in the same group
	 * @param {Array} list The array to group. Also accepts a string, which will be
	 *        treated as a list of characters.
	 * @return {List} A list that contains sublists of elements,
	 *         whose concatenations are equal to the original list.
	 * @example
	 *
	 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
	 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
	 *
	 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
	 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
	 *
	 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
	 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
	 *
	 * R.groupWith(R.eqBy(isVowel), 'aestiou')
	 * //=> ['ae', 'st', 'iou']
	 */
	
	
	var groupWith = /*#__PURE__*/_curry2(function (fn, list) {
	  var res = [];
	  var idx = 0;
	  var len = list.length;
	  while (idx < len) {
	    var nextidx = idx + 1;
	    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
	      nextidx += 1;
	    }
	    res.push(list.slice(idx, nextidx));
	    idx = nextidx;
	  }
	  return res;
	});
	module.exports = groupWith;

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns `true` if the first argument is greater than the second; `false`
	 * otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @see R.lt
	 * @example
	 *
	 *      R.gt(2, 1); //=> true
	 *      R.gt(2, 2); //=> false
	 *      R.gt(2, 3); //=> false
	 *      R.gt('a', 'z'); //=> false
	 *      R.gt('z', 'a'); //=> true
	 */
	
	
	var gt = /*#__PURE__*/_curry2(function gt(a, b) {
	  return a > b;
	});
	module.exports = gt;

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns `true` if the first argument is greater than or equal to the second;
	 * `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> Boolean
	 * @param {Number} a
	 * @param {Number} b
	 * @return {Boolean}
	 * @see R.lte
	 * @example
	 *
	 *      R.gte(2, 1); //=> true
	 *      R.gte(2, 2); //=> true
	 *      R.gte(2, 3); //=> false
	 *      R.gte('a', 'z'); //=> false
	 *      R.gte('z', 'a'); //=> true
	 */
	
	
	var gte = /*#__PURE__*/_curry2(function gte(a, b) {
	  return a >= b;
	});
	module.exports = gte;

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _has = /*#__PURE__*/__webpack_require__(15);
	
	/**
	 * Returns whether or not an object has an own property with the specified name
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Object
	 * @sig s -> {s: x} -> Boolean
	 * @param {String} prop The name of the property to check for.
	 * @param {Object} obj The object to query.
	 * @return {Boolean} Whether the property exists.
	 * @example
	 *
	 *      var hasName = R.has('name');
	 *      hasName({name: 'alice'});   //=> true
	 *      hasName({name: 'bob'});     //=> true
	 *      hasName({});                //=> false
	 *
	 *      var point = {x: 0, y: 0};
	 *      var pointHas = R.has(R.__, point);
	 *      pointHas('x');  //=> true
	 *      pointHas('y');  //=> true
	 *      pointHas('z');  //=> false
	 */
	
	
	var has = /*#__PURE__*/_curry2(_has);
	module.exports = has;

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns whether or not an object or its prototype chain has a property with
	 * the specified name
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Object
	 * @sig s -> {s: x} -> Boolean
	 * @param {String} prop The name of the property to check for.
	 * @param {Object} obj The object to query.
	 * @return {Boolean} Whether the property exists.
	 * @example
	 *
	 *      function Rectangle(width, height) {
	 *        this.width = width;
	 *        this.height = height;
	 *      }
	 *      Rectangle.prototype.area = function() {
	 *        return this.width * this.height;
	 *      };
	 *
	 *      var square = new Rectangle(2, 2);
	 *      R.hasIn('width', square);  //=> true
	 *      R.hasIn('area', square);  //=> true
	 */
	
	
	var hasIn = /*#__PURE__*/_curry2(function hasIn(prop, obj) {
	  return prop in obj;
	});
	module.exports = hasIn;

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

	var nth = /*#__PURE__*/__webpack_require__(73);
	
	/**
	 * Returns the first element of the given list or string. In some libraries
	 * this function is named `first`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> a | Undefined
	 * @sig String -> String
	 * @param {Array|String} list
	 * @return {*}
	 * @see R.tail, R.init, R.last
	 * @example
	 *
	 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
	 *      R.head([]); //=> undefined
	 *
	 *      R.head('abc'); //=> 'a'
	 *      R.head(''); //=> ''
	 */
	
	
	var head = /*#__PURE__*/nth(0);
	module.exports = head;

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	/**
	 * Creates a function that will process either the `onTrue` or the `onFalse`
	 * function depending upon the result of the `condition` predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Logic
	 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
	 * @param {Function} condition A predicate function
	 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
	 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
	 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
	 *                    function depending upon the result of the `condition` predicate.
	 * @see R.unless, R.when
	 * @example
	 *
	 *      var incCount = R.ifElse(
	 *        R.has('count'),
	 *        R.over(R.lensProp('count'), R.inc),
	 *        R.assoc('count', 1)
	 *      );
	 *      incCount({});           //=> { count: 1 }
	 *      incCount({ count: 1 }); //=> { count: 2 }
	 */
	
	
	var ifElse = /*#__PURE__*/_curry3(function ifElse(condition, onTrue, onFalse) {
	  return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
	    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
	  });
	});
	module.exports = ifElse;

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

	var add = /*#__PURE__*/__webpack_require__(93);
	
	/**
	 * Increments its argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Math
	 * @sig Number -> Number
	 * @param {Number} n
	 * @return {Number} n + 1
	 * @see R.dec
	 * @example
	 *
	 *      R.inc(42); //=> 43
	 */
	
	
	var inc = /*#__PURE__*/add(1);
	module.exports = inc;

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

	var reduceBy = /*#__PURE__*/__webpack_require__(106);
	
	/**
	 * Given a function that generates a key, turns a list of objects into an
	 * object indexing the objects by the given key. Note that if multiple
	 * objects generate the same value for the indexing key only the last value
	 * will be included in the generated object.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
	 * @param {Function} fn Function :: a -> String
	 * @param {Array} array The array of objects to index
	 * @return {Object} An object indexing each array element by the given property.
	 * @example
	 *
	 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
	 *      R.indexBy(R.prop('id'), list);
	 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
	 */
	
	
	var indexBy = /*#__PURE__*/reduceBy(function (acc, elem) {
	  return elem;
	}, null);
	module.exports = indexBy;

/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _indexOf = /*#__PURE__*/__webpack_require__(247);
	
	var _isArray = /*#__PURE__*/__webpack_require__(37);
	
	/**
	 * Returns the position of the first occurrence of an item in an array, or -1
	 * if the item is not included in the array. [`R.equals`](#equals) is used to
	 * determine equality.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig a -> [a] -> Number
	 * @param {*} target The item to find.
	 * @param {Array} xs The array to search in.
	 * @return {Number} the index of the target, or -1 if the target is not found.
	 * @see R.lastIndexOf
	 * @example
	 *
	 *      R.indexOf(3, [1,2,3,4]); //=> 2
	 *      R.indexOf(10, [1,2,3,4]); //=> -1
	 */
	
	
	var indexOf = /*#__PURE__*/_curry2(function indexOf(target, xs) {
	  return typeof xs.indexOf === 'function' && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
	});
	module.exports = indexOf;

/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

	var slice = /*#__PURE__*/__webpack_require__(24);
	
	/**
	 * Returns all but the last element of the given list or string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category List
	 * @sig [a] -> [a]
	 * @sig String -> String
	 * @param {*} list
	 * @return {*}
	 * @see R.last, R.head, R.tail
	 * @example
	 *
	 *      R.init([1, 2, 3]);  //=> [1, 2]
	 *      R.init([1, 2]);     //=> [1]
	 *      R.init([1]);        //=> []
	 *      R.init([]);         //=> []
	 *
	 *      R.init('abc');  //=> 'ab'
	 *      R.init('ab');   //=> 'a'
	 *      R.init('a');    //=> ''
	 *      R.init('');     //=> ''
	 */
	
	
	var init = /*#__PURE__*/slice(0, -1);
	module.exports = init;

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

	var _containsWith = /*#__PURE__*/__webpack_require__(96);
	
	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var _filter = /*#__PURE__*/__webpack_require__(158);
	
	/**
	 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
	 * `xs'` comprising each of the elements of `xs` which is equal to one or more
	 * elements of `ys` according to `pred`.
	 *
	 * `pred` must be a binary function expecting an element from each list.
	 *
	 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
	 * not be significant, but since `xs'` is ordered the implementation guarantees
	 * that its values are in the same order as they appear in `xs`. Duplicates are
	 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.24.0
	 * @category Relation
	 * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]
	 * @param {Function} pred
	 * @param {Array} xs
	 * @param {Array} ys
	 * @return {Array}
	 * @see R.intersection
	 * @example
	 *
	 *      R.innerJoin(
	 *        (record, id) => record.id === id,
	 *        [{id: 824, name: 'Richie Furay'},
	 *         {id: 956, name: 'Dewey Martin'},
	 *         {id: 313, name: 'Bruce Palmer'},
	 *         {id: 456, name: 'Stephen Stills'},
	 *         {id: 177, name: 'Neil Young'}],
	 *        [177, 456, 999]
	 *      );
	 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
	 */
	
	
	var innerJoin = /*#__PURE__*/_curry3(function innerJoin(pred, xs, ys) {
	  return _filter(function (x) {
	    return _containsWith(pred, x, ys);
	  }, xs);
	});
	module.exports = innerJoin;

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Inserts the supplied element into the list, at the specified `index`. _Note that
	
	 * this is not destructive_: it returns a copy of the list with the changes.
	 * <small>No lists have been harmed in the application of this function.</small>
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.2
	 * @category List
	 * @sig Number -> a -> [a] -> [a]
	 * @param {Number} index The position to insert the element
	 * @param {*} elt The element to insert into the Array
	 * @param {Array} list The list to insert into
	 * @return {Array} A new Array with `elt` inserted at `index`.
	 * @example
	 *
	 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
	 */
	
	
	var insert = /*#__PURE__*/_curry3(function insert(idx, elt, list) {
	  idx = idx < list.length && idx >= 0 ? idx : list.length;
	  var result = Array.prototype.slice.call(list, 0);
	  result.splice(idx, 0, elt);
	  return result;
	});
	module.exports = insert;

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
	 * destructive_: it returns a copy of the list with the changes.
	 * <small>No lists have been harmed in the application of this function.</small>
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category List
	 * @sig Number -> [a] -> [a] -> [a]
	 * @param {Number} index The position to insert the sub-list
	 * @param {Array} elts The sub-list to insert into the Array
	 * @param {Array} list The list to insert the sub-list into
	 * @return {Array} A new Array with `elts` inserted starting at `index`.
	 * @example
	 *
	 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
	 */
	
	
	var insertAll = /*#__PURE__*/_curry3(function insertAll(idx, elts, list) {
	  idx = idx < list.length && idx >= 0 ? idx : list.length;
	  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
	});
	module.exports = insertAll;

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

	var _contains = /*#__PURE__*/__webpack_require__(56);
	
	var _Set = /*#__PURE__*/function () {
	
	  function _Set() {
	    /* globals Set */
	    this._nativeSet = typeof Set === 'function' ? new Set() : null;
	    this._items = {};
	  }
	
	  // until we figure out why jsdoc chokes on this
	  // @param item The item to add to the Set
	  // @returns {boolean} true if the item did not exist prior, otherwise false
	  //
	  _Set.prototype.add = function (item) {
	    return !hasOrAdd(item, true, this);
	  };
	
	  //
	  // @param item The item to check for existence in the Set
	  // @returns {boolean} true if the item exists in the Set, otherwise false
	  //
	  _Set.prototype.has = function (item) {
	    return hasOrAdd(item, false, this);
	  };
	
	  //
	  // Combines the logic for checking whether an item is a member of the set and
	  // for adding a new item to the set.
	  //
	  // @param item       The item to check or add to the Set instance.
	  // @param shouldAdd  If true, the item will be added to the set if it doesn't
	  //                   already exist.
	  // @param set        The set instance to check or add to.
	  // @return {boolean} true if the item already existed, otherwise false.
	  //
	  return _Set;
	}();
	
	function hasOrAdd(item, shouldAdd, set) {
	  var type = typeof item;
	  var prevSize, newSize;
	  switch (type) {
	    case 'string':
	    case 'number':
	      // distinguish between +0 and -0
	      if (item === 0 && 1 / item === -Infinity) {
	        if (set._items['-0']) {
	          return true;
	        } else {
	          if (shouldAdd) {
	            set._items['-0'] = true;
	          }
	          return false;
	        }
	      }
	      // these types can all utilise the native Set
	      if (set._nativeSet !== null) {
	        if (shouldAdd) {
	          prevSize = set._nativeSet.size;
	          set._nativeSet.add(item);
	          newSize = set._nativeSet.size;
	          return newSize === prevSize;
	        } else {
	          return set._nativeSet.has(item);
	        }
	      } else {
	        if (!(type in set._items)) {
	          if (shouldAdd) {
	            set._items[type] = {};
	            set._items[type][item] = true;
	          }
	          return false;
	        } else if (item in set._items[type]) {
	          return true;
	        } else {
	          if (shouldAdd) {
	            set._items[type][item] = true;
	          }
	          return false;
	        }
	      }
	
	    case 'boolean':
	      // set._items['boolean'] holds a two element array
	      // representing [ falseExists, trueExists ]
	      if (type in set._items) {
	        var bIdx = item ? 1 : 0;
	        if (set._items[type][bIdx]) {
	          return true;
	        } else {
	          if (shouldAdd) {
	            set._items[type][bIdx] = true;
	          }
	          return false;
	        }
	      } else {
	        if (shouldAdd) {
	          set._items[type] = item ? [false, true] : [true, false];
	        }
	        return false;
	      }
	
	    case 'function':
	      // compare functions for reference equality
	      if (set._nativeSet !== null) {
	        if (shouldAdd) {
	          prevSize = set._nativeSet.size;
	          set._nativeSet.add(item);
	          newSize = set._nativeSet.size;
	          return newSize === prevSize;
	        } else {
	          return set._nativeSet.has(item);
	        }
	      } else {
	        if (!(type in set._items)) {
	          if (shouldAdd) {
	            set._items[type] = [item];
	          }
	          return false;
	        }
	        if (!_contains(item, set._items[type])) {
	          if (shouldAdd) {
	            set._items[type].push(item);
	          }
	          return false;
	        }
	        return true;
	      }
	
	    case 'undefined':
	      if (set._items[type]) {
	        return true;
	      } else {
	        if (shouldAdd) {
	          set._items[type] = true;
	        }
	        return false;
	      }
	
	    case 'object':
	      if (item === null) {
	        if (!set._items['null']) {
	          if (shouldAdd) {
	            set._items['null'] = true;
	          }
	          return false;
	        }
	        return true;
	      }
	    /* falls through */
	    default:
	      // reduce the search size of heterogeneous sets by creating buckets
	      // for each type.
	      type = Object.prototype.toString.call(item);
	      if (!(type in set._items)) {
	        if (shouldAdd) {
	          set._items[type] = [item];
	        }
	        return false;
	      }
	      // scan through all previously applied items
	      if (!_contains(item, set._items[type])) {
	        if (shouldAdd) {
	          set._items[type].push(item);
	        }
	        return false;
	      }
	      return true;
	  }
	}
	
	// A simple Set type that honours R.equals semantics
	module.exports = _Set;

/***/ }),
/* 518 */
/***/ (function(module, exports) {

	function _aperture(n, list) {
	  var idx = 0;
	  var limit = list.length - (n - 1);
	  var acc = new Array(limit >= 0 ? limit : 0);
	  while (idx < limit) {
	    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
	    idx += 1;
	  }
	  return acc;
	}
	module.exports = _aperture;

/***/ }),
/* 519 */
/***/ (function(module, exports) {

	function _arrayFromIterator(iter) {
	  var list = [];
	  var next;
	  while (!(next = iter.next()).done) {
	    list.push(next.value);
	  }
	  return list;
	}
	module.exports = _arrayFromIterator;

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

	var take = /*#__PURE__*/__webpack_require__(166);
	
	function dropLast(n, xs) {
	  return take(n < xs.length ? xs.length - n : 0, xs);
	}
	module.exports = dropLast;

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

	var slice = /*#__PURE__*/__webpack_require__(24);
	
	function dropLastWhile(pred, xs) {
	  var idx = xs.length - 1;
	  while (idx >= 0 && pred(xs[idx])) {
	    idx -= 1;
	  }
	  return slice(0, idx + 1, xs);
	}
	module.exports = dropLastWhile;

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

	var _arrayFromIterator = /*#__PURE__*/__webpack_require__(519);
	
	var _containsWith = /*#__PURE__*/__webpack_require__(96);
	
	var _functionName = /*#__PURE__*/__webpack_require__(525);
	
	var _has = /*#__PURE__*/__webpack_require__(15);
	
	var identical = /*#__PURE__*/__webpack_require__(242);
	
	var keys = /*#__PURE__*/__webpack_require__(28);
	
	var type = /*#__PURE__*/__webpack_require__(167);
	
	/**
	 * private _uniqContentEquals function.
	 * That function is checking equality of 2 iterator contents with 2 assumptions
	 * - iterators lengths are the same
	 * - iterators values are unique
	 *
	 * false-positive result will be returned for comparision of, e.g.
	 * - [1,2,3] and [1,2,3,4]
	 * - [1,1,1] and [1,2,3]
	 * */
	
	function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
	  var a = _arrayFromIterator(aIterator);
	  var b = _arrayFromIterator(bIterator);
	
	  function eq(_a, _b) {
	    return _equals(_a, _b, stackA.slice(), stackB.slice());
	  }
	
	  // if *a* array contains any element that is not included in *b*
	  return !_containsWith(function (b, aItem) {
	    return !_containsWith(eq, aItem, b);
	  }, b, a);
	}
	
	function _equals(a, b, stackA, stackB) {
	  if (identical(a, b)) {
	    return true;
	  }
	
	  var typeA = type(a);
	
	  if (typeA !== type(b)) {
	    return false;
	  }
	
	  if (a == null || b == null) {
	    return false;
	  }
	
	  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
	    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
	  }
	
	  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
	    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
	  }
	
	  switch (typeA) {
	    case 'Arguments':
	    case 'Array':
	    case 'Object':
	      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
	        return a === b;
	      }
	      break;
	    case 'Boolean':
	    case 'Number':
	    case 'String':
	      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
	        return false;
	      }
	      break;
	    case 'Date':
	      if (!identical(a.valueOf(), b.valueOf())) {
	        return false;
	      }
	      break;
	    case 'Error':
	      return a.name === b.name && a.message === b.message;
	    case 'RegExp':
	      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
	        return false;
	      }
	      break;
	  }
	
	  var idx = stackA.length - 1;
	  while (idx >= 0) {
	    if (stackA[idx] === a) {
	      return stackB[idx] === b;
	    }
	    idx -= 1;
	  }
	
	  switch (typeA) {
	    case 'Map':
	      if (a.size !== b.size) {
	        return false;
	      }
	
	      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
	    case 'Set':
	      if (a.size !== b.size) {
	        return false;
	      }
	
	      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
	    case 'Arguments':
	    case 'Array':
	    case 'Object':
	    case 'Boolean':
	    case 'Number':
	    case 'String':
	    case 'Date':
	    case 'Error':
	    case 'RegExp':
	    case 'Int8Array':
	    case 'Uint8Array':
	    case 'Uint8ClampedArray':
	    case 'Int16Array':
	    case 'Uint16Array':
	    case 'Int32Array':
	    case 'Uint32Array':
	    case 'Float32Array':
	    case 'Float64Array':
	    case 'ArrayBuffer':
	      break;
	    default:
	      // Values of other types are only equal if identical.
	      return false;
	  }
	
	  var keysA = keys(a);
	  if (keysA.length !== keys(b).length) {
	    return false;
	  }
	
	  var extendedStackA = stackA.concat([a]);
	  var extendedStackB = stackB.concat([b]);
	
	  idx = keysA.length - 1;
	  while (idx >= 0) {
	    var key = keysA[idx];
	    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
	      return false;
	    }
	    idx -= 1;
	  }
	  return true;
	}
	module.exports = _equals;

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

	var _forceReduced = /*#__PURE__*/__webpack_require__(524);
	
	var _isArrayLike = /*#__PURE__*/__webpack_require__(98);
	
	var _reduce = /*#__PURE__*/__webpack_require__(22);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var preservingReduced = function (xf) {
	  return {
	    '@@transducer/init': _xfBase.init,
	    '@@transducer/result': function (result) {
	      return xf['@@transducer/result'](result);
	    },
	    '@@transducer/step': function (result, input) {
	      var ret = xf['@@transducer/step'](result, input);
	      return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
	    }
	  };
	};
	
	var _flatCat = function _xcat(xf) {
	  var rxf = preservingReduced(xf);
	  return {
	    '@@transducer/init': _xfBase.init,
	    '@@transducer/result': function (result) {
	      return rxf['@@transducer/result'](result);
	    },
	    '@@transducer/step': function (result, input) {
	      return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
	    }
	  };
	};
	
	module.exports = _flatCat;

/***/ }),
/* 524 */
/***/ (function(module, exports) {

	function _forceReduced(x) {
	  return {
	    '@@transducer/value': x,
	    '@@transducer/reduced': true
	  };
	}
	module.exports = _forceReduced;

/***/ }),
/* 525 */
/***/ (function(module, exports) {

	function _functionName(f) {
	  // String(x => x) evaluates to "x => x", so the pattern may not match.
	  var match = String(f).match(/^function (\w*)/);
	  return match == null ? '' : match[1];
	}
	module.exports = _functionName;

/***/ }),
/* 526 */
/***/ (function(module, exports) {

	function _isRegExp(x) {
	  return Object.prototype.toString.call(x) === '[object RegExp]';
	}
	module.exports = _isRegExp;

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

	var _has = /*#__PURE__*/__webpack_require__(15);
	
	// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	
	
	function _objectAssign(target) {
	  if (target == null) {
	    throw new TypeError('Cannot convert undefined or null to object');
	  }
	
	  var output = Object(target);
	  var idx = 1;
	  var length = arguments.length;
	  while (idx < length) {
	    var source = arguments[idx];
	    if (source != null) {
	      for (var nextKey in source) {
	        if (_has(nextKey, source)) {
	          output[nextKey] = source[nextKey];
	        }
	      }
	    }
	    idx += 1;
	  }
	  return output;
	}
	module.exports = _objectAssign;

/***/ }),
/* 528 */
/***/ (function(module, exports) {

	function _of(x) {
	  return [x];
	}
	module.exports = _of;

/***/ }),
/* 529 */
/***/ (function(module, exports) {

	function _pipe(f, g) {
	  return function () {
	    return g.call(this, f.apply(this, arguments));
	  };
	}
	module.exports = _pipe;

/***/ }),
/* 530 */
/***/ (function(module, exports) {

	function _pipeP(f, g) {
	  return function () {
	    var ctx = this;
	    return f.apply(ctx, arguments).then(function (x) {
	      return g.call(ctx, x);
	    });
	  };
	}
	module.exports = _pipeP;

/***/ }),
/* 531 */
/***/ (function(module, exports) {

	function _quote(s) {
	  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
	  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
	
	  return '"' + escaped.replace(/"/g, '\\"') + '"';
	}
	module.exports = _quote;

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

	var _assign = /*#__PURE__*/__webpack_require__(157);
	
	var _identity = /*#__PURE__*/__webpack_require__(159);
	
	var _isArrayLike = /*#__PURE__*/__webpack_require__(98);
	
	var _isTransformer = /*#__PURE__*/__webpack_require__(162);
	
	var objOf = /*#__PURE__*/__webpack_require__(264);
	
	var _stepCatArray = {
	  '@@transducer/init': Array,
	  '@@transducer/step': function (xs, x) {
	    xs.push(x);
	    return xs;
	  },
	  '@@transducer/result': _identity
	};
	var _stepCatString = {
	  '@@transducer/init': String,
	  '@@transducer/step': function (a, b) {
	    return a + b;
	  },
	  '@@transducer/result': _identity
	};
	var _stepCatObject = {
	  '@@transducer/init': Object,
	  '@@transducer/step': function (result, input) {
	    return _assign(result, _isArrayLike(input) ? objOf(input[0], input[1]) : input);
	  },
	  '@@transducer/result': _identity
	};
	
	function _stepCat(obj) {
	  if (_isTransformer(obj)) {
	    return obj;
	  }
	  if (_isArrayLike(obj)) {
	    return _stepCatArray;
	  }
	  if (typeof obj === 'string') {
	    return _stepCatString;
	  }
	  if (typeof obj === 'object') {
	    return _stepCatObject;
	  }
	  throw new Error('Cannot create transformer for ' + obj);
	}
	module.exports = _stepCat;

/***/ }),
/* 533 */
/***/ (function(module, exports) {

	/**
	 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
	 */
	var pad = function pad(n) {
	  return (n < 10 ? '0' : '') + n;
	};
	
	var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
	  return d.toISOString();
	} : function _toISOString(d) {
	  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
	};
	
	module.exports = _toISOString;

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

	var _contains = /*#__PURE__*/__webpack_require__(56);
	
	var _map = /*#__PURE__*/__webpack_require__(101);
	
	var _quote = /*#__PURE__*/__webpack_require__(531);
	
	var _toISOString = /*#__PURE__*/__webpack_require__(533);
	
	var keys = /*#__PURE__*/__webpack_require__(28);
	
	var reject = /*#__PURE__*/__webpack_require__(107);
	
	function _toString(x, seen) {
	  var recur = function recur(y) {
	    var xs = seen.concat([x]);
	    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
	  };
	
	  //  mapPairs :: (Object, [String]) -> [String]
	  var mapPairs = function (obj, keys) {
	    return _map(function (k) {
	      return _quote(k) + ': ' + recur(obj[k]);
	    }, keys.slice().sort());
	  };
	
	  switch (Object.prototype.toString.call(x)) {
	    case '[object Arguments]':
	      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
	    case '[object Array]':
	      return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
	        return (/^\d+$/.test(k)
	        );
	      }, keys(x)))).join(', ') + ']';
	    case '[object Boolean]':
	      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
	    case '[object Date]':
	      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
	    case '[object Null]':
	      return 'null';
	    case '[object Number]':
	      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
	    case '[object String]':
	      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
	    case '[object Undefined]':
	      return 'undefined';
	    default:
	      if (typeof x.toString === 'function') {
	        var repr = x.toString();
	        if (repr !== '[object Object]') {
	          return repr;
	        }
	      }
	      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
	  }
	}
	module.exports = _toString;

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _reduced = /*#__PURE__*/__webpack_require__(38);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XAll = /*#__PURE__*/function () {
	
	  function XAll(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.all = true;
	  }
	  XAll.prototype['@@transducer/init'] = _xfBase.init;
	  XAll.prototype['@@transducer/result'] = function (result) {
	    if (this.all) {
	      result = this.xf['@@transducer/step'](result, true);
	    }
	    return this.xf['@@transducer/result'](result);
	  };
	  XAll.prototype['@@transducer/step'] = function (result, input) {
	    if (!this.f(input)) {
	      this.all = false;
	      result = _reduced(this.xf['@@transducer/step'](result, false));
	    }
	    return result;
	  };
	
	  return XAll;
	}();
	
	var _xall = /*#__PURE__*/_curry2(function _xall(f, xf) {
	  return new XAll(f, xf);
	});
	module.exports = _xall;

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

	var _concat = /*#__PURE__*/__webpack_require__(23);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XAperture = /*#__PURE__*/function () {
	
	  function XAperture(n, xf) {
	    this.xf = xf;
	    this.pos = 0;
	    this.full = false;
	    this.acc = new Array(n);
	  }
	  XAperture.prototype['@@transducer/init'] = _xfBase.init;
	  XAperture.prototype['@@transducer/result'] = function (result) {
	    this.acc = null;
	    return this.xf['@@transducer/result'](result);
	  };
	  XAperture.prototype['@@transducer/step'] = function (result, input) {
	    this.store(input);
	    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
	  };
	  XAperture.prototype.store = function (input) {
	    this.acc[this.pos] = input;
	    this.pos += 1;
	    if (this.pos === this.acc.length) {
	      this.pos = 0;
	      this.full = true;
	    }
	  };
	  XAperture.prototype.getCopy = function () {
	    return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
	  };
	
	  return XAperture;
	}();
	
	var _xaperture = /*#__PURE__*/_curry2(function _xaperture(n, xf) {
	  return new XAperture(n, xf);
	});
	module.exports = _xaperture;

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _flatCat = /*#__PURE__*/__webpack_require__(523);
	
	var map = /*#__PURE__*/__webpack_require__(17);
	
	var _xchain = /*#__PURE__*/_curry2(function _xchain(f, xf) {
	  return map(f, _flatCat(xf));
	});
	module.exports = _xchain;

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XDrop = /*#__PURE__*/function () {
	
	  function XDrop(n, xf) {
	    this.xf = xf;
	    this.n = n;
	  }
	  XDrop.prototype['@@transducer/init'] = _xfBase.init;
	  XDrop.prototype['@@transducer/result'] = _xfBase.result;
	  XDrop.prototype['@@transducer/step'] = function (result, input) {
	    if (this.n > 0) {
	      this.n -= 1;
	      return result;
	    }
	    return this.xf['@@transducer/step'](result, input);
	  };
	
	  return XDrop;
	}();
	
	var _xdrop = /*#__PURE__*/_curry2(function _xdrop(n, xf) {
	  return new XDrop(n, xf);
	});
	module.exports = _xdrop;

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XDropLast = /*#__PURE__*/function () {
	
	  function XDropLast(n, xf) {
	    this.xf = xf;
	    this.pos = 0;
	    this.full = false;
	    this.acc = new Array(n);
	  }
	  XDropLast.prototype['@@transducer/init'] = _xfBase.init;
	  XDropLast.prototype['@@transducer/result'] = function (result) {
	    this.acc = null;
	    return this.xf['@@transducer/result'](result);
	  };
	  XDropLast.prototype['@@transducer/step'] = function (result, input) {
	    if (this.full) {
	      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
	    }
	    this.store(input);
	    return result;
	  };
	  XDropLast.prototype.store = function (input) {
	    this.acc[this.pos] = input;
	    this.pos += 1;
	    if (this.pos === this.acc.length) {
	      this.pos = 0;
	      this.full = true;
	    }
	  };
	
	  return XDropLast;
	}();
	
	var _xdropLast = /*#__PURE__*/_curry2(function _xdropLast(n, xf) {
	  return new XDropLast(n, xf);
	});
	module.exports = _xdropLast;

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _reduce = /*#__PURE__*/__webpack_require__(22);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XDropLastWhile = /*#__PURE__*/function () {
	
	  function XDropLastWhile(fn, xf) {
	    this.f = fn;
	    this.retained = [];
	    this.xf = xf;
	  }
	  XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
	  XDropLastWhile.prototype['@@transducer/result'] = function (result) {
	    this.retained = null;
	    return this.xf['@@transducer/result'](result);
	  };
	  XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
	    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
	  };
	  XDropLastWhile.prototype.flush = function (result, input) {
	    result = _reduce(this.xf['@@transducer/step'], result, this.retained);
	    this.retained = [];
	    return this.xf['@@transducer/step'](result, input);
	  };
	  XDropLastWhile.prototype.retain = function (result, input) {
	    this.retained.push(input);
	    return result;
	  };
	
	  return XDropLastWhile;
	}();
	
	var _xdropLastWhile = /*#__PURE__*/_curry2(function _xdropLastWhile(fn, xf) {
	  return new XDropLastWhile(fn, xf);
	});
	module.exports = _xdropLastWhile;

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XDropWhile = /*#__PURE__*/function () {
	
	  function XDropWhile(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
	  XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
	  XDropWhile.prototype['@@transducer/step'] = function (result, input) {
	    if (this.f) {
	      if (this.f(input)) {
	        return result;
	      }
	      this.f = null;
	    }
	    return this.xf['@@transducer/step'](result, input);
	  };
	
	  return XDropWhile;
	}();
	
	var _xdropWhile = /*#__PURE__*/_curry2(function _xdropWhile(f, xf) {
	  return new XDropWhile(f, xf);
	});
	module.exports = _xdropWhile;

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XFilter = /*#__PURE__*/function () {
	
	  function XFilter(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XFilter.prototype['@@transducer/init'] = _xfBase.init;
	  XFilter.prototype['@@transducer/result'] = _xfBase.result;
	  XFilter.prototype['@@transducer/step'] = function (result, input) {
	    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
	  };
	
	  return XFilter;
	}();
	
	var _xfilter = /*#__PURE__*/_curry2(function _xfilter(f, xf) {
	  return new XFilter(f, xf);
	});
	module.exports = _xfilter;

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _reduced = /*#__PURE__*/__webpack_require__(38);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XFind = /*#__PURE__*/function () {
	
	  function XFind(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.found = false;
	  }
	  XFind.prototype['@@transducer/init'] = _xfBase.init;
	  XFind.prototype['@@transducer/result'] = function (result) {
	    if (!this.found) {
	      result = this.xf['@@transducer/step'](result, void 0);
	    }
	    return this.xf['@@transducer/result'](result);
	  };
	  XFind.prototype['@@transducer/step'] = function (result, input) {
	    if (this.f(input)) {
	      this.found = true;
	      result = _reduced(this.xf['@@transducer/step'](result, input));
	    }
	    return result;
	  };
	
	  return XFind;
	}();
	
	var _xfind = /*#__PURE__*/_curry2(function _xfind(f, xf) {
	  return new XFind(f, xf);
	});
	module.exports = _xfind;

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _reduced = /*#__PURE__*/__webpack_require__(38);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XFindIndex = /*#__PURE__*/function () {
	
	  function XFindIndex(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.idx = -1;
	    this.found = false;
	  }
	  XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
	  XFindIndex.prototype['@@transducer/result'] = function (result) {
	    if (!this.found) {
	      result = this.xf['@@transducer/step'](result, -1);
	    }
	    return this.xf['@@transducer/result'](result);
	  };
	  XFindIndex.prototype['@@transducer/step'] = function (result, input) {
	    this.idx += 1;
	    if (this.f(input)) {
	      this.found = true;
	      result = _reduced(this.xf['@@transducer/step'](result, this.idx));
	    }
	    return result;
	  };
	
	  return XFindIndex;
	}();
	
	var _xfindIndex = /*#__PURE__*/_curry2(function _xfindIndex(f, xf) {
	  return new XFindIndex(f, xf);
	});
	module.exports = _xfindIndex;

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XFindLast = /*#__PURE__*/function () {
	
	  function XFindLast(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XFindLast.prototype['@@transducer/init'] = _xfBase.init;
	  XFindLast.prototype['@@transducer/result'] = function (result) {
	    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
	  };
	  XFindLast.prototype['@@transducer/step'] = function (result, input) {
	    if (this.f(input)) {
	      this.last = input;
	    }
	    return result;
	  };
	
	  return XFindLast;
	}();
	
	var _xfindLast = /*#__PURE__*/_curry2(function _xfindLast(f, xf) {
	  return new XFindLast(f, xf);
	});
	module.exports = _xfindLast;

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XFindLastIndex = /*#__PURE__*/function () {
	
	  function XFindLastIndex(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.idx = -1;
	    this.lastIdx = -1;
	  }
	  XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
	  XFindLastIndex.prototype['@@transducer/result'] = function (result) {
	    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
	  };
	  XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
	    this.idx += 1;
	    if (this.f(input)) {
	      this.lastIdx = this.idx;
	    }
	    return result;
	  };
	
	  return XFindLastIndex;
	}();
	
	var _xfindLastIndex = /*#__PURE__*/_curry2(function _xfindLastIndex(f, xf) {
	  return new XFindLastIndex(f, xf);
	});
	module.exports = _xfindLastIndex;

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XMap = /*#__PURE__*/function () {
	
	  function XMap(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XMap.prototype['@@transducer/init'] = _xfBase.init;
	  XMap.prototype['@@transducer/result'] = _xfBase.result;
	  XMap.prototype['@@transducer/step'] = function (result, input) {
	    return this.xf['@@transducer/step'](result, this.f(input));
	  };
	
	  return XMap;
	}();
	
	var _xmap = /*#__PURE__*/_curry2(function _xmap(f, xf) {
	  return new XMap(f, xf);
	});
	module.exports = _xmap;

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

	var _curryN = /*#__PURE__*/__webpack_require__(97);
	
	var _has = /*#__PURE__*/__webpack_require__(15);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XReduceBy = /*#__PURE__*/function () {
	
	  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
	    this.valueFn = valueFn;
	    this.valueAcc = valueAcc;
	    this.keyFn = keyFn;
	    this.xf = xf;
	    this.inputs = {};
	  }
	  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
	  XReduceBy.prototype['@@transducer/result'] = function (result) {
	    var key;
	    for (key in this.inputs) {
	      if (_has(key, this.inputs)) {
	        result = this.xf['@@transducer/step'](result, this.inputs[key]);
	        if (result['@@transducer/reduced']) {
	          result = result['@@transducer/value'];
	          break;
	        }
	      }
	    }
	    this.inputs = null;
	    return this.xf['@@transducer/result'](result);
	  };
	  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
	    var key = this.keyFn(input);
	    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
	    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
	    return result;
	  };
	
	  return XReduceBy;
	}();
	
	var _xreduceBy = /*#__PURE__*/_curryN(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
	  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
	});
	module.exports = _xreduceBy;

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _reduced = /*#__PURE__*/__webpack_require__(38);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XTake = /*#__PURE__*/function () {
	
	  function XTake(n, xf) {
	    this.xf = xf;
	    this.n = n;
	    this.i = 0;
	  }
	  XTake.prototype['@@transducer/init'] = _xfBase.init;
	  XTake.prototype['@@transducer/result'] = _xfBase.result;
	  XTake.prototype['@@transducer/step'] = function (result, input) {
	    this.i += 1;
	    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
	    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
	  };
	
	  return XTake;
	}();
	
	var _xtake = /*#__PURE__*/_curry2(function _xtake(n, xf) {
	  return new XTake(n, xf);
	});
	module.exports = _xtake;

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _reduced = /*#__PURE__*/__webpack_require__(38);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XTakeWhile = /*#__PURE__*/function () {
	
	  function XTakeWhile(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
	  XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
	  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
	    return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
	  };
	
	  return XTakeWhile;
	}();
	
	var _xtakeWhile = /*#__PURE__*/_curry2(function _xtakeWhile(f, xf) {
	  return new XTakeWhile(f, xf);
	});
	module.exports = _xtakeWhile;

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _xfBase = /*#__PURE__*/__webpack_require__(11);
	
	var XTap = /*#__PURE__*/function () {
	
	  function XTap(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XTap.prototype['@@transducer/init'] = _xfBase.init;
	  XTap.prototype['@@transducer/result'] = _xfBase.result;
	  XTap.prototype['@@transducer/step'] = function (result, input) {
	    this.f(input);
	    return this.xf['@@transducer/step'](result, input);
	  };
	
	  return XTap;
	}();
	
	var _xtap = /*#__PURE__*/_curry2(function _xtap(f, xf) {
	  return new XTap(f, xf);
	});
	module.exports = _xtap;

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

	var _contains = /*#__PURE__*/__webpack_require__(56);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _filter = /*#__PURE__*/__webpack_require__(158);
	
	var flip = /*#__PURE__*/__webpack_require__(95);
	
	var uniq = /*#__PURE__*/__webpack_require__(168);
	
	/**
	 * Combines two lists into a set (i.e. no duplicates) composed of those
	 * elements common to both lists.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig [*] -> [*] -> [*]
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The list of elements found in both `list1` and `list2`.
	 * @see R.innerJoin
	 * @example
	 *
	 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
	 */
	
	
	var intersection = /*#__PURE__*/_curry2(function intersection(list1, list2) {
	  var lookupList, filteredList;
	  if (list1.length > list2.length) {
	    lookupList = list1;
	    filteredList = list2;
	  } else {
	    lookupList = list2;
	    filteredList = list1;
	  }
	  return uniq(_filter(flip(_contains)(lookupList), filteredList));
	});
	module.exports = intersection;

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

	var _checkForMethod = /*#__PURE__*/__webpack_require__(70);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Creates a new list with the separator interposed between elements.
	 *
	 * Dispatches to the `intersperse` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category List
	 * @sig a -> [a] -> [a]
	 * @param {*} separator The element to add to the list.
	 * @param {Array} list The list to be interposed.
	 * @return {Array} The new list.
	 * @example
	 *
	 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
	 */
	
	
	var intersperse = /*#__PURE__*/_curry2( /*#__PURE__*/_checkForMethod('intersperse', function intersperse(separator, list) {
	  var out = [];
	  var idx = 0;
	  var length = list.length;
	  while (idx < length) {
	    if (idx === length - 1) {
	      out.push(list[idx]);
	    } else {
	      out.push(list[idx], separator);
	    }
	    idx += 1;
	  }
	  return out;
	}));
	module.exports = intersperse;

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

	var _clone = /*#__PURE__*/__webpack_require__(243);
	
	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var _isTransformer = /*#__PURE__*/__webpack_require__(162);
	
	var _reduce = /*#__PURE__*/__webpack_require__(22);
	
	var _stepCat = /*#__PURE__*/__webpack_require__(532);
	
	/**
	 * Transforms the items of the list with the transducer and appends the
	 * transformed items to the accumulator using an appropriate iterator function
	 * based on the accumulator type.
	 *
	 * The accumulator can be an array, string, object or a transformer. Iterated
	 * items will be appended to arrays and concatenated to strings. Objects will
	 * be merged directly or 2-item arrays will be merged as key, value pairs.
	 *
	 * The accumulator can also be a transformer object that provides a 2-arity
	 * reducing iterator function, step, 0-arity initial value function, init, and
	 * 1-arity result extraction function result. The step function is used as the
	 * iterator function in reduce. The result function is used to convert the
	 * final accumulator into the return type and in most cases is R.identity. The
	 * init function is used to provide the initial accumulator.
	 *
	 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
	 * transducer.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category List
	 * @sig a -> (b -> b) -> [c] -> a
	 * @param {*} acc The initial accumulator value.
	 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @example
	 *
	 *      var numbers = [1, 2, 3, 4];
	 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
	 *
	 *      R.into([], transducer, numbers); //=> [2, 3]
	 *
	 *      var intoArray = R.into([]);
	 *      intoArray(transducer, numbers); //=> [2, 3]
	 */
	
	
	var into = /*#__PURE__*/_curry3(function into(acc, xf, list) {
	  return _isTransformer(acc) ? _reduce(xf(acc), acc['@@transducer/init'](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
	});
	module.exports = into;

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _has = /*#__PURE__*/__webpack_require__(15);
	
	var keys = /*#__PURE__*/__webpack_require__(28);
	
	/**
	 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
	 * duplicate values by putting the values into an array.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Object
	 * @sig {s: x} -> {x: [ s, ... ]}
	 * @param {Object} obj The object or array to invert
	 * @return {Object} out A new object with keys in an array.
	 * @see R.invertObj
	 * @example
	 *
	 *      var raceResultsByFirstName = {
	 *        first: 'alice',
	 *        second: 'jake',
	 *        third: 'alice',
	 *      };
	 *      R.invert(raceResultsByFirstName);
	 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
	 */
	
	
	var invert = /*#__PURE__*/_curry1(function invert(obj) {
	  var props = keys(obj);
	  var len = props.length;
	  var idx = 0;
	  var out = {};
	
	  while (idx < len) {
	    var key = props[idx];
	    var val = obj[key];
	    var list = _has(val, out) ? out[val] : out[val] = [];
	    list[list.length] = key;
	    idx += 1;
	  }
	  return out;
	});
	module.exports = invert;

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var keys = /*#__PURE__*/__webpack_require__(28);
	
	/**
	 * Returns a new object with the keys of the given object as values, and the
	 * values of the given object, which are coerced to strings, as keys. Note
	 * that the last key found is preferred when handling the same value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Object
	 * @sig {s: x} -> {x: s}
	 * @param {Object} obj The object or array to invert
	 * @return {Object} out A new object
	 * @see R.invert
	 * @example
	 *
	 *      var raceResults = {
	 *        first: 'alice',
	 *        second: 'jake'
	 *      };
	 *      R.invertObj(raceResults);
	 *      //=> { 'alice': 'first', 'jake':'second' }
	 *
	 *      // Alternatively:
	 *      var raceResults = ['alice', 'jake'];
	 *      R.invertObj(raceResults);
	 *      //=> { 'alice': '0', 'jake':'1' }
	 */
	
	
	var invertObj = /*#__PURE__*/_curry1(function invertObj(obj) {
	  var props = keys(obj);
	  var len = props.length;
	  var idx = 0;
	  var out = {};
	
	  while (idx < len) {
	    var key = props[idx];
	    out[obj[key]] = key;
	    idx += 1;
	  }
	  return out;
	});
	module.exports = invertObj;

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var empty = /*#__PURE__*/__webpack_require__(241);
	
	var equals = /*#__PURE__*/__webpack_require__(21);
	
	/**
	 * Returns `true` if the given value is its type's empty value; `false`
	 * otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Logic
	 * @sig a -> Boolean
	 * @param {*} x
	 * @return {Boolean}
	 * @see R.empty
	 * @example
	 *
	 *      R.isEmpty([1, 2, 3]);   //=> false
	 *      R.isEmpty([]);          //=> true
	 *      R.isEmpty('');          //=> true
	 *      R.isEmpty(null);        //=> false
	 *      R.isEmpty({});          //=> true
	 *      R.isEmpty({length: 0}); //=> false
	 */
	
	
	var isEmpty = /*#__PURE__*/_curry1(function isEmpty(x) {
	  return x != null && equals(x, empty(x));
	});
	module.exports = isEmpty;

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

	var invoker = /*#__PURE__*/__webpack_require__(72);
	
	/**
	 * Returns a string made by inserting the `separator` between each element and
	 * concatenating all the elements into a single string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig String -> [a] -> String
	 * @param {Number|String} separator The string used to separate the elements.
	 * @param {Array} xs The elements to join into a string.
	 * @return {String} str The string made by concatenating `xs` with `separator`.
	 * @see R.split
	 * @example
	 *
	 *      var spacer = R.join(' ');
	 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
	 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
	 */
	
	
	var join = /*#__PURE__*/invoker(1, 'join');
	module.exports = join;

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Returns a list containing the names of all the properties of the supplied
	 * object, including prototype properties.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.0
	 * @category Object
	 * @sig {k: v} -> [k]
	 * @param {Object} obj The object to extract properties from
	 * @return {Array} An array of the object's own and prototype properties.
	 * @see R.keys, R.valuesIn
	 * @example
	 *
	 *      var F = function() { this.x = 'X'; };
	 *      F.prototype.y = 'Y';
	 *      var f = new F();
	 *      R.keysIn(f); //=> ['x', 'y']
	 */
	
	
	var keysIn = /*#__PURE__*/_curry1(function keysIn(obj) {
	  var prop;
	  var ks = [];
	  for (prop in obj) {
	    ks[ks.length] = prop;
	  }
	  return ks;
	});
	module.exports = keysIn;

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _isArray = /*#__PURE__*/__webpack_require__(37);
	
	var equals = /*#__PURE__*/__webpack_require__(21);
	
	/**
	 * Returns the position of the last occurrence of an item in an array, or -1 if
	 * the item is not included in the array. [`R.equals`](#equals) is used to
	 * determine equality.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig a -> [a] -> Number
	 * @param {*} target The item to find.
	 * @param {Array} xs The array to search in.
	 * @return {Number} the index of the target, or -1 if the target is not found.
	 * @see R.indexOf
	 * @example
	 *
	 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
	 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
	 */
	
	
	var lastIndexOf = /*#__PURE__*/_curry2(function lastIndexOf(target, xs) {
	  if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
	    return xs.lastIndexOf(target);
	  } else {
	    var idx = xs.length - 1;
	    while (idx >= 0) {
	      if (equals(xs[idx], target)) {
	        return idx;
	      }
	      idx -= 1;
	    }
	    return -1;
	  }
	});
	module.exports = lastIndexOf;

/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var lens = /*#__PURE__*/__webpack_require__(102);
	
	var nth = /*#__PURE__*/__webpack_require__(73);
	
	var update = /*#__PURE__*/__webpack_require__(169);
	
	/**
	 * Returns a lens whose focus is the specified index.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig Number -> Lens s a
	 * @param {Number} n
	 * @return {Lens}
	 * @see R.view, R.set, R.over
	 * @example
	 *
	 *      var headLens = R.lensIndex(0);
	 *
	 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
	 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
	 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
	 */
	
	
	var lensIndex = /*#__PURE__*/_curry1(function lensIndex(n) {
	  return lens(nth(n), update(n));
	});
	module.exports = lensIndex;

/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var assocPath = /*#__PURE__*/__webpack_require__(230);
	
	var lens = /*#__PURE__*/__webpack_require__(102);
	
	var path = /*#__PURE__*/__webpack_require__(58);
	
	/**
	 * Returns a lens whose focus is the specified path.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Object
	 * @typedefn Idx = String | Int
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig [Idx] -> Lens s a
	 * @param {Array} path The path to use.
	 * @return {Lens}
	 * @see R.view, R.set, R.over
	 * @example
	 *
	 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
	 *
	 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
	 *      //=> 2
	 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
	 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
	 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
	 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
	 */
	
	
	var lensPath = /*#__PURE__*/_curry1(function lensPath(p) {
	  return lens(path(p), assocPath(p));
	});
	module.exports = lensPath;

/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var assoc = /*#__PURE__*/__webpack_require__(94);
	
	var lens = /*#__PURE__*/__webpack_require__(102);
	
	var prop = /*#__PURE__*/__webpack_require__(164);
	
	/**
	 * Returns a lens whose focus is the specified property.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig String -> Lens s a
	 * @param {String} k
	 * @return {Lens}
	 * @see R.view, R.set, R.over
	 * @example
	 *
	 *      var xLens = R.lensProp('x');
	 *
	 *      R.view(xLens, {x: 1, y: 2});            //=> 1
	 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	 */
	
	
	var lensProp = /*#__PURE__*/_curry1(function lensProp(k) {
	  return lens(prop(k), assoc(k));
	});
	module.exports = lensProp;

/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns `true` if the first argument is less than the second; `false`
	 * otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @see R.gt
	 * @example
	 *
	 *      R.lt(2, 1); //=> false
	 *      R.lt(2, 2); //=> false
	 *      R.lt(2, 3); //=> true
	 *      R.lt('a', 'z'); //=> true
	 *      R.lt('z', 'a'); //=> false
	 */
	
	
	var lt = /*#__PURE__*/_curry2(function lt(a, b) {
	  return a < b;
	});
	module.exports = lt;

/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns `true` if the first argument is less than or equal to the second;
	 * `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> Boolean
	 * @param {Number} a
	 * @param {Number} b
	 * @return {Boolean}
	 * @see R.gte
	 * @example
	 *
	 *      R.lte(2, 1); //=> false
	 *      R.lte(2, 2); //=> true
	 *      R.lte(2, 3); //=> true
	 *      R.lte('a', 'z'); //=> true
	 *      R.lte('z', 'a'); //=> false
	 */
	
	
	var lte = /*#__PURE__*/_curry2(function lte(a, b) {
	  return a <= b;
	});
	module.exports = lte;

/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * The `mapAccum` function behaves like a combination of map and reduce; it
	 * applies a function to each element of a list, passing an accumulating
	 * parameter from left to right, and returning a final value of this
	 * accumulator together with the new list.
	 *
	 * The iterator function receives two arguments, *acc* and *value*, and should
	 * return a tuple *[acc, value]*.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category List
	 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
	 * @param {Function} fn The function to be called on every element of the input `list`.
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.addIndex, R.mapAccumRight
	 * @example
	 *
	 *      var digits = ['1', '2', '3', '4'];
	 *      var appender = (a, b) => [a + b, a + b];
	 *
	 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
	 * @symb R.mapAccum(f, a, [b, c, d]) = [
	 *   f(f(f(a, b)[0], c)[0], d)[0],
	 *   [
	 *     f(a, b)[1],
	 *     f(f(a, b)[0], c)[1],
	 *     f(f(f(a, b)[0], c)[0], d)[1]
	 *   ]
	 * ]
	 */
	
	
	var mapAccum = /*#__PURE__*/_curry3(function mapAccum(fn, acc, list) {
	  var idx = 0;
	  var len = list.length;
	  var result = [];
	  var tuple = [acc];
	  while (idx < len) {
	    tuple = fn(tuple[0], list[idx]);
	    result[idx] = tuple[1];
	    idx += 1;
	  }
	  return [tuple[0], result];
	});
	module.exports = mapAccum;

/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * The `mapAccumRight` function behaves like a combination of map and reduce; it
	 * applies a function to each element of a list, passing an accumulating
	 * parameter from right to left, and returning a final value of this
	 * accumulator together with the new list.
	 *
	 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
	 * the right to the left.
	 *
	 * The iterator function receives two arguments, *value* and *acc*, and should
	 * return a tuple *[value, acc]*.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category List
	 * @sig ((x, acc) -> (y, acc)) -> acc -> [x] -> ([y], acc)
	 * @param {Function} fn The function to be called on every element of the input `list`.
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.addIndex, R.mapAccum
	 * @example
	 *
	 *      var digits = ['1', '2', '3', '4'];
	 *      var append = (a, b) => [a + b, a + b];
	 *
	 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
	 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
	 *   [
	 *     f(b, f(c, f(d, a)[0])[0])[1],
	 *     f(c, f(d, a)[0])[1],
	 *     f(d, a)[1],
	 *   ]
	 *   f(b, f(c, f(d, a)[0])[0])[0],
	 * ]
	 */
	
	
	var mapAccumRight = /*#__PURE__*/_curry3(function mapAccumRight(fn, acc, list) {
	  var idx = list.length - 1;
	  var result = [];
	  var tuple = [acc];
	  while (idx >= 0) {
	    tuple = fn(list[idx], tuple[0]);
	    result[idx] = tuple[1];
	    idx -= 1;
	  }
	  return [result, tuple[0]];
	});
	module.exports = mapAccumRight;

/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _reduce = /*#__PURE__*/__webpack_require__(22);
	
	var keys = /*#__PURE__*/__webpack_require__(28);
	
	/**
	 * An Object-specific version of [`map`](#map). The function is applied to three
	 * arguments: *(value, key, obj)*. If only the value is significant, use
	 * [`map`](#map) instead.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Object
	 * @sig ((*, String, Object) -> *) -> Object -> Object
	 * @param {Function} fn
	 * @param {Object} obj
	 * @return {Object}
	 * @see R.map
	 * @example
	 *
	 *      var values = { x: 1, y: 2, z: 3 };
	 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
	 *
	 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
	 */
	
	
	var mapObjIndexed = /*#__PURE__*/_curry2(function mapObjIndexed(fn, obj) {
	  return _reduce(function (acc, key) {
	    acc[key] = fn(obj[key], key, obj);
	    return acc;
	  }, {}, keys(obj));
	});
	module.exports = mapObjIndexed;

/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Tests a regular expression against a String. Note that this function will
	 * return an empty array when there are no matches. This differs from
	 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
	 * which returns `null` when there are no matches.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category String
	 * @sig RegExp -> String -> [String | Undefined]
	 * @param {RegExp} rx A regular expression.
	 * @param {String} str The string to match against
	 * @return {Array} The list of matches or empty array.
	 * @see R.test
	 * @example
	 *
	 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
	 *      R.match(/a/, 'b'); //=> []
	 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
	 */
	
	
	var match = /*#__PURE__*/_curry2(function match(rx, str) {
	  return str.match(rx) || [];
	});
	module.exports = match;

/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _isInteger = /*#__PURE__*/__webpack_require__(160);
	
	/**
	 * `mathMod` behaves like the modulo operator should mathematically, unlike the
	 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
	 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
	 * arguments, and returns NaN when the modulus is zero or negative.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} m The dividend.
	 * @param {Number} p the modulus.
	 * @return {Number} The result of `b mod a`.
	 * @see R.modulo
	 * @example
	 *
	 *      R.mathMod(-17, 5);  //=> 3
	 *      R.mathMod(17, 5);   //=> 2
	 *      R.mathMod(17, -5);  //=> NaN
	 *      R.mathMod(17, 0);   //=> NaN
	 *      R.mathMod(17.2, 5); //=> NaN
	 *      R.mathMod(17, 5.3); //=> NaN
	 *
	 *      var clock = R.mathMod(R.__, 12);
	 *      clock(15); //=> 3
	 *      clock(24); //=> 0
	 *
	 *      var seventeenMod = R.mathMod(17);
	 *      seventeenMod(3);  //=> 2
	 *      seventeenMod(4);  //=> 1
	 *      seventeenMod(10); //=> 7
	 */
	
	
	var mathMod = /*#__PURE__*/_curry2(function mathMod(m, p) {
	  if (!_isInteger(m)) {
	    return NaN;
	  }
	  if (!_isInteger(p) || p < 1) {
	    return NaN;
	  }
	  return (m % p + p) % p;
	});
	module.exports = mathMod;

/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Takes a function and two values, and returns whichever value produces the
	 * larger result when passed to the provided function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Relation
	 * @sig Ord b => (a -> b) -> a -> a -> a
	 * @param {Function} f
	 * @param {*} a
	 * @param {*} b
	 * @return {*}
	 * @see R.max, R.minBy
	 * @example
	 *
	 *      //  square :: Number -> Number
	 *      var square = n => n * n;
	 *
	 *      R.maxBy(square, -3, 2); //=> -3
	 *
	 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
	 *      R.reduce(R.maxBy(square), 0, []); //=> 0
	 */
	
	
	var maxBy = /*#__PURE__*/_curry3(function maxBy(f, a, b) {
	  return f(b) > f(a) ? b : a;
	});
	module.exports = maxBy;

/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var mean = /*#__PURE__*/__webpack_require__(260);
	
	/**
	 * Returns the median of the given list of numbers.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Math
	 * @sig [Number] -> Number
	 * @param {Array} list
	 * @return {Number}
	 * @see R.mean
	 * @example
	 *
	 *      R.median([2, 9, 7]); //=> 7
	 *      R.median([7, 2, 10, 9]); //=> 8
	 *      R.median([]); //=> NaN
	 */
	
	
	var median = /*#__PURE__*/_curry1(function median(list) {
	  var len = list.length;
	  if (len === 0) {
	    return NaN;
	  }
	  var width = 2 - len % 2;
	  var idx = (len - width) / 2;
	  return mean(Array.prototype.slice.call(list, 0).sort(function (a, b) {
	    return a < b ? -1 : a > b ? 1 : 0;
	  }).slice(idx, idx + width));
	});
	module.exports = median;

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeWith = /*#__PURE__*/__webpack_require__(261);
	
	var toString = /*#__PURE__*/__webpack_require__(75);
	
	/**
	 * Creates a new function that, when invoked, caches the result of calling `fn`
	 * for a given argument set and returns the result. Subsequent calls to the
	 * memoized `fn` with the same argument set will not result in an additional
	 * call to `fn`; instead, the cached result for that set of arguments will be
	 * returned.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (*... -> a) -> (*... -> a)
	 * @param {Function} fn The function to memoize.
	 * @return {Function} Memoized version of `fn`.
	 * @see R.memoizeWith
	 * @deprecated since v0.25.0
	 * @example
	 *
	 *      let count = 0;
	 *      const factorial = R.memoize(n => {
	 *        count += 1;
	 *        return R.product(R.range(1, n + 1));
	 *      });
	 *      factorial(5); //=> 120
	 *      factorial(5); //=> 120
	 *      factorial(5); //=> 120
	 *      count; //=> 1
	 */
	
	
	var memoize = /*#__PURE__*/memoizeWith(function () {
	  return toString(arguments);
	});
	module.exports = memoize;

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

	var _assign = /*#__PURE__*/__webpack_require__(157);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Create a new object with the own properties of the first object merged with
	 * the own properties of the second object. If a key exists in both objects,
	 * the value from the second object will be used.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> {k: v} -> {k: v}
	 * @param {Object} l
	 * @param {Object} r
	 * @return {Object}
	 * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey
	 * @example
	 *
	 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
	 *      //=> { 'name': 'fred', 'age': 40 }
	 *
	 *      var resetToDefault = R.merge(R.__, {x: 0});
	 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
	 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
	 */
	
	
	var merge = /*#__PURE__*/_curry2(function merge(l, r) {
	  return _assign({}, l, r);
	});
	module.exports = merge;

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

	var _assign = /*#__PURE__*/__webpack_require__(157);
	
	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Merges a list of objects together into one object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category List
	 * @sig [{k: v}] -> {k: v}
	 * @param {Array} list An array of objects
	 * @return {Object} A merged object.
	 * @see R.reduce
	 * @example
	 *
	 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
	 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
	 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
	 */
	
	
	var mergeAll = /*#__PURE__*/_curry1(function mergeAll(list) {
	  return _assign.apply(null, [{}].concat(list));
	});
	module.exports = mergeAll;

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var mergeDeepWithKey = /*#__PURE__*/__webpack_require__(104);
	
	/**
	 * Creates a new object with the own properties of the first object merged with
	 * the own properties of the second object. If a key exists in both objects:
	 * - and both values are objects, the two values will be recursively merged
	 * - otherwise the value from the first object will be used.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.24.0
	 * @category Object
	 * @sig {a} -> {a} -> {a}
	 * @param {Object} lObj
	 * @param {Object} rObj
	 * @return {Object}
	 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
	 * @example
	 *
	 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
	 *                      { age: 40, contact: { email: 'baa@example.com' }});
	 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
	 */
	
	
	var mergeDeepLeft = /*#__PURE__*/_curry2(function mergeDeepLeft(lObj, rObj) {
	  return mergeDeepWithKey(function (k, lVal, rVal) {
	    return lVal;
	  }, lObj, rObj);
	});
	module.exports = mergeDeepLeft;

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var mergeDeepWithKey = /*#__PURE__*/__webpack_require__(104);
	
	/**
	 * Creates a new object with the own properties of the first object merged with
	 * the own properties of the second object. If a key exists in both objects:
	 * - and both values are objects, the two values will be recursively merged
	 * - otherwise the value from the second object will be used.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.24.0
	 * @category Object
	 * @sig {a} -> {a} -> {a}
	 * @param {Object} lObj
	 * @param {Object} rObj
	 * @return {Object}
	 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
	 * @example
	 *
	 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
	 *                       { age: 40, contact: { email: 'baa@example.com' }});
	 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
	 */
	
	
	var mergeDeepRight = /*#__PURE__*/_curry2(function mergeDeepRight(lObj, rObj) {
	  return mergeDeepWithKey(function (k, lVal, rVal) {
	    return rVal;
	  }, lObj, rObj);
	});
	module.exports = mergeDeepRight;

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var mergeDeepWithKey = /*#__PURE__*/__webpack_require__(104);
	
	/**
	 * Creates a new object with the own properties of the two provided objects.
	 * If a key exists in both objects:
	 * - and both associated values are also objects then the values will be
	 *   recursively merged.
	 * - otherwise the provided function is applied to associated values using the
	 *   resulting value as the new value associated with the key.
	 * If a key only exists in one object, the value will be associated with the key
	 * of the resulting object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.24.0
	 * @category Object
	 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
	 * @param {Function} fn
	 * @param {Object} lObj
	 * @param {Object} rObj
	 * @return {Object}
	 * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey
	 * @example
	 *
	 *      R.mergeDeepWith(R.concat,
	 *                      { a: true, c: { values: [10, 20] }},
	 *                      { b: true, c: { values: [15, 35] }});
	 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
	 */
	
	
	var mergeDeepWith = /*#__PURE__*/_curry3(function mergeDeepWith(fn, lObj, rObj) {
	  return mergeDeepWithKey(function (k, lVal, rVal) {
	    return fn(lVal, rVal);
	  }, lObj, rObj);
	});
	module.exports = mergeDeepWith;

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var mergeWithKey = /*#__PURE__*/__webpack_require__(163);
	
	/**
	 * Creates a new object with the own properties of the two provided objects. If
	 * a key exists in both objects, the provided function is applied to the values
	 * associated with the key in each object, with the result being used as the
	 * value associated with the key in the returned object.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Object
	 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
	 * @param {Function} fn
	 * @param {Object} l
	 * @param {Object} r
	 * @return {Object}
	 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
	 * @example
	 *
	 *      R.mergeWith(R.concat,
	 *                  { a: true, values: [10, 20] },
	 *                  { b: true, values: [15, 35] });
	 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
	 */
	
	
	var mergeWith = /*#__PURE__*/_curry3(function mergeWith(fn, l, r) {
	  return mergeWithKey(function (_, _l, _r) {
	    return fn(_l, _r);
	  }, l, r);
	});
	module.exports = mergeWith;

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns the smaller of its two arguments.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord a => a -> a -> a
	 * @param {*} a
	 * @param {*} b
	 * @return {*}
	 * @see R.minBy, R.max
	 * @example
	 *
	 *      R.min(789, 123); //=> 123
	 *      R.min('a', 'b'); //=> 'a'
	 */
	
	
	var min = /*#__PURE__*/_curry2(function min(a, b) {
	  return b < a ? b : a;
	});
	module.exports = min;

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Takes a function and two values, and returns whichever value produces the
	 * smaller result when passed to the provided function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Relation
	 * @sig Ord b => (a -> b) -> a -> a -> a
	 * @param {Function} f
	 * @param {*} a
	 * @param {*} b
	 * @return {*}
	 * @see R.min, R.maxBy
	 * @example
	 *
	 *      //  square :: Number -> Number
	 *      var square = n => n * n;
	 *
	 *      R.minBy(square, -3, 2); //=> 2
	 *
	 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
	 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
	 */
	
	
	var minBy = /*#__PURE__*/_curry3(function minBy(f, a, b) {
	  return f(b) < f(a) ? b : a;
	});
	module.exports = minBy;

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Divides the first parameter by the second and returns the remainder. Note
	 * that this function preserves the JavaScript-style behavior for modulo. For
	 * mathematical modulo see [`mathMod`](#mathMod).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a The value to the divide.
	 * @param {Number} b The pseudo-modulus
	 * @return {Number} The result of `b % a`.
	 * @see R.mathMod
	 * @example
	 *
	 *      R.modulo(17, 3); //=> 2
	 *      // JS behavior:
	 *      R.modulo(-17, 3); //=> -2
	 *      R.modulo(17, -3); //=> 2
	 *
	 *      var isOdd = R.modulo(R.__, 2);
	 *      isOdd(42); //=> 0
	 *      isOdd(21); //=> 1
	 */
	
	
	var modulo = /*#__PURE__*/_curry2(function modulo(a, b) {
	  return a % b;
	});
	module.exports = modulo;

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Negates its argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Math
	 * @sig Number -> Number
	 * @param {Number} n
	 * @return {Number}
	 * @example
	 *
	 *      R.negate(42); //=> -42
	 */
	
	
	var negate = /*#__PURE__*/_curry1(function negate(n) {
	  return -n;
	});
	module.exports = negate;

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

	var _complement = /*#__PURE__*/__webpack_require__(245);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xany = /*#__PURE__*/__webpack_require__(251);
	
	var any = /*#__PURE__*/__webpack_require__(228);
	
	/**
	 * Returns `true` if no elements of the list match the predicate, `false`
	 * otherwise.
	 *
	 * Dispatches to the `any` method of the second argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> Boolean
	 * @param {Function} fn The predicate function.
	 * @param {Array} list The array to consider.
	 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
	 * @see R.all, R.any
	 * @example
	 *
	 *      var isEven = n => n % 2 === 0;
	 *      var isOdd = n => n % 2 === 1;
	 *
	 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
	 *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
	 */
	
	
	var none = /*#__PURE__*/_curry2( /*#__PURE__*/_complement( /*#__PURE__*/_dispatchable(['any'], _xany, any)));
	module.exports = none;

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	var nth = /*#__PURE__*/__webpack_require__(73);
	
	/**
	 * Returns a function which returns its nth argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Function
	 * @sig Number -> *... -> *
	 * @param {Number} n
	 * @return {Function}
	 * @example
	 *
	 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
	 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
	 * @symb R.nthArg(-1)(a, b, c) = c
	 * @symb R.nthArg(0)(a, b, c) = a
	 * @symb R.nthArg(1)(a, b, c) = b
	 */
	
	
	var nthArg = /*#__PURE__*/_curry1(function nthArg(n) {
	  var arity = n < 0 ? 1 : n + 1;
	  return curryN(arity, function () {
	    return nth(n, arguments);
	  });
	});
	module.exports = nthArg;

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * `o` is a curried composition function that returns a unary function.
	 * Like [`compose`](#compose), `o` performs right-to-left function composition.
	 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
	 * invoked with only one argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.24.0
	 * @category Function
	 * @sig (b -> c) -> (a -> b) -> a -> c
	 * @param {Function} f
	 * @param {Function} g
	 * @return {Function}
	 * @see R.compose, R.pipe
	 * @example
	 *
	 *      var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
	 *      var yellGreeting = R.o(R.toUpper, classyGreeting);
	 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
	 *
	 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
	 *
	 * @symb R.o(f, g, x) = f(g(x))
	 */
	
	
	var o = /*#__PURE__*/_curry3(function o(f, g, x) {
	  return f(g(x));
	});
	module.exports = o;

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _of = /*#__PURE__*/__webpack_require__(528);
	
	/**
	 * Returns a singleton array containing the value provided.
	 *
	 * Note this `of` is different from the ES6 `of`; See
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Function
	 * @sig a -> [a]
	 * @param {*} x any value
	 * @return {Array} An array wrapping `x`.
	 * @example
	 *
	 *      R.of(null); //=> [null]
	 *      R.of([42]); //=> [[42]]
	 */
	
	
	var of = /*#__PURE__*/_curry1(_of);
	module.exports = of;

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns a partial copy of an object omitting the keys specified.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig [String] -> {String: *} -> {String: *}
	 * @param {Array} names an array of String property names to omit from the new object
	 * @param {Object} obj The object to copy from
	 * @return {Object} A new object with properties from `names` not on it.
	 * @see R.pick
	 * @example
	 *
	 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
	 */
	
	
	var omit = /*#__PURE__*/_curry2(function omit(names, obj) {
	  var result = {};
	  var index = {};
	  var idx = 0;
	  var len = names.length;
	
	  while (idx < len) {
	    index[names[idx]] = 1;
	    idx += 1;
	  }
	
	  for (var prop in obj) {
	    if (!index.hasOwnProperty(prop)) {
	      result[prop] = obj[prop];
	    }
	  }
	  return result;
	});
	module.exports = omit;

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

	var _arity = /*#__PURE__*/__webpack_require__(27);
	
	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Accepts a function `fn` and returns a function that guards invocation of
	 * `fn` such that `fn` can only ever be called once, no matter how many times
	 * the returned function is invoked. The first value calculated is returned in
	 * subsequent invocations.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (a... -> b) -> (a... -> b)
	 * @param {Function} fn The function to wrap in a call-only-once wrapper.
	 * @return {Function} The wrapped function.
	 * @example
	 *
	 *      var addOneOnce = R.once(x => x + 1);
	 *      addOneOnce(10); //=> 11
	 *      addOneOnce(addOneOnce(50)); //=> 11
	 */
	
	
	var once = /*#__PURE__*/_curry1(function once(fn) {
	  var called = false;
	  var result;
	  return _arity(fn.length, function () {
	    if (called) {
	      return result;
	    }
	    called = true;
	    result = fn.apply(this, arguments);
	    return result;
	  });
	});
	module.exports = once;

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category List
	 * @sig a -> b -> (a,b)
	 * @param {*} fst
	 * @param {*} snd
	 * @return {Array}
	 * @see R.objOf, R.of
	 * @example
	 *
	 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
	 */
	
	
	var pair = /*#__PURE__*/_curry2(function pair(fst, snd) {
	  return [fst, snd];
	});
	module.exports = pair;

/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

	var _concat = /*#__PURE__*/__webpack_require__(23);
	
	var _createPartialApplicator = /*#__PURE__*/__webpack_require__(246);
	
	/**
	 * Takes a function `f` and a list of arguments, and returns a function `g`.
	 * When applied, `g` returns the result of applying `f` to the arguments
	 * provided initially followed by the arguments provided to `g`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Function
	 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
	 * @param {Function} f
	 * @param {Array} args
	 * @return {Function}
	 * @see R.partialRight
	 * @example
	 *
	 *      var multiply2 = (a, b) => a * b;
	 *      var double = R.partial(multiply2, [2]);
	 *      double(2); //=> 4
	 *
	 *      var greet = (salutation, title, firstName, lastName) =>
	 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
	 *
	 *      var sayHello = R.partial(greet, ['Hello']);
	 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
	 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
	 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
	 */
	
	
	var partial = /*#__PURE__*/_createPartialApplicator(_concat);
	module.exports = partial;

/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

	var _concat = /*#__PURE__*/__webpack_require__(23);
	
	var _createPartialApplicator = /*#__PURE__*/__webpack_require__(246);
	
	var flip = /*#__PURE__*/__webpack_require__(95);
	
	/**
	 * Takes a function `f` and a list of arguments, and returns a function `g`.
	 * When applied, `g` returns the result of applying `f` to the arguments
	 * provided to `g` followed by the arguments provided initially.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category Function
	 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
	 * @param {Function} f
	 * @param {Array} args
	 * @return {Function}
	 * @see R.partial
	 * @example
	 *
	 *      var greet = (salutation, title, firstName, lastName) =>
	 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
	 *
	 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
	 *
	 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
	 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
	 */
	
	
	var partialRight = /*#__PURE__*/_createPartialApplicator( /*#__PURE__*/flip(_concat));
	module.exports = partialRight;

/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

	var filter = /*#__PURE__*/__webpack_require__(155);
	
	var juxt = /*#__PURE__*/__webpack_require__(256);
	
	var reject = /*#__PURE__*/__webpack_require__(107);
	
	/**
	 * Takes a predicate and a list or other `Filterable` object and returns the
	 * pair of filterable objects of the same type of elements which do and do not
	 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
	 * that has a filter method such as `Array`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.4
	 * @category List
	 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
	 * @param {Function} pred A predicate to determine which side the element belongs to.
	 * @param {Array} filterable the list (or other filterable) to partition.
	 * @return {Array} An array, containing first the subset of elements that satisfy the
	 *         predicate, and second the subset of elements that do not satisfy.
	 * @see R.filter, R.reject
	 * @example
	 *
	 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
	 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
	 *
	 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
	 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
	 */
	
	
	var partition = /*#__PURE__*/juxt([filter, reject]);
	module.exports = partition;

/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var equals = /*#__PURE__*/__webpack_require__(21);
	
	var path = /*#__PURE__*/__webpack_require__(58);
	
	/**
	 * Determines whether a nested path on an object has a specific value, in
	 * [`R.equals`](#equals) terms. Most likely used to filter a list.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category Relation
	 * @typedefn Idx = String | Int
	 * @sig [Idx] -> a -> {a} -> Boolean
	 * @param {Array} path The path of the nested property to use
	 * @param {*} val The value to compare the nested property with
	 * @param {Object} obj The object to check the nested property in
	 * @return {Boolean} `true` if the value equals the nested object property,
	 *         `false` otherwise.
	 * @example
	 *
	 *      var user1 = { address: { zipCode: 90210 } };
	 *      var user2 = { address: { zipCode: 55555 } };
	 *      var user3 = { name: 'Bob' };
	 *      var users = [ user1, user2, user3 ];
	 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
	 *      R.filter(isFamous, users); //=> [ user1 ]
	 */
	
	
	var pathEq = /*#__PURE__*/_curry3(function pathEq(_path, val, obj) {
	  return equals(path(_path, obj), val);
	});
	module.exports = pathEq;

/***/ }),
/* 595 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var defaultTo = /*#__PURE__*/__webpack_require__(235);
	
	var path = /*#__PURE__*/__webpack_require__(58);
	
	/**
	 * If the given, non-null object has a value at the given path, returns the
	 * value at that path. Otherwise returns the provided default value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Object
	 * @typedefn Idx = String | Int
	 * @sig a -> [Idx] -> {a} -> a
	 * @param {*} d The default value.
	 * @param {Array} p The path to use.
	 * @param {Object} obj The object to retrieve the nested property from.
	 * @return {*} The data at `path` of the supplied object or the default value.
	 * @example
	 *
	 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
	 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
	 */
	
	
	var pathOr = /*#__PURE__*/_curry3(function pathOr(d, p, obj) {
	  return defaultTo(d, path(p, obj));
	});
	module.exports = pathOr;

/***/ }),
/* 596 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var path = /*#__PURE__*/__webpack_require__(58);
	
	/**
	 * Returns `true` if the specified object property at given path satisfies the
	 * given predicate; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Logic
	 * @typedefn Idx = String | Int
	 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
	 * @param {Function} pred
	 * @param {Array} propPath
	 * @param {*} obj
	 * @return {Boolean}
	 * @see R.propSatisfies, R.path
	 * @example
	 *
	 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
	 */
	
	
	var pathSatisfies = /*#__PURE__*/_curry3(function pathSatisfies(pred, propPath, obj) {
	  return propPath.length > 0 && pred(path(propPath, obj));
	});
	module.exports = pathSatisfies;

/***/ }),
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns a partial copy of an object containing only the keys specified. If
	 * the key does not exist, the property is ignored.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig [k] -> {k: v} -> {k: v}
	 * @param {Array} names an array of String property names to copy onto a new object
	 * @param {Object} obj The object to copy from
	 * @return {Object} A new object with only properties from `names` on it.
	 * @see R.omit, R.props
	 * @example
	 *
	 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
	 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
	 */
	
	
	var pick = /*#__PURE__*/_curry2(function pick(names, obj) {
	  var result = {};
	  var idx = 0;
	  while (idx < names.length) {
	    if (names[idx] in obj) {
	      result[names[idx]] = obj[names[idx]];
	    }
	    idx += 1;
	  }
	  return result;
	});
	module.exports = pick;

/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns a partial copy of an object containing only the keys that satisfy
	 * the supplied predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Object
	 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
	 * @param {Function} pred A predicate to determine whether or not a key
	 *        should be included on the output object.
	 * @param {Object} obj The object to copy from
	 * @return {Object} A new object with only properties that satisfy `pred`
	 *         on it.
	 * @see R.pick, R.filter
	 * @example
	 *
	 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
	 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
	 */
	
	
	var pickBy = /*#__PURE__*/_curry2(function pickBy(test, obj) {
	  var result = {};
	  for (var prop in obj) {
	    if (test(obj[prop], prop, obj)) {
	      result[prop] = obj[prop];
	    }
	  }
	  return result;
	});
	module.exports = pickBy;

/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

	var composeK = /*#__PURE__*/__webpack_require__(232);
	
	var reverse = /*#__PURE__*/__webpack_require__(108);
	
	/**
	 * Returns the left-to-right Kleisli composition of the provided functions,
	 * each of which must return a value of a type supported by [`chain`](#chain).
	 *
	 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(f, R.chain(g), R.chain(h))`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Function
	 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
	 * @param {...Function}
	 * @return {Function}
	 * @see R.composeK
	 * @example
	 *
	 *      //  parseJson :: String -> Maybe *
	 *      //  get :: String -> Object -> Maybe *
	 *
	 *      //  getStateCode :: Maybe String -> Maybe String
	 *      var getStateCode = R.pipeK(
	 *        parseJson,
	 *        get('user'),
	 *        get('address'),
	 *        get('state'),
	 *        R.compose(Maybe.of, R.toUpper)
	 *      );
	 *
	 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
	 *      //=> Just('NY')
	 *      getStateCode('[Invalid JSON]');
	 *      //=> Nothing()
	 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
	 */
	
	
	function pipeK() {
	  if (arguments.length === 0) {
	    throw new Error('pipeK requires at least one argument');
	  }
	  return composeK.apply(this, reverse(arguments));
	}
	module.exports = pipeK;

/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {

	var multiply = /*#__PURE__*/__webpack_require__(262);
	
	var reduce = /*#__PURE__*/__webpack_require__(29);
	
	/**
	 * Multiplies together all the elements of a list.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig [Number] -> Number
	 * @param {Array} list An array of numbers
	 * @return {Number} The product of all the numbers in the list.
	 * @see R.reduce
	 * @example
	 *
	 *      R.product([2,4,6,8,100,1]); //=> 38400
	 */
	
	
	var product = /*#__PURE__*/reduce(multiply, 1);
	module.exports = product;

/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

	var _map = /*#__PURE__*/__webpack_require__(101);
	
	var identity = /*#__PURE__*/__webpack_require__(156);
	
	var pickAll = /*#__PURE__*/__webpack_require__(267);
	
	var useWith = /*#__PURE__*/__webpack_require__(279);
	
	/**
	 * Reasonable analog to SQL `select` statement.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @category Relation
	 * @sig [k] -> [{k: v}] -> [{k: v}]
	 * @param {Array} props The property names to project
	 * @param {Array} objs The objects to query
	 * @return {Array} An array of objects with just the `props` properties.
	 * @example
	 *
	 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
	 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
	 *      var kids = [abby, fred];
	 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
	 */
	
	
	var project = /*#__PURE__*/useWith(_map, [pickAll, identity]); // passing `identity` gives correct arity
	module.exports = project;

/***/ }),
/* 602 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var equals = /*#__PURE__*/__webpack_require__(21);
	
	/**
	 * Returns `true` if the specified object property is equal, in
	 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
	 * You can test multiple properties with [`R.where`](#where).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig String -> a -> Object -> Boolean
	 * @param {String} name
	 * @param {*} val
	 * @param {*} obj
	 * @return {Boolean}
	 * @see R.whereEq, R.propSatisfies, R.equals
	 * @example
	 *
	 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
	 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
	 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
	 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
	 *      var kids = [abby, fred, rusty, alois];
	 *      var hasBrownHair = R.propEq('hair', 'brown');
	 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
	 */
	
	
	var propEq = /*#__PURE__*/_curry3(function propEq(name, val, obj) {
	  return equals(val, obj[name]);
	});
	module.exports = propEq;

/***/ }),
/* 603 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var is = /*#__PURE__*/__webpack_require__(254);
	
	/**
	 * Returns `true` if the specified object property is of the given type;
	 * `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Type
	 * @sig Type -> String -> Object -> Boolean
	 * @param {Function} type
	 * @param {String} name
	 * @param {*} obj
	 * @return {Boolean}
	 * @see R.is, R.propSatisfies
	 * @example
	 *
	 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
	 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
	 *      R.propIs(Number, 'x', {});            //=> false
	 */
	
	
	var propIs = /*#__PURE__*/_curry3(function propIs(type, name, obj) {
	  return is(type, obj[name]);
	});
	module.exports = propIs;

/***/ }),
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var _has = /*#__PURE__*/__webpack_require__(15);
	
	/**
	 * If the given, non-null object has an own property with the specified name,
	 * returns the value of that property. Otherwise returns the provided default
	 * value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category Object
	 * @sig a -> String -> Object -> a
	 * @param {*} val The default value.
	 * @param {String} p The name of the property to return.
	 * @param {Object} obj The object to query.
	 * @return {*} The value of given property of the supplied object or the default value.
	 * @example
	 *
	 *      var alice = {
	 *        name: 'ALICE',
	 *        age: 101
	 *      };
	 *      var favorite = R.prop('favoriteLibrary');
	 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
	 *
	 *      favorite(alice);  //=> undefined
	 *      favoriteWithDefault(alice);  //=> 'Ramda'
	 */
	
	
	var propOr = /*#__PURE__*/_curry3(function propOr(val, p, obj) {
	  return obj != null && _has(p, obj) ? obj[p] : val;
	});
	module.exports = propOr;

/***/ }),
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Returns `true` if the specified object property satisfies the given
	 * predicate; `false` otherwise. You can test multiple properties with
	 * [`R.where`](#where).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Logic
	 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
	 * @param {Function} pred
	 * @param {String} name
	 * @param {*} obj
	 * @return {Boolean}
	 * @see R.where, R.propEq, R.propIs
	 * @example
	 *
	 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
	 */
	
	
	var propSatisfies = /*#__PURE__*/_curry3(function propSatisfies(pred, name, obj) {
	  return pred(obj[name]);
	});
	module.exports = propSatisfies;

/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
	 * order.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig [k] -> {k: v} -> [v]
	 * @param {Array} ps The property names to fetch
	 * @param {Object} obj The object to query
	 * @return {Array} The corresponding values or partially applied function.
	 * @example
	 *
	 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
	 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
	 *
	 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
	 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
	 */
	
	
	var props = /*#__PURE__*/_curry2(function props(ps, obj) {
	  var len = ps.length;
	  var out = [];
	  var idx = 0;
	
	  while (idx < len) {
	    out[idx] = obj[ps[idx]];
	    idx += 1;
	  }
	
	  return out;
	});
	module.exports = props;

/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _isNumber = /*#__PURE__*/__webpack_require__(249);
	
	/**
	 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Number -> Number -> [Number]
	 * @param {Number} from The first number in the list.
	 * @param {Number} to One more than the last number in the list.
	 * @return {Array} The list of numbers in tthe set `[a, b)`.
	 * @example
	 *
	 *      R.range(1, 5);    //=> [1, 2, 3, 4]
	 *      R.range(50, 53);  //=> [50, 51, 52]
	 */
	
	
	var range = /*#__PURE__*/_curry2(function range(from, to) {
	  if (!(_isNumber(from) && _isNumber(to))) {
	    throw new TypeError('Both arguments to range must be numbers');
	  }
	  var result = [];
	  var n = from;
	  while (n < to) {
	    result.push(n);
	    n += 1;
	  }
	  return result;
	});
	module.exports = range;

/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

	var _curryN = /*#__PURE__*/__webpack_require__(97);
	
	var _reduce = /*#__PURE__*/__webpack_require__(22);
	
	var _reduced = /*#__PURE__*/__webpack_require__(38);
	
	/**
	 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
	 * through the list, successively calling the iterator function. `reduceWhile`
	 * also takes a predicate that is evaluated before each step. If the predicate
	 * returns `false`, it "short-circuits" the iteration and returns the current
	 * value of the accumulator.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.22.0
	 * @category List
	 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
	 * @param {Function} pred The predicate. It is passed the accumulator and the
	 *        current element.
	 * @param {Function} fn The iterator function. Receives two values, the
	 *        accumulator and the current element.
	 * @param {*} a The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.reduce, R.reduced
	 * @example
	 *
	 *      var isOdd = (acc, x) => x % 2 === 1;
	 *      var xs = [1, 3, 5, 60, 777, 800];
	 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
	 *
	 *      var ys = [2, 4, 6]
	 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
	 */
	
	
	var reduceWhile = /*#__PURE__*/_curryN(4, [], function _reduceWhile(pred, fn, a, list) {
	  return _reduce(function (acc, x) {
	    return pred(acc, x) ? fn(acc, x) : _reduced(acc);
	  }, a, list);
	});
	module.exports = reduceWhile;

/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _reduced = /*#__PURE__*/__webpack_require__(38);
	
	/**
	 * Returns a value wrapped to indicate that it is the final value of the reduce
	 * and transduce functions. The returned value should be considered a black
	 * box: the internal structure is not guaranteed to be stable.
	 *
	 * Note: this optimization is unavailable to functions not explicitly listed
	 * above. For instance, it is not currently supported by
	 * [`reduceRight`](#reduceRight).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category List
	 * @sig a -> *
	 * @param {*} x The final value of the reduce.
	 * @return {*} The wrapped value.
	 * @see R.reduce, R.transduce
	 * @example
	 *
	 *     R.reduce(
	 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
	 *       [],
	 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
	 */
	
	
	var reduced = /*#__PURE__*/_curry1(_reduced);
	module.exports = reduced;

/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var always = /*#__PURE__*/__webpack_require__(55);
	
	var times = /*#__PURE__*/__webpack_require__(276);
	
	/**
	 * Returns a fixed list of size `n` containing a specified identical value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.1
	 * @category List
	 * @sig a -> n -> [a]
	 * @param {*} value The value to repeat.
	 * @param {Number} n The desired size of the output list.
	 * @return {Array} A new array containing `n` `value`s.
	 * @see R.times
	 * @example
	 *
	 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
	 *
	 *      var obj = {};
	 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
	 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
	 * @symb R.repeat(a, 0) = []
	 * @symb R.repeat(a, 1) = [a]
	 * @symb R.repeat(a, 2) = [a, a]
	 */
	
	
	var repeat = /*#__PURE__*/_curry2(function repeat(value, n) {
	  return times(always(value), n);
	});
	module.exports = repeat;

/***/ }),
/* 611 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Replace a substring or regex match in a string with a replacement.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.7.0
	 * @category String
	 * @sig RegExp|String -> String -> String -> String
	 * @param {RegExp|String} pattern A regular expression or a substring to match.
	 * @param {String} replacement The string to replace the matches with.
	 * @param {String} str The String to do the search and replacement in.
	 * @return {String} The result.
	 * @example
	 *
	 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
	 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
	 *
	 *      // Use the "g" (global) flag to replace all occurrences:
	 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
	 */
	
	
	var replace = /*#__PURE__*/_curry3(function replace(regex, replacement, str) {
	  return str.replace(regex, replacement);
	});
	module.exports = replace;

/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
	 * reduced values from the left
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category List
	 * @sig ((a, b) -> a) -> a -> [b] -> [a]
	 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	 *        current element from the array
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {Array} A list of all intermediately reduced values.
	 * @see R.reduce
	 * @example
	 *
	 *      var numbers = [1, 2, 3, 4];
	 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
	 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
	 */
	
	
	var scan = /*#__PURE__*/_curry3(function scan(fn, acc, list) {
	  var idx = 0;
	  var len = list.length;
	  var result = [acc];
	  while (idx < len) {
	    acc = fn(acc, list[idx]);
	    result[idx + 1] = acc;
	    idx += 1;
	  }
	  return result;
	});
	module.exports = scan;

/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var always = /*#__PURE__*/__webpack_require__(55);
	
	var over = /*#__PURE__*/__webpack_require__(266);
	
	/**
	 * Returns the result of "setting" the portion of the given data structure
	 * focused by the given lens to the given value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig Lens s a -> a -> s -> s
	 * @param {Lens} lens
	 * @param {*} v
	 * @param {*} x
	 * @return {*}
	 * @see R.prop, R.lensIndex, R.lensProp
	 * @example
	 *
	 *      var xLens = R.lensProp('x');
	 *
	 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
	 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
	 */
	
	
	var set = /*#__PURE__*/_curry3(function set(lens, v, x) {
	  return over(lens, always(v), x);
	});
	module.exports = set;

/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Returns a copy of the list, sorted according to the comparator function,
	 * which should accept two values at a time and return a negative number if the
	 * first value is smaller, a positive number if it's larger, and zero if they
	 * are equal. Please note that this is a **copy** of the list. It does not
	 * modify the original.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig ((a, a) -> Number) -> [a] -> [a]
	 * @param {Function} comparator A sorting function :: a -> b -> Int
	 * @param {Array} list The list to sort
	 * @return {Array} a new array with its elements sorted by the comparator function.
	 * @example
	 *
	 *      var diff = function(a, b) { return a - b; };
	 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
	 */
	
	
	var sort = /*#__PURE__*/_curry2(function sort(comparator, list) {
	  return Array.prototype.slice.call(list, 0).sort(comparator);
	});
	module.exports = sort;

/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Sorts the list according to the supplied function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig Ord b => (a -> b) -> [a] -> [a]
	 * @param {Function} fn
	 * @param {Array} list The list to sort.
	 * @return {Array} A new list sorted by the keys generated by `fn`.
	 * @example
	 *
	 *      var sortByFirstItem = R.sortBy(R.prop(0));
	 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
	 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
	 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
	 *      var alice = {
	 *        name: 'ALICE',
	 *        age: 101
	 *      };
	 *      var bob = {
	 *        name: 'Bob',
	 *        age: -10
	 *      };
	 *      var clara = {
	 *        name: 'clara',
	 *        age: 314.159
	 *      };
	 *      var people = [clara, bob, alice];
	 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
	 */
	
	
	var sortBy = /*#__PURE__*/_curry2(function sortBy(fn, list) {
	  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
	    var aa = fn(a);
	    var bb = fn(b);
	    return aa < bb ? -1 : aa > bb ? 1 : 0;
	  });
	});
	module.exports = sortBy;

/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Sorts a list according to a list of comparators.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.23.0
	 * @category Relation
	 * @sig [(a, a) -> Number] -> [a] -> [a]
	 * @param {Array} functions A list of comparator functions.
	 * @param {Array} list The list to sort.
	 * @return {Array} A new list sorted according to the comarator functions.
	 * @example
	 *
	 *      var alice = {
	 *        name: 'alice',
	 *        age: 40
	 *      };
	 *      var bob = {
	 *        name: 'bob',
	 *        age: 30
	 *      };
	 *      var clara = {
	 *        name: 'clara',
	 *        age: 40
	 *      };
	 *      var people = [clara, bob, alice];
	 *      var ageNameSort = R.sortWith([
	 *        R.descend(R.prop('age')),
	 *        R.ascend(R.prop('name'))
	 *      ]);
	 *      ageNameSort(people); //=> [alice, clara, bob]
	 */
	
	
	var sortWith = /*#__PURE__*/_curry2(function sortWith(fns, list) {
	  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
	    var result = 0;
	    var i = 0;
	    while (result === 0 && i < fns.length) {
	      result = fns[i](a, b);
	      i += 1;
	    }
	    return result;
	  });
	});
	module.exports = sortWith;

/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

	var invoker = /*#__PURE__*/__webpack_require__(72);
	
	/**
	 * Splits a string into an array of strings based on the given
	 * separator.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category String
	 * @sig (String | RegExp) -> String -> [String]
	 * @param {String|RegExp} sep The pattern.
	 * @param {String} str The string to separate into an array.
	 * @return {Array} The array of strings from `str` separated by `str`.
	 * @see R.join
	 * @example
	 *
	 *      var pathComponents = R.split('/');
	 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
	 *
	 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
	 */
	
	
	var split = /*#__PURE__*/invoker(1, 'split');
	module.exports = split;

/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var length = /*#__PURE__*/__webpack_require__(258);
	
	var slice = /*#__PURE__*/__webpack_require__(24);
	
	/**
	 * Splits a given list or string at a given index.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig Number -> [a] -> [[a], [a]]
	 * @sig Number -> String -> [String, String]
	 * @param {Number} index The index where the array/string is split.
	 * @param {Array|String} array The array/string to be split.
	 * @return {Array}
	 * @example
	 *
	 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
	 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
	 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
	 */
	
	
	var splitAt = /*#__PURE__*/_curry2(function splitAt(index, array) {
	  return [slice(0, index, array), slice(index, length(array), array)];
	});
	module.exports = splitAt;

/***/ }),
/* 619 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var slice = /*#__PURE__*/__webpack_require__(24);
	
	/**
	 * Splits a collection into slices of the specified length.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig Number -> [a] -> [[a]]
	 * @sig Number -> String -> [String]
	 * @param {Number} n
	 * @param {Array} list
	 * @return {Array}
	 * @example
	 *
	 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
	 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
	 */
	
	
	var splitEvery = /*#__PURE__*/_curry2(function splitEvery(n, list) {
	  if (n <= 0) {
	    throw new Error('First argument to splitEvery must be a positive integer');
	  }
	  var result = [];
	  var idx = 0;
	  while (idx < list.length) {
	    result.push(slice(idx, idx += n, list));
	  }
	  return result;
	});
	module.exports = splitEvery;

/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Takes a list and a predicate and returns a pair of lists with the following properties:
	 *
	 *  - the result of concatenating the two output lists is equivalent to the input list;
	 *  - none of the elements of the first output list satisfies the predicate; and
	 *  - if the second output list is non-empty, its first element satisfies the predicate.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
	 * @param {Function} pred The predicate that determines where the array is split.
	 * @param {Array} list The array to be split.
	 * @return {Array}
	 * @example
	 *
	 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
	 */
	
	
	var splitWhen = /*#__PURE__*/_curry2(function splitWhen(pred, list) {
	  var idx = 0;
	  var len = list.length;
	  var prefix = [];
	
	  while (idx < len && !pred(list[idx])) {
	    prefix.push(list[idx]);
	    idx += 1;
	  }
	
	  return [prefix, Array.prototype.slice.call(list, idx)];
	});
	module.exports = splitWhen;

/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var equals = /*#__PURE__*/__webpack_require__(21);
	
	var take = /*#__PURE__*/__webpack_require__(166);
	
	/**
	 * Checks if a list starts with the provided values
	 *
	 * @func
	 * @memberOf R
	 * @since v0.24.0
	 * @category List
	 * @sig [a] -> Boolean
	 * @sig String -> Boolean
	 * @param {*} prefix
	 * @param {*} list
	 * @return {Boolean}
	 * @example
	 *
	 *      R.startsWith('a', 'abc')                //=> true
	 *      R.startsWith('b', 'abc')                //=> false
	 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
	 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
	 */
	
	
	var startsWith = /*#__PURE__*/_curry2(function (prefix, list) {
	  return equals(take(prefix.length, list), prefix);
	});
	module.exports = startsWith;

/***/ }),
/* 622 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Subtracts its second argument from its first argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a The first value.
	 * @param {Number} b The second value.
	 * @return {Number} The result of `a - b`.
	 * @see R.add
	 * @example
	 *
	 *      R.subtract(10, 8); //=> 2
	 *
	 *      var minus5 = R.subtract(R.__, 5);
	 *      minus5(17); //=> 12
	 *
	 *      var complementaryAngle = R.subtract(90);
	 *      complementaryAngle(30); //=> 60
	 *      complementaryAngle(72); //=> 18
	 */
	
	
	var subtract = /*#__PURE__*/_curry2(function subtract(a, b) {
	  return Number(a) - Number(b);
	});
	module.exports = subtract;

/***/ }),
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var concat = /*#__PURE__*/__webpack_require__(153);
	
	var difference = /*#__PURE__*/__webpack_require__(236);
	
	/**
	 * Finds the set (i.e. no duplicates) of all elements contained in the first or
	 * second list, but not both.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Relation
	 * @sig [*] -> [*] -> [*]
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The elements in `list1` or `list2`, but not both.
	 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
	 * @example
	 *
	 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
	 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
	 */
	
	
	var symmetricDifference = /*#__PURE__*/_curry2(function symmetricDifference(list1, list2) {
	  return concat(difference(list1, list2), difference(list2, list1));
	});
	module.exports = symmetricDifference;

/***/ }),
/* 624 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var concat = /*#__PURE__*/__webpack_require__(153);
	
	var differenceWith = /*#__PURE__*/__webpack_require__(237);
	
	/**
	 * Finds the set (i.e. no duplicates) of all elements contained in the first or
	 * second list, but not both. Duplication is determined according to the value
	 * returned by applying the supplied predicate to two list elements.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category Relation
	 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
	 * @param {Function} pred A predicate used to test whether two items are equal.
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The elements in `list1` or `list2`, but not both.
	 * @see R.symmetricDifference, R.difference, R.differenceWith
	 * @example
	 *
	 *      var eqA = R.eqBy(R.prop('a'));
	 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
	 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
	 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
	 */
	
	
	var symmetricDifferenceWith = /*#__PURE__*/_curry3(function symmetricDifferenceWith(pred, list1, list2) {
	  return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
	});
	module.exports = symmetricDifferenceWith;

/***/ }),
/* 625 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var slice = /*#__PURE__*/__webpack_require__(24);
	
	/**
	 * Returns a new list containing the last `n` elements of a given list, passing
	 * each value to the supplied predicate function, and terminating when the
	 * predicate function returns `false`. Excludes the element that caused the
	 * predicate function to fail. The predicate function is passed one argument:
	 * *(value)*.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> [a]
	 * @sig (a -> Boolean) -> String -> String
	 * @param {Function} fn The function called per iteration.
	 * @param {Array} xs The collection to iterate over.
	 * @return {Array} A new array.
	 * @see R.dropLastWhile, R.addIndex
	 * @example
	 *
	 *      var isNotOne = x => x !== 1;
	 *
	 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
	 *
	 *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
	 */
	
	
	var takeLastWhile = /*#__PURE__*/_curry2(function takeLastWhile(fn, xs) {
	  var idx = xs.length - 1;
	  while (idx >= 0 && fn(xs[idx])) {
	    idx -= 1;
	  }
	  return slice(idx + 1, Infinity, xs);
	});
	module.exports = takeLastWhile;

/***/ }),
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xtakeWhile = /*#__PURE__*/__webpack_require__(550);
	
	var slice = /*#__PURE__*/__webpack_require__(24);
	
	/**
	 * Returns a new list containing the first `n` elements of a given list,
	 * passing each value to the supplied predicate function, and terminating when
	 * the predicate function returns `false`. Excludes the element that caused the
	 * predicate function to fail. The predicate function is passed one argument:
	 * *(value)*.
	 *
	 * Dispatches to the `takeWhile` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> [a]
	 * @sig (a -> Boolean) -> String -> String
	 * @param {Function} fn The function called per iteration.
	 * @param {Array} xs The collection to iterate over.
	 * @return {Array} A new array.
	 * @see R.dropWhile, R.transduce, R.addIndex
	 * @example
	 *
	 *      var isNotFour = x => x !== 4;
	 *
	 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
	 *
	 *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
	 */
	
	
	var takeWhile = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, xs) {
	  var idx = 0;
	  var len = xs.length;
	  while (idx < len && fn(xs[idx])) {
	    idx += 1;
	  }
	  return slice(0, idx, xs);
	}));
	module.exports = takeWhile;

/***/ }),
/* 627 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _dispatchable = /*#__PURE__*/__webpack_require__(9);
	
	var _xtap = /*#__PURE__*/__webpack_require__(551);
	
	/**
	 * Runs the given function with the supplied object, then returns the object.
	 *
	 * Acts as a transducer if a transformer is given as second parameter.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (a -> *) -> a -> a
	 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
	 * @param {*} x
	 * @return {*} `x`.
	 * @example
	 *
	 *      var sayX = x => console.log('x is ' + x);
	 *      R.tap(sayX, 100); //=> 100
	 *      // logs 'x is 100'
	 * @symb R.tap(f, a) = a
	 */
	
	
	var tap = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xtap, function tap(fn, x) {
	  fn(x);
	  return x;
	}));
	module.exports = tap;

/***/ }),
/* 628 */
/***/ (function(module, exports, __webpack_require__) {

	var _cloneRegExp = /*#__PURE__*/__webpack_require__(244);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var _isRegExp = /*#__PURE__*/__webpack_require__(526);
	
	var toString = /*#__PURE__*/__webpack_require__(75);
	
	/**
	 * Determines whether a given string matches a given regular expression.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category String
	 * @sig RegExp -> String -> Boolean
	 * @param {RegExp} pattern
	 * @param {String} str
	 * @return {Boolean}
	 * @see R.match
	 * @example
	 *
	 *      R.test(/^x/, 'xyz'); //=> true
	 *      R.test(/^y/, 'xyz'); //=> false
	 */
	
	
	var test = /*#__PURE__*/_curry2(function test(pattern, str) {
	  if (!_isRegExp(pattern)) {
	    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString(pattern));
	  }
	  return _cloneRegExp(pattern).test(str);
	});
	module.exports = test;

/***/ }),
/* 629 */
/***/ (function(module, exports, __webpack_require__) {

	var invoker = /*#__PURE__*/__webpack_require__(72);
	
	/**
	 * The lower case version of a string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category String
	 * @sig String -> String
	 * @param {String} str The string to lower case.
	 * @return {String} The lower case version of `str`.
	 * @see R.toUpper
	 * @example
	 *
	 *      R.toLower('XYZ'); //=> 'xyz'
	 */
	
	
	var toLower = /*#__PURE__*/invoker(0, 'toLowerCase');
	module.exports = toLower;

/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var _has = /*#__PURE__*/__webpack_require__(15);
	
	/**
	 * Converts an object into an array of key, value arrays. Only the object's
	 * own properties are used.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.4.0
	 * @category Object
	 * @sig {String: *} -> [[String,*]]
	 * @param {Object} obj The object to extract from
	 * @return {Array} An array of key, value arrays from the object's own properties.
	 * @see R.fromPairs
	 * @example
	 *
	 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
	 */
	
	
	var toPairs = /*#__PURE__*/_curry1(function toPairs(obj) {
	  var pairs = [];
	  for (var prop in obj) {
	    if (_has(prop, obj)) {
	      pairs[pairs.length] = [prop, obj[prop]];
	    }
	  }
	  return pairs;
	});
	module.exports = toPairs;

/***/ }),
/* 631 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Converts an object into an array of key, value arrays. The object's own
	 * properties and prototype properties are used. Note that the order of the
	 * output array is not guaranteed to be consistent across different JS
	 * platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.4.0
	 * @category Object
	 * @sig {String: *} -> [[String,*]]
	 * @param {Object} obj The object to extract from
	 * @return {Array} An array of key, value arrays from the object's own
	 *         and prototype properties.
	 * @example
	 *
	 *      var F = function() { this.x = 'X'; };
	 *      F.prototype.y = 'Y';
	 *      var f = new F();
	 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
	 */
	
	
	var toPairsIn = /*#__PURE__*/_curry1(function toPairsIn(obj) {
	  var pairs = [];
	  for (var prop in obj) {
	    pairs[pairs.length] = [prop, obj[prop]];
	  }
	  return pairs;
	});
	module.exports = toPairsIn;

/***/ }),
/* 632 */
/***/ (function(module, exports, __webpack_require__) {

	var invoker = /*#__PURE__*/__webpack_require__(72);
	
	/**
	 * The upper case version of a string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category String
	 * @sig String -> String
	 * @param {String} str The string to upper case.
	 * @return {String} The upper case version of `str`.
	 * @see R.toLower
	 * @example
	 *
	 *      R.toUpper('abc'); //=> 'ABC'
	 */
	
	
	var toUpper = /*#__PURE__*/invoker(0, 'toUpperCase');
	module.exports = toUpper;

/***/ }),
/* 633 */
/***/ (function(module, exports, __webpack_require__) {

	var _reduce = /*#__PURE__*/__webpack_require__(22);
	
	var _xwrap = /*#__PURE__*/__webpack_require__(253);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	/**
	 * Initializes a transducer using supplied iterator function. Returns a single
	 * item by iterating through the list, successively calling the transformed
	 * iterator function and passing it an accumulator value and the current value
	 * from the array, and then passing the result to the next call.
	 *
	 * The iterator function receives two values: *(acc, value)*. It will be
	 * wrapped as a transformer to initialize the transducer. A transformer can be
	 * passed directly in place of an iterator function. In both cases, iteration
	 * may be stopped early with the [`R.reduced`](#reduced) function.
	 *
	 * A transducer is a function that accepts a transformer and returns a
	 * transformer and can be composed directly.
	 *
	 * A transformer is an an object that provides a 2-arity reducing iterator
	 * function, step, 0-arity initial value function, init, and 1-arity result
	 * extraction function, result. The step function is used as the iterator
	 * function in reduce. The result function is used to convert the final
	 * accumulator into the return type and in most cases is
	 * [`R.identity`](#identity). The init function can be used to provide an
	 * initial accumulator, but is ignored by transduce.
	 *
	 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.12.0
	 * @category List
	 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
	 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
	 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	 *        current element from the array. Wrapped as transformer, if necessary, and used to
	 *        initialize the transducer
	 * @param {*} acc The initial accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.reduce, R.reduced, R.into
	 * @example
	 *
	 *      var numbers = [1, 2, 3, 4];
	 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
	 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
	 *
	 *      var isOdd = (x) => x % 2 === 1;
	 *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
	 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
	 */
	
	
	var transduce = /*#__PURE__*/curryN(4, function transduce(xf, fn, acc, list) {
	  return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
	});
	module.exports = transduce;

/***/ }),
/* 634 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Transposes the rows and columns of a 2D list.
	 * When passed a list of `n` lists of length `x`,
	 * returns a list of `x` lists of length `n`.
	 *
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig [[a]] -> [[a]]
	 * @param {Array} list A 2D list
	 * @return {Array} A 2D list
	 * @example
	 *
	 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
	 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
	 *
	 *      // If some of the rows are shorter than the following rows, their elements are skipped:
	 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
	 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
	 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
	 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
	 */
	
	
	var transpose = /*#__PURE__*/_curry1(function transpose(outerlist) {
	  var i = 0;
	  var result = [];
	  while (i < outerlist.length) {
	    var innerlist = outerlist[i];
	    var j = 0;
	    while (j < innerlist.length) {
	      if (typeof result[j] === 'undefined') {
	        result[j] = [];
	      }
	      result[j].push(innerlist[j]);
	      j += 1;
	    }
	    i += 1;
	  }
	  return result;
	});
	module.exports = transpose;

/***/ }),
/* 635 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var map = /*#__PURE__*/__webpack_require__(17);
	
	var sequence = /*#__PURE__*/__webpack_require__(273);
	
	/**
	 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
	 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
	 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
	 * into an Applicative of Traversable.
	 *
	 * Dispatches to the `traverse` method of the third argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
	 * @param {Function} of
	 * @param {Function} f
	 * @param {*} traversable
	 * @return {*}
	 * @see R.sequence
	 * @example
	 *
	 *      // Returns `Nothing` if the given divisor is `0`
	 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
	 *
	 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
	 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
	 */
	
	
	var traverse = /*#__PURE__*/_curry3(function traverse(of, f, traversable) {
	  return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](f, of) : sequence(of, map(f, traversable));
	});
	module.exports = traverse;

/***/ }),
/* 636 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
	var zeroWidth = '\u200b';
	var hasProtoTrim = typeof String.prototype.trim === 'function';
	/**
	 * Removes (strips) whitespace from both ends of the string.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category String
	 * @sig String -> String
	 * @param {String} str The string to trim.
	 * @return {String} Trimmed version of `str`.
	 * @example
	 *
	 *      R.trim('   xyz  '); //=> 'xyz'
	 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
	 */
	var _trim = !hasProtoTrim || /*#__PURE__*/ws.trim() || ! /*#__PURE__*/zeroWidth.trim() ? function trim(str) {
	  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
	  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
	  return str.replace(beginRx, '').replace(endRx, '');
	} : function trim(str) {
	  return str.trim();
	};
	var trim = /*#__PURE__*/_curry1(_trim);
	module.exports = trim;

/***/ }),
/* 637 */
/***/ (function(module, exports, __webpack_require__) {

	var _arity = /*#__PURE__*/__webpack_require__(27);
	
	var _concat = /*#__PURE__*/__webpack_require__(23);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
	 * function evaluates the `tryer`; if it does not throw, it simply returns the
	 * result. If the `tryer` *does* throw, the returned function evaluates the
	 * `catcher` function and returns its result. Note that for effective
	 * composition with this function, both the `tryer` and `catcher` functions
	 * must return the same type of results.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.20.0
	 * @category Function
	 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
	 * @param {Function} tryer The function that may throw.
	 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
	 * @return {Function} A new function that will catch exceptions and send then to the catcher.
	 * @example
	 *
	 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
	 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
	 */
	
	
	var tryCatch = /*#__PURE__*/_curry2(function _tryCatch(tryer, catcher) {
	  return _arity(tryer.length, function () {
	    try {
	      return tryer.apply(this, arguments);
	    } catch (e) {
	      return catcher.apply(this, _concat([e], arguments));
	    }
	  });
	});
	module.exports = tryCatch;

/***/ }),
/* 638 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Takes a function `fn`, which takes a single array argument, and returns a
	 * function which:
	 *
	 *   - takes any number of positional arguments;
	 *   - passes these arguments to `fn` as an array; and
	 *   - returns the result.
	 *
	 * In other words, `R.unapply` derives a variadic function from a function which
	 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Function
	 * @sig ([*...] -> a) -> (*... -> a)
	 * @param {Function} fn
	 * @return {Function}
	 * @see R.apply
	 * @example
	 *
	 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
	 * @symb R.unapply(f)(a, b) = f([a, b])
	 */
	
	
	var unapply = /*#__PURE__*/_curry1(function unapply(fn) {
	  return function () {
	    return fn(Array.prototype.slice.call(arguments, 0));
	  };
	});
	module.exports = unapply;

/***/ }),
/* 639 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	var nAry = /*#__PURE__*/__webpack_require__(105);
	
	/**
	 * Wraps a function of any arity (including nullary) in a function that accepts
	 * exactly 1 parameter. Any extraneous parameters will not be passed to the
	 * supplied function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.0
	 * @category Function
	 * @sig (* -> b) -> (a -> b)
	 * @param {Function} fn The function to wrap.
	 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
	 *         arity 1.
	 * @see R.binary, R.nAry
	 * @example
	 *
	 *      var takesTwoArgs = function(a, b) {
	 *        return [a, b];
	 *      };
	 *      takesTwoArgs.length; //=> 2
	 *      takesTwoArgs(1, 2); //=> [1, 2]
	 *
	 *      var takesOneArg = R.unary(takesTwoArgs);
	 *      takesOneArg.length; //=> 1
	 *      // Only 1 argument is passed to the wrapped function
	 *      takesOneArg(1, 2); //=> [1, undefined]
	 * @symb R.unary(f)(a, b, c) = f(a)
	 */
	
	
	var unary = /*#__PURE__*/_curry1(function unary(fn) {
	  return nAry(1, fn);
	});
	module.exports = unary;

/***/ }),
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var curryN = /*#__PURE__*/__webpack_require__(13);
	
	/**
	 * Returns a function of arity `n` from a (manually) curried function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Function
	 * @sig Number -> (a -> b) -> (a -> c)
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to uncurry.
	 * @return {Function} A new function.
	 * @see R.curry
	 * @example
	 *
	 *      var addFour = a => b => c => d => a + b + c + d;
	 *
	 *      var uncurriedAddFour = R.uncurryN(4, addFour);
	 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
	 */
	
	
	var uncurryN = /*#__PURE__*/_curry2(function uncurryN(depth, fn) {
	  return curryN(depth, function () {
	    var currentDepth = 1;
	    var value = fn;
	    var idx = 0;
	    var endIdx;
	    while (currentDepth <= depth && typeof value === 'function') {
	      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
	      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
	      currentDepth += 1;
	      idx = endIdx;
	    }
	    return value;
	  });
	});
	module.exports = uncurryN;

/***/ }),
/* 641 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Builds a list from a seed value. Accepts an iterator function, which returns
	 * either false to stop iteration or an array of length 2 containing the value
	 * to add to the resulting list and the seed to be used in the next call to the
	 * iterator function.
	 *
	 * The iterator function receives one argument: *(seed)*.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.10.0
	 * @category List
	 * @sig (a -> [b]) -> * -> [b]
	 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
	 *        either false to quit iteration or an array of length two to proceed. The element
	 *        at index 0 of this array will be added to the resulting array, and the element
	 *        at index 1 will be passed to the next call to `fn`.
	 * @param {*} seed The seed value.
	 * @return {Array} The final list.
	 * @example
	 *
	 *      var f = n => n > 50 ? false : [-n, n + 10];
	 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
	 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
	 */
	
	
	var unfold = /*#__PURE__*/_curry2(function unfold(fn, seed) {
	  var pair = fn(seed);
	  var result = [];
	  while (pair && pair.length) {
	    result[result.length] = pair[0];
	    pair = fn(pair[1]);
	  }
	  return result;
	});
	module.exports = unfold;

/***/ }),
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

	var _concat = /*#__PURE__*/__webpack_require__(23);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var compose = /*#__PURE__*/__webpack_require__(152);
	
	var uniq = /*#__PURE__*/__webpack_require__(168);
	
	/**
	 * Combines two lists into a set (i.e. no duplicates) composed of the elements
	 * of each list.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig [*] -> [*] -> [*]
	 * @param {Array} as The first list.
	 * @param {Array} bs The second list.
	 * @return {Array} The first and second lists concatenated, with
	 *         duplicates removed.
	 * @example
	 *
	 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
	 */
	
	
	var union = /*#__PURE__*/_curry2( /*#__PURE__*/compose(uniq, _concat));
	module.exports = union;

/***/ }),
/* 643 */
/***/ (function(module, exports, __webpack_require__) {

	var _concat = /*#__PURE__*/__webpack_require__(23);
	
	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	var uniqWith = /*#__PURE__*/__webpack_require__(278);
	
	/**
	 * Combines two lists into a set (i.e. no duplicates) composed of the elements
	 * of each list. Duplication is determined according to the value returned by
	 * applying the supplied predicate to two list elements.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig ((a, a) -> Boolean) -> [*] -> [*] -> [*]
	 * @param {Function} pred A predicate used to test whether two items are equal.
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The first and second lists concatenated, with
	 *         duplicates removed.
	 * @see R.union
	 * @example
	 *
	 *      var l1 = [{a: 1}, {a: 2}];
	 *      var l2 = [{a: 1}, {a: 4}];
	 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
	 */
	
	
	var unionWith = /*#__PURE__*/_curry3(function unionWith(pred, list1, list2) {
	  return uniqWith(pred, _concat(list1, list2));
	});
	module.exports = unionWith;

/***/ }),
/* 644 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Tests the final argument by passing it to the given predicate function. If
	 * the predicate is not satisfied, the function will return the result of
	 * calling the `whenFalseFn` function with the same argument. If the predicate
	 * is satisfied, the argument is returned as is.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Logic
	 * @sig (a -> Boolean) -> (a -> a) -> a -> a
	 * @param {Function} pred        A predicate function
	 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
	 *                               to a falsy value.
	 * @param {*}        x           An object to test with the `pred` function and
	 *                               pass to `whenFalseFn` if necessary.
	 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
	 * @see R.ifElse, R.when
	 * @example
	 *
	 *      let safeInc = R.unless(R.isNil, R.inc);
	 *      safeInc(null); //=> null
	 *      safeInc(1); //=> 2
	 */
	
	
	var unless = /*#__PURE__*/_curry3(function unless(pred, whenFalseFn, x) {
	  return pred(x) ? x : whenFalseFn(x);
	});
	module.exports = unless;

/***/ }),
/* 645 */
/***/ (function(module, exports, __webpack_require__) {

	var _identity = /*#__PURE__*/__webpack_require__(159);
	
	var chain = /*#__PURE__*/__webpack_require__(151);
	
	/**
	 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
	 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig Chain c => c (c a) -> c a
	 * @param {*} list
	 * @return {*}
	 * @see R.flatten, R.chain
	 * @example
	 *
	 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
	 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
	 */
	
	
	var unnest = /*#__PURE__*/chain(_identity);
	module.exports = unnest;

/***/ }),
/* 646 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Takes a predicate, a transformation function, and an initial value,
	 * and returns a value of the same type as the initial value.
	 * It does so by applying the transformation until the predicate is satisfied,
	 * at which point it returns the satisfactory value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.20.0
	 * @category Logic
	 * @sig (a -> Boolean) -> (a -> a) -> a -> a
	 * @param {Function} pred A predicate function
	 * @param {Function} fn The iterator function
	 * @param {*} init Initial value
	 * @return {*} Final value that satisfies predicate
	 * @example
	 *
	 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
	 */
	
	
	var until = /*#__PURE__*/_curry3(function until(pred, fn, init) {
	  var val = init;
	  while (!pred(val)) {
	    val = fn(val);
	  }
	  return val;
	});
	module.exports = until;

/***/ }),
/* 647 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry1 = /*#__PURE__*/__webpack_require__(2);
	
	/**
	 * Returns a list of all the properties, including prototype properties, of the
	 * supplied object.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.2.0
	 * @category Object
	 * @sig {k: v} -> [v]
	 * @param {Object} obj The object to extract values from
	 * @return {Array} An array of the values of the object's own and prototype properties.
	 * @see R.values, R.keysIn
	 * @example
	 *
	 *      var F = function() { this.x = 'X'; };
	 *      F.prototype.y = 'Y';
	 *      var f = new F();
	 *      R.valuesIn(f); //=> ['X', 'Y']
	 */
	
	
	var valuesIn = /*#__PURE__*/_curry1(function valuesIn(obj) {
	  var prop;
	  var vs = [];
	  for (prop in obj) {
	    vs[vs.length] = obj[prop];
	  }
	  return vs;
	});
	module.exports = valuesIn;

/***/ }),
/* 648 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	// `Const` is a functor that effectively ignores the function given to `map`.
	
	
	var Const = function (x) {
	  return { value: x, 'fantasy-land/map': function () {
	      return this;
	    } };
	};
	
	/**
	 * Returns a "view" of the given data structure, determined by the given lens.
	 * The lens's focus determines which portion of the data structure is visible.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig Lens s a -> s -> a
	 * @param {Lens} lens
	 * @param {*} x
	 * @return {*}
	 * @see R.prop, R.lensIndex, R.lensProp
	 * @example
	 *
	 *      var xLens = R.lensProp('x');
	 *
	 *      R.view(xLens, {x: 1, y: 2});  //=> 1
	 *      R.view(xLens, {x: 4, y: 2});  //=> 4
	 */
	var view = /*#__PURE__*/_curry2(function view(lens, x) {
	  // Using `Const` effectively ignores the setter function of the `lens`,
	  // leaving the value returned by the getter function unmodified.
	  return lens(Const)(x).value;
	});
	module.exports = view;

/***/ }),
/* 649 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Tests the final argument by passing it to the given predicate function. If
	 * the predicate is satisfied, the function will return the result of calling
	 * the `whenTrueFn` function with the same argument. If the predicate is not
	 * satisfied, the argument is returned as is.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.18.0
	 * @category Logic
	 * @sig (a -> Boolean) -> (a -> a) -> a -> a
	 * @param {Function} pred       A predicate function
	 * @param {Function} whenTrueFn A function to invoke when the `condition`
	 *                              evaluates to a truthy value.
	 * @param {*}        x          An object to test with the `pred` function and
	 *                              pass to `whenTrueFn` if necessary.
	 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
	 * @see R.ifElse, R.unless
	 * @example
	 *
	 *      // truncate :: String -> String
	 *      var truncate = R.when(
	 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
	 *        R.pipe(R.take(10), R.append('…'), R.join(''))
	 *      );
	 *      truncate('12345');         //=> '12345'
	 *      truncate('0123456789ABC'); //=> '0123456789…'
	 */
	
	
	var when = /*#__PURE__*/_curry3(function when(pred, whenTrueFn, x) {
	  return pred(x) ? whenTrueFn(x) : x;
	});
	module.exports = when;

/***/ }),
/* 650 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var equals = /*#__PURE__*/__webpack_require__(21);
	
	var map = /*#__PURE__*/__webpack_require__(17);
	
	var where = /*#__PURE__*/__webpack_require__(281);
	
	/**
	 * Takes a spec object and a test object; returns true if the test satisfies
	 * the spec, false otherwise. An object satisfies the spec if, for each of the
	 * spec's own properties, accessing that property of the object gives the same
	 * value (in [`R.equals`](#equals) terms) as accessing that property of the
	 * spec.
	 *
	 * `whereEq` is a specialization of [`where`](#where).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Object
	 * @sig {String: *} -> {String: *} -> Boolean
	 * @param {Object} spec
	 * @param {Object} testObj
	 * @return {Boolean}
	 * @see R.propEq, R.where
	 * @example
	 *
	 *      // pred :: Object -> Boolean
	 *      var pred = R.whereEq({a: 1, b: 2});
	 *
	 *      pred({a: 1});              //=> false
	 *      pred({a: 1, b: 2});        //=> true
	 *      pred({a: 1, b: 2, c: 3});  //=> true
	 *      pred({a: 1, b: 1});        //=> false
	 */
	
	
	var whereEq = /*#__PURE__*/_curry2(function whereEq(spec, testObj) {
	  return where(map(equals, spec), testObj);
	});
	module.exports = whereEq;

/***/ }),
/* 651 */
/***/ (function(module, exports, __webpack_require__) {

	var _contains = /*#__PURE__*/__webpack_require__(56);
	
	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	var flip = /*#__PURE__*/__webpack_require__(95);
	
	var reject = /*#__PURE__*/__webpack_require__(107);
	
	/**
	 * Returns a new list without values in the first argument.
	 * [`R.equals`](#equals) is used to determine equality.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig [a] -> [a] -> [a]
	 * @param {Array} list1 The values to be removed from `list2`.
	 * @param {Array} list2 The array to remove values from.
	 * @return {Array} The new array without values in `list1`.
	 * @see R.transduce, R.difference
	 * @example
	 *
	 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
	 */
	
	
	var without = /*#__PURE__*/_curry2(function (xs, list) {
	  return reject(flip(_contains)(xs), list);
	});
	module.exports = without;

/***/ }),
/* 652 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Creates a new list out of the two supplied by creating each possible pair
	 * from the lists.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [b] -> [[a,b]]
	 * @param {Array} as The first list.
	 * @param {Array} bs The second list.
	 * @return {Array} The list made by combining each possible pair from
	 *         `as` and `bs` into pairs (`[a, b]`).
	 * @example
	 *
	 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
	 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
	 */
	
	
	var xprod = /*#__PURE__*/_curry2(function xprod(a, b) {
	  // = xprodWith(prepend); (takes about 3 times as long...)
	  var idx = 0;
	  var ilen = a.length;
	  var j;
	  var jlen = b.length;
	  var result = [];
	  while (idx < ilen) {
	    j = 0;
	    while (j < jlen) {
	      result[result.length] = [a[idx], b[j]];
	      j += 1;
	    }
	    idx += 1;
	  }
	  return result;
	});
	module.exports = xprod;

/***/ }),
/* 653 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Creates a new list out of the two supplied by pairing up equally-positioned
	 * items from both lists. The returned list is truncated to the length of the
	 * shorter of the two input lists.
	 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [b] -> [[a,b]]
	 * @param {Array} list1 The first array to consider.
	 * @param {Array} list2 The second array to consider.
	 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
	 * @example
	 *
	 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
	 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
	 */
	
	
	var zip = /*#__PURE__*/_curry2(function zip(a, b) {
	  var rv = [];
	  var idx = 0;
	  var len = Math.min(a.length, b.length);
	  while (idx < len) {
	    rv[idx] = [a[idx], b[idx]];
	    idx += 1;
	  }
	  return rv;
	});
	module.exports = zip;

/***/ }),
/* 654 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry2 = /*#__PURE__*/__webpack_require__(1);
	
	/**
	 * Creates a new object out of a list of keys and a list of values.
	 * Key/value pairing is truncated to the length of the shorter of the two lists.
	 * Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig [String] -> [*] -> {String: *}
	 * @param {Array} keys The array that will be properties on the output object.
	 * @param {Array} values The list of values on the output object.
	 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
	 * @example
	 *
	 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
	 */
	
	
	var zipObj = /*#__PURE__*/_curry2(function zipObj(keys, values) {
	  var idx = 0;
	  var len = Math.min(keys.length, values.length);
	  var out = {};
	  while (idx < len) {
	    out[keys[idx]] = values[idx];
	    idx += 1;
	  }
	  return out;
	});
	module.exports = zipObj;

/***/ }),
/* 655 */
/***/ (function(module, exports, __webpack_require__) {

	var _curry3 = /*#__PURE__*/__webpack_require__(3);
	
	/**
	 * Creates a new list out of the two supplied by applying the function to each
	 * equally-positioned pair in the lists. The returned list is truncated to the
	 * length of the shorter of the two input lists.
	 *
	 * @function
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
	 * @param {Function} fn The function used to combine the two elements into one value.
	 * @param {Array} list1 The first array to consider.
	 * @param {Array} list2 The second array to consider.
	 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
	 *         using `fn`.
	 * @example
	 *
	 *      var f = (x, y) => {
	 *        // ...
	 *      };
	 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
	 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
	 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
	 */
	
	
	var zipWith = /*#__PURE__*/_curry3(function zipWith(fn, a, b) {
	  var rv = [];
	  var idx = 0;
	  var len = Math.min(a.length, b.length);
	  while (idx < len) {
	    rv[idx] = fn(a[idx], b[idx]);
	    idx += 1;
	  }
	  return rv;
	});
	module.exports = zipWith;

/***/ })
]);
//# sourceMappingURL=component---src-pages-index-js-42214e4ffb9b53431bd4.js.map