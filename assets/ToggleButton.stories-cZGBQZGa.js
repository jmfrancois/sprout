import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{f as R}from"./index-CjQa9iMn.js";import{r as z}from"./index-BwDkhjyp.js";import{B as i,E as K}from"./EditIcon-CNZtiHay.js";import{B as L}from"./BookIcon-C-8w8NmY.js";import{G as M}from"./GotoIcon-Cn-Tiv7D.js";import{S as J}from"./StarIcon-8cglR9Ys.js";import{g as Q}from"./figma-DdOIv0jn.js";import{s as b}from"./Button.module-Bksq7zkq.js";import{c as k,B as T}from"./Box-Bo_17ADl.js";import{u as U}from"./useControl-BksuLBKc.js";import{u as W}from"./useId-Nx1NlIzw.js";import{T as X}from"./Tooltip-Cu6rj0j6.js";import{B as v}from"./ButtonGroup-BhvgftW1.js";const E=({onChange:t,toggled:l,defaultToggled:a})=>U({onChange:t,toggled:l,defaultToggled:a},{onChangeKey:"onChange",valueKey:"toggled",defaultValueKey:"defaultToggled"}),o=({size:t,variant:l,label:a,toggled:u,icon:p,defaultToggled:B,onChange:h,...x})=>{const m=E({onChange:h,toggled:u,defaultToggled:B});return e.jsxs("button",{...x,type:"button",className:k(b.button,b.toggle),"data-variant":l||"default","data-size":t||"default","data-toggled":m.value?"true":"false",onClick:()=>m.onChange(!m.value),children:[p,a&&e.jsx("span",{"data-label":!0,children:a})]})};o.__docgenInfo={description:"",methods:[],displayName:"ToggleButton",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"literal",value:'"quiet"'},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "default"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"default"'}]},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},toggled:{required:!1,tsType:{name:"boolean"},description:""},defaultToggled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(toggled: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"toggled"}],return:{name:"void"}}},description:""}}};function d({label:t,icon:l,placement:a,variant:u,size:p,onChange:B,toggled:h,defaultToggled:x,id:m,...O}){const V=W(m),f=E({onChange:B,toggled:h,defaultToggled:x});return e.jsx(X,{id:V,title:t,placement:a,children:e.jsx("button",{type:"button","aria-label":t,className:k(b.button,b.toggle),"data-variant":u||"default","data-size":p||"default","data-toggled":f.value||!1,"aria-pressed":f.value||!1,onClick:()=>f.onChange(!f.value),...O,children:l})})}d.__docgenInfo={description:"",methods:[],displayName:"ToggleIconButton",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"literal",value:'"quiet"'},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "default"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"default"'}]},description:""},icon:{required:!0,tsType:{name:"ReactNode"},description:""},toggled:{required:!1,tsType:{name:"boolean"},description:""},defaultToggled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(toggled: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"toggled"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"union",raw:'TooltipProps["placement"]'},description:""}}};const Y={title:"Components/ToggleButton"},n=t=>e.jsx(T,{p:"s",children:e.jsx(o,{...t})});n.args={label:"Label"};n.parameters={...Q("toggleButton"),chromatic:{disableSnapshot:!0}};n.argTypes={label:{control:{type:"text"}},variant:{control:{type:"select"},options:[void 0,"default","quiet"]},size:{control:{type:"select"},options:[void 0,"default","small"]},defaultToggle:{control:{type:"boolean"}},toggled:{control:{type:"boolean"}}};const g=()=>{const[t,l]=z.useState("Two");return e.jsx(v,{children:["One","Two","Three"].map(a=>e.jsx(o,{label:a,toggled:t===a,onChange:()=>l(a)},a))})};g.parameters={chromatic:{disableSnapshot:!0}};const r=({onChange:t})=>{const[l,a]=z.useState(!1),u=p=>{t&&t(p),a(p)};return e.jsx(o,{label:"Controlled",toggled:l,onChange:u})};r.args={onChange:R()};r.parameters={chromatic:{disableSnapshot:!0}};const s=t=>e.jsx(T,{p:"s",children:e.jsx(d,{icon:e.jsx(i,{}),...t})});s.args={label:"Label"};s.parameters={chromatic:{disableSnapshot:!0}};s.argTypes=n.argTypes;const c=()=>e.jsxs(T,{gap:"m",direction:"col",width:"400px",children:[e.jsx("h2",{children:"States"}),e.jsxs(T,{gap:"s",direction:"row",children:[e.jsx(o,{label:"Default"}),e.jsx(o,{label:"Hover","data-testid":"hover"}),e.jsx(o,{label:"Active","data-testid":"active"}),e.jsx(o,{label:"Focus","data-testid":"focused"}),e.jsx(o,{label:"Toggle",toggled:!0})]}),e.jsxs(T,{gap:"s",direction:"row",children:[e.jsx(o,{icon:e.jsx(i,{}),label:"Default"}),e.jsx(o,{icon:e.jsx(i,{}),label:"Hover","data-testid":"hover"}),e.jsx(o,{icon:e.jsx(i,{}),label:"Active","data-testid":"active"}),e.jsx(o,{icon:e.jsx(i,{}),label:"Focus","data-testid":"focused"}),e.jsx(o,{icon:e.jsx(i,{}),label:"Toggle",toggled:!0})]}),e.jsx("h2",{children:"Inside ButtonGroup"}),e.jsxs(v,{children:[e.jsx(o,{label:"Default"}),e.jsx(o,{label:"Hover","data-testid":"hover"}),e.jsx(o,{label:"Active","data-testid":"active"}),e.jsx(o,{label:"Focus","data-testid":"focused"}),e.jsx(o,{label:"Toggle",toggled:!0})]}),e.jsx("h2",{children:"ToggleIconButton"}),e.jsxs(v,{children:[e.jsx(d,{label:"Default",icon:e.jsx(i,{})}),e.jsx(d,{label:"Hover",icon:e.jsx(L,{}),"data-testid":"hover"}),e.jsx(d,{label:"Active",icon:e.jsx(K,{}),"data-testid":"active"}),e.jsx(d,{label:"Focus",icon:e.jsx(M,{}),"data-testid":"focused"}),e.jsx(d,{label:"Toggle",icon:e.jsx(J,{}),toggled:!0})]})]});c.parameters={pseudo:{hover:"[data-testid='hover']",active:"[data-testid='active']",focusVisible:'[data-testid="focused"]'}};n.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"literal",value:'"quiet"'},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "default"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"default"'}]},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},toggled:{required:!1,tsType:{name:"boolean"},description:""},defaultToggled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(toggled: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"toggled"}],return:{name:"void"}}},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"ToggleButtonGroup"};r.__docgenInfo={description:"",methods:[],displayName:"Controlled"};s.__docgenInfo={description:"",methods:[],displayName:"ToggleIconButtonPlayground"};c.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var y,j,I;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`(props: ToggleButtonProps) => <Box p="s">
    <ToggleButton {...props} />
  </Box>`,...(I=(j=n.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var q,C,S;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [toggled, setToggled] = useState("Two");
  return <ButtonGroup>
      {["One", "Two", "Three"].map(label => <ToggleButton key={label} label={label} toggled={toggled === label} onChange={() => setToggled(label)} />)}
    </ButtonGroup>;
}`,...(S=(C=g.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var _,w,G;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`({
  onChange
}: Partial<ToggleButtonProps>) => {
  const [toggled, setToggled] = useState(false);
  const handleChange = (e: boolean) => {
    if (onChange) {
      onChange(e);
    }
    setToggled(e);
  };
  return <ToggleButton label="Controlled" toggled={toggled} onChange={handleChange} />;
}`,...(G=(w=r.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var P,N,F;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`(props: Omit<ToggleIconButtonProps, "icon">) => <Box p="s">
    <ToggleIconButton icon={<BinIcon />} {...props} />
  </Box>`,...(F=(N=s.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var A,D,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => <Box gap="m" direction="col" width="400px">
    <h2>States</h2>
    <Box gap="s" direction="row">
      <ToggleButton label="Default" />
      <ToggleButton label="Hover" data-testid="hover" />
      <ToggleButton label="Active" data-testid="active" />
      <ToggleButton label="Focus" data-testid="focused" />
      <ToggleButton label="Toggle" toggled />
    </Box>
    <Box gap="s" direction="row">
      <ToggleButton icon={<BinIcon />} label="Default" />
      <ToggleButton icon={<BinIcon />} label="Hover" data-testid="hover" />
      <ToggleButton icon={<BinIcon />} label="Active" data-testid="active" />
      <ToggleButton icon={<BinIcon />} label="Focus" data-testid="focused" />
      <ToggleButton icon={<BinIcon />} label="Toggle" toggled />
    </Box>
    <h2>Inside ButtonGroup</h2>
    <ButtonGroup>
      <ToggleButton label="Default" />
      <ToggleButton label="Hover" data-testid="hover" />
      <ToggleButton label="Active" data-testid="active" />
      <ToggleButton label="Focus" data-testid="focused" />
      <ToggleButton label="Toggle" toggled />
    </ButtonGroup>
    <h2>ToggleIconButton</h2>
    <ButtonGroup>
      <ToggleIconButton label="Default" icon={<BinIcon />} />
      <ToggleIconButton label="Hover" icon={<BookIcon />} data-testid="hover" />
      <ToggleIconButton label="Active" icon={<EditIcon />} data-testid="active" />
      <ToggleIconButton label="Focus" icon={<GotoIcon />} data-testid="focused" />
      <ToggleIconButton label="Toggle" icon={<StarIcon />} toggled />
    </ButtonGroup>
  </Box>`,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const Z=["Playground","ToggleButtonGroup","Controlled","ToggleIconButtonPlayground","VisualTest"],pe=Object.freeze(Object.defineProperty({__proto__:null,Controlled:r,Playground:n,ToggleButtonGroup:g,ToggleIconButtonPlayground:s,VisualTest:c,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{n as P,pe as S};
