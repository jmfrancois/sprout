import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{g as j}from"./figma-DdOIv0jn.js";import{P as r}from"./ProgressBar-Dw0F0NA7.js";import{B as i,a}from"./Box-Bo_17ADl.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Tooltip-Cu6rj0j6.js";import"./floating-ui.react-BqcbUs5N.js";import"./index-CS4BWtGh.js";import"./useId-Nx1NlIzw.js";const D={title:"Components/ProgressBar",parameters:j("progress","bar")},P={contained:{type:"boolean"},percent:{min:0,max:100},label:{type:"text"},"aria-label":{type:"text"},tooltip:{type:"text"},infinite:{table:{disable:!0}}},n={render:l=>e.jsx(r,{...l}),args:{percent:75,"aria-label":"Already 75% loaded !"},argTypes:P,parameters:{chromatic:{disableSnapshot:!0}}},s={render:l=>e.jsx(r,{...l}),args:{tooltip:"Hey !"},argTypes:P,parameters:{chromatic:{disableSnapshot:!0}}},o={render:()=>e.jsx(i,{p:"3xl",children:e.jsxs(i,{border:"default",width:"400px",direction:"col",gap:"l",p:"xl",children:[e.jsx(r,{id:"my-progress",contained:!0,percent:75,"aria-label":"Loading in progress 75% !"}),e.jsx(r,{id:"my-infinite-progress",contained:!0,"aria-label":"Please wait until the current task is done"})]})}),parameters:{chromatic:{disableSnapshot:!0},control:{disable:!0}}},t={render:()=>e.jsxs(i,{direction:"col",children:[e.jsx(r,{percent:50,"aria-label":"Wait for the end"}),e.jsx("h2",{className:a({font:"heading_m",color:"default"}),children:"Contained"}),e.jsxs(i,{border:"default",width:"500px",direction:"col",gap:"l",p:"xl",children:[e.jsx("h3",{className:a({font:"heading_m",color:"default"}),children:"aria-label"}),e.jsx(r,{contained:!0,percent:75,"aria-label":"Loading in progress 75% !"}),e.jsx("h3",{className:a({font:"heading_m",color:"default"}),children:"label"}),e.jsx(r,{contained:!0,percent:75,label:"Loading in progress 75% !"}),e.jsx("h3",{className:a({font:"heading_m",color:"default"}),children:"tooltip"}),e.jsx(r,{contained:!0,percent:75,tooltip:"Loading in progress 75% !"}),e.jsx("h3",{className:a({font:"heading_m",color:"default"}),children:"Undetermined"}),e.jsx(r,{contained:!0,"aria-label":"Please wait until the current task is done"})]})]}),parameters:{control:{disable:!0}}};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: ProgressBarProps) => <ProgressBar {...args} />,
  args: {
    percent: 75,
    "aria-label": "Already 75% loaded !"
  },
  argTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: ProgressBarProps) => <ProgressBar {...args} />,
  args: {
    tooltip: "Hey !"
  },
  argTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,x,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Box p="3xl">
      <Box border="default" width="400px" direction="col" gap="l" p="xl">
        <ProgressBar id="my-progress" contained percent={75} aria-label="Loading in progress 75% !" />
        <ProgressBar id="my-infinite-progress" contained aria-label="Please wait until the current task is done" />
      </Box>
    </Box>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    control: {
      disable: true
    }
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,y,B;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Box direction="col">
      <ProgressBar percent={50} aria-label="Wait for the end" />
      <h2 className={getTypographyClassName({
      font: "heading_m",
      color: "default"
    })}>Contained</h2>
      <Box border="default" width="500px" direction="col" gap="l" p="xl">
        <h3 className={getTypographyClassName({
        font: "heading_m",
        color: "default"
      })}>aria-label</h3>
        <ProgressBar contained percent={75} aria-label="Loading in progress 75% !" />
        <h3 className={getTypographyClassName({
        font: "heading_m",
        color: "default"
      })}>label</h3>
        <ProgressBar contained percent={75} label="Loading in progress 75% !" />
        <h3 className={getTypographyClassName({
        font: "heading_m",
        color: "default"
      })}>tooltip</h3>
        <ProgressBar contained percent={75} tooltip="Loading in progress 75% !" />
        <h3 className={getTypographyClassName({
        font: "heading_m",
        color: "default"
      })}>Undetermined</h3>
        <ProgressBar contained aria-label="Please wait until the current task is done" />
      </Box>
    </Box>,
  parameters: {
    control: {
      disable: true
    }
  }
}`,...(B=(y=t.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const E=["Determined","Undetermined","Contained","VisualTest"];export{o as Contained,n as Determined,s as Undetermined,t as VisualTest,E as __namedExportsOrder,D as default};
