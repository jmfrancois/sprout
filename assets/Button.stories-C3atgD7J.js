import{j as e}from"./jsx-runtime-CfatFE5O.js";import{f as L}from"./index-B-tj2W5I.js";import{g as w}from"./figma-hO1OATkS.js";import{s as V}from"./Button.module-Cy3SiisI.js";import{B as o}from"./Button-C-WoFXIp.js";import{B as l}from"./Box-25vWnmJ9.js";import{I as r}from"./IconButton-B8GWHSxh.js";function d({children:a}){return e.jsx("div",{className:V.floating,children:a})}d.__docgenInfo={description:"",methods:[],displayName:"ButtonFloating",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const q={title:"Components/Button",component:o,parameters:{}},S=[void 0,"small","default"],R=[void 0,"default","primary","secondary","destructive","quiet"],D={asDropdown:{control:{type:"boolean"}},size:{control:{type:"select"},options:S},justified:{control:{type:"boolean"}},label:{control:{type:"text"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},j=L(),u={render:a=>e.jsx(l,{p:"s","data-testid":"wrapper",width:"300px",border:"default",children:e.jsx(o,{...a,onClick:j})}),args:{label:"Label"},argTypes:{variant:{control:{type:"select"},options:R},...D},parameters:{...w("button"),chromatic:{disableSnapshot:!0}}},s=({children:a})=>e.jsx(l,{width:"100px",children:a}),g=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M9 7V2H7v5H2v2h5v5h2V9h5V7H9Z"})}),A={icon:e.jsx(g,{}),onClick:j};function n({rowTitle:a,...t}){return e.jsxs(l,{gap:"m",children:[e.jsx(s,{children:a}),e.jsx(s,{children:e.jsx(o,{variant:"primary",...t})}),e.jsx(s,{children:e.jsx(o,{variant:"destructive",...t})}),e.jsx(s,{children:e.jsx(o,{variant:"default",...t})}),e.jsx(s,{children:e.jsx(o,{variant:"quiet",...t})}),e.jsx(s,{children:e.jsx(o,{variant:"secondary",...t})})]})}const p={render:a=>{const t={...a,...A};return e.jsxs(l,{direction:"col",gap:"m",height:200,children:[e.jsxs(l,{gap:"m",children:[e.jsx(s,{children:"state/variant"}),e.jsx(s,{children:"primary"}),e.jsx(s,{children:"destructive"}),e.jsx(s,{children:"default"}),e.jsx(s,{children:"quiet"}),e.jsx(s,{children:"secondary"})]}),e.jsx(n,{rowTitle:"Default",...t}),e.jsx(n,{rowTitle:"Hover",...t,"data-testid":"hovered"}),e.jsx(n,{rowTitle:"Active",...t,"data-testid":"actived"}),e.jsx(n,{rowTitle:"Focused",...t,"data-testid":"focused"}),e.jsx(n,{rowTitle:"Disabled",...t,disabled:!0}),e.jsx(n,{rowTitle:"Loading",...t,loading:!0}),e.jsxs(l,{gap:"m",children:[e.jsx(s,{children:"Floating"}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(o,{variant:"primary",...t})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(o,{variant:"destructive",...t})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(o,{variant:"default",...t})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(o,{variant:"quiet",...t})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(o,{variant:"secondary",...t})})})]}),e.jsx(n,{rowTitle:"asDropdown",...t,asDropdown:!0}),e.jsxs(l,{gap:"m",children:[e.jsx(s,{children:"Justified"}),e.jsx(l,{width:"300px",children:e.jsx(o,{variant:"default",...t,justified:!0})})]}),e.jsxs(l,{gap:"m",children:[e.jsx(s,{children:"Overflow"}),e.jsx(l,{width:"300px",children:e.jsx(o,{variant:"default",...t,label:"Label overflow dolor sit amet consectetur adipiscing"})})]}),e.jsx(n,{rowTitle:"Small",...t,size:"small"}),e.jsx(n,{rowTitle:"Hover",...t,size:"small","data-testid":"hovered"}),e.jsx(n,{rowTitle:"Active",...t,size:"small","data-testid":"actived"}),e.jsx(n,{rowTitle:"Focused",...t,size:"small","data-testid":"focused"}),e.jsx(n,{rowTitle:"Disabled",...t,size:"small",disabled:!0}),e.jsx(n,{rowTitle:"Loading",...t,size:"small",loading:!0}),e.jsx(n,{rowTitle:"asDropdown",...t,size:"small",asDropdown:!0}),e.jsxs(l,{gap:"m",children:[e.jsx(s,{children:"Floating"}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(o,{variant:"primary",...t,size:"small"})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(o,{variant:"destructive",...t,size:"small"})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(o,{variant:"default",...t,size:"small"})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(o,{variant:"quiet",...t,size:"small"})})}),e.jsx(s,{children:e.jsx(d,{children:e.jsx(o,{variant:"secondary",...t,size:"small"})})})]}),e.jsxs(l,{gap:"m",children:[e.jsx(s,{children:"Justified"}),e.jsx(l,{width:"300px",gap:"m",children:e.jsx(o,{variant:"default",...t,size:"small",justified:!0})})]}),e.jsxs(l,{gap:"m",children:[e.jsx(s,{children:"Overflow"}),e.jsx(l,{width:"300px",children:e.jsx(o,{variant:"default",...t,label:"Label overflow dolor sit amet consectetur adipiscing",size:"small"})})]})]})},args:{size:"default",label:"Label"},argTypes:{size:{control:{type:"select"},options:S},label:{control:{type:"text"}}},parameters:{...w("button"),controls:{disable:!0},pseudo:{hover:'[data-testid="hovered"]',active:'[data-testid="actived"]',focusVisible:'[data-testid="focused"]'}}},x={render:a=>e.jsx(l,{p:"xs","data-testid":"wrapper",width:"300px",children:e.jsx(r,{icon:e.jsx(g,{}),...a,onClick:j})}),args:{label:"Label",variant:"default"},argTypes:{variant:{control:{type:"select"},options:R},...D},parameters:{...w("button","icon"),chromatic:{disableSnapshot:!0}}},i={icon:e.jsx(g,{}),onClick:j,label:"Label"};function c({variant:a}){return e.jsxs(l,{gap:"m",direction:"col",children:[e.jsx(r,{...i,variant:a}),e.jsx(r,{...i,variant:a,"data-testid":"hover"}),e.jsx(r,{...i,variant:a,"data-testid":"active"}),e.jsx(r,{...i,variant:a,"data-testid":"focus"}),e.jsx(r,{...i,variant:a,disabled:!0}),e.jsx(r,{...i,variant:a,loading:!0}),e.jsx(d,{children:e.jsx(r,{...i,variant:a})}),e.jsx(r,{...i,variant:a,size:"small"}),e.jsx(r,{...i,variant:a,size:"small","data-testid":"hover"}),e.jsx(r,{...i,variant:a,size:"small","data-testid":"active"}),e.jsx(r,{...i,variant:a,size:"small","data-testid":"focus"}),e.jsx(r,{...i,variant:a,size:"small",disabled:!0}),e.jsx(r,{...i,variant:a,size:"small",loading:!0}),e.jsx(d,{children:e.jsx(r,{...i,variant:a,size:"small"})})]})}const m={render:()=>e.jsxs(l,{gap:"m",children:[e.jsx(c,{variant:"primary"}),e.jsx(c,{variant:"destructive"}),e.jsx(c,{variant:"default"}),e.jsx(c,{variant:"quiet"}),e.jsx(c,{variant:"secondary"}),e.jsxs(l,{gap:"m",direction:"col",children:[e.jsx(s,{children:"Justified"}),e.jsxs(l,{width:"300px",alignContent:"start",direction:"col",gap:"m",children:[e.jsx(r,{variant:"default",...i,justified:!0}),e.jsx(r,{variant:"default",...i,size:"small",justified:!0})]})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-testid="hover"]',active:'[data-testid="active"]',focusVisible:'[data-testid="focus"]'}}};var h,v,f;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <Box p="s" data-testid="wrapper" width="300px" border="default">
      <Button {...props} onClick={onClick} />
    </Box>,
  args: {
    label: "Label"
  },
  argTypes: {
    variant: {
      control: {
        type: "select"
      },
      options: VARIANTS
    },
    ...argTypes
  },
  parameters: {
    ...getFigmaStorybookParams("button"),
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(f=(v=u.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var B,b,C;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => {
    const newProps = {
      ...props,
      ...defaultBtnProps
    } as ButtonProps;
    return <Box direction="col" gap="m" height={200}>
        <Box gap="m">
          <Cell>state/variant</Cell>
          <Cell>primary</Cell>
          <Cell>destructive</Cell>
          <Cell>default</Cell>
          <Cell>quiet</Cell>
          <Cell>secondary</Cell>
        </Box>
        <Row rowTitle="Default" {...newProps} />
        <Row rowTitle="Hover" {...newProps} data-testid="hovered" />
        <Row rowTitle="Active" {...newProps} data-testid="actived" />
        <Row rowTitle="Focused" {...newProps} data-testid="focused" />
        <Row rowTitle="Disabled" {...newProps} disabled />
        <Row rowTitle="Loading" {...newProps} loading />
        <Box gap="m">
          <Cell>Floating</Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="primary" {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="destructive" {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="default" {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="quiet" {...newProps} />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="secondary" {...newProps} />
            </ButtonFloating>
          </Cell>
        </Box>
        <Row rowTitle="asDropdown" {...newProps} asDropdown />
        <Box gap="m">
          <Cell>Justified</Cell>
          <Box width="300px">
            <Button variant="default" {...newProps} justified />
          </Box>
        </Box>
        <Box gap="m">
          <Cell>Overflow</Cell>
          <Box width="300px">
            <Button variant="default" {...newProps} label="Label overflow dolor sit amet consectetur adipiscing" />
          </Box>
        </Box>
        <Row rowTitle="Small" {...newProps} size="small" />
        <Row rowTitle="Hover" {...newProps} size="small" data-testid="hovered" />
        <Row rowTitle="Active" {...newProps} size="small" data-testid="actived" />
        <Row rowTitle="Focused" {...newProps} size="small" data-testid="focused" />
        <Row rowTitle="Disabled" {...newProps} size="small" disabled />
        <Row rowTitle="Loading" {...newProps} size="small" loading />
        <Row rowTitle="asDropdown" {...newProps} size="small" asDropdown />
        <Box gap="m">
          <Cell>Floating</Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="primary" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="destructive" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="default" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="quiet" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
          <Cell>
            <ButtonFloating>
              <Button variant="secondary" {...newProps} size="small" />
            </ButtonFloating>
          </Cell>
        </Box>
        <Box gap="m">
          <Cell>Justified</Cell>
          <Box width="300px" gap="m">
            <Button variant="default" {...newProps} size="small" justified />
          </Box>
        </Box>
        <Box gap="m">
          <Cell>Overflow</Cell>
          <Box width="300px">
            <Button variant="default" {...newProps} label="Label overflow dolor sit amet consectetur adipiscing" size="small" />
          </Box>
        </Box>
      </Box>;
  },
  args: {
    size: "default",
    label: "Label"
  },
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: SIZES
    },
    label: {
      control: {
        type: "text"
      }
    }
  },
  parameters: {
    ...getFigmaStorybookParams("button"),
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-testid="hovered"]',
      active: '[data-testid="actived"]',
      focusVisible: '[data-testid="focused"]'
    }
  }
}`,...(C=(b=p.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var y,P,T;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <Box p="xs" data-testid="wrapper" width="300px">
      <IconButton icon={<DemoIcon />} {...props} onClick={onClick} />
    </Box>,
  args: {
    label: "Label",
    variant: "default"
  },
  argTypes: {
    variant: {
      control: {
        type: "select"
      },
      options: VARIANTS
    },
    ...argTypes
  },
  parameters: {
    ...getFigmaStorybookParams("button", "icon"),
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(T=(P=x.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var z,F,I;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Box gap="m">
      <IconColumn variant="primary" />
      <IconColumn variant="destructive" />
      <IconColumn variant="default" />
      <IconColumn variant="quiet" />
      <IconColumn variant="secondary" />
      <Box gap="m" direction="col">
        <Cell>Justified</Cell>
        <Box width="300px" alignContent="start" direction="col" gap="m">
          <IconButton variant="default" {...defaultIconProps} justified />
          <IconButton variant="default" {...defaultIconProps} size="small" justified />
        </Box>
      </Box>
    </Box>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-testid="hover"]',
      active: '[data-testid="active"]',
      focusVisible: '[data-testid="focus"]'
    }
  }
}`,...(I=(F=m.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const k=["Playground","VisualTest","IconPlayground","VisualTestIcon"],M=Object.freeze(Object.defineProperty({__proto__:null,IconPlayground:x,Playground:u,VisualTest:p,VisualTestIcon:m,__namedExportsOrder:k,default:q},Symbol.toStringTag,{value:"Module"}));export{x as I,u as P,M as S,p as V};
