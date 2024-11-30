import{a as L,c as P}from"./chunk-IRNCR7DW.js";import{a as k,c as R}from"./chunk-FRM5A7CD.js";import{r as Z}from"./chunk-FFKOQB2C.js";import{Aa as M,Ia as B,N as I,O as A,Qa as m,S as d,T as g,Wa as O,X as c,Xa as y,Y as S,Ya as n,da as x,eb as a,fb as o,gb as h,h as v,ma as C,na as w,pb as p,ta as D,za as f}from"./chunk-SLZJNV7T.js";import{f as b}from"./chunk-EQDQRRRY.js";var H=["chart"],U=(()=>{class s{constructor(){this.autoUpdateSeries=!0,this.chartReady=new C,this.chartInstance=B(null),this.ngZone=g(w),this.isBrowser=Z(g(D))}ngOnChanges(e){this.isBrowser&&this.ngZone.runOutsideAngular(()=>{v.schedule(()=>this.hydrate(e))})}ngOnDestroy(){this.destroy()}hydrate(e){if(this.autoUpdateSeries&&Object.keys(e).filter(i=>i!=="series").length===0){this.updateSeries(this.series,!0);return}this.createElement()}createElement(){return b(this,null,function*(){let{default:e}=yield import("./chunk-DQLEG5UQ.js");window.ApexCharts||=e;let t={};this.annotations&&(t.annotations=this.annotations),this.chart&&(t.chart=this.chart),this.colors&&(t.colors=this.colors),this.dataLabels&&(t.dataLabels=this.dataLabels),this.series&&(t.series=this.series),this.stroke&&(t.stroke=this.stroke),this.labels&&(t.labels=this.labels),this.legend&&(t.legend=this.legend),this.fill&&(t.fill=this.fill),this.tooltip&&(t.tooltip=this.tooltip),this.plotOptions&&(t.plotOptions=this.plotOptions),this.responsive&&(t.responsive=this.responsive),this.markers&&(t.markers=this.markers),this.noData&&(t.noData=this.noData),this.xaxis&&(t.xaxis=this.xaxis),this.yaxis&&(t.yaxis=this.yaxis),this.forecastDataPoints&&(t.forecastDataPoints=this.forecastDataPoints),this.grid&&(t.grid=this.grid),this.states&&(t.states=this.states),this.title&&(t.title=this.title),this.subtitle&&(t.subtitle=this.subtitle),this.theme&&(t.theme=this.theme),this.destroy();let i=this.ngZone.runOutsideAngular(()=>new e(this.chartElement.nativeElement,t));this.chartInstance.set(i),this.render(),this.chartReady.emit({chartObj:i})})}render(){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.render())}updateOptions(e,t,i,l){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.updateOptions(e,t,i,l))}updateSeries(e,t){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.updateSeries(e,t))}appendSeries(e,t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.appendSeries(e,t))}appendData(e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.appendData(e))}highlightSeries(e){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.highlightSeries(e))}toggleSeries(e){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.toggleSeries(e))}showSeries(e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.showSeries(e))}hideSeries(e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.hideSeries(e))}resetSeries(){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.resetSeries())}zoomX(e,t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.zoomX(e,t))}toggleDataPointSelection(e,t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.toggleDataPointSelection(e,t))}destroy(){this.chartInstance()?.destroy(),this.chartInstance.set(null)}setLocale(e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.setLocale(e))}paper(){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.paper())}addXaxisAnnotation(e,t,i){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addXaxisAnnotation(e,t,i))}addYaxisAnnotation(e,t,i){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addYaxisAnnotation(e,t,i))}addPointAnnotation(e,t,i){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addPointAnnotation(e,t,i))}removeAnnotation(e,t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.removeAnnotation(e,t))}clearAnnotations(e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.clearAnnotations(e))}dataURI(e){return this.chartInstance()?.dataURI(e)}static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275cmp=c({type:s,selectors:[["apx-chart"]],viewQuery:function(t,i){if(t&1&&a(H,7),t&2){let l;o(l=h())&&(i.chartElement=l.first)}},inputs:{chart:"chart",annotations:"annotations",colors:"colors",dataLabels:"dataLabels",series:"series",stroke:"stroke",labels:"labels",legend:"legend",markers:"markers",noData:"noData",fill:"fill",tooltip:"tooltip",plotOptions:"plotOptions",responsive:"responsive",xaxis:"xaxis",yaxis:"yaxis",forecastDataPoints:"forecastDataPoints",grid:"grid",states:"states",title:"title",subtitle:"subtitle",theme:"theme",autoUpdateSeries:"autoUpdateSeries"},outputs:{chartReady:"chartReady"},standalone:!0,features:[x,p],decls:2,vars:0,consts:[["chart",""]],template:function(t,i){t&1&&n(0,"div",null,0)},encapsulation:2,changeDetection:0})}}return s})();var j=(()=>{class s{static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275mod=S({type:s})}static{this.\u0275inj=A({})}}return s})();var u=class s{constructor(r,e){this.http=r;this.authService=e;this.authService.usuario$.subscribe(t=>{this.tenantId=t.tenantId,console.log("Tenant ID:",this.tenantId)})}apiUrl=L.API_URL;tenantId=null;getHeaders(){return new k({Authorization:`Bearer ${localStorage.getItem("authToken")}`,tenantId:this.tenantId||""})}getVentasReporte(){return this.http.get(this.apiUrl+"/inventory/reportes",{headers:this.getHeaders()})}getproductosMasVendidos(){return this.http.get(this.apiUrl+"/inventory/reportes/productos-mas-vendidos",{headers:this.getHeaders()})}static \u0275fac=function(e){return new(e||s)(d(R),d(P))};static \u0275prov=I({token:s,factory:s.\u0275fac,providedIn:"root"})};var N=["chartBar"],z=["chartmultiline"],E=class s{constructor(r){this.reporteService=r;this.chartOptionsMultiline={series:[],chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},zoom:{enabled:!1},toolbar:{show:!1}},colors:["#77B6EA","#545454"],dataLabels:{enabled:!0},stroke:{curve:"smooth"},title:{text:"Ventas diarias por usuario",align:"left"},grid:{borderColor:"#e7e7e7",row:{colors:["#f3f3f3","transparent"],opacity:.5}},markers:{size:1},xaxis:{categories:[],title:{text:"Date"}},yaxis:{title:{text:"Ventas"},min:0},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5}},this.chartOptionsBar={series:[{name:"distibuted",data:[]}],chart:{height:350,type:"bar"},colors:["#008FFB"],plotOptions:{bar:{columnWidth:"45%",distributed:!0}},title:{text:"Productos mas Vendidos",align:"left"},dataLabels:{enabled:!1},legend:{show:!1},grid:{show:!1},xaxis:{categories:[],labels:{style:{colors:["#008FFB"],fontSize:"12px"}}}}}chartbar;chartmultiline;chartOptionsMultiline;chartOptionsBar;ngOnInit(){this.reporteService.getVentasReporte().subscribe(r=>{console.log(r),this.chartOptionsMultiline.series=r.series,this.chartOptionsMultiline.xaxis.categories=r.fechas}),this.reporteService.getproductosMasVendidos().subscribe(r=>{this.chartOptionsBar.series=[{name:"Ventas",data:r.cantidades}],this.chartOptionsBar.xaxis.categories=r.nombres})}static \u0275fac=function(e){return new(e||s)(M(u))};static \u0275cmp=c({type:s,selectors:[["app-reportes"]],viewQuery:function(e,t){if(e&1&&(a(N,5),a(z,5)),e&2){let i;o(i=h())&&(t.chartbar=i.first),o(i=h())&&(t.chartmultiline=i.first)}},standalone:!0,features:[p],decls:4,vars:20,consts:[["id","chartmultiline"],[3,"series","chart","colors","xaxis","yaxis","dataLabels","grid","stroke","title","legend"],["id","chartBar"]],template:function(e,t){e&1&&(O(0,"div",0),n(1,"apx-chart",1),y(),O(2,"div",2),n(3,"apx-chart",1),y()),e&2&&(f(),m("series",t.chartOptionsMultiline.series)("chart",t.chartOptionsMultiline.chart)("colors",t.chartOptionsMultiline.colors)("xaxis",t.chartOptionsMultiline.xaxis)("yaxis",t.chartOptionsMultiline.yaxis)("dataLabels",t.chartOptionsMultiline.dataLabels)("grid",t.chartOptionsMultiline.grid)("stroke",t.chartOptionsMultiline.stroke)("title",t.chartOptionsMultiline.title)("legend",t.chartOptionsMultiline.legend),f(2),m("series",t.chartOptionsBar.series)("chart",t.chartOptionsBar.chart)("colors",t.chartOptionsBar.colors)("xaxis",t.chartOptionsBar.xaxis)("yaxis",t.chartOptionsBar.yaxis)("dataLabels",t.chartOptionsBar.dataLabels)("grid",t.chartOptionsBar.grid)("stroke",t.chartOptionsBar.stroke)("title",t.chartOptionsBar.title)("legend",t.chartOptionsBar.legend))},dependencies:[j,U]})};export{E as ReportesComponent};
