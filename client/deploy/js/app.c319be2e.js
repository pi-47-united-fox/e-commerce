(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(s=!1)}s&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},o={app:0},r={app:0},n=[];function i(t){return c.p+"js/"+({cart:"cart",products:"products",wishlists:"wishlists"}[t]||t)+"."+{cart:"7b4f2ec0",products:"2398a52c",wishlists:"eaac2402"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={cart:1,products:1,wishlists:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var s="css/"+({cart:"cart",products:"products",wishlists:"wishlists"}[t]||t)+"."+{cart:"d8c60411",products:"f5dd515c",wishlists:"acf2168d"}[t]+".css",r=c.p+s,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var l=n[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===r))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===s||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||r,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete o[t],m.parentNode.removeChild(m),a(n)},m.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(m)})).then((function(){o[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=n);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",d.name="ChunkLoadError",d.type=s,d.request=o,a[1](d)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"013b":function(t,e,a){"use strict";var s=a("e9fb"),o=a.n(s);o.a},"034f":function(t,e,a){"use strict";var s=a("85ec"),o=a.n(s);o.a},"0697":function(t,e,a){"use strict";var s=a("113c"),o=a.n(s);o.a},"113c":function(t,e,a){},"32c2":function(t,e,a){},3603:function(t,e,a){t.exports=a.p+"img/wishlist-logo.0bad133d.webp"},3682:function(t,e,a){t.exports=a.p+"img/cart-logo.cbd2a9f8.png"},4655:function(t,e,a){"use strict";var s=a("32c2"),o=a.n(s);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s,o,r=a("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[1==t.loginForm?s("LoginForm",{on:{close:t.toogleLoginForm}}):t._e(),t._m(0),s("nav",{staticClass:"navbar navbar-expand-lg  navbar-light bg-light",class:{"sticky-top":0==t.loginForm}},[s("div",{staticClass:"container"},[t._m(1),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link menu",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage("Home")}}},[t._v(" Home ")])]),s("li",{staticClass:"nav-item "},[s("a",{staticClass:"nav-link menu",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage("Products")}}},[t._v("All Products")])]),s("li",{staticClass:"nav-item dropdown",attrs:{href:"#"}},[s("a",{staticClass:"nav-link menu dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Categories ")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},t._l(t.categories,(function(e,a){return s("div",{key:a,on:{click:function(a){return a.preventDefault(),t.productPage(e.name)}}},[s("div",{staticClass:"dropdown-divider"}),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v(t._s(e.name))])])})),0)])]),s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage("Wishlists")}}},[s("a",{staticClass:"d-flex",staticStyle:{"background-color":"#ffc038","border-radius":"10px","max-width":"90px"},attrs:{href:"#","data-toggle":"tooltip","data-placement":"top",title:"Your Wishlist"}},[s("img",{attrs:{src:a("3603"),width:"50px",alt:""}}),s("div",{staticClass:"bg-dark text-white pl-3 pr-3 pt-3",staticStyle:{"border-radius":"10px"}},[t._v(" "+t._s(t.wishlistsCount)+" ")])])]),s("li",{staticClass:"nav-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage("Cart")}}},[s("a",{staticClass:"d-flex ",staticStyle:{"background-color":"#ffc038","border-radius":"10px","max-width":"90px"},attrs:{href:"#"}},[s("img",{attrs:{src:a("3682"),width:"50px",alt:""}}),s("div",{staticClass:"bg-dark text-white pl-3 pr-3 pt-3",staticStyle:{"border-radius":"10px"}},[t._v(" "+t._s(t.cartCount)+" ")])])]),0==t.isLoggedIn?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link menu  pl-4 pr-4",attrs:{href:"#"},on:{click:t.toogleLoginForm}},[s("h5",[t._v("Login")])])]):t._e(),1==t.isLoggedIn?s("li",{staticClass:"dropdown",attrs:{href:"#"}},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.email)+" ")]),s("div",{staticClass:"dropdown-menu ml-3",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")])])]):t._e()]),s("form",{staticClass:"form-inline my-2 my-lg-0",on:{submit:function(t){t.preventDefault()}}})])])]),s("router-view"),t._m(2)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row  justify-content-between"},[s("img",{staticClass:"col-2 ",attrs:{src:a("7eba"),width:"130px",alt:""}}),s("h3",{staticClass:"col-8 align-self-center "},[t._v("Here is where you find your stuff")]),s("h3",{staticClass:"col-2 align-self-center "})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"border mt-5 p-4 text-white"},[t._v(" Muhammad Fauzan Adhim - Hacktiv8 Student ")])])}],c=(a("4160"),a("159b"),a("ade3")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pop-up"},[a("div",{staticClass:"container"},[a("div",{staticClass:"card pop-up-form p-5"},[a("div",{staticClass:"row align-items-center",attrs:{id:"login-row"}},[1==t.login?a("div",{staticClass:"col-md-12",attrs:{id:"login-column"}},[t.errMessage.length>1?a("div",{staticClass:"alert alert-warning alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" "+t._s(t.errMessage)+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.closeAlert}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e(),a("div",{staticClass:"col-md-12",attrs:{id:"login-box"}},[a("form",{staticClass:"form",attrs:{id:"login-form",action:"",method:"post"},on:{submit:function(t){t.preventDefault()}}},[a("h3",{staticClass:"text-center text-orange"},[t._v("Login")]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-orange",attrs:{for:"email"}},[t._v("Email :")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.emailFormLogin,expression:"emailFormLogin"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email-login"},domProps:{value:t.emailFormLogin},on:{input:function(e){e.target.composing||(t.emailFormLogin=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-orange",attrs:{for:"password"}},[t._v("Password :")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordFormLogin,expression:"passwordFormLogin"}],staticClass:"form-control",attrs:{type:"password",name:"password",id:"password-login"},domProps:{value:t.passwordFormLogin},on:{input:function(e){e.target.composing||(t.passwordFormLogin=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn btn-orange btn-md mr-1",attrs:{value:"Login"},on:{click:function(e){return e.preventDefault(),t.loginProcess(e)}}}),a("input",{staticClass:"btn btn-outline-danger btn-md",attrs:{type:"submit",value:"Cancel"},on:{click:function(e){return e.preventDefault(),t.closeForm(e)}}}),a("br"),t._v(" Dont have any ? "),a("a",{staticClass:"text-orange",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toogleLogin(e)}}},[t._v("Register here")])])])])]):t._e()]),0==t.login?a("div",{staticClass:"row align-items-center",attrs:{id:"login-row"}},[a("div",{staticClass:"col-md-12",attrs:{id:"login-column"}},[t.errMessage.length>1?a("div",{staticClass:"alert alert-warning alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" "+t._s(t.errMessage)+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.closeAlert}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e(),a("div",{staticClass:"col-md-12",attrs:{id:"login-box"}},[a("form",{staticClass:"form",attrs:{id:"login-form",action:"",method:"post"},on:{submit:function(t){t.preventDefault()}}},[a("h3",{staticClass:"text-center text-orange"},[t._v("Register")]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-orange",attrs:{for:"email"}},[t._v("Email :")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.emailFormRegist,expression:"emailFormRegist"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email-login"},domProps:{value:t.emailFormRegist},on:{input:function(e){e.target.composing||(t.emailFormRegist=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-orange",attrs:{for:"password"}},[t._v("Password :")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordFormRegist,expression:"passwordFormRegist"}],staticClass:"form-control",attrs:{type:"password",name:"password",id:"password-login"},domProps:{value:t.passwordFormRegist},on:{input:function(e){e.target.composing||(t.passwordFormRegist=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn btn-orange btn-md mr-1",attrs:{type:"submit",value:"Register"},on:{click:function(e){return e.preventDefault(),t.registProcess(e)}}}),a("input",{staticClass:"btn btn-outline-danger btn-md",attrs:{type:"submit",value:"Cancel"},on:{click:function(e){return e.preventDefault(),t.closeForm(e)}}}),a("br"),t._v(" Already have one ? "),a("a",{staticClass:"text-orange",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toogleLogin(e)}}},[t._v("Sign in here")])])])])])]):t._e()])])])},u=[],d=a("aa22"),m={name:"LoginForm",data:function(){return{emailFormLogin:"",passwordFormLogin:"",emailFormRegist:"",passwordFormRegist:"",login:!0,errMessage:""}},methods:{closeAlert:function(){this.errMessage=""},toogleLogin:function(){this.login=!this.login},loginProcess:function(){var t=this;console.log(this.emailFormLogin,this.passwordFormLogin),d["a"].post("login",{email:this.emailFormLogin,password:this.passwordFormLogin}).then((function(e){var a=e.data;localStorage.setItem("access_token",a.access_token),console.log(a),t.$store.commit("TOOGLE_LOGINFORM"),t.$store.commit("TOOGLE_LOGGEDIN"),t.$store.dispatch("fetch_all")})).catch((function(e){console.log(e),e.response&&(t.errMessage=e.response.data.msg)}))},registProcess:function(){var t=this;console.log(this.emailFormRegist,this.passwordFormRegist),d["a"].post("register",{email:this.emailFormRegist,password:this.passwordFormRegist}).then((function(e){var a=e.data;console.log(a),t.errMessage="Account created Successfully"})).catch((function(e){console.log(e),e.response&&(t.errMessage=e.response.data.msg)}))},closeForm:function(){this.$store.commit("TOOGLE_LOGINFORM")}},computed:{}},g=m,p=(a("013b"),a("2877")),f=Object(p["a"])(g,l,u,!1,null,null,null),h=f.exports,v={name:"App",components:{LoginForm:h},data:function(){return{}},methods:{toogleLoginForm:function(){this.$store.commit("TOOGLE_LOGINFORM")},changePage:function(t){console.log(t),this.$router.push({name:t})},productPage:function(t){this.$router.push({path:"products",query:{category:t}})},logout:function(){localStorage.clear(),this.$store.commit("FETCH_WISHLISTS",[]),this.$store.commit("FETCH_CART",[]),this.$store.commit("TOOGLE_LOGGEDIN",[]),this.$router.push({name:"Home"})}},computed:(s={email:function(){return this.$store.state.email},wishlistsCount:function(){return this.$store.state.wishlists.length},cartCount:function(){var t=0;return this.$store.state.cart.forEach((function(e){t+=e.quantity})),t}},Object(c["a"])(s,"email",(function(){return this.$store.state.userEmail})),Object(c["a"])(s,"loginForm",(function(){return this.$store.state.loginForm})),Object(c["a"])(s,"isLoggedIn",(function(){return this.$store.state.isLoggedIn})),Object(c["a"])(s,"categories",(function(){return this.$store.state.categories})),s),created:function(){localStorage.access_token?(this.$store.dispatch("fetch_all"),this.$store.commit("TOOGLE_LOGGEDIN")):(this.$store.dispatch("fetch_products"),this.$store.dispatch("fetch_categories"),this.$store.dispatch("fetch_banners"))}},b=v,_=(a("034f"),Object(p["a"])(b,n,i,!1,null,null,null)),C=_.exports,w=(a("b0c0"),a("d3b7"),a("8c4f")),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("Banner"),a("hr"),a("section",[a("div",{staticClass:"row category-title",on:{click:function(e){return t.changePage("fashion")}}},[a("h1",{staticClass:"text-left ml-3"},[t._v("Fashion")])]),a("hr"),a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-9"},[a("CarouselProduct",{attrs:{categoryName:"Fashion"}})],1)]),a("hr"),a("h1",{staticClass:"text-left category-title",on:{click:function(e){return t.changePage("electronics")}}},[t._v("Electronics")]),a("hr"),a("div",{staticClass:"row"},[t._m(1),a("div",{staticClass:"col-9"},[a("CarouselProduct",{attrs:{categoryName:"Elektronik"}})],1)]),a("hr"),a("h1",{staticClass:"text-left category-title",on:{click:function(e){return t.changePage("hobby")}}},[t._v("Hobbies")]),a("hr"),a("div",{staticClass:"row"},[t._m(2),a("div",{staticClass:"col-9"},[a("CarouselProduct",{attrs:{categoryName:"Hobby"}})],1)])])],1)])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-3 "},[a("img",{attrs:{src:"https://image.freepik.com/free-vector/fashion-illustration-with-female-model_23-2148211619.jpg",height:"300px",width:"100%",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-3 "},[a("img",{attrs:{src:"https://image.freepik.com/free-vector/colorful-garget-icons_23-2147515956.jpg",height:"300px",width:"100%",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-3 "},[a("img",{attrs:{src:"https://image.freepik.com/free-vector/colorful-garget-icons_23-2147515956.jpg",height:"300px",width:"100%",alt:""}})])}],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("carousel",{attrs:{autoplay:!0,perPage:1}},t._l(t.banners,(function(t,e){return a("slide",{key:e},[a("img",{staticClass:"banner-img d-block w-100",attrs:{src:t.image_url,alt:"..."}})])})),1)},L=[],F=a("0a63"),O={name:"Banner",components:{Carousel:F["Carousel"],Slide:F["Slide"]},computed:{banners:function(){return this.$store.state.banners}}},k=O,S=(a("f230"),Object(p["a"])(k,x,L,!1,null,null,null)),T=S.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("carousel",{attrs:{autoplay:!0,perPage:3}},t._l(t.filteredProduct,(function(e,s){return a("slide",{key:s},[a("div",{staticClass:"col"},[a("div",{staticClass:"item-box-blog"},[a("div",{staticClass:"item-box-blog-image"},[a("div",{staticClass:"item-box-blog-date bg-blue-ui white"},[a("span",{staticClass:"mon"},[t._v("Stock: "+t._s(e.stock))])]),a("figure",[a("img",{staticStyle:{"max-height":"190px"},attrs:{alt:"",src:e.image_url,width:"190px"}})])]),a("div",{staticClass:"item-box-blog-body"},[a("div",{staticClass:"item-box-blog-heading"},[a("h5",[t._v(t._s(e.name))])]),a("div",{staticClass:"item-box-blog-text"},[a("p",[t._v("Rp. "+t._s(e.price.toLocaleString("id")))])]),a("div",{staticClass:"d-flex"},[a("a",{staticClass:"btn white wishlist",attrs:{href:"#",tabindex:"0"},on:{click:function(a){return a.preventDefault(),t.addWishlist(e.id)}}}),a("a",{staticClass:"btn bg-blue-ui white read",attrs:{href:"#",tabindex:"0"},on:{click:function(a){return a.preventDefault(),t.addCart(e.id)}}},[t._v("Add to cart")])])])])])])})),1)],1)},P=[],$=(a("4de4"),a("fb6a"),{name:"product-carousel",props:["categoryName"],components:{Carousel:F["Carousel"],Slide:F["Slide"]},methods:{addWishlist:function(t){var e=this;localStorage.access_token?d["a"].post("wishlist",{productId:t},{headers:{access_token:localStorage.access_token}}).then((function(t){var a=t.data;console.log(a),e.$store.dispatch("fetch_wishlists")})).catch((function(t){console.log(t.response),t.response&&e.$store.commit("SET_ERRMSG",t.response.data.msg)})):this.$store.commit("TOOGLE_LOGINFORM")},addCart:function(t){var e=this;localStorage.access_token?d["a"].post("cart",{productId:t},{headers:{access_token:localStorage.access_token}}).then((function(t){var a=t.data;console.log(a),e.$store.dispatch("fetch_cart")})).catch((function(t){console.log(t.response),t.response&&e.$store.commit("SET_ERRMSG",t.response.data.msg)})):this.$store.commit("TOOGLE_LOGINFORM")}},computed:{filteredProduct:function(){var t=this,e=this.$store.state.categories.filter((function(e){return e.name==t.categoryName})),a=[];if(e[0]){var s=e[0].id;a=this.$store.state.products.filter((function(t){return t.CategoryId==s}))}return a.length>6&&(a=a.slice(0,6)),a}}}),I=$,G=(a("0697"),Object(p["a"])(I,R,P,!1,null,"1e9c120e",null)),D=G.exports,M={name:"Home",components:{Banner:T,CarouselProduct:D},methods:{changePage:function(t){console.log(t)}}},N=M,j=(a("4655"),Object(p["a"])(N,E,y,!1,null,"64514ba8",null)),H=j.exports,A=a("2f62");r["a"].use(A["a"]);var W=new A["a"].Store({state:(o={wishlists:[],cart:[],isLoggedIn:!1,userEmail:"",errMessage:"",loginForm:!1,banners:[],products:[],categories:[]},Object(c["a"])(o,"wishlists",[]),Object(c["a"])(o,"cart",[]),o),mutations:{SET_USEREMAIL:function(t,e){t.userEmail=e},SET_ERRMSG:function(t,e){t.errMessage=e},CLEAR_ERRMSG:function(t,e){t.errMessage=""},TOOGLE_LOGINFORM:function(t){t.loginForm=!t.loginForm},TOOGLE_LOGGEDIN:function(t){t.isLoggedIn=!t.isLoggedIn},FETCH_PRODUCTS:function(t,e){t.products=e},FETCH_BANNERS:function(t,e){t.banners=e},FETCH_CATEGORIES:function(t,e){t.categories=e},FETCH_WISHLISTS:function(t,e){t.wishlists=e},FETCH_CART:function(t,e){t.cart=e}},actions:{fetch_products:function(t){d["a"].get("/products").then((function(e){console.log(e.data),t.commit("FETCH_PRODUCTS",e.data)})).catch((function(t){console.log(t.response)}))},fetch_categories:function(t){d["a"].get("/categories").then((function(e){console.log(e.data),t.commit("FETCH_CATEGORIES",e.data)})).catch((function(t){console.log(t.response)}))},fetch_banners:function(t){d["a"].get("/banners").then((function(e){console.log(e.data),t.commit("FETCH_BANNERS",e.data)})).catch((function(t){console.log(t.response)}))},fetch_wishlists:function(t){d["a"].get("/wishlists",{headers:{access_token:localStorage.access_token}}).then((function(e){console.log(e.data),t.commit("FETCH_WISHLISTS",e.data)})).catch((function(t){console.log(t.response)}))},fetch_cart:function(t){d["a"].get("/carts",{headers:{access_token:localStorage.access_token}}).then((function(e){console.log(e.data),t.commit("FETCH_CART",e.data.carts),t.commit("SET_USEREMAIL",e.data.userEmail)})).catch((function(t){console.log(t.response)}))},fetch_all:function(t){var e=t.dispatch;e("fetch_banners"),e("fetch_categories"),e("fetch_products"),e("fetch_wishlists"),e("fetch_cart")}},modules:{}});r["a"].use(w["a"]);var B=[{path:"/",name:"Home",component:H},{path:"/wishlists",name:"Wishlists",component:function(){return a.e("wishlists").then(a.bind(null,"e596"))}},{path:"/cart",name:"Cart",component:function(){return a.e("cart").then(a.bind(null,"b789"))}},{path:"/products",name:"Products",component:function(){return a.e("products").then(a.bind(null,"e6dc"))}}],U=new w["a"]({mode:"history",base:"/",routes:B});U.beforeEach((function(t,e,a){("Wishlists"!=t.name||localStorage.access_token)&&("Cart"!=t.name||localStorage.access_token)?a():(W.commit("TOOGLE_LOGINFORM"),a({name:"Home"}))}));var q=U;r["a"].config.productionTip=!1,new r["a"]({router:q,store:W,render:function(t){return t(C)}}).$mount("#app")},"7eba":function(t,e,a){t.exports=a.p+"img/logo-3.4ed8b487.png"},"7fdb":function(t,e,a){},"85ec":function(t,e,a){},aa22:function(t,e,a){"use strict";var s=a("bc3a"),o=a.n(s),r=o.a.create({baseURL:"https://ecommerce-cms-porto.herokuapp.com/"});e["a"]=r},e9fb:function(t,e,a){},f230:function(t,e,a){"use strict";var s=a("7fdb"),o=a.n(s);o.a}});
//# sourceMappingURL=app.c319be2e.js.map