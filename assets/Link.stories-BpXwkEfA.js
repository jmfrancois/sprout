import{j as e}from"./jsx-runtime-CfatFE5O.js";import{g as p}from"./figma-hO1OATkS.js";import{L as t}from"./Link-BBccP2Lz.js";import{B as c}from"./Box-25vWnmJ9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./GotoIcon--SVsbwfc.js";const L={title:"Components/Link",component:t,parameters:{...p("link")}},k={chromatic:{disableSnapshot:!0}},r={render:h=>e.jsx(c,{p:"s","data-testid":"wrapper",width:"fit-content",children:e.jsx(t,{...h})}),args:{children:"Link",href:"#"},argTypes:{children:{control:"text"},href:{control:"text"},disabled:{control:"boolean"},isExternal:{control:"boolean"},withEllipsis:{control:"boolean"}},parameters:k},i={render:()=>e.jsxs(c,{width:"200px",direction:"col",alignItems:"start",border:"default",p:"s",children:[e.jsx(t,{href:"/",children:"Default link"}),e.jsx(t,{href:"/","data-state":"hover",children:"Hovered link"}),e.jsx(t,{href:"/","data-state":"focusVisible",children:"Focus Visible link"}),e.jsx(t,{href:"/",disabled:!0,children:"Disabled link"}),e.jsx(t,{href:"https://www.qlik.com/",isExternal:!0,children:"External link"}),e.jsx(t,{href:"https://www.qlik.com/",isExternal:!0,"data-state":"hover",children:"External link hovered"}),e.jsx(t,{href:"https://www.qlik.com/",isExternal:!0,"data-state":"focusVisible",children:"External link focus"}),e.jsx(t,{href:"https://www.qlik.com/",isExternal:!0,disabled:!0,children:"External link disabled"}),e.jsx(t,{href:"#",withEllipsis:!0,children:"With ellipsis if too long you will see ellipsis"})]}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-state="hover"]',focusVisible:'[data-state="focusVisible"]'}}};var s,n,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Box p="s" data-testid="wrapper" width="fit-content">
      <Link {...args} />
    </Box>,
  args: {
    children: "Link",
    href: "#"
  },
  argTypes: {
    children: {
      control: "text"
    },
    href: {
      control: "text"
    },
    disabled: {
      control: "boolean"
    },
    isExternal: {
      control: "boolean"
    },
    withEllipsis: {
      control: "boolean"
    }
  },
  parameters: disableSnap
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var l,o,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Box width="200px" direction="col" alignItems="start" border="default" p="s">
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
    </Box>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-state="hover"]',
      focusVisible: '[data-state="focusVisible"]'
    }
  }
}`,...(d=(o=i.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const g=["Playground","VisualTest"];export{r as Playground,i as VisualTest,g as __namedExportsOrder,L as default};
