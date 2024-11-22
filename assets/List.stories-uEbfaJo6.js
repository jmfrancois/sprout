import{j as e}from"./jsx-runtime-CfatFE5O.js";import{s as h,L as r,a as t}from"./ListItem-D4xYxLjM.js";import{D as C}from"./Divider-Dv0yWk4k.js";import{M as s}from"./Menu-Bnh9TI_6.js";import{B as L}from"./Box-25vWnmJ9.js";import{C as a}from"./Checkbox-B1rHGUY9.js";const o=()=>e.jsx("li",{className:h.item_divider,children:e.jsx(C,{role:"separator"})});o.__docgenInfo={description:"",methods:[],displayName:"ListDivider"};const I={title:"Components/List",component:r},l=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 3V13C16 13.5523 15.5523 14 15 14H1C0.447715 14 0 13.5523 0 13V3C0 2.44772 0.447715 2 1 2H15C15.5523 2 16 2.44772 16 3ZM1.70801 13H14.291L9.58801 8.29601L8.97619 8.82181C8.45191 9.2712 7.69489 9.30116 7.13957 8.91169L7.02382 8.82181L6.41001 8.29601L1.70801 13ZM10.35 7.644L15 12.295V3.658L10.35 7.644ZM1 12.294L5.649 7.643L1 3.658V12.294ZM1.76801 3L7.67461 8.06255C7.83845 8.20298 8.07047 8.22054 8.25136 8.11521L8.3254 8.06255L14.231 3H1.76801Z",fill:"currentColor"})}),j=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 5.375L11.5556 1H4.44444L0 5.375V13.25C0 14.125 0.888889 15 1.77778 15H14.2222C15.1111 15 16 14.125 16 13.25V5.375ZM11.1111 1.875L14.25 5H1.75L4.8889 1.875H11.1111ZM15 6V13C15 13.5523 14.5523 14 14 14H2C1.44772 14 1 13.5523 1 13V6H15ZM9.93835 8.91781C10 8.84996 10 8.7261 10 8.5C10 8.2739 10 8.15004 9.93835 8.08219C9.86368 8 9.69853 8 9.33333 8H6.66667C6.30147 8 6.13632 8 6.06165 8.08219C6 8.15004 6 8.2739 6 8.5C6 8.7261 6 8.84996 6.06165 8.91781C6.13632 9 6.30147 9 6.66667 9H9.33333C9.69853 9 9.86368 9 9.93835 8.91781Z",fill:"#404040"})}),i={render:b=>e.jsx(L,{p:"s",direction:"col",gap:"s",width:"300px","data-testid":"wrapper",children:e.jsxs(r,{...b,children:[e.jsxs(t,{selected:!0,onClick:()=>{},children:[e.jsx(a,{"aria-label":"select item 1"}),"item 1"]}),e.jsxs(t,{onClick:()=>{},children:[e.jsx(a,{"aria-label":"select item 2"}),"item 2"]}),e.jsx(o,{}),e.jsxs(t,{onClick:()=>{},children:[e.jsx(j,{}),"Inbox"]}),e.jsxs(t,{onClick:()=>{},children:[e.jsx(l,{}),"Draft"]}),e.jsxs(t,{disabled:!0,onClick:()=>{},children:[e.jsx(l,{}),"Disabled"]})]})}),args:{},argTypes:{gap:{control:{type:"select"},options:["0","s","m","l","xl"]},dense:{control:{type:"boolean"}}},parameters:{chromatic:{disableSnapshot:!0}}},n={render:()=>e.jsx(L,{p:"s",direction:"col",gap:"s",width:"300px",children:e.jsxs(r,{gap:"s",children:[e.jsx(t,{onClick:()=>{},children:"Enabled"}),e.jsx(t,{onClick:()=>{},"data-state":"hover",children:"Hover"}),e.jsx(t,{onClick:()=>{},"data-state":"pressed",children:"Pressed"}),e.jsx(t,{onClick:()=>{},"data-state":"focus",children:"Focus"}),e.jsx(t,{onClick:()=>{},disabled:!0,children:"Disabled"}),e.jsx(t,{onClick:()=>{},selected:!0,children:"Selected"}),e.jsx(t,{children:"Non interactive"}),e.jsx(o,{}),e.jsx(s.Trigger,{menu:e.jsxs(e.Fragment,{children:[e.jsx(s.GroupLabel,{label:"User"}),e.jsx(s.Item,{label:"Profile",disabled:!0}),e.jsx(s.Item,{label:"Logout"}),e.jsx(s.Item,{label:"Reload"}),e.jsx(s.Item,{label:"Share"})]}),children:e.jsx(t,{children:"Menu Integration"})})]})}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-state="hover"] > button',active:'[data-state="pressed"] > button',focusVisible:'[data-state="focus"] > button'}}};var d,c,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Box p="s" direction="col" gap="s" width="300px" data-testid="wrapper">
      <List {...props}>
        <ListItem selected onClick={() => {}}>
          <Checkbox aria-label="select item 1" />
          item 1
        </ListItem>
        <ListItem onClick={() => {}}>
          <Checkbox aria-label="select item 2" />
          item 2
        </ListItem>
        <ListDivider />
        <ListItem onClick={() => {}}>
          <Inbox />
          Inbox
        </ListItem>
        <ListItem onClick={() => {}}>
          <Draft />
          Draft
        </ListItem>
        <ListItem disabled onClick={() => {}}>
          <Draft />
          Disabled
        </ListItem>
      </List>
    </Box>,
  args: {},
  argTypes: {
    gap: {
      control: {
        type: "select"
      },
      options: ["0", "s", "m", "l", "xl"]
    },
    dense: {
      control: {
        type: "boolean"
      }
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,x,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Box p="s" direction="col" gap="s" width="300px">
      <List gap="s">
        <ListItem onClick={() => {}}>Enabled</ListItem>
        <ListItem onClick={() => {}} data-state="hover">
          Hover
        </ListItem>
        <ListItem onClick={() => {}} data-state="pressed">
          Pressed
        </ListItem>
        <ListItem onClick={() => {}} data-state="focus">
          Focus
        </ListItem>
        <ListItem onClick={() => {}} disabled>
          Disabled
        </ListItem>
        <ListItem onClick={() => {}} selected>
          Selected
        </ListItem>
        <ListItem>Non interactive</ListItem>
        <ListDivider />
        <Menu.Trigger menu={<>
              <Menu.GroupLabel label="User" />
              <Menu.Item label="Profile" disabled />
              <Menu.Item label="Logout" />
              <Menu.Item label="Reload" />
              <Menu.Item label="Share" />
            </>}>
          <ListItem>Menu Integration</ListItem>
        </Menu.Trigger>
      </List>
    </Box>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-state="hover"] > button',
      active: '[data-state="pressed"] > button',
      focusVisible: '[data-state="focus"] > button'
    }
  }
}`,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const g=["Default","VisualTest"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:i,VisualTest:n,__namedExportsOrder:g,default:I},Symbol.toStringTag,{value:"Module"}));export{i as D,H as S};
