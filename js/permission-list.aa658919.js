(self.webpackChunkant_design_vue_pro=self.webpackChunkant_design_vue_pro||[]).push([[226],{44863:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(80707);class l{static getRoles(e){return a.Z.request({url:"/roles",method:"get",params:e})}static getPermissions(e){return a.Z.request({url:"/permissions",method:"get",params:e})}}},31696:function(e,t,n){"use strict";n.d(t,{$5:function(){return a.$5},O9:function(){return c},yW:function(){return d}});var a=n(98333),l=n(2262),o=n(66252),i=n(57974);function c(e){const{onExitFull:t,onFull:n}=e||{},a=(0,l.iH)(null),c=(0,l.iH)(t),s=(0,l.iH)(n),d=(0,l.iH)(!1);function u(){if(i.I5.isEnabled){const{isFullscreen:e}=i.I5;e?s.value&&s.value():(i.I5.off("change",u),c.value&&c.value()),d.value=e}}function r(){const e=function(e,t){if(!e)return t;let n;return n="function"==typeof e?e():"value"in e?e.value?.$el:e,n}(a);e&&i.I5.isEnabled&&(i.I5.request(e),i.I5.on("change",u))}function m(){d.value&&i.I5.isEnabled&&i.I5.exit()}return(0,o.Ah)((()=>{i.I5.isEnabled&&i.I5.off("change",u)})),[a,d,{setFull:r,exitFull:m,toggleFull:function(){d.value?m():r()}}]}n(86509),n(15862);const s={align:"center",title:"序号",dataIndex:"my-custom-show-index",customRender:({index:e})=>`${e+1}`};function d(e,t){const n="boolean"==typeof t?{checkAll:t,needRowIndex:!1}:{checkAll:!!t.checkAll,needRowIndex:!!t.needRowIndex},a=(0,l.qj)({checkAll:n.checkAll,needRowIndex:n.needRowIndex,checkedList:[],indeterminate:!0}),i=(0,l.iH)([...e]);n.needRowIndex&&i.value.unshift(s);const c=(0,l.iH)(e.map((e=>({key:e?.key||e.dataIndex,label:e.title,checked:n.checkAll})))),d=c.value.map((e=>e.key));function u(){const t=c.value.map((e=>e.key));i.value=e.filter((e=>a.checkedList.includes(e.dataIndex))).sort(((e,n)=>{const a=e.key||e.dataIndex,l=n.key||n.dataIndex;return t.indexOf(a)-t.indexOf(l)})).map((e=>e)),n.needRowIndex&&i.value.unshift(s)}return a.checkedList=d,a.checkAll=n.checkAll,a.indeterminate=!n.checkAll,(0,o.YP)((()=>a.checkedList),(()=>{a.checkAll=!!a.checkedList.length&&a.checkedList.length===d.length,a.indeterminate=!!a.checkedList.length&&a.checkedList.length<d.length,u()}),{deep:!0}),(0,o.YP)((()=>c),(()=>u()),{deep:!0}),{dynamicColumns:i,dynamicColumnItems:c,state:a,reset:function(){a.checkedList=d,c.value=e.map((e=>({key:e?.key||e.dataIndex,label:e.title,checked:n.checkAll})))},move:function(e,t){const n=c.value,a=n[e];n.splice(e,1),0===t?n.unshift(a):n.splice(t,0,a),c.value=n},handleColumnAllClick:function(e){const t=e.target.checked;a.checkedList=t?d:[],c.value=c.value.map((e=>(e.checked=t,e)))},handleColumnChange:function(e,t){const n=e.target.checked;t.checked=n,n?!a.checkedList.includes(t.key)&&a.checkedList.push(t.key):a.checkedList=a.checkedList.filter((e=>e!==t.key))}}}},98333:function(e,t,n){"use strict";n.d(t,{re:function(){return i},$5:function(){return c}});var a=n(2262),l=n(66252);const o={stripe:!1,loading:!1,current:1,pageSize:20,total:0,dataSource:[]},i=e=>()=>e().then((e=>({data:e,total:e.length,success:!0})));function c(e,t,n){const i=(0,a.qj)({...o,...t});async function c(){try{if(i.loading)return;i.loading=!0;const{pageSize:t=20,current:a=1}=i,l=!1!==n?.pagination?{current:a,pageSize:t,...i.requestParams}:void 0,{data:o,success:c,total:s=0}=await e(l);i.loading=!1,!1!==c&&(i.dataSource=o,i.total=s)}catch(e){if(i.loading=!1,void 0===n?.onRequestError)throw new Error(e);n.onRequestError(e)}}return(0,l.bv)((()=>{c().catch((e=>{throw new Error(e)}))})),{context:i,stripe:function(e,t){return t%2==1&&i.stripe&&"ant-pro-table-row-striped"},cancel:function(){},reset:function(){},reload:function(){return new Promise((e=>{e(c())}))},resetPageIndex:function(){i.current=1},setPageInfo:e=>{var t;(t={current:i.current,pageSize:i.pageSize,...e}).current&&(i.current=t.current),t.pageSize&&(i.pageSize=t.pageSize),i.requestParams=t}}}},99852:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(66252),l=n(3577);const o={class:"ant-pro-table"},i={class:"ant-pro-table-search"},c=(0,a.Uk)(" 新增权限 ");var s=n(2262),d=n(21781);var u=n(26640);const r={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}}},m=["add","delete","update","query","import","export"];var p=(0,a.aZ)({name:"PermissionModal",props:{visible:{type:Boolean,default:!1},model:{type:Object,default:()=>{}}},emits:["ok","cancel"],setup(){const e=(0,s.qj)({id:-1,name:void 0,label:void 0,actions:[]}),t=(0,s.qj)({id:[{required:!0,message:"编码必须填写",type:"number"}],name:[{required:!0,message:"权限名称必须填写"}],label:[{required:!0,message:"显示名称必须填写"}]}),{resetFields:n,validate:a,validateInfos:l}=(0,u.Z)(e,t);return{formLayout:r,permissionActions:m,modelRef:e,validateInfos:l,resetFields:n,handleSubmit:function(){}}}});p.render=function(e,t,n,o,i,c){const s=(0,a.up)("a-input"),d=(0,a.up)("a-form-item"),u=(0,a.up)("a-select-option"),r=(0,a.up)("a-select"),m=(0,a.up)("a-form"),p=(0,a.up)("a-modal");return(0,a.wg)(),(0,a.j4)(p,{title:"权限编辑",visible:e.visible,width:600,centered:"",onOk:e.handleSubmit,onCancel:t[5]||(t[5]=()=>{e.resetFields(),e.$emit("cancel")})},{default:(0,a.w5)((()=>[(0,a.Wm)(m,e.formLayout,{default:(0,a.w5)((()=>[(0,a.Wm)(d,(0,a.dG)({label:"编号",disabled:""},e.validateInfos.id),{default:(0,a.w5)((()=>[(0,a.Wm)(s,{disabled:"",value:e.modelRef.id,"onUpdate:value":t[1]||(t[1]=t=>e.modelRef.id=t),placeholder:"编号"},null,8,["value"])])),_:1},16),(0,a.Wm)(d,(0,a.dG)({label:"权限名称"},e.validateInfos.name),{default:(0,a.w5)((()=>[(0,a.Wm)(s,{value:e.modelRef.name,"onUpdate:value":t[2]||(t[2]=t=>e.modelRef.name=t),placeholder:"权限名称"},null,8,["value"])])),_:1},16),(0,a.Wm)(d,(0,a.dG)({label:"显示名称"},e.validateInfos.label),{default:(0,a.w5)((()=>[(0,a.Wm)(s,{value:e.modelRef.label,"onUpdate:value":t[3]||(t[3]=t=>e.modelRef.label=t),placeholder:"显示名称"},null,8,["value"])])),_:1},16),(0,a.Wm)(d,{label:"操作类型"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{value:e.modelRef.actions,"onUpdate:value":t[4]||(t[4]=t=>e.modelRef.actions=t),placeholder:"操作类型",mode:"tags",style:{width:"100%"}},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.permissionActions,(e=>((0,a.wg)(),(0,a.j4)(u,{key:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e),1)])),_:2},1024)))),128))])),_:1},8,["value"])])),_:1})])),_:1},16)])),_:1},8,["visible","onOk"])};var f=p,h=n(31696),g=n(44863);const v=[{align:"center",title:"#",dataIndex:"id"},{align:"center",title:"权限名称",dataIndex:"name"},{align:"center",title:"Action",dataIndex:"actions",slots:{customRender:"actions"},width:400},{align:"center",title:"操作",dataIndex:"action",slots:{customRender:"action"}}];var k=(0,a.aZ)({name:"PermissionList",components:{TableToolbar:d.fj,PermissionModal:f},setup(){const e=(0,s.qj)({permissionModal:(0,s.iH)(),visible:!1,currentData:{}}),{state:t,dynamicColumns:n,dynamicColumnItems:l,handleColumnAllClick:o,handleColumnChange:i,reset:c,move:d}=(0,h.yW)(v,!0),[u,r,{setFull:m,exitFull:p}]=(0,h.O9)(),{context:f,reload:k,setPageInfo:b}=(0,h.$5)(g.Z.getPermissions,{current:1,pageSize:10,tableSize:"middle"});return{state:f,columnState:t,...(0,s.BK)(e),dynamicColumns:n,dynamicColumnItems:l,elRef:u,screenState:r,setFull:m,exitFull:p,reset:c,move:d,handleTableChange:function({current:e,pageSize:t},n){b({current:e,pageSize:t,...n}),k()},handleColumnChange:i,handleColumnAllClick:o,handleReload:function(){b({current:1,pageSize:10}),k()},handleModalVisible:function(t,n){e.visible=t,e.currentData=n,t&&n.id&&(0,a.Y3)((()=>{e.permissionModal.modelRef.id=n.id,e.permissionModal.modelRef.name=n.name,e.permissionModal.modelRef.label=n.label,e.permissionModal.modelRef.actions=n.actions}))}}}});k.render=function(e,t,n,s,d,u){const r=(0,a.up)("a-input"),m=(0,a.up)("a-form-item"),p=(0,a.up)("a-col"),f=(0,a.up)("a-row"),h=(0,a.up)("a-form"),g=(0,a.up)("plus-outlined"),v=(0,a.up)("a-button"),k=(0,a.up)("table-toolbar"),b=(0,a.up)("a-tag"),w=(0,a.up)("a-table"),y=(0,a.up)("a-card"),C=(0,a.up)("permission-modal"),I=(0,a.up)("page-container");return(0,a.wg)(),(0,a.j4)(I,null,{default:(0,a.w5)((()=>[(0,a.Wm)("div",o,[(0,a.Wm)("div",i,[(0,a.Wm)(h,{layout:"horizontal"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{gutter:16,type:"flex",justfy:"start"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{xs:24,sm:24,md:12},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"权限名称"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{placeholder:"权限名称"})])),_:1})])),_:1}),(0,a.Wm)(p,{xs:24,sm:24,md:12},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"描述"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{placeholder:"描述"})])),_:1})])),_:1})])),_:1})])),_:1})]),(0,a.Wm)(y,{"body-style":{padding:0},ref:"elRef"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{title:"角色列表","screen-state":e.screenState,indeterminate:e.columnState.indeterminate,"column-items":e.dynamicColumnItems,"table-size":e.state.tableSize,"onUpdate:table-size":t[2]||(t[2]=t=>e.state.tableSize=t),"check-all":e.columnState.checkAll,"onUpdate:check-all":t[3]||(t[3]=t=>e.columnState.checkAll=t),onReload:e.handleReload,onReset:e.reset,onSetFull:e.setFull,onExitFull:e.exitFull,onChange:e.handleColumnChange,onChangeAll:e.handleColumnAllClick,onMove:e.move},{action:(0,a.w5)((()=>[(0,a.Wm)(v,{type:"primary",onClick:t[1]||(t[1]=t=>e.handleModalVisible(!0,{}))},{default:(0,a.w5)((()=>[(0,a.Wm)(g),c])),_:1})])),_:1},8,["screen-state","indeterminate","column-items","table-size","check-all","onReload","onReset","onSetFull","onExitFull","onChange","onChangeAll","onMove"]),(0,a.Wm)(w,{"row-key":"id",size:e.state.tableSize,loading:e.state.loading,columns:e.dynamicColumns,"data-source":e.state.dataSource,pagination:{current:e.state.current,pageSize:e.state.pageSize,total:e.state.total},onChange:e.handleTableChange},{actions:(0,a.w5)((({record:e})=>[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.actions,(e=>((0,a.wg)(),(0,a.j4)(b,{key:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e),1)])),_:2},1024)))),128))])),action:(0,a.w5)((({record:t})=>[(0,a.Wm)("a",{href:"javascript:;",onClick:n=>e.handleModalVisible(!0,t)}," 编辑 ",8,["onClick"])])),_:1},8,["size","loading","columns","data-source","pagination","onChange"])])),_:1},512)]),(0,a.Wm)(C,{ref:"permissionModal",visible:e.visible,model:e.currentData,onCancel:t[4]||(t[4]=t=>e.handleModalVisible(!1,e.currentData))},null,8,["visible","model"])])),_:1})};var b=k}}]);