(self.webpackChunkant_design_vue_pro=self.webpackChunkant_design_vue_pro||[]).push([[7413],{13045:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(81278),u=n(95107),a=n(80707),i=function(){function e(){(0,r.Z)(this,e)}return(0,u.Z)(e,null,[{key:"getProjectNotice",value:function(){return a.Z.request({url:"/project/notice",method:"get"})}},{key:"getActivities",value:function(){return a.Z.request({url:"/activities",method:"get"})}},{key:"getChartData",value:function(){return a.Z.request({url:"/fake_chart_data",method:"get"})}},{key:"getTags",value:function(){return a.Z.request({url:"/tags",method:"get"})}}]),e}()},31696:function(e,t,n){"use strict";n.d(t,{$5:function(){return r.$5},O9:function(){return o},yW:function(){return d}});var r=n(62555),u=n(2262),a=n(66252),i=n(57974);function o(e){var t=e||{},n=t.onExitFull,r=t.onFull,o=(0,u.iH)(null),c=(0,u.iH)(n),l=(0,u.iH)(r),d=(0,u.iH)(!1);function s(){if(i.I5.isEnabled){var e=i.I5.isFullscreen;e?l.value&&l.value():(i.I5.off("change",s),c.value&&c.value()),d.value=e}}function f(){var e=function(e,t){if(!e)return t;var n;if("function"==typeof e)n=e();else if("value"in e){var r;n=null===(r=e.value)||void 0===r?void 0:r.$el}else n=e;return n}(o);e&&i.I5.isEnabled&&(i.I5.request(e),i.I5.on("change",s))}function m(){d.value&&i.I5.isEnabled&&i.I5.exit()}return(0,a.Ah)((function(){i.I5.isEnabled&&i.I5.off("change",s)})),[o,d,{setFull:f,exitFull:m,toggleFull:function(){d.value?m():f()}}]}n(86509),n(15862);var c=n(30813),l=(n(21249),n(57327),n(26699),n(32023),n(40561),{align:"center",title:"序号",dataIndex:"my-custom-show-index",customRender:function(e){var t=e.index;return"".concat(t+1)}});function d(e,t){var n="boolean"==typeof t?{checkAll:t,needRowIndex:!1}:{checkAll:!!t.checkAll,needRowIndex:!!t.needRowIndex},r=(0,u.qj)({checkAll:n.checkAll,needRowIndex:n.needRowIndex,checkedList:[],indeterminate:!0}),i=(0,u.iH)((0,c.Z)(e));n.needRowIndex&&i.value.unshift(l);var o=(0,u.iH)(e.map((function(e){return{key:(null==e?void 0:e.key)||e.dataIndex,label:e.title,checked:n.checkAll}}))),d=o.value.map((function(e){return e.key}));function s(){var t=o.value.map((function(e){return e.key}));i.value=e.filter((function(e){return r.checkedList.includes(e.dataIndex)})).sort((function(e,n){var r=e.key||e.dataIndex,u=n.key||n.dataIndex;return t.indexOf(r)-t.indexOf(u)})).map((function(e){return e})),n.needRowIndex&&i.value.unshift(l)}return r.checkedList=d,r.checkAll=n.checkAll,r.indeterminate=!n.checkAll,(0,a.YP)((function(){return r.checkedList}),(function(){r.checkAll=!!r.checkedList.length&&r.checkedList.length===d.length,r.indeterminate=!!r.checkedList.length&&r.checkedList.length<d.length,s()}),{deep:!0}),(0,a.YP)((function(){return o}),(function(){return s()}),{deep:!0}),{dynamicColumns:i,dynamicColumnItems:o,state:r,reset:function(){r.checkedList=d,o.value=e.map((function(e){return{key:(null==e?void 0:e.key)||e.dataIndex,label:e.title,checked:n.checkAll}}))},move:function(e,t){var n=o.value,r=n[e];n.splice(e,1),0===t?n.unshift(r):n.splice(t,0,r),o.value=n},handleColumnAllClick:function(e){var t=e.target.checked;r.checkedList=t?d:[],o.value=o.value.map((function(e){return e.checked=t,e}))},handleColumnChange:function(e,t){var n=e.target.checked;t.checked=n,n?!r.checkedList.includes(t.key)&&r.checkedList.push(t.key):r.checkedList=r.checkedList.filter((function(e){return e!==t.key}))}}}},62555:function(e,t,n){"use strict";n.d(t,{re:function(){return c},$5:function(){return l}});var r=n(37171),u=n(13782),a=(n(35666),n(41539),n(2262)),i=n(66252),o={stripe:!1,loading:!1,current:1,pageSize:20,total:0,dataSource:[]},c=function(e){return function(){return e().then((function(e){return{data:e,total:e.length,success:!0}}))}};function l(e,t,n){var c=(0,a.qj)((0,u.Z)((0,u.Z)({},o),t));function l(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(regeneratorRuntime.mark((function t(){var r,a,i,o,l,d,s,f,m,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!c.loading){t.next=3;break}return t.abrupt("return");case 3:return c.loading=!0,r=c.pageSize,a=void 0===r?20:r,i=c.current,o=void 0===i?1:i,l=!1!==(null==n?void 0:n.pagination)?(0,u.Z)({current:o,pageSize:a},c.requestParams):void 0,t.next=8,e(l);case 8:d=t.sent,s=d.data,f=d.success,m=d.total,v=void 0===m?0:m,c.loading=!1,!1!==f&&(c.dataSource=s,c.total=v),t.next=25;break;case 17:if(t.prev=17,t.t0=t.catch(0),c.loading=!1,void 0!==(null==n?void 0:n.onRequestError)){t.next=24;break}throw new Error(t.t0);case 24:n.onRequestError(t.t0);case 25:case"end":return t.stop()}}),t,null,[[0,17]])})))).apply(this,arguments)}return(0,i.bv)((function(){l().catch((function(e){throw new Error(e)}))})),{context:c,stripe:function(e,t){return t%2==1&&c.stripe&&"ant-pro-table-row-striped"},cancel:function(){},reset:function(){},reload:function(){return new Promise((function(e){e(l())}))},resetPageIndex:function(){c.current=1},setPageInfo:function(e){var t;(t=(0,u.Z)({current:c.current,pageSize:c.pageSize},e)).current&&(c.current=t.current),t.pageSize&&(c.pageSize=t.pageSize),c.requestParams=t}}}},88664:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(66252),u=(0,r.HX)("data-v-7e639701");(0,r.dD)("data-v-7e639701");var a={class:"map-chart"},i=(0,r.Wm)("div",{class:"active-chart-legend"},[(0,r.Wm)("span",null,"00:00"),(0,r.Wm)("span",null,"12:00"),(0,r.Wm)("span",null,"23:00")],-1);(0,r.Cn)();var o=u((function(e,t,n,o,c,l){var d=(0,r.up)("a-statistic"),s=(0,r.up)("a-col"),f=(0,r.up)("a-statistic-countdown"),m=(0,r.up)("a-row"),v=(0,r.up)("v-map"),p=(0,r.up)("a-card"),h=(0,r.up)("v-tiny-area"),g=(0,r.up)("v-gauge"),k=(0,r.up)("v-ring-progress"),x=(0,r.up)("v-word-cloud"),b=(0,r.up)("v-liquid"),y=(0,r.up)("grid-content");return(0,r.wg)(),(0,r.j4)(y,null,{default:u((function(){return[(0,r.Wm)(m,{gutter:24},{default:u((function(){return[(0,r.Wm)(s,{xl:18,lg:24,md:24,sm:24,xs:24,style:{"margin-bottom":"24px"}},{default:u((function(){return[(0,r.Wm)(p,{title:e.t("dashboard.monitor.trading-activity"),bordered:!1,style:{height:"100%"}},{default:u((function(){return[(0,r.Wm)(m,null,{default:u((function(){return[(0,r.Wm)(s,{md:6,sm:12,xs:24},{default:u((function(){return[(0,r.Wm)(d,{title:e.t("dashboard.monitor.total-transactions"),suffix:"元",value:e.numberFormat(124543233,"0,0")},null,8,["title","value"])]})),_:1}),(0,r.Wm)(s,{md:6,sm:12,xs:24},{default:u((function(){return[(0,r.Wm)(d,{title:e.t("dashboard.monitor.sales-target"),value:"92%"},null,8,["title"])]})),_:1}),(0,r.Wm)(s,{md:6,sm:12,xs:24},{default:u((function(){return[(0,r.Wm)(f,{title:e.t("dashboard.monitor.remaining-time"),value:(new Date).getTime()+39e5,format:"HH:mm:ss:SSS"},null,8,["title","value"])]})),_:1}),(0,r.Wm)(s,{md:6,sm:12,xs:24},{default:u((function(){return[(0,r.Wm)(d,{title:e.t("dashboard.monitor.total-transactions-per-second"),suffix:"元",value:e.numberFormat(234,"0,0")},null,8,["title","value"])]})),_:1})]})),_:1}),(0,r.Wm)("div",a,[(0,r.Wm)(v)])]})),_:1},8,["title"])]})),_:1}),(0,r.Wm)(s,{xl:6,lg:24,md:24,sm:24,xs:24},{default:u((function(){return[(0,r.Wm)(p,{title:e.t("dashboard.monitor.activity-forecast"),style:{"margin-bottom":"24px"},bordered:!1},{default:u((function(){return[(0,r.Wm)(d,{title:"目标评估",value:"有望达到预期"}),(0,r.Wm)(h,{data:e.activeData},null,8,["data"]),i]})),_:1},8,["title"]),(0,r.Wm)(p,{title:e.t("dashboard.monitor.efficiency"),style:{"margin-bottom":"24px"},"body-style":{textAlign:"center"},bordered:!1},{default:u((function(){return[(0,r.Wm)(g)]})),_:1},8,["title"])]})),_:1})]})),_:1}),(0,r.Wm)(m,{gutter:24},{default:u((function(){return[(0,r.Wm)(s,{xl:12,lg:24,sm:24,xs:24,style:{"margin-bottom":"24px"}},{default:u((function(){return[(0,r.Wm)(p,{title:e.t("dashboard.monitor.proportion-per-category"),bordered:!1,class:"pie-card"},{default:u((function(){return[(0,r.Wm)(m,{style:{padding:"50px 0"}},{default:u((function(){return[(0,r.Wm)(s,{span:8},{default:u((function(){return[(0,r.Wm)(k,{percent:.28,color:["#60C0FF","#E8EDF3"]},null,8,["percent"])]})),_:1}),(0,r.Wm)(s,{span:8},{default:u((function(){return[(0,r.Wm)(k,{percent:.2,color:["#66F4E3","#E8EDF3"]},null,8,["percent"])]})),_:1}),(0,r.Wm)(s,{span:8},{default:u((function(){return[(0,r.Wm)(k,{percent:.32,color:["#2FC25B","#E8EDF3"]},null,8,["percent"])]})),_:1})]})),_:1})]})),_:1},8,["title"])]})),_:1}),(0,r.Wm)(s,{xl:6,lg:12,sm:24,xs:24,style:{"margin-bottom":"24px"}},{default:u((function(){return[(0,r.Wm)(p,{title:e.t("dashboard.monitor.popular-searches"),loading:e.context.loading,bordered:!1,"body-style":{overflow:"hidden"}},{default:u((function(){return[(0,r.Wm)(x,{data:e.context.dataSource},null,8,["data"])]})),_:1},8,["title","loading"])]})),_:1}),(0,r.Wm)(s,{xl:6,lg:12,sm:24,xs:24,style:{"margin-bottom":"24px"}},{default:u((function(){return[(0,r.Wm)(p,{title:e.t("dashboard.monitor.resource-surplus"),"body-style":{textAlign:"center",fontSize:0},bordered:!1},{default:u((function(){return[(0,r.Wm)(b)]})),_:1},8,["title"])]})),_:1})]})),_:1})]})),_:1})})),c=n(2262),l=n(51916),d=n(31696),s=n(13045),f=n(57974);function m(){for(var e=[],t=0;t<24;t+=1)e.push(Math.floor(200*Math.random())+50*t);return e}function v(){var e=(0,c.iH)(void 0),t=(0,c.iH)(void 0),n=(0,c.iH)(m()),u=function u(){t.value=requestAnimationFrame((function(){e.value=setTimeout((function(){n.value=m(),(0,r.Y3)((function(){u()}))}),1e3)}))},a=function(){clearTimeout(e.value),t.value&&cancelAnimationFrame(t.value)};return(0,r.bv)((function(){u(),(0,r.Ah)((function(){a()}))})),{clear:a,activeData:n}}var p=(0,r.aZ)({name:"Monitor",components:{GridContent:l.fT,VTinyArea:l.nO,VGauge:l.Fk,VRingProgress:l.Wg,VWordCloud:l.KK,VLiquid:l.Vr,VMap:l.Gi},setup:function(){return{t:(0,l.cm)().i18n,context:(0,d.$5)((function(){return s.Z.getTags().then((function(e){return{data:e.list,total:100}}))}),{loading:!1}).context,activeData:v().activeData,numberFormat:f.Y4}}});p.render=o,p.__scopeId="data-v-7e639701";var h=p}}]);