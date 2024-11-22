import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{ae as l,af as n,ag as a}from"./index-CAy-nCaq.js";import{S as d,P as r,a as c}from"./TextField.stories-Bnj_myII.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-B-tj2W5I.js";import"./TextField-CBpJc0HV.js";import"./useFieldAriaProps-DwlP3pE3.js";import"./Box-25vWnmJ9.js";import"./HelperText-jNe-w5_-.js";import"./IconButton-w95PFQqB.js";import"./Tooltip-DjBJpIFd.js";import"./renderOrClone-Cb9xqVtH.js";import"./useId-CDjE3YUk.js";import"./ProgressCircular-Bpk7vv8H.js";import"./a11yProps-Bd_FexwF.js";import"./Button-C-WoFXIp.js";import"./Button.module-Cy3SiisI.js";import"./DropdownArrowIcon-D6G3uTRt.js";import"./ErrorIcon-gTO4rnrz.js";import"./useControl-Bdsdv14P.js";function s(i){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/TextField",of:d}),`
`,e.jsx(t.h1,{id:"textfield",children:"TextField"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// if you want the field
import { TextField } from "@qlik-trial/sprout-css-react";

<TextField label="Label" helpText="helpText" />;
`})}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(t.h2,{id:"variations",children:"Variations"}),`
`,e.jsxs(t.p,{children:["The props ",e.jsx(t.code,{children:"designSize"})," accept two values: ",e.jsx(t.code,{children:"small"})," or ",e.jsx(t.code,{children:"default"}),`.
You can also pass the type="search".`]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`export type InputProps = HTMLInputProps & {
  labelClear?: string;
  leftAffix?: AffixProps;
  leftIcon?: ReactNode;
  rightAffix?: AffixProps;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  hasError?: boolean;
  designSize?: "default" | "small";
};
`})}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"HTML structure"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"TextField"})," structure use ",e.jsx(t.code,{children:"Field"})," -> ",e.jsx(t.code,{children:"Input"})," -> ",e.jsx(t.code,{children:"input"})," HTML tag with ",e.jsx(t.code,{children:'type="text"'})," by default."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"disabled"})," props is map to input native ",e.jsx(t.code,{children:"disabled"})," attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"readOnly"})," props is map to input native ",e.jsx(t.code,{children:"readOnly"})," attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"hasError"})," props is map to input native ",e.jsx(t.code,{children:"aria-invalid"})," attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"label"})," generate a label tag with the htmlFor attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"label"})," props add a ",e.jsx(t.code,{children:"aria-labelledby"})," attribute to the textarea."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"helpText"})," props add a ",e.jsx(t.code,{children:"aria-describedby"})," attribute to the textarea."]}),`
`]}),`
`,e.jsx(t.p,{children:"Keyboard Interaction:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Enter"}),": as we rely on native input tag the behavior is the same as the native input tag: Submit the form."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Tab"}),": if focused it will move to the next focusable element."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Shift + Tab"}),": if focused it will move to the previous focusable element."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Backspace"}),": if focused it will delete the character before the cursor."]}),`
`]})]})}function k(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}export{k as default};
