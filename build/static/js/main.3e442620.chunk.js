(this.webpackJsonpbooks=this.webpackJsonpbooks||[]).push([[0],{32:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(2),n=s.n(c),r=s(23),o=s.n(r),i=(s(32),s(10)),b=s(12),l=s(5),j=function(){var e=Object(c.useContext)(p),t=e.cartItems,s=e.removeData,n=e.getData;return Object(a.jsx)(a.Fragment,{children:t.length?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{style:{textAlign:"center"},children:[t.length," items in cart"]}),Object(a.jsx)("div",{className:"booklist",children:t.map((function(e){return Object(a.jsxs)("div",{className:"book",children:[Object(a.jsx)("div",{className:"booktitle",children:Object(a.jsx)("h3",{children:e.title})}),Object(a.jsx)("div",{className:"author",children:Object(a.jsx)("h4",{className:"author",children:e.authors})}),Object(a.jsxs)("div",{className:"priceandbutton",children:[Object(a.jsxs)("h4",{className:"price",children:["Price : $ ",e.price]}),Object(a.jsx)("button",{className:"addtocart",onClick:function(){s(e.bookID),n()},children:"+ Cart"})]})]},e.bookID)}))})]}):Object(a.jsx)("h3",{style:{textAlign:"center",fontWeight:"lighter"},children:"No Items in cart"})})},u=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Error "}),Object(a.jsx)("h1",{children:"No Page found"}),Object(a.jsx)(b.b,{to:"/",children:"Home"})]})};var h=function(){var e=Object(c.useContext)(p),t=e.signIn,s=e.user,n=e.getData;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(b.b,{className:"title",to:"/",children:Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Books"})})}),s.bool?Object(a.jsx)("img",{className:"userImage",src:s.image,alt:s.displayName}):Object(a.jsx)("button",{className:"cartbutton",onClick:t,children:"SignIn"}),Object(a.jsx)(b.b,{to:"/cart",className:"cartbutton",onClick:function(){return n()},children:Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:"cart",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACz0lEQVR4nO2av2sUQRTHPxcSQaKVgoJdRFFsBAuNaGGjsTFFFGws/AcsLAx2VoJg8B8wdlqojY1a2AlCgmIRq+APkkhEjY2NiejF4lb3Odnb252d2d03tx8YmJ0b5r15+33v5riBhoaGhj6mZTzvBcaBAWO8DTwC5stwqkreAetd2tsK/fKG+abT2O3NiwoxU2APcB4YFmOTKfPVk2VD6znnq2Iw5/zJ3lNqxVfgCfCpyCLdiqKW9hO4RgH1Vr0BV+160uby1oAbGebXhRYwChyPnn8BB7A4y8goamMAeErs/5WkCSHTBh6L513mhNADAHBQ9K2+DTSnwBDwjdj/IzaLaA7AaWLfF0ko+qGnwDnRv4/lS9SqAFP+h20X0hqAMXrIH8JOASn/BxR4gRoVMASsULD6/0VjADLJH8JNAWfyB30KcCp/0BeAU8T+LtHjF2+IKeBU/qBLAYPAF2J/R10sqikAJ8khfwgvBZzLH/QowIv8QU8AcssfwkoBKf+HOHxhGhRgyv+oy8U1BEDK/yOOla0hAM+IfbzlevG6B+AisX9tYL9rA3UNwGbgKvCb2L/pvIsU/Xu825UanwwD++j85bVTjM8Bx4Dvrg2mKSDtSk2Z7QWww+WmJXUOwCJwifz3HP5RNAWSrtT45gfwGXgNvKRTA6zp+ysyWYqXjPAmX45URZYALIn+GV+OVEUWSU8Bl6P+GnCXcm6MLke22iXYSmU7sEA1Vf6C781lSYEV4AQw69mXJLyfPvNU9Rad09chPB46BG+Ae9QgBRpCxjYFAF4Bz3Gbp2XYsGKEThE0q/Rs9JkWG1b0+hpciObU3YY1U8KRVeB21FbF+E0FNqz5IJyYEONnxfh7BTasWRNObBHjW/n/rdXdRiJZToLLoj/WpS/n2FCGDWvM/JwG7uC3BviwYU2WCr1NgY1CjAAzbHRsBrfnAN82NtD3J8E/T4H499yPv2AAAAAASUVORK5CYII=",alt:"cart"})})})]})})},d=s(22),O=s.n(d),m=s(25),x=function(e){var t=e.data,s=Object(c.useContext)(p).sendData;return Object(a.jsx)("div",{className:"booklist",children:t.map((function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(A,{info:e,sendData:s},e.bookID)})}))})},A=function(e){var t=e.info,s=e.sendData,n=t.title,r=t.authors,o=t.price,b=Object(c.useState)(!1),l=Object(i.a)(b,2),j=l[0],u=l[1];return Object(a.jsxs)("div",{className:"book",onMouseEnter:function(){u(!0)},onMouseLeave:function(){return u(!1)},children:[Object(a.jsx)("div",{className:"booktitle",children:Object(a.jsx)("h3",{children:n})}),Object(a.jsx)("div",{className:"author",children:Object(a.jsx)("h4",{className:"author",children:r})}),Object(a.jsxs)("div",{className:"priceandbutton",children:[Object(a.jsxs)("h4",{className:"price",children:["Price : $ ",o]}),j&&Object(a.jsx)("button",{className:"addtocart",onClick:function(){return s(t)},children:"+ Cart"})]})]})};var f=function(){var e=function(e){var t=Object(c.useState)(!0),s=Object(i.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)([]),o=Object(i.a)(r,2),b=o[0],l=o[1],j=Object(c.useCallback)(Object(m.a)(O.a.mark((function t(){var s,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return s=t.sent,t.next=5,s.json();case 5:a=t.sent,l(a),n(!1);case 8:case"end":return t.stop()}}),t)}))),[e]);return Object(c.useEffect)((function(){j()}),[e,j]),{loading:a,bookslist:b}}("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json").bookslist,t=Object(c.useState)({books:[],booli:!0}),s=Object(i.a)(t,2),n=s[0],r=s[1],o=Object(c.useRef)(null),b=n.books,l=n.booli;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"search",children:Object(a.jsx)("form",{name:"search",onSubmit:function(t){if(t.preventDefault(),o.current.value){var s;(s=e.filter((function(e){return e.title.toString().toLowerCase().includes(o.current.value.toLowerCase())&&15321!==e.bookID}))).length>0?r({books:s,booli:!0}):r({books:[],booli:!1})}else r({books:[],booli:!0})},children:Object(a.jsx)("input",{id:"searchvalue",type:"text",placeholder:"Enter book name",ref:o})})}),b.length?Object(a.jsx)("div",{className:"count",children:Object(a.jsxs)("h4",{children:[b.length," results found"]})}):Object(a.jsx)("p",{}),l?Object(a.jsx)(x,{data:b}):Object(a.jsx)("h2",{children:"No Results found!"})]})},v=s(15);s(41),s(43);v.a.initializeApp({apiKey:"AIzaSyDJFp2qll_RZlu6RhNVLS7Tepu9KENkuz0",authDomain:"book-search-2c198.firebaseapp.com",databaseURL:"https://book-search-2c198-default-rtdb.firebaseio.com",projectId:"book-search-2c198",storageBucket:"book-search-2c198.appspot.com",messagingSenderId:"831675918202",appId:"1:831675918202:web:f65daa4016370212abd8c3",measurementId:"G-LLCDVTMEXD"});var g=new v.a.auth.GoogleAuthProvider,p=n.a.createContext(),k=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)({name:"",email:"",image:"",bool:!1,userID:""}),o=Object(i.a)(r,2),d=o[0],O=o[1];return Object(a.jsx)(p.Provider,{value:{user:d,signIn:function(){v.a.auth().signInWithPopup(g).then((function(e){return O({name:e.user.displayName,image:e.user.photoURL,email:e.user.email,userID:e.user.uid,bool:!0}),[d.bool,d.image]})).catch((function(e){}))},sendData:function(e){d.bool?v.a.database().ref("users/"+d.userID+"/itemsInCart/"+e.bookID.toString()).set(e):alert("Login to add items to cart")},cartItems:s,getData:function(){d.bool&&v.a.database().ref("users/"+d.userID+"/itemsInCart").on("value",(function(e){if(e.exists()){var t=e.val();n(Object.values(t))}else n([])}),(function(e){console.log(e)}))},removeData:function(e){d.bool&&v.a.database().ref("users/"+d.userID+"/itemsInCart/").child(e).remove()}},children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(h,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(f,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/cart",children:Object(a.jsx)(j,{})}),Object(a.jsx)(l.a,{path:"*",children:Object(a.jsx)(u,{})})]})]})})};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.3e442620.chunk.js.map