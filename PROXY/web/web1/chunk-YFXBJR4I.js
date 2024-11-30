import{a as H,b as L}from"./chunk-6JKU5AZE.js";import{a as P}from"./chunk-6C5IIDLK.js";import{a as z}from"./chunk-GPLEQ2JA.js";import"./chunk-AYLNQSQX.js";import{c as D}from"./chunk-XGW73OEQ.js";import"./chunk-OYXVRMMP.js";import{e as A,g as q}from"./chunk-4L4BNWNP.js";import"./chunk-VTA27IR3.js";import{Eb as l,Fb as S,Lb as B,Mb as $,Ra as s,Sa as E,Y as C,aa as T,eb as V,fb as M,gb as p,hb as F,ja as u,ka as m,kb as j,la as w,lb as f,ma as y,mb as I,nb as _,ob as b,pb as a,qb as n,rb as v,ub as x,vb as g,wb as c}from"./chunk-LXSEPEJS.js";import"./chunk-GAL4ENT6.js";function G(r,d){r&1&&(a(0,"div",0)(1,"div",1),w(),a(2,"svg",2),v(3,"path",3)(4,"path",4),n(),y(),a(5,"span",5),l(6,"Loading..."),n()()())}function R(r,d){r&1&&(a(0,"p"),l(1,"Error"),n())}function O(r,d){if(r&1){let e=x();a(0,"li",26)(1,"input",27),g("change",function(i){u(e);let o=c(3);return m(o.onSubcategoriaChange(i))}),n(),a(2,"label",21),l(3),n()()}if(r&2){let e=d.$implicit,t=c(3);s(),p("id","subcategoria-"+e.nombre)("value",e.nombre)("checked",t.selectedSubcategorias.includes(e.nombre)),s(),p("for","subcategoria-"+e.nombre),s(),S(e.nombre)}}function J(r,d){if(r&1){let e=x();a(0,"li")(1,"input",20),g("change",function(i){let o=u(e).$implicit,h=c(2);return m(h.onCategoriaChange(i,o))}),n(),a(2,"label",21),l(3),n(),a(4,"button",22),g("click",function(){let i=u(e).$implicit,o=c(2);return m(o.toggleCollapse(i.nombre))}),w(),a(5,"svg",23),v(6,"path",24),n()(),y(),a(7,"ul",25),_(8,O,4,5,"li",26,f),n()()}if(r&2){let e=d.$implicit,t=c(2);s(),p("id","categoria-"+e.nombre)("value",e.nombre)("checked",t.selectedCategorias.includes(e.nombre)),s(),p("for","categoria-"+e.nombre),s(),S(e.nombre),s(),M("aria-controls","collapse-"+e.nombre),s(3),F("hidden",!t.collapsedCategorias.includes(e.nombre)),p("id","collapse-"+e.nombre),s(),b(e.subcategorias)}}function K(r,d){if(r&1){let e=x();a(0,"div")(1,"input",27),g("change",function(i){u(e);let o=c(2);return m(o.onMarcaChange(i))}),n(),a(2,"label",21),l(3),n()()}if(r&2){let e=d.$implicit,t=c(2);s(),p("id","marca-"+e.nombre)("value",e.nombre)("checked",t.selectedMarcas.includes(e.nombre)),s(),p("for","marca-"+e.nombre),s(),S(e.nombre)}}function N(r,d){if(r&1&&v(0,"app-producto-item",17),r&2){let e=d.$implicit;p("product",e)}}function Q(r,d){if(r&1){let e=x();a(0,"div",6)(1,"div",7)(2,"div",8)(3,"h3",9),l(4,"Categor\xEDas"),n(),a(5,"div",10)(6,"ul"),_(7,J,10,9,"li",null,f),n()(),a(9,"h3",11),l(10,"Marcas"),n(),a(11,"div",10),_(12,K,4,5,"div",null,f),n()()(),a(14,"div",12)(15,"div")(16,"p",13),l(17,"ordenar:"),n(),a(18,"button",14),g("click",function(){u(e);let i=c();return m(i.orderminmax())}),l(19,"min-max"),n(),a(20,"button",15),g("click",function(){u(e);let i=c();return m(i.ordermaxmin())}),l(21,"max-min"),n()(),a(22,"div",16),_(23,N,1,1,"app-producto-item",17,I),n()()(),a(25,"div",18)(26,"button",19),g("click",function(){u(e);let i=c();return m(i.changePreviusPage())}),l(27," Anterior pagina "),n(),a(28,"button",19),g("click",function(){u(e);let i=c();return m(i.changePage())}),l(29," Siguiente pagina "),n()()}if(r&2){let e=c();s(7),b(e.categorias),s(5),b(e.marcas),s(11),b(e.productsState.state().products)}}var oe=(()=>{class r{route;router;productsState=C(P);cartState=C(D).state;categoriaservice=C(H);marcaservice=C(L);categorias=[];marcas=[];search="";sort="";page=0;selectedCategorias=[];selectedSubcategorias=[];selectedMarcas=[];collapsedCategorias=[];constructor(e,t){this.route=e,this.router=t}ngOnInit(){this.categoriaservice.getAll().subscribe(e=>{this.categorias=e}),this.marcaservice.getAll().subscribe(e=>{this.marcas=e}),this.route.queryParams.subscribe(e=>{this.page=e.page||0;let t=e.search||"",i=e.size||10,o=e.sort||"",h=e.marca||"",k=e.categoria||"",Z=e.subcategoria||"";this.search=this.productsState.state().search,this.productsState.loadProducts(this.page,t,i,o,h,k,Z)})}changePage(){let e=++this.productsState.state().page;this.page=e,this.updateProducts()}changePreviusPage(){let e=--this.productsState.state().page;this.page=e,this.updateProducts()}updateProducts(){let e={};e.page=this.productsState.state().page??0,e.search=this.productsState.state().search??"",e.sort=this.sort??"",e.marca=this.selectedMarcas.join(",")??"",e.categoria=this.selectedCategorias.join(",")??"";let t=this.selectedSubcategorias.filter(i=>{let o=this.categorias.find(h=>h.subcategorias.some(k=>k.nombre===i));return o?!this.selectedCategorias.includes(o.nombre):!0});e.subcategoria=t.join(","),e.marca=this.selectedMarcas.join(",")??"",this.router.navigate(["catalogo"],{queryParams:e,queryParamsHandling:"merge"}),this.productsState.changePage$.next({page:0,search:this.search,size:10,sort:this.sort,marca:this.selectedMarcas.join(","),categoria:this.selectedCategorias.join(","),subcategoria:t.join(",")})}addToCart(e){this.cartState.add({product:e,quantity:1})}onCategoriaChange(e,t){let i=e.target;i.checked?(this.selectedCategorias.push(i.value),t.subcategorias.forEach(o=>{this.selectedSubcategorias.includes(o.nombre)||this.selectedSubcategorias.push(o.nombre)})):(this.selectedCategorias=this.selectedCategorias.filter(o=>o!==i.value),t.subcategorias.forEach(o=>{this.selectedSubcategorias=this.selectedSubcategorias.filter(h=>h!==o.nombre)})),this.updateProducts(),this.toggleCollapse(t.nombre)}onSubcategoriaChange(e){let t=e.target;t.checked?this.selectedSubcategorias.push(t.value):this.selectedSubcategorias=this.selectedSubcategorias.filter(i=>i!==t.value),this.updateProducts()}onMarcaChange(e){let t=e.target;t.checked?this.selectedMarcas.push(t.value):this.selectedMarcas=this.selectedMarcas.filter(i=>i!==t.value),this.updateProducts()}orderminmax(){this.sort="ASC",this.updateProducts()}ordermaxmin(){this.sort="DESC",this.updateProducts()}toggleCollapse(e){this.collapsedCategorias.includes(e)?this.collapsedCategorias=this.collapsedCategorias.filter(t=>t!==e):this.collapsedCategorias.push(e)}trackByFn(e,t){return t.id}static \u0275fac=function(t){return new(t||r)(E(A),E(q))};static \u0275cmp=T({type:r,selectors:[["app-catalogo"]],standalone:!0,features:[B([P]),$],decls:3,vars:1,consts:[[1,"flex","items-center","justify-center"],["role","status"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-8","h-8","text-gray-200","animate-spin","dark:text-gray-600","fill-blue-600"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"],[1,"sr-only"],[1,"grid","grid-cols-5","gap-4"],[1,"flex","col-span-1","justify-center"],[1,"flex","flex-col"],[1,"mb-2","font-bold"],[1,"overflow-auto","h-80"],[1,"mb-2","font-bold","mt-4"],[1,"col-span-4"],[1,"inline-block","px-2","text-xs"],[1,"px-2","h-7","rounded-l-lg","bg-gray-100","hover:bg-gray-300","text-xs",3,"click"],[1,"px-2","h-7","rounded-r-lg","bg-gray-100","hover:bg-gray-300","text-xs",3,"click"],[1,"mb-4","grid","gap-4","sm:grid-cols-2","md:mb-8","lg:grid-cols-3","xl:grid-cols-4"],[1,"block",3,"product"],[1,"flex","justify-end","my-6","gap-4"],[1,"text-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","me-2","mb-2","dark:bg-blue-600","dark:hover:bg-blue-700","focus:outline-none","dark:focus:ring-blue-800",3,"click"],["type","checkbox",1,"rounded-sm","ml-2",3,"change","id","value","checked"],[3,"for"],["aria-expanded","false",1,"ml-2",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","2.5","stroke","currentColor",1,"h-4","w-4"],["stroke-linecap","round","stroke-linejoin","round","d","M8.25 4.5l7.5 7.5-7.5 7.5"],[3,"id"],[1,"ml-4"],["type","checkbox",1,"rounded-sm",3,"change","id","value","checked"]],template:function(t,i){if(t&1&&V(0,G,7,0,"div",0)(1,R,2,0,"p")(2,Q,30,0),t&2){let o;j((o=i.productsState.state.status())==="loading"?0:o==="error"?1:2)}},dependencies:[z],encapsulation:2})}return r})();export{oe as default};
