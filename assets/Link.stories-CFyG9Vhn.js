import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{g as h}from"./figma-DdOIv0jn.js";import{L as i}from"./Link-B_RgvxWc.js";import{B as c}from"./Box-Bo_17ADl.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GotoIcon-Cn-Tiv7D.js";const E={title:"Components/Link",component:i,parameters:{...h("link")}},k={chromatic:{disableSnapshot:!0}},t=p=>e.jsx(c,{p:"s","data-testid":"wrapper",width:"fit-content",children:e.jsx(i,{...p})});t.args={children:"Link",href:"#"};t.argTypes={children:{control:"text"},href:{control:"text"},disabled:{control:"boolean"},isExternal:{control:"boolean"},withEllipsis:{control:"boolean"}};t.parameters=k;const s=()=>e.jsxs(c,{width:"200px",direction:"col",alignItems:"start",border:"default",p:"s",children:[e.jsx(i,{href:"/",children:"Default link"}),e.jsx(i,{href:"/","data-state":"hover",children:"Hovered link"}),e.jsx(i,{href:"/","data-state":"focusVisible",children:"Focus Visible link"}),e.jsx(i,{href:"/",disabled:!0,children:"Disabled link"}),e.jsx(i,{href:"https://www.qlik.com/",isExternal:!0,children:"External link"}),e.jsx(i,{href:"https://www.qlik.com/",isExternal:!0,"data-state":"hover",children:"External link hovered"}),e.jsx(i,{href:"https://www.qlik.com/",isExternal:!0,"data-state":"focusVisible",children:"External link focus"}),e.jsx(i,{href:"https://www.qlik.com/",isExternal:!0,disabled:!0,children:"External link disabled"}),e.jsx(i,{href:"#",withEllipsis:!0,children:"With ellipsis if too long you will see ellipsis"})]});s.parameters={pseudo:{hover:'[data-state="hover"]',focusVisible:'[data-state="focusVisible"]'}};t.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"if the link is disabled"},label:{required:!1,tsType:{name:"string"},description:"@deprecated use children instead"},children:{required:!0,tsType:{name:"ReactNode"},description:""},isExternal:{required:!1,tsType:{name:"boolean"},description:""},withEllipsis:{required:!1,tsType:{name:"boolean"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`(args: LinkProps) => <Box p="s" data-testid="wrapper" width="fit-content">
    <Link {...args} />
  </Box>`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var l,o,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`() => <Box width="200px" direction="col" alignItems="start" border="default" p="s">
    <Link href="/">Default link</Link>
    <Link href="/" data-state="hover">
      Hovered link
    </Link>
    <Link href="/" data-state="focusVisible">
      Focus Visible link
    </Link>
    <Link href="/" disabled>
      Disabled link
    </Link>
    <Link href="https://www.qlik.com/" isExternal>
      External link
    </Link>
    <Link href="https://www.qlik.com/" isExternal data-state="hover">
      External link hovered
    </Link>
    <Link href="https://www.qlik.com/" isExternal data-state="focusVisible">
      External link focus
    </Link>
    <Link href="https://www.qlik.com/" isExternal disabled>
      External link disabled
    </Link>
    <Link href="#" withEllipsis>
      With ellipsis if too long you will see ellipsis
    </Link>
  </Box>`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const g=["Playground","VisualTest"];export{t as Playground,s as VisualTest,g as __namedExportsOrder,E as default};
