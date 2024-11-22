import{j as e}from"./jsx-runtime-CfatFE5O.js";import{f as L}from"./index-B-tj2W5I.js";import{g as T}from"./figma-hO1OATkS.js";import{O as d}from"./SelectTest-Dfrr_ghx.js";import{S as a}from"./SelectComposition-Cc3b_OxD.js";import{B as o}from"./Box-25vWnmJ9.js";const H={title:"Components/Select",component:a},p={chromatic:{disableSnapshot:!0}},n=s=>e.jsx(o,{p:"s","data-testid":"wrapper",width:300,alignItems:"start",children:e.jsxs(a.Select,{...s,children:[e.jsx(a.Option,{label:"None",value:""}),e.jsx(a.OptionRenderer,{options:d}),e.jsx(a.Divider,{}),e.jsxs(a.OptGroup,{label:"Deprecated Colors",children:[e.jsx(a.Option,{label:"Chartreuse",value:"chartreuse",description:"nice color btw"}),e.jsx(a.Option,{label:"Cornsilk",value:"cornsilk"}),e.jsx(a.Option,{label:"Gainsboro",value:"pink"})]})]})});n.args={size:"default",placeholder:"Select a color",defaultValue:"red"};n.argTypes={size:{control:{type:"select"},options:[void 0,"default","small"]},disabled:{control:"boolean"},hasError:{control:"boolean"},defaultValue:{control:"text"},placeholder:{control:"text"},onChange:{table:{disable:!0}},value:{table:{disable:!0}},helpText:{control:"text"},errorMessages:{control:{type:"select",labels:{first:"One error message",second:"Two error messages"}},options:[void 0,"one msg","two msg"],mapping:{"one msg":["Error message 1"],"two msg":["Error message 1","Error message 2"]}}};n.parameters={...T("select"),...p};const r=s=>e.jsx(o,{p:"s","data-testid":"wrapper",width:300,children:e.jsx(a.Select,{label:"Color",helpText:"Select a color",...s,children:e.jsx(a.OptionRenderer,{options:d})})});r.args={placeholder:"Select a color",defaultValue:"red"};r.parameters=p;const t=({...s})=>e.jsx(o,{p:"s","data-testid":"wrapper",width:300,children:e.jsxs(a.Select,{...s,children:[e.jsx(a.Option,{label:"Select a color",value:""}),e.jsx(a.Option,{label:"Black",value:"black"}),e.jsx(a.Option,{label:"White",value:"white"}),e.jsx(a.Option,{label:"Red",value:"red"})]})});t.args={value:"",onChange:L()};t.argTypes={onChange:{table:{disable:!0}}};t.parameters=p;const l=({options:s,...N})=>e.jsx(o,{p:"s","data-testid":"wrapper",width:300,children:e.jsx(a.Select,{...N,children:e.jsx(a.OptionRenderer,{options:s})})});l.args={defaultValue:"Table",placeholder:"Select a visualization",options:[{label:"Chart",icon:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M0 13H15V14H0V13Z",fill:"currentColor"}),e.jsx("path",{d:"M0 4H1V5H0V4Z",fill:"currentColor"}),e.jsx("path",{d:"M0 7H1V8H0V7Z",fill:"currentColor"}),e.jsx("path",{d:"M0 10H1V11H0V10Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 3H4V13H7V3ZM4 2C3.44772 2 3 2.44772 3 3V14H8V3C8 2.44772 7.55228 2 7 2H4Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 5H8V13H11V5ZM7 4V14H12V5C12 4.44772 11.5523 4 11 4H7Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 7H12V13H15V7ZM11 6V14H16V7C16 6.44772 15.5523 6 15 6H11Z",fill:"currentColor"})]}),value:"Chart"},{label:"Table",icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 2C0 1.44772 0.447715 1 1 1H15C15.5523 1 16 1.44772 16 2V14C16 14.5523 15.5523 15 15 15H1C0.447715 15 0 14.5523 0 14V2ZM1 2V5H15V2H1ZM1 6V14H5V6H1ZM10 14V6H6V14H10ZM11 14H15V6H11V14Z",fill:"currentColor"})}),value:"Table"},{label:"Text object",icon:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_22379_2335)",children:[e.jsx("path",{d:"M2.60395 7.6719L2.32795 8.6319H4.33195L4.05595 7.6719C3.92795 7.2559 3.80395 6.8279 3.68395 6.3879C3.57195 5.9479 3.45995 5.5119 3.34795 5.0799H3.29995C3.19595 5.5199 3.08395 5.9599 2.96395 6.3999C2.85195 6.8319 2.73195 7.2559 2.60395 7.6719ZM-0.0240479 11.8479L2.53195 3.9999H4.16395L6.71995 11.8479H5.25595L4.64395 9.7239H2.00395L1.39195 11.8479H-0.0240479Z",fill:"currentColor"}),e.jsx("path",{d:"M9.2063 11.9919C8.6943 11.9919 8.2743 11.8319 7.9463 11.5119C7.6263 11.1919 7.4663 10.7759 7.4663 10.2639C7.4663 9.6319 7.7423 9.1439 8.2943 8.7999C8.8463 8.4479 9.7263 8.2079 10.9343 8.0799C10.9263 7.7679 10.8423 7.4999 10.6823 7.2759C10.5303 7.0439 10.2543 6.9279 9.8543 6.9279C9.5663 6.9279 9.2823 6.9839 9.0023 7.0959C8.7303 7.2079 8.4623 7.3439 8.1983 7.5039L7.6943 6.5799C8.0223 6.3719 8.3903 6.1919 8.7983 6.0399C9.2143 5.8879 9.6543 5.8119 10.1183 5.8119C10.8543 5.8119 11.4023 6.0319 11.7623 6.4719C12.1303 6.9039 12.3143 7.5319 12.3143 8.3559V11.8479H11.1743L11.0783 11.1999H11.0303C10.7663 11.4239 10.4823 11.6119 10.1783 11.7639C9.8823 11.9159 9.5583 11.9919 9.2063 11.9919ZM9.6503 10.9119C9.8903 10.9119 10.1063 10.8559 10.2983 10.7439C10.4983 10.6239 10.7103 10.4639 10.9343 10.2639V8.9439C10.1343 9.0479 9.5783 9.2039 9.2663 9.4119C8.9543 9.6119 8.7983 9.8599 8.7983 10.1559C8.7983 10.4199 8.8783 10.6119 9.0383 10.7319C9.1983 10.8519 9.4023 10.9119 9.6503 10.9119Z",fill:"currentColor"}),e.jsx("path",{d:"M14 1H15V15H14V1Z",fill:"currentColor"}),e.jsx("path",{d:"M13 1H16V2H13V1Z",fill:"currentColor"}),e.jsx("path",{d:"M13 14H16V15H13V14Z",fill:"currentColor"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_22379_2335",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]}),value:"Text object"}]};l.parameters={...T("select","icon"),...p};const u=e.jsxs(e.Fragment,{children:[e.jsx(a.Option,{label:"White",value:"white"}),e.jsx(a.Option,{label:"Red",value:"red"})]}),i=()=>e.jsxs(o,{width:"100%",direction:"col",children:[e.jsxs(o,{direction:"row",p:"l",gap:"xl",width:"100%",alignItems:"start",height:"200px",children:[e.jsx(a.Select,{defaultOpen:!0,placeholder:"color",label:"Default opened",defaultValue:"red",size:"small",children:u}),e.jsxs(a.Select,{defaultOpen:!0,placeholder:"color",label:"Default opened with overflow",defaultValue:"red",size:"small",children:[e.jsx(a.Option,{label:"Example of label with overflow text lorem ipsum need to go over 400px",value:"",defaultValue:"red"}),u]}),e.jsx(a.Select,{placeholder:"color",label:"Default",defaultValue:"red",size:"small",children:u}),e.jsx(a.Select,{placeholder:"color",label:"hasError",hasError:!0,size:"small",children:u}),e.jsx(a.Select,{placeholder:"color",label:"hasError",disabled:!0,size:"small",children:u}),e.jsx(a.Select,{placeholder:"color",label:"hasError",readOnly:!0,size:"small",children:u})]}),e.jsxs(o,{direction:"row",p:"l",gap:"xl",width:"100%",height:"380px",alignItems:"start",children:[e.jsx(a.Select,{defaultOpen:!0,placeholder:"color",label:"Default opened",defaultValue:"red",children:e.jsx(a.OptionRenderer,{options:d})}),e.jsxs(a.Select,{defaultOpen:!0,label:"Default opened with overflow",helpText:"Help text",placeholder:"color",defaultValue:"red",children:[e.jsx(a.Option,{label:"Example of label with overflow text lorem ipsum need to go over 400px",value:"",defaultValue:"red"}),e.jsx(a.OptionRenderer,{options:d})]}),e.jsx(a.Select,{label:"Default",helpText:"Help text",placeholder:"color"}),e.jsx(a.Select,{label:"hasError",helpText:"Help text",placeholder:"color",hasError:!0}),e.jsx(a.Select,{label:"Disabled",helpText:"Help text",placeholder:"color",disabled:!0}),e.jsx(a.Select,{label:"ReadOnly",helpText:"Help text",placeholder:"color",readOnly:!0,defaultValue:"red",children:e.jsx(a.OptionRenderer,{options:d})})]})]});i.argTypes=null;i.parameters={controls:{disable:!0}};const m=()=>e.jsx(o,{p:"s","data-testid":"wrapper",width:300,alignItems:"start",children:e.jsx(a.Select,{defaultValue:"red",options:d})});m.parameters=p;n.__docgenInfo={description:"",methods:[],displayName:"UnControlled",props:{Select:{required:!0,tsType:{name:"intersection",raw:'SelectFloatingProps & Pick<FieldProps, "label" | "helpText" | "errorMessages" | "isError">',elements:[{name:"intersection",raw:`Omit<HTMLButtonProps, "type" | "children" | "size"> & {
  defaultOpen?: boolean;
  /** @deprecated use defaultOpen */
  isDisplayedForTesting?: boolean;
  hasError?: boolean;
  /** @deprecated: use Select.OptionRenderer instead */
  options?: OptionRendererProps["options"];
  size?: "default" | "small";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent) => void;
  children?: ReactNode;
  readOnly?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithoutRef<"button">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"type" | "children" | "size"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"children"'},{name:"literal",value:'"size"'}]}],raw:'Omit<HTMLButtonProps, "type" | "children" | "size">'},{name:"signature",type:"object",raw:`{
  defaultOpen?: boolean;
  /** @deprecated use defaultOpen */
  isDisplayedForTesting?: boolean;
  hasError?: boolean;
  /** @deprecated: use Select.OptionRenderer instead */
  options?: OptionRendererProps["options"];
  size?: "default" | "small";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent) => void;
  children?: ReactNode;
  readOnly?: boolean;
}`,signature:{properties:[{key:"defaultOpen",value:{name:"boolean",required:!1}},{key:"isDisplayedForTesting",value:{name:"boolean",required:!1},description:"@deprecated use defaultOpen"},{key:"hasError",value:{name:"boolean",required:!1}},{key:"options",value:{name:"Array",raw:'OptionRendererProps["options"]',required:!1},description:"@deprecated: use Select.OptionRenderer instead"},{key:"size",value:{name:"union",raw:'"default" | "small"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'}],required:!1}},{key:"placeholder",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"defaultValue",value:{name:"string",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(e: ChangeEvent) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: {
    name: string;
    value: string;
  };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:`{
  name: string;
  value: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]}},name:"e"}],return:{name:"void"}},required:!1}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}}]}}]},{name:"Pick",elements:[{name:"intersection",raw:`Partial<Omit<FieldLabelProps, "id">> &
Partial<Omit<HelperTextProps, "id">> & {
  errorMessages?: string[];
  children: ReactNode;
  labelId?: string;
  helpTextId?: string;
} & HTMLDivProps`,elements:[{name:"Partial",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<HTMLLabelProps, "children" | "label"> & {
  label: ReactNode;
  htmlFor?: string;
  disabled?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"label">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithoutRef<"label">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"label">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"children" | "label"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"label"'}]}],raw:'Omit<HTMLLabelProps, "children" | "label">'},{name:"signature",type:"object",raw:`{
  label: ReactNode;
  htmlFor?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"htmlFor",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:'"id"'}],raw:'Omit<FieldLabelProps, "id">'}],raw:'Partial<Omit<FieldLabelProps, "id">>'},{name:"Partial",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<HTMLDivProps, "children"> & {
  isError?: boolean;
  helpText: ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"literal",value:'"children"'}],raw:'Omit<HTMLDivProps, "children">'},{name:"signature",type:"object",raw:`{
  isError?: boolean;
  helpText: ReactNode;
}`,signature:{properties:[{key:"isError",value:{name:"boolean",required:!1}},{key:"helpText",value:{name:"ReactNode",required:!0}}]}}]},{name:"literal",value:'"id"'}],raw:'Omit<HelperTextProps, "id">'}],raw:'Partial<Omit<HelperTextProps, "id">>'},{name:"signature",type:"object",raw:`{
  errorMessages?: string[];
  children: ReactNode;
  labelId?: string;
  helpTextId?: string;
}`,signature:{properties:[{key:"errorMessages",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}},{key:"labelId",value:{name:"string",required:!1}},{key:"helpTextId",value:{name:"string",required:!1}}]}},{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]}]},{name:"union",raw:'"label" | "helpText" | "errorMessages" | "isError"',elements:[{name:"literal",value:'"label"'},{name:"literal",value:'"helpText"'},{name:"literal",value:'"errorMessages"'},{name:"literal",value:'"isError"'}]}],raw:'Pick<FieldProps, "label" | "helpText" | "errorMessages" | "isError">'}]},description:""},Multi:{required:!0,tsType:{name:"intersection",raw:`{
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  id?: string;
  value?: string[];
  defaultValue?: string[];
  onChange?: (e: ChangeEvent) => void;
  children: ReactNode;
  "data-testid"?: string;
  defaultOpen?: boolean;
  hasError?: boolean;
} & Pick<ComboboxPropsEditable, "labelClear" | "readOnly"> &
  Pick<FieldProps, "label" | "helpText" | "errorMessages" | "isError">`,elements:[{name:"signature",type:"object",raw:`{
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  id?: string;
  value?: string[];
  defaultValue?: string[];
  onChange?: (e: ChangeEvent) => void;
  children: ReactNode;
  "data-testid"?: string;
  defaultOpen?: boolean;
  hasError?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"placeholder",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"defaultValue",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(e: ChangeEvent) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: {
    name: string;
    value: string;
  };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:`{
  name: string;
  value: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]}},name:"e"}],return:{name:"void"}},required:!1}},{key:"children",value:{name:"ReactNode",required:!0}},{key:"data-testid",value:{name:"string",required:!1}},{key:"defaultOpen",value:{name:"boolean",required:!1}},{key:"hasError",value:{name:"boolean",required:!1}}]}},{name:"Pick",elements:[{name:"intersection",raw:`HTMLInputProps & {
  onTagRemove?: (tag: string) => void;
  tags?: { value: string; text: string }[];
  disabled?: boolean;
  readOnly?: boolean;
  hasError?: boolean;
  onDropDown?: () => void;
  onClear?: () => void;
  labelClear?: string;
  "data-testid"?: string;
}`,elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"input">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithoutRef<"input">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"input">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"signature",type:"object",raw:`{
  onTagRemove?: (tag: string) => void;
  tags?: { value: string; text: string }[];
  disabled?: boolean;
  readOnly?: boolean;
  hasError?: boolean;
  onDropDown?: () => void;
  onClear?: () => void;
  labelClear?: string;
  "data-testid"?: string;
}`,signature:{properties:[{key:"onTagRemove",value:{name:"signature",type:"function",raw:"(tag: string) => void",signature:{arguments:[{type:{name:"string"},name:"tag"}],return:{name:"void"}},required:!1}},{key:"tags",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; text: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}}],raw:"{ value: string; text: string }[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"hasError",value:{name:"boolean",required:!1}},{key:"onDropDown",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"onClear",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"labelClear",value:{name:"string",required:!1}},{key:"data-testid",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"labelClear" | "readOnly"',elements:[{name:"literal",value:'"labelClear"'},{name:"literal",value:'"readOnly"'}]}],raw:'Pick<ComboboxPropsEditable, "labelClear" | "readOnly">'},{name:"Pick",elements:[{name:"intersection",raw:`Partial<Omit<FieldLabelProps, "id">> &
Partial<Omit<HelperTextProps, "id">> & {
  errorMessages?: string[];
  children: ReactNode;
  labelId?: string;
  helpTextId?: string;
} & HTMLDivProps`,elements:[{name:"Partial",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<HTMLLabelProps, "children" | "label"> & {
  label: ReactNode;
  htmlFor?: string;
  disabled?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"label">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithoutRef<"label">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"label">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"children" | "label"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"label"'}]}],raw:'Omit<HTMLLabelProps, "children" | "label">'},{name:"signature",type:"object",raw:`{
  label: ReactNode;
  htmlFor?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"htmlFor",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:'"id"'}],raw:'Omit<FieldLabelProps, "id">'}],raw:'Partial<Omit<FieldLabelProps, "id">>'},{name:"Partial",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<HTMLDivProps, "children"> & {
  isError?: boolean;
  helpText: ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"literal",value:'"children"'}],raw:'Omit<HTMLDivProps, "children">'},{name:"signature",type:"object",raw:`{
  isError?: boolean;
  helpText: ReactNode;
}`,signature:{properties:[{key:"isError",value:{name:"boolean",required:!1}},{key:"helpText",value:{name:"ReactNode",required:!0}}]}}]},{name:"literal",value:'"id"'}],raw:'Omit<HelperTextProps, "id">'}],raw:'Partial<Omit<HelperTextProps, "id">>'},{name:"signature",type:"object",raw:`{
  errorMessages?: string[];
  children: ReactNode;
  labelId?: string;
  helpTextId?: string;
}`,signature:{properties:[{key:"errorMessages",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}},{key:"labelId",value:{name:"string",required:!1}},{key:"helpTextId",value:{name:"string",required:!1}}]}},{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]}]},{name:"union",raw:'"label" | "helpText" | "errorMessages" | "isError"',elements:[{name:"literal",value:'"label"'},{name:"literal",value:'"helpText"'},{name:"literal",value:'"errorMessages"'},{name:"literal",value:'"isError"'}]}],raw:'Pick<FieldProps, "label" | "helpText" | "errorMessages" | "isError">'}]},description:""},Combox:{required:!0,tsType:{name:"intersection",raw:`Omit<HTMLButtonProps, "type" | "children" | "size" | "label"> & {
  iconElement?: SVGSVGElement;
  hasError?: boolean;
  readOnly?: boolean;
  isOpen?: boolean;
  size?: "default" | "small";
  "aria-controls": string;
  placeholder?: string;
  value?: string;
  label?: string;
  defaultValue?: string;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithoutRef<"button">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"type" | "children" | "size" | "label"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"children"'},{name:"literal",value:'"size"'},{name:"literal",value:'"label"'}]}],raw:'Omit<HTMLButtonProps, "type" | "children" | "size" | "label">'},{name:"signature",type:"object",raw:`{
  iconElement?: SVGSVGElement;
  hasError?: boolean;
  readOnly?: boolean;
  isOpen?: boolean;
  size?: "default" | "small";
  "aria-controls": string;
  placeholder?: string;
  value?: string;
  label?: string;
  defaultValue?: string;
}`,signature:{properties:[{key:"iconElement",value:{name:"SVGSVGElement",required:!1}},{key:"hasError",value:{name:"boolean",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"isOpen",value:{name:"boolean",required:!1}},{key:"size",value:{name:"union",raw:'"default" | "small"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'}],required:!1}},{key:"aria-controls",value:{name:"string",required:!0}},{key:"placeholder",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"defaultValue",value:{name:"string",required:!1}}]}}]},description:""},ListBox:{required:!0,tsType:{name:"intersection",raw:`{
  children: ReactNode;
  id: string;
  style?: CSSProperties; //
  ["aria-labelledby"]: string;
} & HTMLDivProps`,elements:[{name:"signature",type:"object",raw:`{
  children: ReactNode;
  id: string;
  style?: CSSProperties; //
  ["aria-labelledby"]: string;
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!1}},{key:"aria-labelledby",value:{name:"string",required:!0}}]}},{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]}]},description:""},Option:{required:!0,tsType:{name:"intersection",raw:`{
  label: string;
  value?: string;
  description?: string;
  disabled?: boolean;
  icon?: ReactNode;
} & Omit<HTMLButtonProps, "type" | "disabled">`,elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value?: string;
  description?: string;
  disabled?: boolean;
  icon?: ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}}]}},{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithoutRef<"button">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"type" | "disabled"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"disabled"'}]}],raw:'Omit<HTMLButtonProps, "type" | "disabled">'}]},description:""},OptGroup:{required:!0,tsType:{name:"intersection",raw:'MenuProps["Group"]'},description:""},OptionRenderer:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  options: Option[];
}`,signature:{properties:[{key:"options",value:{name:"Array",elements:[{name:"Option"}],raw:"Option[]",required:!0}}]}},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"WithField",props:{Select:{required:!0,tsType:{name:"intersection",raw:'SelectFloatingProps & Pick<FieldProps, "label" | "helpText" | "errorMessages" | "isError">',elements:[{name:"intersection",raw:`Omit<HTMLButtonProps, "type" | "children" | "size"> & {
  defaultOpen?: boolean;
  /** @deprecated use defaultOpen */
  isDisplayedForTesting?: boolean;
  hasError?: boolean;
  /** @deprecated: use Select.OptionRenderer instead */
  options?: OptionRendererProps["options"];
  size?: "default" | "small";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent) => void;
  children?: ReactNode;
  readOnly?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithoutRef<"button">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"type" | "children" | "size"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"children"'},{name:"literal",value:'"size"'}]}],raw:'Omit<HTMLButtonProps, "type" | "children" | "size">'},{name:"signature",type:"object",raw:`{
  defaultOpen?: boolean;
  /** @deprecated use defaultOpen */
  isDisplayedForTesting?: boolean;
  hasError?: boolean;
  /** @deprecated: use Select.OptionRenderer instead */
  options?: OptionRendererProps["options"];
  size?: "default" | "small";
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent) => void;
  children?: ReactNode;
  readOnly?: boolean;
}`,signature:{properties:[{key:"defaultOpen",value:{name:"boolean",required:!1}},{key:"isDisplayedForTesting",value:{name:"boolean",required:!1},description:"@deprecated use defaultOpen"},{key:"hasError",value:{name:"boolean",required:!1}},{key:"options",value:{name:"Array",raw:'OptionRendererProps["options"]',required:!1},description:"@deprecated: use Select.OptionRenderer instead"},{key:"size",value:{name:"union",raw:'"default" | "small"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'}],required:!1}},{key:"placeholder",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"defaultValue",value:{name:"string",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(e: ChangeEvent) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: {
    name: string;
    value: string;
  };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:`{
  name: string;
  value: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]}},name:"e"}],return:{name:"void"}},required:!1}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}}]}}]},{name:"Pick",elements:[{name:"intersection",raw:`Partial<Omit<FieldLabelProps, "id">> &
Partial<Omit<HelperTextProps, "id">> & {
  errorMessages?: string[];
  children: ReactNode;
  labelId?: string;
  helpTextId?: string;
} & HTMLDivProps`,elements:[{name:"Partial",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<HTMLLabelProps, "children" | "label"> & {
  label: ReactNode;
  htmlFor?: string;
  disabled?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"label">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithoutRef<"label">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"label">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"children" | "label"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"label"'}]}],raw:'Omit<HTMLLabelProps, "children" | "label">'},{name:"signature",type:"object",raw:`{
  label: ReactNode;
  htmlFor?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"htmlFor",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:'"id"'}],raw:'Omit<FieldLabelProps, "id">'}],raw:'Partial<Omit<FieldLabelProps, "id">>'},{name:"Partial",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<HTMLDivProps, "children"> & {
  isError?: boolean;
  helpText: ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"literal",value:'"children"'}],raw:'Omit<HTMLDivProps, "children">'},{name:"signature",type:"object",raw:`{
  isError?: boolean;
  helpText: ReactNode;
}`,signature:{properties:[{key:"isError",value:{name:"boolean",required:!1}},{key:"helpText",value:{name:"ReactNode",required:!0}}]}}]},{name:"literal",value:'"id"'}],raw:'Omit<HelperTextProps, "id">'}],raw:'Partial<Omit<HelperTextProps, "id">>'},{name:"signature",type:"object",raw:`{
  errorMessages?: string[];
  children: ReactNode;
  labelId?: string;
  helpTextId?: string;
}`,signature:{properties:[{key:"errorMessages",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}},{key:"labelId",value:{name:"string",required:!1}},{key:"helpTextId",value:{name:"string",required:!1}}]}},{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]}]},{name:"union",raw:'"label" | "helpText" | "errorMessages" | "isError"',elements:[{name:"literal",value:'"label"'},{name:"literal",value:'"helpText"'},{name:"literal",value:'"errorMessages"'},{name:"literal",value:'"isError"'}]}],raw:'Pick<FieldProps, "label" | "helpText" | "errorMessages" | "isError">'}]},description:""},Multi:{required:!0,tsType:{name:"intersection",raw:`{
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  id?: string;
  value?: string[];
  defaultValue?: string[];
  onChange?: (e: ChangeEvent) => void;
  children: ReactNode;
  "data-testid"?: string;
  defaultOpen?: boolean;
  hasError?: boolean;
} & Pick<ComboboxPropsEditable, "labelClear" | "readOnly"> &
  Pick<FieldProps, "label" | "helpText" | "errorMessages" | "isError">`,elements:[{name:"signature",type:"object",raw:`{
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  id?: string;
  value?: string[];
  defaultValue?: string[];
  onChange?: (e: ChangeEvent) => void;
  children: ReactNode;
  "data-testid"?: string;
  defaultOpen?: boolean;
  hasError?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"placeholder",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"defaultValue",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(e: ChangeEvent) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  target: {
    name: string;
    value: string;
  };
}`,signature:{properties:[{key:"target",value:{name:"signature",type:"object",raw:`{
  name: string;
  value: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]},required:!0}}]}},name:"e"}],return:{name:"void"}},required:!1}},{key:"children",value:{name:"ReactNode",required:!0}},{key:"data-testid",value:{name:"string",required:!1}},{key:"defaultOpen",value:{name:"boolean",required:!1}},{key:"hasError",value:{name:"boolean",required:!1}}]}},{name:"Pick",elements:[{name:"intersection",raw:`HTMLInputProps & {
  onTagRemove?: (tag: string) => void;
  tags?: { value: string; text: string }[];
  disabled?: boolean;
  readOnly?: boolean;
  hasError?: boolean;
  onDropDown?: () => void;
  onClear?: () => void;
  labelClear?: string;
  "data-testid"?: string;
}`,elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"input">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithoutRef<"input">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"input">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"signature",type:"object",raw:`{
  onTagRemove?: (tag: string) => void;
  tags?: { value: string; text: string }[];
  disabled?: boolean;
  readOnly?: boolean;
  hasError?: boolean;
  onDropDown?: () => void;
  onClear?: () => void;
  labelClear?: string;
  "data-testid"?: string;
}`,signature:{properties:[{key:"onTagRemove",value:{name:"signature",type:"function",raw:"(tag: string) => void",signature:{arguments:[{type:{name:"string"},name:"tag"}],return:{name:"void"}},required:!1}},{key:"tags",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; text: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}}],raw:"{ value: string; text: string }[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"hasError",value:{name:"boolean",required:!1}},{key:"onDropDown",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"onClear",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"labelClear",value:{name:"string",required:!1}},{key:"data-testid",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"labelClear" | "readOnly"',elements:[{name:"literal",value:'"labelClear"'},{name:"literal",value:'"readOnly"'}]}],raw:'Pick<ComboboxPropsEditable, "labelClear" | "readOnly">'},{name:"Pick",elements:[{name:"intersection",raw:`Partial<Omit<FieldLabelProps, "id">> &
Partial<Omit<HelperTextProps, "id">> & {
  errorMessages?: string[];
  children: ReactNode;
  labelId?: string;
  helpTextId?: string;
} & HTMLDivProps`,elements:[{name:"Partial",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<HTMLLabelProps, "children" | "label"> & {
  label: ReactNode;
  htmlFor?: string;
  disabled?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"label">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"label"'}],raw:'ComponentPropsWithoutRef<"label">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"label">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"children" | "label"',elements:[{name:"literal",value:'"children"'},{name:"literal",value:'"label"'}]}],raw:'Omit<HTMLLabelProps, "children" | "label">'},{name:"signature",type:"object",raw:`{
  label: ReactNode;
  htmlFor?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"htmlFor",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]},{name:"literal",value:'"id"'}],raw:'Omit<FieldLabelProps, "id">'}],raw:'Partial<Omit<FieldLabelProps, "id">>'},{name:"Partial",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<HTMLDivProps, "children"> & {
  isError?: boolean;
  helpText: ReactNode;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"literal",value:'"children"'}],raw:'Omit<HTMLDivProps, "children">'},{name:"signature",type:"object",raw:`{
  isError?: boolean;
  helpText: ReactNode;
}`,signature:{properties:[{key:"isError",value:{name:"boolean",required:!1}},{key:"helpText",value:{name:"ReactNode",required:!0}}]}}]},{name:"literal",value:'"id"'}],raw:'Omit<HelperTextProps, "id">'}],raw:'Partial<Omit<HelperTextProps, "id">>'},{name:"signature",type:"object",raw:`{
  errorMessages?: string[];
  children: ReactNode;
  labelId?: string;
  helpTextId?: string;
}`,signature:{properties:[{key:"errorMessages",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}},{key:"labelId",value:{name:"string",required:!1}},{key:"helpTextId",value:{name:"string",required:!1}}]}},{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]}]},{name:"union",raw:'"label" | "helpText" | "errorMessages" | "isError"',elements:[{name:"literal",value:'"label"'},{name:"literal",value:'"helpText"'},{name:"literal",value:'"errorMessages"'},{name:"literal",value:'"isError"'}]}],raw:'Pick<FieldProps, "label" | "helpText" | "errorMessages" | "isError">'}]},description:""},Combox:{required:!0,tsType:{name:"intersection",raw:`Omit<HTMLButtonProps, "type" | "children" | "size" | "label"> & {
  iconElement?: SVGSVGElement;
  hasError?: boolean;
  readOnly?: boolean;
  isOpen?: boolean;
  size?: "default" | "small";
  "aria-controls": string;
  placeholder?: string;
  value?: string;
  label?: string;
  defaultValue?: string;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithoutRef<"button">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"type" | "children" | "size" | "label"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"children"'},{name:"literal",value:'"size"'},{name:"literal",value:'"label"'}]}],raw:'Omit<HTMLButtonProps, "type" | "children" | "size" | "label">'},{name:"signature",type:"object",raw:`{
  iconElement?: SVGSVGElement;
  hasError?: boolean;
  readOnly?: boolean;
  isOpen?: boolean;
  size?: "default" | "small";
  "aria-controls": string;
  placeholder?: string;
  value?: string;
  label?: string;
  defaultValue?: string;
}`,signature:{properties:[{key:"iconElement",value:{name:"SVGSVGElement",required:!1}},{key:"hasError",value:{name:"boolean",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"isOpen",value:{name:"boolean",required:!1}},{key:"size",value:{name:"union",raw:'"default" | "small"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'}],required:!1}},{key:"aria-controls",value:{name:"string",required:!0}},{key:"placeholder",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"defaultValue",value:{name:"string",required:!1}}]}}]},description:""},ListBox:{required:!0,tsType:{name:"intersection",raw:`{
  children: ReactNode;
  id: string;
  style?: CSSProperties; //
  ["aria-labelledby"]: string;
} & HTMLDivProps`,elements:[{name:"signature",type:"object",raw:`{
  children: ReactNode;
  id: string;
  style?: CSSProperties; //
  ["aria-labelledby"]: string;
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!1}},{key:"aria-labelledby",value:{name:"string",required:!0}}]}},{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"div"'}],raw:'ComponentPropsWithoutRef<"div">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"div">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]}]},description:""},Option:{required:!0,tsType:{name:"intersection",raw:`{
  label: string;
  value?: string;
  description?: string;
  disabled?: boolean;
  icon?: ReactNode;
} & Omit<HTMLButtonProps, "type" | "disabled">`,elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value?: string;
  description?: string;
  disabled?: boolean;
  icon?: ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}}]}},{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithoutRef<"button">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"type" | "disabled"',elements:[{name:"literal",value:'"type"'},{name:"literal",value:'"disabled"'}]}],raw:'Omit<HTMLButtonProps, "type" | "disabled">'}]},description:""},OptGroup:{required:!0,tsType:{name:"intersection",raw:'MenuProps["Group"]'},description:""},OptionRenderer:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  options: Option[];
}`,signature:{properties:[{key:"options",value:{name:"Array",elements:[{name:"Option"}],raw:"Option[]",required:!0}}]}},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"Controlled"};l.__docgenInfo={description:"",methods:[],displayName:"WithIcons",props:{options:{required:!0,tsType:{name:'signature["options"]',raw:'SelectProps["OptionRenderer"]["options"]'},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};m.__docgenInfo={description:"",methods:[],displayName:"Deprecated"};var c,g,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(props: SelectProps) => <Box p="s" data-testid="wrapper" width={300} alignItems="start">
    <Select.Select {...props}>
      {/* This is good to have the empty value as in HTML */}
      <Select.Option label="None" value="" />
      {/* You can use the renderer if you have a datastructure */}
      <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
      {/* Divider in case you have multiple groups */}
      <Select.Divider />
      {/* Simple and efficient composition */}
      <Select.OptGroup label="Deprecated Colors">
        <Select.Option label="Chartreuse" value="chartreuse" description="nice color btw" />
        <Select.Option label="Cornsilk" value="cornsilk" />
        <Select.Option label="Gainsboro" value="pink" />
      </Select.OptGroup>
    </Select.Select>
  </Box>`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,h,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(props: SelectProps) => <Box p="s" data-testid="wrapper" width={300}>
    <Select.Select label="Color" helpText="Select a color" {...props}>
      <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
    </Select.Select>
  </Box>`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,O,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`({
  ...props
}) => <Box p="s" data-testid="wrapper" width={300}>
    <Select.Select {...props}>
      <Select.Option label="Select a color" value="" />
      <Select.Option label="Black" value="black" />
      <Select.Option label="White" value="white" />
      <Select.Option label="Red" value="red" />
    </Select.Select>
  </Box>`,...(w=(O=t.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var P,R,C;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`({
  options,
  ...props
}: SelectProps["Select"] & {
  options: SelectProps["OptionRenderer"]["options"];
}) => <Box p="s" data-testid="wrapper" width={300}>
    <Select.Select {...props}>
      <Select.OptionRenderer options={options} />
    </Select.Select>
  </Box>`,...(C=(R=l.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var S,x,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Box width="100%" direction="col">
    <Box direction="row" p="l" gap="xl" width="100%" alignItems="start" height="200px">
      <Select.Select defaultOpen placeholder="color" label="Default opened" defaultValue="red" size="small">
        {SmallOptions}
      </Select.Select>
      <Select.Select defaultOpen placeholder="color" label="Default opened with overflow" defaultValue="red" size="small">
        <Select.Option label="Example of label with overflow text lorem ipsum need to go over 400px" value="" defaultValue="red" />

        {SmallOptions}
      </Select.Select>
      <Select.Select placeholder="color" label="Default" defaultValue="red" size="small">
        {SmallOptions}
      </Select.Select>
      <Select.Select placeholder="color" label="hasError" hasError size="small">
        {SmallOptions}
      </Select.Select>
      <Select.Select placeholder="color" label="hasError" disabled size="small">
        {SmallOptions}
      </Select.Select>
      <Select.Select placeholder="color" label="hasError" readOnly size="small">
        {SmallOptions}
      </Select.Select>
    </Box>
    <Box direction="row" p="l" gap="xl" width="100%" height="380px" alignItems="start">
      <Select.Select defaultOpen placeholder="color" label="Default opened" defaultValue="red">
        <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
      </Select.Select>
      <Select.Select defaultOpen label="Default opened with overflow" helpText="Help text" placeholder="color" defaultValue="red">
        <Select.Option label="Example of label with overflow text lorem ipsum need to go over 400px" value="" defaultValue="red" />
        <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
      </Select.Select>
      <Select.Select label="Default" helpText="Help text" placeholder="color" />
      <Select.Select label="hasError" helpText="Help text" placeholder="color" hasError />
      <Select.Select label="Disabled" helpText="Help text" placeholder="color" disabled />
      <Select.Select label="ReadOnly" helpText="Help text" placeholder="color" readOnly defaultValue="red">
        <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
      </Select.Select>
    </Box>
  </Box>`,...(E=(x=i.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var k,q,D;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Box p="s" data-testid="wrapper" width={300} alignItems="start">
    <Select.Select defaultValue="red" options={OPTIONS_WITH_GROUP} />
  </Box>`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const j=["UnControlled","WithField","Controlled","WithIcons","VisualTest","Deprecated"],F=Object.freeze(Object.defineProperty({__proto__:null,Controlled:t,Deprecated:m,UnControlled:n,VisualTest:i,WithField:r,WithIcons:l,__namedExportsOrder:j,default:H},Symbol.toStringTag,{value:"Module"}));export{F as S,n as U};
