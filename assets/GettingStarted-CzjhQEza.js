import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";function o(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...s(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(n.p,{children:`This is Sprout design system implementation on top of React.
So please first start with your choice on the React side.
Once you have a react application that runs you can just add the following dependencies`}),`
`,t.jsx(n.p,{children:t.jsx(n.code,{children:"pnpm i @qlik-trial/design-tokens @qlik-trial/sprout-css-react"})}),`
`,t.jsxs(n.p,{children:["Then you can add the following snippet to tests it works in your ",t.jsx(n.code,{children:"App.tsx"})," for example:"]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-javascript",children:`// to setup the tokens
import "@qlik-trial/design-tokens/generated/tokens/css/sprout-tokens.css";
// use the component you want
import { Button } from "@qlik-trial/sprout-css-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      data-appearance="qlik-light"
      data-density="comfortable"
      data-roundness="soft"
      data-sizing="mid-sized"
      data-typography="inter"
    >
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant="primary" onClick={() => setCount((count) => count + 1)} label={\`count is \${count}\`} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}
`})})]})}function d(e={}){const{wrapper:n}={...s(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o(e)}export{d as default};
