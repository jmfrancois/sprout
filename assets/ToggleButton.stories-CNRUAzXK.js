import{j as e}from"./jsx-runtime-CfatFE5O.js";import{f as L}from"./index-B-tj2W5I.js";import{r as z}from"./index-ClcD9ViR.js";import{B as l,E as K}from"./EditIcon-AnNjfYxK.js";import{B as R}from"./BookIcon-DZsRg5Cg.js";import{G as M}from"./GotoIcon--SVsbwfc.js";import{S as J}from"./StarIcon-SlLCtx_3.js";import{g as Q}from"./figma-hO1OATkS.js";import{s as T}from"./Button.module-Cy3SiisI.js";import{c as N,B as b}from"./Box-25vWnmJ9.js";import{u as U}from"./useControl-Bdsdv14P.js";import{u as W}from"./useId-CDjE3YUk.js";import{T as X}from"./Tooltip-DjBJpIFd.js";import{B as v}from"./ButtonGroup-DCHBk4I_.js";const E=({onChange:o,toggled:n,defaultToggled:a})=>U({onChange:o,toggled:n,defaultToggled:a},{onChangeKey:"onChange",valueKey:"toggled",defaultValueKey:"defaultToggled"}),t=({size:o,variant:n,label:a,toggled:s,icon:i,defaultToggled:f,onChange:h,...B})=>{const c=E({onChange:h,toggled:s,defaultToggled:f});return e.jsxs("button",{...B,type:"button",className:N(T.button,T.toggle),"data-variant":n||"default","data-size":o||"default","aria-pressed":c.value?"true":"false",onClick:()=>c.onChange(!c.value),children:[i,a&&e.jsx("span",{"data-label":!0,children:a})]})};t.__docgenInfo={description:"",methods:[],displayName:"ToggleButton",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"literal",value:'"quiet"'},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "default"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"default"'}]},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},toggled:{required:!1,tsType:{name:"boolean"},description:""},defaultToggled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(toggled: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"toggled"}],return:{name:"void"}}},description:""}}};function r({label:o,icon:n,placement:a,variant:s,size:i,onChange:f,toggled:h,defaultToggled:B,id:c,...O}){const V=W(c),x=E({onChange:f,toggled:h,defaultToggled:B});return e.jsx(X,{id:V,title:o,placement:a,children:e.jsx("button",{type:"button","aria-label":o,className:N(T.button,T.toggle),"data-variant":s||"default","data-size":i||"default","aria-pressed":x.value||!1,onClick:()=>x.onChange(!x.value),...O,children:n})})}r.__docgenInfo={description:"",methods:[],displayName:"ToggleIconButton",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"literal",value:'"quiet"'},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "default"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"default"'}]},description:""},icon:{required:!0,tsType:{name:"ReactNode"},description:""},toggled:{required:!1,tsType:{name:"boolean"},description:""},defaultToggled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(toggled: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"toggled"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"union",raw:'TooltipProps["placement"]'},description:""}}};const Y={title:"Components/ToggleButton"},d={render:o=>e.jsx(b,{p:"s",children:e.jsx(t,{...o})}),args:{label:"Label"},parameters:{...Q("toggleButton"),chromatic:{disableSnapshot:!0}},argTypes:{label:{control:{type:"text"}},variant:{control:{type:"select"},options:[void 0,"default","quiet"]},size:{control:{type:"select"},options:[void 0,"default","small"]},defaultToggle:{control:{type:"boolean"}},toggled:{control:{type:"boolean"}}}},g={render:()=>{const[o,n]=z.useState("Two");return e.jsx(v,{children:["One","Two","Three"].map(a=>e.jsx(t,{label:a,toggled:o===a,onChange:()=>n(a)},a))})},parameters:{chromatic:{disableSnapshot:!0},control:{disable:!0}}},u={render:({onChange:o})=>{const[n,a]=z.useState(!1),s=i=>{o&&o(i),a(i)};return e.jsx(t,{label:"Controlled",toggled:n,onChange:s})},args:{onChange:L()},parameters:{chromatic:{disableSnapshot:!0}}},p={render:o=>e.jsx(b,{p:"s",children:e.jsx(r,{icon:e.jsx(l,{}),...o})}),args:{label:"Label"},argTypes:d.argTypes,parameters:{chromatic:{disableSnapshot:!0}}},m={render:()=>e.jsxs(b,{gap:"m",direction:"col",width:"400px",children:[e.jsx("h2",{children:"States"}),e.jsxs(b,{gap:"s",direction:"row",children:[e.jsx(t,{label:"Default"}),e.jsx(t,{label:"Hover","data-testid":"hover"}),e.jsx(t,{label:"Active","data-testid":"active"}),e.jsx(t,{label:"Focus","data-testid":"focused"}),e.jsx(t,{label:"Toggle",toggled:!0})]}),e.jsxs(b,{gap:"s",direction:"row",children:[e.jsx(t,{icon:e.jsx(l,{}),label:"Default"}),e.jsx(t,{icon:e.jsx(l,{}),label:"Hover","data-testid":"hover"}),e.jsx(t,{icon:e.jsx(l,{}),label:"Active","data-testid":"active"}),e.jsx(t,{icon:e.jsx(l,{}),label:"Focus","data-testid":"focused"}),e.jsx(t,{icon:e.jsx(l,{}),label:"Toggle",toggled:!0})]}),e.jsx("h2",{children:"Inside ButtonGroup"}),e.jsxs(v,{children:[e.jsx(t,{label:"Default"}),e.jsx(t,{label:"Hover","data-testid":"hover"}),e.jsx(t,{label:"Active","data-testid":"active"}),e.jsx(t,{label:"Focus","data-testid":"focused"}),e.jsx(t,{label:"Toggle",toggled:!0})]}),e.jsx("h2",{children:"ToggleIconButton"}),e.jsxs(v,{children:[e.jsx(r,{label:"Default",icon:e.jsx(l,{})}),e.jsx(r,{label:"Hover",icon:e.jsx(R,{}),"data-testid":"hover"}),e.jsx(r,{label:"Active",icon:e.jsx(K,{}),"data-testid":"active"}),e.jsx(r,{label:"Focus",icon:e.jsx(M,{}),"data-testid":"focused"}),e.jsx(r,{label:"Toggle",icon:e.jsx(J,{}),toggled:!0})]})]}),parameters:{pseudo:{hover:"[data-testid='hover']",active:"[data-testid='active']",focusVisible:'[data-testid="focused"]'},control:{disable:!0}}};var j,y,I;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (props: ToggleButtonProps) => <Box p="s">
      <ToggleButton {...props} />
    </Box>,
  args: {
    label: "Label"
  },
  parameters: {
    ...getFigmaStorybookParams("toggleButton"),
    chromatic: {
      disableSnapshot: true
    }
  },
  argTypes: {
    label: {
      control: {
        type: "text"
      }
    },
    variant: {
      control: {
        type: "select"
      },
      options: [undefined, "default", "quiet"]
    },
    size: {
      control: {
        type: "select"
      },
      options: [undefined, "default", "small"]
    },
    defaultToggle: {
      control: {
        type: "boolean"
      }
    },
    toggled: {
      control: {
        type: "boolean"
      }
    }
  }
}`,...(I=(y=d.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var S,C,q;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [toggled, setToggled] = useState("Two");
    return <ButtonGroup>
        {["One", "Two", "Three"].map(label => <ToggleButton key={label} label={label} toggled={toggled === label} onChange={() => setToggled(label)} />)}
      </ButtonGroup>;
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    control: {
      disable: true
    }
  }
}`,...(q=(C=g.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var w,G,P;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: ({
    onChange
  }: Partial<ToggleButtonProps>) => {
    const [toggled, setToggled] = useState(false);
    const handleChange = (e: boolean) => {
      if (onChange) {
        onChange(e);
      }
      setToggled(e);
    };
    return <ToggleButton label="Controlled" toggled={toggled} onChange={handleChange} />;
  },
  args: {
    onChange: fn()
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(P=(G=u.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var F,_,A;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (props: Omit<ToggleIconButtonProps, "icon">) => <Box p="s">
      <ToggleIconButton icon={<BinIcon />} {...props} />
    </Box>,
  args: {
    label: "Label"
  },
  argTypes: Playground.argTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(A=(_=p.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var D,H,k;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Box gap="m" direction="col" width="400px">
      <h2>States</h2>
      <Box gap="s" direction="row">
        <ToggleButton label="Default" />
        <ToggleButton label="Hover" data-testid="hover" />
        <ToggleButton label="Active" data-testid="active" />
        <ToggleButton label="Focus" data-testid="focused" />
        <ToggleButton label="Toggle" toggled />
      </Box>
      <Box gap="s" direction="row">
        <ToggleButton icon={<BinIcon />} label="Default" />
        <ToggleButton icon={<BinIcon />} label="Hover" data-testid="hover" />
        <ToggleButton icon={<BinIcon />} label="Active" data-testid="active" />
        <ToggleButton icon={<BinIcon />} label="Focus" data-testid="focused" />
        <ToggleButton icon={<BinIcon />} label="Toggle" toggled />
      </Box>
      <h2>Inside ButtonGroup</h2>
      <ButtonGroup>
        <ToggleButton label="Default" />
        <ToggleButton label="Hover" data-testid="hover" />
        <ToggleButton label="Active" data-testid="active" />
        <ToggleButton label="Focus" data-testid="focused" />
        <ToggleButton label="Toggle" toggled />
      </ButtonGroup>
      <h2>ToggleIconButton</h2>
      <ButtonGroup>
        <ToggleIconButton label="Default" icon={<BinIcon />} />
        <ToggleIconButton label="Hover" icon={<BookIcon />} data-testid="hover" />
        <ToggleIconButton label="Active" icon={<EditIcon />} data-testid="active" />
        <ToggleIconButton label="Focus" icon={<GotoIcon />} data-testid="focused" />
        <ToggleIconButton label="Toggle" icon={<StarIcon />} toggled />
      </ButtonGroup>
    </Box>,
  parameters: {
    pseudo: {
      hover: "[data-testid='hover']",
      active: "[data-testid='active']",
      focusVisible: '[data-testid="focused"]'
    },
    control: {
      disable: true
    }
  }
}`,...(k=(H=m.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};const Z=["Playground","ToggleButtonGroup","Controlled","ToggleIconButtonPlayground","VisualTest"],pe=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Playground:d,ToggleButtonGroup:g,ToggleIconButtonPlayground:p,VisualTest:m,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{d as P,pe as S};
