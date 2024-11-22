import{j as e}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as o}from"./index-DUy19JZU.js";import{ae as s,af as a,ag as c}from"./index-CAy-nCaq.js";import{Basic as t}from"./Breadcrumb.stories-ByV-LS1G.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D8n7TIep.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-D-8MO0q_.js";import"./index-CBft-ReK.js";import"./index-DrFu-skq.js";import"./figma-hO1OATkS.js";import"./Link-BBccP2Lz.js";import"./Box-25vWnmJ9.js";import"./GotoIcon--SVsbwfc.js";import"./Button-C-WoFXIp.js";import"./Button.module-Cy3SiisI.js";import"./DropdownArrowIcon-D6G3uTRt.js";import"./ProgressCircular-Bpk7vv8H.js";import"./a11yProps-Bd_FexwF.js";function i(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Breadcrumb"}),`
`,e.jsx(r.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { Breadcrumb } from "@qlik-trial/sprout-css-react";
`})}),`
`,e.jsxs(r.p,{children:["You can pass an array of ",e.jsx(r.code,{children:"items"})," to specify the list of links."]}),`
`,e.jsx(r.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(a,{of:t,sourceState:"shown"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"composition"})," API doesn't add the needed attribute to respect the accessibility spec, so please consider that great powers comes with responsabilities."]}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/",rel:"nofollow",children:"W3/WAI/ARIA/APG Accordion"})}),`
`,e.jsxs(r.p,{children:["The current component use the ",e.jsx(r.code,{children:"Link"})," component so refer to it for the corresponding accessibility questions."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"The set of Links is structured using an ordered list."}),`
`,e.jsx(r.li,{children:"The Breadcrumb (nav element) is labeled Breadcrumb identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate."}),`
`,e.jsx(r.li,{children:"The Link to the current page has aria-current set to page. If the element representing the current page is not a link, aria-current is optional."}),`
`]}),`
`,e.jsxs(r.p,{children:["Both are equivalent and valid but note that you need to add the ",e.jsx(r.code,{children:'aria-current="page"'})," attribute on the last link."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`<Breadcrumb
  items={[
    {
      label: "Root",
      href: "/",
    },
    {
      label: "Folder",
      href: "/folder",
    },
    {
      label: "Page",
      href: "/page",
    },
  ]}
/>

<Breadcrumb>
    <BreadcrumbItem>
      <Link href="/">Home</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Link href="/folder">Folder</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Link href="/folder/mypage" aria-current="page">
        current page
      </Link>
    </BreadcrumbItem>
</Breadcrumb>
`})})]})}function T(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{T as default};
