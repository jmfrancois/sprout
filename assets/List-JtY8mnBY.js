import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{ae as c,af as r,ag as d}from"./index-CAy-nCaq.js";import{S as l,D as s}from"./List.stories-uEbfaJo6.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./ListItem-D4xYxLjM.js";import"./useListGesture-AviVLQSr.js";import"./list-DwdHZYh1.js";import"./Box-25vWnmJ9.js";import"./useId-CDjE3YUk.js";import"./Divider-Dv0yWk4k.js";import"./Menu-Bnh9TI_6.js";import"./renderOrClone-Cb9xqVtH.js";import"./FloatingPrimitive-DeeyujT-.js";import"./useControl-Bdsdv14P.js";import"./Skeleton-BJic6b4p.js";import"./Checkbox-B1rHGUY9.js";import"./HelperText-jNe-w5_-.js";function n(i){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Components/List",of:l}),`
`,e.jsx(t.h1,{id:"list",children:"List"}),`
`,e.jsx(t.p,{children:"Lists are used to present elements in a vertical layout."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { List, ListDivider, ListItem } from "@qlik-trial/sprout-css-react";

<List gap="m" dense>
  <ListItem selected>item 1</ListItem>
  <ListItem>item 2</ListItem>
  <ListDivider />
  <ListItem onClick={() => {}}>interactive item 3</ListItem>
  <ListItem>item 4</ListItem>
</List>;
`})}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:"HTML structure"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"List"})," is an HTML ",e.jsx(t.code,{children:"ul"})," element."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ListItem"})," is an HTML ",e.jsx(t.code,{children:"li"})," element."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ListDivider"})," is an HTML ",e.jsx(t.code,{children:"li"})," element which contains a ",e.jsx(t.code,{children:"Divider"})," with ",e.jsx(t.code,{children:'role="separator"'})," attribute."]}),`
`]}),`
`,e.jsxs(t.p,{children:["Note on interactive ",e.jsx(t.code,{children:"ListItem"}),": If it receives ",e.jsx(t.code,{children:"onClick"}),` event handler it becomes interactive.
In this context to avoid composition issue, the `,e.jsx(t.code,{children:"ListItem"})," doesn't receive the onClick. It adds a button children aside the provided children and use absolute position to make it visually be the list item."]}),`
`,e.jsx(t.p,{children:"Keyboard Navigation"}),`
`,e.jsxs(t.p,{children:["Variant one: without ",e.jsx(t.code,{children:"useGesture"})," property:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Tab"}),": When focus moves into the first ",e.jsx(t.code,{children:"ListItem"})," with onClick property."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Tab"}),": When a ",e.jsx(t.code,{children:"ListItem"})," has the focus, moves focus to the next ",e.jsx(t.code,{children:"ListItem"})," element with onClick property."]}),`
`]}),`
`,e.jsxs(t.p,{children:["Variant two: with ",e.jsx(t.code,{children:"useGesture"})," property:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Tab"}),": When focus moves into the ",e.jsx(t.code,{children:"List"}),", places focus on the selected ",e.jsx(t.code,{children:"ListItem"})," element."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Tab"}),": When the ",e.jsx(t.code,{children:"List"})," contains the focus, moves focus to the next element in the page tab sequence outside the List."]}),`
`,e.jsxs(t.li,{children:["When focus is on a ",e.jsx(t.code,{children:"ListItem"})," element:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowDown"}),": moves focus to the next ",e.jsx(t.code,{children:"ListItem"}),". If focus is on the last, moves focus to the first."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ArrowUp"}),": moves focus to the previous ",e.jsx(t.code,{children:"ListItem"}),". If focus is on the first, moves focus to the last."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Home"}),": Moves focus to the first ",e.jsx(t.code,{children:"ListItem"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"End"}),": Moves focus to the last ",e.jsx(t.code,{children:"ListItem"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Space"})," or ",e.jsx(t.code,{children:"Enter"}),": trigger the ",e.jsx(t.code,{children:"onClick"}),". The list is controlled so the ",e.jsx(t.code,{children:"selected"})," props must be updated."]}),`
`]}),`
`]}),`
`]})]})}function S(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{S as default};
