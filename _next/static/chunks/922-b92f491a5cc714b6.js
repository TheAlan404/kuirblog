"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{2746:function(e,t,r){e.exports.jsxRuntime=r(5893)},967:function(e,t,r){r.d(t,{e:function(){return d}});var n=r(5893),o=r(512);r(7294);var l=r(987),a=r(3362),i=r(4410),c={root:"m_849cf0da"};let s={underline:"hover"},d=(0,a.b)((e,t)=>{let{underline:r,className:a,unstyled:d,mod:u,...f}=(0,l.w)("Anchor",s,e);return(0,n.jsx)(i.x,{component:"a",ref:t,className:(0,o.Z)({[c.root]:!d},a),...f,mod:[{underline:r},u],__staticSelector:"Anchor",unstyled:d})});d.classes=c,d.displayName="@mantine/core/Anchor"},6536:function(e,t,r){r.d(t,{E:function(){return p}});var n=r(5893);r(7294);var o=r(3637),l=r(2979),a=r(987),i=r(6976),c=r(3445),s=r(9535),d={root:"m_b183c0a2"};let u={},f=(0,o.Z)((e,{color:t})=>({root:{"--code-bg":t?(0,l.p)(t,e):void 0}})),p=(0,s.d5)((e,t)=>{let r=(0,a.w)("Code",u,e),{classNames:o,className:l,style:s,styles:p,unstyled:h,vars:m,color:w,block:v,variant:b,mod:y,...x}=r,g=(0,i.y)({name:"Code",props:r,classes:d,className:l,style:s,classNames:o,styles:p,unstyled:h,vars:m,varsResolver:f});return(0,n.jsx)(c.x,{component:v?"pre":"code",variant:b,ref:t,mod:[{block:v},y],...g("root"),...x,dir:"ltr"})});p.classes=d,p.displayName="@mantine/core/Code"},5503:function(e,t,r){r.d(t,{i:function(){return ep}});var n=r(5893),o=r(8565),l=r(7294),a=r(9429),i=r(3637),c=r(2979),s=r(987),d=r(6976),u=r(3445),f=r(9535),p=r(679);let[h,m]=(0,p.R)("Table component was not found in the tree");var w={table:"m_b23fa0ef",th:"m_4e7aa4f3",tr:"m_4e7aa4fd",td:"m_4e7aa4ef",tbody:"m_b2404537",thead:"m_b242d975",caption:"m_9e5a3ac7",scrollContainer:"m_a100c15",scrollContainerInner:"m_62259741"};function v(e,t){let r=`Table${e.charAt(0).toUpperCase()}${e.slice(1)}`,o=(0,f.d5)((o,l)=>{let a=(0,s.w)(r,{},o),{classNames:i,className:c,style:d,styles:f,...p}=a,h=m();return(0,n.jsx)(u.x,{component:e,ref:l,...function(e,t){if(!t)return;let r={};return t.columnBorder&&e.withColumnBorders&&(r["data-with-column-border"]=!0),t.rowBorder&&e.withRowBorders&&(r["data-with-row-border"]=!0),t.striped&&e.striped&&(r["data-striped"]=e.striped),t.highlightOnHover&&e.highlightOnHover&&(r["data-hover"]=!0),t.captionSide&&e.captionSide&&(r["data-side"]=e.captionSide),t.stickyHeader&&e.stickyHeader&&(r["data-sticky"]=!0),r}(h,t),...h.getStyles(e,{className:c,classNames:i,style:d,styles:f,props:a}),...p})});return o.displayName=`@mantine/core/${r}`,o.classes=w,o}let b=v("th",{columnBorder:!0}),y=v("td",{columnBorder:!0}),x=v("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),g=v("thead",{stickyHeader:!0}),S=v("tbody"),C=v("tfoot"),T=v("caption",{captionSide:!0});function j({data:e}){return(0,n.jsxs)(n.Fragment,{children:[e.caption&&(0,n.jsx)(T,{children:e.caption}),e.head&&(0,n.jsx)(g,{children:(0,n.jsx)(x,{children:e.head.map((e,t)=>(0,n.jsx)(b,{children:e},t))})}),e.body&&(0,n.jsx)(S,{children:e.body.map((e,t)=>(0,n.jsx)(x,{children:e.map((e,t)=>(0,n.jsx)(y,{children:e},t))},t))}),e.foot&&(0,n.jsx)(C,{children:(0,n.jsx)(x,{children:e.foot.map((e,t)=>(0,n.jsx)(b,{children:e},t))})})]})}j.displayName="@mantine/core/TableDataRenderer";let[R,E]=(0,p.R)("ScrollArea.Root component was not found in tree");function D(e){let t=(0,l.useRef)(e);return(0,l.useEffect)(()=>{t.current=e}),(0,l.useMemo)(()=>(...e)=>t.current?.(...e),[])}var P=r(464);function A(e,t){let r=D(t);(0,P.Y)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}let _=(0,l.forwardRef)((e,t)=>{let{style:r,...o}=e,a=E(),[i,c]=(0,l.useState)(0),[s,d]=(0,l.useState)(0),u=!!(i&&s);return A(a.scrollbarX,()=>{let e=a.scrollbarX?.offsetHeight||0;a.onCornerHeightChange(e),d(e)}),A(a.scrollbarY,()=>{let e=a.scrollbarY?.offsetWidth||0;a.onCornerWidthChange(e),c(e)}),u?(0,n.jsx)("div",{...o,ref:t,style:{...r,width:i,height:s}}):null}),L=(0,l.forwardRef)((e,t)=>{let r=E(),o=!!(r.scrollbarX&&r.scrollbarY);return"scroll"!==r.type&&o?(0,n.jsx)(_,{...e,ref:t}):null});var N=r(6645);let k={scrollHideDelay:1e3,type:"hover"},H=(0,l.forwardRef)((e,t)=>{let{type:r,scrollHideDelay:o,scrollbars:a,...i}=(0,s.w)("ScrollAreaRoot",k,e),[c,d]=(0,l.useState)(null),[f,p]=(0,l.useState)(null),[h,m]=(0,l.useState)(null),[w,v]=(0,l.useState)(null),[b,y]=(0,l.useState)(null),[x,g]=(0,l.useState)(0),[S,C]=(0,l.useState)(0),[T,j]=(0,l.useState)(!1),[E,D]=(0,l.useState)(!1),P=(0,N.Yx)(t,e=>d(e));return(0,n.jsx)(R,{value:{type:r,scrollHideDelay:o,scrollArea:c,viewport:f,onViewportChange:p,content:h,onContentChange:m,scrollbarX:w,onScrollbarXChange:v,scrollbarXEnabled:T,onScrollbarXEnabledChange:j,scrollbarY:b,onScrollbarYChange:y,scrollbarYEnabled:E,onScrollbarYEnabledChange:D,onCornerWidthChange:g,onCornerHeightChange:C},children:(0,n.jsx)(u.x,{...i,ref:P,__vars:{"--sa-corner-width":"xy"!==a?"0px":`${x}px`,"--sa-corner-height":"xy"!==a?"0px":`${S}px`}})})});function z(e,t){let r=D(e),n=(0,l.useRef)(0);return(0,l.useEffect)(()=>()=>window.clearTimeout(n.current),[]),(0,l.useCallback)((...e)=>{window.clearTimeout(n.current),n.current=window.setTimeout(()=>r(...e),t)},[r,t])}H.displayName="@mantine/core/ScrollAreaRoot";var M=r(9088);function Y(e,t){let r=e/t;return Number.isNaN(r)?0:r}function W(e){let t=Y(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-r)*t,18)}function I(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}function X(e,t,r="ltr"){let n=W(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,a=t.content-t.viewport,i=function(e,[t,r]){return Math.min(r,Math.max(t,e))}(e,"ltr"===r?[0,a]:[-1*a,0]);return I([0,a],[0,l-n])(i)}function B(e){return e?parseInt(e,10):0}function U(e,t,{checkForDefaultPrevented:r=!0}={}){return n=>{e?.(n),!1!==r&&n.defaultPrevented||t?.(n)}}let[$,F]=(0,p.R)("ScrollAreaScrollbar was not found in tree"),O=(0,l.forwardRef)((e,t)=>{let{sizes:r,hasThumb:o,onThumbChange:a,onThumbPointerUp:i,onThumbPointerDown:c,onThumbPositionChange:s,onDragScroll:d,onWheelScroll:u,onResize:f,...p}=e,h=E(),[m,w]=(0,l.useState)(null),v=(0,N.Yx)(t,e=>w(e)),b=(0,l.useRef)(null),y=(0,l.useRef)(""),{viewport:x}=h,g=r.content-r.viewport,S=D(u),C=D(s),T=z(f,10),j=e=>{b.current&&d({x:e.clientX-b.current.left,y:e.clientY-b.current.top})};return(0,l.useEffect)(()=>{let e=e=>{let t=e.target;m?.contains(t)&&S(e,g)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[x,m,g,S]),(0,l.useEffect)(C,[r,C]),A(m,T),A(h.content,T),(0,n.jsx)($,{value:{scrollbar:m,hasThumb:o,onThumbChange:D(a),onThumbPointerUp:D(i),onThumbPositionChange:C,onThumbPointerDown:D(c)},children:(0,n.jsx)("div",{...p,ref:v,"data-mantine-scrollbar":!0,style:{position:"absolute",...p.style},onPointerDown:U(e.onPointerDown,e=>{e.preventDefault(),0===e.button&&(e.target.setPointerCapture(e.pointerId),b.current=m.getBoundingClientRect(),y.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",j(e))}),onPointerMove:U(e.onPointerMove,j),onPointerUp:U(e.onPointerUp,e=>{e.preventDefault();let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=y.current,b.current=null})})})}),Z=(0,l.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:o,style:a,...i}=e,c=E(),[s,d]=(0,l.useState)(),u=(0,l.useRef)(null),f=(0,N.Yx)(t,u,c.onScrollbarXChange);return(0,l.useEffect)(()=>{u.current&&d(getComputedStyle(u.current))},[u]),(0,n.jsx)(O,{"data-orientation":"horizontal",...i,ref:f,sizes:r,style:{...a,"--sa-thumb-width":`${W(r)}px`},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(c.viewport){let n=c.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{u.current&&c.viewport&&s&&o({content:c.viewport.scrollWidth,viewport:c.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:B(s.paddingLeft),paddingEnd:B(s.paddingRight)}})}})});Z.displayName="@mantine/core/ScrollAreaScrollbarX";let q=(0,l.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:o,style:a,...i}=e,c=E(),[s,d]=(0,l.useState)(),u=(0,l.useRef)(null),f=(0,N.Yx)(t,u,c.onScrollbarYChange);return(0,l.useEffect)(()=>{u.current&&d(window.getComputedStyle(u.current))},[]),(0,n.jsx)(O,{...i,"data-orientation":"vertical",ref:f,sizes:r,style:{"--sa-thumb-height":`${W(r)}px`,...a},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(c.viewport){let n=c.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{u.current&&c.viewport&&s&&o({content:c.viewport.scrollHeight,viewport:c.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:B(s.paddingTop),paddingEnd:B(s.paddingBottom)}})}})});q.displayName="@mantine/core/ScrollAreaScrollbarY";let V=(0,l.forwardRef)((e,t)=>{let{orientation:r="vertical",...o}=e,{dir:a}=(0,M.gm)(),i=E(),c=(0,l.useRef)(null),s=(0,l.useRef)(0),[d,u]=(0,l.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),f=Y(d.viewport,d.content),p={...o,sizes:d,onSizesChange:u,hasThumb:!!(f>0&&f<1),onThumbChange:e=>{c.current=e},onThumbPointerUp:()=>{s.current=0},onThumbPointerDown:e=>{s.current=e}},h=(e,t)=>(function(e,t,r,n="ltr"){let o=W(r),l=t||o/2,a=r.scrollbar.paddingStart+l,i=r.scrollbar.size-r.scrollbar.paddingEnd-(o-l),c=r.content-r.viewport;return I([a,i],"ltr"===n?[0,c]:[-1*c,0])(e)})(e,s.current,d,t);return"horizontal"===r?(0,n.jsx)(Z,{...p,ref:t,onThumbPositionChange:()=>{if(i.viewport&&c.current){let e=X(i.viewport.scrollLeft,d,a);c.current.style.transform=`translate3d(${e}px, 0, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=h(e,a))}}):"vertical"===r?(0,n.jsx)(q,{...p,ref:t,onThumbPositionChange:()=>{if(i.viewport&&c.current){let e=X(i.viewport.scrollTop,d);0===d.scrollbar.size?c.current.style.opacity="0":c.current.style.opacity="1",c.current.style.transform=`translate3d(0, ${e}px, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=h(e))}}):null});V.displayName="@mantine/core/ScrollAreaScrollbarVisible";let G=(0,l.forwardRef)((e,t)=>{let r=E(),{forceMount:o,...a}=e,[i,c]=(0,l.useState)(!1),s="horizontal"===e.orientation,d=z(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;c(s?e:t)}},10);return(A(r.viewport,d),A(r.content,d),o||i)?(0,n.jsx)(V,{"data-state":i?"visible":"hidden",...a,ref:t}):null});G.displayName="@mantine/core/ScrollAreaScrollbarAuto";let J=(0,l.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,a=E(),[i,c]=(0,l.useState)(!1);return((0,l.useEffect)(()=>{let{scrollArea:e}=a,t=0;if(e){let r=()=>{window.clearTimeout(t),c(!0)},n=()=>{t=window.setTimeout(()=>c(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[a.scrollArea,a.scrollHideDelay]),r||i)?(0,n.jsx)(G,{"data-state":i?"visible":"hidden",...o,ref:t}):null});J.displayName="@mantine/core/ScrollAreaScrollbarHover";let K=(0,l.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,a=E(),i="horizontal"===e.orientation,[c,s]=(0,l.useState)("hidden"),d=z(()=>s("idle"),100);return((0,l.useEffect)(()=>{if("idle"===c){let e=window.setTimeout(()=>s("hidden"),a.scrollHideDelay);return()=>window.clearTimeout(e)}},[c,a.scrollHideDelay]),(0,l.useEffect)(()=>{let{viewport:e}=a,t=i?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t];r!==n&&(s("scrolling"),d()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[a.viewport,i,d]),r||"hidden"!==c)?(0,n.jsx)(V,{"data-state":"hidden"===c?"hidden":"visible",...o,ref:t,onPointerEnter:U(e.onPointerEnter,()=>s("interacting")),onPointerLeave:U(e.onPointerLeave,()=>s("idle"))}):null}),Q=(0,l.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,a=E(),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:c}=a,s="horizontal"===e.orientation;return(0,l.useEffect)(()=>(s?i(!0):c(!0),()=>{s?i(!1):c(!1)}),[s,i,c]),"hover"===a.type?(0,n.jsx)(J,{...o,ref:t,forceMount:r}):"scroll"===a.type?(0,n.jsx)(K,{...o,ref:t,forceMount:r}):"auto"===a.type?(0,n.jsx)(G,{...o,ref:t,forceMount:r}):"always"===a.type?(0,n.jsx)(V,{...o,ref:t}):null});Q.displayName="@mantine/core/ScrollAreaScrollbar";let ee=(0,l.forwardRef)((e,t)=>{let{style:r,...o}=e,a=E(),i=F(),{onThumbPositionChange:c}=i,s=(0,N.Yx)(t,e=>i.onThumbChange(e)),d=(0,l.useRef)(),u=z(()=>{d.current&&(d.current(),d.current=void 0)},100);return(0,l.useEffect)(()=>{let{viewport:e}=a;if(e){let t=()=>{if(u(),!d.current){let t=function(e,t=()=>{}){let r={left:e.scrollLeft,top:e.scrollTop},n=0;return function o(){let l={left:e.scrollLeft,top:e.scrollTop},a=r.left!==l.left,i=r.top!==l.top;(a||i)&&t(),r=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)}(e,c);d.current=t,c()}};return c(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[a.viewport,u,c]),(0,n.jsx)("div",{"data-state":i.hasThumb?"visible":"hidden",...o,ref:s,style:{width:"var(--sa-thumb-width)",height:"var(--sa-thumb-height)",...r},onPointerDownCapture:U(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;i.onThumbPointerDown({x:r,y:n})}),onPointerUp:U(e.onPointerUp,i.onThumbPointerUp)})});ee.displayName="@mantine/core/ScrollAreaThumb";let et=(0,l.forwardRef)((e,t)=>{let{forceMount:r,...o}=e,l=F();return r||l.hasThumb?(0,n.jsx)(ee,{ref:t,...o}):null});et.displayName="@mantine/core/ScrollAreaThumb";let er=(0,l.forwardRef)(({children:e,style:t,...r},o)=>{let l=E(),a=(0,N.Yx)(o,l.onViewportChange);return(0,n.jsx)(u.x,{...r,ref:a,style:{overflowX:l.scrollbarXEnabled?"scroll":"hidden",overflowY:l.scrollbarYEnabled?"scroll":"hidden",...t},children:(0,n.jsx)("div",{style:{minWidth:"100%",display:"table"},ref:l.onContentChange,children:e})})});er.displayName="@mantine/core/ScrollAreaViewport";var en={root:"m_d57069b5",viewport:"m_c0783ff9",viewportInner:"m_f8f631dd",scrollbar:"m_c44ba933",thumb:"m_d8b5e363",corner:"m_21657268"};let eo={scrollHideDelay:1e3,type:"hover",scrollbars:"xy"},el=(0,i.Z)((e,{scrollbarSize:t})=>({root:{"--scrollarea-scrollbar-size":(0,o.h)(t)}})),ea=(0,f.d5)((e,t)=>{let r=(0,s.w)("ScrollArea",eo,e),{classNames:o,className:a,style:i,styles:c,unstyled:u,scrollbarSize:f,vars:p,type:h,scrollHideDelay:m,viewportProps:w,viewportRef:v,onScrollPositionChange:b,children:y,offsetScrollbars:x,scrollbars:g,onBottomReached:S,onTopReached:C,...T}=r,[j,R]=(0,l.useState)(!1),E=(0,d.y)({name:"ScrollArea",props:r,classes:en,className:a,style:i,classNames:o,styles:c,unstyled:u,vars:p,varsResolver:el});return(0,n.jsxs)(H,{type:"never"===h?"always":h,scrollHideDelay:m,ref:t,scrollbars:g,...E("root"),...T,children:[(0,n.jsx)(er,{...w,...E("viewport",{style:w?.style}),ref:v,"data-offset-scrollbars":!0===x?"xy":x||void 0,"data-scrollbars":g||void 0,onScroll:e=>{w?.onScroll?.(e),b?.({x:e.currentTarget.scrollLeft,y:e.currentTarget.scrollTop});let{scrollTop:t,scrollHeight:r,clientHeight:n}=e.currentTarget;t-(r-n)>=0&&S?.(),0===t&&C?.()},children:y}),("xy"===g||"x"===g)&&(0,n.jsx)(Q,{...E("scrollbar"),orientation:"horizontal","data-hidden":"never"===h||void 0,forceMount:!0,onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),children:(0,n.jsx)(et,{...E("thumb")})}),("xy"===g||"y"===g)&&(0,n.jsx)(Q,{...E("scrollbar"),orientation:"vertical","data-hidden":"never"===h||void 0,forceMount:!0,onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),children:(0,n.jsx)(et,{...E("thumb")})}),(0,n.jsx)(L,{...E("corner"),"data-hovered":j||void 0,"data-hidden":"never"===h||void 0})]})});ea.displayName="@mantine/core/ScrollArea";let ei=(0,f.d5)((e,t)=>{let{children:r,classNames:o,styles:l,scrollbarSize:a,scrollHideDelay:i,type:c,dir:d,offsetScrollbars:f,viewportRef:p,onScrollPositionChange:h,unstyled:m,variant:w,viewportProps:v,scrollbars:b,style:y,vars:x,onBottomReached:g,onTopReached:S,...C}=(0,s.w)("ScrollAreaAutosize",eo,e);return(0,n.jsx)(u.x,{...C,ref:t,style:[{display:"flex",overflow:"auto"},y],children:(0,n.jsx)(u.x,{style:{display:"flex",flexDirection:"column",flex:1},children:(0,n.jsx)(ea,{classNames:o,styles:l,scrollHideDelay:i,scrollbarSize:a,type:c,dir:d,offsetScrollbars:f,viewportRef:p,onScrollPositionChange:h,unstyled:m,variant:w,viewportProps:v,vars:x,scrollbars:b,onBottomReached:g,onTopReached:S,children:r})})})});ea.classes=en,ei.displayName="@mantine/core/ScrollAreaAutosize",ei.classes=en,ea.Autosize=ei;let ec={type:"scrollarea"},es=(0,i.Z)((e,{minWidth:t,type:r})=>({scrollContainer:{"--table-min-width":(0,o.h)(t),"--table-overflow":"native"===r?"auto":void 0}})),ed=(0,f.d5)((e,t)=>{let r=(0,s.w)("TableScrollContainer",ec,e),{classNames:o,className:l,style:a,styles:i,unstyled:c,vars:f,children:p,minWidth:h,type:m,...v}=r,b=(0,d.y)({name:"TableScrollContainer",classes:w,props:r,className:l,style:a,classNames:o,styles:i,unstyled:c,vars:f,varsResolver:es,rootSelector:"scrollContainer"});return(0,n.jsx)(u.x,{component:"scrollarea"===m?ea:"div",..."scrollarea"===m?{offsetScrollbars:"x"}:{},ref:t,...b("scrollContainer"),...v,children:(0,n.jsx)("div",{...b("scrollContainerInner"),children:p})})});ed.classes=w,ed.displayName="@mantine/core/TableScrollContainer";let eu={withRowBorders:!0,verticalSpacing:7},ef=(0,i.Z)((e,{layout:t,captionSide:r,horizontalSpacing:n,verticalSpacing:l,borderColor:i,stripedColor:s,highlightOnHoverColor:d,striped:u,highlightOnHover:f,stickyHeaderOffset:p,stickyHeader:h})=>({table:{"--table-layout":t,"--table-caption-side":r,"--table-horizontal-spacing":(0,a.bG)(n),"--table-vertical-spacing":(0,a.bG)(l),"--table-border-color":i?(0,c.p)(i,e):void 0,"--table-striped-color":u&&s?(0,c.p)(s,e):void 0,"--table-highlight-on-hover-color":f&&d?(0,c.p)(d,e):void 0,"--table-sticky-header-offset":h?(0,o.h)(p):void 0}})),ep=(0,f.d5)((e,t)=>{let r=(0,s.w)("Table",eu,e),{classNames:o,className:l,style:a,styles:i,unstyled:c,vars:f,horizontalSpacing:p,verticalSpacing:m,captionSide:v,stripedColor:b,highlightOnHoverColor:y,striped:x,highlightOnHover:g,withColumnBorders:S,withRowBorders:C,withTableBorder:T,borderColor:R,layout:E,variant:D,data:P,children:A,stickyHeader:_,stickyHeaderOffset:L,mod:N,...k}=r,H=(0,d.y)({name:"Table",props:r,className:l,style:a,classes:w,classNames:o,styles:i,unstyled:c,rootSelector:"table",vars:f,varsResolver:ef});return(0,n.jsx)(h,{value:{getStyles:H,stickyHeader:_,striped:!0===x?"odd":x||void 0,highlightOnHover:g,withColumnBorders:S,withRowBorders:C,captionSide:v||"bottom"},children:(0,n.jsx)(u.x,{component:"table",variant:D,ref:t,mod:[{"data-with-table-border":T},N],...H("table"),...k,children:A||!!P&&(0,n.jsx)(j,{data:P})})})});ep.classes=w,ep.displayName="@mantine/core/Table",ep.Td=y,ep.Th=b,ep.Tr=x,ep.Thead=g,ep.Tbody=S,ep.Tfoot=C,ep.Caption=T,ep.ScrollContainer=ed,ep.DataRenderer=j},4349:function(e,t,r){r.d(t,{R:function(){return d}});var n={};r.r(n),r.d(n,{MDXProvider:function(){return s},useMDXComponents:function(){return c}}),"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var o=r(7294),l=r(2746);let a={},i=o.createContext(a);function c(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),o.createElement(i.Provider,{value:t},e.children)}function d({compiledSource:e,frontmatter:t,scope:r,components:a={},lazy:i}){let[c,d]=(0,o.useState)(!i||"undefined"==typeof window);(0,o.useEffect)(()=>{if(i){let e=window.requestIdleCallback(()=>{d(!0)});return()=>window.cancelIdleCallback(e)}},[]);let u=(0,o.useMemo)(()=>{let o=Object.assign({opts:{...n,...l.jsxRuntime}},{frontmatter:t},r),a=Object.keys(o),i=Object.values(o),c=Reflect.construct(Function,a.concat(`${e}`));return c.apply(c,i).default},[r,e]);if(!c)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let f=o.createElement(s,{components:a},o.createElement(u,null));return i?o.createElement("div",null,f):f}},4336:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(885).Z)("outline","arrow-narrow-left","IconArrowNarrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l4 4",key:"svg-1"}],["path",{d:"M5 12l4 -4",key:"svg-2"}]])}}]);