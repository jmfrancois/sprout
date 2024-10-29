import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as a}from"./index-DlpNa54Y.js";import{ae as i,af as s,ag as l}from"./index-D_mPI9qN.js";import{S as p,P as o}from"./Skeleton.stories-CDb1oBtx.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Q9zOLvKt.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./Box-Bo_17ADl.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Skeleton",of:p}),`
`,e.jsx(n.h1,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(n.p,{children:"Skeletons are used when loading a screen. It provides a visual cue of what is loading."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Skeleton, type SkeletonProps } from "@qlik-trial/sprout-css-react";

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
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type SkeletonVariant = "text" | "circle" | "rectangle" | "Button" | "IconButton" | "Input" | "InputField";

export type SkeletonProps = HTMLSpanProps & {
  variant: SkeletonVariant;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
};
`})}),`
`,e.jsx(n.p,{children:"You can set width and Height for most of the variant (where it make sens)."})]})}function I(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{I as default};
