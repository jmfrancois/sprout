import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as a}from"./index-DUy19JZU.js";import{ae as i,af as s,ag as l}from"./index-CAy-nCaq.js";import{S as p,P as o}from"./Skeleton.stories-BUoIH9Vt.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./Skeleton-BJic6b4p.js";import"./Box-25vWnmJ9.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Skeleton",of:p}),`
`,e.jsx(t.h1,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(t.p,{children:"Skeletons are used when loading a screen. It provides a visual cue of what is loading."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Skeleton, type SkeletonProps } from "@qlik-trial/sprout-css-react";

<Skeleton variant="text" />
<Skeleton variant="circle" />
<Skeleton variant="rectangle" />
<Skeleton variant="Button" />
<Skeleton variant="IconButton" />
<Skeleton variant="Input" />
<Skeleton variant="InputField" />
`})}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`type SkeletonVariant = "text" | "circle" | "rectangle" | "Button" | "IconButton" | "Input" | "InputField";

export type SkeletonProps = HTMLSpanProps & {
  variant: SkeletonVariant;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
};
`})}),`
`,e.jsx(t.p,{children:"You can set width and Height for most of the variant (where it make sens)."})]})}function P(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{P as default};
