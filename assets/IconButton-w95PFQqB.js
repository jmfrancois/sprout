import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as i}from"./index-ClcD9ViR.js";import{T as _}from"./Tooltip-DjBJpIFd.js";import{P as u}from"./ProgressCircular-Bpk7vv8H.js";const p="_field_1m97y_2",f="_fieldcontent_1m97y_17",y="_content_1m97y_27",x="_small_1m97y_35",g="_field_readonly_1m97y_43",h="_field_disabled_1m97y_47",v="_field_error_1m97y_53",j="_input_1m97y_58",b="_icon_button_1m97y_162",w={field:p,fieldcontent:f,content:y,small:x,field_readonly:g,field_disabled:h,field_error:v,input:j,icon_button:b},L=({onClick:s,label:t,size:l,...r})=>{const a=i.useId(),[d,n]=i.useState(!1),c=()=>{const o=s();o instanceof Promise&&(n(!0),o.then(()=>{n(!1)}).catch(m=>{console.error(m),n(!1)}))};return e.jsx(_,{placement:"top",title:t,id:a,children:e.jsx("button",{onClick:c,"data-size":l,type:"button",className:w.icon_button,...r,"aria-label":t,children:e.jsx("span",{children:d?e.jsx(u,{}):e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("g",{children:e.jsxs("g",{children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.1464 13.8536L2.14642 2.85355L2.85353 2.14645L13.8535 13.1464L13.1464 13.8536Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8535 2.85355L2.85353 13.8536L2.14642 13.1464L13.1464 2.14645L13.8535 2.85355Z",fill:"currentColor"})]})})})})})})};L.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{label:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "s"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void | Promise<any>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<any>",elements:[{name:"void"},{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}]}}},description:""}}};export{L as I,w as s};