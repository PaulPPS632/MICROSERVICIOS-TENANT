import{a as ae}from"./chunk-V57DX7I7.js";import{a as ne}from"./chunk-WAZRGKFH.js";import{a as E}from"./chunk-DMPRNKDM.js";import"./chunk-4SXZVRR4.js";import"./chunk-IYXLXIYD.js";import{a as S}from"./chunk-A7ZA3IGE.js";import{c as re}from"./chunk-37KJ3ULY.js";import"./chunk-OYXVRMMP.js";import{n as ie}from"./chunk-7SM3NR2E.js";import"./chunk-GEJHMLZC.js";import{a as K,b as X,d as b,e as Y,f as J,g as k,h as Q,i as $,j as ee,k as te}from"./chunk-J4GUC5OQ.js";import{d as U}from"./chunk-ZI72NQKV.js";import{$b as G,Ba as H,Eb as s,Fb as O,Mb as B,Nb as v,Ob as z,Q as _,Ra as u,S as T,Sa as g,Ta as R,Ua as j,Va as L,Xa as N,Y as x,Ya as P,aa as h,da as I,eb as y,gb as f,kb as V,la as c,lc as Z,ma as p,pb as r,qb as i,rb as l,uc as q,vb as C,wb as D,xc as W,y as M}from"./chunk-M37WNIG4.js";import"./chunk-GAL4ENT6.js";var pe="@",ue=(()=>{let t=class t{constructor(n,o,d,m,w){this.doc=n,this.delegate=o,this.zone=d,this.animationType=m,this.moduleImpl=w,this._rendererFactoryPromise=null,this.scheduler=x(j,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-QQBFCLNX.js").then(o=>o)).catch(o=>{throw new _(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:d})=>{this._engine=o(this.animationType,this.doc);let m=new d(this.delegate,this._engine,this.zone);return this.delegate=m,m})}createRenderer(n,o){let d=this.delegate.createRenderer(n,o);if(d.\u0275type===0)return d;typeof d.throwOnSyntheticProps=="boolean"&&(d.throwOnSyntheticProps=!1);let m=new A(d);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(w=>{let ce=w.createRenderer(n,o);m.use(ce),this.scheduler?.notify(9)}).catch(w=>{m.use(d)}),m}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(o){R()},t.\u0275prov=T({token:t,factory:t.\u0275fac});let a=t;return a})(),A=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,o){this.delegate.insertBefore(t,e,n,o)}removeChild(t,e,n){this.delegate.removeChild(t,e,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,o){this.delegate.setAttribute(t,e,n,o)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,o){this.delegate.setStyle(t,e,n,o)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(t,e,n)),this.delegate.listen(t,e,n)}shouldReplay(t){return this.replay!==null&&t.startsWith(pe)}};function oe(a="animations"){return N("NgAsyncAnimations"),I([{provide:L,useFactory:(t,e,n)=>new ue(t,e,n,a),deps:[Z,K,P]},{provide:H,useValue:a==="noop"?"NoopAnimations":"BrowserAnimations"}])}var se={providers:[G({eventCoalescing:!0}),ee(ae,te()),U(),oe()]};var ge=()=>({exact:!0});function fe(a,t){if(a&1&&(r(0,"span",27),s(1),i()),a&2){let e=D();u(),O(e.cartState.count())}}var le=(()=>{class a{route;router;cartState=x(re).state;buscado="";productsState=x(E);queryParams={page:0,size:10,search:"",sort:"",marca:"",categoria:"",subcategoria:""};constructor(e,n){this.route=e,this.router=n}ngOnInit(){this.router.events.subscribe(e=>{e instanceof b&&S()})}buscar(e){let n=e.target;this.queryParams.search=n.value,this.router.navigate(["catalogo"],{queryParams:this.queryParams,queryParamsHandling:"merge"})}static \u0275fac=function(n){return new(n||a)(g(Y),g(k))};static \u0275cmp=h({type:a,selectors:[["app-header"]],standalone:!0,features:[B([E]),v],decls:49,vars:3,consts:[[1,"bg-white","border-gray-200","dark:bg-gray-900"],[1,"max-w-screen-xl","flex","flex-wrap","items-center","justify-between","mx-auto","p-4"],["href","#",1,"flex","items-center","space-x-3","rtl:space-x-reverse"],["src","favicon.png","alt","TechNet Logo",1,"h-8"],[1,"self-center","text-2xl","font-semibold","whitespace-nowrap","dark:text-white"],[1,"flex","md:order-1"],["type","button","data-collapse-toggle","navbar-search","aria-controls","navbar-search","aria-expanded","false",1,"md:hidden","text-gray-500","dark:text-gray-400","hover:bg-gray-100","dark:hover:bg-gray-700","focus:outline-none","focus:ring-4","focus:ring-gray-200","dark:focus:ring-gray-700","rounded-lg","text-sm","p-2.5","me-1"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"w-5","h-5"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"],[1,"sr-only"],[1,"relative","hidden","md:block"],[1,"absolute","inset-y-0","start-0","flex","items-center","ps-3","pointer-events-none"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 20",1,"w-4","h-4","text-gray-500","dark:text-gray-400"],["type","text","id","search-navbar2","placeholder","Buscar producto...",1,"block","w-96","p-2","ps-10","text-sm","text-gray-900","border","border-gray-300","rounded-lg","bg-gray-50","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"keydown.enter"],["data-collapse-toggle","navbar-search","type","button","aria-controls","navbar-search","aria-expanded","false",1,"inline-flex","items-center","p-2","w-10","h-10","justify-center","text-sm","text-gray-500","rounded-lg","md:hidden","hover:bg-gray-100","focus:outline-none","focus:ring-2","focus:ring-gray-200","dark:text-gray-400","dark:hover:bg-gray-700","dark:focus:ring-gray-600"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 17 14",1,"w-5","h-5"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M1 1h15M1 7h15M1 13h15"],["id","navbar-search",1,"items-center","justify-between","hidden","w-full","md:flex","md:w-auto","md:order-2"],[1,"relative","mt-3","md:hidden"],["type","text","id","search-navbar","placeholder","Buscar producto...",1,"block","w-full","p-2","ps-10","text-sm","text-gray-900","border","border-gray-300","rounded-lg","bg-gray-50","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"keydown.enter"],[1,"flex","flex-col","p-4","md:p-0","mt-4","font-medium","border","border-gray-100","rounded-lg","bg-gray-50","md:space-x-8","rtl:space-x-reverse","md:flex-row","md:mt-0","md:border-0","md:bg-white","dark:bg-gray-800","md:dark:bg-gray-900","dark:border-gray-700"],["href","#",1,"block","py-2","px-3","text-gray-900","rounded","hover:bg-gray-100","md:hover:bg-transparent","md:hover:text-blue-700","md:p-0","md:dark:hover:text-blue-500","dark:text-white","dark:hover:bg-gray-700","dark:hover:text-white","md:dark:hover:bg-transparent","dark:border-gray-700"],["routerLink","/catalogo",1,"block","py-2","px-3","text-gray-900","rounded","hover:bg-gray-100","md:hover:bg-transparent","md:hover:text-blue-700","md:p-0","md:dark:hover:text-blue-500","dark:text-white","dark:hover:bg-gray-700","dark:hover:text-white","md:dark:hover:bg-transparent","dark:border-gray-700"],[1,"flex","items-center","md:order-3","space-x-3","md:space-x-0","rtl:space-x-reverse"],["routerLink","/carrito","routerLinkActive","!text-blue-500",1,"group","-m-2","flex","items-center","p-2",3,"routerLinkActiveOptions"],["fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","aria-hidden","true",1,"h-6","w-6","flex-shrink-0","text-gray-400","group-hover:text-gray-500"],["stroke-linecap","round","stroke-linejoin","round","d","M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"],[1,"ml-2","text-sm","font-medium","text-gray-700","group-hover:text-gray-800"],["routerLink","/sesion/sign-in","id","sign","type","button",1,"md:order-4","inline-flex","items-center","rounded-lg","justify-center","p-2","text-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","text-sm","px-4","py-2","text-center","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","width","24","height","24","fill","none","viewBox","0 0 24 24",1,"w-5","h-5","lg:me-1"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],[1,"hidden","sm:flex"]],template:function(n,o){n&1&&(r(0,"nav",0)(1,"div",1)(2,"a",2),l(3,"img",3),r(4,"span",4),s(5,"TechNet web2"),i()(),r(6,"div",5)(7,"button",6),c(),r(8,"svg",7),l(9,"path",8),i(),p(),r(10,"span",9),s(11,"Search"),i()(),r(12,"div",10)(13,"div",11),c(),r(14,"svg",12),l(15,"path",8),i(),p(),r(16,"span",9),s(17,"Search icon"),i()(),r(18,"input",13),C("keydown.enter",function(m){return o.buscar(m)}),i()(),r(19,"button",14)(20,"span",9),s(21,"Open main menu"),i(),c(),r(22,"svg",15),l(23,"path",16),i()()(),p(),r(24,"div",17)(25,"div",18)(26,"div",11),c(),r(27,"svg",12),l(28,"path",8),i()(),p(),r(29,"input",19),C("keydown.enter",function(m){return o.buscar(m)}),i()(),r(30,"ul",20)(31,"li")(32,"a",21),s(33,"Inicio"),i()(),r(34,"li")(35,"a",22),s(36,"Catalago"),i()()()(),r(37,"div",23)(38,"a",24),c(),r(39,"svg",25),l(40,"path",26),i(),y(41,fe,2,1,"span",27),i()(),p(),r(42,"button",28)(43,"span",9),s(44,"sign-in"),i(),c(),r(45,"svg",29),l(46,"path",30),i(),p(),r(47,"span",31),s(48,"Iniciar Sesi\xF3n"),i()()()()),n&2&&(u(38),f("routerLinkActiveOptions",z(2,ge)),u(3),V(o.cartState.count()>0?41:-1))},dependencies:[Q,$,ie]})}return a})();var de=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=h({type:a,selectors:[["app-footer"]],standalone:!0,features:[v],decls:65,vars:0,consts:[[1,"bg-white","dark:bg-gray-900"],[1,"mx-auto","w-full","max-w-screen-xl","p-4","py-6","lg:py-8"],[1,"md:flex","md:justify-between"],[1,"mb-6","md:mb-0"],["href","/",1,"flex","items-center"],["src","favicon.ico","alt","TechNet Logo",1,"h-8","me-3"],[1,"self-center","text-2xl","font-semibold","whitespace-nowrap","dark:text-white"],[1,"grid","grid-cols-2","gap-8","sm:gap-6","sm:grid-cols-3"],[1,"mb-6","text-sm","font-semibold","text-gray-900","uppercase","dark:text-white"],[1,"text-gray-500","dark:text-gray-400","font-medium"],[1,"mb-4"],["href","",1,"hover:underline"],[1,"my-6","border-gray-200","sm:mx-auto","dark:border-gray-700","lg:my-8"],[1,"sm:flex","sm:items-center","sm:justify-between"],[1,"text-sm","text-gray-500","sm:text-center","dark:text-gray-400"],["href","/",1,"hover:underline"],[1,"flex","mt-4","sm:justify-center","sm:mt-0"],["href","#",1,"text-gray-500","hover:text-gray-900","dark:hover:text-white"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 8 19",1,"w-4","h-4"],["fill-rule","evenodd","d","M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z","clip-rule","evenodd"],[1,"sr-only"],["href","#",1,"text-gray-500","hover:text-gray-900","dark:hover:text-white","ms-5"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-whatsapp"],["d","M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"]],template:function(n,o){n&1&&(r(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),l(5,"img",5),r(6,"span",6),s(7,"TechNet"),i()()(),r(8,"div",7)(9,"div")(10,"h2",8),s(11,"Cat\xE1logo"),i(),r(12,"ul",9)(13,"li",10)(14,"a",11),s(15,"Ofertas"),i()(),r(16,"li",10)(17,"a",11),s(18,"Novedades"),i()(),r(19,"li",10)(20,"a",11),s(21,"Lo m\xE1s vendido"),i()(),r(22,"li",10)(23,"a",11),s(24,"Cat\xE1logo"),i()()()(),r(25,"div")(26,"h2",8),s(27,"Nosotros"),i(),r(28,"ul",9)(29,"li",10)(30,"a",11),s(31,"Terminos y Condiciones"),i()(),r(32,"li",10)(33,"a",11),s(34,"Sobre Nosotros"),i()(),r(35,"li",10)(36,"a",11),s(37,"Libro de Reclamaciones"),i()()()(),r(38,"div")(39,"h2",8),s(40,"Informaci\xF3n de la Tienda"),i(),r(41,"p"),s(42,"Compuplaza"),i(),r(43,"p"),s(44,"Av. Garcilaso de la Vega 1251"),i(),r(45,"p"),s(46,"Tda. 339"),i()()()(),l(47,"hr",12),r(48,"div",13)(49,"span",14),s(50,"\xA9 2024 "),r(51,"a",15),s(52,"TechNet\u2122"),i(),s(53,". Todos los derechos reservados. "),i(),r(54,"div",16)(55,"a",17),c(),r(56,"svg",18),l(57,"path",19),i(),p(),r(58,"span",20),s(59,"Facebook page"),i()(),r(60,"a",21),c(),r(61,"svg",22),l(62,"path",23),i(),p(),r(63,"span",20),s(64,"WhatsApp page"),i()()()()()())}})}return a})();function ve(a,t){a&1&&l(0,"app-header")}function xe(a,t){a&1&&l(0,"app-footer")}function ye(a,t){a&1&&(r(0,"a",3),c(),r(1,"svg",4),l(2,"path",5)(3,"path",6),i()())}var me=(()=>{class a{router;archivosService;title="technet";showHeaderFooter=!0;showCarousel=!0;imagenespublicitarias={};routeSubscription;constructor(e,n){this.router=e,this.archivosService=n}ngOnInit(){this.router.events.subscribe(e=>{e instanceof b&&S()}),this.routeSubscription=this.router.events.pipe(M(e=>e instanceof b)).subscribe(e=>{let n=["/dashboard"],o=e.urlAfterRedirects;this.showHeaderFooter=!n.some(d=>o.startsWith(d))}),this.archivosService.getImagenesPublicitarias().subscribe(e=>{this.imagenespublicitarias=e})}ObjectKeys(e){return Object.keys(e)}static \u0275fac=function(n){return new(n||a)(g(k),g(ne))};static \u0275cmp=h({type:a,selectors:[["app-root"]],standalone:!0,features:[v],decls:5,vars:3,consts:[[4,"ngIf"],[1,"mx-auto","max-w-screen-xl","px-4","2xl:px-0"],["href","https://wa.me/51998360536?text=Hola%20necesito%20mas%20informaci\xF3n","class","flex items-center justify-center fixed bottom-10 right-10 z-50 w-16 h-16 bg-[#25d366] text-white rounded-full hover:scale-110 focus:scale-110 transition-all","target","_blank",4,"ngIf"],["href","https://wa.me/51998360536?text=Hola%20necesito%20mas%20informaci\xF3n","target","_blank",1,"flex","items-center","justify-center","fixed","bottom-10","right-10","z-50","w-16","h-16","bg-[#25d366]","text-white","rounded-full","hover:scale-110","focus:scale-110","transition-all"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24",1,"w-8","h-8"],["fill","currentColor","fill-rule","evenodd","d","M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z","clip-rule","evenodd"],["fill","currentColor","d","M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"]],template:function(n,o){n&1&&(y(0,ve,1,0,"app-header",0),r(1,"div",1),l(2,"router-outlet"),i(),y(3,xe,1,0,"app-footer",0)(4,ye,4,0,"a",2)),n&2&&(f("ngIf",o.showHeaderFooter),u(3),f("ngIf",o.showHeaderFooter),u(),f("ngIf",o.showHeaderFooter))},dependencies:[J,W,q,le,de]})}return a})();X(me,se).catch(a=>console.error(a));