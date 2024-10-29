import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import{ae as i,af as n,ag as l}from"./index-D_mPI9qN.js";import{Playground as r,Group as a}from"./Checkbox.stories-D8YGM-6R.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Q9zOLvKt.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-CjQa9iMn.js";import"./figma-DdOIv0jn.js";import"./Checkbox-CgutXkj_.js";import"./Box-Bo_17ADl.js";import"./HelperText-CyyCsV2o.js";import"./useId-Nx1NlIzw.js";import"./useControl-BksuLBKc.js";import"./useFieldAriaProps-DGTkAVsv.js";function s(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Checkbox"}),`
`,e.jsx(o.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(o.p,{children:"Checkboxes are form elements that allows a user to select one or multiple options from a list. Checkboxes can also be used to turn on and off controls in an interface."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { CheckboxField } from "@qlik-trial/sprout-css-react";

<CheckboxField name="myfield" label="Label" helpText="help me" checked disabled onChange={() => {}} />;
`})}),`
`,e.jsx(n,{of:r,sourceState:"shown"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",rel:"nofollow",children:"W3/WAI/ARIA/APG Checkbox"})}),`
`,e.jsx(o.p,{children:"HTML Structure"}),`
`,e.jsxs(o.p,{children:["The current component use a native ",e.jsx(o.code,{children:"input"})," tag using the attribute type set to ",e.jsx(o.code,{children:"checkbox"}),". It means we do not need aria attributes except for the tri-state to express the ",e.jsx(o.code,{children:"mixed"})," value."]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Checkbox has the ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#technical_summary",rel:"nofollow",children:"implicit role"})," ",e.jsx(o.code,{children:"checkbox"}),"."]}),`
`,e.jsxs(o.li,{children:["Checkbox support all ",e.jsx(o.a,{href:"https://www.w3.org/WAI/tutorials/forms/labels/",rel:"nofollow",children:"accessible label"})," using ",e.jsx(o.code,{children:"label"})," props for example."]}),`
`,e.jsxs(o.li,{children:["Checkbox when checked add the ",e.jsx(o.code,{children:"checked"})," html attribute so it has the implicit corresponding state."]}),`
`]}),`
`,e.jsx(o.p,{children:"Keyboard"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Space"})," change the focused checkbox state to checked if unchecked and vice versa."]}),`
`]}),`
`,e.jsx(o.h2,{id:"checkboxgroup-variant",children:"CheckboxGroup variant"}),`
`,e.jsx(n,{of:a})]})}function S(t={}){const{wrapper:o}={...c(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{S as default};
