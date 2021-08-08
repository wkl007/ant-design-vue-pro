"use strict";(self.webpackChunkant_design_vue_pro=self.webpackChunkant_design_vue_pro||[]).push([[792],{13045:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(80707);class l{static getProjectNotice(){return n.Z.request({url:"/project/notice",method:"get"})}static getActivities(){return n.Z.request({url:"/activities",method:"get"})}static getChartData(){return n.Z.request({url:"/fake_chart_data",method:"get"})}static getTags(){return n.Z.request({url:"/tags",method:"get"})}}},31696:function(e,t,a){a.d(t,{$5:function(){return n.$5},O9:function(){return r},yW:function(){return d}});var n=a(98333),l=a(2262),i=a(66252),c=a(57974);function r(e){const{onExitFull:t,onFull:a}=e||{},n=(0,l.iH)(null),r=(0,l.iH)(t),s=(0,l.iH)(a),d=(0,l.iH)(!1);function o(){if(c.I5.isEnabled){const{isFullscreen:e}=c.I5;e?s.value&&s.value():(c.I5.off("change",o),r.value&&r.value()),d.value=e}}function u(){const e=function(e,t){if(!e)return t;let a;return a="function"==typeof e?e():"value"in e?e.value?.$el:e,a}(n);e&&c.I5.isEnabled&&(c.I5.request(e),c.I5.on("change",o))}function m(){d.value&&c.I5.isEnabled&&c.I5.exit()}return(0,i.Ah)((()=>{c.I5.isEnabled&&c.I5.off("change",o)})),[n,d,{setFull:u,exitFull:m,toggleFull:function(){d.value?m():u()}}]}a(86509),a(15862);const s={align:"center",title:"序号",dataIndex:"my-custom-show-index",customRender:({index:e})=>`${e+1}`};function d(e,t){const a="boolean"==typeof t?{checkAll:t,needRowIndex:!1}:{checkAll:!!t.checkAll,needRowIndex:!!t.needRowIndex},n=(0,l.qj)({checkAll:a.checkAll,needRowIndex:a.needRowIndex,checkedList:[],indeterminate:!0}),c=(0,l.iH)([...e]);a.needRowIndex&&c.value.unshift(s);const r=(0,l.iH)(e.map((e=>({key:e?.key||e.dataIndex,label:e.title,checked:a.checkAll})))),d=r.value.map((e=>e.key));function o(){const t=r.value.map((e=>e.key));c.value=e.filter((e=>n.checkedList.includes(e.dataIndex))).sort(((e,a)=>{const n=e.key||e.dataIndex,l=a.key||a.dataIndex;return t.indexOf(n)-t.indexOf(l)})).map((e=>e)),a.needRowIndex&&c.value.unshift(s)}return n.checkedList=d,n.checkAll=a.checkAll,n.indeterminate=!a.checkAll,(0,i.YP)((()=>n.checkedList),(()=>{n.checkAll=!!n.checkedList.length&&n.checkedList.length===d.length,n.indeterminate=!!n.checkedList.length&&n.checkedList.length<d.length,o()}),{deep:!0}),(0,i.YP)((()=>r),(()=>o()),{deep:!0}),{dynamicColumns:c,dynamicColumnItems:r,state:n,reset:function(){n.checkedList=d,r.value=e.map((e=>({key:e?.key||e.dataIndex,label:e.title,checked:a.checkAll})))},move:function(e,t){const a=r.value,n=a[e];a.splice(e,1),0===t?a.unshift(n):a.splice(t,0,n),r.value=a},handleColumnAllClick:function(e){const t=e.target.checked;n.checkedList=t?d:[],r.value=r.value.map((e=>(e.checked=t,e)))},handleColumnChange:function(e,t){const a=e.target.checked;t.checked=a,a?!n.checkedList.includes(t.key)&&n.checkedList.push(t.key):n.checkedList=n.checkedList.filter((e=>e!==t.key))}}}},98333:function(e,t,a){a.d(t,{re:function(){return c},$5:function(){return r}});var n=a(2262),l=a(66252);const i={stripe:!1,loading:!1,current:1,pageSize:20,total:0,dataSource:[]},c=e=>()=>e().then((e=>({data:e,total:e.length,success:!0})));function r(e,t,a){const c=(0,n.qj)({...i,...t});async function r(){try{if(c.loading)return;c.loading=!0;const{pageSize:t=20,current:n=1}=c,l=!1!==a?.pagination?{current:n,pageSize:t,...c.requestParams}:void 0,{data:i,success:r,total:s=0}=await e(l);c.loading=!1,!1!==r&&(c.dataSource=i,c.total=s)}catch(e){if(c.loading=!1,void 0===a?.onRequestError)throw new Error(e);a.onRequestError(e)}}return(0,l.bv)((()=>{r().catch((e=>{throw new Error(e)}))})),{context:c,stripe:function(e,t){return t%2==1&&c.stripe&&"ant-pro-table-row-striped"},cancel:function(){},reset:function(){},reload:function(){return new Promise((e=>{e(r())}))},resetPageIndex:function(){c.current=1},setPageInfo:e=>{var t;(t={current:c.current,pageSize:c.pageSize,...e}).current&&(c.current=t.current),t.pageSize&&(c.pageSize=t.pageSize),c.requestParams=t}}}},70820:function(e,t,a){a.r(t),a.d(t,{default:function(){return Y}});var n=a(66252),l=a(3577);const i=(0,n.HX)("data-v-eae655f8");(0,n.dD)("data-v-eae655f8");const c={class:"page-header-content"},r={class:"avatar"},s={class:"content"},d={class:"content-title"},o=(0,n.Wm)("span",{class:"welcome-text"},"，祝你开心每一天！",-1),u={key:0,class:"pb10"},m={class:"extra-content"},g={class:"stat-item"},p={class:"stat-item"},f={class:"stat-item"},h=(0,n.Wm)("a",null,"全部项目",-1),v={class:"card-title"},k={class:"card-description"},W=(0,n.Wm)("div",{class:"project-item"},[(0,n.Wm)("a",{href:"/#/"},"科学搬砖组"),(0,n.Wm)("span",{class:"datetime"},"9小时前")],-1),y=(0,n.Uk)("   "),x={class:"events"},w={key:1},b={class:"item-group"},I=(0,n.Wm)("a",null,"操作一",-1),_=(0,n.Wm)("a",null,"操作二",-1),j=(0,n.Wm)("a",null,"操作三",-1),z=(0,n.Wm)("a",null,"操作四",-1),L=(0,n.Wm)("a",null,"操作五",-1),S=(0,n.Wm)("a",null,"操作六",-1),A=(0,n.Uk)(" 添加 "),q={style:{"min-height":"400px"}},C={class:"members"},H={class:"member"};(0,n.Cn)();const R=i(((e,t,a,R,E,P)=>{const Z=(0,n.up)("a-avatar"),$=(0,n.up)("a-statistic"),F=(0,n.up)("a-card-meta"),D=(0,n.up)("a-card"),K=(0,n.up)("a-card-grid"),Y=(0,n.up)("a-list-item-meta"),O=(0,n.up)("a-list-item"),U=(0,n.up)("a-list"),X=(0,n.up)("a-col"),N=(0,n.up)("plus-outlined"),T=(0,n.up)("a-button"),Q=(0,n.up)("v-radar"),V=(0,n.up)("a-row"),B=(0,n.up)("page-container");return(0,n.wg)(),(0,n.j4)(B,{"show-breadcrumb":!1,title:e.t("pages.workplace.title")},{content:i((()=>[(0,n.Wm)("div",c,[(0,n.Wm)("div",r,[(0,n.Wm)(Z,{size:"large",src:e.userInfo.avatar},null,8,["src"])]),(0,n.Wm)("div",s,[(0,n.Wm)("div",d,[(0,n.Uk)(" 早安，"+(0,l.zw)(e.userInfo.nickname)+" ",1),o]),e.userInfo.extra?((0,n.wg)(),(0,n.j4)("div",u,(0,l.zw)(e.userInfo.extra.group),1)):(0,n.kq)("",!0)])])])),extraContent:i((()=>[(0,n.Wm)("div",m,[(0,n.Wm)("div",g,[(0,n.Wm)($,{title:"项目数",value:56})]),(0,n.Wm)("div",p,[(0,n.Wm)($,{title:"团队内排名",value:8,suffix:"/ 24"})]),(0,n.Wm)("div",f,[(0,n.Wm)($,{title:"项目访问",value:2223})])])])),default:i((()=>[(0,n.Wm)("div",null,[(0,n.Wm)(V,{gutter:24},{default:i((()=>[(0,n.Wm)(X,{xl:16,lg:24,md:24,sm:24,xs:24},{default:i((()=>[(0,n.Wm)(D,{style:{"margin-bottom":"24px"},class:"project-list",title:"进行中的项目",loading:e.projects.loading,bordered:!1,"body-style":{padding:0}},{extra:i((()=>[h])),default:i((()=>[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.projects.dataSource,(e=>((0,n.wg)(),(0,n.j4)(K,{class:"project-card-grid",key:e.id},{default:i((()=>[(0,n.Wm)(D,{bordered:!1,"body-style":{padding:0}},{default:i((()=>[(0,n.Wm)(F,null,{title:i((()=>[(0,n.Wm)("div",v,[(0,n.Wm)(Z,{size:"small",src:e.logo},null,8,["src"]),(0,n.Wm)("a",null,(0,l.zw)(e.title),1)])])),description:i((()=>[(0,n.Wm)("div",k,(0,l.zw)(e.description),1)])),_:2},1024),W])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["loading"]),(0,n.Wm)(D,{loading:e.activities.loading,title:"动态",bordered:!1},{default:i((()=>[(0,n.Wm)(U,null,{default:i((()=>[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.activities.dataSource,(e=>((0,n.wg)(),(0,n.j4)(O,{key:e.id},{default:i((()=>[(0,n.Wm)(Y,null,{avatar:i((()=>[(0,n.Wm)(Z,{src:e.user.avatar},null,8,["src"])])),title:i((()=>[(0,n.Wm)("div",null,[(0,n.Wm)("a",null,(0,l.zw)(e.user.name),1),y,(0,n.Wm)("span",x,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.template.split(/@\{([^{}]*)\}/gi),(t=>((0,n.wg)(),(0,n.j4)(n.HY,{key:t},[e[t]?((0,n.wg)(),(0,n.j4)("a",{key:0,href:e[t].link},(0,l.zw)(e[t].name),9,["href"])):((0,n.wg)(),(0,n.j4)("span",w,(0,l.zw)(t),1))],64)))),128))])])])),description:i((()=>[(0,n.Wm)("div",null,(0,l.zw)(e.time),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1}),(0,n.Wm)(X,{style:{padding:"0 12px"},xl:8,lg:24,md:24,sm:24,xs:24},{default:i((()=>[(0,n.Wm)(D,{title:"快速开始 / 便捷导航",style:{"margin-bottom":"24px"},bordered:!1,"body-style":{padding:0}},{default:i((()=>[(0,n.Wm)("div",b,[I,_,j,z,L,S,(0,n.Wm)(T,{size:"small",type:"primary",ghost:""},{icon:i((()=>[(0,n.Wm)(N)])),default:i((()=>[A])),_:1})])])),_:1}),(0,n.Wm)(D,{title:"XX 指数",style:{"margin-bottom":"24px"},loading:e.radar.loading,bordered:!1,"body-style":{padding:0}},{default:i((()=>[(0,n.Wm)("div",q,[(0,n.Wm)(Q,{data:e.radar.dataSource},null,8,["data"])])])),_:1},8,["loading"]),(0,n.Wm)(D,{loading:e.projects.loading,title:"团队",bordered:!1},{default:i((()=>[(0,n.Wm)("div",C,[(0,n.Wm)(V,null,{default:i((()=>[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.projects.dataSource,(e=>((0,n.wg)(),(0,n.j4)(X,{key:`members-item-${e.id}`,span:12},{default:i((()=>[(0,n.Wm)("a",{href:e.href},[(0,n.Wm)(Z,{size:"small",src:e.logo},null,8,["src"]),(0,n.Wm)("span",H,(0,l.zw)(e.member),1)],8,["href"])])),_:2},1024)))),128))])),_:1})])])),_:1},8,["loading"])])),_:1})])),_:1})])])),_:1},8,["title"])}));var E=a(2262),P=a(80894),Z=a(4314),$=a(31696),F=a(28960),D=a(13045),K=(0,n.aZ)({name:"Workplace",components:{VRadar:F.In},setup(){const e=(0,P.oR)(),{t:t}=(0,Z.QT)(),a=(0,E.qj)({loading:!0,radarLoading:!0,teams:[],axis1Opts:{dataKey:"item",line:null,tickLine:null,grid:{lineStyle:{lineDash:null},hideFirstLine:!1}},axis2Opts:{dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},scale:[{dataKey:"score",min:0,max:80}],axisData:[{item:"引用",a:70,b:30,c:40},{item:"口碑",a:60,b:70,c:40},{item:"产量",a:50,b:60,c:40},{item:"贡献",a:40,b:50,c:40},{item:"热度",a:60,b:70,c:40},{item:"引用",a:70,b:50,c:40}]}),{context:l}=(0,$.$5)((()=>D.Z.getProjectNotice().then((e=>({data:e,total:100}))))),{context:i}=(0,$.$5)((()=>D.Z.getActivities().then((e=>({data:e,total:100}))))),{context:c}=(0,$.$5)((()=>D.Z.getChartData().then((e=>({data:e.radarData,total:100})))));return{t:t,state:a,userInfo:(0,n.Fl)((()=>e.getters.userInfo)),projects:l,activities:i,radar:c}}});K.render=R,K.__scopeId="data-v-eae655f8";var Y=K}}]);