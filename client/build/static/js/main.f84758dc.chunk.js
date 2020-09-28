(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),s=t(12),l=t.n(s),i=t(20),u=t(14),m=t(26),p=t(10),d=Object(n.createContext)(null),f=t(18),h=t.n(f),b=(t(109),t(23)),E=t(21),g=t(159),v=t(68),w=t.n(v),j=t(144),O=t(48),x=Object(j.a)((function(e){return{logo:{width:"100%"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"transparent !important",width:"150px",height:"auto",borderRadius:"0"},root:{width:"100%"},title:{padding:"".concat(e.spacing(1,0,1)," !important"),textAlign:"center",borderBottom:"1px solid ".concat(O.a[300])},form:{width:"100%"},inputField:{margin:"0 0 8px !important"},btnSubmit:{margin:"".concat(e.spacing(2,0,2)," !important"),background:"".concat(O.a[900]," !important"),color:"#fff !important"},gridLink:{justifyContent:"center"},routeLink:{background:"none !important",textTransform:"capitalize !important",fontWeight:"400 !important","&:hover":{textDecoration:"underline !important"}}}}));function k(){var e=x();return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{className:e.avatar},r.a.createElement("img",{src:w.a,alt:"Boiling Head",className:e.logo})))}var N=t(157),C=t(49);var S=function(){return r.a.createElement(N.a,{mt:8},r.a.createElement(C.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ".concat((new Date).getFullYear()," Boiling Head")))},y=t(148),P=t(149),W=t(150),F=t(151),L=t(156),U=t(152),I=t(153),q=t(158),B=t(147),A=t(47),D=t.n(A);var z=function(e){var a=e.success,t=e.clearSuccess;return r.a.createElement(q.a,{variant:"filled",severity:"success",action:r.a.createElement(B.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){t()}},r.a.createElement(D.a,{fontSize:"inherit"}))},a)};var R=function(e){var a=e.error,t=e.clearError;return r.a.createElement(q.a,{variant:"filled",severity:"error",action:r.a.createElement(B.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){t()}},r.a.createElement(D.a,{fontSize:"inherit"}))},a)};var V=function(){var e=x(),a=Object(p.f)(),t=Object(n.useContext)(d),c=t.authUser,o=t.setAuthUser,s=Object(n.useState)({email:"",password:""}),m=Object(u.a)(s,2),f=m[0],g=m[1],v=Object(n.useState)(),w=Object(u.a)(v,2),j=w[0],O=w[1],N=Object(n.useState)(),C=Object(u.a)(N,2),q=C[0],B=C[1];Object(n.useEffect)((function(){c.user&&a.push("dashboard")}));var A=function(e){g(Object(E.a)(Object(E.a)({},f),{},Object(b.a)({},e.target.name,e.target.value)))},D=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.a.post("https://boiling-head-react.herokuapp.com/api/users/login",f);case 4:n=e.sent,o(n.data),localStorage.setItem("auth-token",n.data.token),a.push("dashboard"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response.data.message&&B(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:e.paper},r.a.createElement(k,null),r.a.createElement(P.a,{className:e.root},r.a.createElement(W.a,{title:"Log In",className:e.title}),r.a.createElement(F.a,{className:e.cardContent},j&&r.a.createElement(z,{success:j,clearSuccess:function(){return O(void 0)}}),q&&r.a.createElement(R,{error:q,clearError:function(){return B(void 0)}}),r.a.createElement("form",{className:e.form,onSubmit:D,noValidate:!0},r.a.createElement(L.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,className:e.inputField,onChange:A,value:f.email}),r.a.createElement(L.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",className:e.inputField,autoComplete:"password",onChange:A,value:f.password}),r.a.createElement(U.a,{type:"submit",fullWidth:!0,className:e.btnSubmit},"Log In"),r.a.createElement(I.a,{container:!0},r.a.createElement(I.a,{item:!0,xs:!0},r.a.createElement(U.a,{onClick:function(){a.push("forgotPassword")},className:e.routeLink},"Forgot Password")),r.a.createElement(I.a,{item:!0},r.a.createElement(U.a,{onClick:function(){a.push("register")},className:e.routeLink},"Don't have an account? Sign Up"))))))),r.a.createElement(S,null))};var H=function(){var e=x(),a=Object(p.f)(),t=Object(n.useContext)(d).authUser;Object(n.useEffect)((function(){t.user&&a.push("dashboard")}));var c=Object(n.useState)({fullName:"",email:"",password:"",confirmPassword:""}),o=Object(u.a)(c,2),s=o[0],m=o[1],f=Object(n.useState)(),g=Object(u.a)(f,2),v=g[0],w=g[1],j=Object(n.useState)(),O=Object(u.a)(j,2),N=O[0],C=O[1],q=function(e){m(Object(E.a)(Object(E.a)({},s),{},Object(b.a)({},e.target.name,e.target.value)))},B=function(){var e=Object(i.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,h.a.post("https://boiling-head-react.herokuapp.com/api/users/register",s);case 4:e.sent&&(w("Registration Successful!! Please verify your email to login!!"),m({fullName:"",email:"",password:"",confirmPassword:""}),console.log(v)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response.data.message&&C(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:e.paper},r.a.createElement(k,null),r.a.createElement(P.a,{className:e.root},r.a.createElement(W.a,{title:"Register",className:e.title}),r.a.createElement(F.a,{className:e.cardContent},v&&r.a.createElement(z,{success:v,clearSuccess:function(){return w(void 0)}}),N&&r.a.createElement(R,{error:N,clearError:function(){return C(void 0)}}),r.a.createElement("form",{className:e.form,onSubmit:B,noValidate:!0},r.a.createElement(I.a,{container:!0,spacing:2},r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(L.a,{autoComplete:"fname",name:"fullName",required:!0,fullWidth:!0,id:"fullName",label:"Full Name",className:e.inputField,autoFocus:!0,value:s.fullName,onChange:q})),r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(L.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",className:e.inputField,autoComplete:"email",value:s.email,onChange:q})),r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(L.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",className:e.inputField,autoComplete:"current-password",value:s.password,onChange:q})),r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(L.a,{required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirmPassword",className:e.inputField,autoComplete:"password",onChange:q,value:s.confirmPassword}))),r.a.createElement(U.a,{type:"submit",fullWidth:!0,className:e.btnSubmit},"Register"),r.a.createElement(I.a,{container:!0,justify:"center"},r.a.createElement(I.a,{item:!0},r.a.createElement(U.a,{onClick:function(){a.push("/")},className:e.routeLink},"Already have an account? Log in"))))))),r.a.createElement(S,null))},T=t(154),G=t(155),J=t(72),Y=t.n(J),M=Object(j.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var $=function(){var e=M(),a=Object(n.useContext)(d).setAuthUser,t=Object(p.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{position:"static"},r.a.createElement(G.a,null,r.a.createElement(B.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(Y.a,null)),r.a.createElement(C.a,{variant:"h6",className:e.title},"Boiling Head"),r.a.createElement(U.a,{color:"inherit",onClick:function(){a({token:void 0,user:void 0}),localStorage.setItem("auth-token",""),t.push("/")}},"Log out"))))};var K=function(){var e=Object(p.f)(),a=Object(n.useContext)(d).authUser;return Object(n.useEffect)((function(){a.user||e.push("/")})),r.a.createElement($,null)};var Q=function(e){var a=x(),t=Object(n.useContext)(d).authUser,c=Object(p.f)();return Object(n.useEffect)((function(){void 0!==t.user&&c.push("dashboard"),function(){var a=Object(i.a)(l.a.mark((function a(){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.match.params.token,a.next=3,h.a.put("https://boiling-head-react.herokuapp.com/api/users/verify/"+t);case 3:n=a.sent,console.log(n),n||c.push("/");case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()})),r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:a.paper},r.a.createElement(P.a,{className:a.root},r.a.createElement(W.a,{title:"Email Confirmation!!",className:a.title}),r.a.createElement(F.a,{className:a.cardContent},r.a.createElement("p",null,"Your email has been confirmed, you can now",r.a.createElement(U.a,{onClick:function(){c.push("/")},className:a.routeLink},"Log In."))))))};var X=function(){var e=x(),a=Object(p.f)(),t=Object(n.useContext)(d).authUser;Object(n.useEffect)((function(){t.user&&a.push("dashboard")}));var c=Object(n.useState)({email:""}),o=Object(u.a)(c,2),s=o[0],m=o[1],f=Object(n.useState)(),g=Object(u.a)(f,2),v=g[0],w=g[1],j=Object(n.useState)(),O=Object(u.a)(j,2),N=O[0],C=O[1],q=function(){var e=Object(i.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,h.a.post("https://boiling-head-react.herokuapp.com/api/users/forgot-password",s);case 4:e.sent&&(w("Password reset link has been sent to your email!!"),m({email:""})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response.data.message&&C(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:e.paper},r.a.createElement(k,null),r.a.createElement(P.a,{className:e.root},r.a.createElement(W.a,{title:"Forgot Password",className:e.title}),r.a.createElement(F.a,{className:e.cardContent},v&&r.a.createElement(z,{success:v,clearSuccess:function(){return w(void 0)}}),N&&r.a.createElement(R,{error:N,clearError:function(){return C(void 0)}}),r.a.createElement("form",{className:e.form,onSubmit:q,noValidate:!0},r.a.createElement(I.a,{container:!0,spacing:1},r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(L.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",className:e.inputField,autoComplete:"email",value:s.email,onChange:function(e){m(Object(E.a)(Object(E.a)({},s),{},Object(b.a)({},e.target.name,e.target.value)))}}))),r.a.createElement(U.a,{type:"submit",fullWidth:!0,className:e.btnSubmit},"Submit"),r.a.createElement(I.a,{container:!0,justify:"center"},r.a.createElement(I.a,{item:!0},r.a.createElement(U.a,{onClick:function(){a.push("/")},className:e.routeLink},"Back to Log in"))))))),r.a.createElement(S,null))};var Z=function(e){var a=x(),t=Object(p.f)(),c=Object(n.useContext)(d).authUser;Object(n.useEffect)((function(){c.user&&t.push("dashboard")}));var o=Object(n.useState)({password:"",confirmPassword:""}),s=Object(u.a)(o,2),m=s[0],f=s[1],g=Object(n.useState)(),v=Object(u.a)(g,2),w=v[0],j=v[1],O=Object(n.useState)(),N=Object(u.a)(O,2),C=N[0],q=N[1],B=function(e){f(Object(E.a)(Object(E.a)({},m),{},Object(b.a)({},e.target.name,e.target.value)))},A=function(){var a=Object(i.a)(l.a.mark((function a(t){var n,r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n=e.match.params.token,a.prev=2,a.next=5,h.a.put("https://boiling-head-react.herokuapp.com/api/users/changePassword/"+n,m);case 5:r=a.sent,console.log(r),!0===r.data&&(j("Password has been changed!!"),f({password:"",confirmPassword:""})),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),a.t0.response.data.message&&q(a.t0.response.data.message);case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:a.paper},r.a.createElement(k,null),r.a.createElement(P.a,{className:a.root},r.a.createElement(W.a,{title:"Change Password",className:a.title}),r.a.createElement(F.a,{className:a.cardContent},w&&r.a.createElement(z,{success:w,clearSuccess:function(){return j(void 0)}}),C&&r.a.createElement(R,{error:C,clearError:function(){return q(void 0)}}),r.a.createElement("form",{className:a.form,onSubmit:A,noValidate:!0},r.a.createElement(I.a,{container:!0,spacing:1},r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(L.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",className:a.inputField,autoComplete:"current-password",value:m.password,onChange:B})),r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(L.a,{required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirmPassword",className:a.inputField,autoComplete:"password",onChange:B,value:m.confirmPassword}))),r.a.createElement(U.a,{type:"submit",fullWidth:!0,className:a.btnSubmit},"Submit"))))),r.a.createElement(S,null))};var _=function(){var e=Object(n.useState)({token:void 0,user:void 0}),a=Object(u.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(a=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),a=""),e.next=4,h.a.post("https://boiling-head-react.herokuapp.com/api/users/tokenIsValid",null,{headers:{"x-auth-token":a}});case 4:if(!e.sent.data){e.next=10;break}return e.next=8,h.a.get("https://boiling-head-react.herokuapp.com/api/users/",{headers:{"x-auth-token":a}});case 8:t=e.sent,c({token:a,user:t.data});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(d.Provider,{value:{authUser:t,setAuthUser:c}},r.a.createElement(m.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:V}),r.a.createElement(p.a,{path:"/register",component:H}),r.a.createElement(p.a,{path:"/verifyToken/:token",component:Q}),r.a.createElement(p.a,{path:"/forgotPassword",component:X}),r.a.createElement(p.a,{path:"/changePassword/:token",component:Z}),r.a.createElement(p.a,{path:"/dashboard",component:K}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,a,t){e.exports=t.p+"static/media/boiling-head-logo.bffeede1.png"},86:function(e,a,t){e.exports=t(116)}},[[86,1,2]]]);
//# sourceMappingURL=main.f84758dc.chunk.js.map