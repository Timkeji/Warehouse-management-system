"use strict";function choose$(e){return ddSdk_1.ddSdk.invokeAPI(apiName,e)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.choose$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiHelper_1=require("../../../lib/apiHelper"),apiName="biz.customContact.choose",paramsDeal=apiHelper_1.genDefaultParamsDealFn({isShowCompanyName:!1,max:50});ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.pc]={vs:"3.0.0"},_a[ddSdk_1.ENV_ENUM.ios]={vs:"2.5.2",paramsDeal:paramsDeal},_a[ddSdk_1.ENV_ENUM.android]={vs:"2.5.2",paramsDeal:paramsDeal},_a)),exports.choose$=choose$,exports.default=choose$;