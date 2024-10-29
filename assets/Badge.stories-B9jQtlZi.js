import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{g as d}from"./figma-DdOIv0jn.js";import{B as t}from"./Badge-CG3Cu-RO.js";import{B as p}from"./Box-Bo_17ADl.js";import{A as i}from"./Avatar-D105TCB5.js";const q={title:"Components/Badge",parameters:d("badge")},c={chromatic:{disableSnapshot:!0}},C={type:{control:{type:"select"},options:["dot","number"]},text:{control:{type:"text"}},color:{control:{type:"select"},options:[void 0,"info","success","warning","danger"]}},n=({...s})=>e.jsx(p,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{type:"dot",...s})});n.parameters={...d("badge","dot"),...c};n.argTypes={color:{control:{type:"select"},options:[void 0,"info","success","warning","danger"]}};const r=({...s})=>e.jsx(p,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{type:"number",...s})});r.parameters={...d("badge","number"),...c};r.args={text:"1"};r.argTypes={color:{control:{type:"select"},options:[void 0,"info","success","warning","danger"]},text:{control:{type:"text"}}};const a=({...s})=>e.jsx(p,{"data-testid":"wrapper",width:"fit-content",p:"s",children:e.jsx(t,{...s})});a.args={text:"1"};a.argTypes=C;a.parameters=c;const l=()=>e.jsxs(p,{"data-testid":"wrapper",width:"fit-content",p:"s",direction:"col",gap:"m",children:[e.jsx("h2",{children:"Dot"}),e.jsx(t,{}),e.jsx(t,{color:"info"}),e.jsx(t,{color:"danger"}),e.jsx(t,{color:"warning"}),e.jsx(t,{color:"success"}),e.jsx("h2",{children:"Number"}),e.jsx(t,{text:"1",type:"number"}),e.jsx(t,{text:"1",type:"number",color:"info"}),e.jsx(t,{text:"1",type:"number",color:"danger"}),e.jsx(t,{text:"1",type:"number",color:"warning"}),e.jsx(t,{text:"1",type:"number",color:"success"}),e.jsx("h2",{children:"With Avatar"}),e.jsx(i,{size:"xs",text:"OC",badge:e.jsx(t,{color:"info"})}),e.jsx(i,{size:"s",text:"OC",badge:e.jsx(t,{color:"info"})}),e.jsx(i,{text:"OC",badge:e.jsx(t,{color:"info"})}),e.jsx(i,{size:"l",text:"OC",badge:e.jsx(t,{color:"info"})}),e.jsx(i,{size:"xl",text:"OC",badge:e.jsx(t,{color:"info"})})]}),o=({size:s,text:A,type:O})=>e.jsx("div",{children:e.jsx(i,{size:s,text:"OC",badge:e.jsx(t,{text:A,type:O,color:"danger"})})});o.parameters={...d("badge","avatar"),...c};o.args={text:"1",type:"number"};o.argTypes={size:{control:{type:"select"},options:["xs","s","m","l","xl"]},text:{control:{type:"text"}},type:{control:{type:"select"},options:["dot","number"]}};n.__docgenInfo={description:"",methods:[],displayName:"Dot",props:{type:{required:!1,tsType:{name:"union",raw:'"dot" | "number"',elements:[{name:"literal",value:'"dot"'},{name:"literal",value:'"number"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"Number",props:{type:{required:!1,tsType:{name:"union",raw:'"dot" | "number"',elements:[{name:"literal",value:'"dot"'},{name:"literal",value:'"number"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{type:{required:!1,tsType:{name:"union",raw:'"dot" | "number"',elements:[{name:"literal",value:'"dot"'},{name:"literal",value:'"number"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:""},text:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};o.__docgenInfo={description:"",methods:[],displayName:"WithAvatar",props:{type:{required:!1,tsType:{name:"union",raw:'"dot" | "number"',elements:[{name:"literal",value:'"dot"'},{name:"literal",value:'"number"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},size:{required:!0,tsType:{name:'intersection["size"]',raw:'AvatarProps["size"]'},description:""}}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`({
  ...props
}: BadgeProps) => <Box p="m" data-testid="wrapper" width="fit-content">
    <Badge type="dot" {...props} />
  </Box>`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,y,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`({
  ...props
}: BadgeProps) => <Box p="m" data-testid="wrapper" width="fit-content">
    <Badge type="number" {...props} />
  </Box>`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,v,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`({
  ...props
}: BadgeProps) => <Box data-testid="wrapper" width="fit-content" p="s">
    <Badge {...props} />
  </Box>`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var h,j,B;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Box data-testid="wrapper" width="fit-content" p="s" direction="col" gap="m">
    <h2>Dot</h2>
    <Badge />
    <Badge color="info" />
    <Badge color="danger" />
    <Badge color="warning" />
    <Badge color="success" />

    <h2>Number</h2>
    <Badge text="1" type="number" />
    <Badge text="1" type="number" color="info" />
    <Badge text="1" type="number" color="danger" />
    <Badge text="1" type="number" color="warning" />
    <Badge text="1" type="number" color="success" />

    <h2>With Avatar</h2>
    <Avatar size="xs" text="OC" badge={<Badge color="info" />} />
    <Avatar size="s" text="OC" badge={<Badge color="info" />} />
    <Avatar text="OC" badge={<Badge color="info" />} />
    <Avatar size="l" text="OC" badge={<Badge color="info" />} />
    <Avatar size="xl" text="OC" badge={<Badge color="info" />} />
  </Box>`,...(B=(j=l.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var T,z,_;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`({
  size,
  text,
  type
}: BadgeProps & {
  size: AvatarProps["size"];
}) => <div>
    <Avatar size={size} text="OC" badge={<Badge text={text} type={type} color="danger" />} />
  </div>`,...(_=(z=o.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const N=["Dot","Number","Playground","VisualTest","WithAvatar"],V=Object.freeze(Object.defineProperty({__proto__:null,Dot:n,Number:r,Playground:a,VisualTest:l,WithAvatar:o,__namedExportsOrder:N,default:q},Symbol.toStringTag,{value:"Module"}));export{n as D,r as N,V as S};
