(self.webpackChunk=self.webpackChunk||[]).push([[4224],{64224:(e,t,n)=>{n.d(t,{X:()=>r,Y:()=>D});var r,o=n(45115),i=n(46504),a=n(38569),l=n(15384),u=n(63335),c=n(80673),s=n(49231),d=n(87404),p=n(39953),m=n(36072),g=n(25770),f=n(99627),h=n(43818),x=n(88546),y=n(65647),v=n(60841),_=n(8748),b=n(14765),S=n(90049),k=n(65882),H=n(78488),T=n(859),C=n(58303),B=n(6889),w=n(82337),W=n(15498),L=n(38739),E=n(88787),N=n(98958),z=n(79115);!function(e){e.button="button",e.link="a",e.div="div"}(r||(r={}));var I,D=function(e){var t,n=e.name,d=e.tag,h=e.title,B=e.titleAlign,E=e.active,Z=e.animationMode,F=e.styleType,R=e.textPosition,M=e.onClick,U=e.role,j=e.children,A=e.type,O=void 0===A?"button":A,X=(0,l._)(e,["name","tag","title","titleAlign","active","animationMode","styleType","textPosition","onClick","role","children","type"]),Y=s.useContext(w.f.Context),K=g.h.create(!1),J=g.h.create(!1),Q=g.h.create(!1),q=g.h.create(!1),V=new m.xQ,ee=x.Dx(n).pipe(y.U((function(e){return void 0!==Y.name?"".concat(Y.name,"/").concat(e):e}))),te={hovered:void 0!==Y.hovered?g.h.combine(Y.hovered,J,T.or):J,disabled:Q,active:q},ne=ee.pipe(v.w((function(e){var t,n,r,i=void 0!==M?(t=M,n=function(e){return K.set(e)},r=function(e){return J.set(e)},Q.pipe(y.U((function(e){return i=(0,o._)((function(o){return(0,c.Jh)(this,(function(i){switch(i.label){case 0:if(o.stopPropagation(),e)return[2];n(!0),i.label=1;case 1:return i.trys.push([1,,3,4]),r(!1),[4,t(o)];case 2:return[2,i.sent()];case 3:return n(!1),[7];case 4:return[2]}}))})),function(e){return i.apply(this,arguments)};var i})))):_.E;return i.pipe(y.U((function(t){return function(n){var r;return D._log.debug("Button clicked: "+e),null===(r=t)||void 0===r?void 0:r(n).catch((function(t){return D._log.error("Button click failed: "+e,t)}))}})))})),b.O(void 0)),re=(0,p.zG)(C.ij(R),C.wp((function(){return I.parseFromNodes(j)})),C.FS),oe=Boolean(d)?d:void 0!==X.href?r.link:r.button,ie=(0,a._)((0,i._)({},X),{styleType:F,role:null!=U?U:oe===r.button?void 0:"button",onClick:ne,onMouseOver:function(e){var t,n;J.set(!0),null===(t=(n=X).onMouseOver)||void 0===t||t.call(n,e)},onMouseLeave:function(e){var t,n;J.set(!1),null===(t=(n=X).onMouseLeave)||void 0===t||t.call(n,e)},onMouseDown:function(e){var t=e.pageX,n=e.pageY;return V.next({pageX:t,pageY:n})},"data-name":ee,"data-disabled":te.disabled,"data-active":te.active,"data-hovered":te.hovered,"data-textpos":re,"aria-pressed":E,children:Boolean(Z)&&Z!==W.m.None?function(e){return Array.isArray(e)?[].concat.apply([],e):[e]}(j).concat(s.createElement(W.H,{key:"ripple",animationMode:null!=Z?Z:W.m.FromClickPoint,mouseDownEvents:V})):j,tabIndex:void 0!==X.tabIndex?X.tabIndex:(t=Q,"boolean"==typeof t?(0,p.zG)(t,P):(0,p.zG)(t,y.U(P))),disabled:te.disabled}),ae=function(){return void 0!==X.href&&oe===r.link?s.createElement(G,(0,i._)((0,a._)((0,i._)({tag:r.link},ie),{href:X.href,target:X.target,rel:X.rel}),(0,f.Sh)(z.lH,X.className))):d===r.div?s.createElement(G,(0,a._)((0,i._)({tag:r.div},ie),{onKeyDown:$,className:X.className})):s.createElement(G,(0,i._)((0,a._)((0,i._)({tag:r.button},ie),{type:O}),(0,f.Sh)(z.Zw,X.className)))};return N.P.useSubscriptionTo(S.T(k.aj([x.Dx(X.disabled).pipe(y.U(Boolean)),K]).pipe(y.U((function(e){var t=(0,u._)(e,2),n=t[0],r=t[1];return n||r})),H.b(x.wW(Q))),x.Dx(E).pipe(y.U(Boolean),H.b(x.wW(q))))),s.createElement(w.f.Context.Provider,{value:te},null!=h?s.createElement(L.u,{title:h,align:Boolean(B)?B:"auto"},ae()):ae())};function G(e){var t=e.tag,n=e.styleType,r=(0,l._)(e,["tag","styleType"]),o=h.F[t];return null!=n?s.createElement(E.Z,(0,i._)({styleType:n,nodeType:t},r)):s.createElement(o,r)}function P(e){return e?-1:0}function $(e){" "!==e.key&&"Enter"!==e.key||(e.target.click(),e.preventDefault())}D.__logSingleton={__logger:void 0,get _log(){return void 0===D.__logSingleton.__logger&&(D.__logSingleton.__logger=B.C8.Logging.getLogger("Button")),D.__logSingleton.__logger}},D._log=D.__logSingleton._log,function(e){var t=new Map([["+","everywhere"],["++","everywhere"],["+-","left"],["-+","right"],["+++","everywhere"],["+-+","everywhere"],["++-","left"],["-++","right"],["-+-","surrounded"]]),n=function(e){return e.map((function(e){return"string"==typeof e?"+":"-"})).join("")};e.parseFromNodes=function(e){var r=d.isElement(e)?e.props.children:e,o=n(Array.isArray(r)?r:[r]);return C.ij(t.get(o))}}(I||(I={}))},79115:(e,t,n)=>{n.d(t,{$H:()=>B,BD:()=>k,HN:()=>w,LI:()=>v,Mp:()=>_,T:()=>p,T$:()=>S,UF:()=>C,Zw:()=>y,bC:()=>N,fk:()=>T,ix:()=>H,lH:()=>W,oc:()=>E,ru:()=>L,vD:()=>b});var r,o=n(21101),i=n(46504),a=n(38569),l=n(24822),u=n(82919),c=n(14709),s=n(19191),d=n(84680),p=function(e){return(0,a._)((0,i._)({},e.default),{$nest:(0,i._)({"&:not([data-disabled='true'])[data-hovered='true']":(0,i._)({},e.hovered),"&[data-disabled='true']":(0,i._)({},e.disabled),"&:not([data-disabled='true']):active":(0,i._)({},e.clicked),"&[data-active='true']":(0,i._)({},e.toggled),"&[hidden]":(0,i._)({},e.hidden)},d.f5.focusOutline())})},m=function(e,t){return{$nest:{"&[data-textpos='left']":{padding:"0 ".concat(t," 0 ").concat(e)},"&[data-textpos='right']":{padding:"0 ".concat(e," 0 ").concat(t)},"&[data-textpos='everywhere']":{padding:"0 ".concat(e," 0 ").concat(e)}}}},g={minHeight:"auto",minWidth:d.ux.rem(l.Ze)},f=function(e,t,n,r){return{$nest:{"& > svg:last-of-type":{marginInlineEnd:d.ux.rem(l.F2)},"& > svg:first-of-type":{marginInlineStart:d.ux.rem(l.F2)},"& > i":(0,i._)({stroke:d.ux.important(e),fill:Boolean(r)?d.ux.important(e):void 0},g),'& > i[data-hovered="true"]':null!=t?{stroke:d.ux.important(t),fill:Boolean(r)?d.ux.important(t):void 0}:{},'& > i[data-active="true"]':null!=n?{stroke:d.ux.important(n),fill:Boolean(r)?d.ux.important(n):void 0}:{}}}},h={borderRadius:d.ux.rem(u.xB)},x=p({default:{position:"relative",display:"inline-block",overflow:"hidden",padding:0,outline:"none",border:0,backgroundColor:"transparent",verticalAlign:"middle",whiteSpace:"nowrap",cursor:"default",userSelect:"none",$nest:{"& > i":g}},hovered:{cursor:"pointer"},disabled:{opacity:.4,cursor:"not-allowed",$nest:{'& > i[data-disabled="true"]':{fill:"inherit",stroke:"inherit"}}},clicked:{},toggled:{},hidden:{display:"none"}}),y=d.ux.style({cursor:"pointer",border:"none",margin:0,padding:0,width:"auto",overflow:"visible",appearance:"none",fontFamily:"inherit","-webkit-font-smoothing":"inherit","-moz-osx-font-smoothing":"inherit","-webkit-appearance":"none","-moz-appearance":"none",$nest:{"&::-moz-focus-inner":{border:0,padding:0}}}),v=d.ux.style(x),_=d.ux.style(x,h,p({default:{padding:"0 ".concat(d.ux.rem(l.x)),backgroundColor:"transparent",color:c.I.Background.Brand.Default,lineHeight:d.ux.rem(l.Ze),transition:"background-color .2s"},hovered:{backgroundColor:s.NeutralGray0},disabled:{},clicked:{transition:"none",transform:"scale(1)"},toggled:{},hidden:{}})),b=d.ux.style({display:"inline-flex"}),S=d.ux.style(x,h,m(d.ux.rem(l.x),0),p({default:{display:"inline-flex",alignItems:"center",justifyContent:"center",backgroundColor:c.I.Background.Brand.Default,color:c.I.Text.Base.Inverse,lineHeight:d.ux.rem(l.Ze),transitionDuration:".2s",minHeight:d.ux.rem(l.Ze),minWidth:d.ux.rem(l.Ze)},hovered:{backgroundColor:s.Green80},disabled:{},clicked:{},toggled:{backgroundColor:s.Green90},hidden:{}}),f(c.I.Text.Base.Inverse)),k=d.ux.style(x,h,m(d.ux.rem(l.x),0),p({default:{display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",backgroundColor:"transparent",color:c.I.Background.Brand.Default,lineHeight:d.ux.rem(l.Ze),transitionDuration:".2s",fontWeight:400,border:"1px solid ".concat(c.I.Background.Brand.Default),minHeight:d.ux.rem(l.Ze),minWidth:d.ux.rem(l.Ze)},hovered:{backgroundColor:s.Green0,color:s.Green90},disabled:{},clicked:{},toggled:{backgroundColor:s.Green10,color:s.Green80},hidden:{}}),f(c.I.Background.Brand.Default)),H=d.ux.style(x,{$nest:(r={},(0,o._)(r,".".concat(b," &"),{padding:"0 ".concat(d.ux.rem(l.x)),marginRight:d.ux.px(2),borderRadius:0,$nest:{"&:first-of-type":{borderRadius:"".concat(d.ux.rem(u.xB)," 0 0 ").concat(d.ux.rem(u.xB))},"&:last-of-type":{marginRight:0,borderRight:"none",borderRadius:"0 ".concat(d.ux.rem(u.xB)," ").concat(d.ux.rem(u.xB)," 0")}}}),(0,o._)(r,".".concat(b," &:not([data-active='true'])"),{backgroundColor:s.NeutralGray10}),r)},p({default:{padding:"0 ".concat(d.ux.rem(l.x)),borderRadius:d.ux.rem(u.xB),backgroundColor:s.NeutralGray10,color:c.I.Background.Brand.Default,textTransform:"capitalize",letterSpacing:0,fontSize:d.ux.rem(.875),lineHeight:d.ux.rem(l.Ze),transitionDuration:".2s"},hovered:{backgroundColor:s.NeutralGray20},toggled:{backgroundColor:c.I.Background.Brand.Default,color:c.I.Text.Base.Inverse,$nest:{"&:hover":{backgroundColor:s.Green80,color:c.I.Text.Base.Inverse}}},disabled:{},clicked:{},hidden:{}})),T=d.ux.style(x,h,m(d.ux.rem(l.x),0),p({default:{display:"inline-flex",color:s.Green60,lineHeight:d.ux.rem(l.Ze),transitionDuration:".2s",transitionProperty:"border, background, color",flexWrap:"wrap",alignItems:"center",justifyContent:"center",minHeight:d.ux.rem(l.Ze),minWidth:d.ux.rem(l.Ze)},hovered:{background:s.Green80,color:s.White},disabled:{},clicked:{},toggled:{background:s.Green90,color:s.White},hidden:{}}),{$nest:(0,a._)((0,i._)({},f(s.NeutralGray60,s.White,s.White).$nest),{"&[data-textpos] i[data-role='icon']":{margin:"".concat(d.ux.rem(-.1)," ").concat(d.ux.rem(.25)," 0 0")}})}),C=d.ux.style(x,h,m(d.ux.rem(l.x),0),p({default:{display:"inline-flex",color:c.I.Background.Neutral.Default,lineHeight:d.ux.rem(l.Ze),transitionDuration:".2s",transitionProperty:"border, background, color",flexWrap:"wrap",alignItems:"center",justifyContent:"center",minHeight:d.ux.rem(l.Ze),minWidth:d.ux.rem(l.Ze)},hovered:{background:s.NeutralGray10,color:s.NeutralGray80},disabled:{},clicked:{},toggled:{},hidden:{}}),f(s.NeutralGray60)),B=d.ux.style(x,m(d.ux.rem(l.mh),d.ux.rem(l.x)),p({default:{display:"inline-flex",color:s.NeutralGray90,textAlign:"left",fontWeight:"normal",fontSize:d.ux.rem(.875),lineHeight:d.ux.rem(l.Ze),transitionDuration:".2s",alignItems:"center",minHeight:d.ux.rem(l.Ze)},hovered:{backgroundColor:s.NeutralGray10,color:c.I.Background.Brand.Default},disabled:{},clicked:{},toggled:{},hidden:{}}),{$nest:(0,a._)((0,i._)({},f(c.I.Background.Neutral.Default,c.I.Background.Brand.Default).$nest),{"&[data-textpos] i[data-role='icon']":{margin:"".concat(d.ux.rem(-.1)," ").concat(d.ux.rem(.25)," 0 0")}})}),w=d.ux.style(x,h,{display:"flex",margin:"0 ".concat(d.ux.rem(l.x)," ").concat(d.ux.rem(l.x)),padding:"0 ".concat(d.ux.rem(.3)," 0 ").concat(d.ux.rem(l.x)),minHeight:d.ux.rem(l.Ze),color:s.NeutralGray80,textAlign:"left",whiteSpace:"normal",fontWeight:"normal",lineHeight:d.ux.rem(1.2),transition:"background .2s",alignItems:"center",$nest:{"&[data-hovered='true']":{background:s.NeutralGray10},"&[data-active='true']":{background:s.NeutralGray20}}}),W=d.ux.style({textDecoration:"none"}),L=d.ux.style({display:"inline-flex",justifyContent:"space-around",$nest:{"& > *:not(:first-child)":{marginLeft:d.ux.rem(l.x)}}}),E=d.ux.style({display:"inline-flex",flexDirection:"column",$nest:{"& > *":{borderRadius:0}}}),N=d.ux.style({whiteSpace:"pre-line"})},15498:(e,t,n)=>{n.d(t,{H:()=>H,m:()=>r});var r,o=n(36059),i=n(81148),a=n(66664),l=n(21101),u=n(80880),c=n(46504),s=n(38569),d=n(40278),p=n(24134),m=n(49231),g=n(25770),f=n(99627),h=n(43818),x=n(78488),y=n(74857),v=n(65647),_=n(17226),b=n(69888),S=n(82337),k=n(84680);!function(e){e.None="none",e.FromClickPoint="fromClickPoint",e.FromCenter="fromCenter"}(r||(r={}));var H=function(e){(0,u._)(n,e);var t=(0,p._)(n);function n(e,r){var a;return(0,i._)(this,n),a=t.call(this,e),(0,l._)((0,o._)(a),"context",void 0),(0,l._)((0,o._)(a),"_ripples",g.h.create(Array())),(0,l._)((0,o._)(a),"_el",void 0),(0,l._)((0,o._)(a),"_subscription",void 0),(0,l._)((0,o._)(a),"_disabled",g.h.create(!1).view()),a._disabled=void 0===r.disabled?a._disabled:r.disabled,a}return(0,a._)(n,[{key:"componentDidMount",value:function(){var e=this;this._el&&(this._subscription=this.props.mouseDownEvents.pipe(x.b((function(t){if(!e._disabled.get()&&e._el){var n=e._getAnimationStyle(e._el,t);e._ripples.modify((function(e){return(0,d._)(e).concat([n])}))}})),y.b(1e3),x.b((function(){return e._ripples.modify((function(){return[]}))}))).subscribe())}},{key:"componentWillUnmount",value:function(){Boolean(this._subscription)&&this._subscription.unsubscribe()}},{key:"_getAnimationStyle",value:function(e,t){var n=e.getBoundingClientRect(),o=n.width;switch(this.props.animationMode){case r.None:throw new _.ej("unsupported mode, do not mount component if you do not need ripple animation");case r.FromCenter:return(0,s._)((0,c._)({},(0,f.Sh)(W.rippleFromCenter,this.props.className)),{top:(n.height-o)/2,left:0,width:o,height:o});default:return(0,s._)((0,c._)({},(0,f.Sh)(W.ripple,this.props.className)),{top:t.pageY-n.top-o/2,left:t.pageX-n.left-o/2,width:o,height:o})}}},{key:"render",value:function(){var e=this;return m.createElement("span",{className:W.rippleContainer,ref:function(t){return e._el=t}},m.createElement(h.F.span,null,this._ripples.pipe(v.U((function(e){return e.map((function(e,t){return m.createElement("span",{className:e.className,key:t,style:e})}))})))))}}]),n}(m.Component);(0,l._)(H,"contextType",S.f.Context);var T=k.ux.keyframes({to:{opacity:0,transform:"scale(1)"}}),C=k.ux.keyframes({to:{opacity:0,transform:"scale(2)"}}),B={position:"absolute",borderRadius:k.ux.percent(100),backgroundColor:b.Il.CoreNeutral90,opacity:.15,transform:"scale(0)",animation:"".concat(C," .4s")},w={animationName:T},W=k.ux.stylesheet({rippleContainer:[{position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",pointerEvents:"none"}],ripple:[B],rippleFromCenter:[B,w]})},33750:(e,t,n)=>{n.d(t,{G:()=>r});var r,o=n(81148),i=n(66664),a=n(21101),l=n(49231),u=n(39953),c=n(25770),s=n(90049),d=n(64965),p=n(70989),m=n(88546),g=n(55446),f=n(78488),h=n(60841),x=n(8748),y=n(23565),v=n(14946),_=n(69715),b=n(72793),S=n(58303);!function(e){e.genUuid=function(){return b.fg(12)};var t=e.defaultState={visible:!1,content:S.YP},n=e.Context=l.createContext(void 0),k=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.h.create(t),r=this;(0,o._)(this,e),(0,a._)(this,"_state",void 0),(0,a._)(this,"visible",void 0),(0,a._)(this,"content",void 0),(0,a._)(this,"hasContent",void 0),(0,a._)(this,"state",void 0),(0,a._)(this,"show",void 0),(0,a._)(this,"hide",void 0),this._state=n,this.visible=this._state.lens("visible"),this.content=this._state.lens("content"),this.hasContent=this._state.view((function(e){return S.pC(e.content)})),this.state=this._state.view((function(e){return(0,u.zG)(e.content,S.hX((function(){return e.visible})))})),this.show=function(){r.visible.set(!0)},this.hide=function(){r._state.set(t)}}return(0,i._)(e,[{key:"getTooltipObservable",value:function(e,n,o,i){var a=this,l=s.T(d.R(e,"mouseenter"),d.R(e,"focus")),c=s.T(d.R(e,"mouseleave"),d.R(e,"blur")),b=r.genUuid(),k=function(){return a._state.modify((function(e){return(0,u.zG)(e.content,S.Gg((function(e){return e.uuid===b})))?t:e}))};return l.pipe(p.M(m.Dx(n).pipe(g.h(Boolean)),(function(e,t){return t})),f.b((function(t){return a.content.set(S.G({target:e,content:t,alignment:o,uuid:b}))})),h.w((function(){return(0,u.zG)(i,S.g_((function(){return x.E}),(function(e){return y.timer(e)}))).pipe(v.T(c),f.b(k))})),_.x(k))}}]),e}();e.Impl=k;e.DefaultProvider=function(e){var t=e.children;return l.createElement(n.Provider,{value:new k},t)}}(r||(r={}))},38739:(e,t,n)=>{n.d(t,{u:()=>g});var r=n(36059),o=n(81148),i=n(66664),a=n(21101),l=n(80880),u=n(24134),c=n(49231),s=n(64151),d=n(11249),p=n(58303),m=n(33750),g=function(e){(0,l._)(n,e);var t=(0,u._)(n);function n(){var e;return(0,o._)(this,n),e=t.apply(this,arguments),(0,a._)((0,r._)(e),"context",void 0),(0,a._)((0,r._)(e),"_subs",new d.w.Keeper),(0,a._)((0,r._)(e),"_attachEvents",(function(t){e._subs.push(e.context.getTooltipObservable(s.findDOMNode(e),t.title,null!=t.align?t.align:"auto",p.ij(t.duration)).subscribe())})),e}return(0,i._)(n,[{key:"componentDidMount",value:function(){this._attachEvents(this.props)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this._subs.dispose(),this._attachEvents(e)}},{key:"componentWillUnmount",value:function(){this._subs.dispose()}},{key:"render",value:function(){return c.Children.only(this.props.children)}}]),n}(c.Component);(0,a._)(g,"contextType",m.G.Context)},88787:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(46504),o=n(38569),i=n(15384),a=n(49231),l=n(43818),u=n(99627),c=n(88546),s=n(65647),d=n(18733);function p(e){var t=e.nodeType,n=e.styleType,d=e.className,m=e.mount,g=(0,i._)(e,["nodeType","styleType","className","mount"]),f=l.F[t],h=c.Dx(n).pipe(s.U((function(e){return p.style[e]})));return a.createElement(f,(0,o._)((0,r._)({},(0,u.Sh)(h,d),g),{mount:m}))}!function(e){e.style=d;!function(e){e.H1="header1",e.H2="header2",e.H3="header3",e.H3Legacy="header3legacy",e.H4="header4",e.H5="header5",e.Paper="paper",e.Base="base",e.Small="small",e.SmallLight="smallLight",e.Lawyer="lawyer",e.Title="title",e.Button="button",e.Score="score",e.P1="p1"}(e.Type||(e.Type={}));e.H1=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.H1,nodeType:"h1"},e))},e.H2=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.H2,nodeType:"h2"},e))},e.H3=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.H3,nodeType:"h3"},e))},e.H3Legacy=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.H3Legacy,nodeType:"h3"},e))},e.H4=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.H4,nodeType:"h4"},e))},e.H5=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.H5,nodeType:"h5"},e))},e.Paper=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.Paper,nodeType:"span"},e))},e.Base=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.Base,nodeType:"div"},e))},e.Small=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.Small,nodeType:"small"},e))},e.SmallLight=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.SmallLight,nodeType:"div"},e))},e.Lawyer=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.Lawyer,nodeType:"span"},e))},e.Title=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.Title,nodeType:"div"},e))},e.Button=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.Button,nodeType:"div"},e))},e.Score=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.Score,nodeType:"div"},e))},e.P1=function(e){return a.createElement(p,(0,r._)({styleType:p.Type.P1,nodeType:"div"},e))}}(p||(p={}))},18733:(e,t,n)=>{n.r(t),n.d(t,{base:()=>p,button:()=>c,header1:()=>i,header2:()=>a,header3:()=>l,header3legacy:()=>u,header4:()=>s,header5:()=>v,lawyer:()=>h,p1:()=>y,paper:()=>d,score:()=>f,small:()=>m,smallLight:()=>g,title:()=>x});var r=n(69888),o=n(84680),i=o.ux.style({margin:0,color:r.xv.H1Color,letterSpacing:r.xv.H1LetterSpacing,fontWeight:r.xv.H1Weight,fontSize:o.ux.rem(r.xv.H1Size),lineHeight:o.ux.rem(r.xv.H1LineHeight)}),a=o.ux.style({margin:0,color:r.xv.H2Color,textTransform:"capitalize",letterSpacing:r.xv.H2LetterSpacing,fontWeight:r.xv.H2Weight,fontSize:o.ux.rem(r.xv.H2Size),lineHeight:o.ux.rem(r.xv.H2LineHeight)}),l=o.ux.style({margin:0,color:r.xv.H3Color,letterSpacing:o.ux.rem(r.xv.H3LetterSpacing),fontWeight:r.xv.H3Weight,fontSize:o.ux.rem(r.xv.H3Size),lineHeight:o.ux.rem(r.xv.H3LineHeight)}),u=o.ux.style({margin:0,color:r.Il.CoreNeutral50,textTransform:"uppercase",letterSpacing:o.ux.rem(.04625),fontWeight:700,fontSize:o.ux.rem(.6875),lineHeight:o.ux.rem(1.5)}),c=o.ux.style({margin:0,color:r.xv.ButtonColor,letterSpacing:o.ux.rem(r.xv.ButtonLetterSpacing),fontWeight:r.xv.ButtonWeight,fontSize:o.ux.rem(r.xv.ButtonSize),lineHeight:o.ux.rem(r.xv.ButtonLineHeight)}),s=o.ux.style({margin:0,color:r.xv.H4Color,letterSpacing:o.ux.rem(r.xv.H4LetterSpacing),fontWeight:r.xv.H4Weight,fontSize:o.ux.rem(r.xv.H4Size),lineHeight:o.ux.rem(r.xv.H4LineHeight)}),d=o.ux.style({color:r.xv.PaperColor,letterSpacing:o.ux.rem(r.xv.PaperLetterSpacing),fontWeight:r.xv.PaperWeight,fontSize:o.ux.rem(r.xv.PaperSize),lineHeight:o.ux.rem(r.xv.PaperLineHeight)}),p=o.ux.style({color:r.xv.BodyColor,letterSpacing:o.ux.rem(r.xv.BodyLetterSpacing),fontWeight:r.xv.BodyWeight,fontSize:o.ux.rem(r.xv.BodySize),lineHeight:o.ux.rem(r.xv.BodyLineHeight)}),m=o.ux.style({color:r.xv.SmallColor,letterSpacing:o.ux.rem(r.xv.SmallLetterSpacing),fontWeight:r.xv.SmallWeight,fontSize:o.ux.rem(r.xv.SmallSize),lineHeight:o.ux.rem(r.xv.SmallLineHeight)}),g=o.ux.style({color:r.xv.SmallLightColor,letterSpacing:o.ux.rem(r.xv.SmallLightLetterSpacing),fontWeight:r.xv.SmallLightWeight,fontSize:o.ux.rem(r.xv.SmallLightSize),lineHeight:o.ux.rem(r.xv.SmallLightLineHeight)}),f=o.ux.style({color:r.xv.ScoreColor,letterSpacing:o.ux.rem(r.xv.ScoreLetterSpacing),fontWeight:r.xv.ScoreWeight,fontSize:o.ux.rem(r.xv.ScoreSize),lineHeight:o.ux.rem(r.xv.ScoreLineHeight)}),h=o.ux.style({color:r.Il.CoreNeutral70,letterSpacing:".1px",fontWeight:400,fontSize:o.ux.rem(.6875),lineHeight:o.ux.rem(1)}),x=o.ux.style({color:r.Il.CoreNeutral90,textTransform:"uppercase",letterSpacing:".8px",fontWeight:700,fontSize:o.ux.rem(.75),lineHeight:o.ux.rem(2)}),y=o.ux.style({color:r.Il.CoreNeutral90,letterSpacing:0,fontSize:o.ux.rem(.9375),lineHeight:o.ux.rem(1.5)}),v=o.ux.style({margin:0,color:r.Il.CoreNeutral50,textTransform:"uppercase",letterSpacing:o.ux.rem(.04625),fontWeight:400,fontSize:o.ux.rem(.5625),lineHeight:o.ux.rem(1)})},41381:(e,t)=>{var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,g=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118,v=n?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e.type){case s:case d:case i:case l:case a:case m:return e;default:switch(e&&e.$$typeof){case c:case p:case u:return e;default:return t}}case h:case f:case o:return t}}}function b(e){return _(e)===d}t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}},87404:(e,t,n)=>{e.exports=n(41381)}}]);