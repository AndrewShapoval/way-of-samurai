(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[0],{104:function(e,t,n){e.exports=n.p+"static/media/noName.7bce85a4.png"},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var r=n(129),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"31e30b18-0c44-4833-ae3f-a51d42aec9c6"}}),o={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},deleteUnFollow:function(e){return a.delete("follow/".concat(e))},postFollow:function(e){return a.post("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},c={me:function(){return a.get("/auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("/auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("/auth/login")}}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(40),a=n(9),o={dialogs:[{id:1,name:"Andrew"},{id:2,name:"Sveta"},{id:3,name:"Serg"},{id:4,name:"Alecs"},{id:5,name:"Tony"}],messages:[{id:1,message:"Hi!!!"},{id:2,message:"How are you???"},{id:3,message:"Cool!!!"}]},u=function(e){return{type:"ADD-MESSAGE",newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={id:4,message:t.newMessageText};return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},130:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1hlGu"}},131:function(e,t,n){e.exports=n.p+"static/media/preloader.409c5930.svg"},15:function(e,t,n){e.exports={nav:"Navbar_nav__2nZvc",item:"Navbar_item__3wxZ8",active:"Navbar_active__2o4Oe"}},161:function(e,t,n){e.exports=n(286)},166:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=(n(94),n(60)),u=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(30),s=n(31),i=n(32),l=n(33),f=n(8),p=(n(166),n(15)),m=n.n(p),d=n(11),g=function(){return a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/profile",activeClassName:m.a.active},"Profile")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/dialogs",activeClassName:m.a.active},"Messages")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/News",activeClassName:m.a.active},"News")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/Music",activeClassName:m.a.active},"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/Settings",activeClassName:m.a.active},"Settings")),a.a.createElement("div",{className:m.a.item},a.a.createElement(d.b,{to:"/Users",activeClassName:m.a.active},"Users")))},h=n(13),E=n(7),v=n.n(E),b=n(14),O=n(40),w=n(9),S=n(12),_={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followIsProgress:[]},P=function(e,t,n){return e.map((function(e){return e.id===t?Object(w.a)({},e,{},n):e}))},C=function(e){return{type:"FOLLOW",userId:e}},j=function(e){return{type:"UN_FOLLOW",userId:e}},y=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},T=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},N=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},U=function(){var e=Object(b.a)(v.a.mark((function e(t,n,r,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(N(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(N(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(w.a)({},e,{users:P(e.users,t.userId,{followed:!0})});case"UN_FOLLOW":return Object(w.a)({},e,{users:P(e.users,t.userId,{followed:!1})});case"SET_USERS":return Object(w.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(w.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(w.a)({},e,{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(w.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(w.a)({},e,{followIsProgress:t.isFetching?[].concat(Object(O.a)(e.followIsProgress),[t.userId]):e.followIsProgress.filter((function(e){return e!==t.userId}))});default:return e}},k=n(130),x=n.n(k),A=n(104),F=n.n(A),L=n(135),R=n(64),z=n.n(R),G=function(e){for(var t=e.totalUsersCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,c=e.portionSize,s=void 0===c?20:c,i=Math.ceil(t/n),l=[],f=1;f<=i;f++)l.push(f);var p=Math.ceil(i/s),m=Object(r.useState)(1),d=Object(L.a)(m,2),g=d[0],h=d[1],E=(g-1)*s+1,v=g*s;return a.a.createElement("div",{className:z.a.paginator},a.a.createElement("button",{onClick:function(){h(g-1)},disabled:1===g},"Prev"),l.filter((function(e){return e>=E&&e<=v})).map((function(e){return a.a.createElement("span",{className:o===e?z.a.selectedPage:z.a.pageNumber,onClick:function(){u(e)}},e," ")})),a.a.createElement("button",{onClick:function(){h(g+1)},disabled:p===g},"Next"))},D=function(e){return a.a.createElement("div",null,a.a.createElement(G,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.users.map((function(t){return a.a.createElement("div",{key:t.id},a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(d.b,{to:"/profile"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:F.a,className:x.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:e.followIsProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollow(t.id)}},"Un follow"):a.a.createElement("button",{disabled:e.followIsProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"u.location.country"),a.a.createElement("div",null,"u.location.city"))))})))},M=n(36),H=n(6),W=n(132),B=Object(W.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Z=function(e){return e.usersPage.pageSize},V=function(e){return e.usersPage.totalUsersCount},q=function(e){return e.usersPage.currentPage},J=function(e){return e.usersPage.isFetching},K=function(e){return e.usersPage.followIsProgress},X=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(M.a,null):null,a.a.createElement(D,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,followIsProgress:this.props.followIsProgress}))}}]),n}(a.a.Component),Q=Object(H.d)(Object(h.b)((function(e){return{users:B(e),pageSize:Z(e),totalUsersCount:V(e),currentPage:q(e),isFetching:J(e),followIsProgress:K(e)}}),{follow:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=S.c.postFollow.bind(S.c),U(n,e,r,C);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=S.c.deleteUnFollow.bind(S.c),U(n,e,r,j);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:y,getUsers:function(e,t){return function(){var n=Object(b.a)(v.a.mark((function n(r,a){var o;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(T(!0)),r(y(e)),n.next=4,S.c.getUsers(e,t);case 4:o=n.sent,r(T(!1)),r({type:"SET_USERS",users:o.items}),r({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:o.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}))(X),Y=n(89),$=n.n(Y),ee=function(e){return a.a.createElement("header",{className:$.a.header},a.a.createElement("div",{className:$.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(d.b,{to:"/login"},"Login")))},te=n(41),ne={id:null,email:null,login:null,isFetching:!1,isAuth:!1},re=function(e,t,n,r){return{type:"AUTH/SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:r}}},ae=function(){return function(){var e=Object(b.a)(v.a.mark((function e(t){var n,r,a,o,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,u=r.email,t(re(a,u,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET_USER_DATA":return Object(w.a)({},e,{},t.payload);default:return e}},ue=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(ee,this.props)}}]),n}(a.a.Component),ce=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(b.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(re(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ue),se=n(126),ie=n(29),le=n(81),fe=n(49),pe=n.n(fe),me=Object(se.a)({form:"Login"})((function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit},Object(ie.c)("Email","email",[le.b],ie.a),Object(ie.c)("Password","password",[le.b],ie.a,{type:"password"}),Object(ie.c)(null,"rememberMe",null,ie.a,{type:"checkbox"},"Remember me"),e.error&&a.a.createElement("div",{className:pe.a.formSummaryError},e.error),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),de=Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(b.a)(v.a.mark((function r(a){var o,u;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(ae()):(u=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(te.a)("Login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(f.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(me,{onSubmit:function(t){console.log(t),e.login(t.email,t.password,t.rememberMe)}}))})),ge={initialized:!1},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(w.a)({},e,{initialized:!0});default:return e}},Ee=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(M.a,null)},a.a.createElement(e,t))}},ve=a.a.lazy((function(){return n.e(4).then(n.bind(null,294))})),be=a.a.lazy((function(){return n.e(3).then(n.bind(null,293))})),Oe=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(ce,null),a.a.createElement(g,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(f.b,{path:"/profile:userId?",render:Ee(be)}),a.a.createElement(f.b,{path:"/Dialogs",render:Ee(ve)}),a.a.createElement(f.b,{path:"/Users",render:function(){return a.a.createElement(Q,null)}}),a.a.createElement(f.b,{path:"/Login",render:function(){return a.a.createElement(de,null)}}))):a.a.createElement(M.a,null)}}]),n}(a.a.Component),we=Object(H.d)(Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ae());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Oe),Se=n(92),_e=n(125),Pe=n(134),Ce=n(127),je=Object(H.c)({profilePage:Se.b,dialogsPage:_e.b,usersPage:I,auth:oe,app:he,form:Ce.a}),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d,Te=Object(H.e)(je,ye(Object(H.a)(Pe.a)));window._store_=Te;var Ne=Te;u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d.a,null,a.a.createElement(h.a,{store:Ne},a.a.createElement(we,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var r=n(66),a=n(0),o=n.n(a),u=n(49),c=n.n(u),s=n(84),i=function(e){e.input;var t=e.meta,n=Object(r.a)(e,["input","meta"]),a=t.touched&&t.error;return o.a.createElement("div",{className:"".concat(c.a.formControl," ").concat(a?c.a.error:"")},o.a.createElement("div",null,n.children),a&&o.a.createElement("span",null,t.error))},l=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(i,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(i,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r,a,u){return o.a.createElement("div",null,o.a.createElement(s.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",u)}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(131),u=n.n(o),c=function(){return a.a.createElement("div",{style:{backgroundColor:"white",position:"absolute"}},a.a.createElement("img",{src:u.a}))}},49:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1gWiK",error:"FormsControls_error__1QhOD",formSummaryError:"FormsControls_formSummaryError__3_O4V"}},64:function(e,t,n){e.exports={paginator:"Paginator_paginator__Laqfv",pageNumber:"Paginator_pageNumber__2u3Bc",selectedPage:"Paginator_selectedPage__wFc5n"}},81:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},89:function(e,t,n){e.exports={header:"Header_header__2GBsf",loginBlock:"Header_loginBlock__32f8Z"}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return g}));var r=n(7),a=n.n(r),o=n(14),u=n(40),c=n(9),s=n(12),i={posts:[{id:1,message:"How are you",likesCount:10},{id:2,message:"Well",likesCount:23}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:3,message:t.newPostText,likesCount:0};return Object(c.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(c.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(c.a)({},e,{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(c.a)({},e,{profile:Object(c.a)({},e.profile,{photos:t.photos})});default:return e}}},94:function(e,t,n){}},[[161,1,2]]]);
//# sourceMappingURL=main.f991378f.chunk.js.map