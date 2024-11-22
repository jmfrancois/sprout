import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{ae as a,af as s}from"./index-CAy-nCaq.js";import{T as i,V as p}from"./Typography.stories-C9-uQpkb.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./Box-25vWnmJ9.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
`,e.jsx(t.h1,{id:"typography-in-sprout",children:"Typography in Sprout"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.figma.com/design/aW0477Tif8HI1ogm3v9nv1/Sprout-DLS-Documentation?node-id=205-5249&t=gV5ImAJrr3pID7LL-0",rel:"nofollow",children:"Typography in Figma Documentation"})}),`
`,e.jsx(t.li,{children:"Status: can be used"}),`
`]}),`
`,e.jsx(t.h2,{id:"code-react",children:"Code (React)"}),`
`,e.jsx(t.p,{children:"With React we provide you a className utility to get the right class that will give you access to the correct set of tokens"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { getTypographyClassName, getBoxProps } from "@qlik-trial/sprout-css-react";

// Use the getTypographyClassName to get the correct class
// that keep native user agent style for sure like margin and padding
<h1 className={getTypographyClassName({ font: "heading-m", color: "default" })}>my title</h1>;

// or you can use getBoxProps to use display: flex and reset margin & padding
<h1 {...getBoxProps({ font: "heading-m", color: "default" })}>my title</h1>;
`})}),`
`,e.jsx(s,{of:p})]})}function v(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{v as default};
