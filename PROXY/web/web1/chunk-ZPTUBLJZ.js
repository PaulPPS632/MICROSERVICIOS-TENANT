import{a as s}from"./chunk-GPLEQ2JA.js";import{g as n}from"./chunk-4L4BNWNP.js";import{g as m}from"./chunk-VTA27IR3.js";import{Y as r,l as e,q as i,z as a}from"./chunk-LXSEPEJS.js";var u=(f,l)=>{let p=r(m),t=r(n);return p.isLoggedIn().pipe(i(o=>o.estado&&o.rol=="cliente"?!0:(t.navigate(["/sesion/sign-in"]),!1)),a(()=>(t.navigate(["/sesion/sign-in"]),e(!1))))};var c=(f,l)=>{let p=r(m),t=r(n);return p.isLoggedIn().pipe(i(o=>o.estado&&o.rol!="cliente"?!0:(t.navigate(["/sesion/sign-in"]),!1)),a(()=>(t.navigate(["/sesion/sign-in"]),e(!1))))};var T=[{path:"",loadChildren:()=>import("./chunk-4SRSEJEW.js")},{path:"carrito",loadChildren:()=>import("./chunk-ZB4DNXWV.js")},{path:"sesion",loadChildren:()=>import("./chunk-COFP7FR5.js")},{path:"panel",canActivate:[u],loadChildren:()=>import("./chunk-FS4FPR4X.js")},{path:"item",component:s},{path:"dashboard",canActivate:[c],loadChildren:()=>import("./chunk-XA2JEC4I.js")},{path:"**",redirectTo:""}];export{T as a};