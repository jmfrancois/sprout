import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{ae as t,af as l,ag as c}from"./index-CAy-nCaq.js";import{Determined as n}from"./ProgressBar.stories-CfAxzP1C.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./figma-hO1OATkS.js";import"./ProgressBar-CgwIn6Ly.js";import"./Box-25vWnmJ9.js";import"./a11yProps-Bd_FexwF.js";import"./Tooltip-DjBJpIFd.js";import"./renderOrClone-Cb9xqVtH.js";import"./useId-CDjE3YUk.js";function i(s){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Components/ProgressBar"}),`
`,e.jsx(r.h1,{id:"progress",children:"Progress"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { ProgressBar } from "@qlik-trial/sprout-css-react";

<ProgressBar percent="70" aria-label="work in progress" />;
`})}),`
`,e.jsx(r.h2,{id:"progressbar",children:"ProgressBar"}),`
`,e.jsx(r.p,{children:"Used for progress representation."}),`
`,e.jsx(l,{of:n,sourceState:"shown"}),`
`,e.jsx(c,{of:n}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role",rel:"nofollow",children:"MDN ARIA: progressbar role"})}),`
`,e.jsx(r.p,{children:"HTML Structure"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"ProgressBar"})," uses the HTML tag ",e.jsx(r.code,{children:"div"})]}),`
`,e.jsxs(r.li,{children:["if the props ",e.jsx(r.code,{children:"percent"})," is set",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["the role ",e.jsx(r.code,{children:"progressbar"})," is used."]}),`
`,e.jsxs(r.li,{children:["the attributes ",e.jsx(r.code,{children:"aria-value[min|max|now]"})," are added"]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:["if no ",e.jsx(r.code,{children:"percent"})," props is passed it is considered as undetermined",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["the role ",e.jsx(r.code,{children:"status"})," is used."]}),`
`,e.jsxs(r.li,{children:["the attributes ",e.jsx(r.code,{children:"aria-busy"})," are added"]}),`
`]}),`
`]}),`
`]})]})}function v(s={}){const{wrapper:r}={...o(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(i,{...s})}):i(s)}export{v as default};
