import{j as e}from"./jsx-runtime-CfatFE5O.js";import{g as h}from"./figma-hO1OATkS.js";import{D as i}from"./Divider-Dv0yWk4k.js";import{B as n}from"./Box-25vWnmJ9.js";import{B as r}from"./Button-C-WoFXIp.js";const b={title:"Components/Divider",component:i,parameters:{}},o={render:()=>e.jsxs(n,{gap:"m",children:[e.jsx(r,{label:"Copy"}),e.jsx(r,{label:"Paste"}),e.jsx(i,{orientation:"vertical"}),e.jsx(r,{label:"Delete"})]}),parameters:{...h("divider","vertical"),chromatic:{disableSnapshot:!0}}},t={render:()=>e.jsxs(n,{direction:"col",width:200,gap:"m",children:["Foo",e.jsx(i,{orientation:"horizontal"}),"Bar"]}),parameters:{chromatic:{disableSnapshot:!0}}},a={render:()=>e.jsxs(n,{direction:"col",gap:"m",width:"400px",children:[e.jsxs(n,{gap:"m",children:[e.jsx(r,{label:"Copy"}),e.jsx(r,{label:"Paste"}),e.jsx(i,{orientation:"vertical"}),e.jsx(r,{label:"Delete"})]}),e.jsxs(n,{direction:"col",width:200,gap:"m",children:["Foo",e.jsx(i,{orientation:"horizontal"}),"Bar"]})]})};var s,l,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Box gap="m">
      <Button label="Copy" />
      <Button label="Paste" />
      <Divider orientation="vertical" />
      <Button label="Delete" />
    </Box>,
  parameters: {
    ...getFigmaStorybookParams("divider", "vertical"),
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Box direction="col" width={200} gap="m">
      Foo
      <Divider orientation="horizontal" />
      Bar
    </Box>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,u,B;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Box direction="col" gap="m" width="400px">
      <Box gap="m">
        <Button label="Copy" />
        <Button label="Paste" />
        <Divider orientation="vertical" />
        <Button label="Delete" />
      </Box>
      <Box direction="col" width={200} gap="m">
        Foo
        <Divider orientation="horizontal" />
        Bar
      </Box>
    </Box>
}`,...(B=(u=a.parameters)==null?void 0:u.docs)==null?void 0:B.source}}};const g=["Vertical","Horizontal","VisualTest"],y=Object.freeze(Object.defineProperty({__proto__:null,Horizontal:t,Vertical:o,VisualTest:a,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{t as H,y as S,o as V};
