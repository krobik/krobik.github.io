(this["webpackJsonpsamolet-test"]=this["webpackJsonpsamolet-test"]||[]).push([[1],{135:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var a=n(25),c=n.n(a),r=n(36),s=n(54),i=n(47),o=n(0),j=n.n(o),l=n(14),u=n(221),b=n(222),d=n(223),h=n(56),O=n(224),f=(n(135),n(7)),p=function(){return Object(f.jsx)(h.Header,{children:Object(f.jsx)(b.a,{children:Object(f.jsxs)(d.a,{span:16,offset:4,children:[Object(f.jsx)(r.b,{to:"/",children:Object(f.jsx)(O.a,{style:{fontSize:"28px",marginRight:"10px"}})}),Object(f.jsx)("span",{className:"header__title",children:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438. \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})]})})})},x=(n(205),function(){return Object(f.jsx)(h.Footer,{className:"footer",children:Object(f.jsxs)("div",{className:"fooner__inner",children:[Object(f.jsx)("span",{className:"footer__desc",children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 2021"}),Object(f.jsx)("a",{href:"https://github.com/krobik",children:"GitHub"})]})})}),m=(n(206),function(){return Object(f.jsxs)("div",{className:"not-found",children:[Object(f.jsx)("span",{className:"not-found__title",children:"404"}),Object(f.jsx)(r.b,{to:"/",children:Object(f.jsx)("span",{className:"not-found__desc",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})})]})}),_=n(219),v=(n(207),function(){return Object(f.jsx)("div",{className:"loader-wrap",children:Object(f.jsx)(_.a,{size:"large"})})}),g="SAVE_REQUEST",y="SEND_REQUEST";function E(e){return{type:g,payload:e}}var w=n(37),N=[{name:"main",path:"/",component:j.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,357))})),exact:!0},{name:"card",path:"/library/:id",component:j.a.lazy((function(){return Promise.all([n.e(0),n.e(5),n.e(7)]).then(n.bind(null,355))}))}],S=Object(w.a)(N),k=u.a.Content,T=function(){var e=Object(s.b)();return Object(o.useEffect)((function(){var t;e({type:y,payload:t})}),[e]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p,{}),Object(f.jsx)("div",{className:"content",children:Object(f.jsx)(o.Suspense,{fallback:Object(f.jsx)(v,{}),children:Object(f.jsx)(u.a,{style:{height:"100%"},children:Object(f.jsx)(b.a,{style:{height:"100%"},children:Object(f.jsx)(d.a,{span:16,offset:4,children:Object(f.jsx)(k,{style:{height:"100%"},children:Object(f.jsxs)(l.c,{children:[S.map((function(e,t){var n=Object.assign({},e);return Object(f.jsx)(l.a,Object(i.a)({},n),t)})),Object(f.jsx)(l.a,{component:m})]})})})})})})}),Object(f.jsx)(x,{})]})},D=n(33),R=n(120),z={data:[]};var U=n(34),X=n.n(U),B=n(82),I=n(118),V=n(119),F=function e(){var t=this;Object(V.a)(this,e),this._apiBase="https://data.gov.ru/sites/default/files/opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json",this.getData=Object(I.a)(X.a.mark((function e(){var n,a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))},H=X.a.mark(L),J=X.a.mark(P);function L(){var e,t;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new F,n.prev=1,n.next=4,e.getData();case 4:return t=n.sent,n.next=7,Object(B.a)(E(t));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log("error",n.t0);case 12:case"end":return n.stop()}}),H,null,[[1,9]])}function P(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.b)(y,L);case 2:case"end":return e.stop()}}),J)}var Q=Object(R.a)(),A=[Object(D.a)(Q)].concat(Object(w.a)(window.__REDUX_DEVTOOLS_EXTENSION__?[window.__REDUX_DEVTOOLS_EXTENSION__()]:[])),C=Object(D.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(i.a)(Object(i.a)({},e),{},{data:Object(w.a)(t.payload)});default:return e}}),D.c.apply(void 0,Object(w.a)(A)));Q.run(P);n(215);c.a.render(Object(f.jsx)(s.a,{store:C,children:Object(f.jsx)(r.a,{children:Object(f.jsx)(T,{})})}),document.getElementById("root"))}},[[216,2,3]]]);
//# sourceMappingURL=main.01907885.chunk.js.map