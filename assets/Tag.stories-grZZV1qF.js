import{j as e}from"./jsx-runtime-CfatFE5O.js";import{f as J}from"./index-B-tj2W5I.js";import{A as K}from"./Avatar-CswkKgGg.js";import{B as b}from"./Badge-CDdH9Zu0.js";import{g as k}from"./figma-hO1OATkS.js";import{T as t,s as q,a as n}from"./TagGroup-2rg-o6a0.js";import{B as r,a as z}from"./Box-25vWnmJ9.js";function a({avatar:s,icon:m,text:h,badge:j,size:v,...f}){return e.jsx("a",{className:q.interactive,...f,children:e.jsx(t,{text:h,icon:m,avatar:s,badge:j,size:v})})}function o({avatar:s,icon:m,text:h,badge:j,size:v,...f}){return e.jsx("button",{className:q.interactive,...f,children:e.jsx(t,{text:h,icon:m,avatar:s,badge:j,size:v})})}a.__docgenInfo={description:"",methods:[],displayName:"TagLink"};o.__docgenInfo={description:"",methods:[],displayName:"TagButton"};const Q={title:"Components/Tag",component:t},g={chromatic:{disableSnapshot:!0}},i={text:{},color:{options:[void 0,"error","info","success","warning"]},size:{options:[void 0,"s"]},avatar:{table:{disable:!0}},icon:{table:{disable:!0}},onRemove:{table:{disable:!0}}},c={render:s=>e.jsx(r,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{...s})}),args:{text:"Tag",onRemove:void 0},argTypes:i,parameters:{...k("tag"),...g}},d={render:s=>e.jsxs(n,{children:[e.jsx(t,{...s}),e.jsx(t,{...s}),e.jsx(t,{...s}),e.jsx(t,{...s})]}),args:c.args,argTypes:i,parameters:{...k("tag","group"),...g}},x={render:s=>e.jsx(r,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{...s})}),args:{text:"Tag",onRemove:J()},argTypes:{text:i.text,size:i.size,onRemove:i.onRemove},parameters:{...k("tag","removable"),...g}},p={render:s=>e.jsx(r,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{...s,avatar:e.jsx(K,{size:"s",text:"OC"})})}),args:{text:"Olivier Carnac"},argTypes:{...i},parameters:g},B=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_20897_69)",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.3 9.7L9 10H8V12H6V14H4V16H0V13L6.3 6.7C6.1 6.2 6 5.6 6 5C6 2.2 8.2 0 11 0C13.8 0 16 2.2 16 5C16 7.8 13.8 10 11 10C10.4 10 9.8 9.9 9.3 9.7ZM7 9H8.58579L9.05916 8.52663L9.67139 8.77152C10.0316 8.91559 10.5015 9 11 9C13.2477 9 15 7.24771 15 5C15 2.75228 13.2477 1 11 1C8.75229 1 7 2.75228 7 5C7 5.49845 7.08441 5.96843 7.22848 6.32861L7.47337 6.94084L1 13.4142V15H3V13H5V11H7V9ZM12 5C11.4667 5 11 4.53333 11 4C11 3.46667 11.4667 3 12 3C12.5333 3 13 3.46667 13 4C13 4.53333 12.5333 5 12 5Z",fill:"currentColor"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_20897_69",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]}),l={render:s=>e.jsx(r,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{...s,icon:e.jsx(B,{})})}),args:{text:"ABCD-1234-EFGH-5678"},argTypes:{...i},parameters:g},T={render:s=>e.jsx(r,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{...s,badge:e.jsx(b,{text:"14",type:"number"})})}),args:{text:"App"},argTypes:{...i},parameters:g},u={render:()=>e.jsxs(r,{gap:"s",direction:"col",children:[e.jsxs(r,{gap:"s",direction:"col",children:[e.jsx("h2",{className:z({font:"heading_m",color:"default"}),children:"Default"}),e.jsxs(n,{children:[e.jsx(t,{text:"Tag"}),e.jsx(t,{text:"Tag error",color:"error"}),e.jsx(t,{text:"Tag info",color:"info"}),e.jsx(t,{text:"Tag success",color:"success"}),e.jsx(t,{text:"Tag warning",color:"warning"})]}),e.jsxs(n,{children:[e.jsx(t,{text:"onRemove",onRemove:()=>{}}),e.jsx(t,{text:"onRemove error",color:"error",onRemove:()=>{}}),e.jsx(t,{text:"onRemove info",color:"info",onRemove:()=>{}}),e.jsx(t,{text:"onRemove success",color:"success",onRemove:()=>{}}),e.jsx(t,{text:"onRemove warning",color:"warning",onRemove:()=>{}})]}),e.jsxs(n,{children:[e.jsx(a,{href:"#",text:"TagLink"}),e.jsx(a,{href:"#",text:"TagLink","data-testid":"hover"}),e.jsx(a,{href:"#",text:"TagLink","data-testid":"active"}),e.jsx(a,{href:"#",text:"TagLink","data-testid":"focus"}),e.jsx(a,{href:"#",text:"TagLink","aria-disabled":"true"})]}),e.jsxs(n,{children:[e.jsx(o,{onClick:()=>{},text:"TagButton"}),e.jsx(o,{onClick:()=>{},text:"TagButton","data-testid":"hover"}),e.jsx(o,{onClick:()=>{},text:"TagButton","data-testid":"active"}),e.jsx(o,{onClick:()=>{},text:"TagButton","data-testid":"focus"}),e.jsx(o,{onClick:()=>{},text:"TagButton","aria-disabled":"true"})]}),e.jsx(t,{text:"With icon",icon:e.jsx(B,{})}),e.jsxs(r,{gap:"s",children:[e.jsx(t,{text:"With badge",badge:e.jsx(b,{text:"14",type:"number"})}),e.jsx(t,{text:"Apps",badge:{text:"14",type:"number",color:"info"}}),e.jsx(t,{text:"Boolean",color:"success",badge:{text:"true",type:"number",color:"success"}})]})]}),e.jsxs(r,{gap:"s",direction:"col",children:[e.jsx("h2",{className:z({font:"heading_m",color:"default"}),children:"Small"}),e.jsxs(n,{children:[e.jsx(t,{size:"s",text:"Tag"}),e.jsx(t,{size:"s",text:"Tag error",color:"error"}),e.jsx(t,{size:"s",text:"Tag info",color:"info"}),e.jsx(t,{size:"s",text:"Tag success",color:"success"}),e.jsx(t,{size:"s",text:"Tag warning",color:"warning"})]}),e.jsxs(n,{children:[e.jsx(t,{size:"s",text:"onRemove",onRemove:()=>{}}),e.jsx(t,{size:"s",text:"onRemove error",color:"error",onRemove:()=>{}}),e.jsx(t,{size:"s",text:"onRemove info",color:"info",onRemove:()=>{}}),e.jsx(t,{size:"s",text:"onRemove success",color:"success",onRemove:()=>{}}),e.jsx(t,{size:"s",text:"onRemove warning",color:"warning",onRemove:()=>{}})]}),e.jsxs(n,{children:[e.jsx(a,{size:"s",href:"#",text:"TagLink"}),e.jsx(a,{size:"s",href:"#",text:"TagLink","data-testid":"hover"}),e.jsx(a,{size:"s",href:"#",text:"TagLink","data-testid":"active"}),e.jsx(a,{size:"s",href:"#",text:"TagLink","data-testid":"focus"}),e.jsx(a,{size:"s",href:"#",text:"TagLink","aria-disabled":"true"})]}),e.jsxs(n,{children:[e.jsx(o,{size:"s",onClick:()=>{},text:"TagButton"}),e.jsx(o,{size:"s",onClick:()=>{},text:"TagButton","data-testid":"hover"}),e.jsx(o,{size:"s",onClick:()=>{},text:"TagButton","data-testid":"active"}),e.jsx(o,{size:"s",onClick:()=>{},text:"TagButton","data-testid":"focus"}),e.jsx(o,{size:"s",onClick:()=>{},text:"TagButton","aria-disabled":"true"})]}),e.jsx(t,{size:"s",text:"With icon",icon:e.jsx(B,{})}),e.jsxs(r,{gap:"s",children:[e.jsx(t,{size:"s",text:"With badge",badge:e.jsx(b,{text:"14",type:"number"})}),e.jsx(t,{size:"s",text:"Apps",badge:{text:"14",type:"number",color:"info"}}),e.jsx(t,{size:"s",text:"Boolean",color:"success",badge:{text:"true",type:"number",color:"success"}})]})]})]}),parameters:{pseudo:{hover:'[data-testid="hover"]',active:'[data-testid="active"]',focusVisible:'[data-testid="focus"]'},controls:{disable:!0}}};var R,y,w;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (props: TagProps) => <Box p="m" data-testid="wrapper" width="fit-content">
      <Tag {...props} />
    </Box>,
  args: {
    text: "Tag",
    onRemove: undefined
  },
  argTypes,
  parameters: {
    ...getFigmaStorybookParams("tag"),
    ...disableSnap
  }
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var C,L,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (props: TagProps) => <TagGroups>
      <Tag {...props} />
      <Tag {...props} />
      <Tag {...props} />
      <Tag {...props} />
    </TagGroups>,
  args: Playground.args,
  argTypes,
  parameters: {
    ...getFigmaStorybookParams("tag", "group"),
    ...disableSnap
  }
}`,...(S=(L=d.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var G,P,_;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (props: TagProps) => <Box p="m" data-testid="wrapper" width="fit-content">
      <Tag {...props} />
    </Box>,
  args: {
    text: "Tag",
    onRemove: fn()
  },
  argTypes: {
    text: argTypes.text,
    size: argTypes.size,
    onRemove: argTypes.onRemove
  },
  parameters: {
    ...getFigmaStorybookParams("tag", "removable"),
    ...disableSnap
  }
}`,...(_=(P=x.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var W,A,V;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: TagProps) => <Box p="m" data-testid="wrapper" width="fit-content">
      <Tag {...args} avatar={<Avatar size="s" text="OC" />} />
    </Box>,
  args: {
    text: "Olivier Carnac"
  },
  argTypes: {
    ...argTypes
  },
  parameters: disableSnap
}`,...(V=(A=p.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var N,H,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: TagProps) => <Box p="m" data-testid="wrapper" width="fit-content">
      <Tag {...args} icon={<Icon />} />
    </Box>,
  args: {
    text: "ABCD-1234-EFGH-5678"
  },
  argTypes: {
    ...argTypes
  },
  parameters: disableSnap
}`,...(I=(H=l.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var O,F,D;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args: TagProps) => <Box p="m" data-testid="wrapper" width="fit-content">
      <Tag {...args} badge={<Badge text="14" type="number" />} />
    </Box>,
  args: {
    text: "App"
  },
  argTypes: {
    ...argTypes
  },
  parameters: disableSnap
}`,...(D=(F=T.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var E,M,Z;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Box gap="s" direction="col">
      <Box gap="s" direction="col">
        <h2 className={getTypographyClassName({
        font: "heading_m",
        color: "default"
      })}>Default</h2>
        <TagGroups>
          <Tag text="Tag" />
          <Tag text="Tag error" color="error" />
          <Tag text="Tag info" color="info" />
          <Tag text="Tag success" color="success" />
          <Tag text="Tag warning" color="warning" />
        </TagGroups>
        <TagGroups>
          <Tag text="onRemove" onRemove={() => {}} />
          <Tag text="onRemove error" color="error" onRemove={() => {}} />
          <Tag text="onRemove info" color="info" onRemove={() => {}} />
          <Tag text="onRemove success" color="success" onRemove={() => {}} />
          <Tag text="onRemove warning" color="warning" onRemove={() => {}} />
        </TagGroups>
        <TagGroups>
          <TagLink href="#" text="TagLink" />
          <TagLink href="#" text="TagLink" data-testid="hover" />
          <TagLink href="#" text="TagLink" data-testid="active" />
          <TagLink href="#" text="TagLink" data-testid="focus" />
          <TagLink href="#" text="TagLink" aria-disabled="true" />
        </TagGroups>
        <TagGroups>
          <TagButton onClick={() => {}} text="TagButton" />
          <TagButton onClick={() => {}} text="TagButton" data-testid="hover" />
          <TagButton onClick={() => {}} text="TagButton" data-testid="active" />
          <TagButton onClick={() => {}} text="TagButton" data-testid="focus" />
          <TagButton onClick={() => {}} text="TagButton" aria-disabled="true" />
        </TagGroups>
        <Tag text="With icon" icon={<Icon />} />
        <Box gap="s">
          <Tag text="With badge" badge={<Badge text="14" type="number" />} />
          <Tag text="Apps" badge={{
          text: "14",
          type: "number",
          color: "info"
        }} />
          <Tag text="Boolean" color="success" badge={{
          text: "true",
          type: "number",
          color: "success"
        }} />
        </Box>
      </Box>
      <Box gap="s" direction="col">
        <h2 className={getTypographyClassName({
        font: "heading_m",
        color: "default"
      })}>Small</h2>
        <TagGroups>
          <Tag size="s" text="Tag" />
          <Tag size="s" text="Tag error" color="error" />
          <Tag size="s" text="Tag info" color="info" />
          <Tag size="s" text="Tag success" color="success" />
          <Tag size="s" text="Tag warning" color="warning" />
        </TagGroups>
        <TagGroups>
          <Tag size="s" text="onRemove" onRemove={() => {}} />
          <Tag size="s" text="onRemove error" color="error" onRemove={() => {}} />
          <Tag size="s" text="onRemove info" color="info" onRemove={() => {}} />
          <Tag size="s" text="onRemove success" color="success" onRemove={() => {}} />
          <Tag size="s" text="onRemove warning" color="warning" onRemove={() => {}} />
        </TagGroups>
        <TagGroups>
          <TagLink size="s" href="#" text="TagLink" />
          <TagLink size="s" href="#" text="TagLink" data-testid="hover" />
          <TagLink size="s" href="#" text="TagLink" data-testid="active" />
          <TagLink size="s" href="#" text="TagLink" data-testid="focus" />
          <TagLink size="s" href="#" text="TagLink" aria-disabled="true" />
        </TagGroups>
        <TagGroups>
          <TagButton size="s" onClick={() => {}} text="TagButton" />
          <TagButton size="s" onClick={() => {}} text="TagButton" data-testid="hover" />
          <TagButton size="s" onClick={() => {}} text="TagButton" data-testid="active" />
          <TagButton size="s" onClick={() => {}} text="TagButton" data-testid="focus" />
          <TagButton size="s" onClick={() => {}} text="TagButton" aria-disabled="true" />
        </TagGroups>
        <Tag size="s" text="With icon" icon={<Icon />} />
        <Box gap="s">
          <Tag size="s" text="With badge" badge={<Badge text="14" type="number" />} />
          <Tag size="s" text="Apps" badge={{
          text: "14",
          type: "number",
          color: "info"
        }} />
          <Tag size="s" text="Boolean" color="success" badge={{
          text: "true",
          type: "number",
          color: "success"
        }} />
        </Box>
      </Box>
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
}`,...(Z=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};const U=["Playground","GroupPlayground","Removable","WithAvatar","WithIcon","WithBadge","VisualTests"],oe=Object.freeze(Object.defineProperty({__proto__:null,GroupPlayground:d,Playground:c,Removable:x,VisualTests:u,WithAvatar:p,WithBadge:T,WithIcon:l,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{c as P,oe as S};
