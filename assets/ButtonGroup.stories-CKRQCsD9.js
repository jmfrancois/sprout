import{j as t}from"./jsx-runtime-CfatFE5O.js";import{g as m}from"./figma-hO1OATkS.js";import{B as s}from"./ButtonGroup-DCHBk4I_.js";import{B as e}from"./Button-C-WoFXIp.js";import{B as p}from"./Box-25vWnmJ9.js";const b={title:"Components/ButtonGroup",parameters:m("buttonGroup")},a={render:c=>t.jsxs(s,{...c,children:[t.jsx(e,{label:"Medium"}),t.jsx(e,{label:"Medium"}),t.jsx(e,{label:"Medium"})]}),args:{},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]}},parameters:{chromatic:{disableSnapshot:!0}}},o={render:()=>t.jsxs(p,{direction:"col",gap:"m",children:[t.jsxs(s,{children:[t.jsx(e,{label:"Default"}),t.jsx(e,{label:"Hover","data-testid":"hover"}),t.jsx(e,{label:"Active","data-testid":"active"}),t.jsx(e,{label:"Focused","data-testid":"focus"})]}),t.jsxs(s,{children:[t.jsx(e,{label:"Small",size:"small"}),t.jsx(e,{label:"Hovered",size:"small","data-testid":"hover"}),t.jsx(e,{label:"Actived",size:"small","data-testid":"active"}),t.jsx(e,{label:"Focused",size:"small","data-testid":"focus"})]}),t.jsxs(s,{orientation:"vertical",children:[t.jsx(e,{label:"Medium"}),t.jsx(e,{label:"Medium"}),t.jsx(e,{label:"Medium"})]})]}),parameters:{pseudo:{hover:'[data-testid="hover"]',active:'[data-testid="active"]',focusVisible:'[data-testid="focus"]'},controls:{disable:!0}}};var r,l,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var n,d,u;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Box direction="col" gap="m">
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
    </Box>,
  parameters: {
    pseudo: {
      hover: '[data-testid="hover"]',
      active: '[data-testid="active"]',
      focusVisible: '[data-testid="focus"]'
    },
    controls: {
      disable: true
    }
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const B=["Playground","VisualTest"],g=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,VisualTest:o,__namedExportsOrder:B,default:b},Symbol.toStringTag,{value:"Module"}));export{a as P,g as S};
