(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s,r=n(3),a=n.n(r),c=n(4),i=n(5),o=n(8),l=n(6),u=n(7),b=n(1),h=n.n(b),p=(n(13),n(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isStarted:!1,isReversed:!1,sortType:s.NONE},t.startBtn=function(){t.setState({isStarted:!0})},t.sortByLengthBtn=function(){t.setState({sortType:s.LENGTH})},t.sortByAlphabetBtn=function(){t.setState({sortType:s.ALPHABET})},t.reverseBtn=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.resetBtn=function(){t.setState({sortType:s.NONE,isReversed:!1})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isStarted,n=t.isReversed,r=t.sortType,a=function(t,e,n){var r=Object(u.a)(t);return r.sort((function(t,n){switch(e){case s.ALPHABET:return t.localeCompare(n);case s.LENGTH:return t.length-n.length;default:return 0}})),n?r.reverse():r}(d,r,n);return Object(p.jsxs)("div",{className:"App",children:[!e&&Object(p.jsx)("button",{type:"button",className:"Start button is-link",onClick:this.startBtn,children:"Start"}),e&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"Container",children:[Object(p.jsx)("button",{type:"button",className:"btn button is-primary",onClick:this.sortByAlphabetBtn,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:"btn button is-primary",onClick:this.sortByLengthBtn,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:"btn button is-primary",onClick:this.reverseBtn,children:"Reverse"}),Object(p.jsx)("button",{type:"button",className:"btn button is-primary",onClick:this.resetBtn,children:"Reset"})]}),Object(p.jsx)("ul",{className:"Goods",children:a.map((function(t){return Object(p.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})}}]),n}(h.a.Component);a.a.render(Object(p.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bb887311.chunk.js.map