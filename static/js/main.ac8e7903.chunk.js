(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contactform:"ContactForm_contactform__2Lj2W",text:"ContactForm_text__1r33n"}},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=(n(17),n(6)),s=n(9),u=n(2),l=n(3),b=n(5),d=n(4),m=n(20),j=n(7),h=n(11),f=n.n(h),p=n(0),O=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number};t.props.onSubmitData(n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:f.a.contactform,children:Object(p.jsxs)("form",{type:"submit",onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{children:["Name",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name})]}),Object(p.jsxs)("label",{children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number})]}),Object(p.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),v=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).deleteId=function(e){t.props.del(e)},t.createList=function(){return t.props.contacts.map((function(e){return Object(p.jsxs)("li",{id:e.id,children:["".concat(e.name,": ").concat(e.number),Object(p.jsx)("button",{"data-id":e.id,onClick:function(){return t.deleteId(e.id)},children:"Delete"})]},Object(m.a)())}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("ul",{children:this.createList()})}}]),n}(a.Component);v.defaultProps={contacts:[]};var C=v,g=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).setFilterValue=function(e){var n=e.currentTarget.value.toUpperCase();t.props.setFilterToState(n)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"Find contacts by name"}),Object(p.jsx)("input",{onChange:this.setFilterValue})]})}}]),n}(a.Component),x=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){t.repeatControl(e)},t.repeatControl=function(e){if(!t.state.contacts.map((function(t){return t.name})).includes(e.name)){var n;return n=[].concat(Object(s.a)(t.state.contacts),[{id:Object(m.a)(),name:e.name,number:e.number}]),t.setState(Object(i.a)(Object(i.a)({},t.state),{},{contacts:n}))}alert(" \u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0454 \u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456!!!")},t.elementDelete=function(t,e){return t.filter((function(t){return t.id!==e}))},t.deleteContactFromContactList=function(e){var n=t.elementDelete(t.state.contacts,e);t.setState(Object(i.a)(Object(i.a)({},t.state),{},{contacts:Object(s.a)(n)}))},t.setFilterToState=function(e){t.setState(Object(i.a)(Object(i.a)({},t.state),{},{filter:"".concat(e)}))},t.filterArr=function(e){return e.filter((function(e){return e.name.toUpperCase().includes(t.state.filter)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(O,{onSubmitData:this.formSubmitHandler}),Object(p.jsx)("h1",{children:"Contacts"}),Object(p.jsx)(g,{setFilterToState:this.setFilterToState}),Object(p.jsx)(C,{contacts:this.filterArr(this.state.contacts),del:this.deleteContactFromContactList})]})}}]),n}(a.Component),S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),S()}},[[19,1,2]]]);
//# sourceMappingURL=main.ac8e7903.chunk.js.map