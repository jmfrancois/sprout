import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{ae as r,af as a,ag as c}from"./index-CAy-nCaq.js";import{S as d,P as i}from"./Tag.stories-grZZV1qF.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-B-tj2W5I.js";import"./Avatar-CswkKgGg.js";import"./Box-25vWnmJ9.js";import"./Badge-CDdH9Zu0.js";import"./figma-hO1OATkS.js";import"./TagGroup-2rg-o6a0.js";import"./IconButton-w95PFQqB.js";import"./Tooltip-DjBJpIFd.js";import"./renderOrClone-Cb9xqVtH.js";import"./useId-CDjE3YUk.js";import"./ProgressCircular-Bpk7vv8H.js";import"./a11yProps-Bd_FexwF.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Tag",of:d}),`
`,e.jsx(n.h1,{id:"tag",children:"Tag"}),`
`,e.jsx(n.p,{children:`Tags are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Tag component like this:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Tag, TagLink, TagButton, type TagProps } from "@qlik-trial/sprout-css-react";

<Tag
  color="info"
  text="Tag"
  size="s"
  onRemove={() => {}}
  badge={{ color: "info", type: "number", text: "14" }}
  icon={<MyIcon />}
/>;
`})}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TagLink"})," and ",e.jsx(n.code,{children:"TagButton"})," are interactive variant of the ",e.jsx(n.code,{children:"Tag"}),`.
Note `,e.jsx(n.code,{children:"onRemove"})," and ",e.jsx(n.code,{children:"color"})," properties are not accepted on these variants."]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tag"})," is a simple text element so it does not need any special accessibility treatment."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TagLink"})," is a wrapper of ",e.jsx(n.code,{children:"Tag"})," using the HTML anchor ",e.jsx(n.code,{children:"a"})," tag. It does not need any special accessibility treatment."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TagButton"})," is a wrapper of ",e.jsx(n.code,{children:"Tag"})," using the HTML ",e.jsx(n.code,{children:"button"})," tag. It does not need any special accessibility treatment."]}),`
`]})]})}function H(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{H as default};
