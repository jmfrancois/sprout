import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as r}from"./index-DlpNa54Y.js";import{ae as l,af as o}from"./index-D_mPI9qN.js";import{S as u,a,C as s}from"./Menu.stories-C3Cvwqka.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Q9zOLvKt.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./EditIcon-CNZtiHay.js";import"./figma-DdOIv0jn.js";import"./Menu-D0QU6eyN.js";import"./Box-Bo_17ADl.js";import"./floating-ui.react-BqcbUs5N.js";import"./Divider-BKfKUvzF.js";import"./useControl-BksuLBKc.js";import"./Button-35iONiNZ.js";import"./Button.module-Bksq7zkq.js";import"./DropdownArrowIcon-B9DU0KGM.js";import"./ProgressCircular-DToFE0Lx.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/Menu",of:u}),`
`,e.jsx(n.h1,{id:"menu",children:"Menu"}),`
`,e.jsx(n.p,{children:"Temporary menu that appears on demand. A menu typically closes when selecting an item or clicking outside. Most of the settings can be found in the Menu item itself and Menu is the composite component. Select menu is a separate component that is to be used only as the popover in Select (dropdown) components."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Menu } from "@qlik-trial/sprout-css-react";

// data API
const MENU_DATA = [
  { component: "groupLabel", label: "User" },
  { component: "item", icon: <PersonIcon />, label: "Profile", disabled: true },
  { component: "divider" },
];

<Menu.Trigger menu={MENU_DATA}>
  <Button label="Open Menu" />
</Menu.Trigger>;

// JSX composition
<Menu.Trigger
  menu={
    <>
      <Menu.GroupLabel label="User" />
      <Menu.Item icon={<PersonIcon />} label="Profile" disabled />
      <Menu.Item icon={<LogoutIcon />} label="Logout" />
      <Menu.Item icon={null} label="Reload" />
      <Menu.Item icon={null} label="Share" />
      <Menu.Sub icon={<SettingsIcon />} label="Settings">
        <Menu.Item label="Text" />
        <Menu.Item label="Video" />
        <Menu.Sub label="Image">
          <Menu.Item label=".png" />
          <Menu.Item label=".jpg" />
          <Menu.Item label=".svg" />
          <Menu.Item label=".gif" />
        </Menu.Sub>
        <Menu.Item label="Audio" />
      </Menu.Sub>
      <Menu.Divider />
      <Menu.Item
        icon={<EditIcon />}
        label="Edit"
        description="Don’t remember what we said about overflow, but this would be it."
        valueLabel="⌘ E"
      />
      <Menu.Item icon={<BinIcon />} label="Delete" />
      <Menu.Divider />
      <Menu.Item icon={null} label="Cut" valueLabel="⌘ X" />
      <Menu.Item icon={null} label="Copy" valueLabel="⌘ C" />
      <Menu.Item icon={null} label="Paste" disabled valueLabel="⌘ V" />
    </>
  }
>
  <Button label="Open Menu" />
</Menu.Trigger>;
`})}),`
`,e.jsx(n.h2,{id:"selections",children:"Selections"}),`
`,e.jsxs(n.p,{children:["MenuItem support the use of the properties ",e.jsx(n.code,{children:"selectable"})," to reserve the space and ",e.jsx(n.code,{children:"selected"})," to display the tick."]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"contextual-menu",children:"Contextual Menu"}),`
`,e.jsx(n.p,{children:"A Menu can be triggered by right clicking with a mouse or long pressing on touch-screen devices."}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),`
`,e.jsx(n.p,{children:"In the discussion of API we have decided to go with a composition and renderer approach."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- import { ContextMenu, MenuTrigger, MenuItem, Menu, MenuDivider, MenuGroupLabel } from "@qlik-trial/sprout-css-react";
+ import { Menu } from "@qlik-trial/sprout-css-react";


- <MenuContent
+ <Menu.Content
- <ContextMenu
+ <Menu.Contextual
- <MenuTrigger
+ <Menu.Trigger
- <MenuItem
+ <Menu.Item
- <MenuDivider
+ <Menu.Divider
- <MenuGroupLabel
+ <Menu.GroupLabel
- <Menu
+ <Menu.Sub
`})})]})}function E(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{E as default};
