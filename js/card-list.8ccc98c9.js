"use strict";(self.webpackChunkant_design_vue_pro=self.webpackChunkant_design_vue_pro||[]).push([[747],{32085:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(80707);class c{static getFakeList(e){return a.Z.request({url:"/fake_list",method:"get",params:e})}static getRule(e){return a.Z.request({url:"/rule",method:"get",params:e})}}},31696:function(e,t,n){n.d(t,{$5:function(){return a.$5},O9:function(){return r},yW:function(){return o}});var a=n(98333),c=n(2262),l=n(66252),i=n(57974);function r(e){const{onExitFull:t,onFull:n}=e||{},a=(0,c.iH)(null),r=(0,c.iH)(t),u=(0,c.iH)(n),o=(0,c.iH)(!1);function s(){if(i.I5.isEnabled){const{isFullscreen:e}=i.I5;e?u.value&&u.value():(i.I5.off("change",s),r.value&&r.value()),o.value=e}}function d(){const e=function(e,t){if(!e)return t;let n;return n="function"==typeof e?e():"value"in e?e.value?.$el:e,n}(a);e&&i.I5.isEnabled&&(i.I5.request(e),i.I5.on("change",s))}function m(){o.value&&i.I5.isEnabled&&i.I5.exit()}return(0,l.Ah)((()=>{i.I5.isEnabled&&i.I5.off("change",s)})),[a,o,{setFull:d,exitFull:m,toggleFull:function(){o.value?m():d()}}]}n(86509),n(15862);const u={align:"center",title:"序号",dataIndex:"my-custom-show-index",customRender:({index:e})=>`${e+1}`};function o(e,t){const n="boolean"==typeof t?{checkAll:t,needRowIndex:!1}:{checkAll:!!t.checkAll,needRowIndex:!!t.needRowIndex},a=(0,c.qj)({checkAll:n.checkAll,needRowIndex:n.needRowIndex,checkedList:[],indeterminate:!0}),i=(0,c.iH)([...e]);n.needRowIndex&&i.value.unshift(u);const r=(0,c.iH)(e.map((e=>({key:e?.key||e.dataIndex,label:e.title,checked:n.checkAll})))),o=r.value.map((e=>e.key));function s(){const t=r.value.map((e=>e.key));i.value=e.filter((e=>a.checkedList.includes(e.dataIndex))).sort(((e,n)=>{const a=e.key||e.dataIndex,c=n.key||n.dataIndex;return t.indexOf(a)-t.indexOf(c)})).map((e=>e)),n.needRowIndex&&i.value.unshift(u)}return a.checkedList=o,a.checkAll=n.checkAll,a.indeterminate=!n.checkAll,(0,l.YP)((()=>a.checkedList),(()=>{a.checkAll=!!a.checkedList.length&&a.checkedList.length===o.length,a.indeterminate=!!a.checkedList.length&&a.checkedList.length<o.length,s()}),{deep:!0}),(0,l.YP)((()=>r),(()=>s()),{deep:!0}),{dynamicColumns:i,dynamicColumnItems:r,state:a,reset:function(){a.checkedList=o,r.value=e.map((e=>({key:e?.key||e.dataIndex,label:e.title,checked:n.checkAll})))},move:function(e,t){const n=r.value,a=n[e];n.splice(e,1),0===t?n.unshift(a):n.splice(t,0,a),r.value=n},handleColumnAllClick:function(e){const t=e.target.checked;a.checkedList=t?o:[],r.value=r.value.map((e=>(e.checked=t,e)))},handleColumnChange:function(e,t){const n=e.target.checked;t.checked=n,n?!a.checkedList.includes(t.key)&&a.checkedList.push(t.key):a.checkedList=a.checkedList.filter((e=>e!==t.key))}}}},98333:function(e,t,n){n.d(t,{re:function(){return i},$5:function(){return r}});var a=n(2262),c=n(66252);const l={stripe:!1,loading:!1,current:1,pageSize:20,total:0,dataSource:[]},i=e=>()=>e().then((e=>({data:e,total:e.length,success:!0})));function r(e,t,n){const i=(0,a.qj)({...l,...t});async function r(){try{if(i.loading)return;i.loading=!0;const{pageSize:t=20,current:a=1}=i,c=!1!==n?.pagination?{current:a,pageSize:t,...i.requestParams}:void 0,{data:l,success:r,total:u=0}=await e(c);i.loading=!1,!1!==r&&(i.dataSource=l,i.total=u)}catch(e){if(i.loading=!1,void 0===n?.onRequestError)throw new Error(e);n.onRequestError(e)}}return(0,c.bv)((()=>{r().catch((e=>{throw new Error(e)}))})),{context:i,stripe:function(e,t){return t%2==1&&i.stripe&&"ant-pro-table-row-striped"},cancel:function(){},reset:function(){},reload:function(){return new Promise((e=>{e(r())}))},resetPageIndex:function(){i.current=1},setPageInfo:e=>{var t;(t={current:i.current,pageSize:i.pageSize,...e}).current&&(i.current=t.current),t.pageSize&&(i.pageSize=t.pageSize),i.requestParams=t}}}},56529:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(66252),c=n(3577);const l=(0,a.HX)("data-v-5202d918");(0,a.dD)("data-v-5202d918");const i=(0,a.Wm)("div",{class:"page-header-content"},[(0,a.Wm)("p",null," 段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。 "),(0,a.Wm)("div",{class:"content-link"},[(0,a.Wm)("a",null,[(0,a.Wm)("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"}),(0,a.Uk)(" 快速开始 ")]),(0,a.Wm)("a",null,[(0,a.Wm)("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"}),(0,a.Uk)(" 产品简介 ")]),(0,a.Wm)("a",null,[(0,a.Wm)("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"}),(0,a.Uk)(" 产品文档 ")])])],-1),r=(0,a.Wm)("div",{class:"extra-img"},[(0,a.Wm)("img",{alt:"这是一个标题",src:"https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"})],-1),u=(0,a.Uk)(" 新增产品 "),o={class:"card-description"},s=(0,a.Wm)("a",null,"操作一",-1),d=(0,a.Wm)("a",null,"操作二",-1);(0,a.Cn)();const m=l(((e,t,n,m,h,g)=>{const p=(0,a.up)("plus-outlined"),f=(0,a.up)("a-button"),k=(0,a.up)("a-list-item"),v=(0,a.up)("a-avatar"),x=(0,a.up)("a-card-meta"),y=(0,a.up)("a-card"),I=(0,a.up)("a-list"),w=(0,a.up)("page-container");return(0,a.wg)(),(0,a.j4)(w,{class:"card-list",title:e.t(`${e.$route.meta.title}`)},(0,a.Nv)({content:l((()=>[i])),default:l((()=>[(0,a.Wm)(I,{"row-key":"id",loading:e.context.loading,grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},"data-source":[e.nullData,...e.context.dataSource]},{renderItem:l((({item:e})=>[e&&void 0!==e.id?((0,a.wg)(),(0,a.j4)(k,{key:1},{default:l((()=>[(0,a.Wm)(y,{hoverable:!0},{actions:l((()=>[s,d])),default:l((()=>[(0,a.Wm)(x,null,{title:l((()=>[(0,a.Wm)("a",null,(0,c.zw)(e.title),1)])),avatar:l((()=>[(0,a.Wm)(v,{class:"card-avatar",src:e.avatar,size:"large"},null,8,["src"])])),description:l((()=>[(0,a.Wm)("div",o,(0,c.zw)(e.content),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)):((0,a.wg)(),(0,a.j4)(k,{key:0},{default:l((()=>[(0,a.Wm)(f,{class:"new-button",type:"dashed"},{default:l((()=>[(0,a.Wm)(p),u])),_:1})])),_:1}))])),_:1},8,["loading","data-source"])])),_:2},[e.isMobile?void 0:{name:"extraContent",fn:l((()=>[r]))}]),1032,["title"])}));var h=n(2262),g=n(4314),p=n(31696),f=n(32085),k=(0,a.aZ)({name:"TableList",setup(){const{t:e}=(0,g.QT)(),{context:t}=(0,p.$5)((()=>f.Z.getFakeList().then((e=>({data:e,total:e.length})))));return{t:e,context:t,nullData:{},isMobile:(0,a.f3)("isMobile",(0,h.iH)(!1))}}});k.render=m,k.__scopeId="data-v-5202d918";var v=k}}]);