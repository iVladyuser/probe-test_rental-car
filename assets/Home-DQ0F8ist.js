import{r as h,_ as y,a as x,j as u,c as U,b as H,d as L,h as M,e as E}from"./index-CroBuPXz.js";import{u as _,g as S,a as C,b as w,c as Q,d as P,s as A,e as N,f as R,B as D,T as j,C as B}from"./CardMedia-BKlEhxd9.js";function F(e,r,t,n,o){const[s,i]=h.useState(()=>o&&t?t(e).matches:n?n(e).matches:r);return C(()=>{let a=!0;if(!t)return;const l=t(e),c=()=>{a&&i(l.matches)};return c(),l.addListener(c),()=>{a=!1,l.removeListener(c)}},[e,t]),s}const v=h.useSyncExternalStore;function J(e,r,t,n,o){const s=h.useCallback(()=>r,[r]),i=h.useMemo(()=>{if(o&&t)return()=>t(e).matches;if(n!==null){const{matches:d}=n(e);return()=>d}return s},[s,e,n,o,t]),[a,l]=h.useMemo(()=>{if(t===null)return[s,()=>()=>{}];const d=t(e);return[()=>d.matches,m=>(d.addListener(m),()=>{d.removeListener(m)})]},[s,t,e]);return v(l,a,i)}function X(e,r={}){const t=_(),n=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:o=!1,matchMedia:s=n?window.matchMedia:null,ssrMatchMedia:i=null,noSsr:a=!1}=S({name:"MuiUseMediaQuery",props:r,theme:t});let l=typeof e=="function"?e(t):e;return l=l.replace(/^@media( ?)/m,""),(v!==void 0?J:F)(l,o,s,i,a)}const z=["initialWidth","width"],f=["xs","sm","md","lg","xl"],K=(e,r,t=!0)=>t?f.indexOf(e)<=f.indexOf(r):f.indexOf(e)<f.indexOf(r),Y=(e,r,t=!1)=>t?f.indexOf(r)<=f.indexOf(e):f.indexOf(r)<f.indexOf(e),G=(e={})=>r=>{const{withTheme:t=!1,noSSR:n=!1,initialWidth:o}=e;function s(i){const a=w(),l=i.theme||a,c=S({theme:l,name:"MuiWithWidth",props:i}),{initialWidth:d,width:m}=c,p=y(c,z),[T,O]=h.useState(!1);C(()=>{O(!0)},[]);const W=l.breakpoints.keys.slice().reverse().reduce((b,k)=>{const $=X(l.breakpoints.up(k));return!b&&$?k:b},null),g=x({width:m||(T||n?W:void 0)||d||o},t?{theme:l}:{},p);return g.width===void 0?null:u.jsx(r,x({},g))}return s};function I(e){const{children:r,only:t,width:n}=e,o=w();let s=!0;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i+=1){const a=t[i];if(n===a){s=!1;break}}else t&&n===t&&(s=!1);if(s)for(let i=0;i<o.breakpoints.keys.length;i+=1){const a=o.breakpoints.keys[i],l=e[`${a}Up`],c=e[`${a}Down`];if(l&&K(a,n)||c&&Y(a,n)){s=!1;break}}return s?u.jsx(h.Fragment,{children:r}):null}const V=G()(I);function Z(e){return Q("PrivateHiddenCss",e)}P("PrivateHiddenCss",["root","xlDown","xlUp","onlyXl","lgDown","lgUp","onlyLg","mdDown","mdUp","onlyMd","smDown","smUp","onlySm","xsDown","xsUp","onlyXs"]);const q=["children","className","only"],ee=e=>{const{classes:r,breakpoints:t}=e,n={root:["root",...t.map(({breakpoint:o,dir:s})=>s==="only"?`${s}${U(o)}`:`${o}${U(s)}`)]};return R(n,Z,r)},te=A("div",{name:"PrivateHiddenCss",slot:"Root"})(({theme:e,ownerState:r})=>{const t={display:"none"};return x({},r.breakpoints.map(({breakpoint:n,dir:o})=>o==="only"?{[e.breakpoints.only(n)]:t}:o==="up"?{[e.breakpoints.up(n)]:t}:{[e.breakpoints.down(n)]:t}).reduce((n,o)=>(Object.keys(o).forEach(s=>{n[s]=o[s]}),n),{}))});function ne(e){const{children:r,className:t,only:n}=e,o=y(e,q),s=w(),i=[];for(let c=0;c<s.breakpoints.keys.length;c+=1){const d=s.breakpoints.keys[c],m=o[`${d}Up`],p=o[`${d}Down`];m&&i.push({breakpoint:d,dir:"up"}),p&&i.push({breakpoint:d,dir:"down"})}n&&(Array.isArray(n)?n:[n]).forEach(d=>{i.push({breakpoint:d,dir:"only"})});const a=x({},e,{breakpoints:i}),l=ee(a);return u.jsx(te,{className:N(l.root,t),ownerState:a,children:r})}const se=["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"];function oe(e){const{implementation:r="js",lgDown:t=!1,lgUp:n=!1,mdDown:o=!1,mdUp:s=!1,smDown:i=!1,smUp:a=!1,xlDown:l=!1,xlUp:c=!1,xsDown:d=!1,xsUp:m=!1}=e,p=y(e,se);return r==="js"?u.jsx(V,x({lgDown:t,lgUp:n,mdDown:o,mdUp:s,smDown:i,smUp:a,xlDown:l,xlUp:c,xsDown:d,xsUp:m},p)):u.jsx(ne,x({lgDown:t,lgUp:n,mdDown:o,mdUp:s,smDown:i,smUp:a,xlDown:l,xlUp:c,xsDown:d,xsUp:m},p))}const re="/probe-test_rental-car/assets/hero-CrYswNnj.jpg",ce=()=>u.jsxs(D,{sx:H,children:[u.jsxs(D,{marginLeft:5,sx:L,children:[u.jsx(u.Fragment,{children:u.jsx(j,{component:"h1",variant:"h1",color:"inherit",marginTop:25,sx:M,children:"Car rental."})}),u.jsx(u.Fragment,{children:u.jsx(j,{component:"h1",variant:"h3",marginTop:10,sx:E,children:"A car rental, hire car, or car hire agencey is a company that rents auto for short periods of time, generally ranging from a few hours to a few weeks."})})]}),u.jsx(oe,{mdDown:!0,children:u.jsx(B,{sx:{marginTop:"0px"},component:"img",alt:"car image",height:"200",width:"300",image:re})}),";"]});export{ce as Home,ce as default};
