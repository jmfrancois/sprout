import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as i}from"./index-DUy19JZU.js";import{ae as s,af as a,ag as c}from"./index-CAy-nCaq.js";import{S as l,P as n}from"./AlertBanner.stories-DHlOZxU1.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-B-tj2W5I.js";import"./AlertInlineIcons-CxMfpKbN.js";import"./IconButton-B8GWHSxh.js";import"./Button-C-WoFXIp.js";import"./Button.module-Cy3SiisI.js";import"./Box-25vWnmJ9.js";import"./DropdownArrowIcon-D6G3uTRt.js";import"./ProgressCircular-Bpk7vv8H.js";import"./a11yProps-Bd_FexwF.js";import"./Tooltip-DjBJpIFd.js";import"./renderOrClone-Cb9xqVtH.js";import"./useId-CDjE3YUk.js";function o(t){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/AlertBanner",of:l}),`
`,e.jsx(r.h1,{id:"alertbanner",children:"AlertBanner"}),`
`,e.jsx(r.p,{children:"Alerts are short messages that shows feedback, information, warnings, or critical errors."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { AlertBanner, type AlertBannerProps } from "@qlik-trial/sprout-css-react";

<AlertBanner variant="info" content="Alert content" onClickDismiss={() => {}} action={<></>} />;
`})}),`
`,e.jsx(a,{of:n,sourceState:"shown"}),`
`,e.jsx(c,{of:n}),`
`,e.jsx(r.h2,{id:"api",children:"API"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`type AlertBannerOnlyProps = {
  action?: ReactNode; // used for the action button on the right
  content: string;
  dismissLabel?: string; // used for translation
  onClickDismiss: () => void; // used as dismissable boolean
  variant?: "error" | "warning" | "success" | "info";
};
`})}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:["This component use a ",e.jsx(r.code,{children:"div"})," html tag with the ",e.jsx(r.code,{children:"role=status"})," and ",e.jsx(r.code,{children:'aria-live="polite"'}),` attribute to announce the alert to screen readers.
You can switch to a real alert by overriding those two properties like this:`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<AlertBanner role="alert" aria-live="assertive" variant="error" content="Urgent alert" />
`})})]})}function R(t={}){const{wrapper:r}={...i(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(o,{...t})}):o(t)}export{R as default};
