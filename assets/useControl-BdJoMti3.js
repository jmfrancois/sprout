import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as r}from"./index-DlpNa54Y.js";import{ae as l}from"./index-D_mPI9qN.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Q9zOLvKt.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";function t(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Utils/hooks/useControl"}),`
`,n.jsx(e.h1,{id:"usecontrol",children:"useControl"}),`
`,n.jsxs(e.p,{children:["useControl is a hook inspired from ",n.jsx(e.a,{href:"https://www.npmjs.com/package/uncontrollable",rel:"nofollow",children:"uncontrollable"}),`.
It gives a simple API to manage all possible use cases of control/uncontrol input at the API level.`]}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useControl } from '@qlik-trial/sprout-css-react

const WithInput = (props: InputProps) => {
  const controlled = useControl<string>(props, {
    onChangeKey: "onChange",
    valueKey: "value",
    defaultValueKey: "defaultValue",
    selector: (e) => e.target.value,
    defaultValue: "",
  });

  return (
    <div>
      <input type="text" value={controlled.value} onChange={controlled.onChange} />
      <div>{controlled.value}</div>
    </div>
  );
};
`})})]})}function j(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{j as default};
