import{j as e}from"./jsx-runtime-CfatFE5O.js";import{g as x}from"./figma-hO1OATkS.js";import{M as r,S as l}from"./SelectComposition-Cc3b_OxD.js";import{O as o}from"./SelectTest-Dfrr_ghx.js";import{B as n}from"./Box-25vWnmJ9.js";const f={title:"Components/MultiSelect",component:r},t={render:({defaultValues:i,...p})=>e.jsx(n,{p:"s","data-testid":"wrapper",width:300,alignItems:"start",children:e.jsxs(r,{...p,defaultValue:i,children:[e.jsx(l.Option,{value:"",label:"--Please choose colors--"}),e.jsxs(l.OptGroup,{label:"Colors",children:[e.jsx(l.Option,{label:"Red",value:"red"}),e.jsx(l.Option,{label:"Green",value:"green"}),e.jsx(l.Option,{label:"Blue",value:"blue"})]}),e.jsxs(l.OptGroup,{label:"Deprecated Colors",children:[e.jsx(l.Option,{label:"Chartreuse",value:"chartreuse",description:"nice color btw"}),e.jsx(l.Option,{label:"Cornsilk",value:"cornsilk"}),e.jsx(l.Option,{label:"Gainsboro",value:"pink"})]})]})}),args:{label:"Select a color",defaultOpen:!1,defaultValues:["red"],hasError:!1},argTypes:{defaultValues:{control:"multi-select",options:["red","green","blue"]},defaultValue:{table:{disable:!0}},value:{control:"multi-select",options:["red","green","blue"]},disabled:{control:"boolean"},hasError:{control:"boolean"},placeholder:{control:"text"},helpText:{control:"text"},errorMessages:{control:{type:"select",labels:{first:"One error message",second:"Two error messages"}},options:[void 0,"one msg","two msg"],mapping:{"one msg":["Error message 1"],"two msg":["Error message 1","Error message 2"]}},onChange:{table:{disable:!0}},children:{table:{disable:!0}}},parameters:{chromatic:{disableSnapshot:!0}}},v={chromatic:{disableSnapshot:!0}},a={render:({defaultValues:i,...p})=>e.jsx(n,{p:"s","data-testid":"wrapper",width:300,alignItems:"start",children:e.jsxs(r,{label:"Uncontrolled",...p,defaultValue:i,children:[e.jsx(l.Option,{label:"None",value:""}),e.jsx(l.OptionRenderer,{options:o}),e.jsx(l.Divider,{}),e.jsxs(l.OptGroup,{label:"Deprecated Colors",children:[e.jsx(l.Option,{label:"Chartreuse",value:"chartreuse",description:"nice color btw"}),e.jsx(l.Option,{label:"Cornsilk",value:"cornsilk"}),e.jsx(l.Option,{label:"Gainsboro",value:"pink"})]})]})}),args:{placeholder:"Select colors",defaultValues:["pink","purple","maroon"]},argTypes:{...t.argTypes},parameters:{...x("multiselect"),...v}},s={render:()=>e.jsxs(n,{direction:"row",p:"l",gap:"xxl",width:"1200px",height:"640px",alignItems:"start",children:[e.jsx(r,{defaultOpen:!0,placeholder:"colors",children:e.jsx(l.OptionRenderer,{options:o})}),e.jsx(r,{defaultOpen:!0,label:"Colors selection",placeholder:"colors",defaultValue:["blue","red"],children:e.jsx(l.OptionRenderer,{options:o})}),e.jsxs(n,{direction:"col",gap:"m",children:[e.jsx(r,{placeholder:"colors",label:"Has error",hasError:!0,errorMessages:["Error message"],children:e.jsx(l.OptionRenderer,{options:o})}),e.jsx(r,{placeholder:"colors",label:"Has help",helpText:"Help text",children:e.jsx(l.OptionRenderer,{options:o})}),e.jsx(r,{placeholder:"colors",label:"Is disabled",defaultValue:["blue","red"],disabled:!0,children:e.jsx(l.OptionRenderer,{options:o})}),e.jsx(r,{"data-testid":"hover",label:"Hovered",placeholder:"colors",defaultValue:["blue","red"],children:e.jsx(l.OptionRenderer,{options:o})}),e.jsx(r,{label:"Read only",placeholder:"colors",defaultValue:["blue","red"],readOnly:!0,children:e.jsx(l.OptionRenderer,{options:o})})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-testid="hover.combobox"]'}}};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    defaultValues,
    ...props
  }: StoryProps) => <Box p="s" data-testid="wrapper" width={300} alignItems="start">
      <MultiSelect {...props} defaultValue={defaultValues}>
        <Select.Option value="" label="--Please choose colors--" />
        <Select.OptGroup label="Colors">
          <Select.Option label="Red" value="red" />
          <Select.Option label="Green" value="green" />
          <Select.Option label="Blue" value="blue" />
        </Select.OptGroup>
        <Select.OptGroup label="Deprecated Colors">
          <Select.Option label="Chartreuse" value="chartreuse" description="nice color btw" />
          <Select.Option label="Cornsilk" value="cornsilk" />
          <Select.Option label="Gainsboro" value="pink" />
        </Select.OptGroup>
      </MultiSelect>
    </Box>,
  args: {
    label: "Select a color",
    defaultOpen: false,
    defaultValues: ["red"],
    hasError: false
  },
  argTypes: {
    // We can't name this control "defaultValue" as it seems to be a reserved name in url params
    // Known issue: args params aren't working https://github.com/storybookjs/storybook/issues/15487
    defaultValues: {
      control: "multi-select",
      options: ["red", "green", "blue"]
    },
    defaultValue: {
      table: {
        disable: true
      }
    },
    value: {
      control: "multi-select",
      options: ["red", "green", "blue"]
    },
    disabled: {
      control: "boolean"
    },
    hasError: {
      control: "boolean"
    },
    placeholder: {
      control: "text"
    },
    helpText: {
      control: "text"
    },
    errorMessages: {
      control: {
        type: "select",
        labels: {
          first: "One error message",
          second: "Two error messages"
        }
      },
      options: [undefined, "one msg", "two msg"],
      mapping: {
        "one msg": ["Error message 1"],
        "two msg": ["Error message 1", "Error message 2"]
      }
    },
    onChange: {
      table: {
        disable: true
      }
    },
    children: {
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,h,m;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ({
    defaultValues,
    ...props
  }: StoryProps) => {
    return <Box p="s" data-testid="wrapper" width={300} alignItems="start">
        <MultiSelect label="Uncontrolled" {...props} defaultValue={defaultValues}>
          {/* This is good to have the empty value as in HTML */}
          <Select.Option label="None" value="" />
          {/* You can use the renderer if you have a datastructure */}
          <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
          {/* Divider in case you have multiple groups */}
          <Select.Divider />
          {/* Simple and efficient composition */}
          <Select.OptGroup label="Deprecated Colors">
            <Select.Option label="Chartreuse" value="chartreuse" description="nice color btw" />
            <Select.Option label="Cornsilk" value="cornsilk" />
            <Select.Option label="Gainsboro" value="pink" />
          </Select.OptGroup>
        </MultiSelect>
      </Box>;
  },
  args: {
    placeholder: "Select colors",
    defaultValues: ["pink", "purple", "maroon"]
  },
  argTypes: {
    ...Playground.argTypes
  },
  parameters: {
    ...getFigmaStorybookParams("multiselect"),
    ...disableSnap
  }
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var O,S,g;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Box direction="row" p="l" gap="xxl" width="1200px" height="640px" alignItems="start">
      <MultiSelect defaultOpen placeholder="colors">
        <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
      </MultiSelect>
      <MultiSelect defaultOpen label="Colors selection" placeholder="colors" defaultValue={["blue", "red"]}>
        <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
      </MultiSelect>
      <Box direction="col" gap="m">
        <MultiSelect placeholder="colors" label="Has error" hasError errorMessages={["Error message"]}>
          <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
        </MultiSelect>
        <MultiSelect placeholder="colors" label="Has help" helpText={"Help text"}>
          <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
        </MultiSelect>
        <MultiSelect placeholder="colors" label="Is disabled" defaultValue={["blue", "red"]} disabled>
          <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
        </MultiSelect>
        <MultiSelect data-testid="hover" label="Hovered" placeholder="colors" defaultValue={["blue", "red"]}>
          <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
        </MultiSelect>
        <MultiSelect label="Read only" placeholder="colors" defaultValue={["blue", "red"]} readOnly>
          <Select.OptionRenderer options={OPTIONS_WITH_GROUP} />
        </MultiSelect>
      </Box>
    </Box>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-testid="hover.combobox"]'
    }
  }
}`,...(g=(S=s.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const j=["Playground","UnControlled","VisualTest"],y=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,UnControlled:a,VisualTest:s,__namedExportsOrder:j,default:f},Symbol.toStringTag,{value:"Module"}));export{y as S,a as U};
