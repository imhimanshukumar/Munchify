"use strict";(self.webpackChunkabc=self.webpackChunkabc||[]).push([[305],{305:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var t=a(43),o=a(579);const c=()=>{const[e,s]=(0,t.useState)(null),[a,c]=(0,t.useState)(!0),[r,i]=(0,t.useState)(null);return(0,t.useEffect)((()=>{(async()=>{try{const e="https://api.allorigins.win/get?url=",a="https://www.swiggy.com/api/instamart/category-listing?categoryName=Fresh%20Vegetables&storeId=1388387&offset=0&filterName=&taxonomyType=All%20Listing",t=await fetch("".concat(e).concat(encodeURIComponent(a)));if(!t.ok)throw new Error("HTTP error! status: ".concat(t.status));const o=await t.json();console.log("Fetched data:",o);const c=JSON.parse(o.contents);s(c.data)}catch(r){console.error("Error fetching data:",r),i(r.message)}finally{c(!1)}})()}),[]),a?(0,o.jsx)("div",{children:"Loading..."}):r?(0,o.jsxs)("div",{children:["Error: ",r]}):e&&e.categories&&0!==e.categories.length?(0,o.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4",children:e.categories.map((e=>(0,o.jsxs)("div",{className:"max-w-xs rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4",children:[e.imageId&&(0,o.jsx)("img",{className:"w-full h-32 object-cover mb-4",src:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/".concat(e.imageId),alt:e.displayName}),(0,o.jsx)("div",{className:"text-center",children:(0,o.jsx)("div",{className:"font-bold text-xl mb-2",children:e.displayName})})]},e.id)))}):(0,o.jsx)("div",{children:"No categories available"})}}}]);
//# sourceMappingURL=305.1e8ac83a.chunk.js.map