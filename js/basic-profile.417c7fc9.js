"use strict";(self.webpackChunkant_design_vue_pro=self.webpackChunkant_design_vue_pro||[]).push([[68],{31696:function(e,t,n){n.d(t,{$5:function(){return a.$5},O9:function(){return i},yW:function(){return u}});var a=n(98333),c=n(2262),o=n(66252),l=n(57974);function i(e){const{onExitFull:t,onFull:n}=e||{},a=(0,c.iH)(null),i=(0,c.iH)(t),s=(0,c.iH)(n),u=(0,c.iH)(!1);function r(){if(l.I5.isEnabled){const{isFullscreen:e}=l.I5;e?s.value&&s.value():(l.I5.off("change",r),i.value&&i.value()),u.value=e}}function d(){const e=function(e,t){if(!e)return t;let n;return n="function"==typeof e?e():"value"in e?e.value?.$el:e,n}(a);e&&l.I5.isEnabled&&(l.I5.request(e),l.I5.on("change",r))}function m(){u.value&&l.I5.isEnabled&&l.I5.exit()}return(0,o.Ah)((()=>{l.I5.isEnabled&&l.I5.off("change",r)})),[a,u,{setFull:d,exitFull:m,toggleFull:function(){u.value?m():d()}}]}n(86509),n(15862);const s={align:"center",title:"序号",dataIndex:"my-custom-show-index",customRender:({index:e})=>`${e+1}`};function u(e,t){const n="boolean"==typeof t?{checkAll:t,needRowIndex:!1}:{checkAll:!!t.checkAll,needRowIndex:!!t.needRowIndex},a=(0,c.qj)({checkAll:n.checkAll,needRowIndex:n.needRowIndex,checkedList:[],indeterminate:!0}),l=(0,c.iH)([...e]);n.needRowIndex&&l.value.unshift(s);const i=(0,c.iH)(e.map((e=>({key:e?.key||e.dataIndex,label:e.title,checked:n.checkAll})))),u=i.value.map((e=>e.key));function r(){const t=i.value.map((e=>e.key));l.value=e.filter((e=>a.checkedList.includes(e.dataIndex))).sort(((e,n)=>{const a=e.key||e.dataIndex,c=n.key||n.dataIndex;return t.indexOf(a)-t.indexOf(c)})).map((e=>e)),n.needRowIndex&&l.value.unshift(s)}return a.checkedList=u,a.checkAll=n.checkAll,a.indeterminate=!n.checkAll,(0,o.YP)((()=>a.checkedList),(()=>{a.checkAll=!!a.checkedList.length&&a.checkedList.length===u.length,a.indeterminate=!!a.checkedList.length&&a.checkedList.length<u.length,r()}),{deep:!0}),(0,o.YP)((()=>i),(()=>r()),{deep:!0}),{dynamicColumns:l,dynamicColumnItems:i,state:a,reset:function(){a.checkedList=u,i.value=e.map((e=>({key:e?.key||e.dataIndex,label:e.title,checked:n.checkAll})))},move:function(e,t){const n=i.value,a=n[e];n.splice(e,1),0===t?n.unshift(a):n.splice(t,0,a),i.value=n},handleColumnAllClick:function(e){const t=e.target.checked;a.checkedList=t?u:[],i.value=i.value.map((e=>(e.checked=t,e)))},handleColumnChange:function(e,t){const n=e.target.checked;t.checked=n,n?!a.checkedList.includes(t.key)&&a.checkedList.push(t.key):a.checkedList=a.checkedList.filter((e=>e!==t.key))}}}},98333:function(e,t,n){n.d(t,{re:function(){return l},$5:function(){return i}});var a=n(2262),c=n(66252);const o={stripe:!1,loading:!1,current:1,pageSize:20,total:0,dataSource:[]},l=e=>()=>e().then((e=>({data:e,total:e.length,success:!0})));function i(e,t,n){const l=(0,a.qj)({...o,...t});async function i(){try{if(l.loading)return;l.loading=!0;const{pageSize:t=20,current:a=1}=l,c=!1!==n?.pagination?{current:a,pageSize:t,...l.requestParams}:void 0,{data:o,success:i,total:s=0}=await e(c);l.loading=!1,!1!==i&&(l.dataSource=o,l.total=s)}catch(e){if(l.loading=!1,void 0===n?.onRequestError)throw new Error(e);n.onRequestError(e)}}return(0,c.bv)((()=>{i().catch((e=>{throw new Error(e)}))})),{context:l,stripe:function(e,t){return t%2==1&&l.stripe&&"ant-pro-table-row-striped"},cancel:function(){},reset:function(){},reload:function(){return new Promise((e=>{e(i())}))},resetPageIndex:function(){l.current=1},setPageInfo:e=>{var t;(t={current:l.current,pageSize:l.pageSize,...e}).current&&(l.current=t.current),t.pageSize&&(l.pageSize=t.pageSize),l.requestParams=t}}}},69986:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(66252),c=n(3577);const o=(0,a.Uk)("1000000000"),l=(0,a.Uk)("已取货"),i=(0,a.Uk)("1234123421"),s=(0,a.Uk)("3214321432"),u=(0,a.Uk)("付小小"),r=(0,a.Uk)("18100000000"),d=(0,a.Uk)("菜鸟仓储"),m=(0,a.Uk)("浙江省杭州市西湖区万塘路18号"),p=(0,a.Uk)("无"),k=(0,a.Wm)("div",{class:"title"},"退货商品",-1),f=(0,a.Wm)("div",null,"123",-1),h=(0,a.Wm)("div",{class:"title"},"退货进度",-1);var g=n(2262),x=n(4314);const y=[{id:"1234561",name:"矿泉水 550ml",barcode:"12421432143214321",price:"2.00",num:"1",amount:"2.00"},{id:"1234562",name:"凉茶 300ml",barcode:"12421432143214322",price:"3.00",num:"2",amount:"6.00"},{id:"1234563",name:"好吃的薯片",barcode:"12421432143214323",price:"7.00",num:"4",amount:"28.00"},{id:"1234564",name:"特别好吃的蛋卷",barcode:"12421432143214324",price:"8.50",num:"3",amount:"25.50"}],I=[{key:"1",time:"2017-10-01 14:10",rate:"联系客户",status:"processing",operator:"取货员 ID1234",cost:"5mins"},{key:"2",time:"2017-10-01 14:05",rate:"取货员出发",status:"success",operator:"取货员 ID1234",cost:"1h"},{key:"3",time:"2017-10-01 13:05",rate:"取货员接单",status:"success",operator:"取货员 ID1234",cost:"5mins"},{key:"4",time:"2017-10-01 13:00",rate:"申请审批通过",status:"success",operator:"系统",cost:"1h"},{key:"5",time:"2017-10-01 12:00",rate:"发起退货申请",status:"success",operator:"用户",cost:"5mins"}];var w=n(31696),b=n(28960);const v={processing:"进行中",success:"完成",failed:"失败"},W=[{title:"商品编号",dataIndex:"id",key:"id",slots:{customRender:"id"},summary:()=>"总计"},{title:"商品名称",dataIndex:"name",key:"name"},{title:"商品条码",dataIndex:"barcode",key:"barcode"},{title:"单价",dataIndex:"price",key:"price",align:"right"},{title:"数量（件）",dataIndex:"num",key:"num",align:"right",summary:(e,t)=>t("span",{style:"color: red;font-weight: bold;"},e.map((e=>parseInt(e.num)||0)).reduce(((e,t)=>e+t)))},{title:"金额",dataIndex:"amount",key:"amount",align:"right",summary:!0}],_=[{title:"时间",dataIndex:"time",key:"time"},{title:"当前进度",dataIndex:"rate",key:"rate"},{title:"状态",dataIndex:"status",key:"status",slots:{customRender:"status"}},{title:"操作员ID",dataIndex:"operator",key:"operator"},{title:"耗时",dataIndex:"cost",key:"cost"}];var C=(0,a.aZ)({name:"BasicProfile",setup(){const{t:e}=(0,x.QT)(),{context:t}=(0,w.$5)((()=>new Promise((e=>{e({data:y,total:5})})))),{context:n}=(0,w.$5)((()=>new Promise((e=>{e({data:I,total:5})}))));return{t:e,tableComponents:(0,g.qj)({body:{wrapper:b.Zq}}),goodsColumns:W,scheduleColumns:_,statusMap:v,context:t,context2:n}}});C.render=function(e,t,n,g,x,y){const I=(0,a.up)("a-descriptions-item"),w=(0,a.up)("a-descriptions"),b=(0,a.up)("a-divider"),v=(0,a.up)("a-table"),W=(0,a.up)("a-badge"),_=(0,a.up)("a-card"),C=(0,a.up)("page-container");return(0,a.wg)(),(0,a.j4)(C,{title:e.t("pages.profile.basicProfile.title")},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{bordered:!1},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{title:"退款申请"},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{label:"取货单号"},{default:(0,a.w5)((()=>[o])),_:1}),(0,a.Wm)(I,{label:"状态"},{default:(0,a.w5)((()=>[l])),_:1}),(0,a.Wm)(I,{label:"销售单号"},{default:(0,a.w5)((()=>[i])),_:1}),(0,a.Wm)(I,{label:"子订单"},{default:(0,a.w5)((()=>[s])),_:1})])),_:1}),(0,a.Wm)(b,{style:{"margin-bottom":"32px"}}),(0,a.Wm)(w,{title:"用户信息"},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{label:"用户姓名"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(I,{label:"联系电话"},{default:(0,a.w5)((()=>[r])),_:1}),(0,a.Wm)(I,{label:"常用快递"},{default:(0,a.w5)((()=>[d])),_:1}),(0,a.Wm)(I,{label:"取货地址"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(I,{label:"备注"},{default:(0,a.w5)((()=>[p])),_:1})])),_:1}),(0,a.Wm)(b,{style:{"margin-bottom":"32px"}}),k,(0,a.Wm)(v,{style:{"margin-bottom":"24px"},"row-key":"id",pagination:!1,loading:e.context.loading,columns:e.goodsColumns,"data-source":e.context.dataSource,components:e.tableComponents},{id:(0,a.w5)((({text:e})=>[(0,a.Wm)("a",null,(0,c.zw)(e),1)])),summary:(0,a.w5)((()=>[f])),_:1},8,["loading","columns","data-source","components"]),h,(0,a.Wm)(v,{style:{"margin-bottom":"24px"},"row-key":"key",loading:e.context2.loading,pagination:!1,columns:e.scheduleColumns,"data-source":e.context2.dataSource},{status:(0,a.w5)((({text:t})=>[(0,a.Wm)(W,{status:t,text:e.statusMap[t]},null,8,["status","text"])])),_:1},8,["loading","columns","data-source"])])),_:1})])),_:1},8,["title"])};var L=C}}]);