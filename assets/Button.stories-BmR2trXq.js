import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{f as S}from"./index-CjQa9iMn.js";import{g as w}from"./figma-DdOIv0jn.js";import{s as _}from"./Button.module-Bksq7zkq.js";import{B as a}from"./Button-35iONiNZ.js";import{B as l}from"./Box-Bo_17ADl.js";import{I as o}from"./IconButton-CWRPr6lS.js";function d({children:s}){return e.jsx("div",{className:_.floating,children:s})}d.__docgenInfo={description:"",methods:[],displayName:"ButtonFloating",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const V={title:"Components/Button",component:a,parameters:{}},q=[void 0,"small","default"],R=[void 0,"default","primary","secondary","destructive","quiet"],D={asDropdown:{control:{type:"boolean"}},size:{control:{type:"select"},options:q},justified:{control:{type:"boolean"}},label:{control:{type:"text"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},j=S(),c=s=>e.jsx(l,{p:"s","data-testid":"wrapper",width:"300px",border:"default",children:e.jsx(a,{...s,onClick:j})});c.args={label:"Label"};c.argTypes={variant:{control:{type:"select"},options:R},...D};c.parameters={...w("button"),chromatic:{disableSnapshot:!0}};const n=({children:s})=>e.jsx(l,{width:"100px",children:s}),g=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M9 7V2H7v5H2v2h5v5h2V9h5V7H9Z"})}),N={icon:e.jsx(g,{}),onClick:j};function r({rowTitle:s,...t}){return e.jsxs(l,{gap:"m",children:[e.jsx(n,{children:s}),e.jsx(n,{children:e.jsx(a,{variant:"primary",...t})}),e.jsx(n,{children:e.jsx(a,{variant:"destructive",...t})}),e.jsx(n,{children:e.jsx(a,{variant:"default",...t})}),e.jsx(n,{children:e.jsx(a,{variant:"quiet",...t})}),e.jsx(n,{children:e.jsx(a,{variant:"secondary",...t})})]})}const u=s=>{const t={...s,...N};return e.jsxs(l,{direction:"col",gap:"m",height:200,children:[e.jsxs(l,{gap:"m",children:[e.jsx(n,{children:"state/variant"}),e.jsx(n,{children:"primary"}),e.jsx(n,{children:"destructive"}),e.jsx(n,{children:"default"}),e.jsx(n,{children:"quiet"}),e.jsx(n,{children:"secondary"})]}),e.jsx(r,{rowTitle:"Default",...t}),e.jsx(r,{rowTitle:"Hover",...t,"data-testid":"hovered"}),e.jsx(r,{rowTitle:"Active",...t,"data-testid":"actived"}),e.jsx(r,{rowTitle:"Focused",...t,"data-testid":"focused"}),e.jsx(r,{rowTitle:"Disabled",...t,disabled:!0}),e.jsx(r,{rowTitle:"Loading",...t,loading:!0}),e.jsxs(l,{gap:"m",children:[e.jsx(n,{children:"Floating"}),e.jsx(n,{children:e.jsx(d,{children:e.jsx(a,{variant:"primary",...t})})}),e.jsx(n,{children:e.jsx(d,{children:e.jsx(a,{variant:"destructive",...t})})}),e.jsx(n,{children:e.jsx(d,{children:e.jsx(a,{variant:"default",...t})})}),e.jsx(n,{children:e.jsx(d,{children:e.jsx(a,{variant:"quiet",...t})})}),e.jsx(n,{children:e.jsx(d,{children:e.jsx(a,{variant:"secondary",...t})})})]}),e.jsx(r,{rowTitle:"asDropdown",...t,asDropdown:!0}),e.jsxs(l,{gap:"m",children:[e.jsx(n,{children:"Justified"}),e.jsx(l,{width:"300px",children:e.jsx(a,{variant:"default",...t,justified:!0})})]}),e.jsx(r,{rowTitle:"Small",...t,size:"small"}),e.jsx(r,{rowTitle:"Hover",...t,size:"small","data-testid":"hovered"}),e.jsx(r,{rowTitle:"Active",...t,size:"small","data-testid":"actived"}),e.jsx(r,{rowTitle:"Focused",...t,size:"small","data-testid":"focused"}),e.jsx(r,{rowTitle:"Disabled",...t,size:"small",disabled:!0}),e.jsx(r,{rowTitle:"Loading",...t,size:"small",loading:!0}),e.jsx(r,{rowTitle:"asDropdown",...t,size:"small",asDropdown:!0}),e.jsxs(l,{gap:"m",children:[e.jsx(n,{children:"Floating"}),e.jsx(n,{children:e.jsx(d,{children:e.jsx(a,{variant:"primary",...t,size:"small"})})}),e.jsx(n,{children:e.jsx(d,{children:e.jsx(a,{variant:"destructive",...t,size:"small"})})}),e.jsx(n,{children:e.jsx(d,{children:e.jsx(a,{variant:"default",...t,size:"small"})})}),e.jsx(n,{children:e.jsx(d,{children:e.jsx(a,{variant:"quiet",...t,size:"small"})})}),e.jsx(n,{children:e.jsx(d,{children:e.jsx(a,{variant:"secondary",...t,size:"small"})})})]}),e.jsxs(l,{gap:"m",children:[e.jsx(n,{children:"Justified"}),e.jsx(l,{width:"300px",children:e.jsx(a,{variant:"default",...t,size:"small",justified:!0})})]})]})};u.args={size:"default",label:"Label"};u.argTypes={size:{control:{type:"select"},options:q},label:{control:{type:"text"}}};u.parameters={...w("button"),controls:{disable:!0},pseudo:{hover:'[data-testid="hovered"]',active:'[data-testid="actived"]',focusVisible:'[data-testid="focused"]'}};const p=s=>e.jsx(l,{p:"xs","data-testid":"wrapper",width:"300px",children:e.jsx(o,{icon:e.jsx(g,{}),...s,onClick:j})});p.args={label:"Label",variant:"default"};p.argTypes={variant:{control:{type:"select"},options:R},...D};p.parameters={...w("button","icon"),chromatic:{disableSnapshot:!0}};const i={icon:e.jsx(g,{}),onClick:j,label:"Label"};function m({variant:s}){return e.jsxs(l,{gap:"m",direction:"col",children:[e.jsx(o,{...i,variant:s}),e.jsx(o,{...i,variant:s,"data-testid":"hover"}),e.jsx(o,{...i,variant:s,"data-testid":"active"}),e.jsx(o,{...i,variant:s,"data-testid":"focus"}),e.jsx(o,{...i,variant:s,disabled:!0}),e.jsx(o,{...i,variant:s,loading:!0}),e.jsx(d,{children:e.jsx(o,{...i,variant:s})}),e.jsx(o,{...i,variant:s,size:"small"}),e.jsx(o,{...i,variant:s,size:"small","data-testid":"hover"}),e.jsx(o,{...i,variant:s,size:"small","data-testid":"active"}),e.jsx(o,{...i,variant:s,size:"small","data-testid":"focus"}),e.jsx(o,{...i,variant:s,size:"small",disabled:!0}),e.jsx(o,{...i,variant:s,size:"small",loading:!0}),e.jsx(d,{children:e.jsx(o,{...i,variant:s,size:"small"})})]})}const x=()=>e.jsxs(l,{gap:"m",children:[e.jsx(m,{variant:"primary"}),e.jsx(m,{variant:"destructive"}),e.jsx(m,{variant:"default"}),e.jsx(m,{variant:"quiet"}),e.jsx(m,{variant:"secondary"}),e.jsxs(l,{gap:"m",direction:"col",children:[e.jsx(n,{children:"Justified"}),e.jsxs(l,{width:"300px",alignContent:"start",direction:"col",gap:"m",children:[e.jsx(o,{variant:"default",...i,justified:!0}),e.jsx(o,{variant:"default",...i,size:"small",justified:!0})]})]})]});x.parameters={controls:{disable:!0},pseudo:{hover:'[data-testid="hover"]',active:'[data-testid="active"]',focusVisible:'[data-testid="focus"]'}};c.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "primary" | "secondary" | "destructive" | "quiet"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"destructive"'},{name:"literal",value:'"quiet"'}]},description:""},asDropdown:{required:!1,tsType:{name:"boolean"},description:""},justified:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "default"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"default"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"VisualTest",props:{label:{required:!0,tsType:{name:"string"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"IconPlayground",props:{label:{required:!0,tsType:{name:"string"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"VisualTestIcon"};var h,v,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`(props: ButtonProps) => <Box p="s" data-testid="wrapper" width="300px" border="default">
    <Button {...props} onClick={onClick} />
  </Box>`,...(f=(v=c.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var B,y,C;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`(props: Omit<ButtonProps, "onClick" | "icon"> & {
  label: string;
}) => {
  const newProps = {
    ...props,
    ...defaultBtnProps
  };
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
        <Box width="300px">
          <Button variant="default" {...newProps} size="small" justified />
        </Box>
      </Box>
    </Box>;
}`,...(C=(y=u.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var T,b,P;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`(props: ButtonIconProps) => <Box p="xs" data-testid="wrapper" width="300px">
    <IconButton icon={<DemoIcon />} {...props} onClick={onClick} />
  </Box>`,...(P=(b=p.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var z,F,I;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`() => <Box gap="m">
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
  </Box>`,...(I=(F=x.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const L=["Playground","VisualTest","IconPlayground","VisualTestIcon"],Z=Object.freeze(Object.defineProperty({__proto__:null,IconPlayground:p,Playground:c,VisualTest:u,VisualTestIcon:x,__namedExportsOrder:L,default:V},Symbol.toStringTag,{value:"Module"}));export{p as I,c as P,Z as S,u as V};
