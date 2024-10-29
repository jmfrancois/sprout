import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{T as s}from"./Textarea-ti8lLHXK.js";import{B as c}from"./Box-Bo_17ADl.js";const T={title:"Components/Textarea",component:s,parameters:{}},m=["Error message 1"],x={chromatic:{disableSnapshot:!0}},a=t=>e.jsxs(c,{direction:"col",gap:"m",justify:"stretch",alignContent:"stretch",width:"fit-content",children:[e.jsx(s,{id:"Textarea1",label:"Default",helpText:"help me",placeholder:"Give me a value",defaultValue:"This is the textarea's value",...t}),e.jsx(s,{id:"Textarea-error",label:"Resizable",placeholder:"Textarea resizable",resizable:!0,...t}),e.jsx(s,{id:"Textarea-disabled",label:"Disabled",placeholder:"Disabled Textarea",disabled:!0,...t}),e.jsx(s,{id:"Textarea-readonly",label:"Readonly",placeholder:"Readonly Textarea",readOnly:!0,...t}),e.jsx(s,{id:"Textarea-error-message",label:"Error",placeholder:"Textarea in error with message",errorMessages:m,...t}),e.jsx(s,{id:"Textarea-error",label:"Error",placeholder:"Textarea in error",hasError:!0,resizable:!0,...t})]});a.args={rows:4};a.argTypes={value:{table:{disable:!0}},onChange:{table:{disable:!0}},disabled:{table:{disable:!0}},readOnly:{table:{disable:!0}},hasError:{table:{disable:!0}},resizable:{table:{disable:!0}},onBlur:{table:{disable:!0}}};const r=t=>e.jsx(c,{p:"s",direction:"col",gap:"s",width:"fit-content","data-testid":"wrapper",children:e.jsx(s,{...t})});r.args={label:"Label",id:"Textarea",placeholder:"Placeholder",value:"Value",helpText:"help me",rows:4,resizable:!1};r.argTypes={...a.argTypes,helpText:{control:{type:"text"}},errorMessages:{control:{type:"select",labels:{first:"One error message",second:"Two error messages"}},options:["one msg","two msg"],mapping:{"one msg":["Error message 1"],"two msg":["Error message 1","Error message 2"]}},hasError:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},resizable:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}};r.parameters=x;a.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};r.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{resizable:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FocusEvent<HTMLTextAreaElement, HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLTextAreaElement"},{name:"HTMLTextAreaElement"}],raw:"FocusEvent<HTMLTextAreaElement, HTMLTextAreaElement>"},name:"event"}],return:{name:"void"}}},description:""}}};var l,o,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`(props: Partial<TextareaProps>) => <Box direction="col" gap="m" justify="stretch" alignContent="stretch" width="fit-content">
    <Textarea id="Textarea1" label="Default" helpText="help me" placeholder="Give me a value" defaultValue="This is the textarea's value" {...props} />
    <Textarea id="Textarea-error" label="Resizable" placeholder="Textarea resizable" resizable {...props} />
    <Textarea id="Textarea-disabled" label="Disabled" placeholder="Disabled Textarea" disabled {...props} />
    <Textarea id="Textarea-readonly" label="Readonly" placeholder="Readonly Textarea" readOnly {...props} />
    <Textarea id="Textarea-error-message" label="Error" placeholder="Textarea in error with message" errorMessages={errorMessages} {...props} />
    <Textarea id="Textarea-error" label="Error" placeholder="Textarea in error" hasError resizable {...props} />
  </Box>`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var n,d,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`(props: TextareaProps) => <Box p="s" direction="col" gap="s" width="fit-content" data-testid="wrapper">
    <Textarea {...props} />
  </Box>`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const b=["VisualTest","Playground"],y=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,VisualTest:a,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{r as P,y as S};
