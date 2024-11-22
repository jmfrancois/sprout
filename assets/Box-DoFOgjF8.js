import{j as n}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{ae as i,af as s}from"./index-CAy-nCaq.js";import{VisualTest as p}from"./Box.stories-Bo65ilaO.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./Box-25vWnmJ9.js";function r(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Utils/Box"}),`
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
`,n.jsx(s,{sourceState:"shown",of:p})]})}function w(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{w as default};
