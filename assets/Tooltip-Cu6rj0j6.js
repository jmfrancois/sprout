import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{r as o}from"./index-BwDkhjyp.js";import{u as j,o as F,f as _,s as k,a as H,b as q,c as C,d as B,e as P,g as I,h as L,F as N,i as O}from"./floating-ui.react-BqcbUs5N.js";import{u as A}from"./useId-Nx1NlIzw.js";const D="_container_1pj1k_6",S="_arrow_1pj1k_31",f={container:D,arrow:S};function G(e){return typeof e=="function"}function p(e,a,n){return G(e)?e(a,n):o.isValidElement(e)&&a?o.cloneElement(e,{ref:n,...a}):e}p.__docgenInfo={description:"",methods:[],displayName:"renderOrClone"};function U(e){return a=>{e.forEach(n=>{typeof n=="function"?n(a):n!=null&&(n.current=a)})}}const t={delay:1200,hovered:!1},v=o.forwardRef(({id:e,children:a,title:n,isDisplayedForTesting:u,placement:m="top",...y},g)=>{const b=A(e),[s,h]=o.useState(u),[d,l]=o.useState(u);o.useEffect(()=>{s&&!t.hovered?setTimeout(()=>{t.hovered=!0,l(!0)},t.delay):s&&t.hovered?(clearTimeout(t.timeout),t.timeout=void 0,l(!0)):(l(!1),t.hovered&&(t.timeout=setTimeout(()=>{t.hovered=!1},t.delay)))},[s,d]);const c=o.useRef(null),r=j({placement:m,open:s,onOpenChange:h,middleware:[F(10),_({crossAxis:m.includes("-"),fallbackAxisSideDirection:"start",padding:4}),k({padding:4}),H({element:c})],whileElementsMounted:q}),T=C(r.context,{move:!1,handleClose:B()}),w=P(r.context),R=I(r.context),{getReferenceProps:E,getFloatingProps:x}=L([T,w,R]),M=U([g,r.refs.setReference]);return i.jsxs(i.Fragment,{children:[p(a,{...E()},M),s&&i.jsx(N,{children:i.jsxs("div",{...x(),role:"tooltip",id:b,ref:r.refs.setFloating,className:f.container,"data-displayed":d,style:r.floatingStyles,...y,children:[i.jsx(O,{ref:c,context:r.context,className:f.arrow}),n]})})]})});v.displayName="Tooltip";v.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:`| "top-start"
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
| "left-start"`,elements:[{name:"literal",value:'"top-start"'},{name:"literal",value:'"top"'},{name:"literal",value:'"top-end"'},{name:"literal",value:'"right-start"'},{name:"literal",value:'"right"'},{name:"literal",value:'"right-end"'},{name:"literal",value:'"bottom-end"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"bottom-start"'},{name:"literal",value:'"left-end"'},{name:"literal",value:'"left"'},{name:"literal",value:'"left-start"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},isDisplayedForTesting:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"T | GeneratorFunction<T, P, R>",elements:[{name:"ReactElement"},{name:"signature",type:"function",raw:"(props: P, ref?: R) => T",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  onHover?: (event: any) => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
  "aria-describedby"?: string;
}`,signature:{properties:[{key:"onHover",value:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}},required:!1}},{key:"onFocus",value:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}},required:!1}},{key:"onBlur",value:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}},required:!1}},{key:"aria-describedby",value:{name:"string",required:!1}}]}},name:"props"},{type:{name:"union",raw:"MutableRefObject<HTMLButtonElement> | RefCallback<HTMLButtonElement>",elements:[{name:"MutableRefObject",elements:[{name:"HTMLButtonElement"}],raw:"MutableRefObject<HTMLButtonElement>"},{name:"RefCallback",elements:[{name:"HTMLButtonElement"}],raw:"RefCallback<HTMLButtonElement>"}]},name:"ref"}],return:{name:"ReactElement"}}}]},description:""}}};export{v as T};