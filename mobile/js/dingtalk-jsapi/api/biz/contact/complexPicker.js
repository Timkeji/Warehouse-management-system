"use strict";function complexPicker$(d){return ddSdk_1.ddSdk.invokeAPI(apiName,d)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.complexPicker$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiName="biz.contact.complexPicker";ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"2.9.0"},_a[ddSdk_1.ENV_ENUM.android]={vs:"2.9.0"},_a[ddSdk_1.ENV_ENUM.pc]={vs:"4.3.5"},_a)),exports.complexPicker$=complexPicker$,exports.default=complexPicker$;