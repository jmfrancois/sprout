import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{ae as s,af as l,ag as c}from"./index-CAy-nCaq.js";import{Playground as t}from"./Link.stories-BpXwkEfA.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./figma-hO1OATkS.js";import"./Link-BBccP2Lz.js";import"./Box-25vWnmJ9.js";import"./GotoIcon--SVsbwfc.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Link"}),`
`,e.jsx(n.h1,{id:"link",children:"Link"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Link } from "@qlik-trial/sprout-css-react";

<Link href="/folder" >Folder</Link>
`})}),`
`,e.jsx(n.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(l,{of:t,sourceState:"shown"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/link/",rel:"nofollow",children:"W3/WAI/ARIA/APG link"})}),`
`,e.jsx(n.p,{children:"HTML structure:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The current implementation use the native HTML ",e.jsx(n.code,{children:"a"})," tag so it has the implicit role ",e.jsx(n.code,{children:"link"}),"."]}),`
`,e.jsxs(n.li,{children:["Use the Link component ",e.jsx(n.code,{children:"disabled"})," property will have to effect:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-disabled"})," to indicate that the link is not available"]}),`
`,e.jsxs(n.li,{children:["set ",e.jsx(n.code,{children:"tabindex"})," to ",e.jsx(n.code,{children:"-1"})," to remove the link from the tab order"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Keyboard Interaction:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Enter"}),`: Executes the link and moves focus to the link target.
`,e.jsx(n.code,{children:"Shift + F10"})," on ",e.jsx(n.code,{children:"MS Windows"}),": Opens a context menu for the link."]})]})}function y(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{y as default};
