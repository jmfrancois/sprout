import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as i}from"./index-BwDkhjyp.js";import{T as _}from"./Tooltip-Cu6rj0j6.js";import{P as u}from"./ProgressCircular-DToFE0Lx.js";const m="_field_ckdp3_2",f="_fieldcontent_ckdp3_17",x="_content_ckdp3_27",y="_small_ckdp3_35",g="_field_readonly_ckdp3_43",h="_field_disabled_ckdp3_47",k="_field_error_ckdp3_53",v="_input_ckdp3_58",j="_icon_button_ckdp3_158",b={field:m,fieldcontent:f,content:x,small:y,field_readonly:g,field_disabled:h,field_error:k,input:v,icon_button:j},w=({onClick:s,label:t,size:l,...r})=>{const d=i.useId(),[c,n]=i.useState(!1),a=()=>{const o=s();o instanceof Promise&&(n(!0),o.then(()=>{n(!1)}).catch(p=>{console.error(p),n(!1)}))};return e.jsx(_,{placement:"top",title:t,id:d,children:e.jsx("button",{onClick:a,"data-size":l,type:"button",className:b.icon_button,...r,"aria-label":t,children:e.jsx("span",{children:c?e.jsx(u,{}):e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("g",{children:e.jsxs("g",{children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.1464 13.8536L2.14642 2.85355L2.85353 2.14645L13.8535 13.1464L13.1464 13.8536Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8535 2.85355L2.85353 13.8536L2.14642 13.1464L13.1464 2.14645L13.8535 2.85355Z",fill:"currentColor"})]})})})})})})};w.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{label:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "s"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void | Promise<any>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<any>",elements:[{name:"void"},{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}]}}},description:""}}};export{w as I,b as s};
