import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as s}from"./index-DUy19JZU.js";import{ae as l,af as r,ag as c}from"./index-CAy-nCaq.js";import{S as a,U as n}from"./Select.stories-DjKjp8lI.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./index-B-tj2W5I.js";import"./figma-hO1OATkS.js";import"./SelectTest-Dfrr_ghx.js";import"./SelectComposition-Cc3b_OxD.js";import"./renderOrClone-Cb9xqVtH.js";import"./Menu-Bnh9TI_6.js";import"./Box-25vWnmJ9.js";import"./Divider-Dv0yWk4k.js";import"./list-DwdHZYh1.js";import"./FloatingPrimitive-DeeyujT-.js";import"./useId-CDjE3YUk.js";import"./useControl-Bdsdv14P.js";import"./Skeleton-BJic6b4p.js";import"./useFieldAriaProps-DwlP3pE3.js";import"./HelperText-jNe-w5_-.js";import"./DropdownArrowIcon-D6G3uTRt.js";import"./ErrorIcon-gTO4rnrz.js";import"./IconButton-w95PFQqB.js";import"./Tooltip-DjBJpIFd.js";import"./ProgressCircular-Bpk7vv8H.js";import"./a11yProps-Bd_FexwF.js";import"./TagGroup-2rg-o6a0.js";import"./Badge-CDdH9Zu0.js";import"./VisuallyHidden-DaM7uVfG.js";function i(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Components/Select",of:a}),`
`,e.jsx(o.h1,{id:"select",children:"Select"}),`
`,e.jsx(o.p,{children:"Selects are form elements that allows a user to select an option from a list of several options."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Select } from "@qlik-trial/sprout-css-react";

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
<Select.Select defaultValue="red" placeholder="Select a color" size="default">
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
</Select.Select>;
`})}),`
`,e.jsxs(o.p,{children:["By default, without ",e.jsx(o.code,{children:"onChange"})," and ",e.jsx(o.code,{children:"value"}),' you are using the "Uncontrolled" version of the component.']}),`
`,e.jsx(r,{of:n}),`
`,e.jsx(c,{of:n}),`
`,e.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(o.p,{children:"Content after refer to the most important part of the following patterns:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",rel:"nofollow",children:"W3/WAI/ARIA/APG combobox"})}),`
`]}),`
`,e.jsx(o.p,{children:"HTML structure"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Combobox"})," use a button with the role ",e.jsx(o.code,{children:"combobox"}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Combobox"})," require ",e.jsx(o.code,{children:"aria-controls"})," to be set."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Combobox"})," manage ",e.jsx(o.code,{children:"aria-expanded"})," to indicate the state of the popup."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Listbox"})," has the role ",e.jsx(o.code,{children:"listbox"}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Option"})," has the role ",e.jsx(o.code,{children:"option"})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"OptGroup"})," has the role ",e.jsx(o.code,{children:"group"})," and contains Option"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"OptGroup"})," must at least contains one Option: Dev are responsible for that"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"OptGroup"})," is not valid without the ",e.jsx(o.code,{children:"label"})," props"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Option"})," use a button tag so it rely on ",e.jsx(o.code,{children:"aria-selected"})," to indicate it's state"]}),`
`,e.jsxs(o.li,{children:["Only one ",e.jsx(o.code,{children:"Option"})," can be selected (implied by the value using a React Context)"]}),`
`,e.jsxs(o.li,{children:["All ",e.jsx(o.code,{children:"Option"})," that are not selected but selectable have the ",e.jsx(o.code,{children:"aria-selected"})," set to false"]}),`
`]}),`
`,e.jsx(o.p,{children:"Keyboard Navigation"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Combobox"})," keep the focus. The component has the ",e.jsx(o.code,{children:"aria-activedescendant"})," attribute to specify which element inside the listbox is in 'hover'. We will use the 'focus' word here but this is not the case."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"ArrowDown"}),": If the listbox is closed, it becomes open with the focus on the first [selected] option."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"ArrowDown"}),': If the listbox is opened, moves the "focus" to the next item.']}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"ArrowUp"}),': If the listbox is opened the "focus" is moved to the previous option.']}),`
`,e.jsx(o.li,{children:"Loop over options is activated."}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Escape"}),": Dismisses the listbox. Optionally, if the popup is hidden before Escape is pressed, clears the combobox."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Enter"}),": If the combobox is editable and an autocomplete suggestion is selected in the popup, accepts the suggestion either by placing the input cursor at the end of the accepted value in the combobox or by performing a default action on the value."]}),`
`,e.jsx(o.li,{children:"TODO: Printable Characters should moves focus to a value that starts with the typed characters."}),`
`]})]})}function F(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{F as default};
