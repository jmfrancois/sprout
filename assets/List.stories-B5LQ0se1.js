import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{g,c as C,B as j}from"./Box-Bo_17ADl.js";import{D}from"./Divider-BKfKUvzF.js";import{C as x}from"./Checkbox-CgutXkj_.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./HelperText-CyyCsV2o.js";import"./useId-Nx1NlIzw.js";import"./useControl-BksuLBKc.js";const w="_list_pxr88_1",y="_item_pxr88_10",H="_item_divider_pxr88_25",V="_item_interactive_pxr88_29",N="_item_selected_pxr88_57",B="_item_disabled_pxr88_73",n={list:w,item:y,item_divider:H,item_interactive:V,item_selected:N,item_disabled:B},c=({children:a,dense:d,gap:s,...o})=>e.jsx("ul",{...o,...g({gap:s,className:n.list}),"data-dense":d,children:a});c.__docgenInfo={description:"",methods:[],displayName:"List",props:{dense:{required:!1,tsType:{name:"boolean"},description:""}}};const l=()=>e.jsx("li",{className:n.item_divider,children:e.jsx(D,{})});l.__docgenInfo={description:"",methods:[],displayName:"ListDivider"};const t=({selected:a,onClick:d,interactive:s,disabled:o,children:m,...b})=>{let p=m;return s&&(p=e.jsx("button",{type:"button",onClick:d,className:n.item_interactive,disabled:o,children:m})),e.jsx("li",{...b,"data-interactive":!!s,className:C(n.item,{[n.item_selected]:a,[n.item_disabled]:o}),children:p})};t.displayName="ListItem";t.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{selected:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},interactive:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const O={title:"Components/List",component:c},L=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 3V13C16 13.5523 15.5523 14 15 14H1C0.447715 14 0 13.5523 0 13V3C0 2.44772 0.447715 2 1 2H15C15.5523 2 16 2.44772 16 3ZM1.70801 13H14.291L9.58801 8.29601L8.97619 8.82181C8.45191 9.2712 7.69489 9.30116 7.13957 8.91169L7.02382 8.82181L6.41001 8.29601L1.70801 13ZM10.35 7.644L15 12.295V3.658L10.35 7.644ZM1 12.294L5.649 7.643L1 3.658V12.294ZM1.76801 3L7.67461 8.06255C7.83845 8.20298 8.07047 8.22054 8.25136 8.11521L8.3254 8.06255L14.231 3H1.76801Z",fill:"currentColor"})}),M=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 5.375L11.5556 1H4.44444L0 5.375V13.25C0 14.125 0.888889 15 1.77778 15H14.2222C15.1111 15 16 14.125 16 13.25V5.375ZM11.1111 1.875L14.25 5H1.75L4.8889 1.875H11.1111ZM15 6V13C15 13.5523 14.5523 14 14 14H2C1.44772 14 1 13.5523 1 13V6H15ZM9.93835 8.91781C10 8.84996 10 8.7261 10 8.5C10 8.2739 10 8.15004 9.93835 8.08219C9.86368 8 9.69853 8 9.33333 8H6.66667C6.30147 8 6.13632 8 6.06165 8.08219C6 8.15004 6 8.2739 6 8.5C6 8.7261 6 8.84996 6.06165 8.91781C6.13632 9 6.30147 9 6.66667 9H9.33333C9.69853 9 9.86368 9 9.93835 8.91781Z",fill:"#404040"})}),i=({dense:a,gap:d,interactive:s})=>e.jsx(j,{p:"s",direction:"col",gap:"s",width:"300px","data-testid":"wrapper",children:e.jsxs(c,{gap:d,dense:a,children:[e.jsxs(t,{selected:!0,interactive:s,children:[e.jsx(x,{}),"item 1"]}),e.jsxs(t,{interactive:s,children:[e.jsx(x,{}),"item 2"]}),e.jsx(l,{}),e.jsxs(t,{interactive:s,children:[e.jsx(M,{}),"Inbox"]}),e.jsxs(t,{interactive:s,children:[e.jsx(L,{}),"Draft"]}),e.jsxs(t,{disabled:!0,interactive:s,children:[e.jsx(L,{}),"Disabled"]})]})});i.args={interactive:!0};i.argTypes={gap:{control:{type:"select"},options:["0","s","m","l","xl"]},dense:{control:{type:"boolean"}}};i.parameters={chromatic:{disableSnapshot:!0}};const r=()=>e.jsx(j,{p:"s",direction:"col",gap:"s",width:"300px",children:e.jsxs(c,{gap:"s",children:[e.jsx(t,{interactive:!0,children:"Enabled"}),e.jsx(t,{interactive:!0,"data-state":"hover",children:"Hover"}),e.jsx(t,{interactive:!0,"data-state":"pressed",children:"Pressed"}),e.jsx(t,{interactive:!0,"data-state":"focus",children:"Focus"}),e.jsx(t,{disabled:!0,children:"Disabled"}),e.jsx(t,{interactive:!0,selected:!0,children:"Selected"}),e.jsx(t,{children:"Divider"}),e.jsx(l,{}),e.jsx(t,{children:"Divider"})]})});r.parameters={pseudo:{hover:'[data-state="hover"] > button',active:'[data-state="pressed"] > button',focusVisible:'[data-state="focus"] > button'}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var v,u,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`({
  dense,
  gap,
  interactive
}: Partial<ListProps> & Pick<ListItemProps, "interactive">) => <Box p="s" direction="col" gap="s" width="300px" data-testid="wrapper">
    <List gap={gap} dense={dense}>
      <ListItem selected interactive={interactive}>
        <Checkbox />
        item 1
      </ListItem>
      <ListItem interactive={interactive}>
        <Checkbox />
        item 2
      </ListItem>
      <ListDivider />
      <ListItem interactive={interactive}>
        <Inbox />
        Inbox
      </ListItem>
      <ListItem interactive={interactive}>
        <Draft />
        Draft
      </ListItem>
      <ListItem disabled interactive={interactive}>
        <Draft />
        Disabled
      </ListItem>
    </List>
  </Box>`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var _,I,f;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Box p="s" direction="col" gap="s" width="300px">
    <List gap="s">
      <ListItem interactive>Enabled</ListItem>
      <ListItem interactive data-state="hover">
        Hover
      </ListItem>
      <ListItem interactive data-state="pressed">
        Pressed
      </ListItem>
      <ListItem interactive data-state="focus">
        Focus
      </ListItem>
      <ListItem disabled>Disabled</ListItem>
      <ListItem interactive selected>
        Selected
      </ListItem>
      <ListItem>Divider</ListItem>
      <ListDivider />
      <ListItem>Divider</ListItem>
    </List>
  </Box>`,...(f=(I=r.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const z=["Default","VisualTest"];export{i as Default,r as VisualTest,z as __namedExportsOrder,O as default};
