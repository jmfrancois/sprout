import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{f as u}from"./index-CjQa9iMn.js";import{T as r}from"./TextField-C62t-kjU.js";import{B as c}from"./Box-Bo_17ADl.js";const N={title:"Components/TextField",component:r,parameters:{},argTypes:{disabled:{control:{type:"boolean"}},designSize:{control:{type:"select"},options:["default","small"]},leftAffix:{table:{disable:!0}},rightAffix:{table:{disable:!0}},leftAdornment:{control:{type:"text"}},rightAdornment:{control:{type:"text"}}}},I=["Error message 1"],a=t=>e.jsxs(c,{direction:"col",gap:"m",justify:"stretch",alignContent:"stretch",children:[e.jsx(r,{id:"input1",label:"Default",helpText:"help me",placeholder:"Give me a value",...t}),e.jsx(r,{id:"input-hover",label:"Hover",helpText:"help me",placeholder:"Give me a value",...t,"data-testid":"hover"}),e.jsx(r,{id:"input-focus",label:"Focus",placeholder:"Focus",...t,"data-testid":"focus"}),e.jsx(r,{id:"input-disabled",label:"Disabled",placeholder:"Disabled Input",disabled:!0,...t}),e.jsx(r,{id:"input-readonly",label:"Readonly",placeholder:"Readonly Input",readOnly:!0,...t}),e.jsx(r,{id:"input-error-message",label:"Error",placeholder:"Input in error with message",errorMessages:I,...t}),e.jsx(r,{id:"input-error",label:"Error",placeholder:"Input in error",hasError:!0,...t})]});a.args={designSize:"default"};a.argTypes={designSize:{control:{type:"select"},options:["default","small"]},value:{table:{disable:!0}},leftIcon:{table:{disable:!0}},onChange:{table:{disable:!0}},disabled:{table:{disable:!0}},readOnly:{table:{disable:!0}},hasError:{table:{disable:!0}},onBlur:{table:{disable:!0}}};a.parameters={chromatic:{disableSnapshot:!0},pseudo:{hover:'[data-testid="hover"]',focus:'div:has(> div > [data-testid="focus"])'}};const n=t=>e.jsx(c,{p:"s",direction:"col",gap:"s",width:"fit-content","data-testid":"wrapper",children:e.jsx(r,{...t})});n.args={label:"Label",id:"input",placeholder:"Placeholder",defaultValue:"Value",helpText:"help me"};n.argTypes={...a.argTypes,helpText:{control:{type:"text"}},errorMessages:{table:{disable:!0}},hasError:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}};n.parameters={chromatic:{disableSnapshot:!0}};const s=({leftAdornment:t="Left",rightAdornment:p="Right",...o})=>e.jsxs(c,{direction:"col",gap:"m",justify:"stretch",alignContent:"stretch",children:[e.jsx(r,{id:"left-adornment",label:"Left adornment",...o,leftAdornment:t}),e.jsx(r,{id:"right-adornment",label:"Right adornment",...o,rightAdornment:p}),e.jsx(r,{id:"adornment",label:"Both adornment",...o,leftAdornment:t,rightAdornment:p})]});s.parameters={chromatic:{disableSnapshot:!0}};const i=({leftAffix:t,rightAffix:p,...o})=>e.jsxs(c,{direction:"col",gap:"m",justify:"stretch",alignContent:"stretch",children:[e.jsx(r,{id:"left-affix",label:"Left me",...o,leftAffix:t}),e.jsx(r,{id:"right-affix",label:"Right me",...o,rightAffix:p}),e.jsx(r,{id:"affix",label:"Affix",...o,leftAffix:t,rightAffix:p})]});i.args={leftAffix:{label:"Left",onClick:u()},rightAffix:{label:"Right",onClick:u()}};i.argTypes={...a.argTypes,leftAffix:{table:{disable:!0}},rightAffix:{table:{disable:!0}}};i.parameters={chromatic:{disableSnapshot:!0}};const l=t=>e.jsx(c,{direction:"col",gap:"m",justify:"stretch",alignContent:"stretch",width:"300px",children:e.jsx(r,{type:"search",...t})});l.args={};l.argTypes={};l.parameters={chromatic:{disableSnapshot:!0}};const d=()=>e.jsxs(c,{gap:"m",direction:"col",width:"400px",children:[e.jsx("h2",{children:"States"}),e.jsx(a,{}),e.jsx("h2",{children:"States with small size"}),e.jsx(a,{designSize:"small"}),e.jsx("h2",{children:"Adornment"}),e.jsx(s,{leftAdornment:"Left",rightAdornment:"Right"}),e.jsx("h2",{children:"Affix"}),e.jsx(i,{leftAffix:{label:"Left",onClick:u()},rightAffix:{label:"Right",onClick:u()}}),e.jsx("h2",{children:"Search"}),e.jsx(r,{type:"search",label:"Search"})]});d.parameters={controls:{disable:!0},pseudo:{hover:'div:has(> div > [data-testid="hover"])',focus:'div:has(> div > [data-testid="focus"])'}};a.__docgenInfo={description:"",methods:[],displayName:"Overview"};n.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{labelClear:{required:!1,tsType:{name:"string"},description:""},leftAffix:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  // items:
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}}]}},description:""},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:""},rightAffix:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  // items:
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}}]}},description:""},leftAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},designSize:{required:!1,tsType:{name:"union",raw:'"default" | "small"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'}]},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"Adornment",props:{leftAdornment:{defaultValue:{value:'"Left"',computed:!1},required:!1},rightAdornment:{defaultValue:{value:'"Right"',computed:!1},required:!1}}};i.__docgenInfo={description:"",methods:[],displayName:"Affix"};l.__docgenInfo={description:"",methods:[],displayName:"Search",props:{labelClear:{required:!1,tsType:{name:"string"},description:""},leftAffix:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  // items:
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}}]}},description:""},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:""},rightAffix:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  // items:
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}}]}},description:""},leftAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},designSize:{required:!1,tsType:{name:"union",raw:'"default" | "small"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'}]},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var f,m,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`(props: Partial<TextFieldProps>) => <Box direction="col" gap="m" justify="stretch" alignContent="stretch">
    <TextField id="input1" label="Default" helpText="help me" placeholder="Give me a value" {...props} />
    <TextField id="input-hover" label="Hover" helpText="help me" placeholder="Give me a value" {...props} data-testid="hover" />
    <TextField id="input-focus" label="Focus" placeholder="Focus" {...props} data-testid="focus" />

    <TextField id="input-disabled" label="Disabled" placeholder="Disabled Input" disabled {...props} />
    <TextField id="input-readonly" label="Readonly" placeholder="Readonly Input" readOnly {...props} />
    <TextField id="input-error-message" label="Error" placeholder="Input in error with message" errorMessages={errorMessages} {...props} />
    <TextField id="input-error" label="Error" placeholder="Input in error" hasError {...props} />
  </Box>`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,b,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(props: TextFieldProps) => <Box p="s" direction="col" gap="s" width="fit-content" data-testid="wrapper">
    <TextField {...props} />
  </Box>`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,v,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`({
  leftAdornment = "Left",
  rightAdornment = "Right",
  ...props
}: Partial<InputProps>) => <Box direction="col" gap="m" justify="stretch" alignContent="stretch">
    <TextField id="left-adornment" label="Left adornment" {...props} leftAdornment={leftAdornment} />
    <TextField id="right-adornment" label="Right adornment" {...props} rightAdornment={rightAdornment} />
    <TextField id="adornment" label="Both adornment" {...props} leftAdornment={leftAdornment} rightAdornment={rightAdornment} />
  </Box>`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var A,j,R;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`({
  leftAffix,
  rightAffix,
  ...props
}: Partial<InputProps>) => <Box direction="col" gap="m" justify="stretch" alignContent="stretch">
    <TextField id="left-affix" label="Left me" {...props} leftAffix={leftAffix} />
    <TextField id="right-affix" label="Right me" {...props} rightAffix={rightAffix} />
    <TextField id="affix" label="Affix" {...props} leftAffix={leftAffix} rightAffix={rightAffix} />
  </Box>`,...(R=(j=i.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var q,S,w;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`(props: TextFieldProps) => <Box direction="col" gap="m" justify="stretch" alignContent="stretch" width="300px">
    <TextField type="search" {...props} />
  </Box>`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,C,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Box gap="m" direction="col" width="400px">
    <h2>States</h2>
    <Overview />
    <h2>States with small size</h2>
    <Overview designSize="small" />
    <h2>Adornment</h2>
    <Adornment leftAdornment="Left" rightAdornment="Right" />
    <h2>Affix</h2>
    <Affix leftAffix={{
    label: "Left",
    onClick: fn()
  }} rightAffix={{
    label: "Right",
    onClick: fn()
  }} />
    <h2>Search</h2>
    <TextField type="search" label="Search" />
  </Box>`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const _=["Overview","Playground","Adornment","Affix","Search","VisualTest"],L=Object.freeze(Object.defineProperty({__proto__:null,Adornment:s,Affix:i,Overview:a,Playground:n,Search:l,VisualTest:d,__namedExportsOrder:_,default:N},Symbol.toStringTag,{value:"Module"}));export{n as P,L as S,l as a};
