import{j as t}from"./jsx-runtime-CfatFE5O.js";import{S as n}from"./Skeleton-BJic6b4p.js";import{B as p}from"./Box-25vWnmJ9.js";const h={title:"Components/Skeleton",component:n,parameters:{}},u={variant:{options:[void 0,"text","circle","rectangle","Button","IconButton","Input","InputField"],control:{type:"select"}},width:{control:{type:"number"}},height:{control:{type:"number"}}},e={render:d=>t.jsx(p,{p:"s",direction:"col",gap:"s",width:"500px",height:"auto","data-testid":"wrapper",children:t.jsx(n,{...d})}),argTypes:u,parameters:{chromatic:{disableSnapshot:!0}}},r={render:()=>t.jsxs(p,{gap:"s",direction:"col",children:[t.jsx("h2",{children:'variant="text"'}),t.jsx(n,{variant:"text"}),t.jsx("h2",{children:'variant="circle"'}),t.jsx(n,{variant:"circle"}),t.jsx("h2",{children:'variant="rectangle"'}),t.jsx(n,{variant:"rectangle"}),t.jsx("h2",{children:'variant="Button"'}),t.jsx(n,{variant:"Button"}),t.jsx("h2",{children:'variant="IconButton"'}),t.jsx(n,{variant:"IconButton"}),t.jsx("h2",{children:'variant="Input"'}),t.jsx(n,{variant:"Input"}),t.jsx("h2",{children:'variant="InputField"'}),t.jsx(n,{variant:"InputField"})]}),parameters:{controls:{disable:!0}}};var a,o,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => <Box p="s" direction="col" gap="s" width="500px" height="auto" data-testid="wrapper">
      <Skeleton {...props} />
    </Box>,
  argTypes: argTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var s,c,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Box gap="s" direction="col">
      <h2>variant="text"</h2>
      <Skeleton variant="text" />
      <h2>variant="circle"</h2>
      <Skeleton variant="circle" />
      <h2>variant="rectangle"</h2>
      <Skeleton variant="rectangle" />
      <h2>variant="Button"</h2>
      <Skeleton variant="Button" />
      <h2>variant="IconButton"</h2>
      <Skeleton variant="IconButton" />
      <h2>variant="Input"</h2>
      <Skeleton variant="Input" />
      <h2>variant="InputField"</h2>
      <Skeleton variant="InputField" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const x=["Playground","VisualTest"],j=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,VisualTest:r,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{e as P,j as S};
