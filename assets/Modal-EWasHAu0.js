import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{ae as r}from"./index-CAy-nCaq.js";import{S as d}from"./Modal.stories-DIXflx0j.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-B-tj2W5I.js";import"./Textarea-BOZw2UeR.js";import"./useFieldAriaProps-DwlP3pE3.js";import"./Box-25vWnmJ9.js";import"./HelperText-jNe-w5_-.js";import"./ErrorIcon-gTO4rnrz.js";import"./useControl-Bdsdv14P.js";import"./useId-CDjE3YUk.js";import"./figma-hO1OATkS.js";import"./renderOrClone-Cb9xqVtH.js";import"./IconButton-B8GWHSxh.js";import"./Button-C-WoFXIp.js";import"./Button.module-Cy3SiisI.js";import"./DropdownArrowIcon-D6G3uTRt.js";import"./ProgressCircular-Bpk7vv8H.js";import"./a11yProps-Bd_FexwF.js";import"./Tooltip-DjBJpIFd.js";import"./Divider-Dv0yWk4k.js";import"./RadioGroup-hE1wb18n.js";import"./SelectComposition-Cc3b_OxD.js";import"./Menu-Bnh9TI_6.js";import"./list-DwdHZYh1.js";import"./FloatingPrimitive-DeeyujT-.js";import"./Skeleton-BJic6b4p.js";import"./IconButton-w95PFQqB.js";import"./TagGroup-2rg-o6a0.js";import"./Badge-CDdH9Zu0.js";import"./VisuallyHidden-DaM7uVfG.js";import"./Switch-B_AbSP2p.js";import"./TextField-CBpJc0HV.js";import"./Checkbox-B1rHGUY9.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(n.h1,{id:"modal",children:"Modal"}),`
`,e.jsxs(n.p,{children:["The Modal follow the two API patterns ",e.jsx(n.strong,{children:"props driven"})," and ",e.jsx(n.strong,{children:"JSX driven"}),"). Let's start by the ",e.jsx(n.strong,{children:"JSX"})," one"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Modal } from "@qlik-trial/sprout-css-react";

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
`,e.jsx(n.h2,{id:"style",children:"Style"}),`
`,e.jsx(n.h3,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(n.p,{children:["The modal should adapt to the content by default (without the ",e.jsx(n.code,{children:"width"})," attribute):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Width can vary between a minimum 444px up to 95% of the screen's width"}),`
`,e.jsx(n.li,{children:"Height can expand up to 80% of the screen's height"}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"width"})," attribute use a TShirt sizing. In this case the modal becomes responsive and may switch to full screen if needed."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`  width?: "s" | "m" | "l" | "xl" | "full" | "full-with-padding";
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",rel:"nofollow",children:"W3/WAI/ARIA/APG modal"})}),`
`]}),`
`,e.jsx(n.p,{children:"HTML structure"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Modal"})," is a div with ",e.jsx(n.code,{children:'role="dialog"'})," and ",e.jsx(n.code,{children:'aria-modal="true"'})," attributes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Modal"})," structure is ",e.jsx(n.code,{children:"ModalBackdrop"})," -> ",e.jsx(n.code,{children:"ModalContainer"})," -> ",e.jsx(n.code,{children:"ModalHeader"})," & ",e.jsx(n.code,{children:"ModalContent"})," & ",e.jsx(n.code,{children:"ModalActions"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ModalBackdrop"})," which is a simple div without any special attributes to it."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ModalContainer"})," add ",e.jsx(n.code,{children:"aria-labelledby"})," with the id of the ",e.jsx(n.code,{children:"ModalHeader"}),"'s title."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ModalContainer"})," add ",e.jsx(n.code,{children:"aria-describedby"})," with the id of the ",e.jsx(n.code,{children:"ModalHeader"}),"'s description."]}),`
`]}),`
`,e.jsx(n.p,{children:"Keyboard navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ModalContainer"})," trap the focus except for floating-ui portals."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Escape"})," key close the modal (can be prevented with ",e.jsx(n.code,{children:"preventEscaping"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:"Mouse navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"click"})," on the ",e.jsx(n.code,{children:"ModalBackdrop"})," close the ",e.jsx(n.code,{children:"Modal"})," (can be prevented with ",e.jsx(n.code,{children:"preventInteractiveBackdrop"})," or ",e.jsx(n.code,{children:"preventEscaping"})," properties)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"breaking-changes",children:"Breaking changes"}),`
`,e.jsx(n.h3,{id:"v1112-semver-commit-message-missed",children:"v1.11.2 (semver commit message missed)"}),`
`,e.jsxs(n.p,{children:[`You may have added padding inside the content of the modal. That is coming from a missing implementation as this padding is part of the spec.
We have fixed it in this `,e.jsx(n.a,{href:"https://github.com/qlik-trial/sprout-css/pull/123",rel:"nofollow",children:"PR"})," so you should remove it from now, as we have done in stories for example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`-    <Box gap="l" direction="col" p="xxl" width="100%">
+    <Box gap="l" direction="col" width="100%">
      Modal content
    </Box>
`})})]})}function U(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{U as default};
