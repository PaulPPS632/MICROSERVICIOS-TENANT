import{a as ae}from"./chunk-ZPTUBLJZ.js";import{a as _}from"./chunk-6C5IIDLK.js";import"./chunk-GPLEQ2JA.js";import"./chunk-AYLNQSQX.js";import{a as E}from"./chunk-A7ZA3IGE.js";import{c as ne}from"./chunk-XGW73OEQ.js";import{n as oe}from"./chunk-P2X2ACJO.js";import"./chunk-OYXVRMMP.js";import{a as X,b as Y,d as w,e as J,f as Q,g as C,h as $,i as ee,j as te,k as re}from"./chunk-4L4BNWNP.js";import{d as K,f as ie}from"./chunk-VTA27IR3.js";import{Ba as j,Eb as l,Fb as B,Lb as z,Mb as v,Nb as G,Oa as S,Q as I,Ra as g,S as H,Sa as f,Ta as L,Ua as N,Va as P,Xa as V,Y as x,Ya as D,_b as Z,aa as h,da as R,eb as y,gb as p,kb as O,kc as q,la as c,ma as u,pb as n,qb as i,rb as s,tc as U,vb as A,wb as b,wc as W,y as T}from"./chunk-LXSEPEJS.js";import"./chunk-GAL4ENT6.js";var ue="@",ge=(()=>{let t=class t{constructor(r,a,d,m,k){this.doc=r,this.delegate=a,this.zone=d,this.animationType=m,this.moduleImpl=k,this._rendererFactoryPromise=null,this.scheduler=x(N,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-MVZZR43F.js").then(a=>a)).catch(a=>{throw new I(5300,!1)}).then(({\u0275createEngine:a,\u0275AnimationRendererFactory:d})=>{this._engine=a(this.animationType,this.doc);let m=new d(this.delegate,this._engine,this.zone);return this.delegate=m,m})}createRenderer(r,a){let d=this.delegate.createRenderer(r,a);if(d.\u0275type===0)return d;typeof d.throwOnSyntheticProps=="boolean"&&(d.throwOnSyntheticProps=!1);let m=new F(d);return a?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(k=>{let pe=k.createRenderer(r,a);m.use(pe),this.scheduler?.notify(9)}).catch(k=>{m.use(d)}),m}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(a){L()},t.\u0275prov=H({token:t,factory:t.\u0275fac});let o=t;return o})(),F=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,r,a){this.delegate.insertBefore(t,e,r,a)}removeChild(t,e,r){this.delegate.removeChild(t,e,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,r,a){this.delegate.setAttribute(t,e,r,a)}removeAttribute(t,e,r){this.delegate.removeAttribute(t,e,r)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,r,a){this.delegate.setStyle(t,e,r,a)}removeStyle(t,e,r){this.delegate.removeStyle(t,e,r)}setProperty(t,e,r){this.shouldReplay(e)&&this.replay.push(a=>a.setProperty(t,e,r)),this.delegate.setProperty(t,e,r)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,r){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(t,e,r)),this.delegate.listen(t,e,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(ue)}};function le(o="animations"){return V("NgAsyncAnimations"),R([{provide:P,useFactory:(t,e,r)=>new ge(t,e,r,o),deps:[q,X,D]},{provide:j,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var se={providers:[Z({eventCoalescing:!0}),te(ae,re()),K(),le()]};var fe=()=>({exact:!0});function ve(o,t){if(o&1&&(n(0,"span",26),l(1),i()),o&2){let e=b();g(),B(e.cartState.count())}}var de=(()=>{class o{route;router;urllogo="";cartState=x(ne).state;buscado="";productsState=x(_);queryParams={page:0,size:10,search:"",sort:"",marca:"",categoria:"",subcategoria:""};constructor(e,r){this.route=e,this.router=r}ngOnInit(){this.router.events.subscribe(e=>{e instanceof w&&E()})}buscar(e){let r=e.target;this.queryParams.search=r.value,this.router.navigate(["catalogo"],{queryParams:this.queryParams,queryParamsHandling:"merge"})}static \u0275fac=function(r){return new(r||o)(f(J),f(C))};static \u0275cmp=h({type:o,selectors:[["app-header"]],inputs:{urllogo:"urllogo"},standalone:!0,features:[z([_]),v],decls:47,vars:4,consts:[[1,"bg-white","border-gray-200","dark:bg-gray-900"],[1,"max-w-screen-xl","flex","flex-wrap","items-center","justify-between","mx-auto","p-4"],["href","#",1,"flex","items-center","space-x-3","rtl:space-x-reverse"],["alt","TechNet Logo",1,"h-8",3,"src"],[1,"flex","md:order-1"],["type","button","data-collapse-toggle","navbar-search","aria-controls","navbar-search","aria-expanded","false",1,"md:hidden","text-gray-500","dark:text-gray-400","hover:bg-gray-100","dark:hover:bg-gray-700","focus:outline-none","focus:ring-4","focus:ring-gray-200","dark:focus:ring-gray-700","rounded-lg","text-sm","p-2.5","me-1"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"w-5","h-5"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],[1,"sr-only"],[1,"relative","hidden","md:block"],[1,"absolute","inset-y-0","start-0","flex","items-center","ps-3","pointer-events-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["type","text","id","search-navbar2","placeholder","Buscar producto...",1,"block","w-96","p-2","ps-10","text-sm","text-gray-900","border","border-gray-300","rounded-lg","bg-gray-50","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"keydown.enter"],["data-collapse-toggle","navbar-search","type","button","aria-controls","navbar-search","aria-expanded","false",1,"inline-flex","items-center","p-2","w-10","h-10","justify-center","text-sm","text-gray-500","rounded-lg","md:hidden","hover:bg-gray-100","focus:outline-none","focus:ring-2","focus:ring-gray-200","dark:text-gray-400","dark:hover:bg-gray-700","dark:focus:ring-gray-600"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 17 14",1,"w-5","h-5"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M1 1h15M1 7h15M1 13h15"],["id","navbar-search",1,"items-center","justify-between","hidden","w-full","md:flex","md:w-auto","md:order-2"],[1,"relative","mt-3","md:hidden"],["type","text","id","search-navbar","placeholder","Buscar producto...",1,"block","w-full","p-2","ps-10","text-sm","text-gray-900","border","border-gray-300","rounded-lg","bg-gray-50","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"keydown.enter"],[1,"flex","flex-col","p-4","md:p-0","mt-4","font-medium","border","border-gray-100","rounded-lg","bg-gray-50","md:space-x-8","rtl:space-x-reverse","md:flex-row","md:mt-0","md:border-0","md:bg-white","dark:bg-gray-800","md:dark:bg-gray-900","dark:border-gray-700"],["href","#",1,"block","py-2","px-3","text-gray-900","rounded","hover:bg-gray-100","md:hover:bg-transparent","md:hover:text-blue-700","md:p-0","md:dark:hover:text-blue-500","dark:text-white","dark:hover:bg-gray-700","dark:hover:text-white","md:dark:hover:bg-transparent","dark:border-gray-700"],["routerLink","/catalogo",1,"block","py-2","px-3","text-gray-900","rounded","hover:bg-gray-100","md:hover:bg-transparent","md:hover:text-blue-700","md:p-0","md:dark:hover:text-blue-500","dark:text-white","dark:hover:bg-gray-700","dark:hover:text-white","md:dark:hover:bg-transparent","dark:border-gray-700"],[1,"flex","items-center","md:order-3","space-x-3","md:space-x-0","rtl:space-x-reverse"],["routerLink","/carrito","routerLinkActive","!text-blue-500",1,"group","-m-2","flex","items-center","p-2",3,"routerLinkActiveOptions"],["fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","aria-hidden","true",1,"h-6","w-6","flex-shrink-0","text-gray-400","group-hover:text-gray-500"],["stroke-linecap","round","stroke-linejoin","round","d","M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"],[1,"ml-2","text-sm","font-medium","text-gray-700","group-hover:text-gray-800"],["routerLink","/sesion/sign-in","id","sign","type","button",1,"md:order-4","inline-flex","items-center","rounded-lg","justify-center","p-2","text-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","text-sm","px-4","py-2","text-center","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-5","h-5","lg:me-1"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],[1,"hidden","sm:flex"]],template:function(r,a){r&1&&(n(0,"nav",0)(1,"div",1)(2,"a",2),s(3,"img",3),i(),n(4,"div",4)(5,"button",5),c(),n(6,"svg",6),s(7,"path",7),i(),u(),n(8,"span",8),l(9,"Search"),i()(),n(10,"div",9)(11,"div",10),c(),n(12,"svg",11),s(13,"path",7),i(),u(),n(14,"span",8),l(15,"Search icon"),i()(),n(16,"input",12),A("keydown.enter",function(m){return a.buscar(m)}),i()(),n(17,"button",13)(18,"span",8),l(19,"Open main menu"),i(),c(),n(20,"svg",14),s(21,"path",15),i()()(),u(),n(22,"div",16)(23,"div",17)(24,"div",10),c(),n(25,"svg",11),s(26,"path",7),i()(),u(),n(27,"input",18),A("keydown.enter",function(m){return a.buscar(m)}),i()(),n(28,"ul",19)(29,"li")(30,"a",20),l(31,"Inicio"),i()(),n(32,"li")(33,"a",21),l(34,"Catalago"),i()()()(),n(35,"div",22)(36,"a",23),c(),n(37,"svg",24),s(38,"path",25),i(),y(39,ve,2,1,"span",26),i()(),u(),n(40,"button",27)(41,"span",8),l(42,"sign-in"),i(),c(),n(43,"svg",28),s(44,"path",29),i(),u(),n(45,"span",30),l(46,"Iniciar Sesi\xF3n"),i()()()()),r&2&&(g(3),p("src",a.urllogo,S),g(33),p("routerLinkActiveOptions",G(3,fe)),g(3),O(a.cartState.count()>0?39:-1))},dependencies:[$,ee,oe]})}return o})();var me=(()=>{class o{urllogo="";static \u0275fac=function(r){return new(r||o)};static \u0275cmp=h({type:o,selectors:[["app-footer"]],inputs:{urllogo:"urllogo"},standalone:!0,features:[v],decls:63,vars:1,consts:[[1,"bg-white","dark:bg-gray-900"],[1,"mx-auto","w-full","max-w-screen-xl","p-4","py-6","lg:py-8"],[1,"md:flex","md:justify-between"],[1,"mb-6","md:mb-0"],["href","/",1,"flex","items-center"],["alt","TechNet Logo",1,"h-8","me-3",3,"src"],[1,"grid","grid-cols-2","gap-8","sm:gap-6","sm:grid-cols-3"],[1,"mb-6","text-sm","font-semibold","text-gray-900","uppercase","dark:text-white"],[1,"text-gray-500","dark:text-gray-400","font-medium"],[1,"mb-4"],["href","",1,"hover:underline"],[1,"my-6","border-gray-200","sm:mx-auto","dark:border-gray-700","lg:my-8"],[1,"sm:flex","sm:items-center","sm:justify-between"],[1,"text-sm","text-gray-500","sm:text-center","dark:text-gray-400"],["href","/",1,"hover:underline"],[1,"flex","mt-4","sm:justify-center","sm:mt-0"],["href","#",1,"text-gray-500","hover:text-gray-900","dark:hover:text-white"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 8 19",1,"w-4","h-4"],["fill-rule","evenodd","d","M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z","clip-rule","evenodd"],[1,"sr-only"],["href","#",1,"text-gray-500","hover:text-gray-900","dark:hover:text-white","ms-5"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-whatsapp"],["d","M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"]],template:function(r,a){r&1&&(n(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),s(5,"img",5),i()(),n(6,"div",6)(7,"div")(8,"h2",7),l(9," Cat\xE1logo "),i(),n(10,"ul",8)(11,"li",9)(12,"a",10),l(13,"Ofertas"),i()(),n(14,"li",9)(15,"a",10),l(16,"Novedades"),i()(),n(17,"li",9)(18,"a",10),l(19,"Lo m\xE1s vendido"),i()(),n(20,"li",9)(21,"a",10),l(22,"Cat\xE1logo"),i()()()(),n(23,"div")(24,"h2",7),l(25," Nosotros "),i(),n(26,"ul",8)(27,"li",9)(28,"a",10),l(29,"Terminos y Condiciones"),i()(),n(30,"li",9)(31,"a",10),l(32,"Sobre Nosotros"),i()(),n(33,"li",9)(34,"a",10),l(35,"Libro de Reclamaciones"),i()()()(),n(36,"div")(37,"h2",7),l(38," Informaci\xF3n de la Tienda "),i(),n(39,"p"),l(40,"Compuplaza"),i(),n(41,"p"),l(42,"Av. Garcilaso de la Vega 1251"),i(),n(43,"p"),l(44,"Tda. 339"),i()()()(),s(45,"hr",11),n(46,"div",12)(47,"span",13),l(48,"\xA9 2024 "),n(49,"a",14),l(50,"TechNet\u2122"),i(),l(51,". Todos los derechos reservados. "),i(),n(52,"div",15)(53,"a",16),c(),n(54,"svg",17),s(55,"path",18),i(),u(),n(56,"span",19),l(57,"Facebook page"),i()(),n(58,"a",20),c(),n(59,"svg",21),s(60,"path",22),i(),u(),n(61,"span",19),l(62,"WhatsApp page"),i()()()()()()),r&2&&(g(5),p("src",a.urllogo,S))}})}return o})();function xe(o,t){if(o&1&&s(0,"app-header",3),o&2){let e=b();p("urllogo",e.tenant.urllogo)}}function ye(o,t){if(o&1&&s(0,"app-footer",3),o&2){let e=b();p("urllogo",e.tenant.urllogo)}}function be(o,t){o&1&&(n(0,"a",4),c(),n(1,"svg",5),s(2,"path",6)(3,"path",7),i()())}var ce=(()=>{class o{router;tenantService;title="technet";showHeaderFooter=!0;showCarousel=!0;imagenespublicitarias={};tenant={id:"",nombre:"",tiponegocio:"",dominio:"",dominiofront:"",urllogo:""};routeSubscription;constructor(e,r){this.router=e,this.tenantService=r}ngOnInit(){this.router.events.subscribe(e=>{e instanceof w&&E()}),this.routeSubscription=this.router.events.pipe(T(e=>e instanceof w)).subscribe(e=>{let r=["/dashboard"],a=e.urlAfterRedirects;this.showHeaderFooter=!r.some(d=>a.startsWith(d))}),this.tenantService.loadTenant().subscribe(e=>{console.log("Tenant Loaded: ",e),this.tenant=e})}ObjectKeys(e){return Object.keys(e)}static \u0275fac=function(r){return new(r||o)(f(C),f(ie))};static \u0275cmp=h({type:o,selectors:[["app-root"]],standalone:!0,features:[v],decls:5,vars:3,consts:[[3,"urllogo",4,"ngIf"],[1,"mx-auto","max-w-screen-xl","px-4","2xl:px-0"],["href","https://wa.me/51998360536?text=Hola%20necesito%20mas%20informaci\xF3n","class","flex items-center justify-center fixed bottom-10 right-10 z-50 w-16 h-16 bg-[#25d366] text-white rounded-full hover:scale-110 focus:scale-110 transition-all","target","_blank",4,"ngIf"],[3,"urllogo"],["href","https://wa.me/51998360536?text=Hola%20necesito%20mas%20informaci\xF3n","target","_blank",1,"flex","items-center","justify-center","fixed","bottom-10","right-10","z-50","w-16","h-16","bg-[#25d366]","text-white","rounded-full","hover:scale-110","focus:scale-110","transition-all"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24",1,"w-8","h-8"],["fill","currentColor","fill-rule","evenodd","d","M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z","clip-rule","evenodd"],["fill","currentColor","d","M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"]],template:function(r,a){r&1&&(y(0,xe,1,1,"app-header",0),n(1,"div",1),s(2,"router-outlet"),i(),y(3,ye,1,1,"app-footer",0)(4,be,4,0,"a",2)),r&2&&(p("ngIf",a.showHeaderFooter),g(3),p("ngIf",a.showHeaderFooter),g(),p("ngIf",a.showHeaderFooter))},dependencies:[Q,W,U,de,me]})}return o})();Y(ce,se).catch(o=>console.error(o));
