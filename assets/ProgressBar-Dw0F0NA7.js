import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{c as p}from"./Box-Bo_17ADl.js";import{r as g}from"./index-BwDkhjyp.js";import{T as h}from"./Tooltip-Cu6rj0j6.js";const b="_progress_15gsh_15",y="_fixed_15gsh_22",x="_hidden_15gsh_29",N="_wrapper_15gsh_33",j="_percent_15gsh_40",T="_undetermined_15gsh_47",v="_label_15gsh_55",s={progress:b,fixed:y,hidden:x,wrapper:N,percent:j,undetermined:T,"sprout-progressbar-keyframes":"_sprout-progressbar-keyframes_15gsh_1",label:v};function w(r){return r?r>100?100:r<0?0:r:0}const m=({percent:r,label:i,tooltip:t,contained:c,...u})=>{const a=r?"determined":"undetermined",o=a==="undetermined"?25:w(r),_={width:`${o}%`},d=g.useId(),f=p(s.progress,{[s.hidden]:o===0,[s.fixed]:!c});let l=n.jsx("div",{className:s.wrapper,children:n.jsx("div",{style:_,className:p(s.percent,{[s.undetermined]:a==="undetermined"})})});const e={};return t?(e["aria-label"]=t,l=n.jsx(h,{id:d,title:t,placement:"bottom",children:l})):i&&(e["aria-labelledby"]=d),a==="determined"?(e.role="progressbar",e["aria-valuenow"]=o,e["aria-valuemin"]=0,e["aria-valuemax"]=100):a==="undetermined"&&(e.role="status",e["aria-busy"]=!0),n.jsxs("div",{className:f,...e,...u,children:[l,i?n.jsx("span",{className:s.label,id:d,children:i}):null]})};m.displayName="ProgressBar";m.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{percent:{required:!1,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},contained:{required:!1,tsType:{name:"boolean"},description:""}}};export{m as P};
