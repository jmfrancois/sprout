import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{ae as o,af as i}from"./index-CAy-nCaq.js";import{S as a,M as l,P as m}from"./AlertInline.stories-BWava-eA.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-B-tj2W5I.js";import"./figma-hO1OATkS.js";import"./AlertInline-CbyxSwy9.js";import"./Box-25vWnmJ9.js";import"./AlertInlineIcons-CxMfpKbN.js";import"./IconButton-B8GWHSxh.js";import"./Button-C-WoFXIp.js";import"./Button.module-Cy3SiisI.js";import"./DropdownArrowIcon-D6G3uTRt.js";import"./ProgressCircular-Bpk7vv8H.js";import"./a11yProps-Bd_FexwF.js";import"./Tooltip-DjBJpIFd.js";import"./renderOrClone-Cb9xqVtH.js";import"./useId-CDjE3YUk.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/Trigger/AlertInline",of:a}),`
`,e.jsx(t.h1,{id:"alertinline",children:"AlertInline"}),`
`,e.jsx(t.p,{children:"Alerts are short messages that shows feedback, information, warnings, or critical errors."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { AlertInline } from "@qlik-trial/sprout-css-react";

<AlertInline
  severity="info"
  title="Title"
  message="Alert message"
  // onDismiss handler trigger the display of the dismiss button
  onDismiss={() => console.log("Dismissed")}
  actionBar={<Button variant="primary" label="Label" />}
/>;
`})}),`
`,e.jsxs(t.h2,{id:"semantic-variants-severity",children:["Semantic variants ",e.jsx(t.code,{children:"severity"})]}),`
`,e.jsx(i,{of:l,sourceState:"shown"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["This component use a ",e.jsx(t.code,{children:"div"})," html tag with the ",e.jsx(t.code,{children:"role=status"})," and ",e.jsx(t.code,{children:'aria-live="polite"'}),` attribute to announce the alert to screen readers.
You can switch to a alert by overriding those two properties like this:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<AlertInline role="alert" aria-live="assertive" severity="error" content="Urgent alert" />
`})})]})}function _(r={}){const{wrapper:t}={...s(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{_ as default};
