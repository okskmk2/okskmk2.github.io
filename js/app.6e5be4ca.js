(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)i=s[u],o[i]&&p.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02bf":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ko":{"brand":"바은","brand_sub":"소프트웨어 개발사"},"en":{"brand":"Baeun","brand_sub":"Software Company"}}'),delete t.options._Ctor}},"0ab6":function(t,e,n){"use strict";var a=n("3af0"),o=n.n(a);o.a},"286c":function(t,e){t.exports="data:image/png;base64,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"},"3ae4":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"title":"Contact"},"ko":{"title":"의뢰하기"},"ja":{"title":"こんにちは、世界！"},"zh":{"title":"你好、世界！"}}'),delete t.options._Ctor}},"3af0":function(t,e,n){},"432d":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"title":"Profile","basic":"Basic Information","education":"Education","workExperience":"Work Experience","phonenumber":"+82 1049200523","address":"Seoul, South Korea","webdeveloper":"Web Developer","moto":"Readble site, Best site","skhynix":"SK hynix IT","hanhwa_onsure":"Hanhwa Life Onsure"},"ko":{"title":"프로필","basic":"기본정보","education":"교육이수","workExperience":"실무경험","phonenumber":"010-4920-0523","address":"한국 서울시","webdeveloper":"웹 개발자","moto":"읽기 쉬운 사이트가 가장 좋은 사이트이다.","skhynix":"SK 하이닉스 정보화","hanhwa_onsure":"한화생명 온슈어"},"ja":{"title":"プロフィール","phonenumber":"+82 1049200523"},"zh":{"title":"轮廓","phonenumber":"+82 1049200523"}}'),delete t.options._Ctor}},"4bd9":function(t,e,n){"use strict";var a=n("f7d5"),o=n.n(a);e["default"]=o.a},"4cae":function(t,e,n){},"4e0a":function(t,e,n){"use strict";var a=n("432d"),o=n.n(a);e["default"]=o.a},"4f4c":function(t,e,n){"use strict";var a=n("89dd"),o=n.n(a);e["default"]=o.a},"53c6":function(t,e,n){"use strict";var a=n("3ae4"),o=n.n(a);e["default"]=o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("div",{staticClass:"container"},[a("div",[a("div",{staticClass:"brand"},[a("img",{attrs:{src:n("286c"),alt:"baeun_logo",width:"40px"}}),t._v("\n        "+t._s(t.$t("brand"))+"\n      ")]),a("div",{staticClass:"brand_sub"},[t._v(t._s(t.$t("brand_sub")))])]),a("globalMenu"),a("nav",{staticClass:"user-nav"},[a("i18nChange")],1)],1)]),a("router-view",{staticClass:"container"}),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container"},[n("i",{staticClass:"fa fa-facebook-official fa-fw",attrs:{"aria-hidden":"true"}}),n("i",{staticClass:"fa fa-instagram fa-fw",attrs:{"aria-hidden":"true"}})])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-globe fa-fw",staticStyle:{"font-size":"21px","vertical-align":"middle"},attrs:{"aria-hidden":"true"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.i18n.locale,expression:"i18n.locale"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.i18n,"locale",e.target.multiple?n:n[0])}}},t._l(t.support_langs,function(e){return n("option",{key:e},[t._v(t._s(e))])}),0)])},s=[],l=n("a925");a["a"].use(l["a"]);var c=new l["a"]({locale:"ko",fallbackLocale:"en"}),f=c,u={data:function(){return{i18n:f,support_langs:["ko","en","ja","zh"]}}},p=u,_=n("2877"),v=Object(_["a"])(p,i,s,!1,null,null,null),d=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"main-nav"},[n("router-link",{attrs:{to:"/Profile"}},[n("span",[t._v(t._s(t.$t("Profile")))])]),n("router-link",{attrs:{to:"/Portfolio"}},[n("span",[t._v(t._s(t.$t("Portfolio")))])]),n("router-link",{attrs:{to:"/Blog"}},[n("span",[t._v(t._s(t.$t("Blog")))])]),n("router-link",{attrs:{to:"/Contact"}},[n("span",[t._v(t._s(t.$t("Contact")))])])],1)},m=[],b=n("bf7e"),C={},w=Object(_["a"])(C,h,m,!1,null,null,null);"function"===typeof b["default"]&&Object(b["default"])(w);var g=w.exports,y={name:"app",data:function(){return{modalOpen:!1}},components:{i18nChange:d,globalMenu:g}},x=y,S=n("8dd4"),O=Object(_["a"])(x,o,r,!1,null,null,null);"function"===typeof S["default"]&&Object(S["default"])(O);var A=O.exports,j=n("8c4f"),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("message: "+t._s(t.$t("hello")))])])},V=[],F=n("4bd9"),P={},W=Object(_["a"])(P,q,V,!1,null,null,null);"function"===typeof F["default"]&&Object(F["default"])(W);var J=W.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.$t("title")))]),n("h2",[n("i",{staticClass:"fa fa-address-card fa-fw mr5"}),t._v("\n    "+t._s(t.$t("basic"))+"\n  ")]),n("p",[n("i",{staticClass:"fa fa-briefcase fa-fw mr5"}),t._v(t._s(t.$t("webdeveloper")))]),n("p",[n("i",{staticClass:"fa fa-home fa-fw mr5"}),t._v(t._s(t.$t("address")))]),t._m(0),n("p",[n("i",{staticClass:"fa fa-phone fa-fw mr5"}),t._v(t._s(t.$t("phonenumber")))]),n("p",[n("i",{staticClass:"fa fa-comment fa-fw mr5"}),t._v(t._s(t.$t("moto")))]),n("hr"),n("h2",[n("i",{staticClass:"fa fa-suitcase fa-fw mr5"}),t._v("\n      "+t._s(t.$t("workExperience"))+"\n    ")]),n("h3",[t._v("\n        "+t._s(t.$t("webdeveloper"))+" & Server Engineer / "+t._s(t.$t("skhynix"))+"\n      ")]),t._m(1),n("p",[t._v("\n        IBM LSF 시스템을 파이썬으로 웹, API서버로 확장하였습니다. 개발한 서비스를 국내 2대 서버, 해외 4대 서버를 운영하였습니다.\n      ")]),n("p",[t._v("기술스택 : Oracle SQL, Mysql, LSF python API, django, Java")]),n("p",[t._v("역할 : 설계, 개발, 운영")]),n("h3",[t._v("\n        "+t._s(t.$t("webdeveloper"))+" / "+t._s(t.$t("hanhwa_onsure"))+"\n      ")]),t._m(2),n("p",[t._v("자바 스프링과 JSP를 사용하여 배치시스템을 개발하고, 해피콜 개발, 카카오링크 연동을 하였습니다. SQL Server를 사용하였습니다.")]),n("p",[t._v("기술스택 : SQL Server, Java, Spring MVC")]),n("p",[t._v("역할 : 개발")]),n("h3",[t._v("\n        CTO / 아트투게더\n      ")]),t._m(3),n("p",[t._v("스타트업 초기 기술 로드맵과 자바 스프링을 사용하여 프로토타입의 웹 사이트를 개발하였습니다. MariaDB를 사용하였습니다. 자료 수집을 위해 웹크롤링 작업도 병행하였습니다.")]),n("p",[t._v("기술스택 : MariaDB, Java, Spring MVC")]),n("p",[t._v("역할 : 프로젝트 설계, 개발, 운영")]),n("h3",[t._v("\n        UI Developer / 농협 IFRS9 구축\n      ")]),t._m(4),n("p",[t._v("농협 자체 화면 개발도구로 화면을 개발하였고 서버 환경에서 C언어로 회계업무로직을 개발하였습니다. OracleSQL를 사용하였습니다.")]),n("p",[t._v("기술스택 : OracleSQL, Jscript(이지빌더), Proframe C")]),n("p",[t._v("역할 : 개발")]),n("h3",[t._v("\n        Java Developer / 농협 핀테크 오픈 API 플랫폼 고도화\n      ")]),t._m(5),n("p",[t._v("자바를 이용하여 핀테크 오픈 API를 개발하였습니다. 신용카드결재API, 제휴기관API를 개발하였습니다.")]),n("p",[t._v("기술스택 : Java / JSP")]),n("p",[t._v("역할 : 개발")]),n("hr"),n("h2",[n("i",{staticClass:"fa fa-certificate fa-fw mr5"}),t._v("\n      "+t._s(t.$t("education"))+"\n    ")]),n("h3",[t._v("\n        웹기획 고급과정\n      ")]),t._m(6),n("p",[t._v("기획, 사용자조사, UI/UX기획, 제안서, 견적서 작성법, 프로젝트 관리 실무과정")]),n("h3",[t._v("\n        Angular 5 개발과정\n      ")]),t._m(7),n("p",[t._v("Angular 5 프론트엔드개발 32시간 수료")]),n("h3",[t._v("\n        한국인터넷 진흥원 핀테크 서비스개발\n      ")]),t._m(8),n("p",[t._v("핀테크 웹서비스 개발 사례연구 및 프로젝트 리딩")]),n("h3",[t._v("\n        방송통신대학교 컴퓨터과학과\n      ")]),t._m(9),n("p",[t._v("주요 이수과목 : 소프트웨어 공학, 데이터베이스 설계")]),n("h3",[t._v("\n        정보처리산업기사\n      ")]),t._m(10),n("p",[t._v("주요 내용 : 알고리즘, 데이터베이스 구조, 네트워크 보안")]),n("h3",[t._v("\n        중앙처리컴퓨터학원\n      ")]),t._m(11),n("p",[t._v("수석 수료")]),n("p",[t._v("주요 이수기술 : OracleSQL, Java, Javascript, Android")]),n("hr")])},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("i",{staticClass:"fa fa-envelope fa-fw mr5"}),t._v("eunsung.lee@baeun.com")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("i",{staticClass:"fa fa-calendar fa-fw mr5"}),t._v("2018-01 ~ 2019-07\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("i",{staticClass:"fa fa-calendar fa-fw mr5"}),t._v("2017-09 ~ 2017-11\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("i",{staticClass:"fa fa-calendar fa-fw mr5"}),t._v("2017-07 ~ 2017-09\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("i",{staticClass:"fa fa-calendar fa-fw mr5"}),t._v("2016-09 ~ 2017-05\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("i",{staticClass:"fa fa-calendar fa-fw mr5"}),t._v("2016-04 ~ 2016-09\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("i",{staticClass:"fa fa-calendar fa-fw mr5"}),t._v("2018-12\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("i",{staticClass:"fa fa-calendar fa-fw mr5"}),t._v("2018-04\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("i",{staticClass:"fa fa-calendar fa-fw mr5"}),t._v("2017-07\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("i",{staticClass:"fa fa-calendar fa-fw mr5"}),t._v("2016 ~ 2018\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("i",{staticClass:"fa fa-calendar fa-fw mr5"}),t._v("2016-04\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("i",{staticClass:"fa fa-calendar fa-fw mr5"}),t._v("2015-10 ~ 2016-04\n      ")])}],E=(n("0ab6"),n("4e0a")),Q={},B=Object(_["a"])(Q,I,z,!1,null,"8961716a",null);"function"===typeof E["default"]&&Object(E["default"])(B);var k=B.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.$t("title")))])])},K=[],N=n("53c6"),Z={},M=Object(_["a"])(Z,U,K,!1,null,null,null);"function"===typeof N["default"]&&Object(N["default"])(M);var Y=M.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.$t("title")))])])},L=[],R=n("6124"),X={},H=Object(_["a"])(X,D,L,!1,null,null,null);"function"===typeof R["default"]&&Object(R["default"])(H);var G=H.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.$t("title")))])])},$=[],tt=n("4f4c"),et={},nt=Object(_["a"])(et,T,$,!1,null,null,null);"function"===typeof tt["default"]&&Object(tt["default"])(nt);var at=nt.exports;a["a"].use(j["a"]);var ot=new j["a"]({routes:[{path:"/",name:"home",component:J},{path:"/Profile",name:"Profile",component:k},{path:"/Contact",name:"Contact",component:Y},{path:"/Portfolio",name:"Portfolio",component:G},{path:"/Blog",name:"Blog",component:at}]}),rt=n("2f62");a["a"].use(rt["a"]);var it=new rt["a"].Store({state:{},mutations:{},actions:{}});n("4cae");a["a"].config.productionTip=!1,new a["a"]({i18n:f,router:ot,store:it,render:function(t){return t(A)}}).$mount("#app")},6124:function(t,e,n){"use strict";var a=n("c5fe"),o=n.n(a);e["default"]=o.a},"89dd":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"title":"Blog"},"ko":{"title":"블로그"},"ja":{"title":"こんにちは、世界！"},"zh":{"title":"你好、世界！"}}'),delete t.options._Ctor}},"8dd4":function(t,e,n){"use strict";var a=n("02bf"),o=n.n(a);e["default"]=o.a},bf7e:function(t,e,n){"use strict";var a=n("ef7a"),o=n.n(a);e["default"]=o.a},c5fe:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"title":"Portfolio"},"ko":{"title":"포트폴리오"},"ja":{"title":"こんにちは、世界！"},"zh":{"title":"你好、世界！"}}'),delete t.options._Ctor}},ef7a:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ko":{"Profile":"프로필","Portfolio":"포트폴리오","Blog":"블로그","Contact":"의뢰하기"},"en":{"Profile":"Profile","Portfolio":"Portfolio","Blog":"Blog","Contact":"Contact"},"zh":{"Profile":"轮廓","Portfolio":"Portfolio","Blog":"Blog","Contact":"Contact"}}'),delete t.options._Ctor}},f7d5:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"hello":"hello world!"},"ko":{"hello":"안녕 세계야!"},"ja":{"hello":"こんにちは、世界！"},"zh":{"hello":"你好、世界！"}}'),delete t.options._Ctor}}});
//# sourceMappingURL=app.6e5be4ca.js.map