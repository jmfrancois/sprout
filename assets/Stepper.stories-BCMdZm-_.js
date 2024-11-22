import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as a}from"./index-ClcD9ViR.js";import{I as j}from"./AlertInlineIcons-CxMfpKbN.js";import{B as r,a as x}from"./Box-25vWnmJ9.js";const z="_stepper_1r3he_1",A="_line_1r3he_16",w="_indicator_1r3he_82",b="_step_1r3he_1",B="_text_1r3he_155",h={stepper:z,line:A,indicator:w,step:b,text:B},v=a.forwardRef(({number:i,semantic:p,text:m,children:c,...l},u)=>{const n=p||"inactive";return e.jsxs("li",{"aria-current":n==="active"?"step":!1,ref:u,children:[e.jsxs("div",{className:h.step,"data-semantic":p,...l,role:l.onClick?"button":void 0,tabIndex:l.tabIndex||l.onClick?0:void 0,children:[e.jsxs("span",{className:h.indicator,children:[(n==="inactive"||n==="active")&&e.jsx("span",{children:i}),n==="completed"&&j.success,n==="error"&&j.error]}),e.jsx("span",{className:h.text,children:m})]}),c]})});v.displayName="StepPrimitive";v.__docgenInfo={description:"",methods:[],displayName:"StepPrimitive",props:{text:{required:!0,tsType:{name:"string"},description:"Define the content displayed"},semantic:{required:!1,tsType:{name:"union",raw:'"completed" | "active" | "inactive" | "error"',elements:[{name:"literal",value:'"completed"'},{name:"literal",value:'"active"'},{name:"literal",value:'"inactive"'},{name:"literal",value:'"error"'}]},description:"Define the visual step status indicator"},number:{required:!1,tsType:{name:"string"},description:"@warning this property is controlled by the StepperContainer"},children:{required:!1,tsType:{name:"ReactNode"},description:"@warning this property is controlled by the StepperContainer"}}};function f(){return e.jsx("div",{className:h.line,role:"presentation"})}f.displayName="StepLine";f.__docgenInfo={description:"",methods:[],displayName:"StepLine"};function C({children:i,orientation:p,currentStepError:m,currentStepIndex:c,...l}){const u=a.Children.count(i);return e.jsx("ol",{className:h.stepper,...l,"data-orientation":p,children:a.Children.map(i,(n,d)=>{const o={number:`${d+1}`};return typeof c=="number"&&(c===d?m?o.semantic="error":o.semantic="active":c>d?o.semantic="completed":c<d&&(o.semantic="inactive")),d===u-1&&a.isValidElement(n)?a.cloneElement(n,o):(o.children=e.jsx(f,{}),e.jsx(e.Fragment,{children:a.isValidElement(n)&&a.cloneElement(n,o)}))})})}C.displayName="StepperContainer";C.__docgenInfo={description:"",methods:[],displayName:"StepperContainer",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},orientation:{required:!0,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""},currentStepIndex:{required:!1,tsType:{name:"number"},description:""},currentStepError:{required:!1,tsType:{name:"boolean"},description:""}}};const t={Container:C,Step:v},I={title:"components/Stepper",component:t},S={render:({orientation:i,...p})=>e.jsx(r,{width:i==="vertical"?"fit-content":"600px",height:i==="horizontal"?"fit-content":"300px",children:e.jsxs(t.Container,{...p,orientation:i,children:[e.jsx(t.Step,{text:"First",onClick:()=>{}}),e.jsx(t.Step,{text:"Second"}),e.jsx(t.Step,{text:"Third"}),e.jsx(t.Step,{text:"Last"})]})}),parameters:{chromatic:{disableSnapshot:!0}},args:{orientation:"horizontal",currentStepIndex:1,currentStepError:!1},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},currentStepIndex:{control:{type:"number"}},currentStepError:{control:{type:"boolean"}}}},s=()=>e.jsxs(r,{p:"xl",direction:"col",gap:"xxl",children:[e.jsx("h2",{className:x({font:"heading_m",color:"default"}),children:"Horizontal stretch"}),e.jsx(r,{width:"600px",height:"fit-content",children:e.jsxs(t.Container,{currentStepIndex:1,orientation:"horizontal",children:[e.jsx(t.Step,{text:"First",onClick:()=>{}}),e.jsx(t.Step,{text:"Second"}),e.jsx(t.Step,{text:"Third"}),e.jsx(t.Step,{text:"Last"})]})}),e.jsx("h2",{className:x({font:"heading_m",color:"default"}),children:"Horizontal fit"}),e.jsx(r,{width:"fit-content",height:"fit-content",children:e.jsxs(t.Container,{currentStepIndex:1,orientation:"horizontal",currentStepError:!0,children:[e.jsx(t.Step,{text:"First",onClick:()=>{}}),e.jsx(t.Step,{text:"Second"}),e.jsx(t.Step,{text:"Third"}),e.jsx(t.Step,{text:"Last"})]})}),e.jsx("h2",{className:x({font:"heading_m",color:"default"}),children:"Horizontal overflow"}),e.jsx(r,{width:"300px",height:"fit-content",children:e.jsxs(t.Container,{currentStepIndex:1,orientation:"horizontal",currentStepError:!0,children:[e.jsx(t.Step,{text:"First",onClick:()=>{}}),e.jsx(t.Step,{text:"Second"}),e.jsx(t.Step,{text:"Third"}),e.jsx(t.Step,{text:"Last"})]})}),e.jsx("h2",{className:x({font:"heading_m",color:"default"}),children:"Horizontal step interactive states"}),e.jsxs(r,{width:"600px",direction:"col",children:[e.jsxs(t.Container,{orientation:"horizontal",children:[e.jsx(t.Step,{semantic:"active",text:"Active State Hover","data-testid":"hover",onClick:()=>{}}),e.jsx(t.Step,{semantic:"active",text:"Active state Active","data-testid":"active",onClick:()=>{}}),e.jsx(t.Step,{semantic:"active",text:"Active Focused","data-testid":"focus",onClick:()=>{}})]}),e.jsxs(t.Container,{orientation:"horizontal",children:[e.jsx(t.Step,{semantic:"completed",text:"Active State Hover","data-testid":"hover",onClick:()=>{}}),e.jsx(t.Step,{semantic:"completed",text:"Active state Active","data-testid":"active",onClick:()=>{}}),e.jsx(t.Step,{semantic:"completed",text:"Active Focused","data-testid":"focus",onClick:()=>{}})]}),e.jsxs(t.Container,{orientation:"horizontal",children:[e.jsx(t.Step,{semantic:"error",text:"Active State Hover","data-testid":"hover",onClick:()=>{}}),e.jsx(t.Step,{semantic:"error",text:"Active state Active","data-testid":"active",onClick:()=>{}}),e.jsx(t.Step,{semantic:"error",text:"Active Focused","data-testid":"focus",onClick:()=>{}})]})]}),e.jsx("h2",{className:x({font:"heading_m",color:"default"}),children:"Vertical"}),e.jsxs(r,{direction:"row",gap:"xxl",children:[e.jsx(r,{height:"400px",width:"fit-content",children:e.jsxs(t.Container,{currentStepIndex:1,orientation:"vertical",children:[e.jsx(t.Step,{text:"First",onClick:()=>{}}),e.jsx(t.Step,{text:"Second"}),e.jsx(t.Step,{text:"Third"}),e.jsx(t.Step,{text:"Last"})]})}),e.jsx(r,{height:"fit-content",width:"fit-content",children:e.jsxs(t.Container,{currentStepIndex:1,orientation:"vertical",currentStepError:!0,children:[e.jsx(t.Step,{text:"First",onClick:()=>{}}),e.jsx(t.Step,{text:"Second"}),e.jsx(t.Step,{text:"Third"}),e.jsx(t.Step,{text:"Last"})]})})]})]});s.parameters={pseudo:{hover:'[data-testid="hover"] ',active:'[data-testid="active"]',focusVisible:'[data-testid="focus"]'}};s.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var g,y,_;S.parameters={...S.parameters,docs:{...(g=S.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    orientation,
    ...args
  }) => <Box width={orientation === "vertical" ? "fit-content" : "600px"} height={orientation === "horizontal" ? "fit-content" : "300px"}>
      <Stepper.Container {...args} orientation={orientation}>
        <Stepper.Step text="First" onClick={() => {}} />
        <Stepper.Step text="Second" />
        <Stepper.Step text="Third" />
        <Stepper.Step text="Last" />
      </Stepper.Container>
    </Box>,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    orientation: "horizontal",
    currentStepIndex: 1,
    currentStepError: false
  },
  argTypes: {
    orientation: {
      control: {
        type: "select"
      },
      options: ["horizontal", "vertical"]
    },
    currentStepIndex: {
      control: {
        type: "number"
      }
    },
    currentStepError: {
      control: {
        type: "boolean"
      }
    }
  }
}`,...(_=(y=S.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var k,T,N;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Box p="xl" direction="col" gap="xxl">
    <h2 className={getTypographyClassName({
    font: "heading_m",
    color: "default"
  })}>Horizontal stretch</h2>

    <Box width="600px" height="fit-content">
      <Stepper.Container currentStepIndex={1} orientation="horizontal">
        <Stepper.Step text="First" onClick={() => {}} />
        <Stepper.Step text="Second" />
        <Stepper.Step text="Third" />
        <Stepper.Step text="Last" />
      </Stepper.Container>
    </Box>

    <h2 className={getTypographyClassName({
    font: "heading_m",
    color: "default"
  })}>Horizontal fit</h2>
    <Box width="fit-content" height="fit-content">
      <Stepper.Container currentStepIndex={1} orientation="horizontal" currentStepError>
        <Stepper.Step text="First" onClick={() => {}} />
        <Stepper.Step text="Second" />
        <Stepper.Step text="Third" />
        <Stepper.Step text="Last" />
      </Stepper.Container>
    </Box>
    <h2 className={getTypographyClassName({
    font: "heading_m",
    color: "default"
  })}>Horizontal overflow</h2>
    <Box width="300px" height="fit-content">
      <Stepper.Container currentStepIndex={1} orientation="horizontal" currentStepError>
        <Stepper.Step text="First" onClick={() => {}} />
        <Stepper.Step text="Second" />
        <Stepper.Step text="Third" />
        <Stepper.Step text="Last" />
      </Stepper.Container>
    </Box>
    <h2 className={getTypographyClassName({
    font: "heading_m",
    color: "default"
  })}>
      Horizontal step interactive states
    </h2>
    <Box width="600px" direction="col">
      <Stepper.Container orientation="horizontal">
        <Stepper.Step semantic="active" text="Active State Hover" data-testid="hover" onClick={() => {}} />
        <Stepper.Step semantic="active" text="Active state Active" data-testid="active" onClick={() => {}} />
        <Stepper.Step semantic="active" text="Active Focused" data-testid="focus" onClick={() => {}} />
      </Stepper.Container>
      <Stepper.Container orientation="horizontal">
        <Stepper.Step semantic="completed" text="Active State Hover" data-testid="hover" onClick={() => {}} />
        <Stepper.Step semantic="completed" text="Active state Active" data-testid="active" onClick={() => {}} />
        <Stepper.Step semantic="completed" text="Active Focused" data-testid="focus" onClick={() => {}} />
      </Stepper.Container>
      <Stepper.Container orientation="horizontal">
        <Stepper.Step semantic="error" text="Active State Hover" data-testid="hover" onClick={() => {}} />
        <Stepper.Step semantic="error" text="Active state Active" data-testid="active" onClick={() => {}} />
        <Stepper.Step semantic="error" text="Active Focused" data-testid="focus" onClick={() => {}} />
      </Stepper.Container>
    </Box>
    <h2 className={getTypographyClassName({
    font: "heading_m",
    color: "default"
  })}>Vertical</h2>

    <Box direction="row" gap="xxl">
      <Box height="400px" width="fit-content">
        <Stepper.Container currentStepIndex={1} orientation="vertical">
          <Stepper.Step text="First" onClick={() => {}} />
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" />
          <Stepper.Step text="Last" />
        </Stepper.Container>
      </Box>
      <Box height="fit-content" width="fit-content">
        <Stepper.Container currentStepIndex={1} orientation="vertical" currentStepError>
          <Stepper.Step text="First" onClick={() => {}} />
          <Stepper.Step text="Second" />
          <Stepper.Step text="Third" />
          <Stepper.Step text="Last" />
        </Stepper.Container>
      </Box>
    </Box>
  </Box>`,...(N=(T=s.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const F=["Playground","VisualTest"],V=Object.freeze(Object.defineProperty({__proto__:null,Playground:S,VisualTest:s,__namedExportsOrder:F,default:I},Symbol.toStringTag,{value:"Module"}));export{S as P,V as S};
