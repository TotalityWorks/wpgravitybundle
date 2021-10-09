module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";n.r(t),n.d(t,"FormsField",(function(){return f})),n.d(t,"Button",(function(){return p}));var r=n(0),a=n.n(r);function l(e){var t=e.field,n=t.id,r=t.formId,l=(t.type,t.label),c=(t.description,t.cssClass),i=t.isRequired,o=t.placeholder,d="field_".concat(r,"_").concat(n);return a.a.createElement("div",{className:"".concat(c).trim()},a.a.createElement("label",{htmlFor:d},l),a.a.createElement("input",{type:"date",name:n,id:d,required:i,placeholder:o||""}))}function c(e){var t=e.field,n=t.id,r=t.formId,l=(t.type,t.label),c=(t.description,t.cssClass),i=t.isRequired,o=t.placeholder,d="field_".concat(r,"_").concat(n);return a.a.createElement("div",{className:"".concat(c).trim()},a.a.createElement("label",{htmlFor:d},l),a.a.createElement("input",{type:"email",name:String(n),id:d,placeholder:o,required:i}))}function i(e){var t,n=e.field,r=n.id,l=n.formId,c=(n.type,n.label),i=(n.description,n.cssClass),o=n.inputs,d="field_".concat(l,"_").concat(r),u=o.find((function(e){return"prefix"===e.key})),s=(null==o?void 0:o.filter((function(e){return"prefix"!==(null==e?void 0:e.key)})))||[];return a.a.createElement("fieldset",{id:d,className:"".concat(i).trim()},a.a.createElement("legend",null,c),!u.isHidden&&u?a.a.createElement(a.a.Fragment,null,a.a.createElement("select",{name:String(u.key),id:"input_".concat(l,"_").concat(r,"_").concat(u.key)},a.a.createElement("option",{value:""}),null===(t=u.choices)||void 0===t?void 0:t.map((function(e){return a.a.createElement("option",{key:null==e?void 0:e.value,value:String(null==e?void 0:e.value)},String(null==e?void 0:e.text))})))):null,s.map((function(e){var t=e.key,n=(null==e?void 0:e.label)||"",c=(null==e?void 0:e.placeholder)||"",i=(null==e?void 0:e.isRequired)||"";if(!e.isHidden)return a.a.createElement("div",{key:t},a.a.createElement("label",{htmlFor:"input_".concat(l,"_").concat(r,"_").concat(t)},n),a.a.createElement("input",{type:"text",name:String(t),id:"input_".concat(l,"_").concat(r,"_").concat(t),placeholder:c,required:i}))})))}function o(e){var t=e.field,n=t.id,r=t.formId,l=(t.type,t.label),c=(t.description,t.cssClass),i=t.isRequired,o=t.placeholder,d="field_".concat(r,"_").concat(n);return a.a.createElement("div",{className:"".concat(c).trim()},a.a.createElement("label",{htmlFor:d},l),a.a.createElement("input",{type:"tel",name:n,id:d,required:i,placeholder:o||""}))}function d(e){var t=e.field,n=t.id,r=t.formId,l=(t.type,t.label),c=(t.description,t.cssClass),i=t.isRequired,o=(t.defaultValue,t.choices),d="field_".concat(r,"_").concat(n);return a.a.createElement("div",{className:"".concat(c).trim()},a.a.createElement("label",{htmlFor:d},l),a.a.createElement("select",{name:n,id:d,required:i},null==o?void 0:o.map((function(e){return a.a.createElement("option",{key:(null==e?void 0:e.value)||"",value:(null==e?void 0:e.value)||""},(null==e?void 0:e.text)||"")}))))}function u(e){var t=e.field,n=t.id,r=t.formId,l=(t.type,t.label),c=(t.description,t.cssClass),i=t.isRequired,o=t.placeholder,d="field_".concat(r,"_").concat(n);return a.a.createElement("div",{className:"".concat(c).trim()},a.a.createElement("label",{htmlFor:d},l),a.a.createElement("input",{type:"text",name:n,id:d,required:i,placeholder:o||""}))}function s(e){var t=e.field,n=t.id,r=t.formId,l=(t.type,t.label),c=(t.description,t.cssClass),i=t.isRequired,o="field_".concat(r,"_").concat(n);return a.a.createElement("div",{className:"".concat(c).trim()},a.a.createElement("label",{htmlFor:o},l),a.a.createElement("textarea",{name:n,id:o,required:i}))}function m(e){var t=e.field,n=t.id,r=t.formId,l=(t.type,t.label),c=(t.description,t.cssClass),i=t.isRequired,o="field_".concat(r,"_").concat(n);return a.a.createElement("div",{className:"".concat(c).trim()},a.a.createElement("label",{htmlFor:o},l),a.a.createElement("input",{type:"time",name:n,id:o,required:i}))}function f(e){var t=e.field;switch(t.type){case"date":return a.a.createElement(l,{field:t});case"email":return a.a.createElement(c,{field:t});case"name":return a.a.createElement(i,{field:t});case"phone":return a.a.createElement(o,{field:t});case"select":return a.a.createElement(d,{field:t});case"text":return a.a.createElement(u,{field:t});case"textarea":return a.a.createElement(s,{field:t});case"time":return a.a.createElement(m,{field:t});default:return a.a.createElement("p",null,"This Gravity Forms field type is not currently supported: ".concat(t.type,"."))}}function p(e){var t=e.type,n=e.text;return a.a.createElement("button",{type:t},n||"Submit")}}]);