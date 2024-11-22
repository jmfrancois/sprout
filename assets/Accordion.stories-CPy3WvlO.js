import{j as e}from"./jsx-runtime-CfatFE5O.js";import{B as T}from"./BookIcon-DZsRg5Cg.js";import{r as l}from"./index-ClcD9ViR.js";import{u as W}from"./useListGesture-AviVLQSr.js";import{c as Y,B as _}from"./Box-25vWnmJ9.js";import{u as Z}from"./useControl-Bdsdv14P.js";const G="_accordion_37zn9_1",Q="_header_37zn9_7",F="_header_compact_37zn9_26",J="_header__clickable_37zn9_30",U="_icon_37zn9_50",X="_header__left_37zn9_59",ee="_header__title_37zn9_72",ae="_header__right_37zn9_78",re="_header__value_37zn9_95",te="_header__desc_37zn9_96",ne="_arrow_37zn9_101",oe="_panel_37zn9_114",de="_panel__content_37zn9_121",n={accordion:G,header:Q,header_compact:F,header__clickable:J,icon:U,header__left:X,header__title:ee,header__right:ae,header__value:re,header__desc:te,arrow:ne,panel:oe,panel__content:de};function ie(t){return t.querySelectorAll(`.${n.header}`)}function le(t){return t.querySelectorAll(`.${n.header}`)}const w=({behavior:t="linked",headerLevel:o,children:c,openedDefault:s,renderContent:b,variant:u,...x})=>{const[p,m]=l.useState(s),d=l.useRef(null),h=W({getAllItems:ie,getSelectedItems:le});l.useEffect(()=>(d&&d.current&&h.setElement(d.current),()=>{h.setElement()}),[]);const I=i=>{m(i===p?void 0:i)};return e.jsx("div",{className:n.accordion,...x,ref:d,children:l.Children.map(c,(i,f)=>{const v={key:f,onToggleOpened:()=>I(f),opened:f===p,renderContent:b,variant:u,headerLevel:o};return t==="isolated"&&(delete v.opened,v.openedDefault=f===s),l.cloneElement(i,v)})})};w.displayName="AccordionContainer";w.__docgenInfo={description:"",methods:[],displayName:"AccordionContainer",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement[] | ReactElement",elements:[{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},{name:"ReactElement"}]},description:""},headerLevel:{required:!1,tsType:{name:'intersection["level"]',raw:'AccordionHeaderPropsType["level"]'},description:""},behavior:{required:!1,tsType:{name:"union",raw:'"linked" | "isolated"',elements:[{name:"literal",value:'"linked"'},{name:"literal",value:'"isolated"'}]},description:"",defaultValue:{value:'"linked"',computed:!1}},openedDefault:{required:!1,tsType:{name:"number"},description:""},renderContent:{required:!1,tsType:{name:"boolean"},description:"You can control if the content rendered when opened={false}"},variant:{required:!1,tsType:{name:"union",raw:'"default" | "quiet"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"quiet"'}]},description:""}}};const ce=({opened:t})=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:t?"M7.99645 5.41421L13.1429 10.5607L13.85 9.85355L7.99645 4L2.1429 9.85355L2.85001 10.5607L7.99645 5.41421Z":"M7.99641 10.5858L13.1429 5.43933L13.85 6.14644L7.99641 12L2.14285 6.14644L2.84996 5.43933L7.99641 10.5858Z",fill:"currentColor"})}),se=({children:t,className:o,level:c})=>{switch(c){case 2:return e.jsx("h2",{className:o,children:t});case 3:return e.jsx("h3",{className:o,children:t});case 4:return e.jsx("h4",{className:o,children:t});case 5:return e.jsx("h5",{className:o,children:t});case 6:return e.jsx("h6",{className:o,children:t});default:return e.jsx("span",{className:o,children:t})}},y=l.forwardRef(({level:t,controlId:o,sectionId:c,opened:s,onClick:b,icon:u,header:x,description:p,value:m,disabled:d=!1,width:h,...I},i)=>e.jsxs("button",{id:o,"aria-controls":c,"aria-expanded":s,onClick:b,className:Y(n.header,{[n.header__clickable]:!d,[n.header_compact]:h==="compact"}),disabled:d,ref:i,"data-test":"panel.header","data-testid":"panel.header",type:"button",...I,children:[u&&e.jsx("span",{className:n.icon,children:u}),e.jsxs("div",{className:n.header__left,children:[e.jsx(se,{level:t,className:n.header__title,children:x}),p&&e.jsx("span",{className:n.header__desc,children:p})]}),e.jsxs("div",{className:n.header__right,children:[m&&e.jsx("span",{className:n.header__value,children:m}),e.jsx("div",{className:n.arrow,children:e.jsx(ce,{opened:s})})]})]}));y.displayName="AccordionHeader";y.__docgenInfo={description:"",methods:[],displayName:"AccordionHeader",props:{level:{required:!1,tsType:{name:"union",raw:"2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:""},opened:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},controlId:{required:!0,tsType:{name:"string"},description:""},sectionId:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},width:{required:!0,tsType:{name:"union",raw:'"full" | "compact"',elements:[{name:"literal",value:'"full"'},{name:"literal",value:'"compact"'}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => unknown",signature:{arguments:[],return:{name:"unknown"}}},description:""}}};const H=l.forwardRef(({variant:t,id:o,children:c,headerLevel:s,opened:b,openedDefault:u,renderContent:x,onToggleOpened:p,icon:m,header:d,description:h,value:I,width:i="full",disabled:f=!1,...v},M)=>{const L=Z({opened:b,openedDefault:u,onToggleOpened:p},{onChangeKey:"onToggleOpened",valueKey:"opened",defaultValueKey:"openedDefault",selector:K=>K}),$=l.useId(),S=o||$,P=`AccordionItem__control--${S}`,q=`AccordionItem__content--${S}`;let C=!0;return!x&&!L.value&&(C=!1),e.jsxs("div",{className:n.panel,...v,children:[e.jsx(y,{level:s,controlId:P,sectionId:q,opened:!!L.value,onClick:()=>L.onChange(!L.value),icon:m,header:d,description:h,value:I,width:i,disabled:f,"data-variant":t||"default",ref:M}),C&&e.jsx("div",{id:q,role:"region","aria-labelledby":P,className:n.panel__content,"data-test":"panel.section","data-testid":"panel.section",children:c})]})});H.displayName="AccordionItem";H.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "quiet"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"quiet"'}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},headerLevel:{required:!1,tsType:{name:'intersection["level"]',raw:'AccordionHeaderPropsType["level"]'},description:"You can control which tag is used. h2 with headerLevel={2}. span otherwise"},renderContent:{required:!1,tsType:{name:"boolean"},description:"You can control if the content rendered when opened={false}"},opened:{required:!1,tsType:{name:"boolean"},description:""},openedDefault:{required:!1,tsType:{name:"boolean"},description:""},width:{required:!1,tsType:{name:"union",raw:'"full" | "compact"',elements:[{name:"literal",value:'"full"'},{name:"literal",value:'"compact"'}]},description:`When used alone you can use this property to make the accordion item width fit the content
It should never been used in an Accordion container
@default "full"`,defaultValue:{value:'"full"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onToggleOpened:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const a={Container:w,Item:H},pe={component:a,title:"Components/Accordion"},r=()=>e.jsx("p",{children:"Quisque efficitur, magna sit amet tempor malesuada, orci mauris vestibulum enim, quis gravida est urna et ipsum. Nunc rutrum, magna id fermentum dignissim, magna sem volutpat risus, ut ultrices ipsum lacus vitae sapien. Curabitur sodales risus ac nibh efficitur, dapibus posuere ipsum bibendum. Proin erat ipsum, tempus in aliquet sed, auctor id sem. Maecenas ultrices, magna vitae pretium condimentum, ipsum lectus hendrerit est, a ultrices lacus odio in mi. Phasellus accumsan diam in metus dictum ultrices. In hac habitasse platea dictumst. Curabitur vestibulum vitae libero sit amet blandit. Nulla bibendum sollicitudin dolor at vehicula. Morbi quis viverra velit, eget ornare velit. Praesent porttitor sagittis nulla non vehicula. u"}),g={render:t=>e.jsx(a.Item,{...t,children:e.jsx(r,{})}),args:{id:"simple-panel",header:"simple panel",renderContent:!1,variant:"default"},argTypes:{id:{control:{type:"text"}},header:{control:{type:"text"}},headerLevel:{control:{type:"number"}},description:{control:{type:"text"}},value:{control:{type:"text"}},disabled:{control:{type:"boolean"}},renderContent:{control:{type:"boolean"}},children:{table:{disable:!0}},openedDefault:{table:{disable:!0}}},parameters:{chromatic:{disableSnapshot:!0}}},j={render:t=>e.jsx("div",{style:{maxWidth:"50rem",marginLeft:"auto",marginRight:"auto",padding:"1.875rem"},children:e.jsxs(a.Container,{...t,children:[e.jsx(a.Item,{id:"panel-a",header:"first panel",children:e.jsx(r,{})}),e.jsx(a.Item,{id:"panel-b",header:"second panel",children:e.jsx(r,{})}),e.jsx(a.Item,{id:"panel-c",header:"third panel",children:e.jsx(r,{})})]})}),args:{openedDefault:0,renderContent:!0,variant:"default",behavior:"linked"},argTypes:{headerLevel:{control:{type:"number"}},behavior:{control:{type:"radio",options:["linked","isolated"]}},openedDefault:{control:{type:"number"}},renderContent:{control:{type:"boolean"}},variant:{control:{type:"radio",options:["default","quiet"]}},children:{table:{disable:!0}}},parameters:{chromatic:{disableSnapshot:!0}}},A={render:()=>e.jsxs(_,{gap:"xl",direction:"col",children:[e.jsx("h2",{children:"Accordion container in default and quiet"}),e.jsxs(_,{gap:"xl",direction:"row",width:"50vw",children:[e.jsxs(a.Container,{variant:"default",children:[e.jsx(a.Item,{header:"HeaderLabel",openedDefault:!0,children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel","data-state":"hover",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel","data-state":"active",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel","data-state":"focus",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",disabled:!0,children:e.jsx(r,{})})]}),e.jsxs(a.Container,{variant:"quiet",renderContent:!0,children:[e.jsx(a.Item,{header:"HeaderLabel",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel","data-state":"hover",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel","data-state":"active",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel","data-state":"focus",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",disabled:!0,children:e.jsx(r,{})})]})]}),e.jsx("h2",{children:"Accordion.Item alone in full and compact"}),e.jsxs(_,{gap:"xl",direction:"row",width:"50vw",children:[e.jsxs(_,{width:300,direction:"col",gap:"3xl",children:[e.jsx(a.Item,{header:"HeaderLabel",width:"full",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full","data-state":"hover",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full","data-state":"active",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full","data-state":"focus",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",value:"ValueLabel",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",description:"DescriptionLabel",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",icon:e.jsx(T,{}),children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"full",openedDefault:!0,children:e.jsx(r,{})})]}),e.jsxs(_,{width:300,direction:"col",gap:"3xl",children:[e.jsx(a.Item,{header:"HeaderLabel",width:"compact",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact","data-state":"hover",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact","data-state":"active",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact","data-state":"focus",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",value:"ValueLabel",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",description:"DescriptionLabel",children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",icon:e.jsx(T,{}),children:e.jsx(r,{})}),e.jsx(a.Item,{header:"HeaderLabel",width:"compact",openedDefault:!0,children:e.jsx(r,{})})]})]})]}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-state="hover"] > button',active:'[data-state="active"] > button',focusVisible:'[data-state="focus"] > button'}}};var k,D,B;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <Accordion.Item {...props}>
      <SampleParagraph />
    </Accordion.Item>,
  args: {
    id: "simple-panel",
    header: "simple panel",
    renderContent: false,
    variant: "default"
  },
  argTypes: {
    id: {
      control: {
        type: "text"
      }
    },
    header: {
      control: {
        type: "text"
      }
    },
    headerLevel: {
      control: {
        type: "number"
      }
    },
    description: {
      control: {
        type: "text"
      }
    },
    value: {
      control: {
        type: "text"
      }
    },
    disabled: {
      control: {
        type: "boolean"
      }
    },
    renderContent: {
      control: {
        type: "boolean"
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    openedDefault: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(B=(D=g.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var N,R,z;j.parameters={...j.parameters,docs:{...(N=j.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: props => <div style={{
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
    </div>,
  args: {
    openedDefault: 0,
    renderContent: true,
    variant: "default",
    behavior: "linked"
  },
  argTypes: {
    headerLevel: {
      control: {
        type: "number"
      }
    },
    behavior: {
      control: {
        type: "radio",
        options: ["linked", "isolated"]
      }
    },
    openedDefault: {
      control: {
        type: "number"
      }
    },
    renderContent: {
      control: {
        type: "boolean"
      }
    },
    variant: {
      control: {
        type: "radio",
        options: ["default", "quiet"]
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(z=(R=j.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var V,E,O;A.parameters={...A.parameters,docs:{...(V=A.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Box gap="xl" direction="col">
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
    </Box>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-state="hover"] > button',
      active: '[data-state="active"] > button',
      focusVisible: '[data-state="focus"] > button'
    }
  }
}`,...(O=(E=A.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const me=["ItemPlayground","ContainerPlayground","VisualTest"],ve=Object.freeze(Object.defineProperty({__proto__:null,ContainerPlayground:j,ItemPlayground:g,VisualTest:A,__namedExportsOrder:me,default:pe},Symbol.toStringTag,{value:"Module"}));export{j as C,ve as S};
