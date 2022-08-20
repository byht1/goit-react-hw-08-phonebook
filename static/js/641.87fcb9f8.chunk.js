"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[641,297,756,387,821,153,751,418,42,705,313,24,957],{8493:function(n,t,e){e.r(t),e.d(t,{Contact:function(){return f}});var r=e(885),o=e(2791),i=e(6856),a=e(8748),c=e(9126),s=e(297),l=e(9434),u=e(24),d=e(1751),p=e(3329),f=function(n){var t=n.data,e=t.id,f=t.name,x=t.number,h=(0,o.useState)(null),g=(0,r.Z)(h,2),m=g[0],b=g[1],y=(0,o.useState)(!1),v=(0,r.Z)(y,2),j=v[0],w=v[1],C=(0,o.useState)(!1),Z=(0,r.Z)(C,2),k=Z[0],E=Z[1],O=(0,l.I0)();(0,o.useEffect)((function(){b(f[0].toUpperCase())}),[f]);return(0,p.jsxs)(s.Elements,{children:[(0,p.jsxs)(s.NameContacts,{children:[(0,p.jsx)(s.IconBox,{children:m}),f,": ",x]}),(0,p.jsxs)(s.ButtonBox,{children:[(0,p.jsx)(s.Button,{type:"button",onClick:function(){return n=e,w(!0),O(u.contactsOperations.deleteContact(n)),void w(!1);var n},dispatch:j,children:j?(0,p.jsx)(a.gy,{width:20,height:20}):(0,p.jsx)(i.ZkW,{size:20})}),(0,p.jsx)(s.Button,{type:"button",onClick:function(){return E(!0)},children:(0,p.jsx)(c.Aac,{size:20})})]}),k&&(0,p.jsx)(d.ModalCorrection,{name:f,number:x,id:e,close:E})]})}},6641:function(n,t,e){e.r(t),e.d(t,{ContactList:function(){return l}});var r=e(8493),o=e(297),i=e(4756),a=e(4705),c=e(1153),s=e(3329),l=function(){var n=(0,a.useContactList)(),t=n.renderContacts,e=n.contacts,l=n.isLoadingContacts;return console.log("\ud83d\ude80 ~ isLoadingContacts",l),(0,s.jsxs)(o.ContactListWrapper,{children:[(0,s.jsx)(o.Title,{children:"Contact List"}),l?(0,s.jsx)(c.default,{}):0===e.length?(0,s.jsx)(i.ErrorContactList,{}):(0,s.jsx)(o.List,{children:t.map((function(n){return(0,s.jsx)(r.Contact,{data:n},n.id)}))})]})}},297:function(n,t,e){e.r(t),e.d(t,{Button:function(){return y},ButtonBox:function(){return b},ContactListWrapper:function(){return f},Elements:function(){return g},IconBox:function(){return v},List:function(){return h},NameContacts:function(){return m},Title:function(){return x}});var r,o,i,a,c,s,l,u,d=e(168),p=e(6444),f=p.ZP.div(r||(r=(0,d.Z)(["\n  overflow: auto;\n  padding: 20px 30px;\n  width: 600px;\n  max-height: 320px;\n  border-radius: 5px;\n  background-color: var(--background-card-box);\n"]))),x=p.ZP.h2(o||(o=(0,d.Z)(["\n  text-align: center;\n"]))),h=p.ZP.ul(i||(i=(0,d.Z)(["\n  margin-top: 30px;\n"]))),g=p.ZP.li(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n\n  &:not(:first-child) {\n    margin-top: 20px;\n  }\n"]))),m=p.ZP.p(c||(c=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  font-size: 1.2em;\n"]))),b=p.ZP.div(s||(s=(0,d.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),y=p.ZP.button(l||(l=(0,d.Z)(["\n  padding: 5px 15px;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n"]))),v=p.ZP.span(u||(u=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--contact-list);\n  font-size: 20px;\n"])))},4756:function(n,t,e){e.r(t),e.d(t,{ErrorContactList:function(){return a}});e(2791);var r=e(7692),o=e(8387),i=e(3329),a=function(){return(0,i.jsxs)(o.ErrorBox,{children:[(0,i.jsx)(r.tJu,{color:"red",size:40}),(0,i.jsx)("p",{children:"There is No contact in your contacts list!"})]})}},8387:function(n,t,e){e.r(t),e.d(t,{ErrorBox:function(){return i}});var r,o=e(168),i=e(6444).ZP.div(r||(r=(0,o.Z)(["\n  margin-top: 20px;\n  padding: 15px 10px;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  background-color: rgba(255, 0, 0, 0.2);\n"])))},2821:function(n,t,e){e.r(t),e.d(t,{ButtonSubmit:function(){return m},Form:function(){return f},FormWrapper:function(){return p},InputForm:function(){return g},Label:function(){return x},SpanText:function(){return h}});var r,o,i,a,c,s,l=e(168),u=e(6444),d=e(9042),p=u.ZP.div(r||(r=(0,l.Z)(["\n  width: 500px;\n  padding: 20px 30px;\n  border-radius: 5px;\n  background-color: var(--background-card-box);\n"]))),f=u.ZP.form(o||(o=(0,l.Z)(["\n  width: 100%;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n"]))),x=u.ZP.label(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),h=u.ZP.span(a||(a=(0,l.Z)(["\n  display: inline-block;\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n  line-height: 30px;\n  font-weight: 500;\n  color: #fff;\n"]))),g=(0,u.ZP)(d.Input)(c||(c=(0,l.Z)(["\n  display: inline-block;\n  padding: 10px 10px 10px 20px;\n  margin: 0;\n  margin-left: auto;\n  width: 300px;\n"]))),m=u.ZP.input(s||(s=(0,l.Z)(["\n  display: block;\n  /* max-width: 150px; */\n  margin: 0 auto;\n  margin-top: 40px;\n  padding: 5px 20px;\n\n  font-family: 'Orbitron', sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.88;\n  background: transparent;\n  border: 1px solid transparent;\n  box-shadow: inset 0 0 20px hsl(0deg 0% 100% / 0%);\n  color: #fff;\n  outline: 2px solid;\n  outline-color: hsla(0, 0%, 100%, 0.5);\n  outline-offset: 0;\n  position: relative;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: uppercase;\n  transition: all 1.25s cubic-bezier(0.19, 1, 0.22, 1);\n  :hover {\n    border: 1px solid;\n    box-shadow: inset 0 0 20px hsl(0deg 0% 100% / 50%),\n      0 0 20px hsl(0deg 0% 100% / 20%);\n    outline-color: hsla(0, 0%, 100%, 0);\n    outline-offset: 15px;\n  }\n"])))},1153:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(1413),o=e(2791),i=function(){return i=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},i.apply(this,arguments)};var a=function(n){var t=n.animate,e=n.animateBegin,r=n.backgroundColor,a=n.backgroundOpacity,c=n.baseUrl,s=n.children,l=n.foregroundColor,u=n.foregroundOpacity,d=n.gradientRatio,p=n.gradientDirection,f=n.uniqueKey,x=n.interval,h=n.rtl,g=n.speed,m=n.style,b=n.title,y=n.beforeMask,v=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e}(n,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),j=f||Math.random().toString(36).substring(6),w=j+"-diff",C=j+"-animated-diff",Z=j+"-aria",k=h?{transform:"scaleX(-1)"}:null,E="0; "+x+"; 1",O=g+"s",P="top-bottom"===p?"rotate(90)":void 0;return(0,o.createElement)("svg",i({"aria-labelledby":Z,role:"img",style:i(i({},m),k)},v),b?(0,o.createElement)("title",{id:Z},b):null,y&&(0,o.isValidElement)(y)?y:null,(0,o.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+w+")",style:{fill:"url("+c+"#"+C+")"}}),(0,o.createElement)("defs",null,(0,o.createElement)("clipPath",{id:w},s),(0,o.createElement)("linearGradient",{id:C,gradientTransform:P},(0,o.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:a},t&&(0,o.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:E,dur:O,repeatCount:"indefinite",begin:e})),(0,o.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:u},t&&(0,o.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:E,dur:O,repeatCount:"indefinite",begin:e})),(0,o.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:a},t&&(0,o.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:E,dur:O,repeatCount:"indefinite",begin:e})))))};a.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var c=function(n){return n.children?(0,o.createElement)(a,i({},n)):(0,o.createElement)(s,i({},n))},s=function(n){return(0,o.createElement)(c,i({viewBox:"0 0 476 124"},n),(0,o.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,o.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,o.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,o.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,o.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,o.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},l=c,u=e(3329),d=function(n){return(0,u.jsxs)(l,(0,r.Z)((0,r.Z)({speed:1.3,width:540,height:195,viewBox:"0 0 540 195",backgroundColor:"#d9d9d9",foregroundColor:"var(--background-card-box)"},n),{},{children:[(0,u.jsx)("circle",{cx:"20",cy:"40",r:"20"}),(0,u.jsx)("rect",{x:"493",y:"25",rx:"4",ry:"4",width:"47",height:"30"}),(0,u.jsx)("rect",{x:"436",y:"25",rx:"4",ry:"4",width:"47",height:"30"}),(0,u.jsx)("rect",{x:"50",y:"25",rx:"4",ry:"4",width:"376",height:"30"}),(0,u.jsx)("circle",{cx:"20",cy:"85",r:"20"}),(0,u.jsx)("rect",{x:"493",y:"70",rx:"4",ry:"4",width:"47",height:"30"}),(0,u.jsx)("rect",{x:"436",y:"70",rx:"4",ry:"4",width:"47",height:"30"}),(0,u.jsx)("rect",{x:"50",y:"70",rx:"4",ry:"4",width:"376",height:"30"}),(0,u.jsx)("circle",{cx:"20",cy:"130",r:"20"}),(0,u.jsx)("rect",{x:"493",y:"115",rx:"4",ry:"4",width:"47",height:"30"}),(0,u.jsx)("rect",{x:"436",y:"115",rx:"4",ry:"4",width:"47",height:"30"}),(0,u.jsx)("rect",{x:"50",y:"115",rx:"4",ry:"4",width:"376",height:"30"}),(0,u.jsx)("circle",{cx:"20",cy:"175",r:"20"}),(0,u.jsx)("rect",{x:"493",y:"160",rx:"4",ry:"4",width:"47",height:"30"}),(0,u.jsx)("rect",{x:"436",y:"160",rx:"4",ry:"4",width:"47",height:"30"}),(0,u.jsx)("rect",{x:"50",y:"160",rx:"4",ry:"4",width:"376",height:"30"})]}))}},1751:function(n,t,e){e.r(t),e.d(t,{ModalCorrection:function(){return l}});var r=e(1413),o=e(2821),i=e(4164),a=e(1418),c=e(4313),s=e(3329),l=function(n){var t=Object.assign({},n),e=(0,c.useModalCorrection)(t),l=e.clickOverlay,u=e.onSubmit,d=e.register,p=e.handleSubmit;return(0,i.createPortal)((0,s.jsx)(a.WrapperModal,{onClick:l,children:(0,s.jsx)(a.BoxModal,{children:(0,s.jsx)(o.FormWrapper,{children:(0,s.jsxs)(o.Form,{autoComplete:"on",onSubmit:p(u),children:[(0,s.jsxs)(o.Label,{children:[(0,s.jsx)(o.SpanText,{children:"Name"}),(0,s.jsx)(o.InputForm,(0,r.Z)((0,r.Z)({},d("name")),{},{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Vitalik",required:!0}))]}),(0,s.jsxs)(o.Label,{children:[(0,s.jsx)(o.SpanText,{children:"Number"}),(0,s.jsx)(o.InputForm,(0,r.Z)((0,r.Z)({},d("number")),{},{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"+38(099)999-99-99",required:!0}))]}),(0,s.jsx)(o.ButtonSubmit,{type:"submit",value:"add contact"})]})})})}),document.querySelector("#modal-root"))}},1418:function(n,t,e){e.r(t),e.d(t,{BoxModal:function(){return s},WrapperModal:function(){return c}});var r,o,i=e(168),a=e(6444),c=a.ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.8); ;\n"]))),s=a.ZP.div(o||(o=(0,i.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /* width: 500px; */\n  padding: 20px 15px;\n\n  border-radius: 10px;\n  background-color: var(--background-section);\n"])))},9042:function(n,t,e){e.r(t),e.d(t,{Input:function(){return i}});var r,o=e(168),i=e(6444).ZP.input(r||(r=(0,o.Z)(["\n  position: relative;\n  padding: 0 10px 10px 10px;\n  display: block;\n  margin: 0 auto;\n  margin-top: 50px;\n  width: 400px;\n\n  border: none;\n  outline: none;\n  border-bottom: 2px solid #fff;\n\n  font-size: 20px;\n  text-align: center;\n\n  background-color: transparent;\n  color: #fff;\n"])))},4705:function(n,t,e){e.r(t),e.d(t,{useContactList:function(){return u}});var r=e(885),o=e(2791),i=e(9434),a=e(3504),c=e(6871),s=e(24),l=e(4957),u=function(){var n,t=(0,a.lr)(),e=null!==(n=(0,r.Z)(t,1)[0].get("search"))&&void 0!==n?n:"",u=(0,i.v9)(l.getContacts),d=(0,i.v9)(l.getError),p=(0,i.v9)(l.getIsLoadingContacts),f=(0,i.I0)(),x=(0,c.s0)();return(0,o.useEffect)((function(){f(s.contactsOperations.contactsListServer()),d&&x("/error",{replace:!0})}),[f,d,x]),{renderContacts:e?u.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):u,contacts:u,isLoadingContacts:p}}},4313:function(n,t,e){e.r(t),e.d(t,{useModalCorrection:function(){return s}});var r=e(1413),o=e(2791),i=e(1134),a=e(9434),c=e(24),s=function(n){var t=n.close,e=n.name,s=n.number,l=n.id,u=(0,i.cI)({defaultValues:{name:e,number:s}}),d=u.register,p=u.handleSubmit,f=(0,a.I0)();function x(n){"Escape"===n.code&&t(!1)}(0,o.useEffect)((function(){return window.addEventListener("keydown",x),function(){window.removeEventListener("keydown",x)}}),[]);return{clickOverlay:function(n){n.target===n.currentTarget&&t(!1)},onSubmit:function(n){f(c.contactsOperations.updateContact((0,r.Z)({id:l},n))),t(!1)},register:d,handleSubmit:p}}},4957:function(n,t,e){e.r(t),e.d(t,{getContacts:function(){return r},getError:function(){return i},getErrorMessage:function(){return a},getIsLoadingContacts:function(){return o}});var r=function(n){return n.contacts.contacts},o=function(n){return n.contacts.isLoadingContacts},i=function(n){return n.contacts.error},a=function(n){return n.contacts.errorMessage}},24:function(n,t,e){e.r(t),e.d(t,{ContactsSelector:function(){return o},contactsOperations:function(){return r}});var r=e(5036),o=e(4957)}}]);
//# sourceMappingURL=641.87fcb9f8.chunk.js.map