import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as o}from"./index-DlpNa54Y.js";import{ae as i}from"./index-D_mPI9qN.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Q9zOLvKt.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Utils/hooks/useId"}),`
`,e.jsx(n.h1,{id:"useid",children:"useId"}),`
`,e.jsx(n.p,{children:`useId is a hook which extend useId from react. You can see it as a safe id provider.
It is usefull for associating labels with inputs for example.`}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useId } from '@qlik-trial/sprout-css-react

const MyField = ({id, label, ...props}: MyFieldProps) => {
  const safeId = useId(id);

  return (
    <div>
      <label htmlFor={safeId}>{label}</label>
      <input id={safeId} {...props} />
    </div>
  );
};
`})})]})}function j(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{j as default};
