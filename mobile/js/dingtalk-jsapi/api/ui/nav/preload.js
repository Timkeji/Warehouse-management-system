"use strict";function preload$(d){return ddSdk_1.ddSdk.invokeAPI(apiName,d)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.preload$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiName="ui.nav.preload";ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"2.6.0"},_a[ddSdk_1.ENV_ENUM.android]={vs:"2.6.0"},_a)),exports.preload$=preload$,exports.default=preload$;