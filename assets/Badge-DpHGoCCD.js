import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as d}from"./index-DUy19JZU.js";import{ae as c,af as i,ag as o}from"./index-CAy-nCaq.js";import{S as l,D as s,N as r}from"./Badge.stories-0nEboyZg.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./figma-hO1OATkS.js";import"./Badge-CDdH9Zu0.js";import"./Box-25vWnmJ9.js";import"./Avatar-CswkKgGg.js";function a(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Components/Trigger/Badge",of:l}),`
`,e.jsx(t.h1,{id:"badge",children:"Badge"}),`
`,e.jsx(t.p,{children:"A badge serves as a visual indicator designed to attract attention to its accompanying element or to display additional information. Badges are commonly used to show new or unread items, highlight changes, or for decorative purposes."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Badge } from "@qlik-trial/sprout-css-react";

<Badge type="dot" color="default" />;
<Badge type="number" text="1" color="default" />;
`})}),`
`,e.jsx(t.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(t.h3,{id:"dot",children:"dot"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(t.h3,{id:"number",children:"number"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"HTML structure"}),`
`,e.jsxs(t.p,{children:["Badge use a simple ",e.jsx(t.code,{children:"span"}),` element.
In some context you will have to add `,e.jsx(t.code,{children:'role="status"'})," and ",e.jsx(t.code,{children:'aria-live="polite"'}),` to indicate this number may changes depending on some user actions.
Adding an aria-label to the badge will always be considered useful for screen reader users but it is not required.
But if the value is a static number it is considered useless to add those attributes.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Badge type="number" text="14" role="status" arial-live="polite" aria-label="14 items in your shopping cart" />
`})})]})}function N(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{N as default};
