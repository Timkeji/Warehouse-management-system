"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.h5PcBridgeInit=void 0,exports.h5PcBridgeInit=function(){return Promise.resolve(require("../packages/frame-talk-client-pc/index.js"))};var h5PcBridge=function(e,n){return new Promise(function(r,t){return require("../packages/frame-talk-client-pc/index.js").invokeAPI(e,n).result.then(function(e){return"function"==typeof n.onSuccess&&n.onSuccess.call(null,e),r(e)},function(e){return"function"==typeof n.onFail&&n.onFail.call(null,e),t(e)})})};exports.default=h5PcBridge;