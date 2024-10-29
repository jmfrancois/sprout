import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import{ae as s,af as a,ag as p}from"./index-D_mPI9qN.js";import{S as m,P as r}from"./AlertBanner.stories-vK6cEvvn.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Q9zOLvKt.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-CjQa9iMn.js";import"./AlertInlineIcons-BuJla_iS.js";import"./IconButton-CWRPr6lS.js";import"./Button-35iONiNZ.js";import"./Button.module-Bksq7zkq.js";import"./Box-Bo_17ADl.js";import"./DropdownArrowIcon-B9DU0KGM.js";import"./ProgressCircular-DToFE0Lx.js";import"./Tooltip-Cu6rj0j6.js";import"./floating-ui.react-BqcbUs5N.js";import"./useId-Nx1NlIzw.js";function e(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Components/AlertBanner",of:m}),`
`,n.jsx(t.h1,{id:"alertbanner",children:"AlertBanner"}),`
`,n.jsx(t.p,{children:n.jsx(t.a,{href:"https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components-BETA?node-id=20392-20992&t=c9cXKPChxwK6JiYz-4",rel:"nofollow",children:"figma"})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { AlertBanner, type AlertBannerProps } from "@qlik-trial/sprout-css-react";

<AlertBanner variant="info" content="Alert content" onClickDismiss={() => {}} action={<></>} />;
`})}),`
`,n.jsx(a,{of:r,sourceState:"shown"}),`
`,n.jsx(p,{of:r}),`
`,n.jsx(t.h2,{id:"api",children:"API"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`type AlertBannerOnlyProps = {
  action?: ReactNode; // used for the action button on the right
  content: string;
  dismissLabel?: string; // used for translation
  onClickDismiss: () => void; // used as dismissable boolean
  variant?: "error" | "warning" | "success" | "info";
};
`})})]})}function L(o={}){const{wrapper:t}={...i(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(e,{...o})}):e(o)}export{L as default};
