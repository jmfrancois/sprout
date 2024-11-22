import{j as n}from"./jsx-runtime-CfatFE5O.js";import{f as i}from"./index-B-tj2W5I.js";import{r as y}from"./index-ClcD9ViR.js";import{I as A,C as w}from"./AlertInlineIcons-CxMfpKbN.js";import{I as C}from"./IconButton-B8GWHSxh.js";import{B as f}from"./Button-C-WoFXIp.js";import{B as b}from"./Box-25vWnmJ9.js";const k="_alert_banner_ievhi_1",T="_alert_banner__contents_ievhi_36",q="_alert_banner__actions_ievhi_40",o={alert_banner:k,alert_banner__contents:T,alert_banner__actions:q},e=y.forwardRef(({variant:a,content:v,children:x,title:D,action:g,dismissLabel:B,onClickDismiss:l,...j},h)=>n.jsxs("div",{role:"status","aria-live":"polite",...j,"data-variant":a||"info",className:o.alert_banner,ref:h,children:[A[a||"info"],n.jsx("p",{className:o.alert_banner__contents,children:v}),x,n.jsxs("div",{className:o.alert_banner__actions,children:[g||null,l&&n.jsx(C,{variant:"quiet",onClick:()=>l(),label:B||"Dismiss",icon:n.jsx(w,{})})]})]}));e.displayName="AlertBanner";e.__docgenInfo={description:"",methods:[],displayName:"AlertBanner",props:{action:{required:!1,tsType:{name:"ReactNode"},description:""},content:{required:!0,tsType:{name:"string"},description:""},dismissLabel:{required:!1,tsType:{name:"string"},description:""},onClickDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"error" | "warning" | "success" | "info"',elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'},{name:"literal",value:'"info"'}]},description:""}}};const P={title:"Components/AlertBanner",component:e,parameters:{}},S=i(),r={render:({...a})=>n.jsx(b,{p:"m","data-testid":"wrapper",width:"400px",children:n.jsx(e,{...a,action:n.jsx(f,{variant:"quiet",label:"Action",onClick:S})})}),args:{content:"Alert content",variant:"info",onClickDismiss:i()},argTypes:{variant:{control:{type:"select",options:[void 0,"info","warning","error","success"]}},onClickDismiss:{table:{disable:!0}},action:{table:{disable:!0}}},parameters:{chromatic:{disableSnapshot:!0}}},s={content:"Alert content",action:n.jsx(f,{variant:"quiet",label:"Action",onClick:i()}),onClickDismiss:i()},t={render:()=>n.jsxs(b,{p:"m",gap:"m",direction:"col",width:"400px",children:[n.jsx(e,{...s,variant:"info"}),n.jsx(e,{...s,variant:"success"}),n.jsx(e,{...s,variant:"warning"}),n.jsx(e,{...s,variant:"error"})]}),parameters:{controls:{disable:!0}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => <Box p="m" data-testid="wrapper" width="400px">
      <AlertBanner {...props} action={<Button variant="quiet" label="Action" onClick={onClickAction} />} />
    </Box>,
  args: {
    content: "Alert content",
    variant: "info",
    onClickDismiss: fn()
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [undefined, "info", "warning", "error", "success"]
      }
    },
    onClickDismiss: {
      table: {
        disable: true
      }
    },
    action: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,_;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Box p="m" gap="m" direction="col" width="400px">
      <AlertBanner {...defaultProps} variant="info" />
      <AlertBanner {...defaultProps} variant="success" />
      <AlertBanner {...defaultProps} variant="warning" />
      <AlertBanner {...defaultProps} variant="error" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(u=t.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};const N=["Playground","VisualTest"],M=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,VisualTest:t,__namedExportsOrder:N,default:P},Symbol.toStringTag,{value:"Module"}));export{r as P,M as S};
