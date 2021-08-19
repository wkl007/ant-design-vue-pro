"use strict";(self.webpackChunkant_design_vue_pro=self.webpackChunkant_design_vue_pro||[]).push([[792],{39792:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(91046);class l{static getProjectNotice(){return n.Z.request({url:"/project/notice",method:"get"})}static getActivities(){return n.Z.request({url:"/activities",method:"get"})}static getChartData(){return n.Z.request({url:"/fake_chart_data",method:"get"})}static getTags(){return n.Z.request({url:"/tags",method:"get"})}}},33220:function(e,t,a){a.d(t,{$5:function(){return n.$5},O9:function(){return r},yW:function(){return d}});var n=a(64523),l=a(2262),i=a(66252),c=a(93527);function r(e){const{onExitFull:t,onFull:a}=e||{},n=(0,l.iH)(null),r=(0,l.iH)(t),s=(0,l.iH)(a),d=(0,l.iH)(!1);function u(){if(c.I5.isEnabled){const{isFullscreen:e}=c.I5;e?s.value&&s.value():(c.I5.off("change",u),r.value&&r.value()),d.value=e}}function o(){const e=function(e,t){if(!e)return t;let a;return a="function"==typeof e?e():"value"in e?e.value?.$el:e,a}(n);e&&c.I5.isEnabled&&(c.I5.request(e),c.I5.on("change",u))}function m(){d.value&&c.I5.isEnabled&&c.I5.exit()}return(0,i.Ah)((()=>{c.I5.isEnabled&&c.I5.off("change",u)})),[n,d,{setFull:o,exitFull:m,toggleFull:function(){d.value?m():o()}}]}a(4548),a(83066);const s={align:"center",title:"序号",dataIndex:"my-custom-show-index",customRender:({index:e})=>`${e+1}`};function d(e,t){const a="boolean"==typeof t?{checkAll:t,needRowIndex:!1}:{checkAll:!!t.checkAll,needRowIndex:!!t.needRowIndex},n=(0,l.qj)({checkAll:a.checkAll,needRowIndex:a.needRowIndex,checkedList:[],indeterminate:!0}),c=(0,l.iH)([...e]);a.needRowIndex&&c.value.unshift(s);const r=(0,l.iH)(e.map((e=>({key:e?.key||e.dataIndex,label:e.title,checked:a.checkAll})))),d=r.value.map((e=>e.key));function u(){const t=r.value.map((e=>e.key));c.value=e.filter((e=>n.checkedList.includes(e.dataIndex))).sort(((e,a)=>{const n=e.key||e.dataIndex,l=a.key||a.dataIndex;return t.indexOf(n)-t.indexOf(l)})).map((e=>e)),a.needRowIndex&&c.value.unshift(s)}return n.checkedList=d,n.checkAll=a.checkAll,n.indeterminate=!a.checkAll,(0,i.YP)((()=>n.checkedList),(()=>{n.checkAll=!!n.checkedList.length&&n.checkedList.length===d.length,n.indeterminate=!!n.checkedList.length&&n.checkedList.length<d.length,u()}),{deep:!0}),(0,i.YP)((()=>r),(()=>u()),{deep:!0}),{dynamicColumns:c,dynamicColumnItems:r,state:n,reset:function(){n.checkedList=d,r.value=e.map((e=>({key:e?.key||e.dataIndex,label:e.title,checked:a.checkAll})))},move:function(e,t){const a=r.value,n=a[e];a.splice(e,1),0===t?a.unshift(n):a.splice(t,0,n),r.value=a},handleColumnAllClick:function(e){const t=e.target.checked;n.checkedList=t?d:[],r.value=r.value.map((e=>(e.checked=t,e)))},handleColumnChange:function(e,t){const a=e.target.checked;t.checked=a,a?!n.checkedList.includes(t.key)&&n.checkedList.push(t.key):n.checkedList=n.checkedList.filter((e=>e!==t.key))}}}},64523:function(e,t,a){a.d(t,{re:function(){return c},$5:function(){return r}});var n=a(2262),l=a(66252);const i={stripe:!1,loading:!1,current:1,pageSize:20,total:0,dataSource:[]},c=e=>()=>e().then((e=>({data:e,total:e.length,success:!0})));function r(e,t,a){const c=(0,n.qj)({...i,...t});async function r(){try{if(c.loading)return;c.loading=!0;const{pageSize:t=20,current:n=1}=c,l=!1!==a?.pagination?{current:n,pageSize:t,...c.requestParams}:void 0,{data:i,success:r,total:s=0}=await e(l);c.loading=!1,!1!==r&&(c.dataSource=i,c.total=s)}catch(e){if(c.loading=!1,void 0===a?.onRequestError)throw new Error(e);a.onRequestError(e)}}return(0,l.bv)((()=>{r().catch((e=>{throw new Error(e)}))})),{context:c,stripe:function(e,t){return t%2==1&&c.stripe&&"ant-pro-table-row-striped"},cancel:function(){},reset:function(){},reload:function(){return new Promise((e=>{e(r())}))},resetPageIndex:function(){c.current=1},setPageInfo:e=>{var t;(t={current:c.current,pageSize:c.pageSize,...e}).current&&(c.current=t.current),t.pageSize&&(c.pageSize=t.pageSize),c.requestParams=t}}}},37204:function(e,t,a){a.r(t),a.d(t,{default:function(){return Y}});var n=a(66252),l=a(3577);(0,n.dD)("data-v-eae655f8");const i={class:"page-header-content"},c={class:"avatar"},r={class:"content"},s={class:"content-title"},d=(0,n._)("span",{class:"welcome-text"},"，祝你开心每一天！",-1),u={key:0,class:"pb10"},o={class:"extra-content"},m={class:"stat-item"},g={class:"stat-item"},p={class:"stat-item"},f=(0,n._)("a",null,"全部项目",-1),h={class:"card-title"},v={class:"card-description"},w=(0,n._)("div",{class:"project-item"},[(0,n._)("a",{href:"/#/"},"科学搬砖组"),(0,n._)("span",{class:"datetime"},"9小时前")],-1),k=(0,n.Uk)("   "),_={class:"events"},y=["href"],x={key:1},b={class:"item-group"},I=(0,n._)("a",null,"操作一",-1),W=(0,n._)("a",null,"操作二",-1),z=(0,n._)("a",null,"操作三",-1),j=(0,n._)("a",null,"操作四",-1),L=(0,n._)("a",null,"操作五",-1),S=(0,n._)("a",null,"操作六",-1),A=(0,n.Uk)(" 添加 "),D={style:{"min-height":"400px"}},q={class:"members"},C=["href"],R={class:"member"};(0,n.Cn)();var H=a(2262),E=a(80894),P=a(4314),Z=a(33220),$=a(46693),F=a(39792),K=(0,n.aZ)({name:"Workplace",components:{VRadar:$.In},setup(){const e=(0,E.oR)(),{t:t}=(0,P.QT)(),a=(0,H.qj)({loading:!0,radarLoading:!0,teams:[],axis1Opts:{dataKey:"item",line:null,tickLine:null,grid:{lineStyle:{lineDash:null},hideFirstLine:!1}},axis2Opts:{dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},scale:[{dataKey:"score",min:0,max:80}],axisData:[{item:"引用",a:70,b:30,c:40},{item:"口碑",a:60,b:70,c:40},{item:"产量",a:50,b:60,c:40},{item:"贡献",a:40,b:50,c:40},{item:"热度",a:60,b:70,c:40},{item:"引用",a:70,b:50,c:40}]}),{context:n}=(0,Z.$5)((()=>F.Z.getProjectNotice().then((e=>({data:e,total:100}))))),{context:l}=(0,Z.$5)((()=>F.Z.getActivities().then((e=>({data:e,total:100}))))),{context:i}=(0,Z.$5)((()=>F.Z.getChartData().then((e=>({data:e.radarData,total:100})))));return{t:t,state:a,userInfo:(0,H.Fl)((()=>e.getters.userInfo)),projects:n,activities:l,radar:i}}});K.render=function(e,t,a,H,E,P){const Z=(0,n.up)("a-avatar"),$=(0,n.up)("a-statistic"),F=(0,n.up)("a-card-meta"),K=(0,n.up)("a-card"),Y=(0,n.up)("a-card-grid"),O=(0,n.up)("a-list-item-meta"),U=(0,n.up)("a-list-item"),N=(0,n.up)("a-list"),T=(0,n.up)("a-col"),X=(0,n.up)("plus-outlined"),Q=(0,n.up)("a-button"),V=(0,n.up)("v-radar"),B=(0,n.up)("a-row"),G=(0,n.up)("page-container");return(0,n.wg)(),(0,n.j4)(G,{"show-breadcrumb":!1,title:e.t("pages.workplace.title")},{content:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n._)("div",c,[(0,n.Wm)(Z,{size:"large",src:e.userInfo.avatar},null,8,["src"])]),(0,n._)("div",r,[(0,n._)("div",s,[(0,n.Uk)(" 早安，"+(0,l.zw)(e.userInfo.nickname)+" ",1),d]),e.userInfo.extra?((0,n.wg)(),(0,n.iD)("div",u,(0,l.zw)(e.userInfo.extra.group),1)):(0,n.kq)("",!0)])])])),extraContent:(0,n.w5)((()=>[(0,n._)("div",o,[(0,n._)("div",m,[(0,n.Wm)($,{title:"项目数",value:56})]),(0,n._)("div",g,[(0,n.Wm)($,{title:"团队内排名",value:8,suffix:"/ 24"})]),(0,n._)("div",p,[(0,n.Wm)($,{title:"项目访问",value:2223})])])])),default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)(B,{gutter:24},{default:(0,n.w5)((()=>[(0,n.Wm)(T,{xl:16,lg:24,md:24,sm:24,xs:24},{default:(0,n.w5)((()=>[(0,n.Wm)(K,{style:{"margin-bottom":"24px"},class:"project-list",title:"进行中的项目",loading:e.projects.loading,bordered:!1,"body-style":{padding:0}},{extra:(0,n.w5)((()=>[f])),default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.projects.dataSource,(e=>((0,n.wg)(),(0,n.j4)(Y,{class:"project-card-grid",key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(K,{bordered:!1,"body-style":{padding:0}},{default:(0,n.w5)((()=>[(0,n.Wm)(F,null,{title:(0,n.w5)((()=>[(0,n._)("div",h,[(0,n.Wm)(Z,{size:"small",src:e.logo},null,8,["src"]),(0,n._)("a",null,(0,l.zw)(e.title),1)])])),description:(0,n.w5)((()=>[(0,n._)("div",v,(0,l.zw)(e.description),1)])),_:2},1024),w])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["loading"]),(0,n.Wm)(K,{loading:e.activities.loading,title:"动态",bordered:!1},{default:(0,n.w5)((()=>[(0,n.Wm)(N,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.activities.dataSource,(e=>((0,n.wg)(),(0,n.j4)(U,{key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(O,null,{avatar:(0,n.w5)((()=>[(0,n.Wm)(Z,{src:e.user.avatar},null,8,["src"])])),title:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n._)("a",null,(0,l.zw)(e.user.name),1),k,(0,n._)("span",_,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.template.split(/@\{([^{}]*)\}/gi),(t=>((0,n.wg)(),(0,n.iD)(n.HY,{key:t},[e[t]?((0,n.wg)(),(0,n.iD)("a",{key:0,href:e[t].link},(0,l.zw)(e[t].name),9,y)):((0,n.wg)(),(0,n.iD)("span",x,(0,l.zw)(t),1))],64)))),128))])])])),description:(0,n.w5)((()=>[(0,n._)("div",null,(0,l.zw)(e.time),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1}),(0,n.Wm)(T,{style:{padding:"0 12px"},xl:8,lg:24,md:24,sm:24,xs:24},{default:(0,n.w5)((()=>[(0,n.Wm)(K,{title:"快速开始 / 便捷导航",style:{"margin-bottom":"24px"},bordered:!1,"body-style":{padding:0}},{default:(0,n.w5)((()=>[(0,n._)("div",b,[I,W,z,j,L,S,(0,n.Wm)(Q,{size:"small",type:"primary",ghost:""},{icon:(0,n.w5)((()=>[(0,n.Wm)(X)])),default:(0,n.w5)((()=>[A])),_:1})])])),_:1}),(0,n.Wm)(K,{title:"XX 指数",style:{"margin-bottom":"24px"},loading:e.radar.loading,bordered:!1,"body-style":{padding:0}},{default:(0,n.w5)((()=>[(0,n._)("div",D,[(0,n.Wm)(V,{data:e.radar.dataSource},null,8,["data"])])])),_:1},8,["loading"]),(0,n.Wm)(K,{loading:e.projects.loading,title:"团队",bordered:!1},{default:(0,n.w5)((()=>[(0,n._)("div",q,[(0,n.Wm)(B,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.projects.dataSource,(e=>((0,n.wg)(),(0,n.j4)(T,{key:`members-item-${e.id}`,span:12},{default:(0,n.w5)((()=>[(0,n._)("a",{href:e.href},[(0,n.Wm)(Z,{size:"small",src:e.logo},null,8,["src"]),(0,n._)("span",R,(0,l.zw)(e.member),1)],8,C)])),_:2},1024)))),128))])),_:1})])])),_:1},8,["loading"])])),_:1})])),_:1})])])),_:1},8,["title"])},K.__scopeId="data-v-eae655f8";var Y=K}}]);