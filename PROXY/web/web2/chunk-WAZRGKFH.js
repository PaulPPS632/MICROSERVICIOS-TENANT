import{a,c as n,e as r}from"./chunk-ZI72NQKV.js";import{S as i,X as o}from"./chunk-M37WNIG4.js";var d=(()=>{class e{http;constructor(t){this.http=t}headers=new a({Authorization:`Bearer ${localStorage.getItem("authToken")}`});getImagenesPublicitarias(){return this.http.get(r.API_URL+"/inventory/archivos/publicitaria")}postarchivo(t){return this.http.post(`${r.API_URL}/inventory/archivos`,t,{headers:this.headers})}deleteArchivo(t){return this.http.delete(`${r.API_URL}/inventory/archivos/`,{headers:this.headers,body:{url:t}})}static \u0275fac=function(s){return new(s||e)(o(n))};static \u0275prov=i({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();export{d as a};
