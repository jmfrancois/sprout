import{j as e}from"./jsx-runtime-CfatFE5O.js";import{f as o}from"./index-B-tj2W5I.js";import{g as y}from"./figma-hO1OATkS.js";import{A as n}from"./AlertInline-CbyxSwy9.js";import{B as l}from"./Box-25vWnmJ9.js";import{B as a}from"./Button-C-WoFXIp.js";const v={title:"Components/AlertInline",component:n},t={render:({...i})=>e.jsx(l,{"data-testid":"wrapper",width:"365px",children:e.jsx(n,{...i,actionBar:e.jsx(a,{variant:"default",label:"Learn more"})})}),parameters:{...y("alertInline"),chromatic:{disableSnapshot:!0}},args:{severity:"info",title:"Components/Sed sed fermentum lacus. Integer consequat ut arcu non molestie",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis, tellus laoreet faucibus commodo.",onDismiss:o()},argTypes:{actionBar:{table:{disable:!0}},onDismiss:{table:{disable:!0}}}},s={render:({severity:i,message:x})=>e.jsx(l,{width:"365px","data-testid":"wrapper",p:"s",children:e.jsx(n,{severity:i||"info",message:x})}),args:{message:"Licence will expire in 4 days"},argTypes:{message:{control:{type:"text"}},title:{table:{disable:!0}},width:{control:{type:"text"}},actionbar:{table:{disable:!0}},onDismiss:{table:{disable:!0}},labelDismiss:{table:{disable:!0}}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=20351-2534&t=zfp8iCXBhJ5IIKm5-4"},chromatic:{disableSnapshot:!0}}},r={render:()=>e.jsxs(l,{direction:"col",gap:"m",width:"400px",children:[e.jsx("h2",{children:"Error"}),e.jsx(n,{severity:"error",message:"Password must contain at least one capital letter and one number."}),e.jsx("h2",{children:"Warning"}),e.jsx(n,{severity:"warning",message:"Payment solution currently unavailable"}),e.jsx("h2",{children:"Info"}),e.jsx(n,{severity:"info",message:"Licence will expire in 4 days"}),e.jsx("h2",{children:"Success"}),e.jsx(n,{severity:"success",message:"Invitation sent"}),e.jsx("h2",{children:"With title"}),e.jsx(n,{title:"Invite users",message:"Enter eail addresses to invite new users"}),e.jsx("h2",{children:"With action"}),e.jsx(n,{severity:"error",title:"Connection interrupted",message:"Could not complete request due to lost connection",actionBar:e.jsx(a,{variant:"default",label:"Re-connect"})}),e.jsx("h2",{children:"Is disissable"}),e.jsx(n,{severity:"info",title:"New beta features",message:"Try out new beta features",actionBar:e.jsx(a,{variant:"default",label:"Learn more"}),onDismiss:o()}),e.jsx(n,{message:"Consider a stronger password",severity:"warning",onDismiss:o()}),e.jsx("h2",{children:"Text wrapping"}),e.jsx(n,{severity:"info",title:"Sed sed fermentum lacus. Integer consequat ut arcu non molestie",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis, tellus laoreet faucibus commodo.",actionBar:e.jsx(a,{variant:"default",label:"Learn more"})})]}),parameters:{controls:{disable:!0}}};var m,c,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    ...args
  }: AlertInlineProps) => <Box data-testid="wrapper" width="365px">
      <AlertInline {...args} actionBar={<Button variant="default" label="Learn more" />} />
    </Box>,
  parameters: {
    ...getFigmaStorybookParams("alertInline"),
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    severity: "info",
    title: "Components/Sed sed fermentum lacus. Integer consequat ut arcu non molestie",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis, tellus laoreet faucibus commodo.",
    onDismiss: fn()
  },
  argTypes: {
    actionBar: {
      table: {
        disable: true
      }
    },
    onDismiss: {
      table: {
        disable: true
      }
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    severity,
    message
  }: Partial<AlertInlineProps>) => <Box width="365px" data-testid="wrapper" p="s">
      <AlertInline severity={severity || "info"} message={message} />
    </Box>,
  args: {
    message: "Licence will expire in 4 days"
  },
  argTypes: {
    message: {
      control: {
        type: "text"
      }
    },
    title: {
      table: {
        disable: true
      }
    },
    width: {
      control: {
        type: "text"
      }
    },
    actionbar: {
      table: {
        disable: true
      }
    },
    onDismiss: {
      table: {
        disable: true
      }
    },
    labelDismiss: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=20351-2534&t=zfp8iCXBhJ5IIKm5-4"
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,h,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Box direction="col" gap="m" width="400px">
      <h2>Error</h2>
      <AlertInline severity="error" message="Password must contain at least one capital letter and one number." />
      <h2>Warning</h2>
      <AlertInline severity="warning" message="Payment solution currently unavailable" />
      <h2>Info</h2>
      <AlertInline severity="info" message="Licence will expire in 4 days" />
      <h2>Success</h2>
      <AlertInline severity="success" message="Invitation sent" />
      <h2>With title</h2>
      <AlertInline title="Invite users" message="Enter eail addresses to invite new users" />
      <h2>With action</h2>
      <AlertInline severity="error" title="Connection interrupted" message="Could not complete request due to lost connection" actionBar={<Button variant="default" label="Re-connect" />} />
      <h2>Is disissable</h2>
      <AlertInline severity="info" title="New beta features" message="Try out new beta features" actionBar={<Button variant="default" label="Learn more" />} onDismiss={fn()} />
      <AlertInline message="Consider a stronger password" severity="warning" onDismiss={fn()} />
      <h2>Text wrapping</h2>
      <AlertInline severity="info" title="Sed sed fermentum lacus. Integer consequat ut arcu non molestie" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis, tellus laoreet faucibus commodo." actionBar={<Button variant="default" label="Learn more" />} />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const I=["Playground","Minimal","VisualTest"],C=Object.freeze(Object.defineProperty({__proto__:null,Minimal:s,Playground:t,VisualTest:r,__namedExportsOrder:I,default:v},Symbol.toStringTag,{value:"Module"}));export{s as M,t as P,C as S};
