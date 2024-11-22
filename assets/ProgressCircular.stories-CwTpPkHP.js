import{j as r}from"./jsx-runtime-CfatFE5O.js";import{g as l}from"./figma-hO1OATkS.js";import{P as o}from"./ProgressCircular-Bpk7vv8H.js";import{B as e}from"./Box-25vWnmJ9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./a11yProps-Bd_FexwF.js";const P={title:"Components/ProgressCircular",parameters:l("progress","circular")},s={render:d=>r.jsx(e,{"data-testid":"wrapper",width:"fit-content",p:"s",children:r.jsx(o,{...d})}),args:{size:"m",percent:void 0},argTypes:{size:{options:[void 0,"s","m","l"]},percent:{control:{type:"number",min:0,max:100}}},parameters:{chromatic:{disableSnapshot:!0}}},n={render:()=>r.jsxs(e,{gap:"m",direction:"col",children:[r.jsxs(e,{direction:"row",gap:"m",alignItems:"center",children:[r.jsx("span",{children:'size="s"'}),r.jsx(o,{size:"s"})]}),r.jsxs(e,{direction:"row",gap:"m",alignItems:"center",children:[r.jsx("span",{children:'size="m"'}),r.jsx(o,{size:"m"})]}),r.jsxs(e,{direction:"row",gap:"m",alignItems:"center",children:[r.jsx("span",{children:'size="l"'}),r.jsx(o,{size:"l"})]})]}),parameters:{controls:{disable:!0}}};var a,t,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (props: ProgressCircularProps) => <Box data-testid="wrapper" width="fit-content" p="s">
      <ProgressCircular {...props} />
    </Box>,
  args: {
    size: "m",
    percent: undefined
  },
  argTypes: {
    size: {
      options: [undefined, "s", "m", "l"]
    },
    percent: {
      control: {
        type: "number",
        min: 0,
        max: 100
      }
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var p,c,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Box gap="m" direction="col">
      <Box direction="row" gap="m" alignItems="center">
        <span>size="s"</span>
        <ProgressCircular size="s" />
      </Box>
      <Box direction="row" gap="m" alignItems="center">
        <span>size="m"</span>
        <ProgressCircular size="m" />
      </Box>
      <Box direction="row" gap="m" alignItems="center">
        <span>size="l"</span>
        <ProgressCircular size="l" />
      </Box>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const w=["Playground","VisualTests"];export{s as Playground,n as VisualTests,w as __namedExportsOrder,P as default};
