(self.webpackChunk=self.webpackChunk||[]).push([[3938],{61145:(t,e,n)=>{n.d(e,{t:()=>R});var o,r=n(21101),i=n(46504),a=n(38569),c=n(15384),u=n(63335),l=n(49231),p=n(90023),s=n(39953),f=n(43818),h=n(99627),d=n(65647),m=n(88546),g=n(65882),y=n(60165),b=n(59833),x=n(38538),v=n(56164),U=n(40474),S=n(17226),L=n(58303),P=n(12518),_=n(47713);!function(t){var e,n=function(t,n){var o=n.position,r=n.point,a={width:Math.trunc(t.width),height:Math.trunc(t.height)};return U.UL.validate(e.match((function(){return(0,i._)({top:r.y,right:r.x,bottom:r.y+a.height,left:r.x-a.width},a)}),(function(){return(0,i._)({top:r.y-a.height,right:r.x,bottom:r.y,left:r.x-a.width},a)}),(function(){return(0,i._)({top:r.y-a.height,right:r.x+a.width,bottom:r.y,left:r.x},a)}),(function(){return(0,i._)({top:r.y,right:r.x+a.width,bottom:r.y+a.height,left:r.x},a)}))(o))},r=function(t){return l(U.UL.Point.normalize({x:t.left,y:t.top}))};!function(t){t.topLeft="topLeft",t.topRight="topRight",t.bottomRight="bottomRight",t.bottomLeft="bottomLeft"}(e=t.Position||(t.Position={})),(e=t.Position||(t.Position={})).match=function(t,n,o,r){return function(i){switch(i){case e.topRight:return t();case e.bottomRight:return n();case e.bottomLeft:return o();case e.topLeft:return r();default:return(0,S.vE)(i)}}};var a,c,l=t.topLeft=function(t){return{position:e.topLeft,point:U.UL.Point.normalize(t)}},p=t.topRight=function(t){return{position:e.topRight,point:U.UL.Point.normalize(t)}},f=t.bottomRight=function(t){return{position:e.bottomRight,point:U.UL.Point.normalize(t)}},h=t.bottomLeft=function(t){return{position:e.bottomLeft,point:U.UL.Point.normalize(t)}};t.relativeTo=function(t,e){return{position:t.position,point:U.UL.Point.relativeTo(t.point,e)}},t.empty=l(U.UL.Point.empty);t.toRect=n,t.fromRect=r,t.inRect=function(t,e){var n=e.point;return U.UL.hasPoint(t,n)},t.toCss=function(t){var n=t.position,o=t.point;return e.match((function(){return{top:o.y,right:o.x}}),(function(){return{right:o.x,bottom:o.y}}),(function(){return{bottom:o.y,left:o.x}}),(function(){return{top:o.y,left:o.x}}))(n)},function(t){t.create=function(t,e){return(0,S.kG)(t.point.x===e.point.x||t.point.y===e.point.y,"can not form Zone without a common dimension",(function(){return JSON.stringify({a:t,b:e})})),[t,e]};t.bySide=function(t,e){return U.UL.Side.match((function(){return a.create(h({x:Math.ceil(e.left),y:Math.ceil(e.top)}),f({x:Math.floor(e.right),y:Math.ceil(e.top)}))}),(function(){return a.create(l({x:Math.floor(e.right),y:Math.ceil(e.top)}),h({x:Math.floor(e.right),y:Math.floor(e.bottom)}))}),(function(){return a.create(l({x:Math.ceil(e.left),y:Math.floor(e.bottom)}),p({x:Math.floor(e.right),y:Math.floor(e.bottom)}))}),(function(){return a.create(p({x:Math.ceil(e.left),y:Math.ceil(e.top)}),f({x:Math.ceil(e.left),y:Math.floor(e.bottom)}))}))(t)}}(a=t.Zone||(t.Zone={})),function(t){t.byAxis=function(t,e){return x.sQ((0,v.mL)(),b.IX)(U.UL.Axis.toSides(t).map((function(t){return[t,a.bySide(t,e)]})))}}(t.Variants||(t.Variants={})),function(t){t.empty={quality:0,point:o.empty};function e(t,e){return(0,s.zG)(U.UL.intersection(t,e),L.UI((function(t){var n=t.width/e.width,o=t.height/e.height,r=(Number.isNaN(n)?0:n/2)+(Number.isNaN(o)?0:o/2);return(0,S.kG)(r>=0,"quality can not be negavite: ".concat(r)),(0,S.kG)(r<=1,"quality can be higher than 1: ".concat(r)),r})))}t.qualityOfIntersection=e,t.byViewport=function(t,n){return{quality:(0,s.zG)(e(t,n),L.fS((function(){return 0})))+(0,s.zG)(U.UL.scale(2,n),P.chain(U.UL.normalize),L.Uo,L.tS((function(n){return e(t,n)})),L.fS((function(){return 0}))),point:r(n)}},t.fromZone=function(t,e,o){return(0,s.zG)(b.IX.traverse(P.either)(o,(function(t){return n(e,t)})),P.chain((function(t){var e=(0,u._)(t,2),n=e[0],o=e[1];return U.UL.join(n,o)})),P.chain((function(t){return U.xu.placeIntoRect(e,t)})),P.map((function(e){return e.map((function(e){return c.byViewport(t,e)}))})))}}(c=t.Qualified||(t.Qualified={})),function(t){t.build=function(t,e,n){return(0,s.zG)(n,x.UI((function(n){return c.fromZone(t,e,n)})))}}(t.QualifiedVariants||(t.QualifiedVariants={})),function(t){var e;!function(t){t[t.left=0]="left",t[t.middle=1]="middle",t[t.right=2]="right",t[t.edges=20]="edges",t[t.any=210]="any"}(e=t.Placement||(t.Placement={}));t.takeBy=function(t,e){return function(n){return(0,s.zG)(n,x.To({point:c.empty,side:t},(function(n,o,r){return(0,s.zG)(r,P.map((function(r){return r.filter((function(o,r){return e.toString().includes(r.toString())&&t===n})).reduce((function(t,e){return e.quality>t.point.quality?{point:e,side:n}:t}),o)})),_.MH)}))).point}};var n=t.preferBy=function(t,e){return function(n){return(0,s.zG)(n,x.To({point:c.empty,side:t},(function(n,o,r){return(0,s.zG)(r,P.map((function(r){return r.reduce((function(o,r,i){return r.quality>o.point.quality||r.quality===o.point.quality&&e.toString().includes(i.toString())&&t===n?{point:r,side:n}:o}),o)})),_.MH)}))).point}};t.preferTopMiddle=n("top",e.middle),t.preferTopEdges=n("top",e.edges)}(t.Selector||(t.Selector={}))}(o||(o={}));var R,w=n(59180),C=n(859),M=n(69888),B=n(59908),T=n(84680),z=n(98958);!function(t){!function(t){t.toSelector=function(t){switch(t){case"top":case"topCenter":return{align:"top",selector:o.Selector.preferBy("top",o.Selector.Placement.middle)};case"topRight":return{align:"top",selector:o.Selector.preferBy("top",o.Selector.Placement.right)};case"topLeft":return{align:"top",selector:o.Selector.preferBy("top",o.Selector.Placement.left)};case"bottom":case"bottomCenter":return{align:"bottom",selector:o.Selector.preferBy("bottom",o.Selector.Placement.middle)};case"bottomRight":return{align:"bottom",selector:o.Selector.preferBy("bottom",o.Selector.Placement.right)};case"bottomLeft":return{align:"bottom",selector:o.Selector.preferBy("bottom",o.Selector.Placement.left)};case"left":return{align:"left",selector:o.Selector.preferBy("left",o.Selector.Placement.middle)};case"right":return{align:"right",selector:o.Selector.preferBy("right",o.Selector.Placement.middle)};case"auto":case"center":return{align:U.UL.Axis.vertical,selector:o.Selector.preferBy("top",o.Selector.Placement.middle)};default:return(0,S.vE)(t)}}}(t.Alignment||(t.Alignment={}));var e=t.ByPoint=function(t){var e=t.point,n=t.className,r=(0,c._)(t,["point","className"]);return l.createElement(f.F.div,(0,i._)({"data-role":"positioned-container",style:e.pipe(d.U(w.dH(o.toCss,{})))},(0,h.Sh)(q.wrapper,n,e.pipe(d.U((function(t){return L.Wi(t)?q.hidden:""})))),r))},n=function(t){var n,r=z.P.useRectWatcher(),i=r.rect,a=r.onMount,c=m.Dx(t.rect),u=m.Dx(t.pinTargetRect),s=v(t.align),f=x(c,i,s,null!==(n=t.selector)&&void 0!==n?n:o.Selector.preferTopMiddle,u,"relative"===t.position);return l.createElement(e,{mount:a,className:t.className,point:f.pipe(d.U(L.UI((function(t){return t.tangentialPoint}))))},!0===t.withPin&&f.pipe(d.U((0,p.ls)(L.tS((function(t){return t.median})),L.UI((function(t){return l.createElement(b,{point:t,key:"pin"})})),L.WG))),t.children)},b=(t.ByAbsoluteRect=function(t){return l.createElement(n,(0,a._)((0,i._)({},t),{position:"absolute"}))},t.ByRelativeRect=function(t){return l.createElement(n,(0,a._)((0,i._)({},t),{position:"relative"}))},t.Pin=function(t){var e=m.Dx(t.point).pipe(d.U((function(t){return t.side})),d.U((function(t){return N[t]}))),n=m.Dx(t.point).pipe(d.U((function(t){return t.point})),d.U((function(t){var e=t.x;return{top:t.y,left:e}})));return l.createElement(f.F.i,(0,i._)({"data-role":"pin",style:n},(0,h.Sh)(e,N.wrapper)))}),x=function(t,e,n,r,i,a){return g.aj(t,l.useContext(B.l.Context).pipe(d.U((function(t){return t.rect}))),e.pipe(y.x(L.Eh(U.xu.eq).equals)),i).pipe(d.U((function(t){var e=(0,u._)(t,4),i=e[0],c=e[1],l=e[2],p=e[3];return(0,s.zG)(l,L.UI((function(t){var e=o.QualifiedVariants.build(c,t,n(i)),u=r(e).point,l=(0,s.zG)(o.toRect(t,u),L.Uo,L.tS((function(t){return(0,s.zG)(U.UL.getMedian(i,t),L.UI((function(e){return{anchorMedian:e,bodyRect:t}})))})),L.tS((function(t){var e=t.anchorMedian,n=t.bodyRect;if(void 0!==p){var r=U.UL.stickToSide(U.UL.Side.invert(e.side),p)(n);return u=o.fromRect(r),(0,s.zG)(U.UL.getMedian(p,r),L.UI((function(t){var e=t.side,n=t.point;return{side:e,point:U.UL.Point.relativeTo(n,r)}})))}return(0,s.zG)(L.G(e),L.UI((function(t){var e=t.side,o=t.point;return{side:e,point:U.UL.Point.relativeTo(o,n)}})))})));return{tangentialPoint:o.relativeTo(u,a?i:c),median:l}})))})))},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U.UL.Axis.both;return(0,C.CI)(U.UL.Axis,t)?function(e){return o.Variants.byAxis(t,e)}:function(e){return(0,r._)({},t,o.Zone.bySide(t,e))}}}(R||(R={}));var G={position:"absolute",border:"".concat(T.ux.px(7)," solid ").concat(M.Il.BackgroundTooltip),transform:"translate(".concat(T.ux.px(-7),", ").concat(T.ux.px(-7),")")},E={borderTopColor:"transparent",borderRightColor:"transparent",borderLeftColor:"transparent",$nest:{"& + *":{transform:"translateY(".concat(T.ux.px(7),")")}}},k={borderTopColor:"transparent",borderRightColor:"transparent",borderBottomColor:"transparent",$nest:{"& + *":{transform:"translateX(".concat(T.ux.px(-7),")")}}},I={borderRightColor:"transparent",borderBottomColor:"transparent",borderLeftColor:"transparent",$nest:{"& + *":{transform:"translateY(".concat(T.ux.px(-7),")")}}},A={borderTopColor:"transparent",borderBottomColor:"transparent",borderLeftColor:"transparent",$nest:{"& + *":{transform:"translateX(".concat(T.ux.px(7),")")}}},N=T.ux.stylesheet({wrapper:[G],top:[E],right:[k],bottom:[I],left:[A]}),q=T.ux.stylesheet({hidden:[{visibility:"hidden",opacity:0}],wrapper:[{position:"absolute",transition:"opacity .2s"}]})},8777:(t,e,n)=>{n.d(e,{P:()=>M});var o,r=n(36059),i=n(81148),a=n(66664),c=n(21101),u=n(80880),l=n(63335),p=n(24134),s=n(49231),f=n(39953),h=n(43818),d=n(64965),m=n(55446),g=n(70989),y=n(90049),b=n(34859),x=n(88546),v=n(70163),U=n(27628),S=n(18615),L=n(40474),P=n(83836),_=n(58303),R=n(59180),w=n(78084);!function(t){var e="scrollaction";t.emit=function(t){return self.dispatchEvent(new CustomEvent(e,{detail:t}))},t.observe=w.P((function(){return d.R(self,e)}))}(o||(o={}));var C=n(33750),M=function(t){(0,u._)(n,t);var e=(0,p._)(n);function n(){var t;return(0,i._)(this,n),t=e.apply(this,arguments),(0,c._)((0,r._)(t),"context",void 0),(0,c._)((0,r._)(t),"_subs",[]),(0,c._)((0,r._)(t),"_outOfTarget",(function(t){return function(e){return!L.UL.hasPoint(e.getBoundingClientRect(),t)}})),t}return(0,a._)(n,[{key:"componentDidMount",value:function(){this._listenTooltipAppearance()}},{key:"componentWillUnmount",value:function(){this._subs.forEach((function(t){return t.unsubscribe()})),this._subs=[],this.context.hide()}},{key:"render",value:function(){return s.createElement(h.F.div,{"data-role":"tooltip"},this.context.state.view(this.props.children))}},{key:"_listenTooltipAppearance",value:function(){var t=this,e=d.R(document,"keydown").pipe(m.h((function(t){return t.keyCode===P.R.ESC_CODE}))),n=d.R(document,"mousedown").pipe(g.M(this.context.state),m.h((function(e){var n=(0,l._)(e,2),o=n[0],r=n[1];return(0,f.zG)(r,_.UI((function(t){return t.target})),_.hX((function(){return L.pK(o.target)})),R.wo(t._outOfTarget({x:o.clientX,y:o.clientY})))}))),r=y.T(e,n,d.R(document,"scroll"),o.observe.pipe(m.h((function(t){return"show"===t.detail})))).pipe(b.h(x.PU),v.B());this._subs=[this.context.hasContent.pipe(m.h(Boolean),U.c(r.pipe(S.P()))).subscribe(this.context.hide),this.context.hasContent.pipe(m.h(Boolean),U.c(y.T(x.gw(!0,500),r.pipe(b.h(!1))).pipe(S.P())),m.h(Boolean)).subscribe(this.context.show)]}}]),n}(s.Component);(0,c._)(M,"contextType",C.G.Context)},53938:(t,e,n)=>{n.d(e,{X:()=>d});var o=n(46504),r=n(38569),i=n(49231),a=n(90023),c=n(58303),u=n(40474),l=n(69888),p=n(61145),s=n(84680),f=n(96633),h=n(8777),d=function(){return i.createElement(h.P,null,(0,a.ls)(c.UI((function(t){return i.createElement(p.t.ByAbsoluteRect,(0,r._)((0,o._)({rect:u.UL.fromEl(t.target),className:y.container},p.t.Alignment.toSelector(t.alignment)),{withPin:!0}),i.createElement("div",{className:y.content},t.content))})),c.WG))},m={position:"fixed",zIndex:f.DY,pointerEvents:"none",$nest:{"@media print":{visibility:"hidden"}}},g={padding:"".concat(s.ux.rem(.25)," ").concat(s.ux.rem(1)),borderRadius:s.ux.rem(f.fx),background:l.Il.BackgroundTooltip,color:l.Il.CoreNeutral1,textAlign:"center",whiteSpace:"nowrap",letterSpacing:s.ux.px(.25),fontSize:s.ux.rem(.75),lineHeight:s.ux.rem(1)},y=s.ux.stylesheet({container:[m],content:[g]})}}]);