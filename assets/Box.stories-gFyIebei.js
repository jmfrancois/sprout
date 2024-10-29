import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import"./index-BwDkhjyp.js";import{B as e,g,a as w}from"./Box-Bo_17ADl.js";import"./_commonjsHelpers-BosuxZz1.js";const p=[void 0,"0","xs","s","m","l","xl","xxl","3xl"],d=[void 0,"default","weak","moderate","strong","extra-strong"],c=[void 0,"start","end","center","stretch"],Y={component:e,title:"Utils/Box",args:{direction:"row",gap:"xs",border:"default"},argTypes:{direction:{control:{type:"select"},options:[void 0,"row","col"]},alignContent:{control:{type:"select"},options:c},alignItems:{control:{type:"select"},options:c},alignSelf:{control:{type:"select"},options:c},justify:{control:{type:"select"},options:[void 0,"start","end","center","between","around"]},gap:{control:{type:"select"},options:p},rowGap:{control:{type:"select"},options:p},columnGap:{control:{type:"select"},options:p},border:{control:{type:"select"},options:d},borderTop:{control:{type:"select"},options:d},borderRight:{control:{type:"select"},options:d},borderBottom:{control:{type:"select"},options:d},borderLeft:{control:{type:"select"},options:d},borderWidth:{control:{type:"select"},options:[void 0,"0","default","strong"]},boxSizing:{control:{type:"select"},options:[void 0,"content-box","border-box"]},wrap:{control:{type:"select"},options:[void 0,"wrap","wrap-reverse","nowrap"]}}},E={chromatic:{disableSnapshot:!0}},u=n.jsxs(n.Fragment,{children:[n.jsx(e,{border:"default",width:"100px",children:"item 1"}),n.jsxs(e,{border:"default",children:["item 2",n.jsx("br",{}),"item 2 line 2"]}),n.jsx(e,{border:"default",children:"item 3"}),n.jsxs(e,{border:"default",children:["item 4",n.jsx("br",{}),"item 4 line 2",n.jsx("br",{}),"item 4 line 3"]})]}),h=l=>n.jsx(e,{...l,children:u});h.parameters=E;const P=l=>n.jsx("button",{type:"button",...g(l),children:"Click me"});P.storyName="With getBoxProps";P.args={gap:"m",border:"default",p:"xl",typography:{familly:"label",size:"m"}};P.parameters=E;const y={backgroundColor:"#ad2f8e",color:"#FFF",width:"fit-content"},m={backgroundColor:"#FF8C00",boxShadow:"var(--sprout-common-elevation-strong)",color:"#FFF"},o={style:y,gap:"xl",border:"strong",p:"xl"},x={style:m,border:"moderate",p:"xl",alignItems:"center",justify:"center"},t={gap:"xl"},r={direction:"col"},s=({children:l})=>n.jsx("h2",{className:w({familly:"heading",size:"l"}),children:l}),i=({children:l})=>n.jsx("h3",{className:w({familly:"heading",size:"m"}),children:l}),O=()=>n.jsxs(e,{direction:"col",children:[n.jsx(s,{children:"flex-direction"}),n.jsxs(e,{...t,children:[n.jsxs(e,{...r,children:[n.jsx(i,{children:"row (default)"}),n.jsxs(e,{...o,direction:"row",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"})]})]}),n.jsxs(e,{...r,children:[n.jsx(i,{children:"col (default)"}),n.jsxs(e,{...o,direction:"col",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"})]})]})]}),n.jsx(s,{children:"wrap"}),n.jsxs(e,{...t,children:[n.jsxs(e,{...r,width:"400px",children:[n.jsx(i,{children:"nowrap (default)"}),n.jsxs(e,{...o,width:"200px",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"}),n.jsx(e,{...x,children:"4"}),n.jsx(e,{...x,children:"5"}),n.jsx(e,{...x,children:"6"})]})]}),n.jsxs(e,{...r,children:[n.jsx(i,{children:"wrap"}),n.jsxs(e,{...o,wrap:"wrap",width:"200px",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"}),n.jsx(e,{...x,children:"4"}),n.jsx(e,{...x,children:"5"}),n.jsx(e,{...x,children:"6"})]})]}),n.jsxs(e,{...r,children:[n.jsx(i,{children:"wrap-reverse"}),n.jsxs(e,{...o,wrap:"wrap-reverse",width:"200px",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"}),n.jsx(e,{...x,children:"4"}),n.jsx(e,{...x,children:"5"}),n.jsx(e,{...x,children:"6"})]})]})]}),n.jsx(s,{children:"justify"}),n.jsxs(e,{...t,wrap:"wrap",children:[n.jsxs(e,{...r,width:"400px",children:[n.jsx(i,{children:"start (default)"}),n.jsxs(e,{...o,width:"400px",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"})]})]}),n.jsxs(e,{...r,width:"400px",children:[n.jsx(i,{children:"end"}),n.jsxs(e,{...o,justify:"end",width:"400px",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"})]})]}),n.jsxs(e,{...r,width:"400px",children:[n.jsx(i,{children:"center"}),n.jsxs(e,{...o,justify:"center",width:"400px",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"})]})]}),n.jsxs(e,{...r,width:"400px",children:[n.jsx(i,{children:"between"}),n.jsxs(e,{...o,justify:"between",width:"400px",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"})]})]}),n.jsxs(e,{...r,width:"400px",children:[n.jsx(i,{children:"around"}),n.jsxs(e,{...o,justify:"around",width:"400px",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"})]})]}),n.jsxs(e,{...r,width:"400px",children:[n.jsx(i,{children:"evenly"}),n.jsxs(e,{...o,justify:"evenly",width:"400px",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"})]})]})]}),n.jsx(s,{children:"alignItems"}),n.jsxs(e,{...t,wrap:"wrap",children:[n.jsxs(e,{...r,width:"400px",children:[n.jsx(i,{children:"stretch (default)"}),n.jsxs(e,{...o,height:"150px",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"})]})]}),n.jsxs(e,{...r,width:"400px",children:[n.jsx(i,{children:"start"}),n.jsxs(e,{...o,alignItems:"start",height:"150px",children:[n.jsx(e,{...x,height:"20px",children:"1"}),n.jsx(e,{...x,height:"100px",children:"2"}),n.jsx(e,{...x,children:"3"})]})]}),n.jsxs(e,{...r,width:"400px",children:[n.jsx(i,{children:"end"}),n.jsxs(e,{...o,alignItems:"end",height:"150px",children:[n.jsx(e,{...x,height:"20px",children:"1"}),n.jsx(e,{...x,height:"100px",children:"2"}),n.jsx(e,{...x,children:"3"})]})]}),n.jsxs(e,{...r,width:"400px",children:[n.jsx(i,{children:"center"}),n.jsxs(e,{...o,alignItems:"center",height:"150px",children:[n.jsx(e,{...x,height:"20px",children:"1"}),n.jsx(e,{...x,height:"100px",children:"2"}),n.jsx(e,{...x,children:"3"})]})]}),n.jsxs(e,{...r,width:"400px",children:[n.jsx(i,{children:"baseline"}),n.jsxs(e,{...o,alignItems:"baseline",height:"150px",children:[n.jsx(e,{...x,alignItems:"center",height:"100px",children:n.jsx("h1",{children:"Text text"})}),n.jsx(e,{...x,alignItems:"end",height:"100px",children:n.jsx("p",{children:"Text text"})}),n.jsx(e,{...x,alignItems:"start",height:"100px",children:n.jsx("h4",{children:"Text text"})})]})]})]}),n.jsx(s,{children:"alignContent"}),n.jsxs(e,{...t,wrap:"wrap",children:[n.jsxs(e,{...r,children:[n.jsx(i,{children:"start (default)"}),n.jsxs(e,{...o,alignContent:"start",wrap:"wrap",height:"250px",width:"200px",children:[n.jsx(e,{...x,height:"20px",children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,height:"20px",children:"3"}),n.jsx(e,{...x,children:"4"}),n.jsx(e,{...x,children:"5"})]})]}),n.jsxs(e,{...r,children:[n.jsx(i,{children:"end"}),n.jsxs(e,{...o,alignContent:"end",wrap:"wrap",height:"250px",width:"200px",children:[n.jsx(e,{...x,height:"20px",children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,height:"20px",children:"3"}),n.jsx(e,{...x,children:"4"}),n.jsx(e,{...x,children:"5"})]})]}),n.jsxs(e,{...r,children:[n.jsx(i,{children:"center"}),n.jsxs(e,{...o,alignContent:"center",wrap:"wrap",height:"250px",width:"200px",children:[n.jsx(e,{...x,height:"20px",children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,height:"20px",children:"3"}),n.jsx(e,{...x,children:"4"}),n.jsx(e,{...x,children:"5"})]})]}),n.jsxs(e,{...r,children:[n.jsx(i,{children:"stretch"}),n.jsxs(e,{...o,alignContent:"stretch",wrap:"wrap",height:"250px",width:"200px",children:[n.jsx(e,{...x,height:"20px",children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,height:"20px",children:"3"}),n.jsx(e,{...x,children:"4"}),n.jsx(e,{...x,children:"5"})]})]}),n.jsxs(e,{...r,children:[n.jsx(i,{children:"between"}),n.jsxs(e,{...o,alignContent:"between",wrap:"wrap",height:"250px",width:"200px",children:[n.jsx(e,{...x,height:"20px",children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,height:"20px",children:"3"}),n.jsx(e,{...x,children:"4"}),n.jsx(e,{...x,children:"5"})]})]}),n.jsxs(e,{...r,children:[n.jsx(i,{children:"around"}),n.jsxs(e,{...o,alignContent:"around",wrap:"wrap",height:"250px",width:"200px",children:[n.jsx(e,{...x,height:"20px",children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,height:"20px",children:"3"}),n.jsx(e,{...x,children:"4"}),n.jsx(e,{...x,children:"5"})]})]})]}),n.jsxs(e,{direction:"col",children:[n.jsx(s,{children:"gap, row-gap, column-gap"}),n.jsxs(e,{...t,children:[n.jsxs(e,{...r,children:[n.jsx(i,{children:"gap=s"}),n.jsxs(e,{...o,direction:"row",alignItems:"start",wrap:"wrap",width:"200px",gap:"s",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"})]})]}),n.jsxs(e,{...r,children:[n.jsx(i,{children:"columGap=s rowGap=xl"}),n.jsxs(e,{...o,direction:"row",alignItems:"start",wrap:"wrap",width:"200px",rowGap:"xl",columnGap:"s",children:[n.jsx(e,{...x,children:"1"}),n.jsx(e,{...x,children:"2"}),n.jsx(e,{...x,children:"3"}),n.jsx(e,{...x,children:"4"}),n.jsx(e,{...x,children:"5"})]})]})]})]}),n.jsxs(e,{direction:"col",children:[n.jsx(s,{children:"grow / shrink"}),n.jsxs(e,{...t,children:[n.jsxs(e,{...r,children:[n.jsx(i,{children:"grow"}),n.jsxs(e,{...o,direction:"row",width:"300px",children:[n.jsx(e,{...x,grow:1,children:"1"}),n.jsx(e,{...x,grow:1,children:"1"}),n.jsx(e,{...x,grow:1,children:"1"})]}),n.jsxs(e,{...o,direction:"row",width:"300px",children:[n.jsx(e,{...x,grow:1,children:"1"}),n.jsx(e,{...x,grow:2,children:"2"}),n.jsx(e,{...x,grow:1,children:"1"})]})]}),n.jsxs(e,{...r,children:[n.jsx(i,{children:"shrink"}),n.jsx(e,{...o,direction:"row",width:"280px",children:n.jsx(e,{...x,basis:"300px",shrink:0,children:"shrink = 0"})}),n.jsxs(e,{...o,direction:"row",width:"280px",children:[n.jsx(e,{...x,basis:"300px",shrink:1,children:"shrink = 1"}),n.jsx(e,{...x,basis:"300px",shrink:1,children:"shrink = 1"})]}),n.jsxs(e,{...o,direction:"row",width:"280px",children:[n.jsx(e,{...x,basis:"300px",shrink:2,children:"shrink = 2"}),n.jsx(e,{...x,basis:"300px",shrink:1,children:"shrink = 1"})]})]})]})]}),n.jsxs(e,{direction:"col",children:[n.jsx(s,{children:"align-self"}),n.jsx(e,{...t,children:n.jsxs(e,{...o,direction:"row",height:"250px",alignItems:"start",children:[n.jsx(e,{...x,alignSelf:"start",children:"start"}),n.jsx(e,{...x,alignSelf:"center",children:"center"}),n.jsx(e,{...x,alignSelf:"end",children:"end"}),n.jsx(e,{...x,children:"3"}),n.jsx(e,{...x,children:"4"})]})})]})]});h.__docgenInfo={description:"",methods:[],displayName:"Playground"};P.__docgenInfo={description:"",methods:[],displayName:"WithgetBoxProps"};O.__docgenInfo={description:"",methods:[],displayName:"VisualTest"};var B,a,T;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:"(props: Partial<BoxProps>) => <Box {...props}>{BoxContent}</Box>",...(T=(a=h.parameters)==null?void 0:a.docs)==null?void 0:T.source}}};var N,R,j;P.parameters={...P.parameters,docs:{...(N=P.parameters)==null?void 0:N.docs,source:{originalSource:`(props: Partial<BoxProps>) => <button type="button" {...getBoxProps(props)}>
    Click me
  </button>`,...(j=(R=P.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var _,C,S;O.parameters={...O.parameters,docs:{...(_=O.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Box direction="col">
    <PropertyTile>flex-direction</PropertyTile>
    <Box {...PROPERTY_ROW_PROPS}>
      <Box {...PROPERTY_COL_PROPS}>
        <PropertyValue>row (default)</PropertyValue>
        <Box {...CONTAINER_PROPS} direction="row">
          <Box {...CONTENT_PROPS}>1</Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS}>3</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS}>
        <PropertyValue>col (default)</PropertyValue>
        <Box {...CONTAINER_PROPS} direction="col">
          <Box {...CONTENT_PROPS}>1</Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS}>3</Box>
        </Box>
      </Box>
    </Box>
    <PropertyTile>wrap</PropertyTile>
    <Box {...PROPERTY_ROW_PROPS}>
      <Box {...PROPERTY_COL_PROPS} width="400px">
        <PropertyValue>nowrap (default)</PropertyValue>
        <Box {...CONTAINER_PROPS} width="200px">
          <Box {...CONTENT_PROPS}>1</Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS}>3</Box>
          <Box {...CONTENT_PROPS}>4</Box>
          <Box {...CONTENT_PROPS}>5</Box>
          <Box {...CONTENT_PROPS}>6</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS}>
        <PropertyValue>wrap</PropertyValue>
        <Box {...CONTAINER_PROPS} wrap="wrap" width="200px">
          <Box {...CONTENT_PROPS}>1</Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS}>3</Box>
          <Box {...CONTENT_PROPS}>4</Box>
          <Box {...CONTENT_PROPS}>5</Box>
          <Box {...CONTENT_PROPS}>6</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS}>
        <PropertyValue>wrap-reverse</PropertyValue>
        <Box {...CONTAINER_PROPS} wrap="wrap-reverse" width="200px">
          <Box {...CONTENT_PROPS}>1</Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS}>3</Box>
          <Box {...CONTENT_PROPS}>4</Box>
          <Box {...CONTENT_PROPS}>5</Box>
          <Box {...CONTENT_PROPS}>6</Box>
        </Box>
      </Box>
    </Box>
    <PropertyTile>justify</PropertyTile>
    <Box {...PROPERTY_ROW_PROPS} wrap="wrap">
      <Box {...PROPERTY_COL_PROPS} width="400px">
        <PropertyValue>start (default)</PropertyValue>
        <Box {...CONTAINER_PROPS} width="400px">
          <Box {...CONTENT_PROPS}>1</Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS}>3</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS} width="400px">
        <PropertyValue>end</PropertyValue>
        <Box {...CONTAINER_PROPS} justify="end" width="400px">
          <Box {...CONTENT_PROPS}>1</Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS}>3</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS} width="400px">
        <PropertyValue>center</PropertyValue>
        <Box {...CONTAINER_PROPS} justify="center" width="400px">
          <Box {...CONTENT_PROPS}>1</Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS}>3</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS} width="400px">
        <PropertyValue>between</PropertyValue>
        <Box {...CONTAINER_PROPS} justify="between" width="400px">
          <Box {...CONTENT_PROPS}>1</Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS}>3</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS} width="400px">
        <PropertyValue>around</PropertyValue>
        <Box {...CONTAINER_PROPS} justify="around" width="400px">
          <Box {...CONTENT_PROPS}>1</Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS}>3</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS} width="400px">
        <PropertyValue>evenly</PropertyValue>
        <Box {...CONTAINER_PROPS} justify="evenly" width="400px">
          <Box {...CONTENT_PROPS}>1</Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS}>3</Box>
        </Box>
      </Box>
    </Box>
    <PropertyTile>alignItems</PropertyTile>
    <Box {...PROPERTY_ROW_PROPS} wrap="wrap">
      <Box {...PROPERTY_COL_PROPS} width="400px">
        <PropertyValue>stretch (default)</PropertyValue>
        <Box {...CONTAINER_PROPS} height="150px">
          <Box {...CONTENT_PROPS}>1</Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS}>3</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS} width="400px">
        <PropertyValue>start</PropertyValue>
        <Box {...CONTAINER_PROPS} alignItems="start" height="150px">
          <Box {...CONTENT_PROPS} height="20px">
            1
          </Box>
          <Box {...CONTENT_PROPS} height="100px">
            2
          </Box>
          <Box {...CONTENT_PROPS}>3</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS} width="400px">
        <PropertyValue>end</PropertyValue>
        <Box {...CONTAINER_PROPS} alignItems="end" height="150px">
          <Box {...CONTENT_PROPS} height="20px">
            1
          </Box>
          <Box {...CONTENT_PROPS} height="100px">
            2
          </Box>
          <Box {...CONTENT_PROPS}>3</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS} width="400px">
        <PropertyValue>center</PropertyValue>
        <Box {...CONTAINER_PROPS} alignItems="center" height="150px">
          <Box {...CONTENT_PROPS} height="20px">
            1
          </Box>
          <Box {...CONTENT_PROPS} height="100px">
            2
          </Box>
          <Box {...CONTENT_PROPS}>3</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS} width="400px">
        <PropertyValue>baseline</PropertyValue>
        <Box {...CONTAINER_PROPS} alignItems="baseline" height="150px">
          <Box {...CONTENT_PROPS} alignItems="center" height="100px">
            <h1>Text text</h1>
          </Box>
          <Box {...CONTENT_PROPS} alignItems="end" height="100px">
            <p>Text text</p>
          </Box>
          <Box {...CONTENT_PROPS} alignItems="start" height="100px">
            <h4>Text text</h4>
          </Box>
        </Box>
      </Box>
    </Box>
    <PropertyTile>alignContent</PropertyTile>
    <Box {...PROPERTY_ROW_PROPS} wrap="wrap">
      <Box {...PROPERTY_COL_PROPS}>
        <PropertyValue>start (default)</PropertyValue>
        <Box {...CONTAINER_PROPS} alignContent="start" wrap="wrap" height="250px" width="200px">
          <Box {...CONTENT_PROPS} height="20px">
            1
          </Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS} height="20px">
            3
          </Box>
          <Box {...CONTENT_PROPS}>4</Box>
          <Box {...CONTENT_PROPS}>5</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS}>
        <PropertyValue>end</PropertyValue>
        <Box {...CONTAINER_PROPS} alignContent="end" wrap="wrap" height="250px" width="200px">
          <Box {...CONTENT_PROPS} height="20px">
            1
          </Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS} height="20px">
            3
          </Box>
          <Box {...CONTENT_PROPS}>4</Box>
          <Box {...CONTENT_PROPS}>5</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS}>
        <PropertyValue>center</PropertyValue>
        <Box {...CONTAINER_PROPS} alignContent="center" wrap="wrap" height="250px" width="200px">
          <Box {...CONTENT_PROPS} height="20px">
            1
          </Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS} height="20px">
            3
          </Box>
          <Box {...CONTENT_PROPS}>4</Box>
          <Box {...CONTENT_PROPS}>5</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS}>
        <PropertyValue>stretch</PropertyValue>
        <Box {...CONTAINER_PROPS} alignContent="stretch" wrap="wrap" height="250px" width="200px">
          <Box {...CONTENT_PROPS} height="20px">
            1
          </Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS} height="20px">
            3
          </Box>
          <Box {...CONTENT_PROPS}>4</Box>
          <Box {...CONTENT_PROPS}>5</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS}>
        <PropertyValue>between</PropertyValue>
        <Box {...CONTAINER_PROPS} alignContent="between" wrap="wrap" height="250px" width="200px">
          <Box {...CONTENT_PROPS} height="20px">
            1
          </Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS} height="20px">
            3
          </Box>
          <Box {...CONTENT_PROPS}>4</Box>
          <Box {...CONTENT_PROPS}>5</Box>
        </Box>
      </Box>
      <Box {...PROPERTY_COL_PROPS}>
        <PropertyValue>around</PropertyValue>
        <Box {...CONTAINER_PROPS} alignContent="around" wrap="wrap" height="250px" width="200px">
          <Box {...CONTENT_PROPS} height="20px">
            1
          </Box>
          <Box {...CONTENT_PROPS}>2</Box>
          <Box {...CONTENT_PROPS} height="20px">
            3
          </Box>
          <Box {...CONTENT_PROPS}>4</Box>
          <Box {...CONTENT_PROPS}>5</Box>
        </Box>
      </Box>
    </Box>
    <Box direction="col">
      <PropertyTile>gap, row-gap, column-gap</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>gap=s</PropertyValue>
          <Box {...CONTAINER_PROPS} direction="row" alignItems="start" wrap="wrap" width="200px" gap="s">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>columGap=s rowGap=xl</PropertyValue>
          <Box {...CONTAINER_PROPS} direction="row" alignItems="start" wrap="wrap" width="200px" rowGap="xl" columnGap="s">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box direction="col">
      <PropertyTile>grow / shrink</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>grow</PropertyValue>
          <Box {...CONTAINER_PROPS} direction="row" width="300px">
            <Box {...CONTENT_PROPS} grow={1}>
              1
            </Box>
            <Box {...CONTENT_PROPS} grow={1}>
              1
            </Box>
            <Box {...CONTENT_PROPS} grow={1}>
              1
            </Box>
          </Box>
          <Box {...CONTAINER_PROPS} direction="row" width="300px">
            <Box {...CONTENT_PROPS} grow={1}>
              1
            </Box>
            <Box {...CONTENT_PROPS} grow={2}>
              2
            </Box>
            <Box {...CONTENT_PROPS} grow={1}>
              1
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>shrink</PropertyValue>
          <Box {...CONTAINER_PROPS} direction="row" width="280px">
            <Box {...CONTENT_PROPS} basis="300px" shrink={0}>
              shrink = 0
            </Box>
          </Box>
          <Box {...CONTAINER_PROPS} direction="row" width="280px">
            <Box {...CONTENT_PROPS} basis="300px" shrink={1}>
              shrink = 1
            </Box>
            <Box {...CONTENT_PROPS} basis="300px" shrink={1}>
              shrink = 1
            </Box>
          </Box>
          <Box {...CONTAINER_PROPS} direction="row" width="280px">
            <Box {...CONTENT_PROPS} basis="300px" shrink={2}>
              shrink = 2
            </Box>
            <Box {...CONTENT_PROPS} basis="300px" shrink={1}>
              shrink = 1
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box direction="col">
      <PropertyTile>align-self</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...CONTAINER_PROPS} direction="row" height="250px" alignItems="start">
          <Box {...CONTENT_PROPS} alignSelf="start">
            start
          </Box>
          <Box {...CONTENT_PROPS} alignSelf="center">
            center
          </Box>
          <Box {...CONTENT_PROPS} alignSelf="end">
            end
          </Box>
          <Box {...CONTENT_PROPS}>3</Box>
          <Box {...CONTENT_PROPS}>4</Box>
        </Box>
      </Box>
    </Box>
  </Box>`,...(S=(C=O.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const A=["Playground","WithgetBoxProps","VisualTest"];export{h as Playground,O as VisualTest,P as WithgetBoxProps,A as __namedExportsOrder,Y as default};
