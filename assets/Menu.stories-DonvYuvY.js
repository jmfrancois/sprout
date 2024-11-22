import{j as e}from"./jsx-runtime-CfatFE5O.js";import{f as J}from"./index-B-tj2W5I.js";import{r as C}from"./index-ClcD9ViR.js";import{E as v,B as f}from"./EditIcon-AnNjfYxK.js";import{g as L}from"./figma-hO1OATkS.js";import{M as n}from"./Menu-Bnh9TI_6.js";import{B as r}from"./Button-C-WoFXIp.js";import{B as M,d as S}from"./Box-25vWnmJ9.js";function w({width:t,height:l,...a}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||"16",height:l||"16",viewBox:"0 0 16 16",...a,children:e.jsx("path",{d:"m13.793 8.5-1.647 1.646.708.708L15.707 8l-2.853-2.854-.708.708L13.793 7.5H6v1h7.793Zm-3.257 3.036a5 5 0 1 1 0-7.071l.707-.708a6 6 0 1 0 0 8.485l-.707-.706Z"})})}w.__docgenInfo={description:"",methods:[],displayName:"LogoutIcon"};function I({width:t,height:l,...a}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||"16",height:l||"16",viewBox:"0 0 16 16",...a,children:[e.jsx("path",{d:"M5,10 L11,10 C13.7614237,10 16,12.2385763 16,15 L0,15 C-3.38176876e-16,12.2385763 2.23857625,10 5,10 Z M8,9 C5.790861,9 4,7.209139 4,5 C4,2.790861 5.790861,1 8,1 C10.209139,1 12,2.790861 12,5 C12,7.209139 10.209139,9 8,9 Z"}),e.jsx("use",{fillRule:"evenodd"})]})}I.__docgenInfo={description:"",methods:[],displayName:"PersonIcon"};function T({width:t,height:l,...a}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||"16",height:l||"16",viewBox:"0 0 16 16",...a,children:e.jsx("path",{d:"M1.6,5 L0.4,5 C0.2,5 0,4.8 0,4.6 L0,3.4 C0,3.2 0.2,3 0.4,3 L1.6,3 C1.8,3 2,3.2 2,3.4 L2,4.6 C2,4.8 1.8,5 1.6,5 Z M1.6,9 L0.4,9 C0.2,9 0,8.8 0,8.6 L0,7.4 C0,7.2 0.2,7 0.4,7 L1.6,7 C1.8,7 2,7.2 2,7.4 L2,8.6 C2,8.8 1.8,9 1.6,9 Z M1.6,13 L0.4,13 C0.2,13 0,12.8 0,12.6 L0,11.4 C0,11.2 0.2,11 0.4,11 L1.6,11 C1.8,11 2,11.2 2,11.4 L2,12.6 C2,12.8 1.8,13 1.6,13 Z M13.6,5 L4.4,5 C4.2,5 4,4.8 4,4.6 L4,3.4 C4,3.2 4.2,3 4.4,3 L13.6,3 C13.8,3 14,3.2 14,3.4 L14,4.6 C14,4.8 13.8,5 13.6,5 Z M11.6,9 L4.4,9 C4.2,9 4,8.8 4,8.6 L4,7.4 C4,7.2 4.2,7 4.4,7 L11.6,7 C11.8,7 12,7.2 12,7.4 L12,8.6 C12,8.8 11.8,9 11.6,9 Z M15.6,13 L4.4,13 C4.2,13 4,12.8 4,12.6 L4,11.4 C4,11.2 4.2,11 4.4,11 L15.6,11 C15.8,11 16,11.2 16,11.4 L16,12.6 C16,12.8 15.8,13 15.6,13 Z"})})}T.__docgenInfo={description:"",methods:[],displayName:"SettingsIcon"};const Y={title:"Components/Menu",component:n},x={chromatic:{disableSnapshot:!0}},$=[{component:"group",label:"User",menu:[{component:"item",icon:e.jsx(I,{}),label:"Profile",disabled:!0},{component:"item",icon:e.jsx(w,{}),label:"Logout"}]},{component:"item",icon:null,label:"Reload"},{component:"item",icon:null,label:"Share"},{component:"sub",icon:e.jsx(T,{}),label:"Settings",menu:[{component:"item",label:"Text"},{component:"item",label:"Video"},{component:"sub",label:"Image",menu:[{component:"item",label:".png"},{component:"item",label:".jpg"},{component:"item",label:".svg"},{component:"item",label:".gif"}]}]},{component:"divider"},{component:"item",icon:e.jsx(v,{}),label:"Edit",description:"Don’t remember what we said about overflow, but this would be it.",valueLabel:"⌘ E"},{component:"item",icon:e.jsx(f,{}),label:"Delete"},{component:"divider"},{component:"item",icon:null,label:"Cut",valueLabel:"⌘ X"},{component:"item",icon:null,label:"Copy",valueLabel:"⌘ C"},{component:"item",icon:null,label:"Paste",disabled:!0,valueLabel:"⌘ V"}],j={defaultOpen:{control:{type:"select"},options:[void 0,!0,!1]},open:{control:{type:"select"},options:[void 0,!0,!1]},menu:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}},u={render:t=>e.jsx(n.Trigger,{...t,children:e.jsx(r,{label:"Open Menu",asDropdown:!0})}),args:{menu:$,defaultOpen:!0},argTypes:j,parameters:x},c={render:t=>e.jsx(n.Trigger,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsx(n.GroupLabel,{label:"User"}),e.jsx(n.Item,{icon:e.jsx(I,{}),label:"Profile",disabled:!0}),e.jsx(n.Item,{icon:e.jsx(w,{}),label:"Logout"}),e.jsx(n.Item,{icon:null,label:"Reload"}),e.jsx(n.Item,{icon:null,label:"Share"}),e.jsx(n.Sub,{icon:e.jsx(T,{}),label:"Settings",menu:e.jsxs(e.Fragment,{children:[e.jsx(n.Item,{label:"Text"}),e.jsx(n.Item,{label:"Video"}),e.jsx(n.Sub,{label:"Image",menu:e.jsxs(e.Fragment,{children:[e.jsx(n.Item,{label:".png"}),e.jsx(n.Item,{label:".jpg"}),e.jsx(n.Item,{label:".svg"}),e.jsx(n.Item,{label:".gif"})]})})]})}),e.jsx(n.Divider,{}),e.jsx(n.Item,{icon:e.jsx(v,{}),label:"Edit",description:"Don’t remember what we said about overflow, but this would be it.",valueLabel:"⌘ E"}),e.jsx(n.Item,{icon:e.jsx(f,{}),label:"Delete"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{icon:null,label:"Cut",valueLabel:"⌘ X"}),e.jsx(n.Item,{icon:null,label:"Copy",valueLabel:"⌘ C"}),e.jsx(n.Item,{icon:null,label:"Paste",disabled:!0,valueLabel:"⌘ V"})]}),children:e.jsx(r,{label:"Open Menu"})}),parameters:{...L("menu"),...x},args:{defaultOpen:!0},argTypes:j},m={render:t=>e.jsx(n.Trigger,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsx(n.Item,{label:"Bold",selectable:!0}),e.jsx(n.Item,{label:"Italic",selectable:!0,selected:!0}),e.jsx(n.Item,{label:"Underline",selectable:!0}),e.jsx(n.Divider,{}),e.jsx(n.Item,{label:"Small",selectable:!0}),e.jsx(n.Item,{label:"Medium",selectable:!0}),e.jsx(n.Item,{label:"Large",selectable:!0})]}),children:e.jsx(r,{label:"Open Menu"})}),args:{defaultOpen:!0},argTypes:j,parameters:{...L("menu","selection"),...x}},d={render:({onClick:t})=>{const[l,a]=C.useState(e.jsx(n.Skeleton,{}));return e.jsx(n.Contextual,{menu:l,onClick:t,onOpenChange:(i,g)=>{if(!i)a(e.jsx(n.Skeleton,{}));else if(g){const h=g.target.tagName;setTimeout(()=>{a(e.jsxs(e.Fragment,{children:[e.jsx(n.GroupLabel,{label:`menu for ${h}`}),h!=="BUTTON"&&e.jsxs(e.Fragment,{children:[e.jsx(n.Item,{label:"Bold"}),e.jsx(n.Item,{label:"Italic"}),e.jsx(n.Item,{label:"Underline"}),e.jsx(n.Trigger,{placement:"right",menu:e.jsxs(e.Fragment,{children:[e.jsx(n.Item,{label:"Lorem"}),e.jsx(n.Item,{label:"Ipsum"})]}),children:e.jsx(n.Item,{label:"Open Submenu",isNested:!0})})]})]}))},1e3)}},children:e.jsxs(M,{direction:"col",p:"m",width:"100%",border:"default","data-testid":"contextual",children:[e.jsx("h1",{children:"Main title"}),e.jsx("p",{children:"This a paragraph with a bit of text."}),e.jsx(r,{label:"this is a button",onClick:()=>{}})]})})},args:{onClick:J()},parameters:{...L("menu","contextual"),...x,controls:{disable:!0}}},b={render:()=>{const[t,l]=C.useState(null),[a,i]=C.useState(null),g=!!a,h=s=>{i(s.currentTarget)},W=s=>{s.preventDefault(),l(s)},o=()=>{l(null),i(null)};return e.jsxs(M,{width:"100%",onContextMenu:W,style:{cursor:"context-menu"},children:[e.jsxs(M,{direction:"col",p:"m",width:"100%",border:"default","data-testid":"contextual",children:[e.jsx("h1",{...S({font:"heading_m",color:"default"}),children:"Contextual Menu demo using MUI api"}),e.jsx("p",{...S({font:"body_m",color:"default"}),children:"This a paragraph with a bit of text."}),e.jsx(r,{label:"Menu",onClick:h})]}),e.jsx(n.Contextual,{minWidth:"xxs",menu:e.jsxs(e.Fragment,{children:[e.jsx(n.Item,{onClick:o,label:"Copy"}),e.jsx(n.Item,{onClick:o,label:"Print"}),e.jsx(n.Item,{onClick:o,label:"Highlight"}),e.jsx(n.Item,{onClick:o,label:"Email"})]}),open:!!t,onOpenChange:s=>{s||l(null)},anchorPosition:t?{left:t.clientX,top:t.clientY}:void 0}),e.jsx(n.Trigger,{anchorEl:a||void 0,open:g,onOpenChange:s=>{s||i(null)},menu:e.jsxs(e.Fragment,{children:[e.jsx(n.Item,{onClick:o,label:"Copy"}),e.jsx(n.Item,{onClick:o,label:"Print"}),e.jsx(n.Item,{onClick:o,label:"Highlight"}),e.jsx(n.Item,{onClick:o,label:"Email"})]})})]})},parameters:{...x,controls:{disable:!0}}},p={render:t=>e.jsx(M,{height:"650px",width:"300px",alignItems:"start",children:e.jsx(n.Trigger,{...t,menu:e.jsxs(e.Fragment,{children:[e.jsx(n.GroupLabel,{label:"Menu.GroupLabel"}),e.jsx(n.Item,{icon:null,label:"Default"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{icon:null,label:"Hover","data-testid":"hover"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{icon:null,label:"Active","data-testid":"active"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{icon:null,label:"Focus","data-testid":"focus"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{icon:e.jsx(I,{}),label:"Disabled",disabled:!0}),e.jsx(n.Divider,{}),e.jsx(n.Item,{icon:e.jsx(v,{}),label:"Edit with a super long menu too so it should also overflow",description:"Don’t remember what we said about overflow, but this would be it.",valueLabel:"⌘ E"}),e.jsx(n.Item,{icon:e.jsx(f,{}),label:"Delete"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{icon:null,label:"Cut",valueLabel:"⌘ X"}),e.jsx(n.Item,{icon:null,label:"Copy",valueLabel:"⌘ C"}),e.jsx(n.Item,{icon:null,label:"Paste",disabled:!0,valueLabel:"⌘ V"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{label:"Bold",selectable:!0}),e.jsx(n.Item,{label:"Italic",selectable:!0,selected:!0}),e.jsx(n.Item,{label:"Underline",selectable:!0})]}),children:e.jsx(r,{label:"Controlled Menu"})})}),args:{open:!0,defaultOpen:!0,onOpenChange:J()},argTypes:j,parameters:{pseudo:{hover:'[data-testid="hover"]',focusVisible:'[data-testid="focus"]',active:'[data-testid="active"]'},chromatic:{delay:100}}};var D,E,y;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <Menu.Trigger {...props}>
      <Button label="Open Menu" asDropdown />
    </Menu.Trigger>,
  args: {
    menu: MENU_DATA,
    defaultOpen: true
  },
  argTypes,
  parameters
}`,...(y=(E=u.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var B,k,O;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <Menu.Trigger {...props} menu={<>
          <Menu.GroupLabel label="User" />
          <Menu.Item icon={<PersonIcon />} label="Profile" disabled />
          <Menu.Item icon={<LogoutIcon />} label="Logout" />
          <Menu.Item icon={null} label="Reload" />
          <Menu.Item icon={null} label="Share" />
          <Menu.Sub icon={<SettingsIcon />} label="Settings" menu={<>
                <Menu.Item label="Text" />
                <Menu.Item label="Video" />
                <Menu.Sub label="Image" menu={<>
                      <Menu.Item label=".png" />
                      <Menu.Item label=".jpg" />
                      <Menu.Item label=".svg" />
                      <Menu.Item label=".gif" />
                    </>} />
              </>} />
          <Menu.Divider />
          <Menu.Item icon={<EditIcon />} label="Edit" description="Don’t remember what we said about overflow, but this would be it." valueLabel="⌘ E" />
          <Menu.Item icon={<BinIcon />} label="Delete" />
          <Menu.Divider />
          <Menu.Item icon={null} label="Cut" valueLabel="⌘ X" />
          <Menu.Item icon={null} label="Copy" valueLabel="⌘ C" />
          <Menu.Item icon={null} label="Paste" disabled valueLabel="⌘ V" />
        </>}>
      <Button label="Open Menu" />
    </Menu.Trigger>,
  parameters: {
    ...getFigmaStorybookParams("menu"),
    ...parameters
  },
  args: {
    defaultOpen: true
  },
  argTypes
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var P,_,F;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <Menu.Trigger {...props} menu={<>
          <Menu.Item label="Bold" selectable />
          <Menu.Item label="Italic" selectable selected />
          <Menu.Item label="Underline" selectable />
          <Menu.Divider />
          <Menu.Item label="Small" selectable />
          <Menu.Item label="Medium" selectable />
          <Menu.Item label="Large" selectable />
        </>}>
      <Button label="Open Menu" />
    </Menu.Trigger>,
  args: {
    defaultOpen: true
  },
  argTypes,
  parameters: {
    ...getFigmaStorybookParams("menu", "selection"),
    ...parameters
  }
}`,...(F=(_=m.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var N,A,U;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    onClick
  }) => {
    const [menu, setMenu] = useState<ReactNode>(<Menu.Skeleton />);
    return <Menu.Contextual menu={menu} onClick={onClick} onOpenChange={(open, e) => {
      if (!open) {
        setMenu(<Menu.Skeleton />);
      } else if (e) {
        const tagName = (e.target as HTMLElement).tagName;
        setTimeout(() => {
          setMenu(<>
                  <Menu.GroupLabel label={\`menu for \${tagName}\`} />
                  {tagName !== "BUTTON" && <>
                      <Menu.Item label="Bold" />
                      <Menu.Item label="Italic" />
                      <Menu.Item label="Underline" />
                      <Menu.Trigger placement="right" menu={<>
                            <Menu.Item label="Lorem" />
                            <Menu.Item label="Ipsum" />
                          </>}>
                        <Menu.Item label="Open Submenu" isNested />
                      </Menu.Trigger>
                    </>}
                </>);
        }, 1000);
      }
    }}>
        <Box direction="col" p="m" width="100%" border="default" data-testid="contextual">
          <h1>Main title</h1>
          <p>This a paragraph with a bit of text.</p>
          <Button label="this is a button" onClick={() => {}} />
        </Box>
      </Menu.Contextual>;
  },
  args: {
    onClick: fn()
  },
  parameters: {
    ...getFigmaStorybookParams("menu", "contextual"),
    ...parameters,
    controls: {
      disable: true
    }
  }
}`,...(U=(A=d.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var V,H,Z;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [contextMenu, setContextMenu] = useState<MouseEvent | null>(null);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent) => {
      setAnchorEl(event.currentTarget as HTMLElement);
    };
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setContextMenu(event);
    };
    const handleClose = () => {
      setContextMenu(null);
      setAnchorEl(null);
    };
    return <Box width="100%" onContextMenu={handleContextMenu} style={{
      cursor: "context-menu"
    }}>
        <Box direction="col" p="m" width="100%" border="default" data-testid="contextual">
          <h1 {...getTypographyProps({
          font: "heading_m",
          color: "default"
        })}>Contextual Menu demo using MUI api</h1>
          <p {...getTypographyProps({
          font: "body_m",
          color: "default"
        })}>This a paragraph with a bit of text.</p>
          <Button label="Menu" onClick={handleClick} />
        </Box>
        <Menu.Contextual minWidth="xxs" menu={<>
              <Menu.Item onClick={handleClose} label="Copy" />
              <Menu.Item onClick={handleClose} label="Print" />
              <Menu.Item onClick={handleClose} label="Highlight" />
              <Menu.Item onClick={handleClose} label="Email" />
            </>} open={Boolean(contextMenu)} onOpenChange={value => {
        if (!value) {
          setContextMenu(null);
        }
      }} anchorPosition={contextMenu ? {
        left: contextMenu.clientX,
        top: contextMenu.clientY
      } : undefined} />
        <Menu.Trigger anchorEl={anchorEl || undefined} open={open} onOpenChange={value => {
        if (!value) {
          setAnchorEl(null);
        }
      }} menu={<>
              <Menu.Item onClick={handleClose} label="Copy" />
              <Menu.Item onClick={handleClose} label="Print" />
              <Menu.Item onClick={handleClose} label="Highlight" />
              <Menu.Item onClick={handleClose} label="Email" />
            </>} />
      </Box>;
  },
  parameters: {
    ...parameters,
    controls: {
      disable: true
    }
  }
}`,...(Z=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var G,R,X;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <Box height="650px" width="300px" alignItems="start">
      <Menu.Trigger {...props} menu={<>
            <Menu.GroupLabel label="Menu.GroupLabel" />
            <Menu.Item icon={null} label="Default" />
            <Menu.Divider />
            <Menu.Item icon={null} label="Hover" data-testid="hover" />
            <Menu.Divider />
            <Menu.Item icon={null} label="Active" data-testid="active" />
            <Menu.Divider />
            <Menu.Item icon={null} label="Focus" data-testid="focus" />
            <Menu.Divider />
            <Menu.Item icon={<PersonIcon />} label="Disabled" disabled />
            <Menu.Divider />
            <Menu.Item icon={<EditIcon />} label="Edit with a super long menu too so it should also overflow" description="Don’t remember what we said about overflow, but this would be it." valueLabel="⌘ E" />
            <Menu.Item icon={<BinIcon />} label="Delete" />
            <Menu.Divider />
            <Menu.Item icon={null} label="Cut" valueLabel="⌘ X" />
            <Menu.Item icon={null} label="Copy" valueLabel="⌘ C" />
            <Menu.Item icon={null} label="Paste" disabled valueLabel="⌘ V" />
            <Menu.Divider />
            <Menu.Item label="Bold" selectable />
            <Menu.Item label="Italic" selectable selected />
            <Menu.Item label="Underline" selectable />
          </>}>
        <Button label="Controlled Menu" />
      </Menu.Trigger>
    </Box>,
  args: {
    open: true,
    defaultOpen: true,
    onOpenChange: fn()
  },
  argTypes,
  parameters: {
    pseudo: {
      hover: '[data-testid="hover"]',
      focusVisible: '[data-testid="focus"]',
      active: '[data-testid="active"]'
    },
    chromatic: {
      delay: 100
    }
  }
}`,...(X=(R=p.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};const z=["Renderer","JsxApi","Selections","Contextual","MuiApi","VisualTest"],oe=Object.freeze(Object.defineProperty({__proto__:null,Contextual:d,JsxApi:c,MuiApi:b,Renderer:u,Selections:m,VisualTest:p,__namedExportsOrder:z,default:Y},Symbol.toStringTag,{value:"Module"}));export{d as C,oe as S,m as a};
