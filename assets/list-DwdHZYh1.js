var h=Object.defineProperty;var c=(s,e,i)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i;var t=(s,e,i)=>c(s,typeof e!="symbol"?e+"":e,i);const d=10;function m(){return document.querySelectorAll("empty-not-existing")}class g{constructor(e){t(this,"element");t(this,"orientation");t(this,"getAllItems");t(this,"_getAllItems");t(this,"getSelectedItems");t(this,"loop");t(this,"_handler");this.getAllItems=e.getAllItems,this.getSelectedItems=e.getSelectedItems,this.loop=e.loop===void 0?!0:e.loop,this.orientation=e.orientation||"vertical",this._getAllItems=()=>this.element?this.getAllItems(this.element):new NodeList}setElement(e){this.removeEventListener(),this.element=void 0,e&&(this.element=e,this.addEventListener())}focusOn(e){e&&e.focus()}getListInfo(){if(!this.element)return{focusedElement:null,focusedIndex:-1,all:[],lastIndex:-1};const e=this._getAllItems(),i=e.values();let o,n,r=0;do{const{value:l,done:a}=i.next();o=l===document.activeElement,o?n=!1:(n=!a,r+=1)}while(n);return{focusedElement:document.activeElement,focusedIndex:r,all:e,lastIndex:e.length-1}}getFirst(){if(this.element)return this._getAllItems().item(0)}getLast(){if(this.element){const e=this._getAllItems();return e.item(e.length-1)}}getNextItem(){const e=this.getListInfo();return e.focusedIndex===e.lastIndex?this.loop?e.all[0]:e.focusedElement:e.all[e.focusedIndex+1]}getPreviousItem(){const e=this.getListInfo();return e.focusedIndex===0?this.loop?e.all[e.lastIndex]:e.focusedElement:e.all[e.focusedIndex-1]}getNextPageItem(){const e=this.getListInfo();return e.focusedIndex+10>=e.lastIndex?e.all[e.lastIndex]:e.all[e.focusedIndex+10]}getPreviousPageItem(){const e=this.getListInfo();return e.focusedIndex-10<0?e.all[0]:e.all[e.focusedIndex-10]}onKeyDownHandler(e){if(this.element)switch(e.key){case"Down":case"ArrowDown":this.orientation==="vertical"&&(e.stopPropagation(),e.preventDefault(),this.focusOn(this.getNextItem()));break;case"Right":case"ArrowRight":this.orientation==="horizontal"&&(e.stopPropagation(),e.preventDefault(),document.dir==="rtl"?this.focusOn(this.getPreviousItem()):this.focusOn(this.getNextItem()));break;case"Up":case"ArrowUp":this.orientation==="vertical"&&(e.stopPropagation(),e.preventDefault(),this.focusOn(this.getPreviousItem()));break;case"Left":case"ArrowLeft":this.orientation==="horizontal"&&(e.stopPropagation(),e.preventDefault(),document.dir==="rtl"?this.focusOn(this.getNextItem()):this.focusOn(this.getPreviousItem()));break;case"Home":e.stopPropagation(),e.preventDefault(),this.focusOn(this.getFirst());break;case"End":e.stopPropagation(),e.preventDefault(),this.focusOn(this.getLast());break;case"PageDown":this.orientation==="vertical"&&(e.stopPropagation(),e.preventDefault(),this.focusOn(this.getNextPageItem()));break;case"PageUp":this.orientation==="vertical"&&(e.stopPropagation(),e.preventDefault(),this.focusOn(this.getPreviousPageItem()));break}}addEventListener(){this.element&&(this._handler=e=>this.onKeyDownHandler(e),this.element.addEventListener("keydown",this._handler))}removeEventListener(){this.element&&this._handler&&(this.element.removeEventListener("keydown",this._handler),this._handler=void 0)}focusOnFirst(){this.element&&this.focusOn(this.getFirst())}focusOnFirstSelected(){if(this.element&&this.getSelectedItems){const e=this.getFirst();e?this.focusOn(e):this.focusOnFirst()}}}export{g as L,d as P,m as g};