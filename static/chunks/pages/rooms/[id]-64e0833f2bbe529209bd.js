(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{8434:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return j},default:function(){return k}});var t=n(809),s=n.n(t),a=n(5893),o=n(2447),i=n(1163),c=n(5675),u=n(9008),d=n(850),l=n(7294),h=n(8279),p=n(8188),m=n(4262),f=n(1537),g=n(5820),F=n(499),x=n(5925),v=n.n(x),j=!0;function k(e){var r=e.title,n=(0,p.Z)(),t=n.user,x=n.signInWithGoogle,j=(0,i.useRouter)().query.id,k=(0,l.useState)(""),y=k[0],b=k[1],w=(0,m.Z)(j).questions;function _(){return(_=(0,o.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),""!==y.trim()){e.next=4;break}return h.ZP.error("Campo deve ser preenchido!",{style:{background:"#F56565",color:"#FFF"},iconTheme:{primary:"#FFF",secondary:"#F56565"}}),e.abrupt("return");case 4:if(t){e.next=7;break}return h.ZP.error("Usu\xe1rio n\xe3o encontrado",{style:{background:"#F56565",color:"#FFF"},iconTheme:{primary:"#FFF",secondary:"#F56565"}}),e.abrupt("return");case 7:return n={content:y,author:{name:t.name,avatar:t.avatar},isHighlighted:!1,isAnswered:!1},e.next=10,d.Fs.ref("rooms/".concat(j,"/questions")).push(n);case 10:h.ZP.success("Sugest\xe3o enviada!",{style:{background:"#68D391",color:"#FFF"},iconTheme:{primary:"#FFF",secondary:"#68D391"}}),b("");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=(0,o.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return e.next=3,x();case 3:h.ZP.success("Logado com sucesso!",{style:{background:"#68D391",color:"#FFF"},iconTheme:{primary:"#FFF",secondary:"#68D391"}});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(u.default,{children:[(0,a.jsx)("meta",{property:"og:title",content:"Letmeask ".concat(r||"")}),(0,a.jsx)("meta",{property:"og:description",content:"A sala ".concat(r," est\xe1 ao vivo e com tudo preparado para retirar suas d\xfavidas!")}),(0,a.jsx)("title",{children:"Enviar sugest\xe3o"})]}),(0,a.jsx)("header",{className:v().header,children:(0,a.jsx)("div",{children:(0,a.jsx)(c.default,{src:F.Z,alt:"Letmeask"})})}),(0,a.jsxs)("main",{className:v().main,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:r}),w.length>0&&(0,a.jsxs)("span",{children:[w.length," ",w.length>1?"sugest\xf5es":"sugest\xe3o"]})]}),(0,a.jsxs)("form",{onSubmit:function(e){return _.apply(this,arguments)},method:"POST",className:v().formAsk,children:[(0,a.jsx)("textarea",{placeholder:"Adicionar artista/louvor",value:y,onChange:function(e){return b(e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[- ]+/g,"-"))}}),(0,a.jsxs)("div",{children:[t?(0,a.jsxs)("div",{className:v().userInfo,children:[(0,a.jsx)(c.default,{src:null===t||void 0===t?void 0:t.avatar,alt:t.name,width:"32",height:"32"}),(0,a.jsx)("span",{children:t.name})]}):(0,a.jsxs)("span",{children:["Para enviar uma sugest\xe3o,"," ",(0,a.jsx)("button",{type:"button",onClick:function(){return N.apply(this,arguments)},children:"fa\xe7a seu login"}),"."]}),(0,a.jsx)(g.Z,{type:"submit",disabled:!t,children:"Enviar sugest\xe3o"})]})]}),w.map((function(e){return(0,a.jsx)(f.Z,{content:e.content,author:e.author,likeId:e.likeId,likeCount:e.likeCount,id:e.id,roomId:j,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted},e.id)}))]})]})}},4271:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rooms/[id]",function(){return n(8434)}])}},function(e){e.O(0,[774,367,860,358,888,179],(function(){return r=4271,e(e.s=r);var r}));var r=e.O();_N_E=r}]);