import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{u as z,b as U,o as W,f as $,s as G,j as H,g as J,k as K,h as L,l as N,F as Q,m as X}from"./floating-ui.react-BqcbUs5N.js";import{B as u,a as Y}from"./Box-Bo_17ADl.js";import{A as D}from"./AlertInline-D64Aue8a.js";import{B as g}from"./Button-35iONiNZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CS4BWtGh.js";import"./AlertInlineIcons-BuJla_iS.js";import"./IconButton-CWRPr6lS.js";import"./Tooltip-Cu6rj0j6.js";import"./useId-Nx1NlIzw.js";import"./Button.module-Bksq7zkq.js";import"./DropdownArrowIcon-B9DU0KGM.js";import"./ProgressCircular-DToFE0Lx.js";const Z=({content:t,initialOpen:o=!1,placement:s="bottom-start",modal:r,open:n,onOpenChange:i,...c})=>{const[d,f]=a.useState(o),x=n??d,y=i??f,v=z({placement:s,open:x,onOpenChange:y,whileElementsMounted:U,middleware:[W(5),$({crossAxis:s.includes("-"),fallbackAxisSideDirection:"end",padding:5}),G({padding:5})]}),b=v.context,F=H(b,{enabled:n==null}),V=J(b),k=K(b),P=L([F,V,k]);return a.useMemo(()=>({open:x,setOpen:y,...P,...v,modal:r,content:t,...c}),[x,y,P,v,r,t])},ee="_popover_s4qvc_1",ne="_header_s4qvc_19",oe={popover:ee,header:ne},E=a.forwardRef(function({...o},s){const{context:r,...n}=M(),i=N([n.refs.setFloating,s]);if(!r.open)return null;const c={};return Object.entries(n).filter(([d])=>d.startsWith("data-")).forEach(([d,f])=>{Object.assign(c,{[d]:f})}),e.jsx(Q,{children:e.jsx(X,{context:r,modal:n.modal,children:e.jsx("div",{"data-testid":"popover.wrapper",ref:i,className:oe.popover,style:{...n.floatingStyles},"aria-label":`Popover--${n.id}`,...n.getFloatingProps(o),...c,id:n.id,children:o.children})})})});E.__docgenInfo={description:"",methods:[],displayName:"PopoverContent"};const R=a.forwardRef(function({children:o,...s},r){const n=M(),i=o&&a.isValidElement(o)?o:e.jsx("span",{}),c=N([n==null?void 0:n.refs.setReference,r]);return a.cloneElement(i,n==null?void 0:n.getReferenceProps({ref:c,...s,...i.props,"data-state":n.open?"open":"closed"}))});R.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};const S=a.createContext(null),M=()=>{const t=a.useContext(S);if(t==null)throw new Error("Popover components must be wrapped in <Popover />");return t},p=({children:t,content:o,id:s,modal:r=!1,...n})=>{const i=a.useId(),d=Z({modal:r,content:o,id:s||i,...n});return e.jsxs(S.Provider,{value:d,children:[e.jsx(R,{children:t}),e.jsx(E,{children:o})]})};p.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{id:{required:!1,tsType:{name:"string"},description:""},initialOpen:{required:!1,tsType:{name:"boolean"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},modal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ye={title:"Components/Popover",component:p},A={chromatic:{disableSnapshot:!0}},l=({content:t,open:o,placement:s})=>e.jsxs(u,{p:"s",direction:"col",gap:"l",width:"400px",alignItems:"start",children:[e.jsx(D,{severity:"warning",title:"Design not ready",message:"This component may change, as discussions are ongoing around it. Please do not use."}),e.jsx(p,{content:t,open:o,placement:s,children:e.jsx(g,{label:"My trigger"})})]});l.args={content:"This is the place where the popover content will appear.",placement:"bottom-end"};l.argTypes={initialOpen:{table:{disable:!0}},modal:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}};l.parameters=A;const h=()=>e.jsxs(u,{p:"s",direction:"col",gap:"l",width:"400px",alignItems:"start",children:[e.jsx(D,{severity:"warning",title:"Design not ready",message:"This component may change, as discussions are ongoing around it. Please do not use."}),e.jsx(p,{content:e.jsx("p",{className:Y({familly:"body",size:"m"}),children:"This is the place where the popover content will appear."}),children:e.jsx(g,{label:"My trigger"})})]});h.parameters=A;const m=()=>e.jsxs(u,{gap:"3xl",direction:"row",p:"xl",width:"full",alignItems:"center",justify:"between",height:"100vh",children:[e.jsx(u,{justify:"end",width:"35%",children:e.jsx(p,{open:!0,placement:"left",content:e.jsx("p",{children:"placeholder"}),children:e.jsx(g,{label:"left"})})}),e.jsxs(u,{alignSelf:"center",gap:"3xl",alignItems:"center",direction:"col",width:"30%",children:[e.jsx(p,{open:!0,placement:"top",content:e.jsx("p",{children:"placeholder"}),children:e.jsx(g,{label:"top"})}),e.jsx(p,{open:!0,placement:"bottom",content:e.jsx("p",{children:"placeholder"}),children:e.jsx(g,{label:"bottom"})})]}),e.jsx(u,{width:"35%",children:e.jsx(p,{open:!0,placement:"right",content:e.jsx("p",{children:"placeholder"}),children:e.jsx(g,{label:"right"})})})]});m.argTypes=null;m.parameters={controls:{disable:!0}};l.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{id:{required:!1,tsType:{name:"string"},description:""},initialOpen:{required:!1,tsType:{name:"boolean"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},modal:{required:!1,tsType:{name:"boolean"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var j,w,T;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`({
  content,
  open,
  placement
}: PropsWithChildren<PopoverOptions>) => <Box p="s" direction="col" gap="l" width="400px" alignItems="start">
    <AlertInline severity="warning" title="Design not ready" message="This component may change, as discussions are ongoing around it. Please do not use." />

    <Popover content={content} open={open} placement={placement}>
      <Button label="My trigger" />
    </Popover>
  </Box>`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var B,I,_;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`() => <Box p="s" direction="col" gap="l" width="400px" alignItems="start">
    <AlertInline severity="warning" title="Design not ready" message="This component may change, as discussions are ongoing around it. Please do not use." />

    <Popover content={<p className={getTypographyClassName({
    familly: "body",
    size: "m"
  })}>
          This is the place where the popover content will appear.
        </p>}>
      <Button label="My trigger" />
    </Popover>
  </Box>`,...(_=(I=h.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var C,q,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Box gap="3xl" direction="row" p="xl" width="full" alignItems="center" justify="between" height="100vh">
    <Box justify="end" width="35%">
      <Popover open placement="left" content={<p>placeholder</p>}>
        <Button label="left" />
      </Popover>
    </Box>

    <Box alignSelf="center" gap="3xl" alignItems="center" direction="col" width="30%">
      <Popover open placement="top" content={<p>placeholder</p>}>
        <Button label="top" />
      </Popover>
      <Popover open placement="bottom" content={<p>placeholder</p>}>
        <Button label="bottom" />
      </Popover>
    </Box>
    <Box width="35%">
      <Popover open placement="right" content={<p>placeholder</p>}>
        <Button label="right" />
      </Popover>
    </Box>
  </Box>`,...(O=(q=m.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const ve=["Playground","Default","VisualTest"];export{h as Default,l as Playground,m as VisualTest,ve as __namedExportsOrder,ye as default};
