import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{ae as s,af as p,ag as a}from"./index-CAy-nCaq.js";import{S as c,P as r}from"./Stepper.stories-BCMdZm-_.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./AlertInlineIcons-CxMfpKbN.js";import"./Box-25vWnmJ9.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Stepper",of:c}),`
`,e.jsx(t.h1,{id:"stepper",children:"Stepper"}),`
`,e.jsx(t.p,{children:"The stepper component is a navigation element that guides users through a multi-step process. It is typically used in forms, wizards, or other processes that require sequential steps."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Stepper } from "@qlik-trial/sprout-css-react";

// Step semantic controlled by the container
<Stepper.Container {...args} currentStepIndex={1} currentStepError={false} orientation={orientation}>
  {/* add onClick to a step will make it interactive */}
  <Stepper.Step text="Completed" onClick={() => {}} />
  <Stepper.Step text="Active" />
  <Stepper.Step text="Inactive" />
  <Stepper.Step text="Inactive" />
</Stepper.Container>


// full control of each step semantic
<Stepper.Container orientation={orientation}>
  {/* add onClick to a step will make it interactive */}
  <Stepper.Step semantic="completed" text="Completed" onClick={() => {}} />
  <Stepper.Step semantic="active" text="Active" />
  <Stepper.Step semantic="error" text="Error" />
  <Stepper.Step semantic="inactive" text="Inactive" />
</Stepper.Container>

`})}),`
`,e.jsx(p,{of:r,sourceState:"shown"}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"HTML Structure"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Note: aria-orientation can't be used on a list item so we have used a data attribute for that."}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Stepper.Container"})," uses the HTML tag OL to give a semantic representation of an ordererd list of steps."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Stepper.Step"})," uses the HTML tag LI to represent each step in the list. It uses ",e.jsx(t.code,{children:"aria-current=false|step"})," attribute."]}),`
`]})]})}function y(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{y as default};
