import{c as h,e as a,g as o}from"./chunk-VTA27IR3.js";import{S as s,X as i}from"./chunk-LXSEPEJS.js";var d=(()=>{class e{http;authService;apiUrl=a.API_URL+"/inventario/categoria";Url=a.API_URL+"/inventario/subcategoria";headersAuthorization;headers;constructor(t,r){this.http=t,this.authService=r,this.headers=this.authService.getHeaders(),this.headersAuthorization=this.authService.getHeadersAuthorization()}getAll(){return this.http.get(this.apiUrl,{headers:this.headers})}postCategoria(t){return this.http.post(`${this.apiUrl}`,t,{headers:this.headers})}postSubCategoria(t){return this.http.post(`${this.Url}`,t,{headers:this.headers})}getSubs(t){return this.http.get(`${this.apiUrl}/subs/${t}`,{headers:this.headers})}actualizarCategoria(t,r){return this.http.put(`${this.apiUrl}/${t}`,r,{headers:this.headers})}static \u0275fac=function(r){return new(r||e)(i(h),i(o))};static \u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var f=(()=>{class e{http;authService;apiUrl=a.API_URL+"/inventario/marca";Url=a.API_URL+"/inventario/categoriamarca";headersAuthorization;headers;constructor(t,r){this.http=t,this.authService=r,this.headers=this.authService.getHeaders(),this.headersAuthorization=this.authService.getHeadersAuthorization()}getAll(){return this.http.get(this.apiUrl,{headers:this.headers})}postMarca(t){return this.http.post(`${this.apiUrl}`,t,{headers:this.headers})}postCategoriaMarca(t){return this.http.post(`${this.Url}`,t,{headers:this.headers})}getSubs(t){return this.http.get(`${this.apiUrl}/subs/${t}`,{headers:this.headers})}static \u0275fac=function(r){return new(r||e)(i(h),i(o))};static \u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();export{d as a,f as b};