import{j as e}from"./jsx-runtime-CfatFE5O.js";import{g as T}from"./figma-hO1OATkS.js";import{r as q}from"./index-ClcD9ViR.js";import{L as a}from"./Link-BBccP2Lz.js";import{B as d,g as R,a as S}from"./Box-25vWnmJ9.js";import{B as u}from"./Button-C-WoFXIp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./GotoIcon--SVsbwfc.js";import"./Button.module-Cy3SiisI.js";import"./DropdownArrowIcon-D6G3uTRt.js";import"./ProgressCircular-Bpk7vv8H.js";import"./a11yProps-Bd_FexwF.js";const P="_breadcrumb_1d4lr_1",v="_entry_1d4lr_5",E="_entry__collapsed_1d4lr_12",H="_copy_1d4lr_16",I={breadcrumb:P,entry:v,entry__collapsed:E,copy:H},r=({children:t,...o})=>e.jsx("li",{className:I.entry,...o,children:e.jsx(d,{gap:"m",alignItems:"center",wrap:"nowrap",children:t})});r.displayName="BreadcrumbItem";const n=q.forwardRef(({label:t,items:o,children:L,...k},N)=>{const F=()=>o?o.map(({children:w,label:C,...l},m)=>{const p=m===o.length-1;return e.jsx(r,{children:e.jsxs(a,{withEllipsis:!0,"aria-current":p?"page":void 0,disabled:p,...l,children:[C,w]})},`${l.href}-${m}`)}):null;return e.jsx("nav",{...k,className:I.breadcrumb,ref:N,"aria-label":t||"breadcrumb",children:e.jsxs("ol",{...R({justify:"start",alignItems:"center",direction:"row"}),children:[F(),L]})})});n.displayName="Breadcrumb";r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(LinkProps & { label?: string })[]"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Components/Breadcrumb",component:n,parameters:{...T("breadcrumb")},argTypes:{label:{description:"Label for the breadcrumb",control:{type:"text"}},items:{table:{disable:!0}}}},s={render:t=>e.jsx(n,{...t,items:[{children:"Root",href:"/"},{children:"Folder",href:"/folder"},{children:"Page",href:"/page"}]}),parameters:{chromatic:{disableSnapshot:!0}}},i={render:()=>e.jsxs(n,{label:"composition breadcrum",children:[e.jsx(r,{children:e.jsx(a,{href:"/",children:"Home"})}),e.jsx(r,{children:e.jsx(a,{href:"/folder",children:"Folder"})}),e.jsx(r,{children:e.jsx(a,{href:"/folder/mypage","aria-current":"page",disabled:!0,children:"current page"})})]}),parameters:{chromatic:{disableSnapshot:!0}}},c={render:()=>e.jsxs(d,{gap:"xl",direction:"col",children:[e.jsxs(n,{label:"composition breadcrum",children:[e.jsx(r,{children:e.jsx(a,{href:"/",children:"Home"})}),e.jsx(r,{children:e.jsx(a,{href:"/folder",children:"Folder"})}),e.jsx(r,{children:e.jsx(a,{href:"/folder/mypage","aria-current":"page",disabled:!0,children:"current page"})})]}),e.jsx(n,{items:[{children:"Root",href:"/"},{children:"Folder",href:"/folder"},{children:"Page",href:"/page"}]}),e.jsxs(d,{direction:"col",border:"default",p:"m",width:"fit-content",children:[e.jsx("h2",{className:S({color:"default",font:"heading_s"}),children:"Composition using buttons (not accessible)"}),e.jsxs(n,{label:"Composition breadcrumb",children:[e.jsx(r,{children:e.jsx(u,{variant:"quiet",label:"Foo"})}),e.jsx(r,{children:e.jsx(u,{variant:"quiet",label:"Bar"})})]})]})]}),parameters:{controls:{disable:!0}}};var b,h,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args} items={[{
    children: "Root",
    href: "/"
  }, {
    children: "Folder",
    href: "/folder"
  }, {
    children: "Page",
    href: "/page"
  }]} />,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,B,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Breadcrumb label="composition breadcrum">
      <BreadcrumbItem>
        <Link href="/">Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/folder">Folder</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/folder/mypage" aria-current="page" disabled>
          current page
        </Link>
      </BreadcrumbItem>
    </Breadcrumb>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var j,y,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Box gap="xl" direction="col">
      <Breadcrumb label="composition breadcrum">
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/folder">Folder</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/folder/mypage" aria-current="page" disabled>
            current page
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb items={[{
      children: "Root",
      href: "/"
    }, {
      children: "Folder",
      href: "/folder"
    }, {
      children: "Page",
      href: "/page"
    }]} />
      <Box direction="col" border="default" p="m" width="fit-content">
        <h2 className={getTypographyClassName({
        color: "default",
        font: "heading_s"
      })}>
          Composition using buttons (not accessible)
        </h2>
        <Breadcrumb label="Composition breadcrumb">
          <BreadcrumbItem>
            <Button variant="quiet" label="Foo" />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button variant="quiet" label="Bar" />
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(y=c.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const X=["Basic","Composition","VisualTest"];export{s as Basic,i as Composition,c as VisualTest,X as __namedExportsOrder,W as default};
