import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import{ae as r}from"./index-D_mPI9qN.js";import{S as a}from"./Modal.stories-D8rah1A5.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Q9zOLvKt.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-CjQa9iMn.js";import"./Textarea-ti8lLHXK.js";import"./useFieldAriaProps-DGTkAVsv.js";import"./Box-Bo_17ADl.js";import"./HelperText-CyyCsV2o.js";import"./ErrorIcon-B-FaR8fG.js";import"./useControl-BksuLBKc.js";import"./useId-Nx1NlIzw.js";import"./figma-DdOIv0jn.js";import"./floating-ui.react-BqcbUs5N.js";import"./IconButton-CWRPr6lS.js";import"./Button-35iONiNZ.js";import"./Button.module-Bksq7zkq.js";import"./DropdownArrowIcon-B9DU0KGM.js";import"./ProgressCircular-DToFE0Lx.js";import"./Tooltip-Cu6rj0j6.js";import"./Divider-BKfKUvzF.js";import"./RadioGroup-vPE3DCKx.js";import"./SelectComposition-CzuupdYz.js";import"./constant-DXShcaho.js";import"./Menu-D0QU6eyN.js";import"./Switch-BiJKMrHR.js";import"./Checkbox-CgutXkj_.js";import"./TextField-C62t-kjU.js";import"./IconButton-DS1yKSJq.js";function t(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(o.h1,{id:"modal",children:"Modal"}),`
`,e.jsxs(o.p,{children:["The Modal follow the two API patterns ",e.jsx(o.strong,{children:"props driven"})," and ",e.jsx(o.strong,{children:"JSX driven"}),"). Let's start by the ",e.jsx(o.strong,{children:"JSX"})," one"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Modal } from "@qlik-trial/sprout-css-react";

// props API
<Modal
  visible
  width="s"
  headerTitle="Title"
  headerDescription="Description"
  labelClose="Cancel"
  onClose={() => {}}
  preventEscaping // escape do not close
  preventInteractiveBackdrop // click on backdrop do not close
  footerLeft={<Checkbox name="checkbox-name" label="Checkbox label" onChange={() => {}} />}
  footerActions={
    <>
      <Button variant="secondary" label="Secondary action" onClick={() => {}} />
      <Button variant="primary" label="Primary action" onClick={() => {}} />
    </>
  }
>
  What ever you want inside the body
</Modal>;

// JSX API
import { ModalComposition } from "@qlik-trial/sprout-css-react";

<ModalComposition.Modal visible width="s">
  <ModalComposition.Header description="Header description">Header title</ModalHeader>
  <ModalComposition.Content>Content explicitly wrapped into ModalContent</ModalContent>
  <ModalComposition.Actions left={<Checkbox name="checkbox-name" label="Checkbox label" onChange={() => {}} />}>
    <Button variant="secondary" label="Secondary action" onClick={() => {}} />
    <Button variant="primary" label="Primary action" onClick={() => {}} />
  </ModalComposition.Actions>
</ModalComposition.Modal>
`})}),`
`,e.jsx(o.h2,{id:"style",children:"Style"}),`
`,e.jsx(o.h3,{id:"sizing",children:"Sizing"}),`
`,e.jsx(o.p,{children:"The modal should adapt to the content by default (without the size attribute):"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Width can vary between a minimum 444px up to 95% of the screen's width"}),`
`,e.jsx(o.li,{children:"Height can expand up to 80% of the screen's height"}),`
`]}),`
`,e.jsx(o.p,{children:"The width attribute use a TShirt sizing. In this case the modal becomes responsive and may switch to full screen if needed."}),`
`,e.jsx(o.h2,{id:"interactions--accessibility",children:"Interactions / Accessibility"}),`
`,e.jsxs(o.p,{children:[`All modals by default can be closed by using "Escape" key on the keyboard.
If you really want your user to not be able to close without other interaction you need to pass the property `,e.jsx(o.code,{children:"preventEscaping"}),"."]}),`
`,e.jsxs(o.p,{children:["All modals by default can be closed by clicking ont the backdrop. This behavior can be removed by using the property ",e.jsx(o.code,{children:"preventInteractiveBackdrop"}),"."]}),`
`,e.jsx(o.h2,{id:"breaking-changes",children:"Breaking changes"}),`
`,e.jsxs(o.p,{children:[`You may have added padding inside the content of the modal. That is coming from a missing implementation as this padding is part of the spec.
We have fixed it in this `,e.jsx(o.a,{href:"https://github.com/qlik-trial/sprout-css/pull/123",rel:"nofollow",children:"PR"})," so you should remove it from now, as we have done in stories for example:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-diff",children:`-    <Box gap="l" direction="col" p="xxl" width="100%">
+    <Box gap="l" direction="col" width="100%">
      Modal content
    </Box>
`})})]})}function F(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{F as default};
