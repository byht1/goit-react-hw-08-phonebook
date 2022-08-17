"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[493,297,64,821,418,42,24,957],{8493:function(n,t,e){e.r(t),e.d(t,{Contact:function(){return g}});var r=e(5861),o=e(885),a=e(7757),i=e.n(a),c=e(2791),u=e(6856),s=e(8748),p=e(9126),l=e(297),d=e(9434),f=e(24),x=e(1751),h=e(3329),g=function(n){var t=n.data,e=t.id,a=t.name,g=t.number,m=(0,c.useState)(null),b=(0,o.Z)(m,2),Z=b[0],v=b[1],y=(0,c.useState)(!1),w=(0,o.Z)(y,2),k=w[0],j=w[1],C=(0,c.useState)(!1),P=(0,o.Z)(C,2),B=P[0],S=P[1],z=(0,d.I0)();(0,c.useEffect)((function(){v(a[0].toUpperCase())}),[a]);var F=function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,j(!0),n.next=4,z(f.contactsOperations.deleteContact(t));case 4:j(!1),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}();return(0,h.jsxs)(l.Elements,{children:[(0,h.jsxs)(l.NameContacts,{children:[(0,h.jsx)(l.IconBox,{children:Z}),a,": ",g]}),(0,h.jsxs)(l.ButtonBox,{children:[(0,h.jsx)(l.Button,{type:"button",onClick:function(){return F(e)},dispatch:k,children:k?(0,h.jsx)(s.gy,{size:20}):(0,h.jsx)(u.ZkW,{size:20})}),(0,h.jsx)(l.Button,{type:"button",onClick:function(){return S(!0)},children:(0,h.jsx)(p.Aac,{size:20})})]}),B&&(0,h.jsx)(x.ModalCorrection,{name:a,number:g,id:e,close:S})]})}},297:function(n,t,e){e.r(t),e.d(t,{Button:function(){return Z},ButtonBox:function(){return b},ContactListWrapper:function(){return f},Elements:function(){return g},IconBox:function(){return v},List:function(){return h},NameContacts:function(){return m},Title:function(){return x}});var r,o,a,i,c,u,s,p,l=e(168),d=e(6444),f=d.ZP.div(r||(r=(0,l.Z)(["\n  padding: 20px 30px;\n  width: 600px;\n  border-radius: 5px;\n  background-color: var(--background-card-box);\n"]))),x=d.ZP.h2(o||(o=(0,l.Z)(["\n  text-align: center;\n"]))),h=d.ZP.ul(a||(a=(0,l.Z)(["\n  margin-top: 30px;\n"]))),g=d.ZP.li(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n\n  &:not(:first-child) {\n    margin-top: 20px;\n  }\n"]))),m=d.ZP.p(c||(c=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  font-size: 1.2em;\n"]))),b=d.ZP.div(u||(u=(0,l.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),Z=d.ZP.button(s||(s=(0,l.Z)(["\n  padding: 5px 15px;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  color: #fff;\n"]))),v=d.ZP.span(p||(p=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: var(--contact-list);\n  font-size: 20px;\n"])))},1064:function(n,t,e){e.r(t),e.d(t,{FormNewContacts:function(){return d}});var r=e(5861),o=e(885),a=e(7757),i=e.n(a),c=e(2791),u=e(24),s=e(9434),p=e(2821),l=e(3329),d=function(){var n=(0,c.useState)(""),t=(0,o.Z)(n,2),e=t[0],a=t[1],d=(0,c.useState)(""),f=(0,o.Z)(d,2),x=f[0],h=f[1],g=(0,s.I0)(),m=function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault();try{g(u.contactsOperations.newContact({name:e,number:x})),a(""),h("")}catch(r){}case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,l.jsx)(p.FormWrapper,{children:(0,l.jsxs)(p.Form,{autoComplete:"on",onSubmit:function(n){return m(n)},children:[(0,l.jsxs)(p.Label,{children:[(0,l.jsx)(p.SpanText,{children:"Name"}),(0,l.jsx)(p.InputForm,{onChange:function(n){return a(n.target.value)},type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Vitalik",required:!0})]}),(0,l.jsxs)(p.Label,{children:[(0,l.jsx)(p.SpanText,{children:"Number"}),(0,l.jsx)(p.InputForm,{onChange:function(n){return h(n.target.value)},type:"tel",name:"number",value:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"+38(099)999-99-99",required:!0})]}),(0,l.jsx)(p.ButtonSubmit,{type:"submit",value:"add contact"})]})})}},2821:function(n,t,e){e.r(t),e.d(t,{ButtonSubmit:function(){return m},Form:function(){return f},FormWrapper:function(){return d},InputForm:function(){return g},Label:function(){return x},SpanText:function(){return h}});var r,o,a,i,c,u,s=e(168),p=e(6444),l=e(9042),d=p.ZP.div(r||(r=(0,s.Z)(["\n  width: 500px;\n  padding: 20px 30px;\n  border-radius: 5px;\n  background-color: var(--background-card-box);\n"]))),f=p.ZP.form(o||(o=(0,s.Z)(["\n  width: 100%;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n"]))),x=p.ZP.label(a||(a=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),h=p.ZP.span(i||(i=(0,s.Z)(["\n  display: inline-block;\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n  line-height: 30px;\n  font-weight: 500;\n  color: #fff;\n"]))),g=(0,p.ZP)(l.Input)(c||(c=(0,s.Z)(["\n  display: inline-block;\n  padding: 10px 10px 10px 20px;\n  margin: 0;\n  margin-left: auto;\n  width: 300px;\n"]))),m=p.ZP.input(u||(u=(0,s.Z)(["\n  display: block;\n  /* max-width: 150px; */\n  margin: 0 auto;\n  margin-top: 40px;\n  padding: 5px 20px;\n\n  font-family: 'Orbitron', sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.88;\n  background: transparent;\n  border: 1px solid transparent;\n  box-shadow: inset 0 0 20px hsl(0deg 0% 100% / 0%);\n  color: #fff;\n  outline: 2px solid;\n  outline-color: hsla(0, 0%, 100%, 0.5);\n  outline-offset: 0;\n  position: relative;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: uppercase;\n  transition: all 1.25s cubic-bezier(0.19, 1, 0.22, 1);\n  :hover {\n    border: 1px solid;\n    box-shadow: inset 0 0 20px hsl(0deg 0% 100% / 50%),\n      0 0 20px hsl(0deg 0% 100% / 20%);\n    outline-color: hsla(0, 0%, 100%, 0);\n    outline-offset: 15px;\n  }\n"])))},1751:function(n,t,e){e.r(t),e.d(t,{ModalCorrection:function(){return s}});var r=e(4925),o=e(1064),a=(e(2791),e(4164)),i=e(1418),c=e(3329),u=["close"],s=function(n){n.close;var t=(0,r.Z)(n,u);return(0,a.createPortal)((0,c.jsx)(i.WrapperModal,{children:(0,c.jsx)(i.BoxModal,{children:(0,c.jsx)(o.FormNewContacts,{data:t})})}),document.querySelector("#modal-root"))}},1418:function(n,t,e){e.r(t),e.d(t,{BoxModal:function(){return u},WrapperModal:function(){return c}});var r,o,a=e(168),i=e(6444),c=i.ZP.div(r||(r=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.8); ;\n"]))),u=i.ZP.div(o||(o=(0,a.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /* width: 500px; */\n  padding: 20px 15px;\n\n  border-radius: 10px;\n  background-color: var(--background-section);\n"])))},9042:function(n,t,e){e.r(t),e.d(t,{Input:function(){return a}});var r,o=e(168),a=e(6444).ZP.input(r||(r=(0,o.Z)(["\n  position: relative;\n  padding: 0 10px 10px 10px;\n  display: block;\n  margin: 0 auto;\n  margin-top: 50px;\n  width: 400px;\n\n  border: none;\n  outline: none;\n  border-bottom: 2px solid #fff;\n\n  font-size: 20px;\n  text-align: center;\n\n  background-color: transparent;\n  color: #fff;\n"])))},4957:function(n,t,e){e.r(t),e.d(t,{getContacts:function(){return r},getIsLoadingContacts:function(){return o}});var r=function(n){return n.contacts.contacts},o=function(n){return n.contacts.isLoadingContacts}},24:function(n,t,e){e.r(t),e.d(t,{ContactsSelector:function(){return o},contactsOperations:function(){return r}});var r=e(5036),o=e(4957)}}]);
//# sourceMappingURL=493.52668e52.chunk.js.map