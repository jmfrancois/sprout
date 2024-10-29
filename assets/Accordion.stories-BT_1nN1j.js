var W=Object.defineProperty;var Y=(a,t,o)=>t in a?W(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o;var g=(a,t,o)=>Y(a,typeof t!="symbol"?t+"":t,o);import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{B as E}from"./BookIcon-C-8w8NmY.js";import{r as s}from"./index-BwDkhjyp.js";import{P as y}from"./constant-DXShcaho.js";import{c as Z,B as L}from"./Box-Bo_17ADl.js";import{u as Q}from"./useControl-BksuLBKc.js";const J="_accordion_37zn9_1",X="_header_37zn9_7",ee="_header_compact_37zn9_26",te="_header__clickable_37zn9_30",ae="_icon_37zn9_50",ne="_header__left_37zn9_59",re="_header__title_37zn9_72",oe="_header__right_37zn9_78",de="_header__value_37zn9_95",ie="_header__desc_37zn9_96",le="_arrow_37zn9_101",se="_panel_37zn9_114",ce="_panel__content_37zn9_121",d={accordion:J,header:X,header_compact:ee,header__clickable:te,icon:ae,header__left:ne,header__title:re,header__right:oe,header__value:de,header__desc:ie,arrow:le,panel:se,panel__content:ce};class me{constructor(t){g(this,"element");g(this,"getAllItems");g(this,"_getAllItems");g(this,"getSelectedItems");g(this,"loop");g(this,"_handler");this.getAllItems=t.getAllItems,this.getSelectedItems=t.getSelectedItems,this.loop=t.loop===void 0?!0:t.loop,this._getAllItems=()=>this.element?this.getAllItems(this.element):new NodeList}setElement(t){this.removeEventListener(),this.element=void 0,t&&(this.element=t,this.addEventListener())}focusOn(t){t&&t.focus()}getListInfo(){if(!this.element)return{focusedElement:null,focusedIndex:-1,all:[],lastIndex:-1};const t=this._getAllItems(),o=t.values();let l,i,c=0;do{const{value:m,done:u}=o.next();l=m===document.activeElement,l?i=!1:(i=!u,c+=1)}while(i);return{focusedElement:document.activeElement,focusedIndex:c,all:t,lastIndex:t.length-1}}getFirst(){if(this.element)return this._getAllItems().item(0)}getLast(){if(this.element){const t=this._getAllItems();return t.item(t.length-1)}}getNextItem(){const t=this.getListInfo();return t.focusedIndex===t.lastIndex?this.loop?t.all[0]:t.focusedElement:t.all[t.focusedIndex+1]}getPreviousItem(){const t=this.getListInfo();return t.focusedIndex===0?this.loop?t.all[t.lastIndex]:t.focusedElement:t.all[t.focusedIndex-1]}getNextPageItem(){const t=this.getListInfo();return t.focusedIndex+y>=t.lastIndex?t.all[t.lastIndex]:t.all[t.focusedIndex+y]}getPreviousPageItem(){const t=this.getListInfo();return t.focusedIndex-y<0?t.all[0]:t.all[t.focusedIndex-y]}onKeyDownHandler(t){if(this.element)switch(t.key){case"Down":case"ArrowDown":t.stopPropagation(),t.preventDefault(),this.focusOn(this.getNextItem());break;case"Up":case"ArrowUp":t.stopPropagation(),t.preventDefault(),this.focusOn(this.getPreviousItem());break;case"Home":t.stopPropagation(),t.preventDefault(),this.focusOn(this.getFirst());break;case"End":t.stopPropagation(),t.preventDefault(),this.focusOn(this.getLast());break;case"PageDown":t.stopPropagation(),t.preventDefault(),this.focusOn(this.getNextPageItem());break;case"PageUp":t.stopPropagation(),t.preventDefault(),this.focusOn(this.getPreviousPageItem());break}}addEventListener(){this.element&&(this._handler=t=>this.onKeyDownHandler(t),this.element.addEventListener("keydown",this._handler))}removeEventListener(){this.element&&this._handler&&(this.element.removeEventListener("keydown",this._handler),this._handler=void 0)}focusOnFirst(){this.element&&this.focusOn(this.getFirst())}focusOnFirstSelected(){if(this.element&&this.getSelectedItems){const t=this.getFirst();t?this.focusOn(t):this.focusOnFirst()}}}function ue(a){const[t,o]=s.useState();return s.useMemo(()=>{if(t)return t.getAllItems!==a.getAllItems&&(t.getAllItems=a.getAllItems),t.getSelectedItems!==a.getSelectedItems&&(t.getSelectedItems=a.getSelectedItems),t.loop!==a.loop&&a.loop!==void 0&&(t.loop=a.loop),t;const i=new me(a);return o(i),i},[a.getAllItems,a.getSelectedItems,a.loop])}function he(a){return a.querySelectorAll(`.${d.header}`)}function pe(a){return a.querySelectorAll(`.${d.header}`)}const P=({behavior:a="linked",headerLevel:t,children:o,openedDefault:l,renderContent:i,variant:c,..._})=>{const[m,u]=s.useState(l),h=s.useRef(null),b=ue({getAllItems:he,getSelectedItems:pe});s.useEffect(()=>(h&&h.current&&b.setElement(h.current),()=>{b.setElement()}),[]);const A=I=>{u(I===m?void 0:I)};return e.jsx("div",{className:d.accordion,..._,ref:h,children:s.Children.map(o,(I,v)=>{const j={key:v,onToggleOpened:()=>A(v),opened:v===m,renderContent:i,variant:c,headerLevel:t};return a==="isolated"&&(delete j.opened,j.openedDefault=v===l),s.cloneElement(I,j)})})};P.displayName="AccordionContainer";P.__docgenInfo={description:"",methods:[],displayName:"AccordionContainer",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement[] | ReactElement",elements:[{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},{name:"ReactElement"}]},description:""},headerLevel:{required:!1,tsType:{name:'intersection["level"]',raw:'AccordionHeaderPropsType["level"]'},description:""},behavior:{required:!1,tsType:{name:"union",raw:'"linked" | "isolated"',elements:[{name:"literal",value:'"linked"'},{name:"literal",value:'"isolated"'}]},description:"",defaultValue:{value:'"linked"',computed:!1}},openedDefault:{required:!1,tsType:{name:"number"},description:""},renderContent:{required:!1,tsType:{name:"boolean"},description:"You can control if the content rendered when opened={false}"},variant:{required:!1,tsType:{name:"union",raw:'"default" | "quiet"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"quiet"'}]},description:""}}};const fe=({opened:a})=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:a?"M7.99645 5.41421L13.1429 10.5607L13.85 9.85355L7.99645 4L2.1429 9.85355L2.85001 10.5607L7.99645 5.41421Z":"M7.99641 10.5858L13.1429 5.43933L13.85 6.14644L7.99641 12L2.14285 6.14644L2.84996 5.43933L7.99641 10.5858Z",fill:"currentColor"})}),Ie=({children:a,className:t,level:o})=>{switch(o){case 2:return e.jsx("h2",{className:t,children:a});case 3:return e.jsx("h3",{className:t,children:a});case 4:return e.jsx("h4",{className:t,children:a});case 5:return e.jsx("h5",{className:t,children:a});case 6:return e.jsx("h6",{className:t,children:a});default:return e.jsx("span",{className:t,children:a})}},H=s.forwardRef(({level:a,controlId:t,sectionId:o,opened:l,onClick:i,icon:c,header:_,description:m,value:u,disabled:h=!1,width:b,...A},I)=>e.jsxs("button",{id:t,"aria-controls":o,"aria-expanded":l,onClick:i,className:Z(d.header,{[d.header__clickable]:!h,[d.header_compact]:b==="compact"}),disabled:h,ref:I,"data-test":"panel.header","data-testid":"panel.header",type:"button",...A,children:[c&&e.jsx("span",{className:d.icon,children:c}),e.jsxs("div",{className:d.header__left,children:[e.jsx(Ie,{level:a,className:d.header__title,children:_}),m&&e.jsx("span",{className:d.header__desc,children:m})]}),e.jsxs("div",{className:d.header__right,children:[u&&e.jsx("span",{className:d.header__value,children:u}),e.jsx("div",{className:d.arrow,children:e.jsx(fe,{opened:l})})]})]}));H.displayName="AccordionHeader";H.__docgenInfo={description:"",methods:[],displayName:"AccordionHeader",props:{level:{required:!1,tsType:{name:"union",raw:"2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:""},opened:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},controlId:{required:!0,tsType:{name:"string"},description:""},sectionId:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},width:{required:!0,tsType:{name:"union",raw:'"full" | "compact"',elements:[{name:"literal",value:'"full"'},{name:"literal",value:'"compact"'}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => unknown",signature:{arguments:[],return:{name:"unknown"}}},description:""}}};const S=s.forwardRef(({variant:a,id:t,children:o,headerLevel:l,opened:i,openedDefault:c,renderContent:_,onToggleOpened:m,icon:u,header:h,description:b,value:A,width:I="full",disabled:v=!1,...j},K)=>{const w=Q({opened:i,openedDefault:c,onToggleOpened:m},{onChangeKey:"onToggleOpened",valueKey:"opened",defaultValueKey:"openedDefault",selector:U=>U}),$=s.useId(),q=t||$,C=`AccordionItem__control--${q}`,T=`AccordionItem__content--${q}`;let k=!0;return!_&&!w.value&&(k=!1),e.jsxs("div",{className:d.panel,...j,children:[e.jsx(H,{level:l,controlId:C,sectionId:T,opened:!!w.value,onClick:()=>w.onChange(!w.value),icon:u,header:h,description:b,value:A,width:I,disabled:v,"data-variant":a||"default",ref:K}),k&&e.jsx("div",{id:T,role:"region","aria-labelledby":C,className:d.panel__content,"data-test":"panel.section","data-testid":"panel.section",children:o})]})});S.displayName="AccordionItem";S.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "quiet"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"quiet"'}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},headerLevel:{required:!1,tsType:{name:'intersection["level"]',raw:'AccordionHeaderPropsType["level"]'},description:"You can control which tag is used. h2 with headerLevel={2}. span otherwise"},renderContent:{required:!1,tsType:{name:"boolean"},description:"You can control if the content rendered when opened={false}"},opened:{required:!1,tsType:{name:"boolean"},description:""},openedDefault:{required:!1,tsType:{name:"boolean"},description:""},width:{required:!1,tsType:{name:"union",raw:'"full" | "compact"',elements:[{name:"literal",value:'"full"'},{name:"literal",value:'"compact"'}]},description:`When used alone you can use this property to make the accordion item width fit the content
It should never been used in an Accordion container
@default "full"`,defaultValue:{value:'"full"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onToggleOpened:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const n={Container:P,Item:S},ge={component:n,title:"Components/Accordion"},G={chromatic:{disableSnapshot:!0}},r=()=>e.jsx("p",{children:"Quisque efficitur, magna sit amet tempor malesuada, orci mauris vestibulum enim, quis gravida est urna et ipsum. Nunc rutrum, magna id fermentum dignissim, magna sem volutpat risus, ut ultrices ipsum lacus vitae sapien. Curabitur sodales risus ac nibh efficitur, dapibus posuere ipsum bibendum. Proin erat ipsum, tempus in aliquet sed, auctor id sem. Maecenas ultrices, magna vitae pretium condimentum, ipsum lectus hendrerit est, a ultrices lacus odio in mi. Phasellus accumsan diam in metus dictum ultrices. In hac habitasse platea dictumst. Curabitur vestibulum vitae libero sit amet blandit. Nulla bibendum sollicitudin dolor at vehicula. Morbi quis viverra velit, eget ornare velit. Praesent porttitor sagittis nulla non vehicula. u"}),p=a=>e.jsx(n.Item,{...a,children:e.jsx(r,{})});p.args={id:"simple-panel",header:"simple panel",renderContent:!1,variant:"default"};p.argTypes={id:{control:{type:"text"}},header:{control:{type:"text"}},headerLevel:{control:{type:"number"}},description:{control:{type:"text"}},value:{control:{type:"text"}},disabled:{control:{type:"boolean"}},renderContent:{control:{type:"boolean"}},children:{table:{disable:!0}},openedDefault:{table:{disable:!0}}};p.parameters=G;const f=a=>e.jsx("div",{style:{maxWidth:"50rem",marginLeft:"auto",marginRight:"auto",padding:"1.875rem"},children:e.jsxs(n.Container,{...a,children:[e.jsx(n.Item,{id:"panel-a",header:"first panel",children:e.jsx(r,{})}),e.jsx(n.Item,{id:"panel-b",header:"second panel",children:e.jsx(r,{})}),e.jsx(n.Item,{id:"panel-c",header:"third panel",children:e.jsx(r,{})})]})});f.args={openedDefault:0,renderContent:!0,variant:"default",behavior:"linked"};f.argTypes={headerLevel:{control:{type:"number"}},behavior:{control:{type:"radio",options:["linked","isolated"]}},openedDefault:{control:{type:"number"}},renderContent:{control:{type:"boolean"}},variant:{control:{type:"radio",options:["default","quiet"]}},children:{table:{disable:!0}}};f.parameters=G;const x=()=>e.jsxs(L,{gap:"xl",direction:"col",children:[e.jsx("h2",{children:"Accordion container in default and quiet"}),e.jsxs(L,{gap:"xl",direction:"row",width:"50vw",children:[e.jsxs(n.Container,{variant:"default",children:[e.jsx(n.Item,{header:"HeaderLabel",openedDefault:!0,children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel","data-state":"hover",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel","data-state":"active",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel","data-state":"focus",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",disabled:!0,children:e.jsx(r,{})})]}),e.jsxs(n.Container,{variant:"quiet",renderContent:!0,children:[e.jsx(n.Item,{header:"HeaderLabel",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel","data-state":"hover",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel","data-state":"active",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel","data-state":"focus",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",disabled:!0,children:e.jsx(r,{})})]})]}),e.jsx("h2",{children:"Accordion.Item alone in full and compact"}),e.jsxs(L,{gap:"xl",direction:"row",width:"50vw",children:[e.jsxs(L,{width:300,direction:"col",gap:"3xl",children:[e.jsx(n.Item,{header:"HeaderLabel",width:"full",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"full","data-state":"hover",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"full","data-state":"active",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"full","data-state":"focus",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"full",value:"ValueLabel",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"full",description:"DescriptionLabel",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"full",icon:e.jsx(E,{}),children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"full",openedDefault:!0,children:e.jsx(r,{})})]}),e.jsxs(L,{width:300,direction:"col",gap:"3xl",children:[e.jsx(n.Item,{header:"HeaderLabel",width:"compact",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"compact","data-state":"hover",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"compact","data-state":"active",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"compact","data-state":"focus",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"compact",value:"ValueLabel",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"compact",description:"DescriptionLabel",children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"compact",icon:e.jsx(E,{}),children:e.jsx(r,{})}),e.jsx(n.Item,{header:"HeaderLabel",width:"compact",openedDefault:!0,children:e.jsx(r,{})})]})]})]});x.parameters={pseudo:{hover:'[data-state="hover"] > button',active:'[data-state="active"] > button',focusVisible:'[data-state="focus"] > button'}};p.__docgenInfo={description:"",methods:[],displayName:"ItemPlayground"};f.__docgenInfo={description:"",methods:[],displayName:"ContainerPlayground"};x.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var D,N,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`(props: AccordionProps.Item) => <Accordion.Item {...props}>
    <SampleParagraph />
  </Accordion.Item>`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var B,R,z;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`(props: Partial<AccordionProps>) => <div style={{
  maxWidth: "50rem",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "1.875rem"
}}>
    <Accordion.Container {...props}>
      <Accordion.Item id="panel-a" header="first panel">
        <SampleParagraph />
      </Accordion.Item>
      <Accordion.Item id="panel-b" header="second panel">
        <SampleParagraph />
      </Accordion.Item>
      <Accordion.Item id="panel-c" header="third panel">
        <SampleParagraph />
      </Accordion.Item>
    </Accordion.Container>
  </div>`,...(z=(R=f.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var V,F,M;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`() => <Box gap="xl" direction="col">
    <h2>Accordion container in default and quiet</h2>
    <Box gap="xl" direction="row" width="50vw">
      <Accordion.Container variant="default">
        <Accordion.Item header="HeaderLabel" openedDefault>
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" data-state="hover">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" data-state="active">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" data-state="focus">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" disabled>
          <SampleParagraph />
        </Accordion.Item>
      </Accordion.Container>
      <Accordion.Container variant="quiet" renderContent>
        <Accordion.Item header="HeaderLabel">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" data-state="hover">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" data-state="active">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" data-state="focus">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" disabled>
          <SampleParagraph />
        </Accordion.Item>
      </Accordion.Container>
    </Box>
    <h2>Accordion.Item alone in full and compact</h2>
    <Box gap="xl" direction="row" width="50vw">
      <Box width={300} direction="col" gap="3xl">
        <Accordion.Item header="HeaderLabel" width="full">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="full" data-state="hover">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="full" data-state="active">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="full" data-state="focus">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="full" value="ValueLabel">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="full" description="DescriptionLabel">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="full" icon={<BookIcon />}>
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="full" openedDefault>
          <SampleParagraph />
        </Accordion.Item>
      </Box>
      <Box width={300} direction="col" gap="3xl">
        <Accordion.Item header="HeaderLabel" width="compact">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="compact" data-state="hover">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="compact" data-state="active">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="compact" data-state="focus">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="compact" value="ValueLabel">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="compact" description="DescriptionLabel">
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="compact" icon={<BookIcon />}>
          <SampleParagraph />
        </Accordion.Item>
        <Accordion.Item header="HeaderLabel" width="compact" openedDefault>
          <SampleParagraph />
        </Accordion.Item>
      </Box>
    </Box>
  </Box>`,...(M=(F=x.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const xe=["ItemPlayground","ContainerPlayground","VisualTest"],ye=Object.freeze(Object.defineProperty({__proto__:null,ContainerPlayground:f,ItemPlayground:p,VisualTest:x,__namedExportsOrder:xe,default:ge},Symbol.toStringTag,{value:"Module"}));export{f as C,ye as S};
