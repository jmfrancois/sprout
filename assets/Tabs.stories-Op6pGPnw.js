import{j as e}from"./jsx-runtime-CfatFE5O.js";import{f as Q}from"./index-B-tj2W5I.js";import{B as C}from"./BookIcon-DZsRg5Cg.js";import{S as A}from"./StarIcon-SlLCtx_3.js";import{g as Y}from"./figma-hO1OATkS.js";import{r as i}from"./index-ClcD9ViR.js";import{B as g,c as S,a as ee,g as Z}from"./Box-25vWnmJ9.js";import{T as te}from"./Tooltip-DjBJpIFd.js";import{u as ae}from"./useListGesture-AviVLQSr.js";import{u as ne}from"./useControl-Bdsdv14P.js";const se="_tablist_23azg_1",re="_show_track_23azg_5",oe="_tabpanel_23azg_9",ie="_tabpanel__hidden_23azg_14",le="_tab_23azg_1",ce="_tab_small_23azg_39",de="_tab__label_23azg_51",ue="_track_23azg_63",pe="_tracker_23azg_67",me="_inner_23azg_77",T={tablist:se,show_track:re,tabpanel:oe,tabpanel__hidden:ie,tab:le,tab_small:ce,tab__label:de,track:ue,tracker:pe,inner:me},R=i.createContext(null),m=({icon:t,title:s,useIconButton:r,...o})=>{const a=i.useContext(R),c=(a==null?void 0:a.size)==="s",n={role:"tab","aria-selected":o["aria-controls"]===(a==null?void 0:a.value),tabIndex:o["aria-controls"]===(a==null?void 0:a.value)?0:-1};r&&(n["aria-label"]=s);let l=e.jsx("button",{...o,...n,...Z({py:"0",px:"l",justify:"center",alignItems:"center",className:S(T.tab,{[T.tab_small]:c})}),onClick:d=>a==null?void 0:a.onChange(d,o["aria-controls"]),type:"button",children:e.jsxs(g,{alignContent:"center",alignSelf:"stretch",alignItems:"center",gap:"m",justify:"center",className:T.inner,children:[t,!r&&e.jsx("span",{className:S(T.tab__label,ee({familly:"label",emphasized:!0,size:c?"xs":"s"})),children:s})]})});return r&&(l=e.jsx(te,{title:s,children:l})),l};m.displayName="Tab";m.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{"aria-controls":{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},useIconButton:{required:!1,tsType:{name:"boolean"},description:""}}};const G=()=>{const t=i.useContext(R),s=i.useRef(null),[r,o]=i.useState(-1e4),[a,c]=i.useState(100);return i.useEffect(()=>{let n,l;if(t!=null&&t.value&&s.current){if(!s.current)return;const d=s.current.parentElement;if(!d||(l=d.querySelector(`[aria-controls="${t.value}"] > div`),!l))return;n=new ResizeObserver(u=>{const f=u[0],p=u[1];if(!f||!p||!f.target||!p.target)return;const I=f.target.getBoundingClientRect(),k=p.target.getBoundingClientRect(),q=Math.floor(k.left-I.left);q!==r&&o(q);const B=Math.floor(k.width)+1;B!==a&&c(B)}),n.observe(d),n.observe(l)}return()=>{n&&l&&n.unobserve(l)}},[t,r,a]),e.jsx("div",{className:T.tracker,"data-testid":"tab-tracker",style:{left:r,width:a},ref:s})},J=i.memo(G);J.displayName="Tracker";G.__docgenInfo={description:"",methods:[],displayName:"TrackerBase"};function be(t){return t.querySelectorAll('[role="tab"]:not(:disabled)')}function Te(t){return t.querySelectorAll('[role="tab"][aria-selected="true"]:not(:disabled)')}const w=({showTrack:t,children:s})=>{const r=i.useRef(null),o=ae({getAllItems:be,getSelectedItems:Te,orientation:"horizontal"});return i.useEffect(()=>(r&&r.current&&o.setElement(r.current),()=>{o.setElement()}),[]),e.jsxs("div",{...Z({gap:"s",className:S(T.tablist,{[T.show_track]:t})}),role:"tablist",ref:r,children:[s,e.jsx(J,{})]})};w.displayName="TabList";w.__docgenInfo={description:"",methods:[],displayName:"TabList",props:{showTrack:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const fe='a[href], button:not(:disabled), input:not(:disabled), textarea:not(:disabled), select:not(:disabled), [tabindex]:not([tabindex="-1"])',b=({children:t,id:s,renderIf:r})=>{const o=i.useContext(R),a=i.useRef(null),c=(o==null?void 0:o.value)!==s;if(c&&r)return null;const[n,l]=i.useState(!0);return i.useEffect(()=>{const d=setInterval(()=>{if(a&&a.current&&!c){const u=a.current.querySelectorAll(fe).length===0;!n&&u?l(!0):n&&!u&&l(!1)}},500);return()=>clearInterval(d)},[c,n]),e.jsx("div",{id:s,role:"tabpanel",className:S(T.tabpanel,{[T.tabpanel__hidden]:c}),tabIndex:n?0:-1,ref:a,children:t})};b.displayName="TabPanel";b.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},renderIf:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!0,tsType:{name:"string"},description:""}}};const j=({children:t,size:s,activeKey:r,defaultActiveKey:o,onSelect:a,...c})=>{const n=ne({activeKey:r,defaultActiveKey:o,onSelect:a},{valueKey:"activeKey",defaultValueKey:"defaultActiveKey",onChangeKey:"onSelect",selector:(u,f)=>f}),l=i.useMemo(()=>({size:s,...n}),[s,n]),d=i.useRef(null);return e.jsx("nav",{className:T.track,ref:d,...c,children:e.jsx(g,{gap:"0",direction:"col",children:e.jsx(R.Provider,{value:l,children:t})})})};j.displayName="TabsContainer";j.__docgenInfo={description:"",methods:[],displayName:"TabsContainer",props:{defaultActiveKey:{required:!1,tsType:{name:"string"},description:""},activeKey:{required:!1,tsType:{name:"string"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any, key: string) => void",signature:{arguments:[{type:{name:"any"},name:"event"},{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:""},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""}}};const E=()=>{var t;return((t=window.crypto)==null?void 0:t.randomUUID())||"42"},h=({tabs:t,showTrack:s,size:r,activeKey:o,defaultActiveKey:a,...c})=>{const[n,l]=i.useState((t||[]).map(()=>E()));if(i.useEffect(()=>{n.length!==(t==null?void 0:t.length)&&l(t.map(()=>E()))},[t,n]),!t||t.length===0)return e.jsx("nav",{});const d={...c,size:r,activeKey:o,defaultActiveKey:a};return n.length>0&&!o&&!a&&(d.defaultActiveKey=n[0]),e.jsxs(j,{...d,children:[e.jsx(w,{showTrack:s,children:t.map((u,f)=>{const p={},{panel:I,...k}=u;return p["aria-controls"]=u["aria-controls"]||n[f],Object.assign(p,k),e.jsx(m,{...p},p["aria-controls"])})}),t.map((u,f)=>{const p={};return p.id=u["aria-controls"]||n[f],e.jsx(b,{...p,children:u.panel},p.id)})]})};h.displayName="Tabs";h.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultActiveKey:{required:!1,tsType:{name:"string"},description:""},activeKey:{required:!1,tsType:{name:"string"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any, key: string) => void",signature:{arguments:[{type:{name:"any"},name:"event"},{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'}]},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<TabProps, "aria-controls"> & {
  panel: ReactNode;
  "aria-controls"?: string;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<HTMLButtonProps, "onClick" | "type" | "children"> & {
  ["aria-controls"]: string;
  title: string;
  disabled?: boolean;
  icon?: ReactNode;
  useIconButton?: boolean;
} & DataAttributes`,elements:[{name:"Omit",elements:[{name:"intersection",raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS> & DataAttributes',elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithoutRef<"button">'},{name:"union",raw:'"className" | "style" | "color"',elements:[{name:"literal",value:'"className"'},{name:"literal",value:'"style"'},{name:"literal",value:'"color"'}]}],raw:'Omit<ComponentPropsWithoutRef<"button">, EXCLUDED_PROPS>'},{name:"Record",elements:[{name:"literal",value:"`data-${string}`"},{name:"string"}],raw:"Record<`data-${string}`, string>"}]},{name:"union",raw:'"onClick" | "type" | "children"',elements:[{name:"literal",value:'"onClick"'},{name:"literal",value:'"type"'},{name:"literal",value:'"children"'}]}],raw:'Omit<HTMLButtonProps, "onClick" | "type" | "children">'},{name:"signature",type:"object",raw:`{
  ["aria-controls"]: string;
  title: string;
  disabled?: boolean;
  icon?: ReactNode;
  useIconButton?: boolean;
}`,signature:{properties:[{key:"aria-controls",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"useIconButton",value:{name:"boolean",required:!1}}]}},{name:"DataAttributes"}]},{name:"literal",value:'"aria-controls"'}],raw:'Omit<TabProps, "aria-controls">'},{name:"signature",type:"object",raw:`{
  panel: ReactNode;
  "aria-controls"?: string;
}`,signature:{properties:[{key:"panel",value:{name:"ReactNode",required:!0}},{key:"aria-controls",value:{name:"string",required:!1}}]}}]}],raw:"TabItemPropTypes[]"},description:""},showTrack:{required:!1,tsType:{name:"boolean"},description:""}}};function L({width:t,height:s,...r}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||"16",height:s||"16",viewBox:"0 0 16 16",...r,children:e.jsx("path",{d:"M14,8 C14,8.2 14,8.4 14,8.6 L16,9.6 L15.4,11.4 L13.2,11 C13,11.3 12.8,11.7 12.5,12 L13.6,14 L12,15 L10.4,13.4 C10,13.5 9.7,13.7 9.3,13.8 L9,16 L7,16 L6.7,13.8 C6.3,13.7 5.9,13.6 5.6,13.4 L4,15 L2.4,13.9 L3.5,11.9 C3.2,11.6 3,11.3 2.8,10.9 L0.6,11.3 L0,9.6 L2,8.6 C2,8.4 2,8.2 2,8 C2,7.8 2,7.6 2,7.4 L0,6.4 L0.6,4.6 L2.8,5 C3,4.7 3.2,4.3 3.5,4 L2.4,2 L4,1 L5.6,2.6 C6,2.4 6.3,2.3 6.7,2.2 L7,0 L9,0 L9.3,2.2 C9.7,2.3 10.1,2.4 10.4,2.6 L12,1 L13.6,2.1 L12.5,4.1 C12.8,4.4 13,4.7 13.2,5.1 L15.4,4.7 L16,6.4 L14,7.4 C14,7.6 14,7.8 14,8 Z M8,11 C9.7,11 11,9.7 11,8 C11,6.3 9.7,5 8,5 C6.3,5 5,6.3 5,8 C5,9.7 6.3,11 8,11 Z"})})}L.__docgenInfo={description:"",methods:[],displayName:"CogWheelIcon"};const ge={title:"Components/Tabs",component:h},P={chromatic:{disableSnapshot:!0}},y={render:t=>e.jsx(g,{p:"s",direction:"col",gap:"s",width:"fit-content","data-testid":"wrapper",children:e.jsxs(j,{...t,children:[e.jsxs(w,{showTrack:!0,children:[e.jsx(m,{"aria-controls":"Assets",title:"Assets",icon:e.jsx(C,{})}),e.jsx(m,{"aria-controls":"Settings",title:"Settings",icon:e.jsx(L,{})}),e.jsx(m,{"aria-controls":"Focusable",title:"Focusable"}),e.jsx(m,{"aria-controls":"Users",title:"Users",icon:e.jsx(A,{}),disabled:!0})]}),e.jsx(b,{id:"Assets",children:"Tab content for Assets"}),e.jsx(b,{id:"Settings",children:"Tab content for Settings"}),e.jsx(b,{id:"Users",children:"Tab content for Users"}),e.jsxs(b,{id:"Focusable",children:[e.jsx("p",{children:"This panel content has some focusable elements so the focus should move directly to it if you use keyboard navigation."}),e.jsx("button",{children:"Focusable button"})]})]})}),args:{size:"m",defaultActiveKey:"Assets"},argTypes:{size:{control:{type:"select",options:[void 0,"s","m"]}},defaultActiveKey:{control:{type:"select"},options:[void 0,"Assets","Settings","Users"]},onSelect:{table:{disable:!0}},activeKey:{table:{disable:!0}}},parameters:{...Y("tabs"),...P}},N=[{title:"Assets",icon:e.jsx(C,{}),panel:e.jsx("div",{children:"Tab 1 content"})},{title:"Settings",icon:e.jsx(L,{}),panel:e.jsx("div",{children:"Tab 2 content"})},{title:"Users",icon:e.jsx(A,{}),panel:e.jsx("div",{children:"Tab 3 content"})}],v={render:({showTrack:t})=>e.jsx(g,{direction:"col",gap:"s",width:"fit-content","data-testid":"wrapper",children:e.jsx(h,{showTrack:t,tabs:N})}),args:{showTrack:!1},argTypes:{showTrack:{control:{type:"boolean"}}},parameters:P},x={render:t=>e.jsx(g,{direction:"col",gap:"s",width:"fit-content","data-testid":"wrapper",children:e.jsx(h,{...t,tabs:N})}),args:{showTrack:!1,defaultActiveKey:void 0,onSelect:Q()},argTypes:{showTrack:{control:{type:"boolean"}},activeKey:{control:{type:"select"},options:[void 0,"assets-panel","settings-panel","users-panel"]},onSelect:{table:{disable:!0}}},parameters:P},_={render:()=>e.jsxs(g,{p:"s",direction:"col",gap:"s",width:"fit-content","data-testid":"wrapper",children:[e.jsxs(j,{defaultActiveKey:"Active",children:[e.jsxs(w,{showTrack:!0,children:[e.jsx(m,{"aria-controls":"Active",title:"ActiveTab",icon:e.jsx(C,{})}),e.jsx(m,{"aria-controls":"Enabled",title:"EnabledTab",icon:e.jsx(C,{})}),e.jsx(m,{"aria-controls":"Hovered",title:"HoveredTab","data-testid":"hover"}),e.jsx(m,{"aria-controls":"Focused",title:"FocusedTab","data-testid":"focus"}),e.jsx(m,{"aria-controls":"DisabledTab",title:"DisabledTab",icon:e.jsx(A,{}),disabled:!0})]}),e.jsx(b,{id:"Active",children:"content"}),e.jsx(b,{id:"Hovered",children:"content"}),e.jsx(b,{id:"Focused",children:"content"}),e.jsx(b,{id:"Users",children:"content"})]}),e.jsx(h,{showTrack:!0,tabs:N})]}),parameters:{controls:{disable:!0},pseudo:{hover:'[data-testid="hover"]',focusVisible:'[data-testid="focus"]'}}};var U,z,K;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <Box p="s" direction="col" gap="s" width="fit-content" data-testid="wrapper">
      <TabsContainer {...props}>
        <TabList showTrack>
          <Tab aria-controls="Assets" title="Assets" icon={<BookIcon />} />
          <Tab aria-controls="Settings" title="Settings" icon={<CogWheelIcon />} />
          <Tab aria-controls="Focusable" title="Focusable" />
          <Tab aria-controls="Users" title="Users" icon={<StarIcon />} disabled />
        </TabList>
        <TabPanel id="Assets">Tab content for Assets</TabPanel>
        <TabPanel id="Settings">Tab content for Settings</TabPanel>
        <TabPanel id="Users">Tab content for Users</TabPanel>
        <TabPanel id="Focusable">
          <p>
            This panel content has some focusable elements so the focus should move directly to it if you use keyboard
            navigation.
          </p>
          <button>Focusable button</button>
        </TabPanel>
      </TabsContainer>
    </Box>,
  args: {
    size: "m",
    defaultActiveKey: "Assets"
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: [undefined, "s", "m"]
      }
    },
    defaultActiveKey: {
      control: {
        type: "select"
      },
      options: [undefined, "Assets", "Settings", "Users"]
    },
    onSelect: {
      table: {
        disable: true
      }
    },
    activeKey: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    ...getFigmaStorybookParams("tabs"),
    ...disableSnap
  }
}`,...(K=(z=y.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var F,O,D;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: ({
    showTrack
  }) => <Box direction="col" gap="s" width="fit-content" data-testid="wrapper">
      <Tabs showTrack={showTrack} tabs={TABS} />
    </Box>,
  args: {
    showTrack: false
  },
  argTypes: {
    showTrack: {
      control: {
        type: "boolean"
      }
    }
  },
  parameters: disableSnap
}`,...(D=(O=v.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var W,H,M;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <Box direction="col" gap="s" width="fit-content" data-testid="wrapper">
      <Tabs {...props} tabs={TABS} />
    </Box>,
  args: {
    showTrack: false,
    defaultActiveKey: undefined,
    onSelect: fn()
  },
  argTypes: {
    showTrack: {
      control: {
        type: "boolean"
      }
    },
    activeKey: {
      control: {
        type: "select"
      },
      options: [undefined, "assets-panel", "settings-panel", "users-panel"]
    },
    onSelect: {
      table: {
        disable: true
      }
    }
  },
  parameters: disableSnap
}`,...(M=(H=x.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var V,$,X;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Box p="s" direction="col" gap="s" width="fit-content" data-testid="wrapper">
      <TabsContainer defaultActiveKey="Active">
        <TabList showTrack>
          <Tab aria-controls="Active" title="ActiveTab" icon={<BookIcon />} />
          <Tab aria-controls="Enabled" title="EnabledTab" icon={<BookIcon />} />
          <Tab aria-controls="Hovered" title="HoveredTab" data-testid="hover" />
          <Tab aria-controls="Focused" title="FocusedTab" data-testid="focus" />
          <Tab aria-controls="DisabledTab" title="DisabledTab" icon={<StarIcon />} disabled />
        </TabList>
        <TabPanel id="Active">content</TabPanel>
        <TabPanel id="Hovered">content</TabPanel>
        <TabPanel id="Focused">content</TabPanel>
        <TabPanel id="Users">content</TabPanel>
      </TabsContainer>
      <Tabs showTrack tabs={TABS} />
    </Box>,
  parameters: {
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-testid="hover"]',
      focusVisible: '[data-testid="focus"]'
    }
  }
}`,...(X=($=_.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};const he=["UnControlled","UnControlledWithTabsProp","ControlledWithTabsProp","VisualTests"],Ae=Object.freeze(Object.defineProperty({__proto__:null,ControlledWithTabsProp:x,UnControlled:y,UnControlledWithTabsProp:v,VisualTests:_,__namedExportsOrder:he,default:ge},Symbol.toStringTag,{value:"Module"}));export{x as C,Ae as S,y as U,v as a};
