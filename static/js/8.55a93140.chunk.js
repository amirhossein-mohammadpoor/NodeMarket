(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{220:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return m})),a.d(t,"c",(function(){return i})),a.d(t,"f",(function(){return u})),a.d(t,"d",(function(){return s}));var n=a(4),r=a(13),c=a(27),l=function(e){var t=JSON.parse(localStorage.getItem("carts"));return localStorage.setItem("carts",JSON.stringify([].concat(Object(r.a)(t),[e]))),{type:c.a.CREATE_CART,cart:e}},o=function(e){var t=JSON.parse(localStorage.getItem("carts")).map((function(t){return t.email===e.email?{email:e.email,products:[].concat(Object(r.a)(t.products),[e.products[0]])}:t}));return localStorage.setItem("carts",JSON.stringify(t)),{type:c.a.ADD_ITEM,cart:e}},m=function(e,t){var a=function(e){return e.productId===t?{productId:e.productId,productName:e.productName,productPrice:e.productPrice,number:e.number+1}:e},n=JSON.parse(localStorage.getItem("carts")).map((function(t){return t.email===e?{email:e,products:t.products.map(a)}:t}));return localStorage.setItem("carts",JSON.stringify(n)),{type:c.a.INCREMENT_ITEM,email:e,id:t}},i=function(e,t){var a=function(e){return e.productId===t?{productId:e.productId,productName:e.productName,productPrice:e.productPrice,number:e.number-1}:e},n=JSON.parse(localStorage.getItem("carts")).map((function(t){return t.email===e?{email:e,products:t.products.map(a)}:t}));return localStorage.setItem("carts",JSON.stringify(n)),{type:c.a.DECREMENT_ITEM,email:e,id:t}},u=function(e,t){var a=JSON.parse(localStorage.getItem("carts")).map((function(a){return a.email===e?{email:e,products:a.products.filter((function(e){return e.productId!==t}))}:a}));return localStorage.setItem("carts",JSON.stringify(a)),{type:c.a.REMOVE_ITEM,email:e,id:t}},s=function(e){var t=JSON.parse(localStorage.getItem("carts")).map((function(t){return t.email===e?Object(n.a)(Object(n.a)({},t),{},{products:[]}):t}));return localStorage.setItem("carts",JSON.stringify(t)),{type:c.a.EMPTY_CART,email:e}}},225:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=(a(226),a(208));t.a=function(){return r.a.createElement("div",{className:"loading-screen"},r.a.createElement(c.a,{style:{color:"green",width:"50px",height:"50px"}}))}},226:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){},368:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),c=a(1),l=a.n(c),o=(a(252),a(57)),m=a(207),i=a(212),u=a(213),s=(a(253),function(e){var t=e.children,a=e.title,n=e.modalButtonComponent,o=Object(c.useState)(!1),m=Object(r.a)(o,2),i=m[0],u=m[1],s=function(){u(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{onClick:function(){u(!0)}},n),i?l.a.createElement("div",{className:"my-modal"},l.a.createElement("div",{className:"modal-bg",onClick:s}),l.a.createElement("div",{className:"modal-wrapper"},l.a.createElement("div",{className:"modal-contents"},l.a.createElement("div",{className:"modal-head"},l.a.createElement("span",{className:"modal-title"},a),l.a.createElement("button",{onClick:s},"\xd7")),l.a.createElement("div",{className:"modal-main"},t)))):null)}),d=a(9),p=a(28),E=a(35),f=a.n(E),g=a(36),b=a(41),v=a(208),N=a(11),h=a(254),S=a(24),I=a(220),O=a(62),y=a(61),j=a(25),k=a(225),_=a(58),C=Object(j.b)({userProducts:O.b,user:y.a});t.default=Object(S.b)(C,{addItem:I.a,incrementItem:I.e,decrementItem:I.c,removeItem:I.f,addToFavorites:_.a,removeFromFavorites:_.c})((function(e){var t=e.userProducts,a=e.user,E=e.addItem,I=e.incrementItem,O=e.decrementItem,y=e.removeItem,j=e.addToFavorites,_=e.removeFromFavorites,C=Object(d.i)().id,T=Object(d.h)(),J=Object(c.useState)({name:"",imageSrc:[],regularPrice:"",price:"",totalSales:0,points:"",stock:"",relatedIds:[]}),P=Object(r.a)(J,2),M=P[0],F=P[1],w=Object(c.useState)(!1),x=Object(r.a)(w,2),R=x[0],A=x[1],D=Object(c.useState)([]),q=Object(r.a)(D,2),B=q[0],Q=q[1],H=Object(c.useState)(""),L=Object(r.a)(H,2),U=L[0],V=L[1],W=Object(d.g)(),Y=Object(S.c)((function(e){return e.user.token})),z=t.find((function(e){return e.productId===C})),G=z?z.number:0,K=!1;a.favorites&&(K=!!a.favorites.find((function(e){return e===C})));var X=function(){return l.a.createElement("div",{className:"share-product"},l.a.createElement("span",null,l.a.createElement(N.q,{color:"blue"})," \u0627\u06cc\u0646 \u0645\u062d\u0635\u0648\u0644 \u0631\u0627 \u0628\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f"))},Z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0631\u0648\u0634\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u06cc\u0646 \u0635\u0641\u062d\u0647 \u0631\u0627 \u0628\u0627 \u062f\u0648\u0633\u062a\u0627\u0646 \u062e\u0648\u062f \u0628\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f."),l.a.createElement("div",{className:"share-buttons"},l.a.createElement("a",{href:"https://telegram.me/share/url?url=http://localhost".concat(T.pathname),target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{className:"telegram-button"},"Telegram")),l.a.createElement("a",{href:"https://api.whatsapp.com/send?text=http://localhost".concat(T.pathname),target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{className:"whatsapp-button"},"WhatsApp"))))};return Object(c.useEffect)((function(){A(!0),p.a.get("products/".concat(C)).then((function(e){var t=e.data.id,a=e.data.related_ids;V(e.data.images[0].src),F({name:e.data.name,description:e.data.description,imageSrc:e.data.images,regularPrice:e.data.regular_price,price:e.data.price,totalSales:e.data.total_sales,points:e.data.average_rating,stockQuantity:e.data.stock_quantity,relatedIds:e.data.related_ids}),p.a.get("products",{include:a.filter((function(e){return e!==t}))}).then((function(e){Q(Object(n.a)(e.data)),A(!1),document.documentElement.scrollTo(0,0)}))}))}),[C]),l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,R&&l.a.createElement(k.a,null),l.a.createElement(i.a,{className:"product-view px-3"},l.a.createElement(u.a,{xs:12,lg:6,className:"mb-4 mb-lg-0"},M.imageSrc?l.a.createElement("div",null,l.a.createElement("img",{src:U,alt:""}),l.a.createElement(f.a,g.b,R?l.a.createElement("div",{className:"spinner"},l.a.createElement(v.a,null)):M.imageSrc.map((function(e){return l.a.createElement("div",{key:e,onMouseUp:function(){return t=e.src,void V(t);var t},className:"image-nav"},l.a.createElement("img",{src:e.src,alt:""}))})))):l.a.createElement("div",{className:"spinner"},l.a.createElement(v.a,null))),l.a.createElement(u.a,{xs:12,lg:6,className:"add-to-cart-field py-3"},l.a.createElement("h4",null,M.name),l.a.createElement("p",null,l.a.createElement(N.r,{color:"gold"})," \u0627\u0645\u062a\u06cc\u0627\u0632: ",l.a.createElement("span",null,M.points)),l.a.createElement("p",null,"\u06a9\u0644 \u0641\u0631\u0648\u0634: ",l.a.createElement("span",null,M.totalSales)),l.a.createElement("p",null,"\u0645\u0648\u062c\u0648\u062f\u06cc: ",l.a.createElement("span",null,M.stockQuantity||0)),l.a.createElement("h5",null,"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a:"),l.a.createElement("span",{dangerouslySetInnerHTML:{__html:M.description}}),K?l.a.createElement("div",{className:"add-to-favorites",onClick:function(){if(!Y)return W.push("/account/signin");_(Y,C)}},l.a.createElement("span",null,l.a.createElement(h.a,{color:"red"}),"\u062d\u0630\u0641 \u06a9\u0631\u062f\u0646 \u0627\u0632 \u0639\u0644\u0627\u0642\u0647 \u0645\u0646\u062f\u06cc \u0647\u0627")):l.a.createElement("div",{className:"add-to-favorites",onClick:function(){if(!Y)return W.push("/account/signin");j(Y,C)}},l.a.createElement("span",null,l.a.createElement(h.b,{color:"red"}),"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u0628\u0647 \u0639\u0644\u0627\u0642\u0647 \u0645\u0646\u062f\u06cc \u0647\u0627")),l.a.createElement(s,{title:"\u0627\u0634\u062a\u0631\u0627\u06a9 \u06af\u0630\u0627\u0631\u06cc",modalButtonComponent:l.a.createElement(X,null)},l.a.createElement(Z,null)),l.a.createElement("div",{className:"price-field"},l.a.createElement("span",null,"\u0642\u06cc\u0645\u062a \u0645\u0635\u0631\u0641 \u06a9\u0646\u0646\u062f\u0647:"),l.a.createElement("span",{className:"regular-price"},"".concat(M.regularPrice," \u062a\u0648\u0645\u0627\u0646")),l.a.createElement("span",{className:"price"},"".concat(M.price," \u062a\u0648\u0645\u0627\u0646"))),0===G&&l.a.createElement(o.a,{onClick:function(){if(!Y)return W.push("/account/signin");var e={email:Y,products:[{productId:C,productName:M.name,productPrice:M.price,number:1}]};E(e)}},"\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0633\u0628\u062f \u062e\u0631\u06cc\u062f"),G>0&&l.a.createElement("div",{className:"edit-number"},l.a.createElement("button",{className:"plus",onClick:function(){if(!Y)return W.push("/account/signin");I(Y,C)}},"+"),l.a.createElement("span",{className:"number"},G),G>1&&l.a.createElement("button",{className:"minus",onClick:function(){if(!Y)return W.push("/account/signin");O(Y,C)}},"-"),1===G&&l.a.createElement("button",{className:"minus",onClick:function(){if(!Y)return W.push("/account/signin");y(Y,C)}},l.a.createElement(N.s,null))))),l.a.createElement("div",{className:"related-products"},l.a.createElement("h2",null,"\u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0645\u0631\u062a\u0628\u0637"),l.a.createElement(f.a,g.c,0!==B.length?B.map((function(e){return l.a.createElement(b.a,{key:e.id,title:e.name,imageSrc:e.images[0].src,regularPrice:e.regular_price,price:e.price,id:e.id})})):l.a.createElement("div",{className:"spinner"},l.a.createElement(v.a,null))))))}))}}]);
//# sourceMappingURL=8.55a93140.chunk.js.map