import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{ae as s,af as l,ag as a}from"./index-CAy-nCaq.js";import{Playground as n}from"./Tooltip.stories-DicvZHTV.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./figma-hO1OATkS.js";import"./Tooltip-DjBJpIFd.js";import"./renderOrClone-Cb9xqVtH.js";import"./useId-CDjE3YUk.js";import"./Box-25vWnmJ9.js";function i(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Tooltip"}),`
`,e.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsx(t.p,{children:"Tooltips are contextual helpers that show information about an element when being hovered or focused."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Tooltip, Button } from "@qlik-trial/sprout-css-react";

<Tooltip title="Hello world" placement="top">
  <Button label="Hover me" />
</Tooltip>;
`})}),`
`,e.jsx(l,{of:n}),`
`,e.jsx(a,{of:n}),`
`,e.jsxs(t.p,{children:["Note: For performance reason we do not mount the content of the tooltip except if it has an explicit ",e.jsx(t.code,{children:"id"}),`.
That is due to accessiblity requirement, if there is an id, an other element may refer to it using `,e.jsx(t.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",rel:"nofollow",children:"W3/WAI/ARIA/APG Tooltip"})}),`
`,e.jsx(t.p,{children:"HTML structure"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The element that serves as the tooltip container has role ",e.jsx(t.code,{children:"tooltip"}),"."]}),`
`]}),`
`,e.jsx(t.p,{children:"Keyboard navigation"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Escape"}),": Dismisses the Tooltip."]}),`
`]})]})}function v(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{v as default};
