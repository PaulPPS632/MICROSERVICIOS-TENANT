import{d as p}from"./chunk-XGW73OEQ.js";import{c}from"./chunk-VTA27IR3.js";import{S as o,Y as a,na as n}from"./chunk-LXSEPEJS.js";var s=(()=>{class t{http=a(c);apiUrl=p.API_URL;static \u0275fac=function(e){return new(e||t)};static \u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var j=(()=>{class t extends s{getProducts(r,e,i,f,m,u,d){return this.http.get(`${this.apiUrl}/inventario/producto/paged`,{params:{page:r,search:e,size:i,marca:m,categoria:u,subcategoria:d,sort:f}})}getProduct(r){return this.http.get(`${this.apiUrl}/inventario/producto/${r}`)}static \u0275fac=(()=>{let r;return function(i){return(r||(r=n(t)))(i||t)}})();static \u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();export{j as a};