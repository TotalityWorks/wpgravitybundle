"use strict";(self.webpackChunkwpgravitybundle=self.webpackChunkwpgravitybundle||[]).push([[513],{513:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(893),n=r(294),l=r(887),o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};const c=function(e){var t=e.field,r=t.id,c=t.type,u=t.formId,i=t.label,s=t.cssClass,d=t.isRequired,f=t.defaultValue,p=t.choices,v=t.size,y="".concat(c).concat(r,"Value"),h="field_".concat(u,"_").concat(r),m=void 0===v?"":"".concat(v.toLowerCase()),b=void 0===s?"":"".concat(s),g="".concat(m," ").concat(b),j=(0,l.Gc)(),w=j.state,x=j.dispatch,C=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,l=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=l.next()).done;)o.push(a.value)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return o}((0,n.useState)(""),2),k=C[0],F=C[1],S=w.errors.find((function(e){return e.name.toString()===y}));return(0,n.useEffect)((function(){var e,t;if(null==f)return F(p[0].value),x({type:l.MF.Update,payload:(e={},e[y]=p[0].value,e)});F(f),x({type:l.MF.Update,payload:(t={},t[y]=f,t)})}),[]),(0,a.jsxs)("div",o({className:g},{children:[(0,a.jsx)("label",o({htmlFor:h},{children:i})),(0,a.jsx)("select",o({name:h,id:h,required:null!=d||!1,value:k,onChange:function(e){var t,r=e.currentTarget.value;F(r);var a=r;return x({type:l.MF.Update,payload:(t={},t[y]=a,t)})}},{children:null==p?void 0:p.map((function(e){return(0,a.jsx)("option",o({value:e.value},{children:e.text}),e.value)}))})),(0,a.jsx)("p",o({className:"error-message"},{children:null==S?void 0:S.message}))]}))}}}]);