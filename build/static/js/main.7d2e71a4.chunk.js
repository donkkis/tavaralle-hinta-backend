(this["webpackJsonptavaralle-hinta"]=this["webpackJsonptavaralle-hinta"]||[]).push([[0],{145:function(e,a,t){},213:function(e,a,t){e.exports=t(345)},345:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(66),l=t.n(c),i=t(63),u=t(45),m=t.n(u),o=t(101),s=t(368),p=t(370),E=t(377),h=t(380),f=t(62),d=t(193),v=t.n(d),y=(t(145),t(85)),b=t.n(y),g=function(e){var a=e.query,t=e.setQuery,c=(e.classes,Object(n.useState)(null)),l=Object(i.a)(c,2),u=l[0],d=l[1],y=Object(n.useState)(null),g=Object(i.a)(y,2),x=g[0],j=g[1],O=function(){var e=Object(o.a)(m.a.mark((function e(a){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("/api","/count"));case 2:return t=e.sent,e.next=5,b.a.get("".concat("/api","/lastinsert"));case 5:n=e.sent,d(t.data),j(n.data);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t(""),O()}),[]),r.a.createElement("div",{className:"home__body"},r.a.createElement(s.a,null,r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,id:"search-label",xs:12,align:"center"},r.a.createElement("h1",null,"K\xe4ytettyjen puhelinten hintatiedot"),'Kokeile esim. hakuja: "Samsung", "Huawei", "iPhone"'),r.a.createElement(p.a,{item:!0,xs:12,align:"center"},r.a.createElement("form",null,r.a.createElement("div",{className:"search__input"},r.a.createElement(v.a,null),r.a.createElement(h.a,{id:"outlined-search",label:"Search",type:"search",variant:"outlined",fullWidth:!0,value:a,onChange:function(e){return t(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"search__buttons"},r.a.createElement(f.b,{to:"/search/".concat(a),style:{textDecoration:"none"}},r.a.createElement(E.a,{id:"search-button",variant:"contained",color:"primary",type:"submit"},"Search")),r.a.createElement(E.a,{id:"some-button",variant:"contained",color:"primary",onClick:function(){return alert("Move along, nothing to see here.")}},"UselessFeature")))),r.a.createElement(p.a,{item:!0,xs:12,align:"center"},u&&x&&r.a.createElement(r.a.Fragment,null,"Tietokannassa ",u," kohdetta, p\xe4ivitetty viimeksi: ",x.created)))))},x=t(141),j=t(194),O=t.n(j),_={fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"},M=r.a.memo((function(e){var a=e.phones,t=e.execQuery;return a?r.a.createElement("div",{style:_},r.a.createElement("h3",null,"Summary: ",t," "),a.length>=250?r.a.createElement("p",null,"Count: ",a.length,"+"):r.a.createElement("p",null,"Count: ",a.length),r.a.createElement("p",null,"Mean Price: ",O()(a,"price")),r.a.createElement("p",null,"Min Price: ",Math.min.apply(Math,Object(x.a)(a.filter((function(e){return e.price})).map((function(e){return e.price}))))),r.a.createElement("p",null,"Max Price: ",Math.max.apply(Math,Object(x.a)(a.filter((function(e){return e.price})).map((function(e){return e.price})))))):r.a.createElement("div",null,"Loading...")})),S=t(379),w=t(381),k=t(385),C=t(388),Q=t(384),L=t(375),N=function(e){var a=e.phones;if(!a)return r.a.createElement("div",null,"Loading...");return r.a.createElement("div",null,r.a.createElement(S.a,{containerComponent:r.a.createElement(w.a,{labels:function(e){var a=e.datum;return"".concat(Math.round(a.x,2),", ").concat(Math.round(a.y,2))}}),theme:k.a.material,height:250,animate:{duration:1500}},r.a.createElement(C.a,{label:"Price (eur)",axisLabelComponent:r.a.createElement(Q.a,{dy:25})}),r.a.createElement(C.a,{dependentAxis:!0}),r.a.createElement(L.a,{data:a.map((function(e){return{x:e.price}}))})))},q=t(382),P=t(110),D=t.n(P),A=function(e){var a=e.datum;return"".concat(Math.round(a.x,2),", ").concat(Math.round(a.y,2))},F=function(e){var a=e.phones;if(!a)return r.a.createElement("div",null,"Loading...");var t=a.filter((function(e){return e.price})),n=t.map((function(e){return new Date(e.time_stamp)})),c=t.map((function(e){return e.price})),l=D()(n,c).map((function(e){return{x:e[0],y:e[1]}}));return r.a.createElement("div",null,r.a.createElement(S.a,{scale:{x:"time"},containerComponent:r.a.createElement(w.a,{labels:A}),theme:k.a.material,height:250,animate:{duration:1500}},r.a.createElement(C.a,{label:"Listing date",axisLabelComponent:r.a.createElement(Q.a,{dy:25})}),r.a.createElement(C.a,{dependentAxis:!0}),r.a.createElement(q.a,{data:l})))},T=t(383),G=function(e){var a=e.phones;if(!a)return r.a.createElement("div",null,"Loading...");var t,n=a.filter((function(e){return e.price})),c=n.map((function(e){return new Date(e.time_stamp).getTime()/864e5})),l=new Array(c.length).fill((new Date).getTime()/864e5),i=(t=c,l.map((function(e,a){return e-t[a]}))),u=n.map((function(e){return e.price})),m=D()(i,u).map((function(e){return{x:e[0],y:e[1]}}));return r.a.createElement(S.a,{theme:k.a.material,height:250},r.a.createElement(C.a,{label:"Listing age (d)",axisLabelComponent:r.a.createElement(Q.a,{dy:25})}),r.a.createElement(C.a,{dependentAxis:!0}),r.a.createElement(T.a,{size:2,data:m}))},I=t(372),J=t(373),K=r.a.memo((function(e){var a=e.classes,t=e.phones,n=e.execQuery;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{item:!0,sm:6,xs:12},r.a.createElement(J.a,{className:a.paper,elevation:3},r.a.createElement(M,{phones:t,execQuery:n}))),r.a.createElement(p.a,{item:!0,sm:6,xs:12},r.a.createElement(J.a,{className:a.paper,elevation:3},r.a.createElement(N,{phones:t}))),r.a.createElement(p.a,{item:!0,sm:6,xs:12},r.a.createElement(J.a,{className:a.paper,elevation:3},r.a.createElement(F,{phones:t}))),r.a.createElement(p.a,{item:!0,sm:6,xs:12},r.a.createElement(J.a,{className:a.paper,elevation:3},r.a.createElement(G,{phones:t})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(I.a,null)))})),U=function(e){var a=e.query,t=e.setQuery,n=e.fetchPhones;e.phones;return r.a.createElement(p.a,{item:!0,xs:12,align:"left"},r.a.createElement("form",{onSubmit:n},r.a.createElement("span",{className:"search__input__inline"},r.a.createElement(h.a,{id:"outlined-search",label:"Search",type:"search",variant:"outlined",value:a,onChange:function(e){return t(e.target.value)}})),r.a.createElement("span",{className:"search__buttons__inline"},r.a.createElement(f.b,{to:"/search/".concat(a),style:{textDecoration:"none"}},r.a.createElement(E.a,{id:"search-button",variant:"contained",color:"primary",type:"submit"},"Search")))))},z=t(15),B=function(e){var a=e.query,t=e.setQuery,c=e.classes,l=Object(n.useState)(null),u=Object(i.a)(l,2),E=u[0],h=u[1],f=(Object(z.f)(),Object(z.g)().query),d=function(){var e=Object(o.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a&&a.preventDefault(),e.next=3,b.a.get("".concat("/api","/search/").concat(f));case 3:t=e.sent,h(t.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d(),t(f)}),[f]),r.a.createElement(s.a,null,r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(U,{query:a,setQuery:t,phones:E,fetchPhones:d}),r.a.createElement(K,{execQuery:f,phones:E,classes:c})))},H=t(374),V=Object(H.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary,height:"90%"},searchbar:{align:"center"}}})),W=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],l=V();return r.a.createElement(f.a,null,r.a.createElement(z.c,null,r.a.createElement(z.a,{path:"/search/:query"},r.a.createElement(B,{query:t,setQuery:c,classes:l})),r.a.createElement(z.a,{path:"/"},r.a.createElement(g,{query:t,setQuery:c,classes:l}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root"))}},[[213,1,2]]]);
//# sourceMappingURL=main.7d2e71a4.chunk.js.map