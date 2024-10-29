import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{g as d}from"./figma-DdOIv0jn.js";import{P as a}from"./ProgressCircular-DToFE0Lx.js";import{B as r}from"./Box-Bo_17ADl.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const y={title:"Components/ProgressCircular",parameters:d("progress","circular")},g={size:{control:{type:"select"},options:[void 0,"s","m","l"]},percent:{control:{type:"number",min:0,max:100}}},s=l=>e.jsx(r,{"data-testid":"wrapper",width:"fit-content",p:"s",children:e.jsx(a,{...l})});s.args={size:"m",percent:void 0};s.argTypes={...g};s.parameters={chromatic:{disableSnapshot:!0}};const o=()=>e.jsxs(r,{gap:"m",direction:"col",children:[e.jsxs(r,{direction:"row",gap:"m",alignItems:"center",children:[e.jsx("span",{children:'size="s"'}),e.jsx(a,{size:"s"})]}),e.jsxs(r,{direction:"row",gap:"m",alignItems:"center",children:[e.jsx("span",{children:'size="m"'}),e.jsx(a,{size:"m"})]}),e.jsxs(r,{direction:"row",gap:"m",alignItems:"center",children:[e.jsx("span",{children:'size="l"'}),e.jsx(a,{size:"l"})]})]});s.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:""},percent:{required:!1,tsType:{name:"number"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"VisualTests"};var i,n,t;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`(props: ProgressCircularProps) => <Box data-testid="wrapper" width="fit-content" p="s">
    <ProgressCircular {...props} />
  </Box>`,...(t=(n=s.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Box gap="m" direction="col">
    <Box direction="row" gap="m" alignItems="center">
      <span>size="s"</span>
      <ProgressCircular size="s" />
    </Box>
    <Box direction="row" gap="m" alignItems="center">
      <span>size="m"</span>
      <ProgressCircular size="m" />
    </Box>
    <Box direction="row" gap="m" alignItems="center">
      <span>size="l"</span>
      <ProgressCircular size="l" />
    </Box>
  </Box>`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const B=["Playground","VisualTests"];export{s as Playground,o as VisualTests,B as __namedExportsOrder,y as default};
