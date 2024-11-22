import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as l}from"./index-DUy19JZU.js";import{ae as a,af as t,ag as o}from"./index-CAy-nCaq.js";import{S as d,U as i,a as h,C as r}from"./Tabs.stories-Op6pGPnw.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-B-tj2W5I.js";import"./BookIcon-DZsRg5Cg.js";import"./StarIcon-SlLCtx_3.js";import"./figma-hO1OATkS.js";import"./Box-25vWnmJ9.js";import"./Tooltip-DjBJpIFd.js";import"./renderOrClone-Cb9xqVtH.js";import"./useId-CDjE3YUk.js";import"./useListGesture-AviVLQSr.js";import"./list-DwdHZYh1.js";import"./useControl-Bdsdv14P.js";function c(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/Tabs",of:d}),`
`,e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsx(n.p,{children:"Tabs are used for navigation."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// using composition
import { TabsContainer, TabList, Tab, TabPanel } from "@qlik-trial/sprout-css-react";
// using \`tabs\` Props
import { Tabs } from "@qlik-trial/sprout-css-react";

// composition
<TabsContainer>
  <TabList showTrack>
    <Tab aria-controls="Assets" title="Assets" icon={<BookIcon />} />
    <Tab aria-controls="Users" title="Users" icon={<StarIcon />} disabled />
  </TabList>
  <TabPanel id="Assets">Tab content for Assets</TabPanel>
  <TabPanel id="Settings">Tab content for Settings</TabPanel>
</TabsContainer>;

// renderer based
const TABS = [
  {
    title: "Assets",
    icon: <BookIcon />,
    panel: <div>Tab 1 content</div>,
  },
  // ... more tabs
];
<Tabs showTrack={showTrack} tabs={TABS} />;
`})}),`
`,e.jsx(n.h2,{id:"variations",children:"Variations"}),`
`,e.jsxs(n.p,{children:["The props ",e.jsx(n.code,{children:"size"})," accept two values: ",e.jsx(n.code,{children:"small"})," or ",e.jsx(n.code,{children:"medium"})," (default)."]}),`
`,e.jsxs(n.p,{children:[`The component follow the uncontroll/control pattern.
Control version goes by using the props: `,e.jsx(n.code,{children:"activeKey"})," and ",e.jsx(n.code,{children:"onSelect"}),"."]}),`
`,e.jsx(n.h3,{id:"uncontrolled-using-composition",children:"UnControlled using composition"}),`
`,e.jsx(t,{of:i,sourceState:"shown"}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(n.h3,{id:"uncontrolled-using-tabs-property",children:"Uncontrolled using tabs property"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// must be memoized to not trigger re-render
const TABS = [
  {
    title: "Assets",
    icon: <BookIcon />,
    panel: <div>Tab 1 content</div>,
  },
  {
    title: "Settings",
    icon: <CogwheelIcon />,
    panel: <div>Tab 2 content</div>,
  },
  ...
];
`})}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"controlled-using-composition",children:"Controlled using composition"}),`
`,e.jsxs(n.p,{children:["By passing the props ",e.jsx(n.code,{children:"activeKey"})," and ",e.jsx(n.code,{children:"onSelect"})," The selected Tab becomes controlled:"]}),`
`,e.jsxs(n.h3,{id:"controlled-using-tabs-property",children:["Controlled using ",e.jsx(n.code,{children:"tabs"})," property"]}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",rel:"nofollow",children:"W3/WAI/ARIA/APG Tabs"})}),`
`,e.jsx(n.p,{children:"HTML structure:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TabsContainer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TabList"})," -> ",e.jsx(n.code,{children:"Tab"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TabPanel"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TabsContainer"})," is a ",e.jsx(n.code,{children:"nav"})," HTML element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TabList"})," is a ",e.jsx(n.code,{children:"div"})," with ",e.jsx(n.code,{children:'role="tablist"'})," attribute"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tab"})," use a ",e.jsx(n.code,{children:"button"})," to trigger the visibility of the TabPanel"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TabPanel"})," is a ",e.jsx(n.code,{children:"div"}),' with a role="tabpanel" attribute']}),`
`]}),`
`,e.jsx(n.p,{children:"Keyboard interaction"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tab"}),": When focus moves into the ",e.jsx(n.code,{children:"TabList"}),", places focus on the active ",e.jsx(n.code,{children:"Tab"})," element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tab"}),": When the ",e.jsx(n.code,{children:"Tablist"})," contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel unless the first element containing meaningful content inside the tabpanel is focusable."]}),`
`,e.jsxs(n.li,{children:["When focus is on a tab element in a horizontal tab list:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowLeft"}),": moves focus to the previous ",e.jsx(n.code,{children:"Tab"}),". If focus is on the first tab, moves focus to the last tab."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowRight"}),": Moves focus to the next ",e.jsx(n.code,{children:"Tab"}),". If focus is on the last tab element, moves focus to the first tab."]}),`
`,e.jsxs(n.li,{children:["if ",e.jsx(n.code,{children:"document.dir"})," is ",e.jsx(n.code,{children:"rtl"})," this is reversed"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["When focus is on a ",e.jsx(n.code,{children:"Tab"})," in a ",e.jsx(n.code,{children:"Tablist"})," with either horizontal or vertical orientation:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Space"})," or ",e.jsx(n.code,{children:"Enter"}),": Activates the tab if it was not activated automatically on focus."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Home"}),": Moves focus to the first tab. Optionally, activates the newly focused tab (See note below)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"End"}),": Moves focus to the last tab. Optionally, activates the newly focused tab (See note below)."]}),`
`]}),`
`]}),`
`]})]})}function z(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{z as default};
