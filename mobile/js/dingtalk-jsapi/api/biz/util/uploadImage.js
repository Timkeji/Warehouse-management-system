"use strict";function uploadImage$(a){return ddSdk_1.ddSdk.invokeAPI(apiName,a)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.uploadImage$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiHelper_1=require("../../../lib/apiHelper"),apiName="biz.util.uploadImage",paramsDeal=apiHelper_1.genDefaultParamsDealFn({multiple:!1});ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.pc]={vs:"2.5.0"},_a[ddSdk_1.ENV_ENUM.ios]={vs:"2.4.0",paramsDeal:paramsDeal},_a[ddSdk_1.ENV_ENUM.android]={vs:"2.4.0",paramsDeal:paramsDeal},_a)),exports.uploadImage$=uploadImage$,exports.default=uploadImage$;