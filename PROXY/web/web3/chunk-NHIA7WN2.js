import{a as h,b as C,e as D,l as _}from"./chunk-IUFCXTOM.js";import{Qa as r,Wa as i,X as d,Xa as l,ab as s,hb as m,ib as g,lb as c,ma as u,mb as f,nb as y,pb as b,za as n}from"./chunk-SLZJNV7T.js";var M=class p{Data;Type="text";Placeholder="";Label="";Name="";Required=!1;Disabled=!1;Value="";DataChange=new u;onValueChange(o){this.DataChange.emit(o)}static \u0275fac=function(t){return new(t||p)};static \u0275cmp=d({type:p,selectors:[["app-input"]],inputs:{Data:"Data",Type:"Type",Placeholder:"Placeholder",Label:"Label",Name:"Name",Required:"Required",Disabled:"Disabled",Value:"Value"},outputs:{DataChange:"DataChange"},standalone:!0,features:[b],decls:4,vars:7,consts:[[1,"mb-6"],[1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white",3,"for"],[1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-purple-500","focus:border-purple-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-purple-500","dark:focus:border-purple-500",3,"ngModelChange","type","id","name","placeholder","ngModel"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"label",1),m(2),l(),i(3,"input",2),y("ngModelChange",function(a){return f(e.Data,a)||(e.Data=a),a}),s("ngModelChange",function(a){return e.onValueChange(a)}),l()()),t&2&&(n(),r("for",e.Name+"_r"),n(),g(e.Name),n(),r("type",e.Type)("id",e.Name+"_r")("name",e.Name)("placeholder",e.Placeholder),c("ngModel",e.Data))},dependencies:[_,h,C,D]})};export{M as a};