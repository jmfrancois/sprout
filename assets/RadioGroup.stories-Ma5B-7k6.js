import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{g as w}from"./figma-DdOIv0jn.js";import{R as d,a as i}from"./RadioGroup-vPE3DCKx.js";import{B as r}from"./Box-Bo_17ADl.js";const j={title:"Components/RadioGroup",component:d,parameters:{}},B={name:"radio-group",label:"Radio Group",helpText:"Select one of the options",errorMessages:["This is an error message"],options:[{label:"Cat",value:"cat"},{label:"Dog",value:"dog"},{label:"Horse",value:"horse"},{label:"Dodo",value:"dodo",disabled:!0}]},a=({...n})=>e.jsx(r,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(d,{...n})});a.args=B;a.argTypes={isError:{control:"boolean"}};a.parameters={chromatic:{disableSnapshot:!0}};const o=()=>e.jsx(r,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(d,{label:"Radio Group Customized",helpText:"Here we use the composition to create custom things",children:e.jsxs(r,{gap:"m",children:[e.jsx(i,{label:"Cat",value:"cat",name:"test"}),e.jsx(i,{label:"Dog",value:"dog",name:"test"}),e.jsx(i,{label:"Horse",value:"horse",name:"test"}),e.jsx(i,{label:"Dodo",value:"dodo",disabled:!0,name:"test"})]})})});o.parameters={chromatic:{disableSnapshot:!0}};const t=({width:n,...y})=>e.jsx(r,{p:"m","data-testid":"wrapper",width:n,children:e.jsx(i,{...y})});t.args={label:"Radio",width:"fit-content"};t.argTypes={disabled:{control:"boolean"},readOnly:{control:"boolean"},checked:{control:"boolean"},options:{table:{disable:!0}},width:{control:"text"}};t.parameters={...w("radioGroup","radio"),chromatic:{disableSnapshot:!0}};const s=()=>e.jsxs(r,{direction:"row",children:[e.jsxs(r,{direction:"col",children:[e.jsx(t,{label:"Default"}),e.jsx(t,{label:"Hover","data-testid":"hover"}),e.jsx(t,{label:"Focus","data-testid":"focus"}),e.jsx(t,{label:"Disabled",disabled:!0})]}),e.jsxs(r,{direction:"col",children:[e.jsx(t,{label:"Checked",checked:!0}),e.jsx(t,{label:"Hover",checked:!0,"data-testid":"hover"}),e.jsx(t,{label:"Focus",checked:!0,"data-testid":"focus"}),e.jsx(t,{label:"Disabled",checked:!0,disabled:!0})]})]});s.parameters={pseudo:{hover:"[data-testid=hover]",focusVisible:"[data-testid=focus]"}};a.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{options:{required:!1,tsType:{name:"union",raw:"RadioProps[] | ReactNode",elements:[{name:"Array",elements:[{name:"intersection",raw:`Omit<HTMLInputProps, "type" | "prefix"> &
DataAttributes & {
  label: string;
  id?: string;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"input">, "className" | "style"> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithoutRef<"input">'},{name:"union",raw:'"className" | "style"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'}]}],raw:'Omit<ComponentPropsWithoutRef<"input">, "className" | "style">'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"type" | "prefix"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"prefix"'}]}],raw:'Omit<HTMLInputProps, "type" | "prefix">'},{name:"DataAttributes"},{name:"signature",type:"object",raw:`{
  label: string;
  id?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"id",value:{name:"string",required:!1}}]}}]}],raw:"RadioProps[]"},{name:"ReactNode"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"Composition"};t.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"VisualTests"};var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
  ...args
}: RadioGroupProps) => <Box p="m" data-testid="wrapper" width="fit-content">
    <RadioGroup {...args} />
  </Box>`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Box p="m" data-testid="wrapper" width="fit-content">
    <RadioGroup label="Radio Group Customized" helpText="Here we use the composition to create custom things">
      <Box gap="m">
        <Radio label="Cat" value="cat" name="test" />
        <Radio label="Dog" value="dog" name="test" />
        <Radio label="Horse" value="horse" name="test" />
        <Radio label="Dodo" value="dodo" disabled name="test" />
      </Box>
    </RadioGroup>
  </Box>`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`({
  width,
  ...args
}: RadioProps) => <Box p="m" data-testid="wrapper" width={width}>
    <Radio {...args} />
  </Box>`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var R,f,v;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`() => <Box direction="row">
    <Box direction="col">
      <RadioButton label="Default" />
      <RadioButton label="Hover" data-testid="hover" />
      <RadioButton label="Focus" data-testid="focus" />
      <RadioButton label="Disabled" disabled />
    </Box>
    <Box direction="col">
      <RadioButton label="Checked" checked />
      <RadioButton label="Hover" checked data-testid="hover" />
      <RadioButton label="Focus" checked data-testid="focus" />
      <RadioButton label="Disabled" checked disabled />
    </Box>
  </Box>`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const T=["Playground","Composition","RadioButton","VisualTests"],k=Object.freeze(Object.defineProperty({__proto__:null,Composition:o,Playground:a,RadioButton:t,VisualTests:s,__namedExportsOrder:T,default:j},Symbol.toStringTag,{value:"Module"}));export{a as P,k as S};
