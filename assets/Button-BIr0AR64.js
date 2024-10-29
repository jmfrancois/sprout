import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as r}from"./index-DlpNa54Y.js";import{ae as l,af as i,ag as a}from"./index-D_mPI9qN.js";import{S as c,P as e,V as d,I as u}from"./Button.stories-BmR2trXq.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Q9zOLvKt.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-CjQa9iMn.js";import"./figma-DdOIv0jn.js";import"./Button.module-Bksq7zkq.js";import"./Button-35iONiNZ.js";import"./Box-Bo_17ADl.js";import"./DropdownArrowIcon-B9DU0KGM.js";import"./ProgressCircular-DToFE0Lx.js";import"./IconButton-CWRPr6lS.js";import"./Tooltip-Cu6rj0j6.js";import"./floating-ui.react-BqcbUs5N.js";import"./useId-Nx1NlIzw.js";function s(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Button",of:c}),`
`,t.jsx(n.h1,{id:"button",children:"Button"}),`
`,t.jsx(n.p,{children:`Buttons are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Button component like this:`}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-jsx",children:`import { Button, IconButton, ButtonFloating } from "@qlik-trial/sprout-css-react";

<Button variant="primary" size="small" label="Click me" onClick={() => {}} />
<IconButton variant="default" icon={<MyIcon />} label="Click me" onClick={() => {}} />
<ButtonFloating>
    <Button variant="primary" size="small" label="Click me" onClick={() => {}} />
</ButtonFloating>
<ButtonFloating>
    <IconButton variant="default" icon={<MyIcon />} label="Click me" onClick={() => {}} />
</ButtonFloating>
`})}),`
`,t.jsx(i,{of:e,sourceState:"shown"}),`
`,t.jsx(a,{of:e}),`
`,t.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsx(n.p,{children:t.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",rel:"nofollow",children:"W3/WAI/ARIA/APG Button"})}),`
`,t.jsx(n.p,{children:"HTML Structure"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:["Button and IconButton use the native HTML ",t.jsx(n.code,{children:"button"})," so it has the implicit role ",t.jsx(n.code,{children:"button"}),"."]}),`
`,t.jsxs(n.li,{children:["Button and IconButton support all props to have an ",t.jsx(n.a,{href:"https://www.w3.org/WAI/tutorials/forms/labels/",rel:"nofollow",children:"accessible label"})]}),`
`,t.jsxs(n.li,{children:["Button and IconButton support ",t.jsx(n.code,{children:"aria-describedby"})," props."]}),`
`,t.jsxs(n.li,{children:["Button and IconButton use explicit ",t.jsx(n.code,{children:"disabled"})," props to show it has unavailable. Question: should we add ",t.jsx(n.code,{children:"aria-disabled"}),"?"]}),`
`]}),`
`,t.jsx(n.p,{children:"Keyboard Navigation"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.code,{children:"Space"}),": Activates the button."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.code,{children:"Enter"}),": Activates the button."]}),`
`]}),`
`,t.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,t.jsx(i,{of:d}),`
`,t.jsx(n.h2,{id:"iconbutton",children:"IconButton"}),`
`,t.jsxs(n.p,{children:[`This variant is a shortcut to use the Button but label is moved inside a Tooltip.
Accessibility is covered using the tooltip with the `,t.jsx(n.code,{children:"aria-labelledby"})," attribute."]}),`
`,t.jsx(i,{of:u})]})}function L(o={}){const{wrapper:n}={...r(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(s,{...o})}):s(o)}export{L as default};
