"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[641,493,297,387,821,751,418,42,24,957],{8493:function(n,t,e){e.r(t),e.d(t,{Contact:function(){return g}});var r=e(5861),o=e(885),i=e(7757),a=e.n(i),c=e(2791),s=e(6856),u=e(8748),d=e(9126),p=e(297),l=e(9434),f=e(24),x=e(1751),h=e(3329),g=function(n){var t=n.data,e=t.id,i=t.name,g=t.number,m=(0,c.useState)(null),b=(0,o.Z)(m,2),Z=b[0],v=b[1],w=(0,c.useState)(!1),j=(0,o.Z)(w,2),k=j[0],y=j[1],C=(0,c.useState)(!1),P=(0,o.Z)(C,2),L=P[0],B=P[1],S=(0,l.I0)();(0,c.useEffect)((function(){v(i[0].toUpperCase())}),[i]);var z=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,y(!0),n.next=4,S(f.contactsOperations.deleteContact(t));case 4:y(!1),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}();return(0,h.jsxs)(p.Elements,{children:[(0,h.jsxs)(p.NameContacts,{children:[(0,h.jsx)(p.IconBox,{children:Z}),i,": ",g]}),(0,h.jsxs)(p.ButtonBox,{children:[(0,h.jsx)(p.Button,{type:"button",onClick:function(){return z(e)},dispatch:k,children:k?(0,h.jsx)(u.gy,{width:20,height:20}):(0,h.jsx)(s.ZkW,{size:20})}),(0,h.jsx)(p.Button,{type:"button",onClick:function(){return B(!0)},children:(0,h.jsx)(d.Aac,{size:20})})]}),L&&(0,h.jsx)(x.ModalCorrection,{name:i,number:g,id:e,close:B})]})}},6641:function(n,t,e){e.r(t),e.d(t,{ContactList:function(){return f}});var r=e(885),o=e(2791),i=e(8493),a=e(297),c=e(9434),s=e(4957),u=e(4756),d=e(24),p=e(3504),l=e(3329),f=function(){var n,t=(0,p.lr)(),e=null!==(n=(0,r.Z)(t,1)[0].get("search"))&&void 0!==n?n:"",f=(0,c.v9)(s.getContacts),x=(0,c.I0)();(0,o.useEffect)((function(){x(d.contactsOperations.contactsListServer())}),[x]);var h=e?f.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):f;return(0,l.jsxs)(a.ContactListWrapper,{children:[(0,l.jsx)(a.Title,{children:"Contact List"}),0===f.length?(0,l.jsx)(u.ErrorContactList,{}):(0,l.jsx)(a.List,{children:h.map((function(n){return(0,l.jsx)(i.Contact,{data:n},n.id)}))})]})}},297:function(n,t,e){e.r(t),e.d(t,{Button:function(){return Z},ButtonBox:function(){return b},ContactListWrapper:function(){return f},Elements:function(){return g},IconBox:function(){return v},List:function(){return h},NameContacts:function(){return m},Title:function(){return x}});var r,o,i,a,c,s,u,d,p=e(168),l=e(6444),f=l.ZP.div(r||(r=(0,p.Z)(["\n  overflow: auto;\n  padding: 20px 30px;\n  width: 600px;\n  max-height: 320px;\n  border-radius: 5px;\n  background-color: var(--background-card-box);\n"]))),x=l.ZP.h2(o||(o=(0,p.Z)(["\n  text-align: center;\n"]))),h=l.ZP.ul(i||(i=(0,p.Z)(["\n  margin-top: 30px;\n"]))),g=l.ZP.li(a||(a=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n\n  &:not(:first-child) {\n    margin-top: 20px;\n  }\n"]))),m=l.ZP.p(c||(c=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  font-size: 1.2em;\n"]))),b=l.ZP.div(s||(s=(0,p.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),Z=l.ZP.button(u||(u=(0,p.Z)(["\n  padding: 5px 15px;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n"]))),v=l.ZP.span(d||(d=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--contact-list);\n  font-size: 20px;\n"])))},4756:function(n,t,e){e.r(t),e.d(t,{ErrorContactList:function(){return a}});e(2791);var r=e(7692),o=e(8387),i=e(3329),a=function(){return(0,i.jsxs)(o.ErrorBox,{children:[(0,i.jsx)(r.tJu,{color:"red",size:40}),(0,i.jsx)("p",{children:"There is No contact in your contacts list!"})]})}},8387:function(n,t,e){e.r(t),e.d(t,{ErrorBox:function(){return i}});var r,o=e(168),i=e(6444).ZP.div(r||(r=(0,o.Z)(["\n  margin-top: 20px;\n  padding: 15px 10px;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  background-color: rgba(255, 0, 0, 0.2);\n"])))},2821:function(n,t,e){e.r(t),e.d(t,{ButtonSubmit:function(){return m},Form:function(){return f},FormWrapper:function(){return l},InputForm:function(){return g},Label:function(){return x},SpanText:function(){return h}});var r,o,i,a,c,s,u=e(168),d=e(6444),p=e(9042),l=d.ZP.div(r||(r=(0,u.Z)(["\n  width: 500px;\n  padding: 20px 30px;\n  border-radius: 5px;\n  background-color: var(--background-card-box);\n"]))),f=d.ZP.form(o||(o=(0,u.Z)(["\n  width: 100%;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n"]))),x=d.ZP.label(i||(i=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),h=d.ZP.span(a||(a=(0,u.Z)(["\n  display: inline-block;\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n  line-height: 30px;\n  font-weight: 500;\n  color: #fff;\n"]))),g=(0,d.ZP)(p.Input)(c||(c=(0,u.Z)(["\n  display: inline-block;\n  padding: 10px 10px 10px 20px;\n  margin: 0;\n  margin-left: auto;\n  width: 300px;\n"]))),m=d.ZP.input(s||(s=(0,u.Z)(["\n  display: block;\n  /* max-width: 150px; */\n  margin: 0 auto;\n  margin-top: 40px;\n  padding: 5px 20px;\n\n  font-family: 'Orbitron', sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.88;\n  background: transparent;\n  border: 1px solid transparent;\n  box-shadow: inset 0 0 20px hsl(0deg 0% 100% / 0%);\n  color: #fff;\n  outline: 2px solid;\n  outline-color: hsla(0, 0%, 100%, 0.5);\n  outline-offset: 0;\n  position: relative;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: uppercase;\n  transition: all 1.25s cubic-bezier(0.19, 1, 0.22, 1);\n  :hover {\n    border: 1px solid;\n    box-shadow: inset 0 0 20px hsl(0deg 0% 100% / 50%),\n      0 0 20px hsl(0deg 0% 100% / 20%);\n    outline-color: hsla(0, 0%, 100%, 0);\n    outline-offset: 15px;\n  }\n"])))},1751:function(n,t,e){e.r(t),e.d(t,{ModalCorrection:function(){return h}});var r=e(1413),o=e(5861),i=e(7757),a=e.n(i),c=e(2821),s=e(2791),u=e(4164),d=e(1134),p=e(24),l=e(1418),f=e(9434),x=e(3329),h=function(n){var t=n.close,e=n.name,i=n.number,h=n.id,g=(0,d.cI)({defaultValues:{name:e,number:i}}),m=g.register,b=g.handleSubmit,Z=(0,f.I0)();function v(n){"Escape"===n.code&&t(!1)}(0,s.useEffect)((function(){return window.addEventListener("keydown",v),function(){window.removeEventListener("keydown",v)}}),[]);var w=function(){var n=(0,o.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z(p.contactsOperations.updateContact((0,r.Z)({id:h},e)));case 3:t(!1),n.next=8;break;case 6:n.prev=6,n.t0=n.catch(0);case 8:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}();return(0,u.createPortal)((0,x.jsx)(l.WrapperModal,{onClick:function(n){n.target===n.currentTarget&&t(!1)},children:(0,x.jsx)(l.BoxModal,{children:(0,x.jsx)(c.FormWrapper,{children:(0,x.jsxs)(c.Form,{autoComplete:"on",onSubmit:b(w),children:[(0,x.jsxs)(c.Label,{children:[(0,x.jsx)(c.SpanText,{children:"Name"}),(0,x.jsx)(c.InputForm,(0,r.Z)((0,r.Z)({},m("name")),{},{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Vitalik",required:!0}))]}),(0,x.jsxs)(c.Label,{children:[(0,x.jsx)(c.SpanText,{children:"Number"}),(0,x.jsx)(c.InputForm,(0,r.Z)((0,r.Z)({},m("number")),{},{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"+38(099)999-99-99",required:!0}))]}),(0,x.jsx)(c.ButtonSubmit,{type:"submit",value:"add contact"})]})})})}),document.querySelector("#modal-root"))}},1418:function(n,t,e){e.r(t),e.d(t,{BoxModal:function(){return s},WrapperModal:function(){return c}});var r,o,i=e(168),a=e(6444),c=a.ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.8); ;\n"]))),s=a.ZP.div(o||(o=(0,i.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /* width: 500px; */\n  padding: 20px 15px;\n\n  border-radius: 10px;\n  background-color: var(--background-section);\n"])))},9042:function(n,t,e){e.r(t),e.d(t,{Input:function(){return i}});var r,o=e(168),i=e(6444).ZP.input(r||(r=(0,o.Z)(["\n  position: relative;\n  padding: 0 10px 10px 10px;\n  display: block;\n  margin: 0 auto;\n  margin-top: 50px;\n  width: 400px;\n\n  border: none;\n  outline: none;\n  border-bottom: 2px solid #fff;\n\n  font-size: 20px;\n  text-align: center;\n\n  background-color: transparent;\n  color: #fff;\n"])))},4957:function(n,t,e){e.r(t),e.d(t,{getContacts:function(){return r},getIsLoadingContacts:function(){return o}});var r=function(n){return n.contacts.contacts},o=function(n){return n.contacts.isLoadingContacts}},24:function(n,t,e){e.r(t),e.d(t,{ContactsSelector:function(){return o},contactsOperations:function(){return r}});var r=e(5036),o=e(4957)}}]);
//# sourceMappingURL=641.32b83558.chunk.js.map