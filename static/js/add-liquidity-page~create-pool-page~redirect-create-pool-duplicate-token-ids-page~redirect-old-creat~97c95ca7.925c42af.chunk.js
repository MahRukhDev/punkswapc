(this["webpackJsonp@kyberswap/interface"]=this["webpackJsonp@kyberswap/interface"]||[]).push([[0],{"./src/components/ConfirmAddModalBottom/index.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var o=n("./node_modules/@lingui/react/esm/index.js"),i=n("./node_modules/@kyberswap/ks-sdk-core/dist/index.js"),s=n("./node_modules/jsbi/dist/jsbi-umd.js"),r=n.n(s),c=n("./node_modules/rebass/dist/index.esm.js"),d=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("./src/components/Button/index.tsx"),a=n("./src/components/CurrencyLogo/index.tsx"),u=n("./src/components/CurrentPrice/index.tsx"),b=n("./src/components/PoolPriceBar/index.tsx"),j=n("./src/components/Row/index.tsx"),m=n("./src/components/swapv2/FormattedPriceImpact.tsx"),v=n("./src/constants/index.ts"),p=n("./src/hooks/useTheme.ts"),x=n("./src/state/mint/actions.ts"),f=n("./src/theme/index.tsx"),O=n("./src/utils/index.ts"),h=n("./src/utils/dmm.ts"),C=n("./node_modules/react/jsx-runtime.js"),y=d.default.div.withConfig({displayName:"ConfirmAddModalBottom__Section",componentId:"sc-1mxz87y-0"})(["display:flex;flex-direction:column;gap:12px;padding:1rem;border:1px solid ",";border-radius:4px;margin-bottom:24px;"],(e=>e.theme.border)),g=d.default.div.withConfig({displayName:"ConfirmAddModalBottom__CurrentPriceWrapper",componentId:"sc-1mxz87y-1"})(["display:flex;flex-direction:column;@media only screen and (min-width:768px){flex-direction:row;justify-content:space-between;align-items:center;}"]);function _(e){var t,n,s=e.pair,d=e.noLiquidity,_=e.price,R=e.currencies,k=e.parsedAmounts,w=e.poolTokenPercentage,N=e.onAdd,A=e.amplification,E=e.priceImpact,S=e.estimatedUsd,I=Object(p.a)(),U=s?new i.Fraction(r.a.BigInt(s.amp)).divide(r.a.BigInt(1e4)).toSignificant(5):null===A||void 0===A?void 0:A.divide(r.a.BigInt(1e4)).toSignificant(5),Y=Object(h.f)(R[x.a.CURRENCY_A]),B=Object(h.f)(R[x.a.CURRENCY_B]);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(y,{style:{gap:"8px"},children:[Object(C.jsxs)(j.b,{children:[Object(C.jsx)(f.k.subHeader,{fontSize:14,fontWeight:400,color:I.subText,children:Object(C.jsx)(o.b,{id:"Pooled {0}",values:{0:null===Y||void 0===Y?void 0:Y.symbol}})}),Object(C.jsxs)(j.d,{children:[Object(C.jsx)(a.a,{currency:R[x.a.CURRENCY_A],style:{marginRight:"8px"}}),Object(C.jsxs)(c.b,{alignItems:"center",children:[Object(C.jsx)(f.k.black,{fontSize:14,fontWeight:400,children:null===(t=k[x.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(6)}),S&&!!S[0]&&Object(C.jsxs)(c.e,{color:I.subText,marginLeft:"4px",fontSize:14,children:["(",Object(O.i)(S[0].toString(),!0)||void 0,")"]})]})]})]}),Object(C.jsxs)(j.b,{children:[Object(C.jsx)(f.k.subHeader,{fontSize:14,fontWeight:400,color:I.subText,children:Object(C.jsx)(o.b,{id:"Pooled {0}",values:{0:null===B||void 0===B?void 0:B.symbol}})}),Object(C.jsxs)(j.d,{children:[Object(C.jsx)(a.a,{currency:R[x.a.CURRENCY_B],style:{marginRight:"8px"}}),Object(C.jsxs)(c.b,{alignItems:"center",children:[Object(C.jsx)(f.k.black,{fontSize:14,fontWeight:400,children:null===(n=k[x.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(6)}),S&&!!S[1]&&Object(C.jsxs)(c.e,{color:I.subText,marginLeft:"4px",fontSize:14,children:["(",Object(O.i)(S[1].toString(),!0)||void 0,")"]})]})]})]}),Object(C.jsxs)(g,{children:[Object(C.jsx)(f.k.subHeader,{fontSize:14,fontWeight:400,color:I.subText,children:Object(C.jsx)(o.b,{id:"Current Price"})}),Object(C.jsx)(f.k.black,{fontWeight:400,fontSize:14,children:Object(C.jsx)(u.a,{price:_})})]}),Object(C.jsxs)(j.b,{children:[Object(C.jsx)(f.k.subHeader,{fontSize:14,fontWeight:400,color:I.subText,children:Object(C.jsx)(o.b,{id:"Your Share of Pool"})}),Object(C.jsxs)(f.k.black,{fontSize:14,fontWeight:400,children:[d&&_?"100":w&&w.greaterThan("0")?null!==w&&void 0!==w&&w.lessThan(v.M)?"<0.01":null===w||void 0===w?void 0:w.toFixed(2):"0","%"]})]}),E&&Object(C.jsxs)(j.b,{children:[Object(C.jsx)(f.k.subHeader,{fontSize:14,fontWeight:400,color:I.subText,children:Object(C.jsx)(o.b,{id:"Price Impact"})}),Object(C.jsx)(f.k.black,{fontSize:14,fontWeight:400,children:Object(C.jsx)(m.a,{priceImpact:E})})]})]}),d&&Object(C.jsxs)(y,{children:[Object(C.jsxs)(f.k.body,{children:["AMP",U?Object(C.jsxs)(C.Fragment,{children:["\xa0=\xa0",U]}):""]}),Object(C.jsx)(b.b,{pair:s,currencies:R,price:_,amplification:A})]}),Object(C.jsx)(l.j,{style:{margin:"4px 0 0 0",padding:"12px"},onClick:N,children:Object(C.jsx)(c.e,{fontWeight:500,children:d?Object(C.jsx)(o.b,{id:"Create Pool"}):Object(C.jsx)(o.b,{id:"Confirm"})})})]})}},"./src/components/CurrentPrice/index.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("./node_modules/react/index.js"),s=n("./node_modules/rebass/dist/index.esm.js"),r=n("./src/components/Button/index.tsx"),c=n("./src/components/Icons/SwitchIcon.tsx"),d=n("./src/hooks/useTheme.ts"),l=n("./src/utils/dmm.ts"),a=n("./node_modules/react/jsx-runtime.js");function u(e){var t,n=e.price,u=Object(d.a)(),b=Object(i.useState)(!1),j=Object(o.a)(b,2),m=j[0],v=j[1],p=m?null===n||void 0===n?void 0:n.toSignificant(8):null===n||void 0===n||null===(t=n.invert())||void 0===t?void 0:t.toSignificant(8),x=Boolean((null===n||void 0===n?void 0:n.baseCurrency)&&(null===n||void 0===n?void 0:n.quoteCurrency)),f=Object(l.f)(null===n||void 0===n?void 0:n.quoteCurrency),O=Object(l.f)(null===n||void 0===n?void 0:n.baseCurrency),h=m?"1 ".concat(null===O||void 0===O?void 0:O.symbol," = ").concat(null!==p&&void 0!==p?p:"-"," ").concat(null===f||void 0===f?void 0:f.symbol):"1 ".concat(null===f||void 0===f?void 0:f.symbol," = ").concat(null!==p&&void 0!==p?p:"-"," ").concat(null===O||void 0===O?void 0:O.symbol);return Object(a.jsx)(s.e,{fontWeight:400,fontSize:14,children:x?Object(a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(a.jsx)("div",{style:{marginRight:"4px"},children:h}),Object(a.jsx)(r.d,{padding:"0",width:"fit-content",onClick:()=>v&&v(!m),children:Object(a.jsx)(c.a,{color:u.text})})]}):"-"})}},"./src/components/PoolPriceBar/index.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return U})),n.d(t,"d",(function(){return Y})),n.d(t,"c",(function(){return B})),n.d(t,"b",(function(){return T}));var o=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("./node_modules/@lingui/react/esm/index.js"),s=n("./node_modules/@lingui/core/esm/index.js"),r=n("./node_modules/jsbi/dist/jsbi-umd.js"),c=n.n(r),d=n("./node_modules/react/index.js"),l=n("./node_modules/react-feather/dist/icons/chevron-up.js"),a=n("./node_modules/react-feather/dist/icons/chevron-down.js"),u=n("./node_modules/react-use/esm/useMedia.js"),b=n("./node_modules/rebass/dist/index.esm.js"),j=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),m=n("./src/components/Button/index.tsx"),v=n("./src/components/Card/index.tsx"),p=n("./src/components/Column/index.tsx"),x=n("./src/components/QuestionHelper/index.tsx"),f=n("./src/components/Row/index.tsx"),O=n("./src/constants/index.ts"),h=n("./src/hooks/useTheme.ts"),C=n("./src/state/mint/actions.ts"),y=n("./src/theme/index.tsx"),g=n("./src/utils/dmm.ts"),_=n("./node_modules/react/jsx-runtime.js"),R=Object(j.default)(v.h).withConfig({displayName:"PoolPriceBar__Section",componentId:"sc-uzh6oq-0"})(["padding:16px;border:1px solid ",";border-radius:8px;"],(e=>e.theme.border)),k=Object(j.default)(R).withConfig({displayName:"PoolPriceBar__OutlineCard3",componentId:"sc-uzh6oq-1"})(["text-align:left;"]),w=Object(j.default)(l.a).withConfig({displayName:"PoolPriceBar__ChevronUp2",componentId:"sc-uzh6oq-2"})(["color:",";"],(e=>e.theme.text)),N=Object(j.default)(a.a).withConfig({displayName:"PoolPriceBar__ChevronDown2",componentId:"sc-uzh6oq-3"})(["color:",";"],(e=>e.theme.text)),A=j.default.div.withConfig({displayName:"PoolPriceBar__PoolPriceBarWrapper",componentId:"sc-uzh6oq-4"})(["display:flex;justify-content:space-between;flex-direction:column;gap:8px;@media only screen and (min-width:1000px){flex-direction:row;}"]),E=j.default.div.withConfig({displayName:"PoolPriceBar__PoolPriceBarItem",componentId:"sc-uzh6oq-5"})(["display:flex;justify-content:space-between;align-items:center;@media only screen and (min-width:1000px){justify-content:flex-end;flex-direction:",";flex:",";}"],(e=>e.isAdd?"row":"column-reverse"),(e=>e.isAdd?1:"unset")),S=()=>Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(y.k.black,{fontWeight:400,children:["Max: ","\u267e\ufe0f"]}),Object(_.jsxs)(y.k.black,{fontWeight:400,children:["Min: ","0.00"]})]}),I=()=>Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(y.k.black,{children:"-"}),Object(_.jsx)(y.k.black,{children:"-"})]});function U(e){var t,n,o,s=e.currencies,r=e.noLiquidity,c=e.poolTokenPercentage,d=e.price,l=Object(h.a)(),a=Object(u.a)("(min-width: 768px)"),j=Object(g.f)(s[C.a.CURRENCY_A]),m=Object(g.f)(s[C.a.CURRENCY_B]);return Object(_.jsxs)(A,{isAdd:!r,children:[r&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(E,{children:[Object(_.jsxs)(b.e,{fontWeight:400,fontSize:14,color:l.subText,pt:1,textAlign:"center",children:[null===m||void 0===m?void 0:m.symbol," ",Object(_.jsx)(i.b,{id:"per"})," ",null===j||void 0===j?void 0:j.symbol]}),Object(_.jsx)(y.k.black,{fontWeight:400,fontSize:14,color:l.text,children:null!==(t=null===d||void 0===d?void 0:d.toSignificant(6))&&void 0!==t?t:"-"})]}),Object(_.jsxs)(E,{children:[Object(_.jsxs)(b.e,{fontWeight:400,fontSize:14,color:l.subText,pt:1,textAlign:"center",children:[null===j||void 0===j?void 0:j.symbol," ",Object(_.jsx)(i.b,{id:"per"})," ",null===m||void 0===m?void 0:m.symbol]}),Object(_.jsx)(y.k.black,{fontWeight:400,fontSize:14,color:l.text,children:null!==(n=null===d||void 0===d||null===(o=d.invert())||void 0===o?void 0:o.toSignificant(6))&&void 0!==n?n:"-"})]})]}),Object(_.jsxs)(E,{isAdd:!r,children:[Object(_.jsx)(b.e,{fontWeight:400,fontSize:14,color:l.subText,pt:r?1:0,style:{flex:1},children:r?Object(_.jsx)(i.b,{id:"Share of Pool"}):Object(_.jsx)(i.b,{id:"Your Share of Pool"})}),Object(_.jsxs)(y.k.black,{fontWeight:400,color:l.text,fontSize:14,style:{flex:r?"none":1},textAlign:a?"left":"right",children:[r&&d?"100":c&&c.greaterThan("0")?null!==c&&void 0!==c&&c.lessThan(O.M)?"<0.01":null===c||void 0===c?void 0:c.toFixed(2):"0","%"]})]})]})}function Y(e){var t=e.children,n=e.title,i=void 0===n?"":n,s=e.question,r=void 0===s?"":s,c=Object(h.a)(),l=Object(d.useState)(!0),a=Object(o.a)(l,2),u=a[0],j=a[1];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(f.b,{style:{paddingBottom:"14px",borderBottom:"1px solid ".concat(c.border)},children:[Object(_.jsxs)(f.a,{children:[Object(_.jsx)(b.e,{fontWeight:500,fontSize:16,color:c.text,children:i}),r&&Object(_.jsx)(x.a,{text:r})]}),Object(_.jsx)(f.d,{gap:"8px",children:Object(_.jsx)(m.d,{padding:"6px 8px",borderRadius:"12px",width:"fit-content",onClick:()=>j(!u),children:u?Object(_.jsx)(w,{size:"20",style:{marginLeft:"10px"}}):Object(_.jsx)(N,{size:"20",style:{marginLeft:"10px"}})})})]}),u&&Object(_.jsx)(_.Fragment,{children:t})]})}function B(e){var t=e.currencies,n=e.price,o=e.pair,i=e.amplification;return Object(_.jsx)(k,{children:Object(_.jsx)(Y,{title:s.a._("Active Price Range"),question:s.a._("Tradable token pair price range for this pool based on AMP. If the price goes below or above this range, the pool may become inactive."),children:Object(_.jsx)(T,{currencies:t,price:n,pair:o,amplification:i})})})}function T(e){var t=e.currencies,n=e.price,o=e.pair,s=e.amplification,r=Object(h.a)(),d=Object(g.f)(t[C.a.CURRENCY_A]),l=Object(g.f)(t[C.a.CURRENCY_B]),a=null===d||void 0===d?void 0:d.wrapped;return Object(_.jsx)(_.Fragment,{children:o?(()=>{var e,t,n,u,j,m,v,x,O=null===s||void 0===s?void 0:s.divide(c.a.BigInt(1e4)),h=!!o&&!!Object(g.e)(o)[0][0];return Object(_.jsx)(p.a,{gap:"md",children:Object(_.jsxs)(f.a,{justify:"space-between",gap:"4px",children:[Object(_.jsxs)(p.a,{gap:"4px",children:[Object(_.jsxs)(b.e,{fontWeight:500,fontSize:14,color:r.text2,pt:1,children:[null===l||void 0===l?void 0:l.symbol," ",Object(_.jsx)(i.b,{id:"Per"})," ",null===d||void 0===d?void 0:d.symbol]}),!O||O.lessThan("1")?Object(_.jsx)(I,{}):h&&o?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(y.k.black,{color:r.text,fontWeight:400,children:["Max:"," ",null!==(e=null===(t=Object(g.e)(o)[(null===a||void 0===a?void 0:a.symbol)===o.token0.symbol?0:1][1])||void 0===t?void 0:t.toSignificant(6))&&void 0!==e?e:"-"]}),Object(_.jsxs)(y.k.black,{color:r.text,fontWeight:400,children:["Min:"," ",null!==(n=null===(u=Object(g.e)(o)[(null===a||void 0===a?void 0:a.symbol)===o.token0.symbol?0:1][0])||void 0===u?void 0:u.toSignificant(6))&&void 0!==n?n:"-"]})]}):Object(_.jsx)(S,{})]}),Object(_.jsxs)(p.a,{gap:"4px",justify:"end",children:[Object(_.jsxs)(b.e,{fontWeight:500,fontSize:14,color:r.text2,pt:1,children:[null===d||void 0===d?void 0:d.symbol," ",Object(_.jsx)(i.b,{id:"Per"})," ",null===l||void 0===l?void 0:l.symbol]}),!O||O.lessThan("1")?Object(_.jsx)(I,{}):h&&o?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(y.k.black,{color:r.text,fontWeight:400,children:["Max:"," ",null!==(j=null===(m=Object(g.e)(o)[(null===a||void 0===a?void 0:a.symbol)===o.token0.symbol?1:0][1])||void 0===m?void 0:m.toSignificant(6))&&void 0!==j?j:"-"]}),Object(_.jsxs)(y.k.black,{color:r.text,fontWeight:400,children:["Min:"," ",null!==(v=null===(x=Object(g.e)(o)[(null===a||void 0===a?void 0:a.symbol)===o.token0.symbol?1:0][0])||void 0===x?void 0:x.toSignificant(6))&&void 0!==v?v:"-"]})]}):Object(_.jsx)(S,{})]})]})})})():(()=>{var e,t,o,a,u,j,m,v,x=null===s||void 0===s?void 0:s.divide(c.a.BigInt(1e4)),O=!!Object(g.d)(n,x)[0];return Object(_.jsx)(p.a,{gap:"md",children:Object(_.jsxs)(f.a,{justify:"space-between",gap:"4px",children:[Object(_.jsxs)(p.a,{gap:"sm",children:[Object(_.jsxs)(b.e,{fontWeight:500,fontSize:14,color:r.text2,pt:1,children:[null===l||void 0===l?void 0:l.symbol," ",Object(_.jsx)(i.b,{id:"Per"})," ",null===d||void 0===d?void 0:d.symbol]}),!x||x.lessThan("1")?Object(_.jsx)(I,{}):O?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(y.k.black,{color:r.text,children:["Max: ",null!==(e=null===(t=Object(g.d)(n,x)[0])||void 0===t?void 0:t.toSignificant(6))&&void 0!==e?e:"-"]}),Object(_.jsxs)(y.k.black,{color:r.text,children:["Min: ",null!==(o=null===(a=Object(g.d)(n,x)[1])||void 0===a?void 0:a.toSignificant(6))&&void 0!==o?o:"-"]})]}):Object(_.jsx)(S,{})]}),Object(_.jsxs)(p.a,{gap:"sm",justify:"end",children:[Object(_.jsxs)(b.e,{fontWeight:500,fontSize:14,color:r.text2,pt:1,children:[null===d||void 0===d?void 0:d.symbol," ",Object(_.jsx)(i.b,{id:"Per"})," ",null===l||void 0===l?void 0:l.symbol]}),!x||x.lessThan("1")?Object(_.jsx)(I,{}):O?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(y.k.black,{color:r.text,children:["Max: ",null!==(u=null===(j=Object(g.d)(null===n||void 0===n?void 0:n.invert(),x)[0])||void 0===j?void 0:j.toSignificant(6))&&void 0!==u?u:"-"]}),Object(_.jsxs)(y.k.black,{color:r.text,children:["Min: ",null!==(m=null===(v=Object(g.d)(null===n||void 0===n?void 0:n.invert(),x)[1])||void 0===v?void 0:v.toSignificant(6))&&void 0!==m?m:"-"]})]}):Object(_.jsx)(S,{})]})]})})})()})}},"./src/components/swapv2/FormattedPriceImpact.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("./node_modules/rebass/dist/index.esm.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=n("./src/constants/index.ts"),r=n("./src/utils/prices.ts"),c=n("./node_modules/react/jsx-runtime.js"),d=Object(i.default)(o.e).withConfig({displayName:"FormattedPriceImpact__ErrorText",componentId:"sc-dicq1s-0"})(["color:",";"],(e=>{var t=e.theme,n=e.severity;return 3===n||4===n?t.red1:2===n?t.yellow2:1===n?t.text:t.green1}));function l(e){var t=e.priceImpact;return!t||t.lessThan("0")?Object(c.jsx)("div",{children:"--"}):Object(c.jsx)(d,{fontWeight:500,fontSize:14,severity:Object(r.f)(t),children:t.lessThan(s.M)?"<0.01%":"".concat(t.toFixed(2),"%")})}},"./src/data/TotalSupply.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("./node_modules/@kyberswap/ks-sdk-core/dist/index.js"),i=n("./src/hooks/useContract.ts"),s=n("./src/state/multicall/hooks.ts");function r(e){var t,n,r=Object(i.r)(null===e||void 0===e?void 0:e.address,!1),c=null===(t=Object(s.c)(r,"totalSupply"))||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0];return e&&c?o.TokenAmount.fromRawAmount(e,c.toString()):void 0}},"./src/hooks/useZap.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),s=n("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),r=n("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),c=n("./node_modules/react/index.js"),d=n("./src/hooks/index.ts"),l=n("./src/hooks/useContract.ts"),a=(e,t)=>{var n=Object(l.u)(e,t),o=Object(d.b)(),r=o.isEVM,a=o.networkInfo,u=Object(c.useCallback)(function(){var o=Object(s.a)(Object(i.a)().mark((function o(s,c,d,l){var u;return Object(i.a)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r){o.next=2;break}return o.abrupt("return");case 2:if(o.prev=2,!e||t){o.next=9;break}return o.next=6,null===n||void 0===n?void 0:n.calculateZapInAmounts(a.classic.static.factory,s,c,d,l);case 6:o.t0=o.sent,o.next=12;break;case 9:return o.next=11,null===n||void 0===n?void 0:n.calculateZapInAmounts(s,c,d,l);case 11:o.t0=o.sent;case 12:return u=o.t0,o.abrupt("return",u);case 16:throw o.prev=16,o.t1=o.catch(2),console.error(o.t1),o.t1;case 20:case"end":return o.stop()}}),o,null,[[2,16]])})));return function(e,t,n,i){return o.apply(this,arguments)}}(),[n,r,a,e,t]),b=Object(c.useCallback)(function(){var o=Object(s.a)(Object(i.a)().mark((function o(s,c,d,l){var u;return Object(i.a)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r){o.next=2;break}return o.abrupt("return");case 2:if(o.prev=2,!e||t){o.next=9;break}return o.next=6,null===n||void 0===n?void 0:n.calculateZapOutAmount(a.classic.static.factory,s,c,d,l);case 6:o.t0=o.sent,o.next=12;break;case 9:return o.next=11,null===n||void 0===n?void 0:n.calculateZapOutAmount(s,c,d,l);case 11:o.t0=o.sent;case 12:return u=o.t0,o.abrupt("return",u);case 16:throw o.prev=16,o.t1=o.catch(2),console.error(o.t1),o.t1;case 20:case"end":return o.stop()}}),o,null,[[2,16]])})));return function(e,t,n,i){return o.apply(this,arguments)}}(),[n,r,a,e,t]);return{zapContract:n,calculateZapInAmounts:u,calculateZapOutAmount:b}},u=(e,t,n,d,l,u)=>{var b=a(e,t).calculateZapInAmounts,j=Object(c.useState)({amounts:{tokenInAmount:r.a.from(0),tokenOutAmount:r.a.from(0)},error:void 0}),m=Object(o.a)(j,2),v=m[0],p=m[1];return Object(c.useEffect)((()=>{function e(){return(e=Object(s.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=3;break}return p({amounts:{tokenInAmount:r.a.from(0),tokenOutAmount:r.a.from(0)},error:void 0}),e.abrupt("return");case 3:if(e.prev=3,!(n&&d&&l&&null!==u&&void 0!==u&&u.gt(0))){e.next=9;break}return e.next=7,b(n,d,l,u);case 7:t=e.sent,p({amounts:t,error:void 0});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),p({amounts:{tokenInAmount:r.a.from(0),tokenOutAmount:r.a.from(0)},error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b,l,n,d,u]),v},b=(e,t,n,d,l,u)=>{var b=a(e,t).calculateZapOutAmount,j=Object(c.useState)({amount:r.a.from(0),error:void 0}),m=Object(o.a)(j,2),v=m[0],p=m[1];return Object(c.useEffect)((()=>{function e(){return(e=Object(s.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u&&!u.eq(0)){e.next=3;break}return p({amount:r.a.from(0),error:void 0}),e.abrupt("return");case 3:if(e.prev=3,!(n&&d&&l&&null!==u&&void 0!==u&&u.gt(0))){e.next=9;break}return e.next=7,b(n,d,l,u);case 7:t=e.sent,p({amount:t,error:void 0});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),p({amount:r.a.from(0),error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b,n,d,l,u]),v}},"./src/pages/Pool/styleds.tsx":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return r}));var o=n("./node_modules/rebass/dist/index.esm.js"),i=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=i.default.div.withConfig({displayName:"styleds__Wrapper",componentId:"sc-qs1q00-0"})(["position:relative;"]),r=(Object(i.default)(o.e).withConfig({displayName:"styleds__ClickableText",componentId:"sc-qs1q00-1"})([":hover{cursor:pointer;}color:",";"],(e=>e.theme.primary)),i.default.span.withConfig({displayName:"styleds__Dots",componentId:"sc-qs1q00-2"})(["&::after{display:inline-block;animation:ellipsis 1.25s infinite;content:'.';width:1em;text-align:left;}@keyframes ellipsis{0%{content:'.';}33%{content:'..';}66%{content:'...';}}"]))},"./src/state/mint/hooks.ts":function(e,t,n){"use strict";n.d(t,"d",(function(){return C})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return _})),n.d(t,"e",(function(){return R}));var o=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("./node_modules/@lingui/core/esm/index.js"),s=n("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),r=n("./node_modules/@kyberswap/ks-sdk-core/dist/index.js"),c=n("./node_modules/jsbi/dist/jsbi-umd.js"),d=n.n(c),l=n("./node_modules/react/index.js"),a=n("./node_modules/react-redux/es/index.js"),u=n("./src/constants/tokens.ts"),b=n("./src/data/Reserves.ts"),j=n("./src/data/TotalSupply.ts"),m=n("./src/hooks/index.ts"),v=n("./src/hooks/useZap.ts"),p=n("./src/state/hooks.ts"),x=n("./src/state/swap/hooks.ts"),f=n("./src/state/wallet/hooks.ts"),O=n("./src/state/mint/actions.ts"),h=d.a.BigInt(0);function C(){return Object(a.e)((e=>e.mint))}function y(e,t,n,s){var c,a,u,v,p,y,g=Object(m.b)(),_=g.account,R=g.chainId,k=C(),w=k.independentField,N=k.typedValue,A=k.otherTypedValue,E=w===O.a.CURRENCY_A?O.a.CURRENCY_B:O.a.CURRENCY_A,S=Object(l.useMemo)((()=>({[O.a.CURRENCY_A]:null!==e&&void 0!==e?e:void 0,[O.a.CURRENCY_B]:null!==t&&void 0!==t?t:void 0})),[e,t]),I=null===(c=S[O.a.CURRENCY_A])||void 0===c?void 0:c.wrapped,U=null===(a=S[O.a.CURRENCY_B])||void 0===a?void 0:a.wrapped,Y=Object(b.c)(I,U,n),B=Object(o.a)(Y,4),T=B[0],P=B[1],q=B[2],M=B[3],W=Object(b.f)(I,U),z=W?s||q?W[0]:W[1]:"",F=Object(j.a)(null===P||void 0===P?void 0:P.liquidityToken),L=(T===b.a.NOT_EXISTS||Boolean(F&&d.a.equal(F.quotient,h)))&&((null===I||void 0===I?void 0:I.symbol)!==r.WETH[R].symbol||(null===U||void 0===U?void 0:U.symbol)!==r.WETH[R].symbol),H=Object(l.useMemo)((()=>[e,t]),[e,t]),Z=Object(f.c)(H),V={[O.a.CURRENCY_A]:Z[0],[O.a.CURRENCY_B]:Z[1]},D=Object(x.b)(N,S[w]),Q=Object(l.useMemo)((()=>{if(L)return A&&S[E]?Object(x.b)(A,S[E]):void 0;if(D){var n=null===D||void 0===D?void 0:D.wrapped,o=null===e||void 0===e?void 0:e.wrapped,i=null===t||void 0===t?void 0:t.wrapped;if(o&&i&&n&&P){var s=E===O.a.CURRENCY_B?t:e,c=E===O.a.CURRENCY_B?P.priceOfReal(o).quote(n):P.priceOfReal(i).quote(n);return null!==s&&void 0!==s&&s.isNative?r.CurrencyAmount.fromRawAmount(s,c.quotient):c}}else;}),[L,A,S,E,D,e,t,P]),J=Object(l.useMemo)((()=>({[O.a.CURRENCY_A]:w===O.a.CURRENCY_A?D:Q,[O.a.CURRENCY_B]:w===O.a.CURRENCY_A?Q:D})),[D,Q,w]),X=Object(l.useMemo)((()=>{if(!L){var t=null===e||void 0===e?void 0:e.wrapped;return P&&t?P.priceOf(t):void 0}var n=J[O.a.CURRENCY_A],o=J[O.a.CURRENCY_B];if(n&&o){var i=o.divide(n);return new r.Price(n.currency,o.currency,i.denominator,i.numerator)}}),[e,L,P,J]),G=Object(l.useMemo)((()=>{var e=J[O.a.CURRENCY_A],t=J[O.a.CURRENCY_B],n=null===e||void 0===e?void 0:e.wrapped,o=null===t||void 0===t?void 0:t.wrapped;if(P&&F&&n&&o)try{return P.getLiquidityMinted(F,n,o)}catch(i){return void console.error(i)}}),[J,P,F]),K=Object(l.useMemo)((()=>G&&F?new r.Percent(G.quotient,F.add(G).quotient):void 0),[G,F]);(_||(p=i.a._("Connect wallet")),n&&T===b.a.INVALID||(null===I||void 0===I?void 0:I.symbol)===(null===U||void 0===U?void 0:U.symbol))&&(p=null!==(y=p)&&void 0!==y?y:"Invalid pair");var $,ee,te=J[O.a.CURRENCY_A],ne=J[O.a.CURRENCY_B];(!te&&N||!ne&&A||"0"===(null===ne||void 0===ne?void 0:ne.toExact())||"0"===(null===te||void 0===te?void 0:te.toExact()))&&(p=null!==($=p)&&void 0!==$?$:i.a._("Invalid amount"));J[O.a.CURRENCY_A]&&J[O.a.CURRENCY_B]||(p=null!==(ee=p)&&void 0!==ee?ee:i.a._("Enter an amount"));var oe=S[O.a.CURRENCY_A],ie=S[O.a.CURRENCY_B];return oe&&te&&null!==V&&void 0!==V&&null!==(u=V[O.a.CURRENCY_A])&&void 0!==u&&u.lessThan(te)&&(p=i.a._("Insufficient {0} balance",{0:oe.symbol})),ie&&ne&&null!==V&&void 0!==V&&null!==(v=V[O.a.CURRENCY_B])&&void 0!==v&&v.lessThan(ne)&&(p=i.a._("Insufficient {0} balance",{0:ie.symbol})),{dependentField:E,currencies:S,pair:P,pairState:T,currencyBalances:V,parsedAmounts:J,price:X,noLiquidity:L,liquidityMinted:G,poolTokenPercentage:K,error:p,unAmplifiedPairAddress:z,isStaticFeePair:q,isOldStaticFeeContract:M}}function g(e){var t=Object(p.a)();return{onFieldAInput:Object(l.useCallback)((n=>{t(Object(O.d)({field:O.a.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))}),[t,e]),onFieldBInput:Object(l.useCallback)((n=>{t(Object(O.d)({field:O.a.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))}),[t,e])}}function _(e,t,n){var c,a,p,y,g,_,R,k,w,N,A,E=Object(m.b)(),S=E.account,I=E.chainId,U=C(),Y=U.independentField,B=U.typedValue,T=Y===O.a.CURRENCY_A?O.a.CURRENCY_B:O.a.CURRENCY_A,P=Object(l.useMemo)((()=>({[O.a.CURRENCY_A]:null!==e&&void 0!==e?e:void 0,[O.a.CURRENCY_B]:null!==t&&void 0!==t?t:void 0})),[e,t]),q=null===(c=P[O.a.CURRENCY_A])||void 0===c?void 0:c.wrapped,M=null===(a=P[O.a.CURRENCY_B])||void 0===a?void 0:a.wrapped,W=Object(b.c)(q,M,n),z=Object(o.a)(W,4),F=z[0],L=z[1],H=z[2],Z=z[3],V=Object(b.f)(q,M),D=V?H?V[0]:V[1]:"",Q=Object(j.a)(null===L||void 0===L?void 0:L.liquidityToken),J=(F===b.a.NOT_EXISTS||Boolean(Q&&d.a.equal(Q.quotient,h)))&&((null===q||void 0===q?void 0:q.symbol)!==r.WETH[I].symbol||(null===M||void 0===M?void 0:M.symbol)!==r.WETH[I].symbol),X=Object(f.c)(Object(l.useMemo)((()=>[P[O.a.CURRENCY_A],P[O.a.CURRENCY_B]]),[P])),G={[O.a.CURRENCY_A]:X[0],[O.a.CURRENCY_B]:X[1]},K=Object(l.useMemo)((()=>Object(x.b)(B,P[Y],!0)),[P,Y,B]),$=Object(l.useMemo)((()=>K?s.a.from(K.quotient.toString()):void 0),[K]),ee=Object(v.a)(!!H,!!Z,T===O.a.CURRENCY_B?null===q||void 0===q?void 0:q.address:null===M||void 0===M?void 0:M.address,T===O.a.CURRENCY_B?null===M||void 0===M?void 0:M.address:null===q||void 0===q?void 0:q.address,null===L||void 0===L?void 0:L.address,$),te=Object(x.b)(ee.amounts.tokenInAmount.toString(),null===(p=P[Y])||void 0===p?void 0:p.wrapped,!1),ne=Object(l.useMemo)((()=>{if(te){var n,o=null===te||void 0===te?void 0:te.wrapped,i=null===e||void 0===e?void 0:e.wrapped,s=null===t||void 0===t?void 0:t.wrapped;return i&&s&&o&&L?Object(x.b)(ee.amounts.tokenOutAmount.toString(),null===(n=P[T])||void 0===n?void 0:n.wrapped,!1):void 0}}),[te,e,t,L,ee.amounts.tokenOutAmount,P,T]),oe=Object(l.useMemo)((()=>({[O.a.CURRENCY_A]:Y===O.a.CURRENCY_A?te:ne,[O.a.CURRENCY_B]:Y===O.a.CURRENCY_A?ne:te})),[te,ne,Y]),ie=Object(l.useMemo)((()=>{var t=null===e||void 0===e?void 0:e.wrapped;return L&&t?L.priceOf(t):void 0}),[e,L]),se=Object(l.useMemo)((()=>{var e=oe[O.a.CURRENCY_A],t=oe[O.a.CURRENCY_B],n=null===e||void 0===e?void 0:e.wrapped,o=null===t||void 0===t?void 0:t.wrapped;if(L&&Q&&n&&o)try{return L.getLiquidityMinted(Q,n,o)}catch(i){return void console.error(i)}}),[oe,L,Q]),re=Object(l.useMemo)((()=>se&&Q?new r.Percent(se.quotient,Q.add(se).quotient):void 0),[se,Q]),ce=!1;(S||(k=i.a._("Connect wallet")),n&&F===b.a.INVALID||"WETH"===(null===q||void 0===q?void 0:q.symbol)&&"WETH"===(null===M||void 0===M?void 0:M.symbol))&&(k=null!==(w=k)&&void 0!==w?w:"Invalid pair");B||oe[Y]&&oe[T]||(k=null!==(N=k)&&void 0!==N?N:i.a._("Enter an amount"));(!oe[Y]&&B||"0"===(null===(y=oe[Y])||void 0===y?void 0:y.toExact())||"0"===(null===(g=oe[T])||void 0===g?void 0:g.toExact()))&&(k=null!==(A=k)&&void 0!==A?A:i.a._("Invalid amount"));var de=P[Y];return de&&te&&K&&(null!==G&&void 0!==G&&null!==(_=G[Y])&&void 0!==_&&_.lessThan(te)||null!==G&&void 0!==G&&null!==(R=G[Y])&&void 0!==R&&R.lessThan(K))&&(k=i.a._("Insufficient {0} balance",{0:de.isNative?u.i[I].symbol:de.symbol})),ee.error&&ee.error.message.includes("INSUFFICIENT_LIQUIDITY")&&(ce=!0),ee.error&&!ee.error.message.includes("INSUFFICIENT_LIQUIDITY")&&(k=i.a._("Something went wrong")),{dependentField:T,currencies:P,pair:L,pairState:F,currencyBalances:G,parsedAmounts:oe,price:ie,noLiquidity:J,liquidityMinted:se,poolTokenPercentage:re,insufficientLiquidity:ce,error:k,unAmplifiedPairAddress:D,isStaticFeePair:H,isOldStaticFeeContract:Z}}function R(){var e=Object(p.a)(),t=C().independentField;return{onFieldInput:Object(l.useCallback)((n=>{e(Object(O.d)({field:t,typedValue:n,noLiquidity:!1}))}),[e,t]),onSwitchField:Object(l.useCallback)((()=>{e(Object(O.c)({field:t===O.a.CURRENCY_A?O.a.CURRENCY_B:O.a.CURRENCY_A}))}),[e,t])}}}}]);