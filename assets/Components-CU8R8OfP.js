import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"components",children:"Components"}),`
`,e.jsx(t.p,{children:"This document specify all common API and patterns which are used accross all components of this package."}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(t.p,{children:`Each component within the library will be as close as possible from the native behavior of the web plateform.
The goal is to not invent APIs but be as much as possible close to the web standard.`}),`
`,e.jsxs(t.p,{children:["As this components library is a design system implementation we close the door to ",e.jsx(t.code,{children:"className"})," injection. ",e.jsx(t.strong,{children:"Customization"}),`
of components are considered harmful. You should refer to `,e.jsx(t.a,{href:"?path=/docs/docs-designtokens--docs",children:"Design Tokens"})," or ",e.jsx(t.a,{href:"?path=/docs/docs-oem--docs",children:"OEM"}),`
to customize the look and feel, so as an OEM user but not as Frontend developer user of Sprout. Design System provides lego bricks.
If the style is not the same as in the design it may means two things:`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"the designer has created a new component. In this case frontend dev may create the new component or challenge the design."}),`
`,e.jsx(t.li,{children:"the designer has modified (aka detached) the component. This is considered harmful practice and should be challenged strongly."}),`
`]}),`
`,e.jsxs(t.p,{children:["The component API must follow the Figma properties when possible. For sure a State='disabled' should refer to pseudo class ",e.jsx(t.code,{children:":disabled"}),`.
Sometime the props is designer oriented like `,e.jsx(t.code,{children:"hasIcon"}),". As frontend you should translate it with an ",e.jsx(t.code,{children:"icon"})," property."]}),`
`,e.jsxs(t.p,{children:["Each component should expose the property definition in typescript by using the convention ",e.jsx(t.code,{children:"[ComponentName]Props"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`export type MyComponentProps = HTMLDivProps & {
  figmaProp: boolean;
  icon: ReactNode;
};
`})}),`
`,e.jsx(t.h2,{id:"spread-the-rest-of-the-property-to-the-highest-element-in-the-tree",children:"Spread the rest of the property to the highest element in the tree"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`<div {...props}>rest of the code</div>
`})}),`
`,e.jsx(t.p,{children:"Spreading props in a component library is useful to let user being able to do some twick like for example adding some data-attributes."}),`
`,e.jsx(t.h2,{id:"controlled--uncontrolled",children:"Controlled / UnControlled"}),`
`,e.jsxs(t.p,{children:["This ",e.jsx(t.a,{href:"https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components",rel:"nofollow",children:"state pattern"}),` apply first to form inputs in the react documentation.
But the concept once understood extends to every components that provides interactions.
The mindset is to define if this is the parent component or the provided component that manage the state.`]}),`
`,e.jsxs(t.p,{children:[`A components library must provide both behaviors but that can be cumbersome as the code is not super easy to write and read.
To simplify this work we provide the `,e.jsx(t.a,{href:"./?path=/docs/utils-usecontrol--docs",children:"useControl"})," utility."]}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["This implementation follows the ",e.jsx(t.a,{href:"https://www.w3.org/WAI/standards-guidelines/aria/",rel:"nofollow",children:"WAI-ARIA"})," guidelines and relies on the ",e.jsx(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/",rel:"nofollow",children:"ARIA Authoring Practices Guide"})," to ensure compliance with ",e.jsx(t.a,{href:"https://www.w3.org/WAI/standards-guidelines/wcag/",rel:"nofollow",children:"WCAG"}),` AA standards.
As it uses lots of native HTML elements, the components provide a their `,e.jsx(t.strong,{children:"implicit"})," roles and states."]}),`
`,e.jsxs(t.p,{children:["Each components are tested using the ",e.jsx(t.a,{href:"https://www.deque.com/axe/",rel:"nofollow",children:"axe-core"}),` library on a complete combination of all the possible states of the components.
The storybook has the plugin `,e.jsx(t.code,{children:"@storybook/addon-a11y"})," setup anyone can look at the report on each story."]}),`
`,e.jsx(t.p,{children:"We are also testing keyboard navigation using playwright to ensure each changes keep the gesture working."}),`
`,e.jsxs(t.p,{children:[`An important note is this implementation will stay as native as possible for the browser. It will not go over what browsers can do to solve an issue of the browser.
We believe that browser are evolving every day and have opinion on that. And more important users know their browser.
For example the button will not display the `,e.jsx(t.code,{children:":active"})," state when the user use the space key on Firefox: ",e.jsx(t.a,{href:"https://bugzilla.mozilla.org/show_bug.cgi?id=68851",rel:"nofollow",children:"Bug 68851"}),` reported 24 years ago explain why FF do not send that active event.
It's because the spec says the "main" action trigger that and for FF it is the `,e.jsx(t.code,{children:"click"}),". The opposite apply to chrome the right click trigger the ",e.jsx(t.code,{children:":active"})," state !"]}),`
`,e.jsxs(t.p,{children:["The opposite exists in the opensource world, libraries like adobe ",e.jsx(t.a,{href:"https://react-spectrum.adobe.com",rel:"nofollow",children:"react-spectrum"}),` are reimplementing everything in JS (event handler) to create the state machine of every components.
the react-aria button in FF will display the active state ! But at the price of a lots of javascript code.`]})]})}function l(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{l as default};
