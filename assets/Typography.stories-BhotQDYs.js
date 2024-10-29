import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{a as c,B as t}from"./Box-Bo_17ADl.js";const f={title:"Utils/Typography",args:{text:"Hello world",font:"body_m",color:"default"},argTypes:{text:{control:{type:"text"}},color:{control:{type:"select"},options:["weak","disabled","default"]},font:{control:{type:"select"},options:["heading_xs","heading_s","heading_m","heading_l","heading_xl","heading_xxl","body_xs","body_s","body_m","body_l","body_xl","body_xxl","label_xs","label_xs_emphasized","label_s","label_s_emphasized","label_m","label_m_emphasized","label_l","label_l_emphasized","script_m","script_m_emphasized"]}}},o=({text:_,...p})=>{const i=c(p);return e.jsx(t,{"data-testid":"wrapper",width:"fit-content",p:"s",className:i,children:_})};o.parameters={chromatic:{disableSnapshot:!0}};const l=()=>e.jsxs(t,{gap:"m",direction:"row",children:[e.jsxs(t,{gap:"m",direction:"col",border:"default",children:[e.jsx(o,{text:"heading_xs",font:"heading_xs",color:"default"}),e.jsx(o,{text:"heading_s",font:"heading_s",color:"default"}),e.jsx(o,{text:"heading_m",font:"heading_m",color:"default"}),e.jsx(o,{text:"heading_l",font:"heading_l",color:"default"}),e.jsx(o,{text:"heading_xl",font:"heading_xl",color:"default"}),e.jsx(o,{text:"heading_xxl",font:"heading_xxl",color:"default"})]}),e.jsxs(t,{gap:"m",direction:"col",border:"default",children:[e.jsx(o,{text:"body_xs",font:"body_xs",color:"default"}),e.jsx(o,{text:"body_s",font:"body_s",color:"default"}),e.jsx(o,{text:"body_m",font:"body_m",color:"default"}),e.jsx(o,{text:"body_l",font:"body_l",color:"default"}),e.jsx(o,{text:"body_xl",font:"body_xl",color:"default"}),e.jsx(o,{text:"body_xxl",font:"body_xxl",color:"default"})]}),e.jsxs(t,{gap:"m",direction:"col",border:"default",children:[e.jsx(o,{text:"label_xs",font:"label_xs",color:"default"}),e.jsx(o,{text:"label_xs_emphasized",font:"label_xs_emphasized",color:"default"}),e.jsx(o,{text:"label_s",font:"label_s",color:"default"}),e.jsx(o,{text:"label_s_emphasized",font:"label_s_emphasized",color:"default"}),e.jsx(o,{text:"label_m",font:"label_m",color:"default"}),e.jsx(o,{text:"label_m_emphasized",font:"label_m_emphasized",color:"default"}),e.jsx(o,{text:"label_l",font:"label_l",color:"default"}),e.jsx(o,{text:"label_l_emphasized",font:"label_l_emphasized",color:"default"})]}),e.jsxs(t,{gap:"m",direction:"col",border:"default",children:[e.jsx(o,{text:"script_m",font:"script_m",color:"default"}),e.jsx(o,{text:"script_m_emphasized",font:"script_m_emphasized",color:"default"})]}),e.jsxs(t,{gap:"m",direction:"col",border:"default",children:[e.jsx(o,{text:"undefined",font:"body_s"}),e.jsx(o,{text:"weak",font:"body_s",color:"weak"}),e.jsx(o,{text:"default default",font:"body_s",color:"default"}),e.jsx(o,{text:"disabled",font:"body_s",color:"disabled"})]})]});o.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{text:{required:!0,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"VisualTests"};var a,d,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`({
  text,
  ...rest
}: TypographyProps & {
  text: string;
}) => {
  const className = getTypographyClassName(rest);
  return <Box data-testid="wrapper" width="fit-content" p="s" className={className}>
      {text}
    </Box>;
}`,...(s=(d=o.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var r,n,x;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`() => <Box gap="m" direction="row">
    <Box gap="m" direction="col" border="default">
      <Typography text="heading_xs" font="heading_xs" color="default" />
      <Typography text="heading_s" font="heading_s" color="default" />
      <Typography text="heading_m" font="heading_m" color="default" />
      <Typography text="heading_l" font="heading_l" color="default" />
      <Typography text="heading_xl" font="heading_xl" color="default" />
      <Typography text="heading_xxl" font="heading_xxl" color="default" />
    </Box>
    <Box gap="m" direction="col" border="default">
      <Typography text="body_xs" font="body_xs" color="default" />
      <Typography text="body_s" font="body_s" color="default" />
      <Typography text="body_m" font="body_m" color="default" />
      <Typography text="body_l" font="body_l" color="default" />
      <Typography text="body_xl" font="body_xl" color="default" />
      <Typography text="body_xxl" font="body_xxl" color="default" />
    </Box>
    <Box gap="m" direction="col" border="default">
      <Typography text="label_xs" font="label_xs" color="default" />
      <Typography text="label_xs_emphasized" font="label_xs_emphasized" color="default" />
      <Typography text="label_s" font="label_s" color="default" />
      <Typography text="label_s_emphasized" font="label_s_emphasized" color="default" />
      <Typography text="label_m" font="label_m" color="default" />
      <Typography text="label_m_emphasized" font="label_m_emphasized" color="default" />
      <Typography text="label_l" font="label_l" color="default" />
      <Typography text="label_l_emphasized" font="label_l_emphasized" color="default" />
    </Box>
    <Box gap="m" direction="col" border="default">
      <Typography text="script_m" font="script_m" color="default" />
      <Typography text="script_m_emphasized" font="script_m_emphasized" color="default" />
    </Box>
    <Box gap="m" direction="col" border="default">
      <Typography text="undefined" font="body_s" />
      <Typography text="weak" font="body_s" color="weak" />
      <Typography text="default default" font="body_s" color="default" />
      <Typography text="disabled" font="body_s" color="disabled" />
    </Box>
  </Box>`,...(x=(n=l.parameters)==null?void 0:n.docs)==null?void 0:x.source}}};const y=["Typography","VisualTests"],m=Object.freeze(Object.defineProperty({__proto__:null,Typography:o,VisualTests:l,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{m as T};
