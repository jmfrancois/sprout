import{j as e}from"./jsx-runtime-CfatFE5O.js";import{g as d}from"./figma-hO1OATkS.js";import{B as t}from"./Badge-CDdH9Zu0.js";import{B as i}from"./Box-25vWnmJ9.js";import{A as n}from"./Avatar-CswkKgGg.js";const A={title:"Components/Badge",parameters:d("badge")},g={chromatic:{disableSnapshot:!0}},o={render:({...r})=>e.jsx(i,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{type:"dot",...r})}),argTypes:{color:{control:{type:"select"},options:[void 0,"info","success","warning","danger"]}},parameters:{...d("badge","dot"),...g}},a={render:({...r})=>e.jsx(i,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{type:"number",...r})}),args:{text:"1"},argTypes:{color:{control:{type:"select"},options:[void 0,"info","success","warning","danger"]},text:{control:{type:"text"}}},parameters:{...d("badge","number"),...g}},s={render:({...r})=>e.jsx(i,{"data-testid":"wrapper",width:"fit-content",p:"s",children:e.jsx(t,{...r})}),args:{text:"1"},argTypes:{type:{control:{type:"select"},options:["dot","number"]},text:{control:{type:"text"}},color:{control:{type:"select"},options:[void 0,"info","success","warning","danger"]}},parameters:g},c={render:r=>e.jsx("div",{children:e.jsx(n,{size:"s",text:"OC",badge:e.jsx(t,{...r})})}),parameters:{...d("badge","avatar"),...g},args:{text:"1",type:"number",color:"danger"},argTypes:{text:{control:{type:"text"}},type:{control:{type:"select"},options:["dot","number"]}}},p={render:()=>e.jsxs(i,{"data-testid":"wrapper",width:"fit-content",p:"s",direction:"col",gap:"m",children:[e.jsx("h2",{children:"Dot"}),e.jsx(t,{}),e.jsx(t,{color:"info"}),e.jsx(t,{color:"danger"}),e.jsx(t,{color:"warning"}),e.jsx(t,{color:"success"}),e.jsx("h2",{children:"Number"}),e.jsx(t,{text:"1",type:"number"}),e.jsx(t,{text:"1",type:"number",color:"info"}),e.jsx(t,{text:"1",type:"number",color:"danger"}),e.jsx(t,{text:"1",type:"number",color:"warning"}),e.jsx(t,{text:"1",type:"number",color:"success"}),e.jsx("h2",{children:"With Avatar"}),e.jsx(n,{size:"xs",text:"OC",badge:e.jsx(t,{color:"info"})}),e.jsx(n,{size:"s",text:"OC",badge:e.jsx(t,{color:"info"})}),e.jsx(n,{text:"OC",badge:e.jsx(t,{color:"info"})}),e.jsx(n,{size:"l",text:"OC",badge:e.jsx(t,{color:"info"})}),e.jsx(n,{size:"xl",text:"OC",badge:e.jsx(t,{color:"info"})})]})};var l,x,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    ...props
  }: BadgeProps) => <Box p="m" data-testid="wrapper" width="fit-content">
      <Badge type="dot" {...props} />
    </Box>,
  argTypes: {
    color: {
      control: {
        type: "select"
      },
      options: [undefined, "info", "success", "warning", "danger"]
    }
  },
  parameters: {
    ...getFigmaStorybookParams("badge", "dot"),
    ...parameters
  }
}`,...(m=(x=o.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var u,y,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    ...props
  }: BadgeProps) => <Box p="m" data-testid="wrapper" width="fit-content">
      <Badge type="number" {...props} />
    </Box>,
  args: {
    text: "1"
  },
  argTypes: {
    color: {
      control: {
        type: "select"
      },
      options: [undefined, "info", "success", "warning", "danger"]
    },
    text: {
      control: {
        type: "text"
      }
    }
  },
  parameters: {
    ...getFigmaStorybookParams("badge", "number"),
    ...parameters
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,j,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ({
    ...props
  }: BadgeProps) => <Box data-testid="wrapper" width="fit-content" p="s">
      <Badge {...props} />
    </Box>,
  args: {
    text: "1"
  },
  argTypes: {
    type: {
      control: {
        type: "select"
      },
      options: ["dot", "number"]
    },
    text: {
      control: {
        type: "text"
      }
    },
    color: {
      control: {
        type: "select"
      },
      options: [undefined, "info", "success", "warning", "danger"]
    }
  },
  parameters
}`,...(B=(j=s.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var h,w,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <div>
      <Avatar size="s" text="OC" badge={<Badge {...props} />} />
    </div>,
  parameters: {
    ...getFigmaStorybookParams("badge", "avatar"),
    ...parameters
  },
  args: {
    text: "1",
    type: "number",
    color: "danger"
  },
  argTypes: {
    text: {
      control: {
        type: "text"
      }
    },
    type: {
      control: {
        type: "select"
      },
      options: ["dot", "number"]
    }
  }
}`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var O,S,C;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Box data-testid="wrapper" width="fit-content" p="s" direction="col" gap="m">
      <h2>Dot</h2>
      <Badge />
      <Badge color="info" />
      <Badge color="danger" />
      <Badge color="warning" />
      <Badge color="success" />

      <h2>Number</h2>
      <Badge text="1" type="number" />
      <Badge text="1" type="number" color="info" />
      <Badge text="1" type="number" color="danger" />
      <Badge text="1" type="number" color="warning" />
      <Badge text="1" type="number" color="success" />

      <h2>With Avatar</h2>
      <Avatar size="xs" text="OC" badge={<Badge color="info" />} />
      <Avatar size="s" text="OC" badge={<Badge color="info" />} />
      <Avatar text="OC" badge={<Badge color="info" />} />
      <Avatar size="l" text="OC" badge={<Badge color="info" />} />
      <Avatar size="xl" text="OC" badge={<Badge color="info" />} />
    </Box>
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const z=["Dot","Number","Playground","WithAvatar","VisualTest"],k=Object.freeze(Object.defineProperty({__proto__:null,Dot:o,Number:a,Playground:s,VisualTest:p,WithAvatar:c,__namedExportsOrder:z,default:A},Symbol.toStringTag,{value:"Module"}));export{o as D,a as N,k as S};
