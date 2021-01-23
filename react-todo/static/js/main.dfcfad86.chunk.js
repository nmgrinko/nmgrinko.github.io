(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{41:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(1),c=n.n(a),o=n(16),i=n.n(o),s=(n(41),n(18)),l=n(5),u=n(13),d=n(12),b=n(11),f=(n(48),n(49),function(e){var t=e.toDo,n=e.done;return Object(r.jsxs)("div",{className:"app-header d-flex",children:[Object(r.jsx)("h1",{children:" ToDo List "}),Object(r.jsxs)("h2",{children:[" ",t," more to do, ",n," done "]})]})}),j=n(35),O=function(e){var t=e.classNames,n=e.idListGroup,a=e.children,c=e.changeValueItem,o=t.split(" ")[0];return Object(r.jsx)("li",{className:t,draggable:"true",onDragStart:function(e){e.target.classList.add("selected")},onDragEnd:function(e){e.target.classList.remove("selected")},onDragOver:function(e){e.preventDefault();var t=e.target.closest("#".concat(n)),r=t.querySelector(".selected"),a=e.target;if(r!==a&&a.classList.contains(o)){var c=function(e,t){var n=t.getBoundingClientRect();return e<n.y+n.height/2?t:t.nextElementSibling}(e.clientY,a);c&&r===c.previousElementSibling||r===c||t.insertBefore(r,c)}},onDoubleClick:c,children:a})},p=(n(50),n(51),function(e){var t=e.label,n=e.onToggleImportant,a=e.onToggleDone,c=e.onDelete;return Object(r.jsxs)("span",{className:"todo-list-item",children:[Object(r.jsx)("span",{className:"todo-list-item-label",onClick:a,children:t}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right ",onClick:c,children:"delete"}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-left",onClick:n,children:"!"})]})}),m=(n(52),function(e){var t=e.items,n=e.onToggleImportant,a=e.onToggleDone,c=e.onDelete,o=e.changeValueItem,i="idListGroup",s=t.map((function(e){var t=e.id,s=e.important,u=e.done,d=Object(j.a)(e,["id","important","done"]),b="list-group-item";return s&&(b+=" important"),u&&(b+=" done"),Object(r.jsx)(O,{classNames:b,idListGroup:i,changeValueItem:function(){return o(t)},children:Object(r.jsx)(p,Object(l.a)(Object(l.a)({},d),{},{onToggleImportant:function(){return n(t)},onToggleDone:function(){return a(t)},onDelete:function(){return c(t)}}))},t)}));return Object(r.jsx)("ul",{className:"todo-list list-group",id:i,children:s})}),g=(n(53),function(e){var t=e.onSearchChange,n=void 0===t?function(){}:t,c=Object(a.useState)({term:""}),o=Object(d.a)(c,2),i=o[0],s=o[1];return Object(r.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"Search",value:i.term,onChange:function(e){s({term:e.target.value}),n(e.target.value)}})}),h=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],v=function(e){var t=e.filter,n=e.onFilterChange,a=void 0===n?function(){}:n,c=h.map((function(e){var n=e.name,c=e.label,o="btn "+(n===t?"btn-outline-secondary":"btn-secondary");return Object(r.jsx)("button",{type:"button",onClick:function(){return a(n)},className:o,children:c},n)}));return Object(r.jsx)("div",{className:"btn-group",children:c})},x=(n(54),function(e){var t=e.onItemAdded,n=Object(a.useState)({label:""}),c=Object(d.a)(n,2),o=c[0],i=c[1];return Object(r.jsxs)("form",{className:"bottom-panel d-flex",onSubmit:function(e){e.preventDefault();var n=o.label;i({label:""});var r=t||function(){};n.length>0&&r(n)},children:[Object(r.jsx)("input",{type:"text",className:"form-control new-todo-label",value:o.label,onChange:function(e){i({label:e.target.value})},placeholder:"What needs to be done?"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:" Add "})]})}),E=(n(55),Object(b.b)((function(e){return{loading:e.loading}}),null)((function(e){return e.loading?Object(r.jsx)("div",{className:"lds-css",children:Object(r.jsxs)("div",{className:"lds-double-ring",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}):null}))),T={GET_TODO:function(){return{type:"GET_TODO"}},PUT_TODO:function(e){return{type:"PUT_TODO",state:e}},SET_ITEM:function(e){return{type:"SET_ITEM",items:e}},RECEIV_FILTER:function(e){return{type:"RECEIV_FILTER",filter:e}},RECEIV_SEARCH:function(e){return{type:"RECEIV_SEARCH",search:e}}},D=Object(b.b)((function(e){return{state:e}}),T)((function(e){var t=e.GET_TODO,n=e.PUT_TODO,c=e.SET_ITEM,o=e.RECEIV_FILTER,i=e.RECEIV_SEARCH,b=e.state,j=e.state,O=j.items,p=j.filter,h=j.search,T=Object(a.useState)(!0),D=Object(d.a)(T,2),I=D[0],C=D[1],S=function(e,t,n){var r=e.findIndex((function(e){return e.id===t})),a=!e[r][n],c=Object(l.a)(Object(l.a)({},e[r]),{},Object(s.a)({},n,a));return[].concat(Object(u.a)(e.slice(0,r)),[c],Object(u.a)(e.slice(r+1)))},_=function(e){return{id:Date.now(),label:e,important:!1,done:!1}},y=O.filter((function(e){return e.done})).length,R=O.length-y,w=function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))}(function(e,t){return"all"===t?e:"active"===t?e.filter((function(e){return!e.done})):"done"===t?e.filter((function(e){return e.done})):void 0}(O,p),h);return Object(a.useEffect)((function(){b.server&&n(b)})),I&&(t(),C(!I)),Object(r.jsxs)("div",{className:"todo-app",children:[Object(r.jsx)(f,{toDo:R,done:y}),Object(r.jsxs)("div",{className:"search-panel d-flex",children:[Object(r.jsx)(g,{onSearchChange:function(e){i(e)}}),Object(r.jsx)(v,{filter:p,onFilterChange:function(e){o(e)}})]}),Object(r.jsx)(m,{items:w,onToggleImportant:function(e){c(function(t){return S(t.items,e,"important")}(b))},onToggleDone:function(e){c(function(t){return S(t.items,e,"done")}(b))},onDelete:function(e){c(function(t){var n=t.items.findIndex((function(t){return t.id===e}));return[].concat(Object(u.a)(t.items.slice(0,n)),Object(u.a)(t.items.slice(n+1)))}(b))},changeValueItem:function(e){var t=document.querySelector(".new-todo-label"),n=O.find((function(t){return t.id===e})).label;t.value=n}}),Object(r.jsx)(x,{onItemAdded:function(e){c(function(t){var n=_(e);return[].concat(Object(u.a)(t.items),[n])}(b))}}),Object(r.jsx)(E,{})]})})),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},C=n(10),S=n(34),_=n(8),y=n.n(_),R=n(15),w=n(33),N=n.n(w).a.create({baseURL:"https://react-todo-21012021-default-rtdb.europe-west1.firebasedatabase.app/todo-list.json",responseType:"json"}),L=y.a.mark(G),k=y.a.mark(P),V=y.a.mark(U),F=y.a.mark(M),A=y.a.mark(B);function G(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.get("/");case 3:return e=t.sent,t.next=6,Object(R.b)({type:"TODO_RECEIVED",data:Object(l.a)({},e.data.state)});case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),alert("Server is not available! Please update page :)"),console.log("Server is not available!",t.t0);case 12:case"end":return t.stop()}}),L,null,[[0,8]])}function P(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.c)("GET_TODO",G);case 2:case"end":return e.stop()}}),k)}function U(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.put("/",{state:e.state});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("Server is not update!",t.t0);case 8:case"end":return t.stop()}}),V,null,[[0,5]])}function M(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.c)("PUT_TODO",U);case 2:case"end":return e.stop()}}),F)}function B(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)([P(),M()]);case 2:case"end":return e.stop()}}),A)}var H={items:[],filter:"all",search:"",loading:!1},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TODO":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case"PUT_TODO":return e;case"TODO_RECEIVED":return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.data),{},{loading:!1,server:!0});case"SET_ITEM":return Object(l.a)(Object(l.a)({},e),{},{items:t.items});case"RECEIV_FILTER":return Object(l.a)(Object(l.a)({},e),{},{filter:t.filter});case"RECEIV_SEARCH":return Object(l.a)(Object(l.a)({},e),{},{search:t.search});default:return e}},J=Object(S.a)(),W=Object(C.d)(q,Object(C.a)(J));J.run(B);var Y=W;i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b.a,{store:Y,children:Object(r.jsx)(D,{})})}),document.getElementById("root")),I()}},[[75,1,2]]]);
//# sourceMappingURL=main.dfcfad86.chunk.js.map