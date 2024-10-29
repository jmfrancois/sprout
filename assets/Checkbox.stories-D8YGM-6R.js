import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{f as S}from"./index-CjQa9iMn.js";import{r as O}from"./index-BwDkhjyp.js";import{g as E}from"./figma-DdOIv0jn.js";import{C as t}from"./Checkbox-CgutXkj_.js";import{u as G,F as L}from"./useFieldAriaProps-DGTkAVsv.js";import{B as n,a as x}from"./Box-Bo_17ADl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./HelperText-CyyCsV2o.js";import"./useId-Nx1NlIzw.js";import"./useControl-BksuLBKc.js";const u=({name:a,options:r,children:d,...i})=>{const{fieldProps:p,ariaProps:o}=G({label:i.label,helpText:i.helpText});return e.jsx(L,{...p,...i,children:e.jsxs(n,{gap:"density-l",direction:"col",...o,role:"group",children:[(r||[]).map(b=>e.jsx(t,{...b},b.label||b.name)),d]})})};u.displayName="CheckboxGroup";u.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`CheckboxNativeProps & {
  indeterminate?: boolean;
  label?: string;
  helpText?: string;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"input">, "className" | "style"> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithoutRef<"input">'},{name:"union",raw:'"className" | "style"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'}]}],raw:'Omit<ComponentPropsWithoutRef<"input">, "className" | "style">'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"value" | "type" | "prefix" | "ref"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"type"'},{name:"literal",value:'"prefix"'},{name:"literal",value:'"ref"'}]}],raw:'Omit<HTMLInputProps, "value" | "type" | "prefix" | "ref">'},{name:"signature",type:"object",raw:`{
  indeterminate?: boolean;
  label?: string;
  helpText?: string;
}`,signature:{properties:[{key:"indeterminate",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"helpText",value:{name:"string",required:!1}}]}}]},{name:"literal",value:'"ref"'}],raw:'Omit<CheckboxProps, "ref">'}],raw:'Omit<CheckboxProps, "ref">[]'},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Components/Checkbox",component:t,parameters:{}},c=({width:a,...r})=>e.jsx(n,{p:"s","data-testid":"wrapper",width:a||"fit-content",children:e.jsx(t,{...r})});c.args={name:"checkbox",label:"Checkbox"};c.argTypes={id:{table:{disable:!0}},name:{table:{disable:!0}},label:{control:"text"},helpText:{control:"text"},checked:{control:"select",options:[void 0,!0,!1]},indeterminate:{control:"select",options:[void 0,!0,!1]},disabled:{control:"select",options:[void 0,!0,!1]},width:{control:"text"}};c.parameters={chromatic:{disableSnapshot:!0}};const l=({onChange:a,...r})=>{const[d,i]=O.useState(!1),p=o=>{i(o.target.checked),a&&a(o)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{p:"s","data-testid":"wrapper",width:200,children:e.jsx(t,{...r,checked:d,onChange:p})}),e.jsxs("p",{children:["Checked: ",d?"true":"false"]})]})};l.args={name:"checkbox",label:"Checkbox",onChange:S(),disabled:!1};l.argTypes={checked:{table:{disable:!0}},indeterminate:{table:{disable:!0}}};l.parameters={chromatic:{disableSnapshot:!0}};const s=a=>e.jsx(n,{direction:"col",p:"s",gap:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(u,{...a,options:[{name:"q1",label:"Option 1"},{name:"q2",label:"Option 2"},{name:"q3",label:"Option 3"}]})});s.args={helpText:"Help text",label:"Checkbox Group"};s.argTypes={options:{table:{disable:!0}},helpText:{control:"text"},label:{control:"text"},isError:{control:"boolean"}};s.parameters={...E("checkbox","group"),chromatic:{disableSnapshot:!0}};const h=()=>{const[a,r]=O.useState([!0,!1]),d=o=>{r([o.target.checked,o.target.checked])},i=o=>{r([o.target.checked,a[1]])},p=o=>{r([a[0],o.target.checked])};return e.jsxs(n,{direction:"col",gap:"m",children:[e.jsx(t,{label:"Parent",checked:a[0]&&a[1],indeterminate:a[0]!==a[1],onChange:d}),e.jsxs(n,{direction:"col",gap:"m",pl:"m",children:[e.jsx(t,{label:"Child 1",checked:a[0],onChange:i}),e.jsx(t,{label:"Child 2",checked:a[1],onChange:p})]})]})};h.parameters={chromatic:{disableSnapshot:!0}};const m=()=>e.jsxs(n,{direction:"col",children:[e.jsx("h2",{className:x({font:"heading_m",color:"default"}),children:"States"}),e.jsxs(n,{direction:"row",gap:"m",justify:"stretch",children:[e.jsxs(n,{direction:"col",gap:"m",justify:"stretch",children:[e.jsx(t,{name:"checkbox1",label:"Uncheck default"}),e.jsx(t,{name:"checkbox1",label:"Uncheck hover","data-testid":"hover"}),e.jsx(t,{name:"checkbox1",label:"Uncheck focus","data-testid":"focus"}),e.jsx(t,{name:"checkbox4",label:"Uncheck disabled",disabled:!0})]}),e.jsxs(n,{direction:"col",gap:"m",justify:"stretch",children:[e.jsx(t,{name:"checkbox2",label:"Indeterminate default",indeterminate:!0}),e.jsx(t,{name:"checkbox2",label:"Indeterminate hover",indeterminate:!0,"data-testid":"hover"}),e.jsx(t,{name:"checkbox3",label:"Indeterminate focus",indeterminate:!0,"data-testid":"focus"}),e.jsx(t,{name:"checkbox5",label:"Indeterminate disabled",indeterminate:!0,disabled:!0})]}),e.jsxs(n,{direction:"col",gap:"m",justify:"stretch",children:[e.jsx(t,{name:"checkbox3",label:"Checked default",checked:!0}),e.jsx(t,{name:"checkbox3",label:"Checked hover",checked:!0,"data-testid":"hover"}),e.jsx(t,{name:"checkbox3",label:"Checked focus",checked:!0,"data-testid":"focus"}),e.jsx(t,{name:"checkbox6",label:"Checked disabled",checked:!0,disabled:!0})]})]}),e.jsx("h2",{className:x({font:"heading_m",color:"default"}),children:"Field"}),e.jsx(s,{label:"Checkbox group",helpText:"help me"}),e.jsx("h2",{className:x({font:"heading_m",color:"default"}),children:"Label overflow"}),e.jsx(n,{width:"200px",children:e.jsx(t,{label:"Long label that wraps over to a new row",name:"overflow"})}),e.jsx("h2",{className:x({font:"heading_m",color:"default"}),children:"Helper text"}),e.jsx(n,{width:"200px",children:e.jsx(t,{label:"Enable dark mode",name:"helptext",helpText:"Activates dark mode theme for less eye strain"})})]});m.parameters={pseudo:{hover:'[data-testid="hover"]',focusVisible:'[data-testid="focus"]'}};c.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{indeterminate:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helpText:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"Controlled",props:{indeterminate:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helpText:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"Group"};h.__docgenInfo={description:"",methods:[],displayName:"Indeterminate"};m.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var k,g,f;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`({
  width,
  ...props
}: CheckboxProps) => <Box p="s" data-testid="wrapper" width={width || "fit-content"}>
    <Checkbox {...props} />
  </Box>`,...(f=(g=c.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var C,y,j;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`({
  onChange,
  ...args
}: CheckboxProps) => {
  const [cchecked, setChecked] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };
  return <>
      <Box p="s" data-testid="wrapper" width={200}>
        <Checkbox {...args} checked={cchecked} onChange={handleChange} />
      </Box>
      <p>Checked: {cchecked ? "true" : "false"}</p>
    </>;
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var v,w,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`(args: Omit<CheckboxGroupProps, "options">) => <Box direction="col" p="s" gap="m" data-testid="wrapper" width="fit-content">
    <CheckboxGroup {...args} options={[{
    name: "q1",
    label: "Option 1"
  }, {
    name: "q2",
    label: "Option 2"
  }, {
    name: "q3",
    label: "Option 3"
  }]} />
  </Box>`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var B,N,_;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState([true, false]);
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };
  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  return <Box direction="col" gap="m">
      <Checkbox label="Parent" checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />
      <Box direction="col" gap="m" pl="m">
        <Checkbox label="Child 1" checked={checked[0]} onChange={handleChange2} />
        <Checkbox label="Child 2" checked={checked[1]} onChange={handleChange3} />
      </Box>
    </Box>;
}`,...(_=(N=h.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var I,P,q;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Box direction="col">
    <h2 className={getTypographyClassName({
    font: "heading_m",
    color: "default"
  })}>States</h2>
    <Box direction="row" gap="m" justify="stretch">
      <Box direction="col" gap="m" justify="stretch">
        <Checkbox name="checkbox1" label="Uncheck default" />
        <Checkbox name="checkbox1" label="Uncheck hover" data-testid="hover" />
        <Checkbox name="checkbox1" label="Uncheck focus" data-testid="focus" />
        <Checkbox name="checkbox4" label="Uncheck disabled" disabled />
      </Box>
      <Box direction="col" gap="m" justify="stretch">
        <Checkbox name="checkbox2" label="Indeterminate default" indeterminate />
        <Checkbox name="checkbox2" label="Indeterminate hover" indeterminate data-testid="hover" />
        <Checkbox name="checkbox3" label="Indeterminate focus" indeterminate data-testid="focus" />
        <Checkbox name="checkbox5" label="Indeterminate disabled" indeterminate disabled />
      </Box>
      <Box direction="col" gap="m" justify="stretch">
        <Checkbox name="checkbox3" label="Checked default" checked />
        <Checkbox name="checkbox3" label="Checked hover" checked data-testid="hover" />
        <Checkbox name="checkbox3" label="Checked focus" checked data-testid="focus" />
        <Checkbox name="checkbox6" label="Checked disabled" checked disabled />
      </Box>
    </Box>
    <h2 className={getTypographyClassName({
    font: "heading_m",
    color: "default"
  })}>Field</h2>
    <Group label="Checkbox group" helpText="help me" />
    <h2 className={getTypographyClassName({
    font: "heading_m",
    color: "default"
  })}>Label overflow</h2>
    <Box width="200px">
      <Checkbox label="Long label that wraps over to a new row" name="overflow" />
    </Box>
    <h2 className={getTypographyClassName({
    font: "heading_m",
    color: "default"
  })}>Helper text</h2>
    <Box width="200px">
      <Checkbox label="Enable dark mode" name="helptext" helpText="Activates dark mode theme for less eye strain" />
    </Box>
  </Box>`,...(q=(P=m.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const K=["Playground","Controlled","Group","Indeterminate","VisualTest"];export{l as Controlled,s as Group,h as Indeterminate,c as Playground,m as VisualTest,K as __namedExportsOrder,J as default};
