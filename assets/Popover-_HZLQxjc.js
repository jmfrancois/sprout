import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{ae as t}from"./index-CAy-nCaq.js";import{S as c}from"./Popover.stories-D0r4Vp1Z.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./Box-25vWnmJ9.js";import"./FloatingPrimitive-DeeyujT-.js";import"./renderOrClone-Cb9xqVtH.js";import"./useId-CDjE3YUk.js";import"./useControl-Bdsdv14P.js";import"./AlertInline-CbyxSwy9.js";import"./AlertInlineIcons-CxMfpKbN.js";import"./IconButton-B8GWHSxh.js";import"./Button-C-WoFXIp.js";import"./Button.module-Cy3SiisI.js";import"./DropdownArrowIcon-D6G3uTRt.js";import"./ProgressCircular-Bpk7vv8H.js";import"./a11yProps-Bd_FexwF.js";import"./Tooltip-DjBJpIFd.js";import"./ListItem-D4xYxLjM.js";import"./useListGesture-AviVLQSr.js";import"./list-DwdHZYh1.js";function i(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Components/Popover",of:c}),`
`,e.jsx(o.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(o.p,{children:"WARNING: Design not ready ! This component may change. Use it at your own risk."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Popover, type PopoverProps } from "@qlik-trial/sprout-css-react";

<Popover content="content will appear on hover" placement="bottom-end">
  <button>Work on any component</button>
</Popover>;
`})}),`
`,e.jsx(o.h2,{id:"api",children:"API"}),`
`,e.jsxs(o.p,{children:[`| Property       | Description                                | Type         | Default |
| -------------- | ------------------------------------------ | ------------ | ------- |
| `,e.jsx(o.code,{children:"content"}),"      | The content to display in the popover      | ",e.jsx(o.code,{children:"string"}),`     |         |
| `,e.jsx(o.code,{children:"placement"}),"    | The placement of the popover               | ",e.jsx(o.code,{children:"enum"}),`       |         |
| `,e.jsx(o.code,{children:"initialOpen"}),"  | Initial state of the popover               | ",e.jsx(o.code,{children:"boolean"}),"    | ",e.jsx(o.code,{children:"false"}),` |
| `,e.jsx(o.code,{children:"open"}),"         | Controlled state of the popover            | ",e.jsx(o.code,{children:"boolean"}),`    |         |
| `,e.jsx(o.code,{children:"onOpenChange"})," | Callback when the popover is opened        | ",e.jsx(o.code,{children:"() => void"}),` |         |
| `,e.jsx(o.code,{children:"children"}),"     | The trigger element                        | ",e.jsx(o.code,{children:"ReactNode"}),`  |         |
| `,e.jsx(o.code,{children:"modal"}),"        | Focus: modalIf the popover should be modal | ",e.jsx(o.code,{children:"boolean"}),"    | ",e.jsx(o.code,{children:"false"}),` |
| `,e.jsx(o.code,{children:"p"}),", ",e.jsx(o.code,{children:"px"}),", ... | Padding props from ",e.jsx(o.code,{children:"Box"})," component         | ",e.jsx(o.code,{children:"string"}),"     |         |"]}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(o.p,{children:e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",rel:"nofollow",children:"W3/WAI/ARIA/APG Dialog"})}),`
`,e.jsx(o.p,{children:"HTML structure"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Popover"})," component inject ",e.jsx(o.code,{children:'aria-expanded="true|false"'})," and ",e.jsx(o.code,{children:'aria-haspopup="dialog"'})," attributes on the children."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"PopoverContent"})," wrap the content into a ",e.jsx(o.code,{children:"div"})," with ",e.jsx(o.code,{children:'role="dialog"'})," and ",e.jsx(o.code,{children:'aria-modal="true"'})," attributes."]}),`
`]}),`
`,e.jsx(o.p,{children:"Keyboard navigation"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Focus is given on dialog when it is opened."}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Escape"}),": Closes the dialog if it is opened."]}),`
`]}),`
`,e.jsx(o.h2,{id:"breaking-changes",children:"Breaking changes"}),`
`,e.jsx(o.h3,{id:"v300",children:"v3.0.0"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Popover"})," do not inject padding anymore in the content to give a complete controls over it."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-diff",children:`-      <Popover content={content}>
+      <Popover content={content} p="xl" pb="m">
`})})]})}function B(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{B as default};
