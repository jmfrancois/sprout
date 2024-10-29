import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{g as m}from"./figma-DdOIv0jn.js";import{B as s}from"./ButtonGroup-BhvgftW1.js";import{B as e}from"./Button-35iONiNZ.js";import{B as p}from"./Box-Bo_17ADl.js";const b={title:"Components/ButtonGroup",parameters:m("buttonGroup")},o={render:c=>t.jsxs(s,{...c,children:[t.jsx(e,{label:"Medium"}),t.jsx(e,{label:"Medium"}),t.jsx(e,{label:"Medium"})]}),args:{},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]}},parameters:{chromatic:{disableSnapshot:!0}}},a=()=>t.jsxs(p,{direction:"col",gap:"m",children:[t.jsxs(s,{children:[t.jsx(e,{label:"Default"}),t.jsx(e,{label:"Hover","data-testid":"hover"}),t.jsx(e,{label:"Active","data-testid":"active"}),t.jsx(e,{label:"Focused","data-testid":"focus"})]}),t.jsxs(s,{children:[t.jsx(e,{label:"Small",size:"small"}),t.jsx(e,{label:"Hovered",size:"small","data-testid":"hover"}),t.jsx(e,{label:"Actived",size:"small","data-testid":"active"}),t.jsx(e,{label:"Focused",size:"small","data-testid":"focus"})]}),t.jsxs(s,{orientation:"vertical",children:[t.jsx(e,{label:"Medium"}),t.jsx(e,{label:"Medium"}),t.jsx(e,{label:"Medium"})]})]});a.parameters={pseudo:{hover:'[data-testid="hover"]',active:'[data-testid="active"]',focusVisible:'[data-testid="focus"]'}};a.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var r,l,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (props: ButtonGroupProps) => <ButtonGroup {...props}>
      <Button label="Medium" />
      <Button label="Medium" />
      <Button label="Medium" />
    </ButtonGroup>,
  args: {},
  argTypes: {
    orientation: {
      control: {
        type: "select"
      },
      options: ["horizontal", "vertical"]
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var i,u,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Box direction="col" gap="m">
    <ButtonGroup>
      <Button label="Default" />
      <Button label="Hover" data-testid="hover" />
      <Button label="Active" data-testid="active" />
      <Button label="Focused" data-testid="focus" />
    </ButtonGroup>
    <ButtonGroup>
      <Button label="Small" size="small" />
      <Button label="Hovered" size="small" data-testid="hover" />
      <Button label="Actived" size="small" data-testid="active" />
      <Button label="Focused" size="small" data-testid="focus" />
    </ButtonGroup>
    <ButtonGroup orientation="vertical">
      <Button label="Medium" />
      <Button label="Medium" />
      <Button label="Medium" />
    </ButtonGroup>
  </Box>`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const B=["Playground","VisualTest"],g=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,VisualTest:a,__namedExportsOrder:B,default:b},Symbol.toStringTag,{value:"Module"}));export{o as P,g as S};
