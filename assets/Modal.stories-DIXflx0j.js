import{j as e}from"./jsx-runtime-CfatFE5O.js";import{f}from"./index-B-tj2W5I.js";import{T as Te}from"./Textarea-BOZw2UeR.js";import{g as ce}from"./figma-hO1OATkS.js";import{r as l}from"./index-ClcD9ViR.js";import{p as we}from"./renderOrClone-Cb9xqVtH.js";import{u as _e}from"./useControl-Bdsdv14P.js";import{r as ke}from"./index-ZuzByk-F.js";import{I as Me}from"./IconButton-B8GWHSxh.js";import{D as W}from"./Divider-Dv0yWk4k.js";import{g as I,B}from"./Box-25vWnmJ9.js";import{B as p}from"./Button-C-WoFXIp.js";import{R as qe}from"./RadioGroup-hE1wb18n.js";import{S as E}from"./SelectComposition-Cc3b_OxD.js";import{S as Se}from"./Switch-B_AbSP2p.js";import{T as _}from"./TextField-CBpJc0HV.js";import{C as pe}from"./Checkbox-B1rHGUY9.js";const Le="_modal__backdrop_zptig_1",Pe="_modal_zptig_1",Ne="_modal_header_wrapper_zptig_36",Re="_modal_header_title_wrapper_zptig_44",Ae="_modal_header_title_zptig_44",De="_modal_header_description_zptig_56",Ie="_modal_body_zptig_61",h={modal__backdrop:Le,modal:Pe,modal_header_wrapper:Ne,modal_header_title_wrapper:Re,modal_header_title:Ae,modal_header_description:De,modal_body:Ie},Ee=(t,o)=>{const{visible:r,onClose:a,onKeyDown:s,...i}=t;if(!r)return null;const n=d=>{d.key==="Escape"&&a&&a(),s&&s(d)};return e.jsx("div",{...i,ref:o,"aria-modal":"true",tabIndex:-1,role:"dialog","data-dialog":!0,onKeyDown:n,className:h.modal})},H=l.forwardRef(Ee);H.displayName="Dialog";function Be(t){const o=_e(t,{defaultValueKey:"defaultVisible",onChangeKey:"onClose",selector:()=>!1,valueKey:"visible"});return{visible:!!o.value,onClose:()=>o.onChange(!1)}}H.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{visible:{required:!1,tsType:{name:"boolean"},description:""},defaultVisible:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},"aria-modal":{required:!1,tsType:{name:"union",raw:'boolean | "true" | "false"',elements:[{name:"boolean"},{name:"literal",value:'"true"'},{name:"literal",value:'"false"'}]},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLDivElement"}],raw:"KeyboardEvent<HTMLDivElement>"},name:"event"}],return:{name:"void"}}},description:""}}};const ue=({left:t,metaLabel:o,labelClose:r,onClickClose:a,preventClose:s=!1,...i})=>{const{children:n,...d}=i;return e.jsxs("div",{...I({direction:"row",py:"xl",px:"xxl",justify:"between",alignItems:"center",width:"100%"}),...d,children:[t||e.jsx("span",{}),e.jsxs("div",{...I({direction:"row",gap:"xs",justify:"end"}),children:[o&&e.jsx("span",{...I({direction:"row",py:"m",typography:{familly:"label",size:"s"}}),children:o}),!s&&e.jsx(p,{variant:"quiet",onClick:()=>a&&a(),"data-testid":"modal.buttons.close","data-feature":"modal.buttons.close",label:r}),n]})]})};ue.__docgenInfo={description:"",methods:[],displayName:"DialogActions",props:{left:{required:!1,tsType:{name:"ReactNode"},description:""},metaLabel:{required:!1,tsType:{name:"string"},description:""},onClickClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},labelClose:{required:!0,tsType:{name:"string"},description:""},preventClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function He(t,o){new IntersectionObserver((r,a)=>{r.forEach(s=>{s.intersectionRatio>0&&(o(),a.disconnect())})}).observe(t)}function Fe(t){const[o,r]=l.useState(!1),[a,s]=l.useState(!1);return l.useLayoutEffect(()=>{t.current&&He(t.current,()=>{if(t.current){const i=Array.from(t.current.children).reduce((n,d)=>(d.clientWidth&&(n.x+=d.clientWidth),d.clientHeight&&(n.y+=d.clientHeight),n),{x:0,y:0});i.y>t.current.clientHeight?s(!0):s(!1),i.x>t.current.clientWidth?r(!0):r(!1)}})},[]),{overflowX:o,overflowY:a}}const me=({children:t,...o})=>{const r=l.useRef(null),[a,s]=l.useState(!1),i=Fe(r);return l.useEffect(()=>{s(i.overflowY)},[i.overflowY]),e.jsxs(e.Fragment,{children:[a?e.jsx(W,{}):null,e.jsx("div",{className:h.modal_body,"data-testid":"modal.content",role:a?"region":void 0,...o,ref:r,tabIndex:a?0:-1,children:t}),a?e.jsx(W,{}):null]})};me.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Ve=()=>e.jsxs("svg",{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1465 11.8535L0.146484 0.85353L0.853591 0.146423L11.8536 11.1464L11.1465 11.8535Z",fill:"#404040"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.8536 0.85353L0.853591 11.8535L0.146484 11.1464L11.1465 0.146423L11.8536 0.85353Z",fill:"#404040"})]}),fe=({children:t,description:o,labelClose:r,onClickClose:a,preventClose:s=!1,labelId:i,descriptionId:n,...d})=>e.jsxs("div",{className:h.modal_header_wrapper,...d,children:[e.jsxs("div",{className:h.modal_header_title_wrapper,children:[typeof t=="string"?e.jsx("span",{className:h.modal_header_title,id:i,children:t}):t,o&&typeof o=="string"?e.jsx("span",{className:h.modal_header_description,id:n,children:o}):o]}),!s&&e.jsx(Me,{variant:"quiet",icon:e.jsx(Ve,{}),onClick:a,label:r})]});fe.__docgenInfo={description:"",methods:[],displayName:"DialogHeader",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},labelClose:{required:!0,tsType:{name:"string"},description:""},onClickClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},preventClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labelId:{required:!1,tsType:{name:"string"},description:""},descriptionId:{required:!1,tsType:{name:"string"},description:""}}};function he(t,o){return!t||!o?!1:t===o||o.contains(t)}function ze(t){if(!t)return!1;const o=document.querySelectorAll("[data-floating-ui-focusable]");for(let r=0;r<o.length;r++)if(he(t,o[r]))return!0;return!1}function Ke({defaultVisible:t,visible:o,onClose:r,preventEscaping:a,preventFocus:s,preventInteractiveBackdrop:i}){const n=Be({visible:o,defaultVisible:t,onClose:r}),d=l.useRef(null),c=l.useRef(null);l.useEffect(()=>{var q,g;const y=u=>{var S;n.visible&&!s&&!(he(u.relatedTarget,c.current)||ze(u.relatedTarget))&&((S=c.current)==null||S.focus())};return n.visible&&!s&&((q=c.current)==null||q.focus()),(g=c.current)==null||g.addEventListener("focusout",y),()=>{var u;(u=c.current)==null||u.removeEventListener("focusout",y)}},[n.visible]);const M=l.useCallback(y=>{!a&&!i&&y.target===d.current&&n.onClose()},[n.onClose,i,a]),D=l.useCallback(()=>{!a&&!i&&n.onClose()},[n.onClose,i,a]);return{visible:n.visible,onClose:n.onClose,onHideDialog:D,onClickBackdropHandler:M,backdropRef:d,containerRef:c}}function Oe({children:t}){const[o]=l.useState(document.createElement("div"));return l.useEffect(()=>(document.body.appendChild(o),()=>{document.body.removeChild(o)}),[o]),ke.createPortal(t,o)}const We=(t,o)=>{const{children:r,visible:a,...s}=t;return a?e.jsx(Oe,{children:e.jsx("div",{...s,className:h.modal__backdrop,ref:o,children:r})}):null},be=l.forwardRef(We);be.__docgenInfo={description:"",methods:[],displayName:"ModalBackdrop",props:{defaultVisible:{required:!1,tsType:{name:"boolean"},description:""},visible:{required:!0,tsType:{name:"boolean"},description:""}}};const N=t=>e.jsx(fe,{...t}),R=t=>e.jsx(me,{...t}),A=t=>e.jsx(ue,{...t});N.displayName="ModalHeader";R.displayName="ModalContent";A.displayName="ModalActions";N.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},labelClose:{required:!0,tsType:{name:"string"},description:""},onClickClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},preventClose:{required:!1,tsType:{name:"boolean"},description:""},labelId:{required:!1,tsType:{name:"string"},description:""},descriptionId:{required:!1,tsType:{name:"string"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};A.__docgenInfo={description:"",methods:[],displayName:"ModalActions",props:{left:{required:!1,tsType:{name:"ReactNode"},description:""},metaLabel:{required:!1,tsType:{name:"string"},description:""},onClickClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},labelClose:{required:!0,tsType:{name:"string"},description:""},preventClose:{required:!1,tsType:{name:"boolean"},description:""}}};const Ue=(t,o)=>{const{visible:r,onClose:a,children:s,width:i="m","data-testid":n="modal",...d}=t;return e.jsx(H,{...d,visible:r,onClose:a,"data-testid":n,"data-size":i,ref:o,children:r&&e.jsx(B,{direction:"col",gap:"0",children:s})})},ye=l.forwardRef(Ue);ye.__docgenInfo={description:"",methods:[],displayName:"ModalContainer",props:{container:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l" | "xl" | "full" | "full-with-padding"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"full"'},{name:"literal",value:'"full-with-padding"'}]},description:""}}};const b=l.forwardRef((t,o)=>{const{defaultVisible:r,visible:a,onClose:s,preventInteractiveBackdrop:i,preventEscaping:n,preventFocus:d,headerTitle:c,headerDescription:M,headerLabelClose:D="Close",labelClose:y,footerMetaLabel:q,footerLeft:g,footerActions:u,footerLabelClose:S="Cancel",children:z,jsx:Ce,"data-testid":L="modal",...ve}=t,m=Ke({visible:a,defaultVisible:r,onClose:s,preventEscaping:n,preventFocus:d,preventInteractiveBackdrop:i}),je=we([m.containerRef,o]),K=l.useId(),O=l.useId();return e.jsx(be,{visible:m.visible,"data-testid":`${L}.backdrop`,onClick:m.onClickBackdropHandler,ref:m.backdropRef,children:e.jsxs(ye,{...ve,onClose:m.onHideDialog,visible:m.visible,ref:je,"data-testid":L,"aria-labelledby":c?K:void 0,"aria-describedby":M?O:void 0,children:[c&&e.jsx(N,{"data-testid":`${L}.header`,labelId:K,descriptionId:O,onClickClose:m.onClose,description:M,labelClose:D,children:c}),Ce?z:e.jsx(R,{children:z}),(u||g)&&e.jsx(A,{"data-testid":`${L}.actions`,left:g,metaLabel:q,labelClose:S,onClickClose:m.onClose,preventClose:n,children:u})]})})});b.displayName="Modal";b.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{defaultVisible:{required:!1,tsType:{name:"boolean"},description:""},visible:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},preventEscaping:{required:!1,tsType:{name:"boolean"},description:""},preventInteractiveBackdrop:{required:!1,tsType:{name:"boolean"},description:""},preventFocus:{required:!1,tsType:{name:"boolean"},description:""},container:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},width:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l" | "xl" | "full" | "full-with-padding"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"full"'},{name:"literal",value:'"full-with-padding"'}]},description:""},labelClose:{required:!1,tsType:{name:'intersection["labelClose"]',raw:'ModalHeaderProps["labelClose"]'},description:"@deprecated please use headerLabelClose and footerLabelClose"},headerTitle:{required:!1,tsType:{name:'intersection["children"]',raw:'ModalHeaderProps["children"]'},description:""},headerDescription:{required:!1,tsType:{name:'intersection["description"]',raw:'ModalHeaderProps["description"]'},description:""},headerLabelClose:{required:!1,tsType:{name:'intersection["labelClose"]',raw:'ModalHeaderProps["labelClose"]'},description:""},footerMetaLabel:{required:!1,tsType:{name:'intersection["metaLabel"]',raw:'ModalActionsProps["metaLabel"]'},description:""},footerLeft:{required:!1,tsType:{name:'intersection["left"]',raw:'ModalActionsProps["left"]'},description:""},footerActions:{required:!1,tsType:{name:'intersection["children"]',raw:'ModalActionsProps["children"]'},description:""},footerLabelClose:{required:!1,tsType:{name:'intersection["labelClose"]',raw:'ModalActionsProps["labelClose"]'},description:""},jsx:{required:!1,tsType:{name:"boolean"},description:""}}};const ge=t=>e.jsx(b,{jsx:!0,...t});ge.displayName="ModalBase";const P={Modal:ge,Actions:A,Content:R,Header:N},F={component:b,title:"Components/Modal",parameters:{},args:{headerTitle:"Default story title"},argTypes:{headerTitle:{control:{type:"text"}},headerDescription:{control:{type:"text"}},width:{control:{type:"select"},options:[void 0,"s","m","l","xl","full","full-with-padding"]},preventEscaping:{control:{type:"boolean"}},visible:{control:{type:"select"},options:[void 0,!0,!1]},onClose:{table:{disable:!0}},footerMetaLabel:{control:{type:"text"}},footerActions:{table:{disable:!0}},children:{table:{disable:!0}},labelClose:{table:{disable:!0}},jsx:{table:{disable:!0}},footerLeft:{table:{disable:!0}},footerLabelClose:{table:{disable:!0}}}},k={chromatic:{disableSnapshot:!0}},V=({onClose:t,...o})=>{const{children:r,...a}=o;return e.jsx(e.Fragment,{children:e.jsx(b,{headerTitle:"Default story title",onClose:()=>{t&&t()},...a,children:r||"(Default story child)"})})},xe=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("b",{children:"STEP 1"}),e.jsx("br",{}),"For the pastry, put 175g plain flour, 100g cold butter, cut into pieces, 1 egg yolk and 4 tsp cold water into a food processor. Using the pulse button, process until the mix binds."]}),e.jsxs("p",{children:[e.jsx("b",{children:"STEP 2"}),e.jsx("br",{}),"Tip the pastry onto a lightly floured surface, gather into a smooth ball, then roll out as thinly as you can."]}),e.jsxs("p",{children:[e.jsx("b",{children:"STEP 3"}),e.jsx("br",{}),"Line a 23 x 2.5cm loose-bottomed, fluted flan tin, easing the pastry into the base."]}),e.jsxs("p",{children:[e.jsx("b",{children:"STEP 4"}),e.jsx("br",{}),"Trim the pastry edges with scissors (save any trimmings) so it sits slightly above the tin (if it shrinks, it shouldn’t now go below the level of the tin). Press the pastry into the flutes, lightly prick the base with a fork, then chill for 10 mins."]}),e.jsxs("p",{children:[e.jsx("b",{children:"STEP 5"}),e.jsx("br",{}),"Put a baking sheet in the oven and heat oven to 200C/fan 180C/gas 6. Line pastry case with foil, shiny side down, fill with dry beans and bake on the hot sheet for 15 mins."]}),e.jsxs("p",{children:[e.jsx("b",{children:"STEP 6"}),e.jsx("br",{}),"Remove foil and beans and bake for 4-5 mins more until the pastry is pale golden. If you notice any small holes or cracks, patch up with pastry trimmings. You can make up to this point a day ahead."]}),e.jsxs("p",{children:[e.jsx("b",{children:"STEP 7"}),e.jsx("br",{}),"While the pastry cooks, prepare the filling. Heat a small frying pan, tip in 200g lardons and fry for a couple of mins. Drain off any liquid that comes out, then continue cooking until the lardons just start to colour, but aren’t crisp. Remove and drain on paper towels."]}),e.jsxs("p",{children:[e.jsx("b",{children:"STEP 8"}),e.jsx("br",{}),"Cut three quarters of the 50g gruyère into small dice and finely grate the rest. Scatter the diced gruyère and fried lardons over the bottom of the pastry case."]}),e.jsxs("p",{children:[e.jsx("b",{children:"STEP 9"}),e.jsx("br",{}),"Using a spoon, beat 200ml crème fraîche to slacken it then slowly beat in 200ml double cream. Mix in 3 well beaten eggs. Season (you shouldn’t need much salt) and add a pinch of ground nutmeg. Pour three quarters of the filling into the pastry case."]}),e.jsxs("p",{children:[e.jsx("b",{children:"STEP 10"}),e.jsx("br",{}),"Half-pull the oven shelf out and put the flan tin on the baking sheet. Quickly pour the rest of the filling into the pastry case – you get it right to the top this way. Scatter the grated cheese over the top, then carefully push the shelf back into the oven."]}),e.jsxs("p",{children:[e.jsx("b",{children:"STEP 11"}),e.jsx("br",{}),"Lower the oven to 190C/fan 170C/gas 5. Bake for about 25 mins, or until golden and softly set (the centre should not feel too firm)."]}),e.jsxs("p",{children:[e.jsx("b",{children:"STEP 12"}),e.jsx("br",{}),"Let the quiche settle for 4-5 mins, then remove from the tin. Serve freshly baked, although it’s also good cold."]}),e.jsx("div",{style:{width:"50%"},children:e.jsx("img",{src:"https://img-3.journaldesfemmes.fr/csLNATf47C8IYJxFtQ4S-o1t0kw=/800x600/smart/5a1c637d7ef0426784dad14c29aaff55/recipe-jdf/10025089.jpg",alt:"The quiche lorraine"})}),e.jsx("form",{children:e.jsxs(B,{gap:"m",direction:"col",children:[e.jsx(_,{label:"Name",id:"name"}),e.jsx(Te,{label:"Comment",id:"comment"}),e.jsx(qe,{label:"Did you cook it?",name:"radio-group",options:[{label:"I cooked it",value:"1"},{label:"I didn't cooked it",value:"2"},{label:"No cooking",value:"3"}]}),e.jsxs(E.Select,{label:"Feedback",placeholder:"Select an option",children:[e.jsx(E.Option,{value:"1",label:"Please add more details"}),e.jsx(E.Option,{value:"2",label:"I want to hire people like you"})]}),e.jsx(B,{py:"m",children:e.jsx(Se,{label:"I agree to the terms and conditions"})})]})})]}),x={render:t=>e.jsx(b,{headerTitle:"Playground modal",...t,children:e.jsx(xe,{})}),args:{onClose:f(),defaultVisible:!0},parameters:k},C={render:t=>e.jsx(V,{...t,footerActions:e.jsxs(e.Fragment,{children:[e.jsx(p,{variant:"secondary",label:"Secondary action",onClick:()=>{}}),e.jsx(p,{variant:"primary",label:"Primary action",onClick:()=>{}})]}),children:e.jsx("p",{children:"A modal with title, a text content, an icon and both available actions (primary and secondary)."})}),args:{headerTitle:"Modal with footer actions",visible:!0},parameters:k},v={render:t=>e.jsxs(V,{...t,footerLeft:e.jsx(pe,{name:"checkbox-name",label:"Checkbox label",onChange:f()}),footerLabelClose:"Cancel",footerActions:e.jsx(p,{variant:"primary",label:"Create",onClick:f()}),children:[e.jsx(_,{label:"Username",id:"username"}),e.jsx(_,{label:"Password",id:"password"})]}),args:{visible:!0,headerTitle:"Create new user"},argTypes:F.argTypes,parameters:{...ce("modal","checkbox"),...k}},j={render:t=>e.jsxs(V,{...t,footerLeft:e.jsx(p,{label:"Manage users",onClick:f()}),footerLabelClose:"Cancel",footerActions:e.jsx(p,{variant:"primary",label:"Create",onClick:f()}),children:[e.jsx(_,{label:"Username",id:"username"}),e.jsx(_,{label:"Password",id:"password"})]}),args:{headerTitle:"Create new user",visible:!0},argTypes:F.argTypes,parameters:{...ce("modal","leftButton"),...k}},T={render:()=>e.jsxs(P.Modal,{visible:!0,children:[e.jsx(P.Header,{labelClose:"close",description:"Header description",children:"Modal with composition of JSX elements"}),e.jsx(P.Content,{children:"Content explicitly wrapped into ModalContent"}),e.jsxs(P.Actions,{labelClose:"cancel",left:e.jsx(pe,{name:"checkbox-name",label:"Checkbox label",onChange:f()}),children:[e.jsx(p,{variant:"secondary",label:"Secondary action",onClick:()=>{}}),e.jsx(p,{variant:"primary",label:"Primary action",onClick:()=>{}})]})]}),parameters:{...k,controls:{disable:!0}}},w={render:()=>e.jsx(b,{headerTitle:"Default Modal",headerDescription:"This is a description",visible:!0,footerLeft:e.jsx(p,{label:"footerLeft",onClick:f()}),footerActions:e.jsx(p,{variant:"primary",label:"footerActions",onClick:f()}),children:e.jsx(xe,{})}),parameters:{controls:{disable:!0}}};var U,Y,Q;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <Modal headerTitle="Playground modal" {...props}>
      <QuicheRecipe />
    </Modal>,
  args: {
    onClose: fn(),
    defaultVisible: true
  },
  parameters: parameters
}`,...(Q=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var X,J,$;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: (props: ModalProps) => <ModalStory {...props} footerActions={<>
          <Button variant="secondary" label="Secondary action" onClick={() => {}} />
          <Button variant="primary" label="Primary action" onClick={() => {}} />
        </>}>
      <p>A modal with title, a text content, an icon and both available actions (primary and secondary).</p>
    </ModalStory>,
  args: {
    headerTitle: "Modal with footer actions",
    visible: true
  },
  parameters: parameters
}`,...($=(J=C.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var Z,G,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: (props: ModalProps) => <ModalStory {...props} footerLeft={<Checkbox name="checkbox-name" label="Checkbox label" onChange={fn()} />} footerLabelClose="Cancel" footerActions={<Button variant="primary" label="Create" onClick={fn()} />}>
      <TextField label="Username" id="username" />
      <TextField label="Password" id="password" />
    </ModalStory>,
  args: {
    visible: true,
    headerTitle: "Create new user"
  },
  argTypes: meta.argTypes,
  parameters: {
    ...getFigmaStorybookParams("modal", "checkbox"),
    ...parameters
  }
}`,...(ee=(G=v.parameters)==null?void 0:G.docs)==null?void 0:ee.source}}};var te,oe,ae;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: (props: ModalProps) => <ModalStory {...props} footerLeft={<Button label="Manage users" onClick={fn()} />} footerLabelClose="Cancel" footerActions={<Button variant="primary" label="Create" onClick={fn()} />}>
      <TextField label="Username" id="username" />
      <TextField label="Password" id="password" />
    </ModalStory>,
  args: {
    headerTitle: "Create new user",
    visible: true
  },
  argTypes: meta.argTypes,
  parameters: {
    ...getFigmaStorybookParams("modal", "leftButton"),
    ...parameters
  }
}`,...(ae=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,ne,se;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <ModalComposition.Modal visible>
      <ModalComposition.Header labelClose="close" description="Header description">
        Modal with composition of JSX elements
      </ModalComposition.Header>
      <ModalComposition.Content>Content explicitly wrapped into ModalContent</ModalComposition.Content>
      <ModalComposition.Actions labelClose="cancel" left={<Checkbox name="checkbox-name" label="Checkbox label" onChange={fn()} />}>
        <Button variant="secondary" label="Secondary action" onClick={() => {}} />
        <Button variant="primary" label="Primary action" onClick={() => {}} />
      </ModalComposition.Actions>
    </ModalComposition.Modal>,
  parameters: {
    ...parameters,
    controls: {
      disable: true
    }
  }
}`,...(se=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,le,de;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Modal headerTitle="Default Modal" headerDescription="This is a description" visible footerLeft={<Button label="footerLeft" onClick={fn()} />} footerActions={<Button variant="primary" label="footerActions" onClick={fn()} />}>
      <QuicheRecipe />
    </Modal>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(le=w.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};const Ye=["Playground","WithFooterActions","WithCheckbox","WithLeftButton","Composition","VisualTest"],pt=Object.freeze(Object.defineProperty({__proto__:null,Composition:T,Playground:x,VisualTest:w,WithCheckbox:v,WithFooterActions:C,WithLeftButton:j,__namedExportsOrder:Ye,default:F},Symbol.toStringTag,{value:"Module"}));export{pt as S};