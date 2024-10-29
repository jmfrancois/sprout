import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import{ae as s,af as p,ag as a}from"./index-D_mPI9qN.js";import{Playground as r}from"./Box.stories-gFyIebei.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Q9zOLvKt.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./Box-Bo_17ADl.js";function o(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Utils/Box"}),`
`,n.jsx(e.h1,{id:"box",children:"Box"}),`
`,n.jsxs(e.p,{children:["Largely inspired from ",n.jsx(e.a,{href:"https://mui.com/system/react-box/%5D",rel:"nofollow",children:"MUI Box"})," this component provide a quick way to get some layout sorted out."]}),`
`,n.jsx(e.p,{children:"As any other utility this component doesn't comes from Figma but it is using all our tokens."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Box } from "@qlik-trial/sprout-css-react";


function MyComponent() {
    return <Box border="default" />
}
`})}),`
`,n.jsx(e.h2,{id:"component-props",children:"Component Props"}),`
`,n.jsxs(e.p,{children:["In terms of API it provides quick access to every ",n.jsx(e.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",rel:"nofollow",children:"flex"}),` css properties.
By default it uses the following styles:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.flex {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type Spacing = "0" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "3xl";
type Border = "none" | "default" | "weak" | "moderate" | "strong" | "extra-strong";
type Align = "center" | "stretch" | "start" | "end";
type Justify = Align | "between" | "around" | "evenly";

export type BoxPropsOnly = {
  // flex properties
  direction?: "row" | "col";
  boxSizing?: "border-box" | "content-box";
  alignContent?: Align;
  alignItems?: Align;
  alignSelf?: Align;
  gap?: Spacing;
  columnGap?: Spacing;
  rowGap?: Spacing;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  justify?: Justify;

  // border properties
  border?: Border;
  borderTop?: Border;
  borderRight?: Border;
  borderBottom?: Border;
  borderLeft?: Border;
  borderWidth?: "0" | "default" | "strong";

  // inline styles
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;

  // padding properties
  p?: Spacing;
  px?: Spacing;
  py?: Spacing;
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;

  typography?: TypographyProps;
};
`})}),`
`,n.jsx(e.h2,{id:"demo",children:"Demo"}),`
`,n.jsx(p,{sourceState:"hidden",of:r}),`
`,n.jsx(a,{of:r})]})}function B(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{B as default};
