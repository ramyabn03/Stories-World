/*! For license information please see 4.33d46cae.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{24:function(t,e,r){t.exports={"main-header":"MainHeader_main-header__1uJ0B"}},25:function(t,e,r){"use strict";r(0);var n=r(27),o=r.n(n),i=r(2);e.a=function(t){return Object(i.jsx)("div",{className:"".concat(o.a.card," ").concat(t.className),children:t.children})}},26:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},27:function(t,e,r){t.exports={card:"Card_card__2NtHQ"}},28:function(t,e,r){"use strict";r(0);var n=r(29),o=r.n(n),i=r(2);e.a=function(t){return Object(i.jsx)("button",{type:t.type||"button",className:"".concat(o.a.button," ").concat(t.className),onClick:t.onClick,disabled:t.disabled,children:t.children})}},29:function(t,e,r){t.exports={button:"Button_button__2_pGg"}},30:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(E){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(E){return{type:"throw",arg:E}}}t.wrap=l;var f={};function d(){}function p(){}function y(){}var v={};s(v,a,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(N([])));b&&b!==e&&r.call(b,a)&&(v=b);var j=y.prototype=d.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=y,s(j,"constructor",y),s(y,"constructor",p),p.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},x(g.prototype),s(g.prototype,c,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}r.d(e,"a",(function(){return o}))},31:function(t,e,r){t.exports={control:"AddStory_control__9w-DW",addbtn:"AddStory_addbtn__DPFJM"}},41:function(t,e,r){"use strict";r.r(e);var n=r(30),o=r(26),i=r(0),a=r(6),c=r(25),u=r(31),s=r.n(u),l=r(9),h=r.n(l),f=r(2);var d=function(t){var e=Object(i.useRef)(""),r=Object(i.useRef)(""),n=Object(i.useRef)(""),o=Object(i.useRef)(""),a=Object(i.useRef)(""),c=Object(i.useRef)("");return Object(f.jsxs)("form",{onSubmit:function(i){i.preventDefault();var u={name:e.current.value,title:n.current.value,date:o.current.value,outline:a.current.value,openingText:r.current.value,moral:c.current.value};t.onAddStory(u),i.target.reset(),h()("Congratulations","Your Story Added :)","success")},children:[Object(f.jsxs)("div",{className:s.a.control,children:[Object(f.jsx)("label",{htmlFor:"name",children:"Writter Name"}),Object(f.jsx)("input",{type:"text",id:"name",ref:e,required:!0})]}),Object(f.jsxs)("div",{className:s.a.control,children:[Object(f.jsx)("label",{htmlFor:"title",children:"Title"}),Object(f.jsx)("input",{type:"text",id:"title",ref:n,required:!0})]}),Object(f.jsxs)("div",{className:s.a.control,children:[Object(f.jsx)("label",{htmlFor:"date",children:"Date"}),Object(f.jsx)("input",{type:"date",id:"date",ref:o,required:!0})]}),Object(f.jsxs)("div",{className:s.a.control,children:[Object(f.jsx)("label",{htmlFor:"outline",children:"Story-Outline"}),Object(f.jsx)("textarea",{rows:"3",id:"outline",ref:a,required:!0})]}),Object(f.jsxs)("div",{className:s.a.control,children:[Object(f.jsx)("label",{htmlFor:"opening-text",children:"Description"}),Object(f.jsx)("textarea",{rows:"5",id:"opening-text",ref:r,required:!0})]}),Object(f.jsxs)("div",{className:s.a.control,children:[Object(f.jsx)("label",{htmlFor:"moral",children:"Moral of the Story"}),Object(f.jsx)("textarea",{rows:"1",id:"moral",ref:c})]}),Object(f.jsx)("div",{className:s.a.control,children:Object(f.jsx)("button",{className:s.a.addbtn,children:"Add Story"})})]})},p=r(28),y=r(24),v=r.n(y);e.default=function(){function t(){return(t=Object(o.a)(Object(n.a)().mark((function t(e){var r,o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://react-http-61ca9-default-rtdb.firebaseio.com/stories.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:o=t.sent,console.log(o);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(f.jsxs)(i.Fragment,{children:[Object(f.jsxs)("header",{className:v.a["main-header"],children:[Object(f.jsx)("h1",{children:"Story Details"}),Object(f.jsx)(a.b,{to:"/login",children:Object(f.jsx)(p.a,{className:"btnView",children:"Story List"})})]}),Object(f.jsx)(c.a,{children:Object(f.jsx)("section",{children:Object(f.jsx)(d,{onAddStory:function(e){return t.apply(this,arguments)}})})})]})}}}]);
//# sourceMappingURL=4.33d46cae.chunk.js.map