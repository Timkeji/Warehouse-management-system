"use strict";function createSceneGroup$(e){return ddSdk_1.ddSdk.invokeAPI(apiName,e)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.createSceneGroup$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiName="biz.chat.createSceneGroup";ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"4.7.17"},_a[ddSdk_1.ENV_ENUM.android]={vs:"4.7.17"},_a[ddSdk_1.ENV_ENUM.pc]={vs:"4.7.17"},_a)),exports.createSceneGroup$=createSceneGroup$,exports.default=createSceneGroup$;