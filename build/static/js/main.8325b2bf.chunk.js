(this["webpackJsonpreact-sticky-notes"]=this["webpackJsonpreact-sticky-notes"]||[]).push([[0],{106:function(e,t,n){e.exports={btn:"Button_btn__1Lkv5"}},110:function(e,t,n){e.exports={ldsSpinner:"Loader_ldsSpinner__3EoF6"}},124:function(e,t,n){},15:function(e,t,n){e.exports={modal:"Modal_modal__1vwov",close:"Modal_close__2EfR5",textarea:"Modal_textarea__38nGH",bottomSide:"Modal_bottomSide__3-nPS",favourite:"Modal_favourite__2n_GL",buttons:"Modal_buttons__1vmlV"}},19:function(e,t,n){e.exports={card:"Card_card__35wN0",removeBtn:"Card_removeBtn__2pVc6",text:"Card_text__nO5sW",favourite:"Card_favourite__2vU3w",bottomSide:"Card_bottomSide__2Cwd3",date:"Card_date__2c778"}},22:function(e,t,n){e.exports={container:"Container_container__3eZVY",switcher:"Container_switcher__2_EGx",list:"Container_list__2bdlc",addBtn:"Container_addBtn__2gglr",loader:"Container_loader__3Zdq0"}},255:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(39),r=n.n(a),o=(n(124),n(22)),s=n.n(o),d=n(21),l=n(19),u=n.n(l),j=n.p+"static/media/star.de82f684.svg",b=n.p+"static/media/pencil.32c487a9.svg",f=n(106),v=n.n(f),x=n(3);var O=function(e){var t=e.iconUrl,n=e.tooltip,c=e.clickHandler;return Object(x.jsx)("button",{onClick:c,className:v.a.btn,children:Object(x.jsx)("img",{src:t,alt:n})})},m=n(6),h=n(14),_=Object(h.c)({name:"modal",initialState:{visible:!1,id:null},reducers:{setModalVisibility:function(e,t){e.visible=t.payload.visible,e.id=t.payload.id}}}),p=_.actions.setModalVisibility,g=_.reducer,N=n(117),C=n(69),y=n.n(C),w=n(107),k=n(108),S=n.n(k),D=function(){return S.a.get("/db.json").then((function(e){return e.data}))},I=Object(h.b)("notes/fetchNotes",Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),M=Object(h.c)({name:"notes",initialState:{items:[],isLoaded:!1,filtered:!1},reducers:{addNote:function(e,t){e.items=[].concat(Object(N.a)(e.items),[t.payload])},removeNote:function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload}))},changeNoteText:function(e,t){var n=e.items.findIndex((function(e){return e.id===t.payload.id}));e.items[n].text=t.payload.value},changeFavouriteStatus:function(e,t){var n=e.items.findIndex((function(e){return e.id===t.payload}));e.items[n].favourite=!e.items[n].favourite},changeNoteColor:function(e,t){var n=e.items.findIndex((function(e){return e.id===t.payload.id}));e.items[n].color=t.payload.color},setFilteredStatus:function(e,t){e.filtered=t.payload},setNotesOrder:function(e,t){var n=e.items.findIndex((function(e){return e.id===t.payload.hoverID})),c=e.items.findIndex((function(e){return e.id===t.payload.cardID})),i=[e.items[c],e.items[n]];e.items[n]=i[0],e.items[c]=i[1]}},extraReducers:function(e){e.addCase(I.fulfilled,(function(e,t){e.isLoaded=!0,e.items=t.payload}))}}),B=M.actions,F=B.addNote,A=B.removeNote,E=B.changeNoteText,H=B.changeFavouriteStatus,L=B.changeNoteColor,R=B.setFilteredStatus,J=B.setNotesOrder,V=M.reducer;var U=n(263),G=n(262);var P=function(e){var t,n,i=e.card,a=e.index,r=e.moveCard,o=Object(c.useRef)(null),s=Object(U.a)({accept:"card",collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,t){var n;if(o.current){var c=e.index,i=a;if(c!==i){var s=null===(n=o.current)||void 0===n?void 0:n.getBoundingClientRect(),d=(s.bottom-s.top)/2,l=t.getClientOffset().y-s.top;c<i&&l<d||c>i&&l>d||(r(c,i),e.index=i)}}}}),l=Object(d.a)(s,2),f=l[0].handlerId,v=l[1],h=Object(m.b)(),_=Object(G.a)({type:"card",item:function(){return{id:i.id,index:a}},collect:function(e){return{isDragging:e.isDragging()}}}),g=Object(d.a)(_,2),N=g[0].isDragging?0:1;return(0,g[1])(v(o)),Object(x.jsxs)("div",{ref:o,className:u.a.card,style:{backgroundColor:i.color,opacity:N},"data-handler-id":f,children:[Object(x.jsx)("button",{className:u.a.removeBtn,onClick:function(){window.confirm("Are you sure that you want to remove note?")&&h(A(i.id))},children:Object(x.jsx)("span",{children:"\xd7"})}),Object(x.jsxs)("div",{children:[i.favourite&&Object(x.jsx)("div",{className:u.a.favourite,children:Object(x.jsx)(O,{clickHandler:function(){h(H(i.id))},tooltip:"*",iconUrl:j})}),Object(x.jsx)("p",{className:u.a.text,children:(t=i.text,n=110,t.length<=n?t:(t=t.slice(0,n),t+="..."))})]}),Object(x.jsxs)("div",{className:u.a.bottomSide,children:[Object(x.jsx)("p",{className:u.a.date,children:i.date}),Object(x.jsx)(O,{iconUrl:b,tooltip:"edit",clickHandler:function(){h(p({visible:!0,id:i.id}))}})]})]})},T=n(40),Y=Object(T.a)((function(e){return e.notes}),(function(e){var t=e.items;return e.filtered?t.filter((function(e){return e.favourite})):t})),Z=function(e){return e.notes.isLoaded},q=function(e){return e.notes.filtered},W=n(110),z=n.n(W);var K=function(){return Object(x.jsxs)("div",{className:z.a.ldsSpinner,children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})},Q=n(46),X=n.n(Q);function $(){var e=Object(m.c)(q),t=Object(m.b)();function n(e){t(R(e))}return Object(x.jsxs)("div",{className:X.a.switcher,children:[Object(x.jsx)("span",{children:"Show: "}),Object(x.jsx)("button",{onClick:function(){return n(!1)},className:e?"":X.a.active,children:"All"}),Object(x.jsx)("button",{onClick:function(){return n(!0)},className:e?X.a.active:"",children:"Starred"})]})}var ee=i.a.memo($);var te=function(){var e=Object(m.b)(),t=Object(m.c)(Z),n=Object(m.c)(Y);Object(c.useEffect)((function(){e(I())}),[]);var i=Object(c.useCallback)((function(t,c){e(J({hoverID:n[c].id,cardID:n[t].id}))}),[n]);return Object(x.jsx)("div",{className:s.a.container,children:Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsx)("div",{className:s.a.switcher,children:Object(x.jsx)(ee,{})}),t&&Object(x.jsx)("button",{className:s.a.addBtn,onClick:function(){e(p({visible:!0,id:null}))},children:Object(x.jsx)("span",{children:"+"})}),Object(x.jsx)("div",{className:s.a.list,children:t?n.map((function(e,t){return Object(x.jsx)(P,{card:e,moveCard:i,index:t},e.id)})):Object(x.jsx)("div",{className:s.a.loader,children:Object(x.jsx)(K,{})})})]})})},ne=n(15),ce=n.n(ne),ie=n(115),ae=function(e){return e.modal},re=["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."];var oe=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("#7BDCB5"),o=Object(d.a)(r,2),s=o[0],l=o[1],u=Object(m.c)(ae),b=u.id,f=u.visible,v=Object(m.c)((function(e){return function(e,t){return e.notes.items.find((function(e){return e.id===t}))}(e,b)}));Object(c.useEffect)((function(){v&&(a(v.text),l(v.color))}),[]);var O=i.a.useRef(null),h=Object(m.b)();function _(){h(p({visible:!1,id:null}))}return Object(c.useEffect)((function(){return f&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="visible"}}),[f]),Object(x.jsx)("div",{className:ce.a.modal,onClick:_,children:Object(x.jsxs)("form",{ref:O,onClick:function(e){return e.stopPropagation()},children:[Object(x.jsx)("div",{className:ce.a.close,onClick:_,children:"\xd7"}),Object(x.jsx)("div",{className:ce.a.textarea,children:Object(x.jsx)("textarea",{value:n,onChange:function(e){a(e.target.value)},placeholder:"Note text..."})}),Object(x.jsxs)("div",{className:ce.a.bottomSide,children:[Object(x.jsx)("div",{children:Object(x.jsx)(ie.a,{onChangeComplete:function(e){return l(e.hex)},color:s})}),Object(x.jsxs)("div",{className:ce.a.controls,children:[null!==b&&v&&Object(x.jsxs)("button",{className:ce.a.favourite,onClick:function(e){e.preventDefault(),null!==b&&h(H(b))},children:[Object(x.jsxs)("span",{children:[v.favourite?"Remove from":"Add to"," favourite"]}),Object(x.jsx)("img",{src:j,alt:"Add to favourite"})]}),Object(x.jsxs)("div",{className:ce.a.buttons,children:[Object(x.jsx)("button",{onClick:null===b?function(e){if(e.preventDefault(),0!==n.trim().length){var t=function(e){return"".concat(re[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())}(new Date),c={id:1e3*Math.random(),date:t,favourite:!1,color:s,text:n.trim()};h(F(c)),_()}}:function(e){e.preventDefault(),null!==b&&(v&&v.text!==n&&0!==n.trim().length&&h(E({id:b,value:n})),v&&v.color!==s&&h(L({id:b,color:s})),_())},children:"Apply"}),Object(x.jsx)("button",{onClick:_,children:"Cancel"})]})]})]})]})})};var se=function(){var e=Object(m.c)(ae).visible;return Object(x.jsxs)("div",{children:[Object(x.jsx)(te,{}),e&&Object(x.jsx)(oe,{})]})},de=Object(h.a)({reducer:{modal:g,notes:V}}),le=n(261),ue=n(116);r.a.render(Object(x.jsx)(m.a,{store:de,children:Object(x.jsx)(le.a,{backend:ue.a,children:Object(x.jsx)(se,{})})}),document.getElementById("root"))},46:function(e,t,n){e.exports={switcher:"Switcher_switcher__1HLxH",active:"Switcher_active__1ihjF"}}},[[255,1,2]]]);
//# sourceMappingURL=main.8325b2bf.chunk.js.map