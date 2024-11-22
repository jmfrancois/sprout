import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{ae as r,af as a,ag as m}from"./index-CAy-nCaq.js";import{S as p,P as s}from"./Message.stories-B46mDaXe.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./figma-hO1OATkS.js";import"./ProgressBar-CgwIn6Ly.js";import"./Box-25vWnmJ9.js";import"./a11yProps-Bd_FexwF.js";import"./Tooltip-DjBJpIFd.js";import"./renderOrClone-Cb9xqVtH.js";import"./useId-CDjE3YUk.js";import"./Button-C-WoFXIp.js";import"./Button.module-Cy3SiisI.js";import"./DropdownArrowIcon-D6G3uTRt.js";import"./ProgressCircular-Bpk7vv8H.js";import"./Divider-Dv0yWk4k.js";function n(i){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Message",of:p}),`
`,e.jsx(t.h1,{id:"message",children:"Message"}),`
`,e.jsx(t.p,{children:"A Message component displays onboarding messaging or guided messages in content areas. Typically used for empty states."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// if you want the field
import { Message } from "@qlik-trial/sprout-css-react";

<Message
  illustration={<svg />}
  title="Message title"
  message="Curabitur sagittis ac felis tristique molestie. Nam non eros a magna tincidunt congue."
  progress={{ percent: 35, label: "Loading progress" }}
  actions={
    <>
      <Button variant="primary" label="Primary action" />
      <Button variant="quiet" label="Another action" />
    </>
  }
/>;
`})}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["Simple ",e.jsx(t.code,{children:"div"}),` with no special accessibility requirements by default.
If `,e.jsx(t.code,{children:"progress"})," property is given it will add ",e.jsx(t.code,{children:'role="status"'})," and ",e.jsx(t.code,{children:'aria-live="polite"'})," to the message div container."]})]})}function _(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{_ as default};
