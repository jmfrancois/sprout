import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{g as F}from"./figma-DdOIv0jn.js";import{r as P}from"./index-BwDkhjyp.js";import{g as R,B as d,a as v}from"./Box-Bo_17ADl.js";import{L as c}from"./Link-B_RgvxWc.js";import{B as u}from"./Button-35iONiNZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./GotoIcon-Cn-Tiv7D.js";import"./Button.module-Bksq7zkq.js";import"./DropdownArrowIcon-B9DU0KGM.js";import"./ProgressCircular-DToFE0Lx.js";const E="_breadcrumb_1d4lr_1",S="_entry_1d4lr_5",V="_entry__collapsed_1d4lr_12",A="_copy_1d4lr_16",I={breadcrumb:E,entry:S,entry__collapsed:V,copy:A},r=({children:o,...t})=>e.jsx("li",{className:I.entry,...t,children:e.jsx(d,{gap:"m",alignItems:"center",wrap:"nowrap",children:o})});r.displayName="BreadcrumbItem";const n=P.forwardRef(({label:o,items:t,children:T,...k},C)=>{const L=()=>t?t.map(({children:q,label:w,...l},m)=>{const p=m===t.length-1;return e.jsx(r,{children:e.jsxs(c,{withEllipsis:!0,"aria-current":p?"page":void 0,disabled:p,...l,children:[w,q]})},`${l.href}-${m}`)}):null;return e.jsx("nav",{...k,className:I.breadcrumb,ref:C,"aria-label":o||"breadcrumb",children:e.jsxs("ol",{...R({justify:"start",alignItems:"center",direction:"row"}),children:[L(),T]})})});n.displayName="Breadcrumb";r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(LinkProps & { label?: string })[]"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Components/Breadcrumb",component:n,parameters:{...F("breadcrumb")},argTypes:{label:{description:"Label for the breadcrumb",control:{type:"text"}},items:{table:{disable:!0}}}},N={chromatic:{disableSnapshot:!0}},a=o=>e.jsx(n,{...o,items:[{children:"Root",href:"/"},{children:"Folder",href:"/folder"},{children:"Page",href:"/page"}]});a.parameters={...N};const s=()=>e.jsxs(n,{label:"composition breadcrum",children:[e.jsx(r,{children:e.jsx(c,{href:"/",children:"Home"})}),e.jsx(r,{children:e.jsx(c,{href:"/folder",children:"Folder"})}),e.jsx(r,{children:e.jsx(c,{href:"/folder/mypage","aria-current":"page",disabled:!0,children:"current page"})})]});s.parameters={...N};const i=()=>e.jsxs(d,{gap:"xl",direction:"col",children:[e.jsx(s,{}),e.jsx(a,{}),e.jsxs(d,{direction:"col",border:"default",p:"m",width:"fit-content",children:[e.jsx("h2",{className:v({color:"default",font:"heading_s"}),children:"Composition using buttons (not accessible)"}),e.jsxs(n,{label:"Composition breadcrumb",children:[e.jsx(r,{children:e.jsx(u,{variant:"quiet",label:"Foo"})}),e.jsx(r,{children:e.jsx(u,{variant:"quiet",label:"Bar"})})]})]})]});a.__docgenInfo={description:"",methods:[],displayName:"Basic",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(LinkProps & { label?: string })[]"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"Composition"};i.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var b,h,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`(args: BreadCrumbProps) => <Breadcrumb {...args} items={[{
  children: "Root",
  href: "/"
}, {
  children: "Folder",
  href: "/folder"
}, {
  children: "Page",
  href: "/page"
}]} />`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,B,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Breadcrumb label="composition breadcrum">
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
  </Breadcrumb>`,...(x=(B=s.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var y,_,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Box gap="xl" direction="col">
    <Composition />
    <Basic />
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
  </Box>`,...(j=(_=i.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const X=["Basic","Composition","VisualTest"];export{a as Basic,s as Composition,i as VisualTest,X as __namedExportsOrder,W as default};
