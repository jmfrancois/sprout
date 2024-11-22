import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{ae as r,af as l}from"./index-CAy-nCaq.js";import{S as s,a as c,C as d}from"./Menu.stories-DonvYuvY.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-B-tj2W5I.js";import"./EditIcon-AnNjfYxK.js";import"./figma-hO1OATkS.js";import"./Menu-Bnh9TI_6.js";import"./Box-25vWnmJ9.js";import"./Divider-Dv0yWk4k.js";import"./renderOrClone-Cb9xqVtH.js";import"./list-DwdHZYh1.js";import"./FloatingPrimitive-DeeyujT-.js";import"./useId-CDjE3YUk.js";import"./useControl-Bdsdv14P.js";import"./Skeleton-BJic6b4p.js";import"./Button-C-WoFXIp.js";import"./Button.module-Cy3SiisI.js";import"./DropdownArrowIcon-D6G3uTRt.js";import"./ProgressCircular-Bpk7vv8H.js";import"./a11yProps-Bd_FexwF.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Menu",of:s}),`
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
`,e.jsx(l,{of:c}),`
`,e.jsx(n.h2,{id:"contextual-menu",children:"Contextual Menu"}),`
`,e.jsx(n.p,{children:"A Menu can be triggered by right clicking with a mouse or long pressing on touch-screen devices."}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h2,{id:"controlled-display",children:"Controlled display"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Menu.Trigger"})," support the control of opening / closing the menu by using the following props:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultOpen"}),": boolean (only for initial state)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"open"}),": boolean (controlled state)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onOpenChange"}),": function (callback for controlled state) with onChange(open: boolean)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",rel:"nofollow",children:"W3/WAI/ARIA/APG Accordion"})}),`
`,e.jsx(n.p,{children:"HTML structure"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Menu.Trigger use a ",e.jsx(n.code,{children:"button"})," to trigger the visibility of the menu and have the following attributes:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'aria-haspopup="menu"'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'aria-expanded="true|false"'})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-controls"})," pointing to the menu id"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Menu.Container receive the following attributes",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'role="menu"'})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"aria-labelledby"})," pointing to the trigger id"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'aria-orientation="vertical"'})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Menu.Group is a ",e.jsx(n.code,{children:"div"})," with ",e.jsx(n.code,{children:'role="group"'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"FIXME: should it has aria-labelledby ?"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Menu.Item is a ",e.jsx(n.code,{children:"button"})," with ",e.jsx(n.code,{children:'role="menuitem"'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["if ",e.jsx(n.code,{children:"selectable"})," is true ",e.jsx(n.code,{children:"role"})," becomes ",e.jsx(n.code,{children:"menuitemcheckbox"})," and ",e.jsx(n.code,{children:'aria-checked="false"'})]}),`
`,e.jsxs(n.li,{children:["if ",e.jsx(n.code,{children:"selected"})," and ",e.jsx(n.code,{children:"selectable"})," is true ",e.jsx(n.code,{children:'aria-checked="true"'})]}),`
`,e.jsxs(n.li,{children:["no ",e.jsx(n.code,{children:"aria-checked"})," attribute otherwise"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Keyboard navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The first element in the menu receive the focus when the menu is opened."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowDown"})," and ",e.jsx(n.code,{children:"ArrowUp"})," navigate between all not disabled ",e.jsx(n.code,{children:"menuitem"})," elements."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Home"})," and ",e.jsx(n.code,{children:"End"})," navigate to the first and last not disabled ",e.jsx(n.code,{children:"menuitem"})," elements."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Space"})," and ",e.jsx(n.code,{children:"Enter"})," trigger click event on the focused ",e.jsx(n.code,{children:"menuitem"})," element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowRight"})," open the menu if the focused ",e.jsx(n.code,{children:"menuitem"})," element has a submenu using the ",e.jsx(n.code,{children:'aria-haspopup="menu"'})," attribute."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowLeft"})," close the menu and move the focus ont the parent menu's ",e.jsx(n.code,{children:"menuitem"})," element."]}),`
`]}),`
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
`})})]})}function N(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{N as default};
