import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{g as h}from"./figma-DdOIv0jn.js";import{D as s}from"./Divider-BKfKUvzF.js";import{B as i}from"./Box-Bo_17ADl.js";import{B as a}from"./Button-35iONiNZ.js";const B={title:"Components/Divider",component:s,parameters:{}},o=()=>e.jsxs(i,{gap:"m",children:[e.jsx(a,{label:"Copy"}),e.jsx(a,{label:"Paste"}),e.jsx(s,{orientation:"vertical"}),e.jsx(a,{label:"Delete"})]});o.parameters={...h("divider","vertical"),chromatic:{disableSnapshot:!0}};const r=()=>e.jsxs(i,{direction:"col",width:200,gap:"m",children:["Foo",e.jsx(s,{orientation:"horizontal"}),"Bar"]});r.parameters={chromatic:{disableSnapshot:!0}};const t=()=>e.jsxs(i,{direction:"col",gap:"m",width:"400px",children:[e.jsx(o,{}),e.jsx(r,{})]});o.__docgenInfo={description:"",methods:[],displayName:"Vertical"};r.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};t.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var n,c,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => <Box gap="m">
    <Button label="Copy" />
    <Button label="Paste" />
    <Divider orientation="vertical" />
    <Button label="Delete" />
  </Box>`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Box direction="col" width={200} gap="m">
    Foo
    <Divider orientation="horizontal" />
    Bar
  </Box>`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Box direction="col" gap="m" width="400px">
    <Vertical />
    <Horizontal />
  </Box>`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const j=["Vertical","Horizontal","VisualTest"],y=Object.freeze(Object.defineProperty({__proto__:null,Horizontal:r,Vertical:o,VisualTest:t,__namedExportsOrder:j,default:B},Symbol.toStringTag,{value:"Module"}));export{r as H,y as S,o as V};
