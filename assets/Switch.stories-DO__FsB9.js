import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{f as x}from"./index-CjQa9iMn.js";import{S as t}from"./Switch-BiJKMrHR.js";import{B as r}from"./Box-Bo_17ADl.js";const w={title:"Components/Switch",component:t,parameters:{}},g={chromatic:{disableSnapshot:!0}},a=o=>e.jsx(r,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{...o})});a.args={name:"switch",label:"Label"};a.argTypes={disabled:{control:"boolean"},readOnly:{control:"boolean"},checked:{table:{disable:!0}},onChange:{table:{disable:!0}}};a.parameters=g;const s=o=>e.jsx(r,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{...o})});s.args={name:"switch",label:"Label",onChange:x()};s.argTypes={disabled:{control:"boolean"},readOnly:{control:"boolean"},checked:{control:"select",options:[void 0,!0,!1]},onChange:{table:{disable:!0}}};s.parameters=g;const n=()=>e.jsxs(r,{gap:"m",children:[e.jsxs(r,{gap:"s",direction:"col",children:[e.jsx(t,{label:"Default"}),e.jsx(t,{label:"Hover","data-testid":"hover"}),e.jsx(t,{label:"Focus","data-testid":"focus"}),e.jsx(t,{label:"Disabled",disabled:!0}),e.jsx(t,{label:"readOnly",readOnly:!0})]}),e.jsxs(r,{gap:"s",direction:"col",children:[e.jsx(t,{label:"Checked",checked:!0}),e.jsx(t,{label:"Hover",checked:!0,"data-testid":"hover"}),e.jsx(t,{label:"Focus",checked:!0,"data-testid":"focus"}),e.jsx(t,{label:"Disabled",checked:!0,disabled:!0}),e.jsx(t,{label:"readOnly",checked:!0,readOnly:!0})]})]});n.parameters={pseudo:{hover:"span:has(> label > [data-testid=hover])",focusVisible:"[data-testid=focus]"}};a.__docgenInfo={description:"",methods:[],displayName:"UnControlled",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"Controlled",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`(args: SwitchProps) => <Box p="m" data-testid="wrapper" width="fit-content">
    <Switch {...args} />
  </Box>`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,p,h;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`(args: SwitchProps) => <Box p="m" data-testid="wrapper" width="fit-content">
    <Switch {...args} />
  </Box>`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,u,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Box gap="m">
    <Box gap="s" direction="col">
      <Switch label="Default" />
      <Switch label="Hover" data-testid="hover" />
      <Switch label="Focus" data-testid="focus" />
      <Switch label="Disabled" disabled />
      <Switch label="readOnly" readOnly />
    </Box>
    <Box gap="s" direction="col">
      <Switch label="Checked" checked />
      <Switch label="Hover" checked data-testid="hover" />
      <Switch label="Focus" checked data-testid="focus" />
      <Switch label="Disabled" checked disabled />
      <Switch label="readOnly" checked readOnly />
    </Box>
  </Box>`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const f=["UnControlled","Controlled","VisualTest"],C=Object.freeze(Object.defineProperty({__proto__:null,Controlled:s,UnControlled:a,VisualTest:n,__namedExportsOrder:f,default:w},Symbol.toStringTag,{value:"Module"}));export{C as S,a as U};
