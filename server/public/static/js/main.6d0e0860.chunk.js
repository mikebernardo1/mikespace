(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,a){},41:function(e,t,a){},52:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),A=a(42),i=a.n(A),r=(a(52),a(5)),o=a(7),l=a(9),u=a(8),d=a(10),j=a(6),h=c.a.createContext(null),m=a(19),g=c.a.createContext(null),p=function(e){return function(t){return Object(s.jsx)(g.Consumer,{children:function(a){return Object(s.jsx)(e,Object(m.a)(Object(m.a)({},t),{},{firebase:a}))}})}},f=g,b=a(27),E=(a(53),{apiKey:"AIzaSyC8vJJL7tsQak05LBCCKpuvGJYpxY67tUI",authDomain:"mikespace-6cc68.firebaseapp.com",projectId:"mikespace-6cc68",storageBucket:"mikespace-6cc68.appspot.com",messagingSenderId:"236383093945",appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyC8vJJL7tsQak05LBCCKpuvGJYpxY67tUI",REACT_APP_AUTH_DOMAIN:"mikespace-6cc68.firebaseapp.com",REACT_APP_PROJECT_ID:"mikespace-6cc68",REACT_APP_STORAGE_BUCKET:"mikespace-6cc68.appspot.com",REACT_APP_MESSAGING_SENDER_ID:"236383093945",REACT_APP_APP_ID:"1:236383093945:web:0ed0d8a3d60525c045c768"}).APP_ID}),x=function e(){var t=this;Object(r.a)(this,e),this.CreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.SignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.SignOut=function(){return t.auth.signOut()},this.PasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.PasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},b.a.initializeApp(E),this.auth=b.a.auth()},v=function(e){var t=function(t){Object(l.a)(n,t);var a=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var t=arguments.length,s=new Array(t),c=0;c<t;c++)s[c]=arguments[c];return(e=a.call.apply(a,[this].concat(s))).state={authUser:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return Object(s.jsx)(h.Provider,{value:this.state.authUser,children:Object(s.jsx)(e,Object(m.a)({},this.props))})}}]),n}(c.a.Component);return p(t)},C=a(21),w=function(e){return function(t){var a=function(a){Object(l.a)(c,a);var n=Object(u.a)(c);function c(){return Object(r.a)(this,c),n.apply(this,arguments)}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(a){e(a)||t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return Object(s.jsx)(h.Consumer,{children:function(n){return e(n)?Object(s.jsx)(t,Object(m.a)({},a.props)):null}})}}]),c}(c.a.Component);return Object(C.a)(j.e,p)(a)}},B=(a(32),p((function(e){var t=e.firebase;return Object(s.jsx)("button",{type:"button",className:"navauth__list-item-button",onClick:t.SignOut,children:"Sign Out"})}))),O=function(){return Object(s.jsxs)("div",{className:"navauth",children:[Object(s.jsx)("div",{}),Object(s.jsxs)("ul",{className:"navauth__list",children:[Object(s.jsx)("li",{className:"navauth__list-item",children:Object(s.jsx)(d.b,{to:"/home",className:"navauth__list-item-link",children:"Home"})}),Object(s.jsx)("li",{className:"navauth__list-item",children:Object(s.jsx)(d.b,{to:"/account",className:"navauth__list-item-link",children:"Account"})}),Object(s.jsx)("li",{className:"navauth__list-item",children:Object(s.jsx)(d.b,{to:"/shoppingcart",className:"navauth__list-item-link",children:"Shopping Cart"})}),Object(s.jsx)("li",{className:"navauth__list-item",children:Object(s.jsx)(B,{})})]})]})},P=function(){return Object(s.jsxs)("div",{className:"navauth",children:[Object(s.jsx)("div",{}),Object(s.jsxs)("ul",{className:"navauth__list",children:[Object(s.jsx)("li",{className:"navauth__list-item",children:Object(s.jsx)(d.b,{to:"/",className:"navauth__list-item-link",children:"Landing"})}),Object(s.jsx)("li",{className:"navauth__list-item",children:Object(s.jsx)(d.b,{to:"/signin",className:"navauth__list-item-link",children:"Sign In"})})]})]})};function Q(){return Object(s.jsx)("div",{className:"nav",children:Object(s.jsx)(h.Consumer,{children:function(e){return e?Object(s.jsx)(O,{}):Object(s.jsx)(P,{})}})})}a(60);function D(){return Object(s.jsx)("div",{className:"landing",children:Object(s.jsxs)("div",{className:"landing__card",children:[Object(s.jsx)("h2",{className:"landing__header",children:"Welcome to MikeSpace"}),Object(s.jsx)("p",{className:"landing__text",children:"Please Sign In at the top menu to continue"})]})})}var I=a(17),N=(a(61),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={username:"",email:"",initialPassword:"",confirmedPassword:"",error:null},e.onSubmit=function(t){var a=e.state,s=a.email,n=a.initialPassword;e.props.firebase.CreateUserWithEmailAndPassword(s,n).then((function(){e.setState(e.state),e.props.history.push("/home")})).catch((function(t){e.setState({error:t})})),t.preventDefault()},e.onChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.initialPassword,c=e.confirmedPassword,A=e.error,i=n!==c||""===n||""===a||""===t;return Object(s.jsxs)("form",{onSubmit:this.onSubmit,className:"signup__form",children:[Object(s.jsxs)("div",{className:"signup__form-div1",children:[Object(s.jsx)("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name",className:"signup__form-input"}),Object(s.jsx)("input",{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address",className:"signup__form-input"}),Object(s.jsx)("input",{name:"initialPassword",value:n,onChange:this.onChange,type:"password",placeholder:"Password",className:"signup__form-input"}),Object(s.jsx)("input",{name:"confirmedPassword",value:c,onChange:this.onChange,type:"password",placeholder:"Confirm Password",className:"signup__form-input"}),Object(s.jsx)("button",{disabled:i,type:"submit",className:"signup__form-button",children:"Sign Up"})]}),A&&Object(s.jsx)("p",{className:"signup__form-errortext",children:A.message})]})}}]),a}(n.Component)),_=function(){return Object(s.jsxs)("p",{className:"signup__text-signup-noaccount",children:["Don't have an account? ",Object(s.jsx)(d.b,{to:"/signup",className:"signup__text-signup-noaccount-link",children:"Sign Up"})]})},M=Object(C.a)(j.e,p)(N),k=function(){return Object(s.jsx)("div",{className:"signup",children:Object(s.jsxs)("div",{className:"signup__card",children:[Object(s.jsx)("h2",{className:"signup__header",children:"Sign Up"}),Object(s.jsx)(M,{})]})})},S=(a(62),function(){return Object(s.jsx)("p",{className:"passwordforget__form-text",children:Object(s.jsx)(d.b,{to:"/pw-forget",className:"passwordforget__form-text-link",children:"Forgot Your Password?"})})}),R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={email:"",error:null},e.onSubmit=function(t){var a=e.state.email;e.props.firebase.PasswordReset(a).then((function(){return e.setState(e.state),alert("Password sent to email")})).catch((function(t){e.setState({error:t})})),t.preventDefault()},e.onChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return Object(s.jsxs)("form",{onSubmit:this.onSubmit,className:"passwordforget__form",children:[Object(s.jsxs)("div",{className:"passwordforget__form-div1",children:[Object(s.jsx)("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address",className:"passwordforget__form-input"}),Object(s.jsx)("button",{disabled:n,type:"submit",className:"passwordforget__form-button",children:"Reset My Password"})]}),a&&Object(s.jsx)("p",{className:"passwordforget__form-errortext",children:a.message})]})}}]),a}(n.Component),y=function(){return Object(s.jsx)("div",{className:"passwordforget",children:Object(s.jsxs)("div",{className:"passwordforget__card",children:[Object(s.jsx)("h2",{className:"passwordforget__header",children:"Forgot Your Password?"}),Object(s.jsx)(H,{})]})})},H=p(R),Y=(a(63),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={email:"",password:"",username:"",error:null},e.onSubmit=function(t){var a=e.state,s=a.email,n=a.password;e.props.firebase.SignInWithEmailAndPassword(s,n).then((function(){e.setState(e.state),e.props.history.push("/home")})).catch((function(t){e.setState({error:t})})),t.preventDefault()},e.onChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,c=""===a||""===t;return Object(s.jsxs)("form",{onSubmit:this.onSubmit,className:"signin__form",children:[Object(s.jsxs)("div",{className:"signin__form-div1",children:[Object(s.jsx)("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address",className:"signin__form-input"}),Object(s.jsx)("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password",className:"signin__form-input"}),Object(s.jsx)("button",{disabled:c,type:"submit",className:"signin__form-button",children:"Sign In"})]}),n&&Object(s.jsx)("p",{className:"signin__form-errortext",children:n.message})]})}}]),a}(n.Component)),J=Object(C.a)(j.e,p)(Y),G=function(){return Object(s.jsx)("div",{className:"signin",children:Object(s.jsxs)("div",{className:"signin__card",children:[Object(s.jsx)("h2",{className:"signin__header",children:"Sign In"}),Object(s.jsx)(J,{}),Object(s.jsx)(S,{}),Object(s.jsx)(_,{})]})})},T=a(15),K=a.n(T),L=(a(41),a.p+"static/media/shoppingcart.f0432bbd.svg"),z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={products:[],cart:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;K.a.get("https://fakestoreapi.com/products/").then((function(t){e.setState({products:t.data})}))}},{key:"clickHandler",value:function(e){var t={id:e.id,productName:e.title,productImage:e.image,productPrice:e.price,description:e.description,category:e.category,quantity:1};this.setState({cart:t}),K.a.post("/shoppingcart",t)}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)("h1",{className:"home__header",children:"Welcome to MikeSpace"}),Object(s.jsx)("form",{className:"home__form",name:"productID",id:"form",children:this.state.products.map((function(t){return Object(s.jsx)("div",{className:"home__block",children:Object(s.jsxs)("div",{className:"home__card",children:[Object(s.jsx)(d.b,{to:"/home/".concat(t.id),children:Object(s.jsx)("div",{className:"home__card-div1",children:Object(s.jsx)("img",{src:t.image,alt:t.category,className:"home__card-image",name:"productImage"})})}),Object(s.jsxs)("div",{className:"home__card-div2",children:[Object(s.jsxs)("h3",{className:"home__card-title",name:"productName",children:[t.title," "]}),Object(s.jsxs)("p",{className:"home__card-price",name:"productPrice",children:["$",t.price.toFixed(2)]})]}),Object(s.jsx)("div",{className:"home__card-div3",children:Object(s.jsx)("img",{src:L,onClick:function(){return e.clickHandler(t)},alt:"cart",className:"home__card-div3-cart"})})]})},t.id)}))})]})}}]),a}(c.a.Component),U=w((function(e){return!!e}))(z),F=(a(82),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={initialPassword:"",confirmedPassword:"",error:null},e.onSubmit=function(t){var a=e.state.initialPassword;e.props.firebase.PasswordUpdate(a).then((function(){return e.setState(e.state),alert("Password Changed")})).catch((function(t){e.setState({error:t})})),t.preventDefault()},e.onChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.initialPassword,a=e.confirmedPassword,n=e.error,c=t!==a||""===t;return Object(s.jsxs)("form",{onSubmit:this.onSubmit,className:"passwordchange__form",children:[Object(s.jsxs)("div",{className:"passwordchange__form-div1",children:[Object(s.jsx)("input",{name:"initialPassword",value:t,onChange:this.onChange,type:"password",placeholder:"New Password",className:"passwordchange__form-input"}),Object(s.jsx)("input",{name:"confirmedPassword",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password",className:"passwordchange__form-input"}),Object(s.jsx)("button",{disabled:c,type:"submit",className:"passwordchange__form-button",children:"Reset My Password"})]}),n&&Object(s.jsx)("p",{className:"passwordchange__form-errortext",children:n.message})]})}}]),a}(n.Component)),X=p(F),Z=(a(83),w((function(e){return!!e}))((function(){return Object(s.jsx)(h.Consumer,{children:function(e){return Object(s.jsx)("div",{className:"account",children:Object(s.jsxs)("div",{className:"account__card",children:[Object(s.jsxs)("h2",{className:"account__header",children:["User: ",e.email]}),Object(s.jsx)(X,{})]})})}})}))),q=(a(84),a.p+"static/media/back.75fb4c6c.svg"),V=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={products:[],comments:[],cart:[]},e.submitHandler=function(t){t.preventDefault();var a={subject:t.target.subject.value,email:t.target.email.value,comments:t.target.comments.value};K.a.post("/comments",a),document.getElementById("form").reset(),K.a.get("/comments").then((function(t){e.setState({comments:t.data.reverse()})}))},e.handleBackButton=function(){e.props.history.goBack()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;K.a.get("https://fakestoreapi.com/products/".concat(this.props.match.params.id)).then((function(t){e.setState({products:t.data})})),K.a.get("/comments").then((function(t){console.log(t.data),e.setState({comments:t.data})}))}},{key:"clickHandler",value:function(){var e={id:this.state.products.id,productName:this.state.products.title,productImage:this.state.products.image,productPrice:this.state.products.price,description:this.state.products.description,category:this.state.products.category,quantity:1};this.setState({cart:e}),K.a.post("/shoppingcart",e)}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"singleproduct",children:[Object(s.jsxs)("div",{className:"singleproduct__card-block",children:[Object(s.jsx)("img",{src:q,alt:q,onClick:this.handleBackButton,className:"singleproduct__card-back"}),Object(s.jsx)("div",{className:"singleproduct__card-block-div1",children:Object(s.jsx)("img",{src:this.state.products.image,alt:this.state.products.category,className:"singleproduct__card-block-div1-image"})}),Object(s.jsxs)("div",{className:"singleproduct__card-block-div2",children:[Object(s.jsx)("h3",{className:"singleproduct__card-block-div2-title",children:this.state.products.title}),Object(s.jsxs)("h4",{className:"singleproduct__card-block-div2-price",children:["$",this.state.products.price]}),Object(s.jsx)("p",{className:"singleproduct__card-block-div2-description",children:this.state.products.description})]}),Object(s.jsx)("img",{src:L,onClick:function(){return e.clickHandler()},alt:"cart",className:"singleproduct__card-block-cart"})]}),Object(s.jsxs)("div",{className:"singleproduct__card-block",children:[Object(s.jsx)("div",{className:"singleproduct__form-div1",children:Object(s.jsx)("h3",{className:"singleproduct__form-div1-header",children:"Comments"})}),Object(s.jsx)("div",{className:"singleproduct__form-div2",children:Object(s.jsx)("p",{className:"singleproduct__form-div2-text",children:"Write your review"})}),Object(s.jsxs)("form",{id:"form",className:"singleproduct__form-formfield",onSubmit:this.submitHandler,children:[Object(s.jsxs)("div",{className:"singleproduct__form-formfield-div",children:[Object(s.jsx)("input",{type:"text",placeholder:"subject",name:"subject",className:"singleproduct__form-formfield-div-input"}),Object(s.jsx)("input",{type:"text",placeholder:"email",name:"email",className:"singleproduct__form-formfield-div-input"}),Object(s.jsx)("textarea",{placeholder:"place comment here",className:"singleproduct__form-formfield-div-textarea",name:"comments"})]}),Object(s.jsx)("button",{className:"singleproduct__form-formfield-button",children:"Comment"})]}),this.state.comments.map((function(e){return Object(s.jsxs)("div",{className:"singleproduct__form-div4",children:[Object(s.jsxs)("div",{className:"singleproduct__form-div4-comments",children:[Object(s.jsx)("h3",{className:"singleproduct__form-div4-comments-name",children:e.subject}),Object(s.jsx)("p",{className:"singleproduct__form-div4-comments-text",children:e.email})]}),Object(s.jsx)("p",{className:"singleproduct__form-div4-comments-text",children:e.comments})]},e.id)}))]})]})}}]),a}(c.a.Component),W=w((function(e){return!!e}))(V),$=(a(85),a(46)),ee=a.n($),te=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={cart:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;K.a.get("/shoppingcart").then((function(t){e.setState({cart:t.data})}))}},{key:"deleteItem",value:function(e){var t=this;K.a.delete("/shoppingcart/".concat(e)).then((function(){return K.a.get("/shoppingcart")})).then((function(a){t.setState({cart:t.state.cart.filter((function(t){return t.uniqueID!==e}))})}))}},{key:"render",value:function(){var e=this;var t=this.state.cart.reduce((function(e,t){return e+t.productPrice}),0).toFixed(2);return Object(s.jsxs)("div",{className:"shoppingcart",children:[Object(s.jsx)("h1",{className:"shoppingcart__header",children:"Items in shopping cart"}),Object(s.jsx)("div",{className:"shoppingcart__button",children:Object(s.jsx)(ee.a,{stripeKey:"pk_test_51IAzzVJ4p0cMsV1XATtlXYvVEGkc2BN62yaD9hRifq4Y37lYLVNi5JDwNZVzoQqjNZ8JDSc6w8NKx02RmzPn0oo500jXw2ewSa",token:function(e){console.log(e)},amount:100*t,name:"Shopping Cart",className:"shoppingcart__payment"})}),Object(s.jsx)("div",{className:"shoppingcart__block1",children:this.state.cart.map((function(t){return Object(s.jsxs)("div",{className:"shoppingcart__div",children:[Object(s.jsx)("img",{src:"data:image/png;base64,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",alt:"cancel",className:"shoppingcart__div-cancel",onClick:function(){return e.deleteItem(t.uniqueID)}}),Object(s.jsx)("img",{src:t.productImage,alt:t.productName,className:"shoppingcart__div-image"}),Object(s.jsx)("h3",{className:"shoppingcart__div-title",children:t.productName}),Object(s.jsxs)("p",{className:"shoppingcart__div-price",children:["$",t.productPrice]})]},t.uniqueID)}))}),Object(s.jsxs)("p",{className:"shoppingcart__div-totalprice",children:["Total price: ",Object(s.jsxs)("span",{className:"shoppingcart__div-totalprice--bold",children:["$",t]})]})]})}}]),a}(c.a.Component),ae=w((function(e){return!!e}))(te),se=v(function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={authUser:null},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(d.a,{children:[Object(s.jsx)(Q,{}),Object(s.jsx)(j.a,{exact:!0,path:"/",component:D}),Object(s.jsx)(j.a,{path:"/signup",component:k}),Object(s.jsx)(j.a,{path:"/signin",component:G}),Object(s.jsx)(j.a,{path:"/pw-forget",component:y}),Object(s.jsx)(j.a,{exact:!0,path:"/home",component:U}),Object(s.jsx)(j.a,{path:"/home/:id",component:W}),Object(s.jsx)(j.a,{path:"/account",component:Z}),Object(s.jsx)(j.a,{exact:!0,path:"/shoppingcart",component:ae}),Object(s.jsx)(j.a,{path:"/shoppingcart/:productID",component:ae})]})})}}]),a}(c.a.Component)),ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,87)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,A=t.getTTFB;a(e),s(e),n(e),c(e),A(e)}))};i.a.render(Object(s.jsx)(f.Provider,{value:new x,children:Object(s.jsx)(se,{})}),document.getElementById("root")),ne()}},[[86,1,2]]]);
//# sourceMappingURL=main.6d0e0860.chunk.js.map