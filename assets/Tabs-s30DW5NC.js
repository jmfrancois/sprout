import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as a}from"./index-DlpNa54Y.js";import{ae as p,af as s,ag as t}from"./index-D_mPI9qN.js";import{S as d,U as i,a as h,C as r,b as l}from"./Tabs.stories-BqE6o_nb.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Q9zOLvKt.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-CjQa9iMn.js";import"./BookIcon-C-8w8NmY.js";import"./StarIcon-8cglR9Ys.js";import"./figma-DdOIv0jn.js";import"./Box-Bo_17ADl.js";import"./Tooltip-Cu6rj0j6.js";import"./floating-ui.react-BqcbUs5N.js";import"./useId-Nx1NlIzw.js";import"./useControl-BksuLBKc.js";function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{title:"Components/Tabs",of:d}),`
`,n.jsx(o.h1,{id:"tabs",children:"Tabs"}),`
`,n.jsx(o.p,{children:"Tabs are used for navigation."}),`
`,n.jsx(o.p,{children:"Status:"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:n.jsx(o.a,{href:"https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=18981-78691&t=FhNj3HGCJ6k1DZ0k-0",rel:"nofollow",children:"figma"})}),`
`,n.jsx(o.li,{children:"a11y: ok but need test"}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-typescript",children:`// using composition
import { TabsContainer, TabList, Tab, TabPanel } from "@qlik-trial/sprout-css-react";
// using \`tabs\` Props
import { Tabs } from "@qlik-trial/sprout-css-react";
`})}),`
`,n.jsx(o.h2,{id:"variations",children:"Variations"}),`
`,n.jsxs(o.p,{children:["The props ",n.jsx(o.code,{children:"size"})," accept two values: ",n.jsx(o.code,{children:"small"})," or ",n.jsx(o.code,{children:"medium"})," (default)."]}),`
`,n.jsxs(o.p,{children:[`The component follow the uncontroll/control pattern.
Control version goes by using the props: `,n.jsx(o.code,{children:"activeKey"})," and ",n.jsx(o.code,{children:"onSelect"}),"."]}),`
`,n.jsx(o.h3,{id:"uncontrolled-using-composition",children:"UnControlled using composition"}),`
`,n.jsx(s,{of:i,sourceState:"shown"}),`
`,n.jsx(t,{of:i}),`
`,n.jsx(o.h3,{id:"uncontrolled-using-tabs-property",children:"Uncontrolled using tabs property"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-typescript",children:`// must be memoized to not trigger re-render
const TABS = [
  {
    title: "Assets",
    icon: <BookIcon />,
    "aria-controls": "assets-panel",
    panel: <div>Tab 1 content</div>,
  },
  {
    title: "Settings",
    icon: <CogwheelIcon />,
    "aria-controls": "settings-panel",
    panel: <div>Tab 2 content</div>,
  },
  ...
];
`})}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(o.h3,{id:"controlled-using-composition",children:"Controlled using composition"}),`
`,n.jsxs(o.p,{children:["By passing the props ",n.jsx(o.code,{children:"activeKey"})," and ",n.jsx(o.code,{children:"onSelect"})," The selected Tab becomes controlled:"]}),`
`,n.jsx(s,{of:r}),`
`,n.jsx(t,{of:r}),`
`,n.jsxs(o.h3,{id:"controlled-using-tabs-property",children:["Controlled using ",n.jsx(o.code,{children:"tabs"})," property"]}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(t,{of:l}),`
`,n.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(o.p,{children:"Current gesture support is only tabs. More gesture will come in later versions."})]})}function I(e={}){const{wrapper:o}={...a(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(c,{...e})}):c(e)}export{I as default};
