import{j as e}from"./jsx-runtime-Nms4Y4qS.js";const c="_container_fnrrf_6",i="_background_fnrrf_6",m="_progress_fnrrf_13",u="_dash_fnrrf_1",t={container:c,background:i,progress:m,dash:u},f={s:"0 0 12 12",m:"0 0 16 16",l:"0 0 32 32"},a={s:5,m:7,l:15},o={s:Math.PI*(a.s*2),m:Math.PI*(a.m*2),l:Math.PI*(a.l*2)};function n(r,s="m"){return r?{strokeDasharray:o[s],strokeDashoffset:(100-r)/100*o[s]}:{strokeDasharray:o[s]/10,strokeDashoffset:0}}const d=({size:r="m",percent:s,...l})=>e.jsxs("svg",{focusable:"false",className:t.container,"data-size":r,viewBox:f[r],"data-testid":"progress-circular","aria-label":s?`${s}%`:"Loading","data-animate":s?"false":"true","aria-busy":"true",...l,children:[e.jsx("circle",{className:t.background,r:a[r],cx:a[r]+1,cy:a[r]+1,fill:"none",style:n(100,r)}),e.jsx("circle",{className:t.progress,r:a[r],cx:a[r]+1,cy:a[r]+1,fill:"none",style:n(s,r)})]});d.__docgenInfo={description:"",methods:[],displayName:"ProgressCircular",props:{size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},percent:{required:!1,tsType:{name:"number"},description:""}}};export{d as P};