import{j as e}from"./jsx-runtime-CfatFE5O.js";import{f}from"./index-B-tj2W5I.js";import{T as t}from"./TextField-CBpJc0HV.js";import{B as r,a as p}from"./Box-25vWnmJ9.js";const D={title:"Components/TextField",component:t,parameters:{},argTypes:{disabled:{control:{type:"boolean"}},designSize:{control:{type:"select"},options:["default","small"]},leftAffix:{table:{disable:!0}},rightAffix:{table:{disable:!0}},leftAdornment:{control:{type:"text"}},rightAdornment:{control:{type:"text"}}}},m=["Error message 1"],i={render:l=>e.jsxs(r,{direction:"col",gap:"m",justify:"stretch",alignContent:"stretch",children:[e.jsx(t,{id:"input1",label:"Default",helpText:"help me",placeholder:"Give me a value",...l}),e.jsx(t,{id:"input-hover",label:"Hover",helpText:"help me",placeholder:"Give me a value",...l,"data-testid":"hover"}),e.jsx(t,{id:"input-focus",label:"Focus",placeholder:"Focus",...l,"data-testid":"focus"}),e.jsx(t,{id:"input-disabled",label:"Disabled",placeholder:"Disabled Input",disabled:!0,...l}),e.jsx(t,{id:"input-readonly",label:"Readonly",placeholder:"Readonly Input",readOnly:!0,...l}),e.jsx(t,{id:"input-error-message",label:"Error",placeholder:"Input in error with message",errorMessages:m,...l}),e.jsx(t,{id:"input-error",label:"Error",placeholder:"Input in error",hasError:!0,...l})]}),args:{designSize:"default"},argTypes:{designSize:{control:{type:"select"},options:["default","small"]},value:{table:{disable:!0}},leftIcon:{table:{disable:!0}},onChange:{table:{disable:!0}},disabled:{table:{disable:!0}},readOnly:{table:{disable:!0}},hasError:{table:{disable:!0}},onBlur:{table:{disable:!0}}},parameters:{chromatic:{disableSnapshot:!0},pseudo:{hover:'[data-testid="hover"]',focus:'div:has(> div > [data-testid="focus"])'}}},s={render:l=>e.jsx(r,{p:"s",direction:"col",gap:"s",width:"fit-content","data-testid":"wrapper",children:e.jsx(t,{...l})}),args:{label:"Label",id:"input",placeholder:"Placeholder",defaultValue:"Value",helpText:"help me"},argTypes:{...i.argTypes,helpText:{control:{type:"text"}},errorMessages:{table:{disable:!0}},hasError:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}},parameters:{chromatic:{disableSnapshot:!0}}},n={render:({leftAdornment:l="Left",rightAdornment:o="Right",...a})=>e.jsxs(r,{direction:"col",gap:"m",justify:"stretch",alignContent:"stretch",children:[e.jsx(t,{id:"left-adornment",label:"Left adornment",...a,leftAdornment:l}),e.jsx(t,{id:"right-adornment",label:"Right adornment",...a,rightAdornment:o}),e.jsx(t,{id:"adornment",label:"Both adornment",...a,leftAdornment:l,rightAdornment:o})]}),parameters:{chromatic:{disableSnapshot:!0}}},d={render:({leftAffix:l,rightAffix:o,...a})=>e.jsxs(r,{direction:"col",gap:"m",justify:"stretch",alignContent:"stretch",children:[e.jsx(t,{id:"left-affix",label:"Left me",...a,leftAffix:l}),e.jsx(t,{id:"right-affix",label:"Right me",...a,rightAffix:o}),e.jsx(t,{id:"affix",label:"Affix",...a,leftAffix:l,rightAffix:o})]}),args:{leftAffix:{label:"Left",onClick:f()},rightAffix:{label:"Right",onClick:f()}},argTypes:{...i.argTypes,leftAffix:{table:{disable:!0}},rightAffix:{table:{disable:!0}}},parameters:{chromatic:{disableSnapshot:!0}}},c={render:l=>e.jsx(r,{direction:"col",gap:"m",justify:"stretch",alignContent:"stretch",width:"300px",children:e.jsx(t,{type:"search",...l})}),args:{},argTypes:{},parameters:{chromatic:{disableSnapshot:!0}}},h={render:()=>e.jsxs(r,{gap:"m",direction:"col",width:"600px",children:[e.jsx("h2",{className:p({font:"heading_m",color:"default"}),children:"States"}),e.jsxs(r,{gap:"m",direction:"row",width:"100%",children:[e.jsxs(r,{direction:"col",gap:"m",justify:"stretch",alignContent:"stretch",grow:!0,children:[e.jsx(t,{label:"Default",helpText:"help me",placeholder:"Give me a value"}),e.jsx(t,{label:"Hover",helpText:"help me",placeholder:"Give me a value","data-testid":"hover"}),e.jsx(t,{label:"Focus",placeholder:"Focus","data-testid":"focus"}),e.jsx(t,{label:"Disabled",placeholder:"Disabled Input",disabled:!0}),e.jsx(t,{label:"Readonly",placeholder:"Readonly Input",readOnly:!0}),e.jsx(t,{label:"Error",placeholder:"Input in error with message",errorMessages:m}),e.jsx(t,{label:"Error",placeholder:"Input in error",hasError:!0})]}),e.jsxs(r,{gap:"m",direction:"col",grow:!0,children:[e.jsx(t,{designSize:"small",label:"Default",helpText:"help me",placeholder:"Give me a value"}),e.jsx(t,{designSize:"small",label:"Hover",helpText:"help me",placeholder:"Give me a value","data-testid":"hover"}),e.jsx(t,{designSize:"small",label:"Focus",placeholder:"Focus","data-testid":"focus"}),e.jsx(t,{designSize:"small",label:"Disabled",placeholder:"Disabled Input",disabled:!0}),e.jsx(t,{designSize:"small",label:"Readonly",placeholder:"Readonly Input",readOnly:!0}),e.jsx(t,{designSize:"small",label:"Error",placeholder:"Input in error with message",errorMessages:m}),e.jsx(t,{designSize:"small",label:"Error",placeholder:"Input in error",hasError:!0})]})]}),e.jsxs(r,{gap:"m",direction:"row",width:"100%",children:[e.jsxs(r,{gap:"m",direction:"col",grow:!0,children:[e.jsx("h2",{className:p({font:"heading_m",color:"default"}),children:"Adornment"}),e.jsxs(r,{direction:"col",gap:"m",justify:"stretch",alignContent:"stretch",children:[e.jsx(t,{id:"left-adornment",label:"Left adornment",leftAdornment:"left"}),e.jsx(t,{id:"right-adornment",label:"Right adornment",rightAdornment:"right"}),e.jsx(t,{id:"adornment",label:"Both adornment",leftAdornment:"left",rightAdornment:"right"})]}),e.jsx("h2",{className:p({font:"heading_m",color:"default"}),children:"Affix"}),e.jsxs(r,{direction:"col",gap:"m",justify:"stretch",alignContent:"stretch",children:[e.jsx(t,{id:"left-affix",label:"Left me",leftAffix:{label:"Left",onClick:()=>{}}}),e.jsx(t,{id:"right-affix",label:"Right me",rightAffix:{label:"Right",onClick:()=>{}}}),e.jsx(t,{id:"affix",label:"Affix",leftAffix:{label:"Left",onClick:()=>{}},rightAffix:{label:"Right",onClick:()=>{}}})]})]}),e.jsxs(r,{gap:"m",direction:"col",grow:!0,children:[e.jsx("h2",{className:p({font:"heading_m",color:"default"}),children:"Search"}),e.jsx(t,{type:"search",label:"Search"}),e.jsx(t,{type:"search",label:"Search",value:"Search string"}),e.jsx(t,{designSize:"small",type:"search",label:"Search"}),e.jsx(t,{designSize:"small",type:"search",label:"Search",value:"Search string"})]})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:'div:has(> div > [data-testid="hover"])',focus:'div:has(> div > [data-testid="focus"])'}}};var u,x,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (props: Partial<TextFieldProps>) => <Box direction="col" gap="m" justify="stretch" alignContent="stretch">
      <TextField id="input1" label="Default" helpText="help me" placeholder="Give me a value" {...props} />
      <TextField id="input-hover" label="Hover" helpText="help me" placeholder="Give me a value" {...props} data-testid="hover" />
      <TextField id="input-focus" label="Focus" placeholder="Focus" {...props} data-testid="focus" />

      <TextField id="input-disabled" label="Disabled" placeholder="Disabled Input" disabled {...props} />
      <TextField id="input-readonly" label="Readonly" placeholder="Readonly Input" readOnly {...props} />
      <TextField id="input-error-message" label="Error" placeholder="Input in error with message" errorMessages={errorMessages} {...props} />
      <TextField id="input-error" label="Error" placeholder="Input in error" hasError {...props} />
    </Box>,
  args: {
    designSize: "default"
  },
  argTypes: {
    designSize: {
      control: {
        type: "select"
      },
      options: ["default", "small"]
    },
    value: {
      table: {
        disable: true
      }
    },
    leftIcon: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
    readOnly: {
      table: {
        disable: true
      }
    },
    hasError: {
      table: {
        disable: true
      }
    },
    onBlur: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    pseudo: {
      hover: '[data-testid="hover"]',
      focus: 'div:has(> div > [data-testid="focus"])'
    }
  }
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,y,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (props: TextFieldProps) => <Box p="s" direction="col" gap="s" width="fit-content" data-testid="wrapper">
      <TextField {...props} />
    </Box>,
  args: {
    label: "Label",
    id: "input",
    placeholder: "Placeholder",
    defaultValue: "Value",
    helpText: "help me"
  },
  argTypes: {
    ...Overview.argTypes,
    helpText: {
      control: {
        type: "text"
      }
    },
    errorMessages: {
      table: {
        disable: true
      }
    },
    hasError: {
      control: {
        type: "boolean"
      }
    },
    disabled: {
      control: {
        type: "boolean"
      }
    },
    readOnly: {
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
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var j,v,S;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: ({
    leftAdornment = "Left",
    rightAdornment = "Right",
    ...props
  }: Partial<InputProps>) => <Box direction="col" gap="m" justify="stretch" alignContent="stretch">
      <TextField id="left-adornment" label="Left adornment" {...props} leftAdornment={leftAdornment} />
      <TextField id="right-adornment" label="Right adornment" {...props} rightAdornment={rightAdornment} />
      <TextField id="adornment" label="Both adornment" {...props} leftAdornment={leftAdornment} rightAdornment={rightAdornment} />
    </Box>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var F,A,B;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: ({
    leftAffix,
    rightAffix,
    ...props
  }: Partial<InputProps>) => <Box direction="col" gap="m" justify="stretch" alignContent="stretch">
      <TextField id="left-affix" label="Left me" {...props} leftAffix={leftAffix} />
      <TextField id="right-affix" label="Right me" {...props} rightAffix={rightAffix} />
      <TextField id="affix" label="Affix" {...props} leftAffix={leftAffix} rightAffix={rightAffix} />
    </Box>,
  args: {
    leftAffix: {
      label: "Left",
      onClick: fn()
    },
    rightAffix: {
      label: "Right",
      onClick: fn()
    }
  },
  argTypes: {
    ...Overview.argTypes,
    // disable it
    leftAffix: {
      table: {
        disable: true
      }
    },
    rightAffix: {
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
}`,...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var w,C,R;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (props: TextFieldProps) => <Box direction="col" gap="m" justify="stretch" alignContent="stretch" width="300px">
      <TextField type="search" {...props} />
    </Box>,
  args: {},
  argTypes: {},
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(R=(C=c.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var I,E,z;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Box gap="m" direction="col" width="600px">
      <h2 className={getTypographyClassName({
      font: "heading_m",
      color: "default"
    })}>States</h2>
      <Box gap="m" direction="row" width="100%">
        <Box direction="col" gap="m" justify="stretch" alignContent="stretch" grow>
          <TextField label="Default" helpText="help me" placeholder="Give me a value" />
          <TextField label="Hover" helpText="help me" placeholder="Give me a value" data-testid="hover" />
          <TextField label="Focus" placeholder="Focus" data-testid="focus" />
          <TextField label="Disabled" placeholder="Disabled Input" disabled />
          <TextField label="Readonly" placeholder="Readonly Input" readOnly />
          <TextField label="Error" placeholder="Input in error with message" errorMessages={errorMessages} />
          <TextField label="Error" placeholder="Input in error" hasError />
        </Box>
        <Box gap="m" direction="col" grow>
          <TextField designSize="small" label="Default" helpText="help me" placeholder="Give me a value" />
          <TextField designSize="small" label="Hover" helpText="help me" placeholder="Give me a value" data-testid="hover" />
          <TextField designSize="small" label="Focus" placeholder="Focus" data-testid="focus" />
          <TextField designSize="small" label="Disabled" placeholder="Disabled Input" disabled />
          <TextField designSize="small" label="Readonly" placeholder="Readonly Input" readOnly />
          <TextField designSize="small" label="Error" placeholder="Input in error with message" errorMessages={errorMessages} />
          <TextField designSize="small" label="Error" placeholder="Input in error" hasError />
        </Box>
      </Box>
      <Box gap="m" direction="row" width="100%">
        <Box gap="m" direction="col" grow>
          <h2 className={getTypographyClassName({
          font: "heading_m",
          color: "default"
        })}>Adornment</h2>
          <Box direction="col" gap="m" justify="stretch" alignContent="stretch">
            <TextField id="left-adornment" label="Left adornment" leftAdornment="left" />
            <TextField id="right-adornment" label="Right adornment" rightAdornment="right" />
            <TextField id="adornment" label="Both adornment" leftAdornment="left" rightAdornment="right" />
          </Box>
          <h2 className={getTypographyClassName({
          font: "heading_m",
          color: "default"
        })}>Affix</h2>
          <Box direction="col" gap="m" justify="stretch" alignContent="stretch">
            <TextField id="left-affix" label="Left me" leftAffix={{
            label: "Left",
            onClick: () => {}
          }} />
            <TextField id="right-affix" label="Right me" rightAffix={{
            label: "Right",
            onClick: () => {}
          }} />
            <TextField id="affix" label="Affix" leftAffix={{
            label: "Left",
            onClick: () => {}
          }} rightAffix={{
            label: "Right",
            onClick: () => {}
          }} />
          </Box>
        </Box>
        <Box gap="m" direction="col" grow>
          <h2 className={getTypographyClassName({
          font: "heading_m",
          color: "default"
        })}>Search</h2>
          <TextField type="search" label="Search" />
          <TextField type="search" label="Search" value="Search string" />
          <TextField designSize="small" type="search" label="Search" />
          <TextField designSize="small" type="search" label="Search" value="Search string" />
        </Box>
      </Box>
    </Box>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: 'div:has(> div > [data-testid="hover"])',
      focus: 'div:has(> div > [data-testid="focus"])'
    }
  }
}`,...(z=(E=h.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const L=["Overview","Playground","Adornment","Affix","Search","VisualTest"],k=Object.freeze(Object.defineProperty({__proto__:null,Adornment:n,Affix:d,Overview:i,Playground:s,Search:c,VisualTest:h,__namedExportsOrder:L,default:D},Symbol.toStringTag,{value:"Module"}));export{s as P,k as S,c as a};
