"use strict";(self.webpackChunkwpgravitybundle=self.webpackChunkwpgravitybundle||[]).push([[111],{111:(t,a,c)=>{c.r(a),c.d(a,{default:()=>i});var e=c(294),n=c(887),o=c(933);function i(t){var a=t.field,c=a.id,i=a.formId,r=a.label,l=a.cssClass,u=a.isRequired,d=a.placeholder,p=a.size,s="field_".concat(i,"_").concat(c),y=(0,e.useState)(""),f=y[0],E=y[1],D="".concat(p&&p.toLowerCase()||""," ").concat(l).trim(),h=(0,n.G)().dispatch;return e.createElement("div",{className:D},e.createElement("label",{htmlFor:s},r),e.createElement("input",{type:"email",name:c,id:s,placeholder:d,required:u,value:f,onChange:function(t){var c=t.target.value;E(c);var e=c;return(0,o.Z)(a,e,h)}}))}},933:(t,a,c)=>{c.d(a,{Z:()=>o});var e=function(){return e=Object.assign||function(t){for(var a,c=1,e=arguments.length;c<e;c++)for(var n in a=arguments[c])Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);return t},e.apply(this,arguments)},n=function(t,a,c,e,n){return""===t?a.includes("".concat(c).concat(n))?{}:e({type:"ADD_REQUIRED_FIELD",payload:"".concat(c).concat(n)}):t?e({type:"REMOVE_REQUIRED_FIELD",payload:"".concat(c).concat(n)}):{}};const o=function(t,a,c){var o,i,r,l,u,d,p,s=t.type,y=t.id;if(function(t,a,c){!function(t,a,c){var e="".concat(t.type).concat(t.id);t.isRequired&&("name"===t.type?function(t,a,c){var e=a.prefix,o=a.first,i=a.middle,r=a.last,l=a.suffix,u=c.formData.requiredFields,d="".concat(t.type).concat(t.id);n(e,u,d,c.dispatch,"Prefix"),n(o,u,d,c.dispatch,"First"),n(i,u,d,c.dispatch,"Middle"),n(r,u,d,c.dispatch,"Last"),n(l,u,d,c.dispatch,"Suffix")}(t,a,c):"address"===t.type?function(t,a,c){var e=a.street,n=a.city,o=a.state,i=a.zip,r=a.country,l=!(e&&""!==e&&n&&""!==n&&o&&""!==o&&i&&""!==i&&r&&""!==r),u=t.type,d=t.id,p="".concat(u).concat(d,"Street"),s=[p,"".concat(u).concat(d,"City"),"".concat(u).concat(d,"State"),"".concat(u).concat(d,"Zip"),"".concat(u).concat(d,"Country")];l?c.formData.requiredFields.includes("".concat(p))||s.map((function(t){return c.dispatch({type:"ADD_REQUIRED_FIELD",payload:t})})):c.dispatch({type:"REMOVE_REQUIRED_FIELDS",payload:s})}(t,a,c):c(""===a||null===a?{type:"ADD_REQUIRED_FIELD",payload:e}:{type:"REMOVE_REQUIRED_FIELD",payload:e}))}(t,a,c)}(t,a,c),"name"===s){var f=a.prefix,E=a.first,D=a.middle,h=a.last,R=a.suffix,_=(f||""===f)&&"".concat(s).concat(y,"PrefixValue"),v=(E||""===E)&&"".concat(s).concat(y,"FirstValue"),m=(D||""===D)&&"".concat(s).concat(y,"MiddleValue"),V=(h||""===h)&&"".concat(s).concat(y,"LastValue"),F=(R||""===R)&&"".concat(s).concat(y,"SuffixValue"),I={};(f||""===f)&&(I=e(e({},I),((o={})[_]=f,o))),(E||""===E)&&(I=e(e({},I),((i={})[v]=E,i))),(D||""===D)&&(I=e(e({},I),((r={})[m]=D,r))),(h||""===h)&&(I=e(e({},I),((l={})[V]=h,l))),(R||""===R)&&(I=e(e({},I),((u={})[F]=R,u)));var A=e({},I);return c.dispatch({type:"UPDATE_FORM_DATA",payload:A})}if("address"===s){var L=a.street,C=a.lineTwo,O=a.city,U=a.state,b=a.zip,w=a.country,x="".concat(s).concat(y,"StreetValue"),M="".concat(s).concat(y,"LineTwoValue"),S="".concat(s).concat(y,"CityValue"),T="".concat(s).concat(y,"StateValue"),g="".concat(s).concat(y,"ZipValue"),P="".concat(s).concat(y,"CountryValue");return(d={})[x]=L,d[M]=C,d[S]=O,d[T]=U,d[g]=b,d[P]=w,I=d,c.dispatch({type:"UPDATE_FORM_DATA",payload:I})}return c({type:"UPDATE_FORM_DATA",payload:(p={},p["".concat(s).concat(y,"Value")]=a,p)})}}}]);