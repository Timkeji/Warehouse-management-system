"use strict";function inquiry$(e){return ddSdk_1.ddSdk.invokeAPI(apiName,e)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.inquiry$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiHelper_1=require("../../../lib/apiHelper"),apiName="biz.store.inquiry";ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"4.3.7",paramsDeal:apiHelper_1.genBizStoreParamsDealFn},_a[ddSdk_1.ENV_ENUM.android]={vs:"4.3.7",paramsDeal:apiHelper_1.genBizStoreParamsDealFn},_a[ddSdk_1.ENV_ENUM.pc]={vs:"4.5.3",paramsDeal:apiHelper_1.genBizStoreParamsDealFn},_a)),exports.inquiry$=inquiry$,exports.default=inquiry$;