(this["webpackJsonp@kyberswap/interface"]=this["webpackJsonp@kyberswap/interface"]||[]).push([[14],{"./src/data/TotalSupply.ts":function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var n=s("./node_modules/@kyberswap/ks-sdk-core/dist/index.js"),o=s("./src/hooks/useContract.ts"),c=s("./src/state/multicall/hooks.ts");function i(e){var t,s,i=Object(o.r)(null===e||void 0===e?void 0:e.address,!1),d=null===(t=Object(c.c)(i,"totalSupply"))||void 0===t||null===(s=t.result)||void 0===s?void 0:s[0];return e&&d?n.TokenAmount.fromRawAmount(e,d.toString()):void 0}},"./src/pages/AppBody.tsx":function(e,t,s){"use strict";s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return i}));s("./node_modules/react/index.js");var n=s("./node_modules/styled-components/dist/styled-components.browser.esm.js"),o=s("./node_modules/react/jsx-runtime.js"),c=n.default.div.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-1ls32jt-0"})(["position:relative;max-width:425px;width:100%;background:",";box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);border-radius:20px;padding:2rem 1.5rem 1.5rem 1.5rem;margin-top:20px;"],(e=>e.theme.background));function i(e){var t=e.children,s=e.className;return Object(o.jsx)(c,{className:s,children:t})}},"./src/pages/Pool/styleds.tsx":function(e,t,s){"use strict";s.d(t,"b",(function(){return c})),s.d(t,"a",(function(){return i}));var n=s("./node_modules/rebass/dist/index.esm.js"),o=s("./node_modules/styled-components/dist/styled-components.browser.esm.js"),c=o.default.div.withConfig({displayName:"styleds__Wrapper",componentId:"sc-qs1q00-0"})(["position:relative;"]),i=(Object(o.default)(n.e).withConfig({displayName:"styleds__ClickableText",componentId:"sc-qs1q00-1"})([":hover{cursor:pointer;}color:",";"],(e=>e.theme.primary)),o.default.span.withConfig({displayName:"styleds__Dots",componentId:"sc-qs1q00-2"})(["&::after{display:inline-block;animation:ellipsis 1.25s infinite;content:'.';width:1em;text-align:left;}@keyframes ellipsis{0%{content:'.';}33%{content:'..';}66%{content:'...';}}"]))},"./src/pages/PoolFinder/index.tsx":function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return L}));var n,o=s("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=s("./node_modules/@lingui/react/esm/index.js"),i=s("./node_modules/@lingui/core/esm/index.js"),d=s("./node_modules/jsbi/dist/jsbi-umd.js"),r=s.n(d),a=s("./node_modules/react/index.js"),l=s("./node_modules/react-feather/dist/icons/plus.js"),j=s("./node_modules/react-router/dist/index.js"),u=s("./node_modules/rebass/dist/index.esm.js"),b=s("./src/components/Button/index.tsx"),x=s("./src/components/Card/index.tsx"),p=s("./src/components/Column/index.tsx"),m=s("./src/components/CurrencyLogo/index.tsx"),O=s("./src/components/NavigationTabs/index.tsx"),f=s("./src/components/PositionCard/index.tsx"),h=s("./src/components/Row/index.tsx"),g=s("./src/components/SearchModal/CurrencySearchModal.tsx"),y=s("./src/constants/index.ts"),v=s("./src/constants/tokens.ts"),k=s("./src/data/Reserves.ts"),_=s("./src/hooks/index.ts"),T=s("./src/hooks/useMixpanel.ts"),w=s("./src/pages/AppBody.tsx"),C=s("./src/pages/Pool/styleds.tsx"),S=s("./src/state/user/hooks.tsx"),N=s("./src/state/wallet/hooks.ts"),E=s("./src/theme/index.tsx"),I=s("./src/utils/currencyId.ts"),q=s("./src/utils/dmm.ts"),A=s("./node_modules/react/jsx-runtime.js");function L(){var e,t=Object(_.b)(),s=t.account,d=t.chainId,L=t.isEVM,B=t.networkInfo,K=Object(a.useState)(!1),P=Object(o.a)(K,2),D=P[0],M=P[1],W=Object(a.useState)(n.TOKEN1),z=Object(o.a)(W,2),R=z[0],F=z[1],J=Object(a.useState)(v.i[d]),G=Object(o.a)(J,2),H=G[0],V=G[1],X=Object(a.useState)(null),Y=Object(o.a)(X,2),Q=Y[0],U=Y[1],Z=Object(k.b)(null!==H&&void 0!==H?H:void 0,null!==Q&&void 0!==Q?Q:void 0),$=Object(S.i)();Object(a.useEffect)((()=>{if(Z.length>0){var e=null===H||void 0===H?void 0:H.wrapped,t=null===Q||void 0===Q?void 0:Q.wrapped;e&&t&&$(e,t)}}),[Z,$,H,Q,d]);var ee=Object(N.f)(Z.every((e=>Object(o.a)(e,2)[1]))?Z.map((e=>Object(o.a)(e,2)[1].liquidityToken)):void 0),te=Object(a.useCallback)((e=>{R===n.TOKEN0?V(e):U(e)}),[R]),se=Z.filter((e=>{var t=Object(o.a)(e,2),s=t[0],n=t[1],c=!1;return n&&n.liquidityToken.address&&ee[n.liquidityToken.address]&&(c=Boolean(ee[n.liquidityToken.address]&&r.a.greaterThan(ee[n.liquidityToken.address].quotient,r.a.BigInt(0)))),s===k.a.EXISTS&&c&&n})).map(((e,t)=>{var s=Object(o.a)(e,2),n=(s[0],s[1]);return!!n&&Object(A.jsx)(f.b,{pair:n,border:"1px solid #CED0D9"},t)})),ne=Object(a.useCallback)((()=>{M(!1)}),[M]),oe=Object(A.jsx)(x.d,{padding:"45px 10px",children:Object(A.jsx)(u.e,{textAlign:"center",children:s?i.a._("Select a token to find your liquidity."):i.a._("Connect to a wallet to find pools")})}),ce=Object(q.f)(H||void 0),ie=Object(q.f)(Q||void 0),de=Object(T.c)().mixpanelHandler;return Object(a.useEffect)((()=>{de(T.a.IMPORT_POOL_INITIATED)}),[]),L?Object(A.jsxs)(w.b,{children:[Object(A.jsx)(O.b,{}),Object(A.jsxs)(p.a,{gap:"md",children:[Object(A.jsx)(b.c,{onClick:()=>{M(!0),F(n.TOKEN0)},children:ce?Object(A.jsxs)(h.f,{children:[Object(A.jsx)(m.a,{currency:H||void 0}),Object(A.jsx)(u.e,{fontWeight:500,fontSize:20,marginLeft:"12px",children:null===ce||void 0===ce?void 0:ce.symbol})]}):Object(A.jsx)(u.e,{fontWeight:500,fontSize:20,marginLeft:"12px",children:"Select a Token"})}),Object(A.jsx)(p.b,{children:Object(A.jsx)(l.a,{size:"16",color:"#888D9B"})}),Object(A.jsx)(b.c,{onClick:()=>{M(!0),F(n.TOKEN1)},children:ie?Object(A.jsxs)(h.f,{children:[Object(A.jsx)(m.a,{currency:Q||void 0}),Object(A.jsx)(u.e,{fontWeight:500,fontSize:20,marginLeft:"12px",children:null===ie||void 0===ie?void 0:ie.symbol})]}):Object(A.jsx)(u.e,{fontWeight:500,fontSize:20,marginLeft:"12px",children:"Select a Token"})}),Object(A.jsx)(E.j,{to:"".concat(y.f.POOLS,"/").concat(B.route,"/").concat(H?Object(I.a)(H,d):void 0,"/").concat(Q?Object(I.a)(Q,d):void 0,"?tab=classic"),children:Object(A.jsx)(u.e,{textAlign:"center",children:Object(A.jsx)(c.b,{id:"Add liquidity"})})}),Z.filter((e=>Object(o.a)(e,1)[0]===k.a.LOADING)).length>0&&Object(A.jsx)(x.d,{padding:"45px 10px",children:Object(A.jsx)(p.a,{gap:"sm",justify:"center",children:Object(A.jsxs)(u.e,{textAlign:"center",children:[Object(A.jsx)(c.b,{id:"Loading"}),Object(A.jsx)(C.a,{})]})})}),H&&Q?se.length>0&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(p.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(A.jsx)(u.e,{textAlign:"center",fontWeight:500,children:Object(A.jsx)(c.b,{id:"Pool Found!"})}),Object(A.jsx)(E.j,{to:"".concat(y.f.MY_POOLS,"/").concat(B.route,"?tab=classic"),children:Object(A.jsx)(u.e,{textAlign:"center",children:Object(A.jsx)(c.b,{id:"Manage your pools."})})})]}),se]}):oe]}),Object(A.jsx)(g.a,{isOpen:D,onCurrencySelect:te,onDismiss:ne,showCommonBases:!0,selectedCurrency:null!==(e=R===n.TOKEN0?Q:H)&&void 0!==e?e:void 0})]}):Object(A.jsx)(j.a,{to:"/"})}!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(n||(n={}))}}]);