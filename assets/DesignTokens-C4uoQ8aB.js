import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as t}from"./index-DlpNa54Y.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";function s(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsxs(o.p,{children:["In ",e.jsx(o.a,{href:"https://internal.qlik.dev/design/sprout/",rel:"nofollow",children:"Sprout"}),", we use ",e.jsx(o.a,{href:"https://internal.qlik.dev/design/sprout/design-tokens/",rel:"nofollow",children:"design tokens"}),"."]}),`
`,e.jsxs(o.p,{children:["We have implemented tokens by using ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*",rel:"nofollow",children:"CSS Variables"}),`.
You can also read the article on `,e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"Using CSS custom properties (variables)"}),"."]}),`
`,e.jsx(o.h2,{id:"source",children:"Source"}),`
`,e.jsx(o.p,{children:"The tokens are managed outside of this repository. They are implemented as CSS variables. For the sake of this WIP we provide a dump of them."}),`
`,e.jsx(o.h2,{id:"ide-extensions--dev-experience",children:"IDE extensions / Dev experience"}),`
`,e.jsxs(o.p,{children:["If you are using VSCode, you should try the ",e.jsx(o.a,{href:"https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables",rel:"nofollow",children:"CSS Variable Autocomplete"})," extension."]}),`
`,e.jsx(o.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(o.p,{children:"If your web application already exposes tokens, you can refer to them right now by using the official CSS syntax:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.foo {
  color: var(--sprout-common-foreground-color-default);
  padding: var(--sprout-common-spacing-s);
  width: var(--sprout-common-sizing-3xl);
}
`})}),`
`,e.jsx(o.p,{children:"The mindset behind tokens is to never rely on a given value but to trust the designer behind the value. It means as a Frontend developer, your code should work with different values that you are not in control of."}),`
`,e.jsx(o.p,{children:"That doesn't mean you do not need to test these values. Storybook provides a good way to test the changes that Sprout supports."}),`
`,e.jsx(o.h2,{id:"tokens-customization",children:"Tokens customization"}),`
`,e.jsx(o.p,{children:"By customizing values of tokens, we can already change a lot of things. Our tokens are organized using different dimensions."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Appearance"})," tokens will cover all the colors, which is the first step."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Roundness"})," is the second part; it helps to make it more rounded or sharper."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Typography"})," is the third part in the customization. You can specify where your fonts are located."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"Density"})," of our UI is more about accessibility and should not be changed."]}),`
`,e.jsx(o.p,{children:"They are considered a public API to allow an integration to come in, provide new values, and make a given UI look different."}),`
`,e.jsx(o.p,{children:'We will provide multiple examples later on to let developers test their UI with those "extreme" examples.'})]})}function d(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{d as default};
