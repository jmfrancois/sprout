import{j as e}from"./jsx-runtime-CfatFE5O.js";import{g as C}from"./figma-hO1OATkS.js";import{A as t}from"./Avatar-CswkKgGg.js";import{B as a}from"./Box-25vWnmJ9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=""+new URL("image-CprsGvi_.png",import.meta.url).href,S={title:"Components/Avatar",parameters:C("avatar")},x={chromatic:{disableSnapshot:!0}},s=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("g",{id:"icons/outline/person",children:e.jsx("path",{id:"Union",fillRule:"evenodd",clipRule:"evenodd",d:"M8 8C5.79086 8 4 6.20914 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4C12 6.20914 10.2091 8 8 8ZM8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7ZM6 9H10C12.7614 9 15 11.2386 15 14V16H1V14C1 11.2386 3.23858 9 6 9ZM6 10C3.79086 10 2 11.7909 2 14V15H14V14C14 11.7909 12.2091 10 10 10H6Z",fill:"currentColor"})})}),o={render:r=>e.jsx(a,{p:"s","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{...r})}),args:{text:"OC"},argTypes:{size:{control:{type:"select"},options:["xs","s","default","l","xl"]},text:{control:{type:"text"}},img:{table:{disable:!0}},icon:{table:{disable:!0}}},parameters:x},i={render:r=>e.jsx(a,{p:"s","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{...r})}),args:{img:{alt:"Avatar",src:n}},argTypes:{size:{control:{type:"select"},options:["xs","s","default","l","xl"]},img:{control:{type:"object"}},text:{table:{disable:!0}}},parameters:x},l={render:r=>e.jsx(a,{p:"s","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{...r})}),args:{icon:e.jsx(s,{})},argTypes:{size:{control:{type:"select"},options:["xs","s","default","l","xl"]},icon:{table:{disable:!0}},img:{table:{disable:!0}},text:{table:{disable:!0}}},parameters:x},c={render:()=>e.jsxs(a,{p:"s",direction:"col",gap:"m",children:[e.jsx("h2",{children:"Text"}),e.jsx(t,{text:"OC"}),e.jsx("h2",{children:"Image"}),e.jsx(t,{img:{alt:"Avatar",src:n}}),e.jsx("h2",{children:"Icon"}),e.jsx(t,{icon:e.jsx(s,{})}),e.jsx("h2",{children:"Sizes"}),e.jsxs(a,{gap:"m",p:"m",children:[e.jsx(t,{size:"xs",text:"xs"}),e.jsx(t,{size:"s",text:"s"}),e.jsx(t,{text:"m"}),e.jsx(t,{size:"l",text:"l"}),e.jsx(t,{size:"xl",text:"xl"})]}),e.jsxs(a,{gap:"m",p:"m",children:[e.jsx(t,{size:"xs",img:{alt:"Avatar",src:n}}),e.jsx(t,{size:"s",img:{alt:"Avatar",src:n}}),e.jsx(t,{img:{alt:"Avatar",src:n}}),e.jsx(t,{size:"l",img:{alt:"Avatar",src:n}}),e.jsx(t,{size:"xl",img:{alt:"Avatar",src:n}})]}),e.jsxs(a,{gap:"m",p:"m",children:[e.jsx(t,{size:"xs",icon:e.jsx(s,{})}),e.jsx(t,{size:"s",icon:e.jsx(s,{})}),e.jsx(t,{icon:e.jsx(s,{})}),e.jsx(t,{size:"l",icon:e.jsx(s,{})}),e.jsx(t,{size:"xl",icon:e.jsx(s,{})})]})]}),parameters:{controls:{disable:!0}}};var p,m,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (props: AvatarProps) => <Box p="s" data-testid="wrapper" width="fit-content">
      <Avatar {...props} />
    </Box>,
  args: {
    text: "OC"
  },
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["xs", "s", "default", "l", "xl"]
    },
    text: {
      control: {
        type: "text"
      }
    },
    img: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    }
  },
  parameters
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,v,j;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (props: AvatarProps) => <Box p="s" data-testid="wrapper" width="fit-content">
      <Avatar {...props} />
    </Box>,
  args: {
    img: {
      alt: "Avatar",
      src
    }
  },
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["xs", "s", "default", "l", "xl"]
    },
    img: {
      control: {
        type: "object"
      }
    },
    text: {
      table: {
        disable: true
      }
    }
  },
  parameters
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var u,A,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (props: AvatarProps) => <Box p="s" data-testid="wrapper" width="fit-content">
      <Avatar {...props} />
    </Box>,
  args: {
    icon: <IconDemo />
  },
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["xs", "s", "default", "l", "xl"]
    },
    icon: {
      table: {
        disable: true
      }
    },
    img: {
      table: {
        disable: true
      }
    },
    text: {
      table: {
        disable: true
      }
    }
  },
  parameters
}`,...(h=(A=l.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var z,b,f;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Box p="s" direction="col" gap="m">
      <h2>Text</h2>
      <Avatar text="OC" />
      <h2>Image</h2>
      <Avatar img={{
      alt: "Avatar",
      src
    }} />
      <h2>Icon</h2>
      <Avatar icon={<IconDemo />} />
      <h2>Sizes</h2>
      <Box gap="m" p="m">
        <Avatar size="xs" text="xs" />
        <Avatar size="s" text="s" />
        <Avatar text="m" />
        <Avatar size="l" text="l" />
        <Avatar size="xl" text="xl" />
      </Box>
      <Box gap="m" p="m">
        <Avatar size="xs" img={{
        alt: "Avatar",
        src
      }} />
        <Avatar size="s" img={{
        alt: "Avatar",
        src
      }} />
        <Avatar img={{
        alt: "Avatar",
        src
      }} />
        <Avatar size="l" img={{
        alt: "Avatar",
        src
      }} />
        <Avatar size="xl" img={{
        alt: "Avatar",
        src
      }} />
      </Box>
      <Box gap="m" p="m">
        <Avatar size="xs" icon={<IconDemo />} />
        <Avatar size="s" icon={<IconDemo />} />
        <Avatar icon={<IconDemo />} />
        <Avatar size="l" icon={<IconDemo />} />
        <Avatar size="xl" icon={<IconDemo />} />
      </Box>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const V=["Text","Img","Icon","VisualTest"];export{l as Icon,i as Img,o as Text,c as VisualTest,V as __namedExportsOrder,S as default};
