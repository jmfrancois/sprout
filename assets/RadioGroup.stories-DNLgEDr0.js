import{j as e}from"./jsx-runtime-CfatFE5O.js";import{g as B}from"./figma-hO1OATkS.js";import{R as i,a}from"./RadioGroup-hE1wb18n.js";import{B as t}from"./Box-25vWnmJ9.js";const R={title:"Components/RadioGroup",component:i,parameters:{}},v={name:"radio-group",label:"Radio Group",helpText:"Select one of the options",errorMessages:["This is an error message"],options:[{label:"Cat",value:"cat"},{label:"Dog",value:"dog"},{label:"Horse",value:"horse"},{label:"Dodo",value:"dodo",disabled:!0}]},o={render:d=>e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(i,{...d})}),args:v,argTypes:{isError:{control:"boolean"}},parameters:{chromatic:{disableSnapshot:!0}}},r={render:()=>e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(i,{label:"Radio Group Customized",helpText:"Here we use the composition to create custom things",children:e.jsxs(t,{gap:"m",children:[e.jsx(a,{label:"Cat",value:"cat",name:"test"}),e.jsx(a,{label:"Dog",value:"dog",name:"test"}),e.jsx(a,{label:"Horse",value:"horse",name:"test"}),e.jsx(a,{label:"Dodo",value:"dodo",disabled:!0,name:"test"})]})})}),parameters:{chromatic:{disableSnapshot:!0}}},n={render:d=>e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(a,{...d})}),args:{label:"Radio"},argTypes:{disabled:{control:"boolean"},readOnly:{control:"boolean"},checked:{control:"boolean"},width:{control:"text"}},parameters:{...B("radioGroup","radio"),chromatic:{disableSnapshot:!0}}},s={render:()=>e.jsxs(t,{direction:"row",children:[e.jsxs(t,{direction:"col",children:[e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(a,{label:"Default"})}),e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(a,{label:"Hover","data-testid":"hover"})}),e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(a,{label:"Focus","data-testid":"focus"})}),e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(a,{label:"Disabled",disabled:!0})})]}),e.jsxs(t,{direction:"col",children:[e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(a,{label:"Checked",checked:!0})}),e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(a,{label:"Hover",checked:!0,"data-testid":"hover"})}),e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(a,{label:"Focus",checked:!0,"data-testid":"focus"})}),e.jsx(t,{p:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(a,{label:"Disabled",checked:!0,disabled:!0})})]})]}),parameters:{pseudo:{hover:"[data-testid=hover]",focusVisible:"[data-testid=focus]"}}};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Box p="m" data-testid="wrapper" width="fit-content">
      <RadioGroup {...args} />
    </Box>,
  args: radioGroupArgs,
  argTypes: {
    isError: {
      control: "boolean"
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,h,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Box p="m" data-testid="wrapper" width="fit-content">
      <RadioGroup label="Radio Group Customized" helpText="Here we use the composition to create custom things">
        <Box gap="m">
          <Radio label="Cat" value="cat" name="test" />
          <Radio label="Dog" value="dog" name="test" />
          <Radio label="Horse" value="horse" name="test" />
          <Radio label="Dodo" value="dodo" disabled name="test" />
        </Box>
      </RadioGroup>
    </Box>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,b,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Box p="m" data-testid="wrapper" width="fit-content">
      <Radio {...args} />
    </Box>,
  args: {
    label: "Radio"
  },
  argTypes: {
    disabled: {
      control: "boolean"
    },
    readOnly: {
      control: "boolean"
    },
    checked: {
      control: "boolean"
    },
    width: {
      control: "text"
    }
  },
  parameters: {
    ...getFigmaStorybookParams("radioGroup", "radio"),
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var f,g,j;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Box direction="row">
      <Box direction="col">
        <Box p="m" data-testid="wrapper" width="fit-content">
          <Radio label="Default" />
        </Box>
        <Box p="m" data-testid="wrapper" width="fit-content">
          <Radio label="Hover" data-testid="hover" />
        </Box>
        <Box p="m" data-testid="wrapper" width="fit-content">
          <Radio label="Focus" data-testid="focus" />
        </Box>
        <Box p="m" data-testid="wrapper" width="fit-content">
          <Radio label="Disabled" disabled />
        </Box>
      </Box>
      <Box direction="col">
        <Box p="m" data-testid="wrapper" width="fit-content">
          <Radio label="Checked" checked />
        </Box>
        <Box p="m" data-testid="wrapper" width="fit-content">
          <Radio label="Hover" checked data-testid="hover" />
        </Box>
        <Box p="m" data-testid="wrapper" width="fit-content">
          <Radio label="Focus" checked data-testid="focus" />
        </Box>
        <Box p="m" data-testid="wrapper" width="fit-content">
          <Radio label="Disabled" checked disabled />
        </Box>
      </Box>
    </Box>,
  parameters: {
    pseudo: {
      hover: "[data-testid=hover]",
      focusVisible: "[data-testid=focus]"
    }
  }
}`,...(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const S=["Playground","Composition","RadioButton","VisualTests"],T=Object.freeze(Object.defineProperty({__proto__:null,Composition:r,Playground:o,RadioButton:n,VisualTests:s,__namedExportsOrder:S,default:R},Symbol.toStringTag,{value:"Module"}));export{o as P,T as S};
