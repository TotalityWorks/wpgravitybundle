"use strict";(self.webpackChunkwpgravitybundle=self.webpackChunkwpgravitybundle||[]).push([[23],{23:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var n=t(893),r=t(294),l=t(887),o=function(){return o=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e},o.apply(this,arguments)};const c=function(e){var a,t,c=e.field,d=c.id,i=c.type,u=c.formId,s=c.label,p=c.cssClass,f=c.isRequired,v=c.placeholder,y=c.size,h="".concat(i).concat(d,"Value"),m="field_".concat(u,"_").concat(d),g=null==y?"":"".concat(y.toLowerCase()),b=null==p?"":"".concat(p),F=null==v?"":"".concat(v.toLowerCase()),w="".concat(g," ").concat(b),j=(0,l.Gc)(),C=j.state,x=j.dispatch,M=C.errors.find((function(e){return e.name.toString()===h}));return(0,r.useEffect)((function(){var e,a;if(null!=f&&f)return 0===(null===(a=null===(e=C.formData)||void 0===e?void 0:e[h])||void 0===a?void 0:a.length)?x({type:l.MF.AddRequiredField,payload:h}):void x({type:l.MF.RemoveRequiredField,payload:h})}),[null===(a=C.formData)||void 0===a?void 0:a[h]]),(0,n.jsxs)("div",o({className:w},{children:[(0,n.jsx)("label",o({htmlFor:m},{children:s})),(0,n.jsx)("input",{type:"text",name:m,id:m,required:f,placeholder:F,defaultValue:null===(t=C.formData)||void 0===t?void 0:t[h],onChange:function(e){var a;e.preventDefault();var t=e.currentTarget.value;return function(e){null!=f&&f&&0===e.length?x({type:l.MF.AddError,payload:{name:h,message:"Field cannot be empty"}}):x({type:l.MF.RemoveError,payload:h})}(t),x({type:l.MF.Update,payload:(a={},a[h]=t,a)})}}),(0,n.jsx)("p",o({className:"error-message"},{children:null==M?void 0:M.message}))]}))}}}]);