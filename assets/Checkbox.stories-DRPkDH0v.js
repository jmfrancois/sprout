import{j as e}from"./jsx-runtime-CfatFE5O.js";import{f as I}from"./index-B-tj2W5I.js";import{r as q}from"./index-ClcD9ViR.js";import{g as _}from"./figma-hO1OATkS.js";import{C as t}from"./Checkbox-B1rHGUY9.js";import{u as L,F as R}from"./useFieldAriaProps-DwlP3pE3.js";import{B as n,a as d}from"./Box-25vWnmJ9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./HelperText-jNe-w5_-.js";import"./useId-CDjE3YUk.js";import"./useControl-Bdsdv14P.js";const x=({name:a,options:r,children:l,...c})=>{const{fieldProps:s,ariaProps:o}=L({label:c.label,helpText:c.helpText});return e.jsx(R,{...s,...c,children:e.jsxs(n,{gap:"density-l",direction:"col",...o,role:"group",children:[(r||[]).map(u=>e.jsx(t,{...u},u.label||u.name)),l]})})};x.displayName="CheckboxGroup";x.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`CheckboxNativeProps & {
  indeterminate?: boolean;
  label?: string;
  helpText?: string;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"input">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"input"'}],raw:'ComponentPropsWithoutRef<"input">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"input">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"value" | "type" | "prefix" | "ref"',elements:[{name:"literal",value:'"value"'},{name:"literal",value:'"type"'},{name:"literal",value:'"prefix"'},{name:"literal",value:'"ref"'}]}],raw:'Omit<HTMLInputProps, "value" | "type" | "prefix" | "ref">'},{name:"signature",type:"object",raw:`{
  indeterminate?: boolean;
  label?: string;
  helpText?: string;
}`,signature:{properties:[{key:"indeterminate",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"helpText",value:{name:"string",required:!1}}]}}]},{name:"literal",value:'"ref"'}],raw:'Omit<CheckboxProps, "ref">'}],raw:'Omit<CheckboxProps, "ref">[]'},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Components/Checkbox",component:t,parameters:{}},i={render:a=>e.jsx(n,{p:"s","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{...a})}),args:{name:"checkbox",label:"Checkbox"},argTypes:{id:{table:{disable:!0}},name:{table:{disable:!0}},label:{control:"text"},helpText:{control:"text"},checked:{control:"select",options:[void 0,!0,!1]},indeterminate:{control:"select",options:[void 0,!0,!1]},disabled:{control:"select",options:[void 0,!0,!1]},width:{control:"text"}},parameters:{chromatic:{disableSnapshot:!0}}},h={render:({onChange:a,...r})=>{const[l,c]=q.useState(!1),s=o=>{c(o.target.checked),a&&a(o)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{p:"s","data-testid":"wrapper",width:200,children:e.jsx(t,{...r,checked:l,onChange:s})}),e.jsxs("p",{children:["Checked: ",l?"true":"false"]})]})},args:{name:"checkbox",label:"Checkbox",onChange:I(),disabled:!1},argTypes:{checked:{table:{disable:!0}},indeterminate:{table:{disable:!0}}},parameters:{chromatic:{disableSnapshot:!0}}},m={render:a=>e.jsx(n,{direction:"col",p:"s",gap:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(x,{...a,options:[{name:"q1",label:"Option 1"},{name:"q2",label:"Option 2"},{name:"q3",label:"Option 3"}]})}),args:{helpText:"Help text",label:"Checkbox Group"},argTypes:{options:{table:{disable:!0}},helpText:{control:"text"},label:{control:"text"},isError:{control:"boolean"}},parameters:{..._("checkbox","group"),chromatic:{disableSnapshot:!0}}},p={render:()=>{const[a,r]=q.useState([!0,!1]),l=o=>{r([o.target.checked,o.target.checked])},c=o=>{r([o.target.checked,a[1]])},s=o=>{r([a[0],o.target.checked])};return e.jsxs(n,{direction:"col",gap:"m",children:[e.jsx(t,{label:"Parent",checked:a[0]&&a[1],indeterminate:a[0]!==a[1],onChange:l}),e.jsxs(n,{direction:"col",gap:"m",pl:"m",children:[e.jsx(t,{label:"Child 1",checked:a[0],onChange:c}),e.jsx(t,{label:"Child 2",checked:a[1],onChange:s})]})]})},parameters:{chromatic:{disableSnapshot:!0}}},b={render:()=>e.jsxs(n,{direction:"col",children:[e.jsx("h2",{className:d({font:"heading_m",color:"default"}),children:"States"}),e.jsxs(n,{direction:"row",gap:"m",justify:"stretch",children:[e.jsxs(n,{direction:"col",gap:"m",justify:"stretch",children:[e.jsx(t,{name:"checkbox1",label:"Uncheck default"}),e.jsx(t,{name:"checkbox1",label:"Uncheck hover","data-testid":"hover"}),e.jsx(t,{name:"checkbox1",label:"Uncheck focus","data-testid":"focus"}),e.jsx(t,{name:"checkbox4",label:"Uncheck disabled",disabled:!0})]}),e.jsxs(n,{direction:"col",gap:"m",justify:"stretch",children:[e.jsx(t,{name:"checkbox2",label:"Indeterminate default",indeterminate:!0}),e.jsx(t,{name:"checkbox2",label:"Indeterminate hover",indeterminate:!0,"data-testid":"hover"}),e.jsx(t,{name:"checkbox3",label:"Indeterminate focus",indeterminate:!0,"data-testid":"focus"}),e.jsx(t,{name:"checkbox5",label:"Indeterminate disabled",indeterminate:!0,disabled:!0})]}),e.jsxs(n,{direction:"col",gap:"m",justify:"stretch",children:[e.jsx(t,{name:"checkbox3",label:"Checked default",checked:!0}),e.jsx(t,{name:"checkbox3",label:"Checked hover",checked:!0,"data-testid":"hover"}),e.jsx(t,{name:"checkbox3",label:"Checked focus",checked:!0,"data-testid":"focus"}),e.jsx(t,{name:"checkbox6",label:"Checked disabled",checked:!0,disabled:!0})]})]}),e.jsx("h2",{className:d({font:"heading_m",color:"default"}),children:"Field"}),e.jsx(n,{direction:"col",p:"s",gap:"m","data-testid":"wrapper",width:"fit-content",children:e.jsx(x,{label:"Checkbox group",helpText:"help me",options:[{name:"q1",label:"Option 1"},{name:"q2",label:"Option 2"},{name:"q3",label:"Option 3"}]})}),e.jsx("h2",{className:d({font:"heading_m",color:"default"}),children:"Label overflow"}),e.jsx(n,{width:"200px",children:e.jsx(t,{label:"Long label that wraps over to a new row",name:"overflow"})}),e.jsx("h2",{className:d({font:"heading_m",color:"default"}),children:"Helper text"}),e.jsx(n,{width:"200px",children:e.jsx(t,{label:"Enable dark mode",name:"helptext",helpText:"Activates dark mode theme for less eye strain"})})]}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-testid="hover"]',focusVisible:'[data-testid="focus"]'}}};var k,g,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <Box p="s" data-testid="wrapper" width="fit-content">
      <Checkbox {...props} />
    </Box>,
  args: {
    name: "checkbox",
    label: "Checkbox"
  },
  argTypes: {
    id: {
      table: {
        disable: true
      }
    },
    name: {
      table: {
        disable: true
      }
    },
    label: {
      control: "text"
    },
    helpText: {
      control: "text"
    },
    checked: {
      control: "select",
      options: [undefined, true, false]
    },
    indeterminate: {
      control: "select",
      options: [undefined, true, false]
    },
    disabled: {
      control: "select",
      options: [undefined, true, false]
    },
    width: {
      control: "text"
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var C,j,v;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: ({
    onChange,
    ...args
  }) => {
    const [cchecked, setChecked] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
      if (onChange) {
        onChange(e);
      }
    };
    return <>
        <Box p="s" data-testid="wrapper" width={200}>
          <Checkbox {...args} checked={cchecked} onChange={handleChange} />
        </Box>
        <p>Checked: {cchecked ? "true" : "false"}</p>
      </>;
  },
  args: {
    name: "checkbox",
    label: "Checkbox",
    onChange: fn(),
    disabled: false
  },
  argTypes: {
    checked: {
      table: {
        disable: true
      }
    },
    indeterminate: {
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
}`,...(v=(j=h.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var y,w,T;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Box direction="col" p="s" gap="m" data-testid="wrapper" width="fit-content">
      <CheckboxGroup {...args} options={[{
      name: "q1",
      label: "Option 1"
    }, {
      name: "q2",
      label: "Option 2"
    }, {
      name: "q3",
      label: "Option 3"
    }]} />
    </Box>,
  args: {
    helpText: "Help text",
    label: "Checkbox Group"
  },
  argTypes: {
    options: {
      table: {
        disable: true
      }
    },
    helpText: {
      control: "text"
    },
    label: {
      control: "text"
    },
    isError: {
      control: "boolean"
    }
  },
  parameters: {
    ...getFigmaStorybookParams("checkbox", "group"),
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(T=(w=m.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var B,O,S;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState([true, false]);
    const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };
    const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
    const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };
    return <Box direction="col" gap="m">
        <Checkbox label="Parent" checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />
        <Box direction="col" gap="m" pl="m">
          <Checkbox label="Child 1" checked={checked[0]} onChange={handleChange2} />
          <Checkbox label="Child 2" checked={checked[1]} onChange={handleChange3} />
        </Box>
      </Box>;
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(S=(O=p.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var P,E,N;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Box direction="col">
      <h2 className={getTypographyClassName({
      font: "heading_m",
      color: "default"
    })}>States</h2>
      <Box direction="row" gap="m" justify="stretch">
        <Box direction="col" gap="m" justify="stretch">
          <Checkbox name="checkbox1" label="Uncheck default" />
          <Checkbox name="checkbox1" label="Uncheck hover" data-testid="hover" />
          <Checkbox name="checkbox1" label="Uncheck focus" data-testid="focus" />
          <Checkbox name="checkbox4" label="Uncheck disabled" disabled />
        </Box>
        <Box direction="col" gap="m" justify="stretch">
          <Checkbox name="checkbox2" label="Indeterminate default" indeterminate />
          <Checkbox name="checkbox2" label="Indeterminate hover" indeterminate data-testid="hover" />
          <Checkbox name="checkbox3" label="Indeterminate focus" indeterminate data-testid="focus" />
          <Checkbox name="checkbox5" label="Indeterminate disabled" indeterminate disabled />
        </Box>
        <Box direction="col" gap="m" justify="stretch">
          <Checkbox name="checkbox3" label="Checked default" checked />
          <Checkbox name="checkbox3" label="Checked hover" checked data-testid="hover" />
          <Checkbox name="checkbox3" label="Checked focus" checked data-testid="focus" />
          <Checkbox name="checkbox6" label="Checked disabled" checked disabled />
        </Box>
      </Box>
      <h2 className={getTypographyClassName({
      font: "heading_m",
      color: "default"
    })}>Field</h2>
      <Box direction="col" p="s" gap="m" data-testid="wrapper" width="fit-content">
        <CheckboxGroup label="Checkbox group" helpText="help me" options={[{
        name: "q1",
        label: "Option 1"
      }, {
        name: "q2",
        label: "Option 2"
      }, {
        name: "q3",
        label: "Option 3"
      }]} />
      </Box>
      <h2 className={getTypographyClassName({
      font: "heading_m",
      color: "default"
    })}>Label overflow</h2>
      <Box width="200px">
        <Checkbox label="Long label that wraps over to a new row" name="overflow" />
      </Box>
      <h2 className={getTypographyClassName({
      font: "heading_m",
      color: "default"
    })}>Helper text</h2>
      <Box width="200px">
        <Checkbox label="Enable dark mode" name="helptext" helpText="Activates dark mode theme for less eye strain" />
      </Box>
    </Box>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-testid="hover"]',
      focusVisible: '[data-testid="focus"]'
    }
  }
}`,...(N=(E=b.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const J=["Playground","Controlled","Group","Indeterminate","VisualTest"];export{h as Controlled,m as Group,p as Indeterminate,i as Playground,b as VisualTest,J as __namedExportsOrder,z as default};
