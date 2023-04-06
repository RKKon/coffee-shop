"use strict";(self.webpackChunkcoffee_shop=self.webpackChunkcoffee_shop||[]).push([[456],{7717:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(1087),s=t.p+"static/media/404.a59a7f5d4f0f851490ff.jpg",c=t(184),i=function(e){var n=e.selector,t=void 0===n?"coffee_not_found":n,i=e.visibleLink,a=void 0===i||i;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{className:"coffee_not_found_title",children:"Sorry we didn't find coffee. Try later"}),a?(0,c.jsx)(r.rU,{to:"/",children:(0,c.jsx)("button",{className:"page_not_found_text",children:"Back to main page"})}):null,(0,c.jsx)("img",{className:t,src:s,alt:"coffee not found"})]})}},7435:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(1413),s=t(3433),c=t(4165),i=t(5861),a=t(9439),o=t(4270),l=t(2791),u=t(9801),f=t(7282),d=(t(9775),t.p+"static/media/our_coffee.b1d868b7b0d5c94af4fc.jpg"),m=t(1284),h=t(184),x=function(){return(0,h.jsxs)("section",{className:"our_coffee",children:[(0,h.jsxs)("div",{className:"our_coffee_flex",children:[(0,h.jsx)("img",{className:"about_our_beans_img",src:d,alt:"our coffee"}),(0,h.jsxs)("div",{className:"about_our_beans_description",children:[(0,h.jsx)("h2",{className:"content_title",children:"About our beans"}),(0,h.jsx)("div",{className:"flex_wrapper_beans",children:(0,h.jsxs)("div",{className:"flex_beans about_us_margin_beans",children:[(0,h.jsx)("div",{className:"left_line"}),(0,h.jsx)("img",{className:"coffee_beans_img",src:m,alt:"coffee beans"}),(0,h.jsx)("div",{className:"right_line"})]})}),(0,h.jsxs)("p",{className:"text",children:["Extremity sweetness difficult behavior he of. On disposal of as landlord horrible.",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"Afraid at highly months do things on at. Situation recommend objection do intention",(0,h.jsx)("br",{}),"so questions.",(0,h.jsx)("br",{}),"As greatly removed calling pleased improve an. ",(0,h.jsx)("br",{})," Last ask him cold feel ",(0,h.jsx)("br",{}),"met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face."]})]})]}),(0,h.jsx)("div",{className:"big_line"})]})},j=t(1087),p=t(649),A=function(e){var n=e.filteredCoffeeItem,t=e.addToCart,r=function(e){return e.target.src=p};return(0,h.jsx)(h.Fragment,{children:n.map((function(e){return(0,h.jsxs)("li",{className:"search_flex_item",children:[(0,h.jsxs)(j.rU,{to:"/ourCoffee/".concat(e.id?e.id:null),children:[(0,h.jsx)("img",{className:"search_item_img",src:e.image?e.image:p,alt:e.title?e.title:null,onError:r}),(0,h.jsx)("h3",{className:"coffee_name",children:e.title?e.title:null}),(0,h.jsxs)("p",{className:"coffee_country",children:["Ingredients:",(0,h.jsxs)("span",{children:[" ",e.ingredients?e.ingredients.join(", "):null]})]})]}),(0,h.jsxs)("div",{className:"coffee_item_on_bottom",children:[(0,h.jsx)("p",{className:"coffee_price",children:e.price?e.price:null}),(0,h.jsx)("button",{onClick:function(){return t(e.id?e.id:null)},className:"buy_btn",children:"Buy now"})]})]},e.id?e.id:null)}))})},g=t(7717),b=t(8733),_=function(e){var n=e.coffeeItem,t=e.coffeeInServer,r=e.allItems,s=e.basicFilter,c=e.loading,i=e.addToCart,o=e.updateCoffeeDataFromAPI,u=(0,l.useState)(s||null),f=(0,a.Z)(u,2),d=f[0],m=f[1],x=(0,l.useState)(""),j=(0,a.Z)(x,2),p=j[0],_=j[1],C=function(e){"allItems"===e?m(r):"drinkCoffee"===e?m(n):"coffeeBeans"===e?m(t):console.log("Happened an error")};return(0,l.useEffect)((function(){!function(){if(o(),(!d||!d.length)&&n){var e=[];n.map((function(n){return e.length<9?e.push(n):null})),m(e)}}()}),[n]),(0,h.jsxs)("section",{className:"search_and_filter_panel",children:[(0,h.jsxs)("div",{className:"search_menu_flex",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:"searchCoffee",children:"Looking for"}),(0,h.jsx)("input",{onChange:function(e){var n=e.target.value;_(n),m(r.filter((function(e){return e.title.toLowerCase().indexOf(n)>-1})))},value:p,id:"searchCoffee",name:"searchCoffee",type:"text",placeholder:"start typing here..."})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{className:"filter_mr",htmlFor:"filerCoffee",children:"Or filter"}),(0,h.jsx)("input",{onClick:function(){return C("allItems")},className:"filter_style",type:"button",value:"All Coffee",id:"all",name:"allCoffee"}),(0,h.jsx)("input",{onClick:function(){return C("drinkCoffee")},className:"filter_style",type:"button",value:"Drink coffee",id:"brazil",name:"brazil"}),(0,h.jsx)("input",{onClick:function(){return C("coffeeBeans")},className:"filter_style",type:"button",value:"Coffee beans",id:"columbia",name:"columbia"})]})]}),(0,h.jsxs)("ul",{className:"search_flex",children:[" ",c?(0,h.jsx)(b.Z,{selectorId:"preloader_for_items"}):d?(0,h.jsx)(A,{filteredCoffeeItem:d,addToCart:i}):(0,h.jsx)(g.Z,{visibleLink:!1})]}),(0,h.jsx)("button",{onClick:function(){document.querySelector(".btn_see_all_coffee").style.display="none",C("allItems")},className:"btn_see_all_coffee",children:"See all coffee"})]})},C=function(){return(0,h.jsx)("div",{className:"form_message",children:(0,h.jsx)("h2",{className:"form_message_text",children:"Thank you. Soon we will contact you."})})},v=function(e){var n=e.closeForm,t=e.sendForm,r=e.customerPhoneValue;return(0,h.jsx)("div",{className:"form_wrapper",children:(0,h.jsxs)("form",{className:"form",children:[(0,h.jsx)("div",{onClick:n,className:"form_cross",children:"\xd7"})," ",(0,h.jsx)("h2",{className:"form_h2",children:"It is time to drink coffee"}),(0,h.jsx)("input",{onChange:function(e){return r(e.target.value)},required:!0,name:"phone",className:"form_input",type:"text",placeholder:"Your phone number"}),(0,h.jsx)("button",{type:"submit",onClick:t,className:"form_btn",children:"I want coffee"})]})})},N=function(e){var n=e.cart,t=e.showCart,r=e.onDeleteFromCart,s=e.totalPrice,c=e.onCartDecrCoffee,i=e.onCartIncrCoffee,o=e.setCart,u=e.setTotalPrice,f=(0,l.useState)(!1),d=(0,a.Z)(f,2),m=d[0],x=d[1],j=(0,l.useState)(null),p=(0,a.Z)(j,2),A=p[0],g=p[1],b=(0,l.useState)(!1),_=(0,a.Z)(b,2),N=_[0],w=_[1];return(0,h.jsxs)("div",{className:"cart",children:[m?(0,h.jsx)(v,{closeForm:function(){x(!1),document.body.style.overflow=""},sendForm:function(e){e.preventDefault();var t=document.createElement("div");t.textContent="Please, enter correct phone number.",t.classList.add("form_message_error_phone");if(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,14}(\s*)?$/.test(A))x(!1),document.body.style.overflow="",console.log(A,"".concat(s,"$"),n),o([]),u(0),w(!0),setTimeout((function(){return w(!1)}),3e3);else{console.log("error");var r=document.querySelector(".form").childNodes;r[5]&&r[5].remove(),document.querySelector(".form_btn").after(t),w(!1)}},customerPhoneValue:g}):null,N?(0,h.jsx)(C,{}):null,(0,h.jsx)("img",{className:"cart_img",onClick:t,src:"data:image/png;base64,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",alt:"cart"}),(0,h.jsxs)("div",{className:"cart_list cart_items_display_none",children:[(0,h.jsx)("button",{className:"cart_close",onClick:t,children:"\xd7"})," ",(0,h.jsxs)("p",{className:"cart_title",children:[(0,h.jsx)("span",{className:"cart_title_item_margin",children:"Coffee name"}),(0,h.jsx)("span",{className:"cart_title_amount",children:"Amount"}),(0,h.jsx)("span",{children:"Price"})]}),n?n.map((function(e,n){return(0,h.jsxs)("div",{className:"cart_item",children:[(0,h.jsx)("span",{className:"cart_item_name",children:e.title?e.title:null}),(0,h.jsxs)("div",{className:"cart_quantity",children:[(0,h.jsx)("button",{className:"cart_minus_quantity_btn",onClick:function(){return c(e.id)},children:"-"}),(0,h.jsx)("span",{children:e.quantity?e.quantity:null}),(0,h.jsx)("button",{className:"cart_plus_quantity_btn",onClick:function(){return i(e.id)},children:"+"})]}),(0,h.jsx)("span",{className:"cart_item_price",children:e.price?e.price:null}),(0,h.jsx)("button",{onClick:function(){return r(e.id?e.id:null)},className:"cart_trash_can",children:(0,h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKUlEQVR4nO2XQUrDQBiF5x7dinfRizijl3Dpyhxhft1JsU1p0Lg3SQ8w0cSl3bagJ/jFoAiStIXJP6XhffDI4jHhPeZlEaUAAGAwlNZclmR4o6y5UgcbnvZU4mH6fJrG2TKNcw6jbPk0KU56KxA2fN7oMc7eeywQNnz6IxT4z84fqaeUFChAuAE/Bjeh1yTitzzmKom41StmjTr9vP1ssAJNwMW8eXZ62/xitscCvwEXc97kbfNLFNgR3ABhQn5gQoQJ+YEJESbkByZEmJAfmBBhQn4Mb0LFgf9SVknEdTblKrnmNu/vp77drzvOBisgJSWFs/pTOrwj8yFWoCR9L34DVo/FCrzcXBw7q1eCBdbu9vxISVLT2chZc9fnnNz3u6wei4cHYIB8ARFoX32icJz7AAAAAElFTkSuQmCC",alt:"trash can"})})]},n)})):null,(0,h.jsxs)("p",{className:"cart_total",children:["Total: ",s||null,"$"]}),(0,h.jsx)("button",{onClick:function(){x(!0),document.body.style.overflow="hidden",t()},className:"buy_btn cart_btn",children:"Get Coffee"})]})]})},w=function(e){var n=e.allItems,t=e.addToCart,r=+(24*Math.random()).toFixed()+1,s=(0,l.useState)(n[r]),c=(0,a.Z)(s,2),i=c[0],o=c[1];return(0,l.useState)((function(){return o(n?n[r]:null)}),[]),(0,h.jsx)("section",{style:{margin:"50px",fontSize:"26px"},children:(0,h.jsxs)("div",{className:"random_coffee",children:[(0,h.jsx)("h2",{className:"random_coffee_title",children:"Tired from usual coffee? Try new one!"}),(0,h.jsxs)("div",{className:"random_coffee_card",children:[(0,h.jsx)("img",{className:"random_coffee_card_img",onError:function(e){return e.target.src=p},src:i.image?i.image:p,alt:i.title?i.title:null}),(0,h.jsxs)("div",{className:"random_coffee_card_flex_div",children:[(0,h.jsx)("h3",{className:"coffee_name",children:i.title?i.title:null}),(0,h.jsxs)("p",{className:"random_coffee_ingredients",children:["Ingredients:",(0,h.jsxs)("span",{children:[" ",i.ingredients?i.ingredients.join(", "):null]})]}),(0,h.jsx)("p",{className:"random_coffee_price",children:i.price?i.price:null}),(0,h.jsx)("button",{onClick:function(){return t(i.id?i.id:null)},className:"random_coffee_card_btn",children:"Try now"})]})]}),(0,h.jsx)("button",{onClick:function(){r=+(24*Math.random()).toFixed()+1,o(n?n[r]:null)},className:"random_coffee_btn",children:"Try new coffee"})]})})},y=function(){var e=(0,l.useState)(null),n=(0,a.Z)(e,2),t=n[0],d=n[1],m=(0,l.useState)(null),j=(0,a.Z)(m,2),p=j[0],A=j[1],C=(0,l.useState)(null),v=(0,a.Z)(C,2),y=v[0],S=v[1],I=(0,l.useState)(null),Z=(0,a.Z)(I,2),E=Z[0],T=Z[1],B=(0,l.useState)([]),k=(0,a.Z)(B,2),R=k[0],F=k[1],D=(0,l.useState)(0),P=(0,a.Z)(D,2),q=P[0],Q=P[1],K=(0,l.useState)(!0),M=(0,a.Z)(K,2),z=M[0],H=M[1],O=["1.29$","2.30$","3.10$","1.99$","2.00$","1.69$","3.10$","4.99$","2.49$","1.99$","2.20$","2.99$","3.99$","2.59$","2.99$","3.49$","2.10$","1.49$","2.30$","4.29$"],U=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.g)(d,H);case 2:(0,u.T)(A);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){t&&(t.map((function(e,n){e.price=O[n],e.quantity=1})),S(t.concat(p)))},G=function(e){var n=y.filter((function(n){return n.id===e}));if(!R.length)return F((function(e){return[].concat((0,s.Z)(e),[n[0]])}));var t=0;return R.map((function(r){r.id===n[0].id&&(L(e),t=1)})),t?void 0:F((function(e){return[].concat((0,s.Z)(e),[n[0]])}))},L=function(e){return R?F(R.map((function(n){if(n.id===e){var t="";return y.map((function(r){r.id===e&&(t=(+n.price.slice(0,-1)+ +r.price.slice(0,-1)).toFixed(2)+"$")})),(0,r.Z)((0,r.Z)({},n),{},{quantity:n.quantity+1,price:t})}return n}))):null};return(0,l.useEffect)((function(){U()}),[]),(0,l.useEffect)((function(){!function(){if(V(),(!E||!E.length)&&t){var e=[];t.map((function(n){return e.length<9?e.push(n):null})),T(e)}}()}),[t]),(0,l.useEffect)((function(){!function(){if(R){for(var e=0,n=0;R.length>n;n++)R[n].price&&(e+=+R[n].price.slice(0,-1));Q(e.toFixed(2))}}()}),[R]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(o.q,{children:[(0,h.jsx)("meta",{name:"description",content:"App made by my own. I using here React."}),(0,h.jsx)("title",{children:"Our Coffee"})]}),(0,h.jsx)(f.Z,{subheaderBG:"subheader_our_coffee",subheaderTitle:"Our Coffee"}),(0,h.jsx)(x,{}),z?(0,h.jsx)(b.Z,{selectorId:"preloader_for_items"}):E?(0,h.jsx)(w,{allItems:y,addToCart:G}):(0,h.jsx)(g.Z,{visibleLink:!1}),(0,h.jsx)(N,{cart:R,showCart:function(){return document.querySelector(".cart_list").classList.toggle("cart_items_display_none")},onDeleteFromCart:function(e){F(R?R.filter((function(n){return n.id!==e})):null)},totalPrice:q,onCartDecrCoffee:function(e){return R?F(R.map((function(n){if(n.id===e){if(0!==n.quantity){var t="";return y.map((function(r){r.id===e&&(t=(+n.price.slice(0,-1)-+r.price.slice(0,-1)).toFixed(2)+"$")})),(0,r.Z)((0,r.Z)({},n),{},{quantity:n.quantity-1,price:t})}return n}return n}))):null},onCartIncrCoffee:L,setCart:F,setTotalPrice:Q}),(0,h.jsx)(_,{coffeeItem:t,coffeeInServer:p,allItems:y,basicFilter:E,cart:R,totalPrice:q,loading:z,addToCart:G,updateCoffeeDataFromAPI:V})]})}},9801:function(e,n,t){t.d(n,{T:function(){return c},g:function(){return i}});var r=t(4165),s=t(5861),c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"./db.json";fetch(n).then((function(e){return e.json()})).then((function(n){return e(n.coffeeCard)})).catch((function(e){return console.log(e.message)}))},i=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.sampleapis.com/coffee/hot").then((function(e){return e.json()})).then((function(e){for(var r=[],s=0;s<20;s++)r.push(e[s]);r&&r.length&&t(!1),n(r)})).catch((function(e){return t(!1),console.log(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},7282:function(e,n,t){t(9775),t(5481);var r=t(184);n.Z=function(e){var n=e.subheaderBG,t=e.subheaderTitle;return(0,r.jsx)("section",{className:n,children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"subheader_content",children:(0,r.jsx)("h1",{className:"title",children:t})})})})}},5481:function(){},649:function(e,n,t){e.exports=t.p+"static/media/img_not_found.9b82276c5760c55b592e.jpg"}}]);
//# sourceMappingURL=456.637ca6e5.chunk.js.map