import{a as i,c as p}from"./chunk-IRNCR7DW.js";import{a as o,c as n}from"./chunk-FRM5A7CD.js";import{N as s,S as a}from"./chunk-SLZJNV7T.js";var u=class r{constructor(t,e){this.http=t;this.authService=e;this.authService.usuario$.subscribe(h=>{this.tenantId=h.tenantId,console.log("Tenant ID:",this.tenantId)})}apiUrl=i.API_URL+"/inventory/categoria";Url=i.API_URL+"/inventory/subcategoria";tenantId=null;getHeaders(){return new o({Authorization:`Bearer ${localStorage.getItem("authToken")}`,tenantId:this.tenantId||""})}getAll(){return this.http.get(this.apiUrl,{headers:this.getHeaders()})}postCategoria(t){return this.http.post(`${this.apiUrl}`,t,{headers:this.getHeaders()})}postSubCategoria(t){return this.http.post(`${this.Url}`,t,{headers:this.getHeaders()})}getSubs(t){return this.http.get(`${this.apiUrl}/subs/${t}`,{headers:this.getHeaders()})}actualizarCategoria(t,e){return this.http.put(`${this.apiUrl}/${t}`,e,{headers:this.getHeaders()})}static \u0275fac=function(e){return new(e||r)(a(n),a(p))};static \u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"})};export{u as a};
