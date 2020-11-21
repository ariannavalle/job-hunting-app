(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{431:function(e,t,a){},526:function(e,t,a){},548:function(e,t,a){},550:function(e,t,a){},551:function(e,t,a){},558:function(e,t,a){},559:function(e,t,a){},560:function(e,t,a){},561:function(e,t,a){},682:function(e,t,a){},683:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a(1),i=a.n(n),c=a(90),l=a.n(c),r=(a(526),a(56)),o=a.n(r),d=a(475),u=a(24),j=a(29),h=a(6),b=a(13),m=a(16),p=a(15),O=a(73),g=a(53),f=a(151),x=a.n(f),v=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_POINT,C=x.a.create({baseURL:v,withCredentials:!0}),y={signup:function(e){return C.post("/api/signup",e)},login:function(e){return C.post("/api/login",e)},logout:function(){return C.post("/api/logout",{})},getAuthenticatedUser:function(){return C.get("/api/isLoggedIn")}},N=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_POINT,S=x.a.create({baseURL:N,withCredentials:!0}),M={createCard:function(e){return S.post("/api/cards",e)},getCards:function(){return S.get("/api/cards")},deleteCard:function(e){return S.post("/api/cards/".concat(e,"/delete"),{})},updateCard:function(e,t){return S.post("/api/cards/".concat(e,"/update"),t)},getCardDetails:function(e){return S.get("/api/cards/".concat(e))}},k=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_POINT,E=x.a.create({baseURL:k,withCredentials:!0}),D={createColumn:function(e){return E.post("/api/columns",e)},getColumns:function(){return E.get("/api/columns")},deleteColumn:function(e){return E.post("/api/columns/".concat(e,"/delete"),{})},updateColumn:function(e,t){return E.post("/api/columns/".concat(e,"/update"),t)},getColumnDetails:function(e){return E.get("/api/columns/".concat(e))}},_=(a(431),a(48)),L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={name:"",email:"",password:"",message:null},e.handleInputChange=function(t){var a=t.target,s=a.name,n=a.value;e.setState(Object(u.a)({},s,n))},e.handleFormSubmission=function(t){t.preventDefault();var a=e.state,s=a.name,n=a.email,i=a.password;y.signup({name:s,email:n,password:i}).then((function(t){var a=t.data,s=a.user,n=a.columns;e.props.onUserChange(s,n),e.props.history.push("/")})).catch((function(t){if(t.response&&t.response.data)return e.setState({message:t.response.data.message})}))},e}return Object(b.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"landing-body",children:Object(s.jsx)("section",{className:"signup",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{onSubmit:this.handleFormSubmission,className:"signup-content",children:[Object(s.jsxs)("div",{className:"signup-form",children:[Object(s.jsx)("h2",{className:"form-title",children:"Sign up"}),Object(s.jsxs)("form",{onSubmit:this.handleFormSubmission,className:"register-form",id:"register-form",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"name",className:"icon",children:Object(s.jsx)(_.f,{})}),Object(s.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Your Name",value:this.state.name,onChange:this.handleInputChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",className:"icon",children:Object(s.jsx)(_.b,{})}),Object(s.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Your Email",value:this.state.email,onChange:this.handleInputChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"pass",className:"icon",children:Object(s.jsx)(_.d,{})}),Object(s.jsx)("input",{type:"password",name:"password",id:"pass",placeholder:"Password",value:this.state.password,onChange:this.handleInputChange})]}),Object(s.jsx)("div",{className:"form-group form-button",children:Object(s.jsx)("input",{type:"submit",name:"signup",id:"signup",className:"form-submit",value:"Register"})}),this.state.message&&Object(s.jsxs)("div",{style:{color:"red",paddingTop:"1rem"},children:[" ",this.state.message," "]}),this.state.message>1&&Object(s.jsx)("div",{style:{color:"red",textAlign:"left"},children:this.state.message.map((function(e){return Object(s.jsx)("div",{children:e})}))}),Object(s.jsx)("br",{}),Object(s.jsx)(O.b,{to:"/login",className:"signup-image-link",children:"I am already member"})]})]}),Object(s.jsx)("div",{className:"signup-image",children:Object(s.jsx)("figure",{children:Object(s.jsx)("img",{src:"images/signup-image.jpg",alt:"illustration of modern desk"})})})]})})})})}}]),a}(i.a.Component),A=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={email:"",password:"",message:null},e.handleInputChange=function(t){var a=t.target,s=a.name,n=a.value;e.setState(Object(u.a)({},s,n))},e.handleFormSubmission=function(t){t.preventDefault();var a=e.state,s=a.email,n=a.password;y.login({email:s,password:n}).then((function(t){var a=t.data.user;e.props.onUserChange(a),e.props.history.push("/")})).catch((function(t){if(t.response&&t.response.data)return e.setState({message:t.response.data.message})}))},e}return Object(b.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"landing-body",children:Object(s.jsx)("section",{className:"sign-in",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"signin-content",children:[Object(s.jsx)("div",{className:"signin-image",children:Object(s.jsx)("figure",{children:Object(s.jsx)("img",{src:"/images/signin-image.jpg",alt:"illustration of a person sitting on a chair holding a laptop"})})}),Object(s.jsxs)("div",{className:"global-form",children:[Object(s.jsx)("h2",{className:"form-title",children:"Sign in"}),Object(s.jsxs)("form",{onSubmit:this.handleFormSubmission,className:"register-form",id:"login-form",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",className:"icon",children:Object(s.jsx)(_.b,{})}),Object(s.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Email",value:this.state.email,onChange:this.handleInputChange})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"your_pass",className:"icon",children:Object(s.jsx)(_.d,{})}),Object(s.jsx)("input",{type:"password",name:"password",id:"your_pass",placeholder:"Password",value:this.state.password,onChange:this.handleInputChange})]}),Object(s.jsx)("div",{className:"form-group form-button",children:Object(s.jsx)("input",{type:"submit",name:"signin",id:"signin",className:"form-submit",value:"Log in"})})]}),this.state.message&&Object(s.jsxs)("div",{style:{color:"red",paddingTop:"1rem"},children:[" ",this.state.message," "]}),Object(s.jsx)("br",{}),Object(s.jsx)(O.b,{to:"/signup",className:"signup-image-link",children:"Create an account"})]})]})})})})}}]),a}(i.a.Component),R=a(43),w=a(155),U=(a(548),a(80)),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.card,t=e._id,a=e.title,n=e.company,i=e.location,c=this.props.index;return Object(s.jsx)(w.b,{draggableId:t,index:c,children:function(e,t){var c=Object(j.a)({backgroundColor:t.isDragging?"#E3EEE1":"white",border:t.isDragging?"2px solid #fff":"none",fontSize:18},e.draggableProps.style);return Object(s.jsxs)("div",Object(j.a)(Object(j.a)(Object(j.a)({className:"card-tile",ref:e.innerRef},e.dragHandleProps),e.draggableProps),{},{style:c,children:[Object(s.jsx)("div",{className:"card-tile-header",children:a}),Object(s.jsxs)("div",{className:"card-tile-subheader",children:[Object(s.jsx)(U.a,{})," ",n]}),Object(s.jsxs)("div",{className:"card-tile-location",children:[i?Object(s.jsx)(_.c,{style:{color:"#f40810"}}):null," ",i]})]}))}})}}]),a}(n.Component),P=a(108),I=a(132),F=(a(550),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isEditEnabled:!1,title:e.props.column.title},e.toggleEdit=function(){e.setState({isEditEnabled:!e.state.isEditEnabled})},e.handleChange=function(t){var a=t.target,s=a.name,n=a.value;e.setState(Object(u.a)({},s,n))},e.handleSubmit=function(e){e.preventDefault()},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this,t=this.props.column,a=t._id,n=t.title,i=t.cards,c=this.props,l=c.index,r=c.toggleDetailsModal,o=c.setCurrentCard,d=c.editColumn,u=c.deleteColumn,h=c.displayNotification;return Object(s.jsxs)("div",{className:"column",children:[this.state.isEditEnabled?Object(s.jsx)("form",{onSubmit:this.handleSubmit,children:Object(s.jsxs)("div",{className:"column-header",children:[Object(s.jsx)("input",{type:"text",name:"title",id:"title",required:!0,value:this.state.title,onChange:this.handleChange}),Object(s.jsx)(I.c,{type:"submit",onClick:function(){d(a,e.state.title),e.toggleEdit(),h()}})]})}):Object(s.jsxs)("div",{className:"column-header",children:[Object(s.jsxs)("div",{children:[n," (",i.length,")"]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(I.a,{className:"h-icon",onClick:this.toggleEdit}),Object(s.jsx)(P.d,{onClick:function(){u(a),h()}})]})]}),Object(s.jsx)("div",{children:Object(s.jsx)(w.c,{droppableId:a,index:l,children:function(e,t){return Object(s.jsxs)("div",Object(j.a)(Object(j.a)({className:"droppable-height",ref:e.innerRef,style:{backgroundColor:t.isDraggingOver?"#E3EEE1":"inherit"}},e.droppableProps),{},{children:[i.map((function(e,t){return Object(s.jsx)("div",{onClick:function(){r(),o(e)},children:Object(s.jsx)(T,{card:e,index:t,column:a})},e._id)})),e.placeholder]}))}})})]})}}]),a}(n.Component)),W=a(776),B=a(756),z=a(757),H=(a(551),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={title:"",company:"",date:"",note:"",location:"",salary:0,postingURL:"",modalIsOpen:!1},e.handleChange=function(t){var a=t.target,s=a.name,n=a.value;e.setState(Object(u.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,s=a.title,n=a.company,i=a.date,c=a.note,l=a.location,r=a.salary,o=a.postingURL;M.createCard({title:s,company:n,date:i,note:c,location:l,salary:r,postingURL:o}).then((function(t){var a=t.data,s=a.card,n=a.successMessage;e.props.updateCardState(s,n);var i=e.props.columns;i[Object.keys(i)[0]].cards.push(s),e.props.replaceColumns(i[Object.keys(i)[0]],i[Object.keys(i)[0]]),e.props.toggleCreateModal(),e.setState({title:"",company:"",date:"",note:"",location:"",salary:0,postingURL:""}),e.props.displayNotification()}))},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.company,n=e.date,i=e.note,c=e.location,l=e.salary,r=e.postingURL,o=e.message;return Object(s.jsx)("div",{children:Object(s.jsxs)(W.a,{centered:!0,isOpen:this.props.displayCreateModal,children:[Object(s.jsx)(B.a,{toggle:this.props.toggleCreateModal,children:"Add New Job"}),Object(s.jsx)(z.a,{children:Object(s.jsxs)("div",{className:"modal-form",children:[Object(s.jsxs)("form",{onSubmit:this.handleSubmit,className:"register-form",id:"login-form",children:[Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(_.h,{className:"details-icon"}),"Job Title *"]}),Object(s.jsx)("input",{type:"text",name:"title",id:"title",required:!0,value:t,onChange:this.handleChange}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(U.a,{className:"details-icon"}),"Company Name *"]}),Object(s.jsx)("input",{type:"text",name:"company",id:"company",required:!0,value:a,onChange:this.handleChange}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(_.c,{className:"details-icon"}),"Location"]}),Object(s.jsx)("input",{type:"text",name:"location",id:"location",value:c,onChange:this.handleChange}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(U.b,{className:"details-icon"}),"Date Applied"]}),Object(s.jsx)("input",{type:"date",name:"date",id:"date",value:n,onChange:this.handleChange}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(_.e,{className:"details-icon"}),"Estimated Salary (in thousands)"]}),Object(s.jsx)("input",{type:"number",name:"salary",id:"salary",value:l,onChange:this.handleChange}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(_.g,{className:"details-icon"}),"URL to job posting"]}),Object(s.jsx)("input",{type:"text",name:"postingURL",id:"postingURL",value:r,onChange:this.handleChange}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(I.b,{className:"details-icon"}),"Notes"]}),Object(s.jsx)("textarea",{rows:"4",cols:"51",name:"note",id:"note",value:i,onChange:this.handleChange}),Object(s.jsx)("div",{className:"form-group form-button",children:Object(s.jsx)("input",{type:"submit",name:"create",id:"create",className:"form-submit-btn",value:"Create"})})]}),o&&Object(s.jsxs)("div",{style:{color:"red",paddingTop:"1rem"},children:[" ",o," "]})]})})]})})}}]),a}(i.a.Component)),J=a(758),K=(a(558),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleSubmit=function(e){e.preventDefault()},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.card,t=e._id,a=e.title,n=e.company,i=e.salary,c=e.location,l=e.date,r=e.note,o=e.postingURL,d=this.props,u=d.toggleDetailsModal,j=d.toggleEditModal,h=d.editCard,b=d.deleteCard,m=d.displayDetailsModal,p=d.displayEditModal,O=d.displayNotification,g=d.column,f=d.card;return Object(s.jsxs)(s.Fragment,{children:[m&&Object(s.jsxs)(W.a,{size:"lg",centered:!0,isOpen:m,toggle:function(){return u({})},children:[Object(s.jsx)(B.a,{cssModule:{"modal-title":"w-100 text-center"},children:a}),Object(s.jsxs)(z.a,{className:"details-container",children:[Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(U.a,{className:"details-icon"})," Company Name"]}),Object(s.jsx)("div",{className:"details",children:n}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(_.c,{className:"details-icon"})," Location"]}),Object(s.jsx)("div",{className:"details",children:c}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(U.b,{className:"details-icon"})," Date Applied"]}),Object(s.jsx)("div",{className:"details",children:l?l.slice(0,10):l}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(_.g,{className:"details-icon"})," Estimated Salary (in thousands)"]}),Object(s.jsx)("div",{className:"details",children:i?"$".concat(i,"k"):""}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(_.g,{className:"details-icon"})," URL to Job Posting"]}),Object(s.jsx)("div",{className:"details",children:o}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(I.b,{className:"details-icon"})," Notes"]}),Object(s.jsx)("div",{className:"details",children:r}),Object(s.jsx)(J.a,{color:"danger",className:"float-right",onClick:function(){b(t,g),u({}),O()},children:"Delete"}),Object(s.jsx)(J.a,{color:"light",className:"float-right edit-btn",onClick:function(){u({}),j()},children:"Edit"})]})]}),p&&Object(s.jsxs)(W.a,{size:"lg",centered:!0,isOpen:p,toggle:function(){return j({})},children:[Object(s.jsxs)(B.a,{cssModule:{"modal-title":"w-100 text-center"},children:[a," (EDIT)"]}),Object(s.jsx)(z.a,{className:"details-container",children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(U.a,{className:"details-icon"})," Job Title"]}),Object(s.jsx)("div",{className:"edit-input",children:Object(s.jsx)("input",{type:"text",name:"title",id:"title",placeholder:a,required:!0,value:a,onChange:this.props.handleChange})}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(U.a,{className:"details-icon"})," Company Name"]}),Object(s.jsx)("div",{className:"edit-input",children:Object(s.jsx)("input",{type:"text",name:"company",id:"company",placeholder:n,required:!0,value:n,onChange:this.props.handleChange})}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(_.c,{className:"details-icon"})," Location"]}),Object(s.jsx)("div",{className:"edit-input",children:Object(s.jsx)("input",{type:"text",name:"location",id:"location",placeholder:c,value:c,onChange:this.props.handleChange})}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(U.b,{className:"details-icon"})," Date Applied"]}),Object(s.jsx)("div",{className:"edit-input",children:Object(s.jsx)("input",{type:"date",name:"date",id:"date",value:l?l.slice(0,10):l,onChange:this.props.handleChange})}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(_.g,{className:"details-icon"})," Estimated Salary (in thousands)"]}),Object(s.jsx)("div",{className:"edit-input",children:Object(s.jsx)("input",{type:"text",name:"salary",id:"salary",placeholder:i,value:i,onChange:this.props.handleChange})}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(_.g,{className:"details-icon"})," URL to Job Posting"]}),Object(s.jsx)("div",{className:"edit-input",children:Object(s.jsx)("input",{type:"text",name:"postingURL",id:"postingURL",placeholder:o,value:o,onChange:this.props.handleChange})}),Object(s.jsxs)("div",{className:"details-header",children:[Object(s.jsx)(I.b,{className:"details-icon"})," Notes"]}),Object(s.jsx)("div",{className:"edit-input",children:Object(s.jsx)("textarea",{rows:"5",cols:"51",name:"note",id:"note",style:{marginTop:".5rem",marginBottom:"1.5rem",width:"100%"},placeholder:r,value:r,onChange:this.props.handleChange})}),Object(s.jsx)(J.a,{color:"light",className:"float-right edit-btn",onClick:function(){h(t,f),j(),O()},children:"Save"})]})})]})]})}}]),a}(i.a.Component)),V=(a(559),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={title:""},e.handleChange=function(t){var a=t.target,s=a.name,n=a.value;e.setState(Object(u.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault();var a=e.state.title;D.createColumn({title:a}).then((function(t){var a=t.data,s=a.column,n=a.successMessage;e.props.updateColumnState(s,n),e.props.toggleColumnModal(),e.setState({title:""}),e.props.displayNotification()})).catch((function(t){if(t.response&&t.response.data)return e.setState({message:t.response.data.message})}))},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state.title;return Object(s.jsx)("div",{children:Object(s.jsxs)(W.a,{centered:!0,isOpen:this.props.displayColumnModal,children:[Object(s.jsx)(B.a,{toggle:this.props.toggleColumnModal,children:"Add New List"}),Object(s.jsx)(z.a,{children:Object(s.jsx)("div",{className:"modal-form",children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,className:"register-form",id:"login-form",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"title",className:"icon",children:Object(s.jsx)(P.a,{})}),Object(s.jsx)("input",{type:"text",name:"title",id:"title",placeholder:"List Title *",required:!0,value:e,onChange:this.handleChange})]}),Object(s.jsx)("div",{className:"form-group form-button",children:Object(s.jsx)("input",{type:"submit",name:"create",id:"create",className:"form-submit-btn",value:"Create"})})]})})})]})})}}]),a}(i.a.Component)),Y=a(284),q=(a(560),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).logoutAndLiftUserState=function(){y.logout().then((function(){return e.props.onUserChange(null)})).catch((function(e){return console.log(e)}))},e}return Object(b.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)("div",{className:"area"}),Object(s.jsxs)("nav",{className:"main-menu",children:[Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{onClick:this.props.toggleCreateModal,children:Object(s.jsxs)("span",{children:[Object(s.jsx)(_.a,{className:"menu-icon menu-add"}),Object(s.jsx)("span",{className:"nav-text",children:"Add new job"})]})}),Object(s.jsx)("li",{onClick:this.props.toggleColumnModal,children:Object(s.jsxs)("span",{children:[Object(s.jsx)(P.b,{className:"menu-icon"}),Object(s.jsx)("span",{className:"nav-text",children:"Add new list"})]})}),Object(s.jsx)("li",{className:"rm-link",children:Object(s.jsxs)("span",{children:[Object(s.jsx)(Y.a,{className:"menu-icon"}),Object(s.jsx)("span",{className:"nav-text",children:Object(s.jsx)(O.b,{to:"/charting",className:"nav-text",children:"Graphs and Statistics"})})]})})]}),Object(s.jsx)("ul",{className:"logout",children:Object(s.jsx)("li",{onClick:this.logoutAndLiftUserState,children:Object(s.jsxs)("span",{children:[Object(s.jsx)(P.c,{className:"menu-icon"}),Object(s.jsx)("span",{className:"nav-text",children:"Logout"})]})})})]}),Object(s.jsxs)("nav",{className:"mobile",children:[Object(s.jsx)(_.a,{className:"menu-icon menu-add",onClick:this.props.toggleCreateModal}),Object(s.jsx)(P.b,{className:"menu-icon",onClick:this.props.toggleColumnModal}),Object(s.jsx)(O.b,{to:"/charting",children:Object(s.jsx)(Y.a,{className:"menu-icon"})}),Object(s.jsx)(P.c,{className:"menu-icon",onClick:this.logoutAndLiftUserState})]})]})}}]),a}(n.Component)),G=a(759),X=(a(561),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={displayCreateModal:!1,displayDetailsModal:!1,displayEditModal:!1,displayColumnModal:!1,selectedCard:{},displayNotification:!1},e.componentDidMount=function(){e.props.fetchData()},e.setCurrentCard=function(t){e.setState({selectedCard:t})},e.toggleDetailsModal=function(){e.setState({displayDetailsModal:!e.state.displayDetailsModal})},e.toggleCreateModal=function(){e.setState({displayCreateModal:!e.state.displayCreateModal})},e.toggleEditModal=function(){e.setState({displayEditModal:!e.state.displayEditModal})},e.toggleColumnModal=function(){e.setState({displayColumnModal:!e.state.displayColumnModal})},e.displayNotification=function(){e.setState({displayNotification:!0},(function(){window.setTimeout((function(){e.setState({displayNotification:!1})}),2e3)}))},e.handleChange=function(t){var a=t.target,s=a.name,n=a.value,i=Object(j.a)(Object(j.a)({},e.state.selectedCard),{},Object(u.a)({},s,n));e.setState({selectedCard:i})},e.onDragEnd=function(t){var a=t.destination,s=t.source,n=t.draggableId,i=e.props,c=i.columns,l=i.replaceColumns;if(a&&(s.droppableId!==a.droppableId||s.index!==a.index)){var r=Object.values(c).find((function(e){return e._id===s.droppableId})),o=Object.values(c).find((function(e){return e._id===a.droppableId})),d=Object(R.a)(r.cards),u=Object(R.a)(o.cards);s.droppableId===a.droppableId&&(u=d);var h=d.find((function(e){return e._id===n}));d.splice(s.index,1),u.splice(a.index,0,h),l(Object(j.a)(Object(j.a)({},r),{},{cards:d}),Object(j.a)(Object(j.a)({},o),{},{cards:u}))}},e.getJobsApplied=function(){var t=e.props.cards;return Object.values(t).filter((function(e){return e.date})).length},e.getMsg=function(){return 0===e.getJobsApplied()?"jobs. What are you waiting for?":1===e.getJobsApplied()?"job.":"jobs. Keep it up!"},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.currentUser,n=t.onUserChange,i=t.columns,c=t.updateCardState,l=t.updateColumnState,r=t.replaceColumns,o=(t.cards,t.deleteCard),d=t.editCard,u=t.editColumn,j=t.deleteColumn,h=t.successMessage;return Object(s.jsxs)("div",{className:"board-container",children:[Object(s.jsx)(q,{onUserChange:n,toggleCreateModal:this.toggleCreateModal,toggleColumnModal:this.toggleColumnModal}),Object(s.jsx)(G.a,{color:"success",isOpen:this.state.displayNotification,children:Object(s.jsx)("b",{children:h})}),Object(s.jsxs)("div",{className:"welcome-msg",children:[Object(s.jsxs)("h2",{children:["Welcome, ","".concat(a.name,".")]}),Object(s.jsxs)("div",{style:{color:"#777"},children:["You have applied to ",Object(s.jsx)("b",{children:this.getJobsApplied()})," ",this.getMsg()," "]})]}),Object(s.jsx)(H,{columns:i,updateCardState:c,updateColumnState:l,replaceColumns:r,displayCreateModal:this.state.displayCreateModal,toggleCreateModal:this.toggleCreateModal,successMessage:h,displayNotification:this.displayNotification}),Object(s.jsx)(K,{card:this.state.selectedCard,deleteCard:o,displayDetailsModal:this.state.displayDetailsModal,displayEditModal:this.state.displayEditModal,toggleDetailsModal:this.toggleDetailsModal,toggleEditModal:this.toggleEditModal,displayNotification:this.displayNotification,handleChange:this.handleChange,editCard:d}),Object(s.jsx)(V,{updateColumnState:l,displayColumnModal:this.state.displayColumnModal,toggleColumnModal:this.toggleColumnModal,successMessage:h,displayNotification:this.displayNotification}),Object(s.jsx)(w.a,{onDragEnd:this.onDragEnd,children:Object(s.jsx)("div",{className:"board",children:i&&Object.values(i).map((function(t,a){return Object(s.jsx)("div",{children:Object(s.jsx)(F,{column:t,index:a,toggleDetailsModal:e.toggleDetailsModal,setCurrentCard:e.setCurrentCard,editColumn:u,deleteColumn:j,displayNotification:e.displayNotification})},t._id)}))})})]})}}]),a}(n.Component)),$=a(487),Q=function(e){var t=e.authorized,a=e.redirect,n=Object($.a)(e,["authorized","redirect"]);return t?Object(s.jsx)(g.b,Object(j.a)({},n)):Object(s.jsx)(g.a,{to:a})},Z=a(478),ee=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.lineData;return Object(s.jsx)(Z.a,{data:e,margin:{top:10,right:40,bottom:130,left:70},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},yFormat:" >-.2~f",curve:"linear",axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:10,tickRotation:0,legend:"Location",legendOffset:56,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:6,tickRotation:0,legend:"Number of Applications",legendOffset:-55,legendPosition:"middle"},enableGridX:!1,enableGridY:!1,colors:{scheme:"category10"},lineWidth:4,pointSize:10,pointColor:{from:"color",modifiers:[]},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,enableArea:!0,areaBaselineValue:1,useMesh:!0,legends:[]})}}]),a}(n.Component),te=a(486),ae=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.pieData,t=["lines","dots","",""],a=Object.values(e).map((function(e){return{match:{id:e.id},id:t[Math.floor(Math.random()*Math.floor(t.length))]}}));return Object(s.jsx)(te.a,{data:e,margin:{top:10,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,cornerRadius:3,colors:{scheme:"category10"},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},radialLabelsSkipAngle:10,radialLabelsTextColor:"black",radialLabelsLinkColor:{from:"color"},sliceLabelsSkipAngle:10,sliceLabelsTextColor:"black",defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}],fill:a,legends:[]})}}]),a}(n.Component),se=a(479),ne=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.calendarData;return Object(s.jsx)(se.a,{data:e,from:"2020-01-02",to:"2020-12-31",emptyColor:"#eeeeee",colors:["#C2EDCF","#71D68F","#206E38","#123F20"],margin:{top:0,right:40,bottom:40,left:-1500},yearSpacing:40,monthBorderColor:"#ffffff",dayBorderWidth:2,dayBorderColor:"#ffffff",legends:[{anchor:"bottom-right",direction:"row",translateY:36,itemCount:4,itemWidth:42,itemHeight:36,itemsSpacing:14,itemDirection:"right-to-left"}]})}}]),a}(n.Component),ie=a(482),ce=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.barData;return Object(s.jsx)(ie.a,{data:e,keys:["key"],indexBy:"salary",margin:{top:10,right:80,bottom:125,left:80},padding:.3,layout:"vertical",valueScale:{type:"linear"},colors:{scheme:"category10"},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#63a0cb",size:4,padding:9,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#63a0cb",rotation:-45,lineWidth:6,spacing:16}],fill:[{match:{id:"none"},id:"dots"},{match:{id:"key"},id:"lines"}],borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Salary",legendPosition:"middle",legendOffset:50},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Company",legendPosition:"middle",legendOffset:-60},enableGridX:!0,enableGridY:!1,labelSkipWidth:12,labelSkipHeight:12,labelTextColor:"#ffffff",legends:[],animate:!0,motionStiffness:90,motionDamping:15})}}]),a}(n.Component),le=(a(682),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=Object.values(this.props.cards).reduce((function(e,t){return e[t.date]=(e[t.date]||0)+1,e}),{}),t=Object.entries(e).map((function(e){return{day:e[0].slice(0,10).toString(),value:e[1].toString()}})),a=Object.values(this.props.columns).map((function(e){return{id:e.title,label:e.title,value:e.cards.length}})),n=Object.values(this.props.cards).reduce((function(e,t){return e[t.location.split(",")[0]]=(e[t.location.split(",")[0]]||0)+1,e}),{}),i=[{data:Object.entries(n).map((function(e){return{x:e[0],y:e[1]}}))}],c=Object.values(this.props.cards).map((function(e){return{salary:e.company.length<11?e.company:e.company.slice(0,11)+"...",key:e.salary?e.salary:0,keyColor:"hsl(212, 70%, 50%)"}})).sort((function(e,t){return t.key-e.key}));return Object(s.jsxs)("div",{className:"charting-container",children:[Object(s.jsx)("center",{children:Object(s.jsx)("h2",{children:"Graphs and Stats"})}),Object(s.jsx)(O.b,{to:"/",className:"btn-primary",style:{marginLeft:"1rem",padding:".6rem 1.8rem",textDecoration:"none"},children:"Back"}),Object(s.jsxs)("div",{className:"charts",children:[Object(s.jsxs)("div",{className:"chart-row",children:[Object(s.jsxs)("div",{className:"chart",children:[Object(s.jsx)("h3",{children:Object(s.jsx)("b",{children:"Number of Applications Per Stage"})}),Object(s.jsx)(ae,{pieData:a})]}),Object(s.jsxs)("div",{className:"chart",children:[Object(s.jsx)("h3",{children:Object(s.jsx)("b",{children:"Jobs Applied by Date"})}),Object(s.jsx)(ne,{calendarData:t})]})]}),Object(s.jsxs)("div",{className:"chart-row",children:[Object(s.jsxs)("div",{className:"chart",children:[Object(s.jsx)("h3",{children:Object(s.jsx)("b",{children:"Number of Applications by Location"})}),Object(s.jsx)(ee,{lineData:i})]}),Object(s.jsxs)("div",{className:"chart",children:[Object(s.jsx)("h3",{children:Object(s.jsx)("b",{children:"Annual Salary Estimate by Company (in thousands)"})}),Object(s.jsx)(ce,{barData:c})]})]})]})]})}}]),a}(n.Component)),re=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={currentUser:null,loading:!0,cards:[],columns:[],successMessage:null},e.componentDidMount=function(){e.fetchData()},e.fetchData=function(){Promise.all([M.getCards(),D.getColumns(),y.getAuthenticatedUser()]).then((function(t){var a,s,n,i,c=null===(a=t[0].data)||void 0===a||null===(s=a.cards)||void 0===s?void 0:s.reduce((function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},t._id,t))}),{}),l=null===(n=t[1].data)||void 0===n||null===(i=n.columns)||void 0===i?void 0:i.reduce((function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},t._id,t))}),{}),r=t[2].data.user;e.setState({cards:c,columns:l,currentUser:r,loading:!1})})).catch((function(e){return console.log(e)}))},e.updateUser=function(t,a){e.setState({currentUser:t,columns:a})},e.updateCardState=function(t,a){var s=Object(j.a)(Object(j.a)({},e.state.cards),{},Object(u.a)({},t._id,t));e.setState({cards:s,successMessage:a})},e.updateColumnState=function(t,a){var s=Object(j.a)(Object(j.a)({},e.state.columns),{},Object(u.a)({},t._id,t));e.setState({columns:s,successMessage:a})},e.replaceColumns=function(){var t=Object(d.a)(o.a.mark((function t(a,s){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({columns:Object(j.a)(Object(j.a)({},e.state.columns),{},(n={},Object(u.a)(n,a._id,a),Object(u.a)(n,s._id,s),n))}),t.next=3,Promise.all([D.updateColumn(a._id,a),D.updateColumn(s._id,s)]);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.editCard=function(t,a){M.updateCard(t,a).then((function(a){var s=a.data.successMessage,n=Object.values(e.state.columns).find((function(e){return e.cards.find((function(e){return e._id===t}))}))._id;D.getColumnDetails(n).then((function(t){console.log(t.data.column),e.setState({columns:Object(j.a)(Object(j.a)({},e.state.columns),{},Object(u.a)({},n,t.data.column)),successMessage:s})}))})).catch((function(e){console.log(e)}))},e.deleteCard=function(t){M.deleteCard(t).then((function(a){var s=a.data.successMessage,n=Object.values(e.state.columns).find((function(e){return e.cards.find((function(e){return e._id===t}))}))._id,i=Object(j.a)(Object(j.a)({},e.state.columns[n]),{},{cards:e.state.columns[n].cards.filter((function(e){return e._id!==t}))}),c=Object(j.a)({},e.state.cards);delete c[t],e.setState({columns:Object(j.a)(Object(j.a)({},e.state.columns),{},Object(u.a)({},n,i)),cards:c,successMessage:s})})).catch((function(e){console.log(e)}))},e.editColumn=function(t,a){var s=e.state.columns[t];s.title=a,D.updateColumn(t,s).then((function(t){var a=t.data.successMessage;D.getColumns().then((function(t){e.setState({columns:t.data.columns,successMessage:a})}))}))},e.deleteColumn=function(t){D.deleteColumn(t).then((function(a){var s=a.data.successMessage,n=Object.values(e.state.columns).filter((function(e){return e._id!==t}));e.setState({columns:n,successMessage:s})}))},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this;return console.log("user: ",this.state.currentUser),console.log("cards: ",this.state.cards),console.log("columns: ",this.state.columns),Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(O.a,{children:Object(s.jsxs)(g.d,{children:[Object(s.jsx)(g.b,{path:"/signup",render:function(t){return Object(s.jsx)(L,Object(j.a)(Object(j.a)({},t),{},{onUserChange:e.updateUser}))}}),Object(s.jsx)(g.b,{path:"/login",render:function(t){return Object(s.jsx)(A,Object(j.a)(Object(j.a)({},t),{},{onUserChange:e.updateUser}))}}),Object(s.jsx)(g.b,{path:"/charting",render:function(t){return Object(s.jsx)(le,Object(j.a)(Object(j.a)({},t),{},{cards:e.state.cards,columns:e.state.columns}))}}),this.state.loading?Object(s.jsx)(g.b,{path:"/",render:function(e){return Object(s.jsx)("div",{})}}):Object(s.jsx)(Q,{path:"/",authorized:this.state.currentUser,redirect:"/signup",render:function(t){return Object(s.jsx)(X,Object(j.a)(Object(j.a)({},t),{},{currentUser:e.state.currentUser,cards:e.state.cards,columns:e.state.columns,successMessage:e.state.successMessage,onUserChange:e.updateUser,updateCardState:e.updateCardState,updateColumnState:e.updateColumnState,replaceColumns:e.replaceColumns,deleteCard:e.deleteCard,editCard:e.editCard,editColumn:e.editColumn,deleteColumn:e.deleteColumn,fetchData:e.fetchData}))}})]})})})}}]),a}(i.a.Component),oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,778)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))};l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(re,{})}),document.getElementById("root")),oe()}},[[683,1,2]]]);
//# sourceMappingURL=main.5b90d705.chunk.js.map