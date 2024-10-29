import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import{ae as t,af as r}from"./index-D_mPI9qN.js";import{S as a,C as d}from"./Accordion.stories-BT_1nN1j.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Q9zOLvKt.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./BookIcon-C-8w8NmY.js";import"./constant-DXShcaho.js";import"./Box-Bo_17ADl.js";import"./useControl-BksuLBKc.js";function i(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Components/Accordion",of:a}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsx(n.p,{children:"An accordion component in a design system enables content to be expanded or collapsed, helping organize information neatly and reducing visual clutter."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Accordion } from "@qlik-trial/sprout-css-react";

<Accordion.Container variant="default" renderContent openedDefault={0} behavior="linked">
  <Accordion.Item header="first panel" description="" value="value">
    <p>Content</p>
  </Accordion.Item>
</Accordion.Container>;
`})}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"variant-quiet",children:"Variant quiet"}),`
`,e.jsx(n.p,{children:`For a more subtle look, use the quiet style. Remember to leave room for outer spacing/parent padding.
It will apply the rounded corners style at the same time`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Accordion.Container variant="quiet">
  <Accordion.Item header="So you don t repeat here">
    <p>Content</p>
  </Accordion.Item>
</Accordion.Container>
`})}),`
`,e.jsx(n.p,{children:"Or at the Accordion.Item level it can does the same in case it used outside of the container."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Accordion.Item header="Click me" variant="quiet">
  <p>Content</p>
</Accordion.Item>
`})}),`
`,e.jsx(n.h2,{id:"accordionitem-width",children:"Accordion.Item Width"}),`
`,e.jsx(n.h3,{id:"widthfull-is-the-default",children:'width="full" (is the default)'}),`
`,e.jsx(n.p,{children:"With accordion headers that span the full width on the container."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Accordion.Item header="Full width panel">
  <p>Content</p>
</Accordion.Item>
`})}),`
`,e.jsx(n.h3,{id:"widthcompact",children:'width="compact"'}),`
`,e.jsx(n.p,{children:"Accordion headers with variable width based on label, suitable for isolated instances of a single accordion item."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Accordion.Item header="Full width panel" width="compact">
  <p>Content</p>
</Accordion.Item>
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",rel:"nofollow",children:"W3/WAI/ARIA/APG Accordion"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["AccordionHeader use a ",e.jsx(n.code,{children:"button"})," to trigger the visibility of the content"]}),`
`,e.jsxs(n.li,{children:["use semantic header if needed (h2 ... h6) using the ",e.jsx(n.code,{children:"level"})," props"]}),`
`,e.jsxs(n.li,{children:["AccordionHeader use ",e.jsx(n.code,{children:"aria-expanded"})]}),`
`,e.jsxs(n.li,{children:["AccordionHeader use ",e.jsx(n.code,{children:"aria-controls"})," with a generated section id (fallback on provided id)"]}),`
`,e.jsxs(n.li,{children:["AccordionItem content use ",e.jsx(n.code,{children:"aria-labelledby"})," to refer to the header"]}),`
`,e.jsxs(n.li,{children:["AccordionItem content set the role ",e.jsx(n.code,{children:"region"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Keyboard interaction"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"}),`: When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.
When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing. Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function. -`,e.jsx(n.code,{children:"Tab"}),": Moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Shift + Tab"}),": Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowDown"}),": If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowUp"}),": If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Home"}),": When focus is on an accordion header, moves focus to the first accordion header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"End"}),": When focus is on an accordion header, moves focus to the last accordion header."]}),`
`]})]})}function y(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{y as default};
