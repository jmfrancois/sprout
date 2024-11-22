import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as n}from"./index-DUy19JZU.js";import{ae as a,af as s}from"./index-CAy-nCaq.js";import{S as l,P as o}from"./Textarea.stories-C3mKL1kR.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./Textarea-BOZw2UeR.js";import"./useFieldAriaProps-DwlP3pE3.js";import"./Box-25vWnmJ9.js";import"./HelperText-jNe-w5_-.js";import"./ErrorIcon-gTO4rnrz.js";import"./useControl-Bdsdv14P.js";import"./useId-CDjE3YUk.js";function i(r){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Textarea",of:l}),`
`,e.jsx(t.h1,{id:"textarea",children:"Textarea"}),`
`,e.jsx(t.p,{children:"Use text area when a user is inputting longer texts or tags."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Textarea } from "@qlik-trial/sprout-css-react";

<Textarea
  label="Default"
  helpText="help me"
  placeholder="Give me a value"
  value={value}
  onChange={(e) => {
    setValue(e.target.value);
  }}
/>;
`})}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(t.p,{children:"This component support a controlled/uncontrolled react pattern."}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"HTML structure"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Textarea"})," structure use ",e.jsx(t.code,{children:"Field"})," -> ",e.jsx(t.code,{children:"TextareaNative"})," -> ",e.jsx(t.code,{children:"textarea"})," HTML tag."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"disabled"})," props is map to textare native ",e.jsx(t.code,{children:"disabled"})," attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"readOnly"})," props is map to textare native ",e.jsx(t.code,{children:"readOnly"})," attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"hasError"})," props is map to textare native ",e.jsx(t.code,{children:"aria-invalid"})," attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"label"})," generate a label tag with the htmlFor attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"label"})," props add a ",e.jsx(t.code,{children:"aria-labelledby"})," attribute to the textarea."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"helpText"})," props add a ",e.jsx(t.code,{children:"aria-describedby"})," attribute to the textarea."]}),`
`]}),`
`,e.jsx(t.p,{children:"Keyboard Interaction:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Enter"}),": as we rely on native textare tag the behavior is the same as the native textarea tag: Add a new line."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Tab"}),": if focused it will move to the next focusable element."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Shift + Tab"}),": if focused it will move to the previous focusable element."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Backspace"}),": if focused it will delete the character before the cursor."]}),`
`]})]})}function E(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(i,{...r})}):i(r)}export{E as default};
