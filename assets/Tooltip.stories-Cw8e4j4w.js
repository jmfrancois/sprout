import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as d}from"./index-BwDkhjyp.js";import{g as b}from"./figma-DdOIv0jn.js";import{T as o}from"./Tooltip-Cu6rj0j6.js";import{B as i}from"./Box-Bo_17ADl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./floating-ui.react-BqcbUs5N.js";import"./index-CS4BWtGh.js";import"./useId-Nx1NlIzw.js";const y=[void 0,"top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],L={title:"Components/Tooltip",parameters:b("tooltip")},g={placement:{control:{type:"select"},options:y},id:{control:{type:"text"}}};function T({children:a}){return d.useEffect(()=>{const n=document.querySelector('[data-testid="wrapper"]');n==null||n.scroll(270,200)},[]),e.jsx(i,{"data-testid":"wrapper",p:"xl",height:150,width:500,border:"default",style:{overflow:"scroll"},children:a})}const t=({btnLabel:a,...n})=>e.jsx(T,{children:e.jsx(i,{height:500,width:1e3,justify:"center",alignItems:"center",grow:!0,noShrink:!0,children:e.jsx(o,{...n,children:e.jsx("button",{type:"button",children:a})})})});t.args={title:"Tooltip",btnLabel:"button"};t.argTypes={...g};t.parameters={chromatic:{disableSnapshot:!0}};const r=()=>e.jsxs(i,{p:"3xl",width:500,justify:"start",alignItems:"center",gap:"3xl",direction:"col",children:[e.jsx(o,{title:"placement=top",isDisplayedForTesting:!0,placement:"top",children:e.jsx("button",{type:"button",children:"Top"})}),e.jsx(o,{title:"placement=left",isDisplayedForTesting:!0,placement:"left",children:e.jsx("button",{type:"button",children:"Top"})}),e.jsx(o,{title:"placement=right",isDisplayedForTesting:!0,placement:"right",children:e.jsx("button",{type:"button",children:"Top"})}),e.jsx(o,{title:"placement=bottom",isDisplayedForTesting:!0,placement:"bottom",children:e.jsx("button",{type:"button",children:"Top"})})]});t.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:`| "top-start"
| "top"
| "top-end"
| "right-start"
| "right"
| "right-end"
| "bottom-end"
| "bottom"
| "bottom-start"
| "left-end"
| "left"
| "left-start"`,elements:[{name:"literal",value:'"top-start"'},{name:"literal",value:'"top"'},{name:"literal",value:'"top-end"'},{name:"literal",value:'"right-start"'},{name:"literal",value:'"right"'},{name:"literal",value:'"right-end"'},{name:"literal",value:'"bottom-end"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"bottom-start"'},{name:"literal",value:'"left-end"'},{name:"literal",value:'"left"'},{name:"literal",value:'"left-start"'}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},isDisplayedForTesting:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"T | GeneratorFunction<T, P, R>",elements:[{name:"ReactElement"},{name:"signature",type:"function",raw:"(props: P, ref?: R) => T",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  onHover?: (event: any) => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
  "aria-describedby"?: string;
}`,signature:{properties:[{key:"onHover",value:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}},required:!1}},{key:"onFocus",value:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}},required:!1}},{key:"onBlur",value:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}},required:!1}},{key:"aria-describedby",value:{name:"string",required:!1}}]}},name:"props"},{type:{name:"union",raw:"MutableRefObject<HTMLButtonElement> | RefCallback<HTMLButtonElement>",elements:[{name:"MutableRefObject",elements:[{name:"HTMLButtonElement"}],raw:"MutableRefObject<HTMLButtonElement>"},{name:"RefCallback",elements:[{name:"HTMLButtonElement"}],raw:"RefCallback<HTMLButtonElement>"}]},name:"ref"}],return:{name:"ReactElement"}}}]},description:""},btnLabel:{required:!0,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var l,s,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`({
  btnLabel,
  ...props
}: TooltipProps & {
  btnLabel: string;
}) => <InitScroll>
    <Box height={500} width={1000} justify="center" alignItems="center" grow noShrink>
      <Tooltip {...props}>
        <button type="button">{btnLabel}</button>
      </Tooltip>
    </Box>
  </InitScroll>`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var m,u,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Box p="3xl" width={500} justify="start" alignItems="center" gap="3xl" direction="col">
    <Tooltip title="placement=top" isDisplayedForTesting placement="top">
      <button type="button">Top</button>
    </Tooltip>
    <Tooltip title="placement=left" isDisplayedForTesting placement="left">
      <button type="button">Top</button>
    </Tooltip>
    <Tooltip title="placement=right" isDisplayedForTesting placement="right">
      <button type="button">Top</button>
    </Tooltip>
    <Tooltip title="placement=bottom" isDisplayedForTesting placement="bottom">
      <button type="button">Top</button>
    </Tooltip>
  </Box>`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const R=["Playground","VisualTest"];export{t as Playground,r as VisualTest,R as __namedExportsOrder,L as default};
