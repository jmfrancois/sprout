import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as l}from"./index-DUy19JZU.js";import{ae as s,af as r,ag as c}from"./index-CAy-nCaq.js";import{S as d,U as i}from"./MultiSelect.stories-DTIDKKF4.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./figma-hO1OATkS.js";import"./SelectComposition-Cc3b_OxD.js";import"./renderOrClone-Cb9xqVtH.js";import"./Menu-Bnh9TI_6.js";import"./Box-25vWnmJ9.js";import"./Divider-Dv0yWk4k.js";import"./list-DwdHZYh1.js";import"./FloatingPrimitive-DeeyujT-.js";import"./useId-CDjE3YUk.js";import"./useControl-Bdsdv14P.js";import"./Skeleton-BJic6b4p.js";import"./useFieldAriaProps-DwlP3pE3.js";import"./HelperText-jNe-w5_-.js";import"./DropdownArrowIcon-D6G3uTRt.js";import"./ErrorIcon-gTO4rnrz.js";import"./IconButton-w95PFQqB.js";import"./Tooltip-DjBJpIFd.js";import"./ProgressCircular-Bpk7vv8H.js";import"./a11yProps-Bd_FexwF.js";import"./TagGroup-2rg-o6a0.js";import"./Badge-CDdH9Zu0.js";import"./VisuallyHidden-DaM7uVfG.js";import"./SelectTest-Dfrr_ghx.js";function n(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/MultiSelect",of:d}),`
`,e.jsx(t.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx(t.p,{children:"Multi select elements are UI components that let users choose multiple options from a predefined list. Commonly found in forms, they simplify selection tasks and enhance usability by presenting choices in an organized format and allowing to filter them."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { MultiSelect } from "@qlik-trial/sprout-css-react";

// options must be memoized to avoid re-renders
const OPTIONS = [
  {
    type: "group",
    label: "Basic colors",
    children: [
      { label: "Red", value: "red" },
      { label: "Orange", value: "orange" },
      { label: "Green", value: "Green", disabled: true },
    ],
  },
  { type: "divider" },
  {
    type: "group",
    label: "Cool colors",
    children: [
      { label: "Cyan", value: "cyan" },
      { label: "Purple", value: "purple" },
    ],
  },
];
<Select.Multi defaultValue={["red", "orange"]} placeholder="Select a color">
  {/* This is good to have the empty value as in HTML */}
  <Select.Option value="" label="--Please choose an option--" />
  {/* You can use the renderer if you have a data structure */}
  <Select.OptionRenderer options={OPTIONS} />
  {/* Divider in case you have multiple groups */}
  <Select.Divider />
  {/* Simple and efficient composition */}
  <Select.OptGroup label="Deprecated Colors">
    <Select.Option label="Chartreuse" value="chartreuse" description="nice color btw" />
    <Select.Option label="Cornsilk" value="cornsilk" />
    <Select.Option label="Gainsboro" value="pink" />
  </Select.OptGroup>
</Select.Multi>;
`})}),`
`,e.jsxs(t.p,{children:["By default, without ",e.jsx(t.code,{children:"onChange"})," and ",e.jsx(t.code,{children:"value"}),' you are using the "Uncontrolled" version of the component.']}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"Content after refer to the most important part of the following patterns:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",rel:"nofollow",children:"W3/WAI/ARIA/APG combobox"})}),`
`]}),`
`,e.jsx(t.p,{children:"HTML structure"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The field state is synchronized in a visually hidden HTML ",e.jsx(t.code,{children:"select"})," element with the ",e.jsx(t.code,{children:"multiple"})," attribute set which receive ",e.jsx(t.code,{children:"ref"})," and ",e.jsx(t.code,{children:"name"})," attributes."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ComboboxEditable"})," use a input type text with the role ",e.jsx(t.code,{children:"combobox"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ComboboxEditable"})," manage ",e.jsx(t.code,{children:"aria-expanded"})," to indicate the state of the popup."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Listbox"})," has the role ",e.jsx(t.code,{children:"listbox"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Option"})," has the role ",e.jsx(t.code,{children:"option"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"OptGroup"})," has the role ",e.jsx(t.code,{children:"group"})," and contains Option"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"OptGroup"})," must at least contains one Option: Dev are responsible for that"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"OptGroup"})," is not valid without the ",e.jsx(t.code,{children:"label"})," props"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Option"})," use a button tag so it rely on ",e.jsx(t.code,{children:"aria-selected"})," to indicate it's state"]}),`
`,e.jsxs(t.li,{children:["Multiple ",e.jsx(t.code,{children:"Option"})," can be selected (implied by the value using a React Context)"]}),`
`,e.jsxs(t.li,{children:["All ",e.jsx(t.code,{children:"Option"})," that are not selected but selectable have the ",e.jsx(t.code,{children:"aria-selected"})," set to false"]}),`
`]}),`
`,e.jsx(t.p,{children:"Keyboard Navigation"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ComboboxEditable"})," will keep the focus during the usage of the field."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Tab"})," will move the focus from/to the combobox or to the next tabbable elements."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Shift + Tab"})," will move the focus from/to the combobox or to the previous tabbable elements."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Tag"})," are used to display each selected option. It displays a button to remove it and they are tabbable."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ComboboxEditable"})," add ",e.jsx(t.code,{children:"aria-activedescendant"})," attribute to specify which element inside the listbox is in 'hover' state. We will use the 'focus' word here but this is not the case."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowDown"}),": If the listbox is closed, it opens it with the focus on the first [selected] option."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowDown"}),': If the listbox is opened, moves the "focus" to the next item.']}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowUp"}),': If the listbox is opened the "focus" is moved to the previous option.']}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowDown"})," and ",e.jsx(t.code,{children:"ArrowUp"})," make loop over options."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Escape"}),": Dismisses the listbox."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Enter"}),": If the combobox is editable and an autocomplete suggestion is focused in the popup, accepts the suggestion reset the filter the accepted value in the combobox."]}),`
`]})]})}function q(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{q as default};
