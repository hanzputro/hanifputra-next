import{b as P,r as l,aP as f,j as t,at as h,aQ as j,aR as B,a1 as E,au as H,aS as k,ar as I,ai as b,aT as C,o as R}from"./sanity-5b5a1a73.js";const S=P(R)`
  position: relative;
`;function T(s){const{children:o}=s,{collapsed:n}=B();return t.jsx(S,{hidden:n,height:"fill",overflow:"auto",children:o})}function y(s){const{actionHandlers:o,index:n,menuItems:e,menuItemGroups:r,title:i}=s,{features:a}=E();return!(e!=null&&e.length)&&!i?null:t.jsx(H,{actions:t.jsx(k,{menuItems:e,menuItemGroups:r,actionHandlers:o}),backButton:a.backButton&&n>0&&t.jsx(I,{as:b,"data-as":"a",icon:C,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function v(s){const{index:o,pane:n,paneKey:e,...r}=s,{child:i,component:a,menuItems:u,menuItemGroups:d,type:U,...p}=n,[c,m]=l.useState(null),{title:x=""}=f(n);return t.jsxs(h,{id:e,minWidth:320,selected:r.isSelected,children:[t.jsx(y,{actionHandlers:c==null?void 0:c.actionHandlers,index:o,menuItems:u,menuItemGroups:d,title:x}),t.jsxs(T,{children:[j.isValidElementType(a)&&l.createElement(a,{...r,...p,ref:m,child:i,paneKey:e}),l.isValidElement(a)&&a]})]})}export{v as default};
