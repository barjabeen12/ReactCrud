(this.webpackJsonppost=this.webpackJsonppost||[]).push([[0],{64:function(n,e,t){},72:function(n,e,t){},90:function(n,e,t){},94:function(n,e,t){"use strict";t.r(e);var i,r,a,o,c,l,s,p,d,x,j=t(0),b=t.n(j),u=t(18),f=t.n(u),h=t(7),g=t(9),m=t(2),O=t(115),v=t(8),y=(t(64),t(1));function w(){var n=Object(O.a)(),e=Object(j.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(g.a)(e,2),i=t[0],r=t[1],a=function(){return n.push("/")},o=function(){var e=i.result._id;n.push("/favorites/".concat(e))},c=function(){return n.push("/postListing")},l=function(){return n.push("/aboutus")};Object(j.useEffect)((function(){null===i||void 0===i||i.token;r(JSON.parse(localStorage.getItem("profile")))}),[]);var s=b.a.useState(null),p=Object(g.a)(s,2),d=p[0],x=p[1],u=(Boolean(d),function(){n.push("/"),r(null),x(null)}),f=function(){var e=i.result._id;console.log(e),n.push("/profile/".concat(e)),x(null)},h=function(){var e=i.result._id;n.push("/myaccount/".concat(e)),x(null)},v=function(){n.push("/Auth")},w=Object(j.useState)({mobileView:!1}),k=Object(g.a)(w,2),C=k[0],z=k[1],S=C.mobileView;Object(j.useEffect)((function(){var n=function(){return window.innerWidth<800?z((function(n){return Object(m.a)(Object(m.a)({},n),{},{mobileView:!0})})):z((function(n){return Object(m.a)(Object(m.a)({},n),{},{mobileView:!1})}))};n(),window.addEventListener("resize",(function(){return n()}))}),[]);return Object(y.jsx)(y.Fragment,{children:S?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(E,{children:Object(y.jsxs)(J,{children:[Object(y.jsx)(P,{children:Object(y.jsx)(V,{src:"/images/logo.png"})}),Object(y.jsx)(H,{children:"Holicloset"})]})}),i?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("input",{type:"checkbox",id:"overlay-input"}),Object(y.jsx)("label",{for:"overlay-input",id:"overlay-button",children:Object(y.jsx)("span",{})}),Object(y.jsx)("div",{id:"overlay",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:a,children:"Home"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:c,children:"Categories"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:l,children:"About us"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:o,children:"Favourites"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:h,children:"My Account"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:f,children:"My Profile"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:u,children:"Sign out"})})]})})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("input",{type:"checkbox",id:"overlay-input"}),Object(y.jsx)("label",{for:"overlay-input",id:"overlay-button",children:Object(y.jsx)("span",{})}),Object(y.jsx)("div",{id:"overlay",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:a,children:"Home"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:c,children:"Categories"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:l,children:"About us"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{onClick:v,children:"Sign in"})})]})})]})]}):Object(y.jsx)("div",{children:Object(y.jsx)(E,{})})})}var k,C,z,S,X,F,A,E=v.a.nav(i||(i=Object(h.a)(["\nheight: 45px;\nwidth: 100%;\ndisplay: flex;\nalign-items: center;\npadding: 0px 23px;\noverflow: hidden;\nbackground: #000000;\nborder: 2px solid #000000;\nbox-sizing: border-box;\ncolor: white;\n\n"]))),J=(v.a.div(r||(r=Object(h.a)(['\ndisplay: flex;\nflex: 1;\nalign-items: center;\ncolor: white;\nbackground: #000000;\na{\n    display: flex;\n    align-items: centre;\n    padding: 0 12px;\n    cursor: pointer;\n    font-family: Poppins;\n    font-style: normal;\n    background: #000000;\n    span {\n        font-size: 12px;\n        font-weight: normal;\n        letter-spacing: 1.42px;\n        position: relative;\n        &:after {\n            content: "";\n            height: 2px;\n            background: white;\n            position: absolute;\n            left: 0;\n            right: 0;\n            bottom: -6px;\n            opacity: 0;\n            transfrom-origin: left center;\n            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n            transform: scaleX(0);\n\n        }\n\n    }\n    &:hover{\n        span:after {\n            transform: scaleX(1);\n            opacity: 1;\n        }\n    }\n}\n\n']))),v.a.div(a||(a=Object(h.a)(['\ndisplay: flex;\nflex-direction: column;\ncolor: white;\nbackground: #000000;\nmargin-top: 60px;\na{\n    display: flex;\n    align-items: centre;\n    padding: 0 12px;\n    margin-top: 20px;\n    margin-left: 20px;\n    cursor: pointer;\n    font-family: Poppins;\n    font-style: normal;\n    background: #000000;\n    span {\n        font-size: 16px;\n        font-weight: normal;\n        letter-spacing: 1.42px;\n        position: relative;\n        &:after {\n            content: "";\n            height: 2px;\n            background: white;\n            position: absolute;\n            left: 0;\n            right: 0;\n            bottom: -6px;\n            opacity: 0;\n            transfrom-origin: left center;\n            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n            transform: scaleX(0);\n\n        }\n\n    }\n    &:hover{\n        span:after {\n            transform: scaleX(1);\n            opacity: 1;\n        }\n    }\n}\n\n']))),v.a.img(o||(o=Object(h.a)(["\n    width: 48px;\n    height: 48px;\n    padding: 6px 4px 5px 5px;\n    border-radius: 50%;\n    cursor: pointer;\n    margin-right: 100px;\n\n"]))),v.a.div(c||(c=Object(h.a)(["\nmargin-right: 10px;\nalign: center;\n  i{\n    width: 20px;\n    margin-right: 10px;\n    cursor: pointer;\n  }\n"]))),v.a.div(l||(l=Object(h.a)(["\nmargin-left: 90px;\nalign: center;\n  img{\n    width: 20px;\n    margin-right: 10px;\n    cursor: pointer;\n  }\n \n  @media screen and (min-width: 320px) {\n    flex: 1;\n  }\n\n"]))),v.a.div(s||(s=Object(h.a)(["\n display: flex;\n flex-direction: row;\n"])))),P=v.a.div(p||(p=Object(h.a)(["\nmargin-top: 10px;\n\n\n"]))),V=v.a.img(d||(d=Object(h.a)(["\n    width: 30px;\n    \n"]))),H=v.a.h1(x||(x=Object(h.a)(["\n    color:white;\n    margin-left:5px;\n    font-family: Poppins;\n    font-size: 20px;\n    margin-top: 10px;\n\n"])));t(71),t(72);v.a.div(k||(k=Object(h.a)(['\n  padding: 80px 10px 50px 20px;\n  background: #222222;\n  position: relative;\n  bottom: 0;\n  left:0;\n  Z-index: 1;\n  margin-top: auto;\n  overflow-x: hidden;\n  &:before{\n    \n    no-repeat fixed;\n    content:"";\n    position:absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n\n}\n  \n   \n  @media (max-width: 700px) {\n    padding: 10px 20px 10px 20px;\n    \n  }\n']))),v.a.div(C||(C=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 1000px;\n    left:0;\n    margin: 0 auto;\n    \n"]))),v.a.div(z||(z=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  left:0;\n  margin-top: 50px;\n"]))),v.a.div(S||(S=Object(h.a)(["\n    display: flex;\n    margin-top: 30px;\n    align-items: center;\n    justify-content: space-around;\n"]))),v.a.div(X||(X=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, \n                         minmax(185px, 1fr));\n  grid-gap: 20px;\n   \n  @media (max-width: 1000px) {\n    grid-template-columns: repeat(2, \n                           minmax(200px, 1fr));\n  }\n"]))),v.a.div(F||(F=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n\n\n"]))),v.a.div(A||(A=Object(h.a)(['\n            color: white;\n            margin-bottom: 15px;\n            font-size: 18px;\n            font-size: 13px;\n            letter-spacing: 1.42px;\n            position: relative;\n            display: flex;\n            align-items: centre;\n            padding: 0 12px;\n            cursor: pointer;\n            font-size: 13px;\n            letter-spacing: 1.42px;\n            position: relative;\n              &:after {\n                      content: "";\n                      height: 2px;\n                      background: white;\n                      position: absolute;\n                      left: 0;\n                      right: 0;\n                      bottom: -6px;\n                      opacity: 0;\n                      transfrom-origin: left center;\n                      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n                      transform: scaleX(0);\n      \n                  }\n      \n              }\n              &:hover{\n                  span:after {\n                      transform: scaleX(1);\n                      opacity: 1;\n                  }\n              }\n          }\n']))),t(110),t(111),t(116),t(109),t(51);t(112),t(52),t(90);var I;var M;v.a.div(I||(I=Object(h.a)(["\nmargin-top: 1%;\nmargin-bottom:5%;\ndisplay: flex;\njustify-content: center; \n"]))),t(113),t(114);var _,B;v.a.div(M||(M=Object(h.a)(["\nmargin-top: 5%;\nwidth: 100%;\nheight: 500px;\nh1{\n    margin-bottom: 40px;\n}\n\n"]))),t(91),t(93);var L=function(){var n=b.a.useState([]),e=Object(g.a)(n,2);return e[0],e[1],Object(y.jsx)("div",{children:Object(y.jsx)(w,{})})};v.a.div(_||(_=Object(h.a)(["\nposition: absolute;\n\n"]))),v.a.div(B||(B=Object(h.a)(["\nposition: relative;\nleft:175px;\ni{\n  cursor: pointer;\n}\n\n"])));f.a.render(Object(y.jsx)(b.a.StrictMode,{children:Object(y.jsx)(L,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.dc9dcb98.chunk.js.map