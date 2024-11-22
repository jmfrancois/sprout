import{j as e}from"./jsx-runtime-CfatFE5O.js";import{f as g}from"./index-B-tj2W5I.js";import{S as a}from"./Switch-B_AbSP2p.js";import{B as t,a as n}from"./Box-25vWnmJ9.js";const w={title:"Components/Switch",component:a,parameters:{}},f={chromatic:{disableSnapshot:!0}},l={render:d=>e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(a,{...d})}),args:{name:"switch",label:"Label"},argTypes:{disabled:{control:"boolean"},readOnly:{control:"boolean"},checked:{table:{disable:!0}},onChange:{table:{disable:!0}}},parameters:f},r={render:d=>e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(a,{...d})}),args:{name:"switch",label:"Label",onChange:g()},argTypes:{disabled:{control:"boolean"},readOnly:{control:"boolean"},checked:{control:"select",options:[void 0,!0,!1]},onChange:{table:{disable:!0}}},parameters:f},s={render:()=>e.jsx(t,{direction:"col",children:e.jsxs(t,{gap:"m",children:[e.jsxs(t,{gap:"m",direction:"col",border:"default",p:"l",children:[e.jsx("h3",{className:n({font:"heading_s",color:"default"}),children:"unchecked + label"}),e.jsx(a,{label:"Default"}),e.jsx(a,{label:"Hover","data-testid":"hover"}),e.jsx(a,{label:"Pressed","data-testid":"active"}),e.jsx(a,{label:"Focus","data-testid":"focus"}),e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"readOnly",readOnly:!0})]}),e.jsxs(t,{gap:"m",direction:"col",border:"default",p:"l",children:[e.jsx("h3",{className:n({font:"heading_s",color:"default"}),children:"checked + label"}),e.jsx(a,{label:"Checked",checked:!0}),e.jsx(a,{label:"Hover",checked:!0,"data-testid":"hover"}),e.jsx(a,{label:"Pressed",checked:!0,"data-testid":"active"}),e.jsx(a,{label:"Focus",checked:!0,"data-testid":"focus"}),e.jsx(a,{label:"Disabled",checked:!0,disabled:!0}),e.jsx(a,{label:"readOnly",checked:!0,readOnly:!0})]}),e.jsxs(t,{gap:"m",direction:"col",border:"default",p:"l",children:[e.jsx("h3",{className:n({font:"heading_s",color:"default"}),children:"unchecked + aria-label"}),e.jsx(a,{"aria-label":"Checked"}),e.jsx(a,{"aria-label":"Hover","data-testid":"hover"}),e.jsx(a,{"aria-label":"Pressed","data-testid":"active"}),e.jsx(a,{"aria-label":"Focus","data-testid":"focus"}),e.jsx(a,{"aria-label":"Disabled",disabled:!0}),e.jsx(a,{"aria-label":"readOnly",readOnly:!0})]}),e.jsxs(t,{gap:"m",direction:"col",border:"default",p:"l",children:[e.jsx("h3",{className:n({font:"heading_s",color:"default"}),children:"checked + aria-label"}),e.jsx(a,{"aria-label":"Checked",checked:!0}),e.jsx(a,{"aria-label":"Hover",checked:!0,"data-testid":"hover"}),e.jsx(a,{"aria-label":"Pressed",checked:!0,"data-testid":"active"}),e.jsx(a,{"aria-label":"Focus",checked:!0,"data-testid":"focus"}),e.jsx(a,{"aria-label":"Disabled",checked:!0,disabled:!0}),e.jsx(a,{"aria-label":"readOnly",checked:!0,readOnly:!0})]})]})}),parameters:{pseudo:{hover:"span:has([data-testid=hover])",focusVisible:"[data-testid=focus]",active:"span:has([data-testid=active]) input"},controls:{disable:!0}}};var c,o,i;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: SwitchProps) => <Box p="m" data-testid="wrapper" width="fit-content">
      <Switch {...args} />
    </Box>,
  args: {
    name: "switch",
    label: "Label"
  },
  argTypes: {
    disabled: {
      control: "boolean"
    },
    readOnly: {
      control: "boolean"
    },
    checked: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  },
  parameters: disableSnap
}`,...(i=(o=l.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var h,b,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: SwitchProps) => <Box p="m" data-testid="wrapper" width="fit-content">
      <Switch {...args} />
    </Box>,
  args: {
    name: "switch",
    label: "Label",
    onChange: fn()
  },
  argTypes: {
    disabled: {
      control: "boolean"
    },
    readOnly: {
      control: "boolean"
    },
    checked: {
      control: "select",
      options: [undefined, true, false]
    },
    onChange: {
      table: {
        disable: true
      }
    }
  },
  parameters: disableSnap
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var p,m,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Box direction="col">
      <Box gap="m">
        <Box gap="m" direction="col" border="default" p="l">
          <h3 className={getTypographyClassName({
          font: "heading_s",
          color: "default"
        })}>unchecked + label</h3>
          <Switch label="Default" />
          <Switch label="Hover" data-testid="hover" />
          <Switch label="Pressed" data-testid="active" />
          <Switch label="Focus" data-testid="focus" />
          <Switch label="Disabled" disabled />
          <Switch label="readOnly" readOnly />
        </Box>
        <Box gap="m" direction="col" border="default" p="l">
          <h3 className={getTypographyClassName({
          font: "heading_s",
          color: "default"
        })}>checked + label</h3>
          <Switch label="Checked" checked />
          <Switch label="Hover" checked data-testid="hover" />
          <Switch label="Pressed" checked data-testid="active" />
          <Switch label="Focus" checked data-testid="focus" />
          <Switch label="Disabled" checked disabled />
          <Switch label="readOnly" checked readOnly />
        </Box>
        <Box gap="m" direction="col" border="default" p="l">
          <h3 className={getTypographyClassName({
          font: "heading_s",
          color: "default"
        })}>unchecked + aria-label</h3>
          <Switch aria-label="Checked" />
          <Switch aria-label="Hover" data-testid="hover" />
          <Switch aria-label="Pressed" data-testid="active" />
          <Switch aria-label="Focus" data-testid="focus" />
          <Switch aria-label="Disabled" disabled />
          <Switch aria-label="readOnly" readOnly />
        </Box>
        <Box gap="m" direction="col" border="default" p="l">
          <h3 className={getTypographyClassName({
          font: "heading_s",
          color: "default"
        })}>checked + aria-label</h3>
          <Switch aria-label="Checked" checked />
          <Switch aria-label="Hover" checked data-testid="hover" />
          <Switch aria-label="Pressed" checked data-testid="active" />
          <Switch aria-label="Focus" checked data-testid="focus" />
          <Switch aria-label="Disabled" checked disabled />
          <Switch aria-label="readOnly" checked readOnly />
        </Box>
      </Box>
    </Box>,
  parameters: {
    pseudo: {
      hover: "span:has([data-testid=hover])",
      focusVisible: "[data-testid=focus]",
      active: "span:has([data-testid=active]) input"
    },
    controls: {
      disable: true
    }
  }
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const S=["UnControlled","Controlled","VisualTest"],O=Object.freeze(Object.defineProperty({__proto__:null,Controlled:r,UnControlled:l,VisualTest:s,__namedExportsOrder:S,default:w},Symbol.toStringTag,{value:"Module"}));export{O as S,l as U};
