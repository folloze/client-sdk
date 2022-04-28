import {
  require_axios
} from "./chunk.3ZNLEUXI.js";
import {
  __commonJS
} from "./chunk.Z3GS5MY4.js";

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/axios-mock-adapter/node_modules/is-buffer/index.js
var require_is_buffer = __commonJS({
  "node_modules/axios-mock-adapter/node_modules/is-buffer/index.js"(exports, module) {
    module.exports = function isBuffer(obj) {
      return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    };
  }
});

// node_modules/is-blob/index.js
var require_is_blob = __commonJS({
  "node_modules/is-blob/index.js"(exports, module) {
    "use strict";
    module.exports = (value) => {
      if (typeof Blob === "undefined") {
        return false;
      }
      return value instanceof Blob || Object.prototype.toString.call(value) === "[object Blob]";
    };
  }
});

// node_modules/axios-mock-adapter/src/utils.js
var require_utils = __commonJS({
  "node_modules/axios-mock-adapter/src/utils.js"(exports, module) {
    "use strict";
    var axios = require_axios();
    var isEqual = require_fast_deep_equal();
    var isBuffer = require_is_buffer();
    var isBlob = require_is_blob();
    var toString = Object.prototype.toString;
    var rejectWithError = !!axios.create().defaults.headers;
    function find(array, predicate) {
      var length = array.length;
      for (var i = 0; i < length; i++) {
        var value = array[i];
        if (predicate(value))
          return value;
      }
    }
    function isFunction(val) {
      return toString.call(val) === "[object Function]";
    }
    function isObjectOrArray(val) {
      return val !== null && typeof val === "object";
    }
    function isStream(val) {
      return isObjectOrArray(val) && isFunction(val.pipe);
    }
    function isArrayBuffer(val) {
      return toString.call(val) === "[object ArrayBuffer]";
    }
    function combineUrls(baseURL, url) {
      if (baseURL) {
        return baseURL.replace(/\/+$/, "") + "/" + url.replace(/^\/+/, "");
      }
      return url;
    }
    function findHandler(handlers, method, url, body, parameters, headers, baseURL) {
      return find(handlers[method.toLowerCase()], function(handler) {
        if (typeof handler[0] === "string") {
          return (isUrlMatching(url, handler[0]) || isUrlMatching(combineUrls(baseURL, url), handler[0])) && isBodyOrParametersMatching(method, body, parameters, handler[1]) && isObjectMatching(headers, handler[2]);
        } else if (handler[0] instanceof RegExp) {
          return (handler[0].test(url) || handler[0].test(combineUrls(baseURL, url))) && isBodyOrParametersMatching(method, body, parameters, handler[1]) && isObjectMatching(headers, handler[2]);
        }
      });
    }
    function isUrlMatching(url, required) {
      var noSlashUrl = url[0] === "/" ? url.substr(1) : url;
      var noSlashRequired = required[0] === "/" ? required.substr(1) : required;
      return noSlashUrl === noSlashRequired;
    }
    function isBodyOrParametersMatching(method, body, parameters, required) {
      var allowedParamsMethods = ["delete", "get", "head", "options"];
      if (allowedParamsMethods.indexOf(method.toLowerCase()) >= 0) {
        var params = required ? required.params : void 0;
        return isObjectMatching(parameters, params);
      } else {
        return isBodyMatching(body, required);
      }
    }
    function isObjectMatching(actual, expected) {
      if (expected === void 0)
        return true;
      if (typeof expected.asymmetricMatch === "function") {
        return expected.asymmetricMatch(actual);
      }
      return isEqual(actual, expected);
    }
    function isBodyMatching(body, requiredBody) {
      if (requiredBody === void 0) {
        return true;
      }
      var parsedBody;
      try {
        parsedBody = JSON.parse(body);
      } catch (e) {
      }
      return isObjectMatching(parsedBody ? parsedBody : body, requiredBody);
    }
    function purgeIfReplyOnce(mock, handler) {
      Object.keys(mock.handlers).forEach(function(key) {
        var index = mock.handlers[key].indexOf(handler);
        if (index > -1) {
          mock.handlers[key].splice(index, 1);
        }
      });
    }
    function settle(resolve, reject, response, delay) {
      if (delay > 0) {
        setTimeout(settle, delay, resolve, reject, response);
        return;
      }
      if (!rejectWithError && (!response.config || !response.config.validateStatus)) {
        if (response.status >= 200 && response.status < 300) {
          resolve(response);
        } else {
          reject(response);
        }
        return;
      }
      if (!response.config.validateStatus || response.config.validateStatus(response.status)) {
        resolve(response);
      } else {
        if (!rejectWithError) {
          return reject(response);
        }
        reject(createAxiosError("Request failed with status code " + response.status, response.config, response));
      }
    }
    function createAxiosError(message, config, response, code) {
      var error = new Error(message);
      error.isAxiosError = true;
      error.config = config;
      if (response !== void 0) {
        error.response = response;
      }
      if (code !== void 0) {
        error.code = code;
      }
      error.toJSON = function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      };
      return error;
    }
    function createCouldNotFindMockError(config) {
      var message = "Could not find mock for: \n" + JSON.stringify(config, ["method", "url"], 2);
      var error = new Error(message);
      error.isCouldNotFindMockError = true;
      error.url = config.url;
      error.method = config.method;
      return error;
    }
    module.exports = {
      find,
      findHandler,
      purgeIfReplyOnce,
      settle,
      isStream,
      isArrayBuffer,
      isFunction,
      isObjectOrArray,
      isBuffer,
      isBlob,
      isEqual,
      createAxiosError,
      createCouldNotFindMockError
    };
  }
});

// node_modules/axios-mock-adapter/src/handle_request.js
var require_handle_request = __commonJS({
  "node_modules/axios-mock-adapter/src/handle_request.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function transformRequest(data) {
      if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isBlob(data)) {
        return data;
      }
      if (utils.isObjectOrArray(data)) {
        return JSON.parse(JSON.stringify(data));
      }
      return data;
    }
    function makeResponse(result, config) {
      return {
        status: result[0],
        data: transformRequest(result[1]),
        headers: result[2],
        config,
        request: {
          responseURL: config.url
        }
      };
    }
    function handleRequest(mockAdapter, resolve, reject, config) {
      var url = config.url || "";
      if (config.baseURL && url.substr(0, config.baseURL.length) === config.baseURL) {
        url = url.slice(config.baseURL.length);
      }
      delete config.adapter;
      mockAdapter.history[config.method].push(config);
      var handler = utils.findHandler(mockAdapter.handlers, config.method, url, config.data, config.params, config.headers, config.baseURL);
      if (handler) {
        if (handler.length === 7) {
          utils.purgeIfReplyOnce(mockAdapter, handler);
        }
        if (handler.length === 2) {
          mockAdapter.originalAdapter(config).then(resolve, reject);
        } else if (typeof handler[3] !== "function") {
          utils.settle(resolve, reject, makeResponse(handler.slice(3), config), mockAdapter.delayResponse);
        } else {
          var result = handler[3](config);
          if (typeof result.then !== "function") {
            utils.settle(resolve, reject, makeResponse(result, config), mockAdapter.delayResponse);
          } else {
            result.then(function(result2) {
              if (result2.config && result2.status) {
                utils.settle(resolve, reject, makeResponse([result2.status, result2.data, result2.headers], result2.config), 0);
              } else {
                utils.settle(resolve, reject, makeResponse(result2, config), mockAdapter.delayResponse);
              }
            }, function(error) {
              if (mockAdapter.delayResponse > 0) {
                setTimeout(function() {
                  reject(error);
                }, mockAdapter.delayResponse);
              } else {
                reject(error);
              }
            });
          }
        }
      } else {
        switch (mockAdapter.onNoMatch) {
          case "passthrough":
            mockAdapter.originalAdapter(config).then(resolve, reject);
            break;
          case "throwException":
            throw utils.createCouldNotFindMockError(config);
          default:
            utils.settle(resolve, reject, {
              status: 404,
              config
            }, mockAdapter.delayResponse);
        }
      }
    }
    module.exports = handleRequest;
  }
});

// node_modules/axios-mock-adapter/src/index.js
var require_src = __commonJS({
  "node_modules/axios-mock-adapter/src/index.js"(exports, module) {
    "use strict";
    var handleRequest = require_handle_request();
    var utils = require_utils();
    var VERBS = [
      "get",
      "post",
      "head",
      "delete",
      "patch",
      "put",
      "options",
      "list"
    ];
    function adapter() {
      return function(config) {
        var mockAdapter = this;
        if (arguments.length === 3) {
          handleRequest(mockAdapter, arguments[0], arguments[1], arguments[2]);
        } else {
          return new Promise(function(resolve, reject) {
            handleRequest(mockAdapter, resolve, reject, config);
          });
        }
      }.bind(this);
    }
    function getVerbObject() {
      return VERBS.reduce(function(accumulator, verb) {
        accumulator[verb] = [];
        return accumulator;
      }, {});
    }
    function reset() {
      resetHandlers.call(this);
      resetHistory.call(this);
    }
    function resetHandlers() {
      this.handlers = getVerbObject();
    }
    function resetHistory() {
      this.history = getVerbObject();
    }
    function MockAdapter(axiosInstance, options) {
      reset.call(this);
      if (axiosInstance) {
        this.axiosInstance = axiosInstance;
        this.originalAdapter = axiosInstance.defaults.adapter;
        this.delayResponse = options && options.delayResponse > 0 ? options.delayResponse : null;
        this.onNoMatch = options && options.onNoMatch || null;
        axiosInstance.defaults.adapter = this.adapter.call(this);
      } else {
        throw new Error("Please provide an instance of axios to mock");
      }
    }
    MockAdapter.prototype.adapter = adapter;
    MockAdapter.prototype.restore = function restore() {
      if (this.axiosInstance) {
        this.axiosInstance.defaults.adapter = this.originalAdapter;
        this.axiosInstance = void 0;
      }
    };
    MockAdapter.prototype.reset = reset;
    MockAdapter.prototype.resetHandlers = resetHandlers;
    MockAdapter.prototype.resetHistory = resetHistory;
    VERBS.concat("any").forEach(function(method) {
      var methodName = "on" + method.charAt(0).toUpperCase() + method.slice(1);
      MockAdapter.prototype[methodName] = function(matcher, body, requestHeaders) {
        var _this = this;
        var matcher = matcher === void 0 ? /.*/ : matcher;
        function reply(code, response, headers) {
          var handler = [matcher, body, requestHeaders, code, response, headers];
          addHandler(method, _this.handlers, handler);
          return _this;
        }
        function replyOnce(code, response, headers) {
          var handler = [
            matcher,
            body,
            requestHeaders,
            code,
            response,
            headers,
            true
          ];
          addHandler(method, _this.handlers, handler);
          return _this;
        }
        return {
          reply,
          replyOnce,
          passThrough: function passThrough() {
            var handler = [matcher, body];
            addHandler(method, _this.handlers, handler);
            return _this;
          },
          abortRequest: function() {
            return reply(function(config) {
              var error = utils.createAxiosError("Request aborted", config, void 0, "ECONNABORTED");
              return Promise.reject(error);
            });
          },
          abortRequestOnce: function() {
            return replyOnce(function(config) {
              var error = utils.createAxiosError("Request aborted", config, void 0, "ECONNABORTED");
              return Promise.reject(error);
            });
          },
          networkError: function() {
            return reply(function(config) {
              var error = utils.createAxiosError("Network Error", config);
              return Promise.reject(error);
            });
          },
          networkErrorOnce: function() {
            return replyOnce(function(config) {
              var error = utils.createAxiosError("Network Error", config);
              return Promise.reject(error);
            });
          },
          timeout: function() {
            return reply(function(config) {
              var error = utils.createAxiosError(config.timeoutErrorMessage || "timeout of " + config.timeout + "ms exceeded", config, void 0, "ECONNABORTED");
              return Promise.reject(error);
            });
          },
          timeoutOnce: function() {
            return replyOnce(function(config) {
              var error = utils.createAxiosError(config.timeoutErrorMessage || "timeout of " + config.timeout + "ms exceeded", config, void 0, "ECONNABORTED");
              return Promise.reject(error);
            });
          }
        };
      };
    });
    function findInHandlers(method, handlers, handler) {
      var index = -1;
      for (var i = 0; i < handlers[method].length; i += 1) {
        var item = handlers[method][i];
        var isReplyOnce = item.length === 7;
        var comparePaths = item[0] instanceof RegExp && handler[0] instanceof RegExp ? String(item[0]) === String(handler[0]) : item[0] === handler[0];
        var isSame = comparePaths && utils.isEqual(item[1], handler[1]) && utils.isEqual(item[2], handler[2]);
        if (isSame && !isReplyOnce) {
          index = i;
        }
      }
      return index;
    }
    function addHandler(method, handlers, handler) {
      if (method === "any") {
        VERBS.forEach(function(verb) {
          handlers[verb].push(handler);
        });
      } else {
        var indexOfExistingHandler = findInHandlers(method, handlers, handler);
        if (indexOfExistingHandler > -1 && handler.length < 7) {
          handlers[method].splice(indexOfExistingHandler, 1, handler);
        } else {
          handlers[method].push(handler);
        }
      }
    }
    module.exports = MockAdapter;
    module.exports.default = MockAdapter;
  }
});
export default require_src();
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
