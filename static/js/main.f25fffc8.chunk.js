(this["webpackJsonpra-4.2"]=this["webpackJsonpra-4.2"]||[]).push([[0],[,,,,,,,function(e,t,i){},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),r=i(8),c=i.n(r),s=(i(13),i(14),i(4)),l=i(3),d=i(6);i(15),i(16);var o=function(e){if(""===e.value){var t=document.querySelector(".".concat(e.classList.value));return t.style.borderColor="red",setTimeout((function(){return t.removeAttribute("style")}),1e3),!0}},u=i(0);var j=function(e){var t=e.form,i=function(t){e.onChange(t)};return Object(u.jsxs)("form",{className:"TrainingDiaryForm",onSubmit:function(t){if(t.preventDefault(),!o(t.target[0])&&!o(t.target[1]))return e.onSubmit(t.target[0].value,t.target[1].value)},children:[Object(u.jsxs)("label",{className:"TrainingDiaryForm-labelDate",htmlFor:"fieldDate",children:["\u0414\u0430\u0442\u0430(\u0414\u0414.\u041c\u041c.\u0413\u0413)",Object(u.jsx)("input",{type:"date",className:"TrainingDiaryForm-fieldDate",id:"fieldDate",name:"fieldDate",value:t.fieldDate||t.name,onChange:i})]}),Object(u.jsxs)("label",{className:"TrainingDiaryForm-labelDate",htmlFor:"fieldLength",children:["\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c",Object(u.jsx)("input",{type:"number",className:"TrainingDiaryForm-fieldLength",id:"fieldLength",name:"fieldLength",value:t.fieldLength||t.name,onChange:i})]}),Object(u.jsx)("button",{className:"TrainingDiaryForm-buttonAdd",children:"OK"})]})};i(7),i(18);var m=function(e){var t=e.item.date.split("-").reverse().join(".");return Object(u.jsxs)("div",{className:"TrainingDiaryListItem",children:[Object(u.jsx)("div",{className:"TrainingDiaryList-data",children:t}),Object(u.jsx)("div",{className:"TrainingDiaryList-length",children:e.item.length}),Object(u.jsxs)("div",{className:"TrainingDiaryList-controls",children:[Object(u.jsx)("button",{className:"TrainingDiaryList-controls-edit material-icons",onClick:function(t){e.onEdit(t.target.nextSibling.dataset.id)},children:"mode"}),Object(u.jsx)("button",{"data-id":e.item.id,className:"TrainingDiaryList-controls-delete material-icons",onClick:function(t){e.onDelete(t.target.dataset.id)},children:"clear"})]})]})};var b=function(e){var t=function(t){e.onDelete(t)},i=function(t){e.onEdit(t)};return Object(u.jsxs)("div",{className:"TrainingDiaryList",children:[Object(u.jsxs)("div",{className:"TrainingDiaryList-titles",children:[Object(u.jsx)("div",{className:"TrainingDiaryList-title",children:"\u0414\u0430\u0442\u0430(\u0414\u0414.\u041c\u041c.\u0413\u0413)"}),Object(u.jsx)("div",{className:"TrainingDiaryList-title",children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c"}),Object(u.jsx)("div",{className:"TrainingDiaryList-title",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]}),Object(u.jsx)("ul",{className:"TrainingDiaryList-list",children:e.data.map((function(e){return Object(u.jsx)("li",{className:"TrainingDiaryList-list-item",children:Object(u.jsx)(m,{item:e,onDelete:t,onEdit:i})},e.id)}))}),Object(u.jsxs)("div",{className:"TrainingDiaryList-total",children:[e.data.reduce((function(e,t){return e+ +t.length}),0),"Km"]})]})},f=i(2);function g(e){var t=Object(n.useState)({name:"",id:""}),i=Object(d.a)(t,2),a=i[0],r=i[1],c=Object(n.useState)(e.data),o=Object(d.a)(c,2),m=o[0],g=o[1],h=function(e){g((function(t){return t.filter((function(t){return t.id!==e}))}))};return Object(u.jsxs)("div",{className:"TrainingDiary",children:[Object(u.jsx)("div",{className:"TrainingDiary-form",children:Object(u.jsx)(j,{form:a,onChange:function(e){var t=e.target;r(Object(l.a)(Object(l.a)({},a),{},Object(s.a)({},t.name,t.value)))},onSubmit:function(e,t){m.push({id:Object(f.a)(),date:e,length:t}),r({name:"",id:""})}})}),Object(u.jsx)("div",{className:"TrainingDiary-list",children:Object(u.jsx)(b,{data:m.sort((function(e,t){return e.date>t.date?-1:1})),onDelete:h,onEdit:function(e){a.fieldDate&&a.fieldLength&&m.push({id:Object(f.a)(),date:a.fieldDate,length:a.fieldLength});var t=m.find((function(t){return t.id===e}));r(Object(l.a)(Object(l.a)({},a),{},{fieldDate:t.date,fieldLength:t.length})),h(e)}})})]})}g.defaultProps={data:[]};var h=g,O=[{id:Object(f.a)(),date:"2021-02-12",length:123},{id:Object(f.a)(),date:"2021-12-03",length:1230},{id:Object(f.a)(),date:"2021-11-11",length:12}];var v=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(h,{data:O})})},D=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),D()}],[[19,1,2]]]);
//# sourceMappingURL=main.f25fffc8.chunk.js.map