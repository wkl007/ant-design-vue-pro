"use strict";(self.webpackChunkant_design_vue_pro=self.webpackChunkant_design_vue_pro||[]).push([[355],{70473:function(e,a,t){var o=t(54090),l=t(66252),n=t(98376),r=t(72185),d=t(63765),s=t(32548),u=t(9293),i=t(79751),c={},m=4.5,p="24px",f="24px",v="topRight",w=function(){return document.body},g=null;function k(e){var a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;switch(e){case"topLeft":a={left:"0px",top:t,bottom:"auto"};break;case"topRight":a={right:"0px",top:t,bottom:"auto"};break;case"bottomLeft":a={left:"0px",top:"auto",bottom:o};break;default:a={right:"0px",top:"auto",bottom:o}}return a}var W={success:r.Z,info:d.Z,error:s.Z,warning:u.Z};var y={open:function(e){var a=e.icon,t=e.type,o=e.description,r=e.message,d=e.btn,s=e.prefixCls||"ant-notification",u="".concat(s,"-notice"),p=void 0===e.duration?m:e.duration,f=null;if(a)f=function(){return(0,l.Wm)("span",{class:"".concat(u,"-icon")},[a])};else if(t){var y=W[t];f=function(){return(0,l.Wm)(y,{class:"".concat(u,"-icon ").concat(u,"-icon-").concat(t)},null)}}!function(e,a){var t=e.prefixCls,o=e.placement,r=void 0===o?v:o,d=e.getContainer,s=void 0===d?w:d,u=e.top,m=e.bottom,p=e.closeIcon,f=void 0===p?g:p,W="".concat(t,"-").concat(r);c[W]?a(c[W]):n.Z.newInstance({prefixCls:t,class:"".concat(t,"-").concat(r),style:k(r,u,m),getContainer:s,closeIcon:function(){return(0,l.Wm)("span",{class:"".concat(t,"-close-x")},[f||(0,l.Wm)(i.Z,{class:"".concat(t,"-close-icon")},null)])}},(function(e){c[W]=e,a(e)}))}({prefixCls:s,placement:e.placement,top:e.top,bottom:e.bottom,getContainer:e.getContainer,closeIcon:e.closeIcon},(function(a){a.notice({content:function(){return(0,l.Wm)("div",{class:f?"".concat(u,"-with-icon"):""},[f&&f(),(0,l.Wm)("div",{class:"".concat(u,"-message")},[!o&&f?(0,l.Wm)("span",{class:"".concat(u,"-message-single-line-auto-margin")},null):null,r]),(0,l.Wm)("div",{class:"".concat(u,"-description")},[o]),d?(0,l.Wm)("span",{class:"".concat(u,"-btn")},[d]):null])},duration:p,closable:!0,onClose:e.onClose,onClick:e.onClick,key:e.key,style:e.style||{},class:e.class})}))},close:function(e){Object.keys(c).forEach((function(a){return c[a].removeNotice(e)}))},config:function(e){var a=e.duration,t=e.placement,o=e.bottom,l=e.top,n=e.getContainer,r=e.closeIcon;void 0!==a&&(m=a),void 0!==t&&(v=t),void 0!==o&&(f="number"==typeof o?"".concat(o,"px"):o),void 0!==l&&(p="number"==typeof l?"".concat(l,"px"):l),void 0!==n&&(w=n),void 0!==r&&(g=r)},destroy:function(){Object.keys(c).forEach((function(e){c[e].destroy(),delete c[e]}))}};["success","info","warning","error"].forEach((function(e){y[e]=function(a){return y.open((0,o.Z)((0,o.Z)({},a),{type:e}))}})),y.warn=y.warning,a.Z=y},923:function(e,a,t){t(85900)},28824:function(e,a,t){t.r(a),t.d(a,{default:function(){return A}});var o=t(66252),l=t(3577);const n=(0,o.HX)("data-v-2ae63532");(0,o.dD)("data-v-2ae63532");const r=(0,o.Uk)("高级表单常见于一次性输入和提交大批量数据的场景。"),d={class:"popover-wrapper"},s={class:""},u={class:"antd-pro-pages-forms-style-errorField"},i={key:0,class:"antd-pro-pages-forms-style-errorIcon"};(0,o.Cn)();const c=n(((e,a,t,c,m,p)=>{const f=(0,o.up)("repository-form"),v=(0,o.up)("task-form"),w=(0,o.up)("member-list"),g=(0,o.up)("close-circle-outlined"),k=(0,o.up)("a-popover"),W=(0,o.up)("a-button"),y=(0,o.up)("footer-toolbar"),b=(0,o.up)("page-container");return(0,o.wg)(),(0,o.j4)(b,{class:"advance-form",title:"高级表单"},{content:n((()=>[r])),default:n((()=>[(0,o.Wm)(f,{ref:"repositoryForm",class:"antd-pro-pages-form-advanced-form-style-card"},null,512),(0,o.Wm)(v,{ref:"taskForm",class:"antd-pro-pages-form-advanced-form-style-card"},null,512),(0,o.Wm)(w),(0,o.Wm)(y,null,{default:n((()=>[(0,o.Wm)("span",d,[(0,o.Wm)(k,{title:"表单校验信息","overlay-class-name":"antd-pro-pages-forms-style-errorPopover",trigger:"click","get-popup-container":e=>e.parentNode},{content:n((()=>[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.state.errors,(a=>((0,o.wg)(),(0,o.j4)("li",{key:a.key,class:"antd-pro-pages-forms-style-errorListItem",onClick:t=>e.handleErrorClick(a.key)},[(0,o.Wm)(g,{class:"antd-pro-pages-forms-style-errorIcon"}),(0,o.Wm)("div",s,(0,l.zw)(a.message),1),(0,o.Wm)("div",u,(0,l.zw)(a.fieldLabel),1)],8,["onClick"])))),128))])),default:n((()=>[(0,o.Wm)("span",null,[e.state.errors.length&&e.state.errors.length>0?((0,o.wg)(),(0,o.j4)("span",i,[(0,o.Wm)(g),(0,o.Uk)(" "+(0,l.zw)(e.state.errors.length),1)])):(0,o.kq)("",!0)])])),_:1},8,["get-popup-container"])]),(0,o.Wm)(W,{type:"primary",onClick:e.handleSubmit},{default:n((()=>[(0,o.Uk)((0,l.zw)(e.t("submit")),1)])),_:1},8,["onClick"])])),_:1})])),_:1})}));var m=t(2262),p=t(64239),f=t(4314),v=t(28960);const w=(0,o.Uk)("王同学"),g=(0,o.Uk)("李同学"),k=(0,o.Uk)("黄同学"),W=(0,o.Uk)("王晓丽"),y=(0,o.Uk)("李军"),b=(0,o.Uk)("公开"),_=(0,o.Uk)("私密"),h=(0,o.Uk)("Submit");var R=t(30571),C=(0,o.aZ)({name:"RepositoryForm",props:{showSubmit:{type:Boolean,default:!1}},setup(){const e=(0,m.qj)({name:void 0,url:void 0,owner:void 0,approver:void 0,dateRange:[],type:void 0}),a=(0,m.qj)({name:[{required:!0,message:"请输入仓库名称"}],url:[{required:!0,validator:function(e,a){return new Promise(((e,t)=>{/^user-(.*)$/.test(a)||t("需要以 user- 开头"),e()}))}}]}),{resetFields:t,validate:o,validateInfos:l}=(0,R.Z)(e,a);return{modelRef:e,validateInfos:l,validate:o,resetFields:t,handleSubmit:function(e){e.preventDefault()}}}});C.render=function(e,a,t,l,n,r){const d=(0,o.up)("a-input"),s=(0,o.up)("a-form-item"),u=(0,o.up)("a-col"),i=(0,o.up)("a-select-option"),c=(0,o.up)("a-select"),m=(0,o.up)("a-row"),p=(0,o.up)("a-range-picker"),f=(0,o.up)("a-button"),v=(0,o.up)("a-form"),R=(0,o.up)("a-card");return(0,o.wg)(),(0,o.j4)(R,{bordered:!1,title:"仓库管理"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"form","scroll-to-first-error":""},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:"form-row",gutter:16},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{lg:6,md:12,sm:24},{default:(0,o.w5)((()=>[(0,o.Wm)(s,(0,o.dG)({label:"仓库名"},e.validateInfos.name,{"data-validate-id":"name"}),{default:(0,o.w5)((()=>[(0,o.Wm)(d,{value:e.modelRef.name,"onUpdate:value":a[1]||(a[1]=a=>e.modelRef.name=a),placeholder:"请输入仓库名称"},null,8,["value"])])),_:1},16)])),_:1}),(0,o.Wm)(u,{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24},{default:(0,o.w5)((()=>[(0,o.Wm)(s,(0,o.dG)({label:"仓库域名"},e.validateInfos.url,{"data-validate-id":"url"}),{default:(0,o.w5)((()=>[(0,o.Wm)(d,{value:e.modelRef.url,"onUpdate:value":a[2]||(a[2]=a=>e.modelRef.url=a),"addon-before":"http://","addon-after":".com",placeholder:"请输入"},null,8,["value"])])),_:1},16)])),_:1}),(0,o.Wm)(u,{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24},{default:(0,o.w5)((()=>[(0,o.Wm)(s,(0,o.dG)({label:"仓库管理员"},e.validateInfos.owner),{default:(0,o.w5)((()=>[(0,o.Wm)(c,{value:e.modelRef.owner,"onUpdate:value":a[3]||(a[3]=a=>e.modelRef.owner=a),placeholder:"请选择管理员"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{value:"王同学"},{default:(0,o.w5)((()=>[w])),_:1}),(0,o.Wm)(i,{value:"李同学"},{default:(0,o.w5)((()=>[g])),_:1}),(0,o.Wm)(i,{value:"黄同学"},{default:(0,o.w5)((()=>[k])),_:1})])),_:1},8,["value"])])),_:1},16)])),_:1})])),_:1}),(0,o.Wm)(m,{class:"form-row",gutter:16},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{lg:6,md:12,sm:24},{default:(0,o.w5)((()=>[(0,o.Wm)(s,(0,o.dG)({label:"审批人"},e.validateInfos.approver),{default:(0,o.w5)((()=>[(0,o.Wm)(c,{value:e.modelRef.approver,"onUpdate:value":a[4]||(a[4]=a=>e.modelRef.approver=a),placeholder:"请选择审批员"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{value:"王晓丽"},{default:(0,o.w5)((()=>[W])),_:1}),(0,o.Wm)(i,{value:"李军"},{default:(0,o.w5)((()=>[y])),_:1})])),_:1},8,["value"])])),_:1},16)])),_:1}),(0,o.Wm)(u,{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24},{default:(0,o.w5)((()=>[(0,o.Wm)(s,(0,o.dG)({label:"生效日期"},e.validateInfos.dateRange),{default:(0,o.w5)((()=>[(0,o.Wm)(p,{value:e.modelRef.dateRange,"onUpdate:value":a[5]||(a[5]=a=>e.modelRef.dateRange=a),style:{width:"100%"}},null,8,["value"])])),_:1},16)])),_:1}),(0,o.Wm)(u,{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24},{default:(0,o.w5)((()=>[(0,o.Wm)(s,(0,o.dG)({label:"仓库类型"},e.validateInfos.type),{default:(0,o.w5)((()=>[(0,o.Wm)(c,{value:e.modelRef.type,"onUpdate:value":a[6]||(a[6]=a=>e.modelRef.type=a),placeholder:"请选择仓库类型"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{value:"公开"},{default:(0,o.w5)((()=>[b])),_:1}),(0,o.Wm)(i,{value:"私密"},{default:(0,o.w5)((()=>[_])),_:1})])),_:1},8,["value"])])),_:1},16)])),_:1})])),_:1}),e.showSubmit?((0,o.wg)(),(0,o.j4)(s,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{onClick:e.handleSubmit},{default:(0,o.w5)((()=>[h])),_:1},8,["onClick"])])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1})};var I=C;const U=(0,o.Uk)("黄丽丽"),x=(0,o.Uk)("李大刀"),S=(0,o.Uk)("王伟"),j=(0,o.Uk)("李红军"),Z=(0,o.Uk)("定时执行"),q=(0,o.Uk)("周期执行"),F=(0,o.Uk)("Submit");t(923);var G=t(70473),D=(0,o.aZ)({name:"TaskForm",props:{showSubmit:{type:Boolean,default:!1}},setup(){const e=(0,m.qj)({name2:void 0,url2:void 0,owner2:void 0,approver2:void 0,dateRange2:void 0,type2:void 0}),a=(0,m.qj)({name2:[{required:!0,message:"请输入任务名称",whitespace:!0}],url2:[{required:!0,message:"请输入任务描述",whitespace:!0}],owner2:[{required:!0,message:"请选择执行人"}],approver2:[{required:!0,message:"请选择责任人"}],dateRange2:[{required:!0,message:"请选择提醒时间",type:"object"}],type2:[{required:!0,message:"请选择任务类型"}]}),{resetFields:t,validate:o,validateInfos:l}=(0,R.Z)(e,a);return{modelRef:e,validateInfos:l,resetFields:t,validate:o,handleSubmit:function(a){a.preventDefault(),o().then((()=>{G.Z.error({message:"Received values of form:",description:(0,m.IU)(e)})}))}}}});D.render=function(e,a,t,l,n,r){const d=(0,o.up)("a-input"),s=(0,o.up)("a-form-item"),u=(0,o.up)("a-col"),i=(0,o.up)("a-select-option"),c=(0,o.up)("a-select"),m=(0,o.up)("a-row"),p=(0,o.up)("a-time-picker"),f=(0,o.up)("a-button"),v=(0,o.up)("a-form"),w=(0,o.up)("a-card");return(0,o.wg)(),(0,o.j4)(w,{bordered:!1,title:"任务管理"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{class:"task-form","scroll-to-first-error":""},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:"form-row",gutter:16},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{lg:6,md:12,sm:24},{default:(0,o.w5)((()=>[(0,o.Wm)(s,(0,o.dG)({label:"任务名"},e.validateInfos.name2,{"data-validate-id":"name2"}),{default:(0,o.w5)((()=>[(0,o.Wm)(d,{value:e.modelRef.name2,"onUpdate:value":a[1]||(a[1]=a=>e.modelRef.name2=a),placeholder:"请输入任务名称"},null,8,["value"])])),_:1},16)])),_:1}),(0,o.Wm)(u,{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24},{default:(0,o.w5)((()=>[(0,o.Wm)(s,(0,o.dG)({label:"任务描述"},e.validateInfos.url2,{"data-validate-id":"url2"}),{default:(0,o.w5)((()=>[(0,o.Wm)(d,{value:e.modelRef.url2,"onUpdate:value":a[2]||(a[2]=a=>e.modelRef.url2=a),placeholder:"请输入任务描述"},null,8,["value"])])),_:1},16)])),_:1}),(0,o.Wm)(u,{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24},{default:(0,o.w5)((()=>[(0,o.Wm)(s,(0,o.dG)({label:"执行人"},e.validateInfos.owner2,{"data-validate-id":"owner2"}),{default:(0,o.w5)((()=>[(0,o.Wm)(c,{value:e.modelRef.owner2,"onUpdate:value":a[3]||(a[3]=a=>e.modelRef.owner2=a),placeholder:"请选择执行人"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{value:"黄丽丽"},{default:(0,o.w5)((()=>[U])),_:1}),(0,o.Wm)(i,{value:"李大刀"},{default:(0,o.w5)((()=>[x])),_:1})])),_:1},8,["value"])])),_:1},16)])),_:1})])),_:1}),(0,o.Wm)(m,{class:"form-row",gutter:16},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{lg:6,md:12,sm:24},{default:(0,o.w5)((()=>[(0,o.Wm)(s,(0,o.dG)({label:"责任人"},e.validateInfos.approver2,{"data-validate-id":"approver2"}),{default:(0,o.w5)((()=>[(0,o.Wm)(c,{value:e.modelRef.approver2,"onUpdate:value":a[4]||(a[4]=a=>e.modelRef.approver2=a),placeholder:"请选择责任人"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{value:"王伟"},{default:(0,o.w5)((()=>[S])),_:1}),(0,o.Wm)(i,{value:"李红军"},{default:(0,o.w5)((()=>[j])),_:1})])),_:1},8,["value"])])),_:1},16)])),_:1}),(0,o.Wm)(u,{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24},{default:(0,o.w5)((()=>[(0,o.Wm)(s,(0,o.dG)({label:"提醒时间"},e.validateInfos.dateRange2,{"data-validate-id":"dateRange2"}),{default:(0,o.w5)((()=>[(0,o.Wm)(p,{value:e.modelRef.dateRange2,"onUpdate:value":a[5]||(a[5]=a=>e.modelRef.dateRange2=a),style:{width:"100%"}},null,8,["value"])])),_:1},16)])),_:1}),(0,o.Wm)(u,{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24},{default:(0,o.w5)((()=>[(0,o.Wm)(s,(0,o.dG)({label:"任务类型"},e.validateInfos.type2,{"data-validate-id":"type2"}),{default:(0,o.w5)((()=>[(0,o.Wm)(c,{modelValue:e.modelRef.type2,"onUpdate:modelValue":a[6]||(a[6]=a=>e.modelRef.type2=a),placeholder:"请选择任务类型"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{value:"定时执行"},{default:(0,o.w5)((()=>[Z])),_:1}),(0,o.Wm)(i,{value:"周期执行"},{default:(0,o.w5)((()=>[q])),_:1})])),_:1},8,["modelValue"])])),_:1},16)])),_:1})])),_:1}),e.showSubmit?((0,o.wg)(),(0,o.j4)(s,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{onClick:e.handleSubmit},{default:(0,o.w5)((()=>[F])),_:1},8,["onClick"])])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1})};var N=D;const E=(0,o.HX)("data-v-2dca397d");(0,o.dD)("data-v-2dca397d");const H={key:0},L=(0,o.Wm)("a",null,"删除",-1),T={key:1},z={key:1},M=(0,o.Wm)("a",null,"删除",-1),O=(0,o.Uk)(" 新增成员 ");(0,o.Cn)();const P=E(((e,a,t,n,r,d)=>{const s=(0,o.up)("a-input"),u=(0,o.up)("a-divider"),i=(0,o.up)("a-popconfirm"),c=(0,o.up)("a-table"),m=(0,o.up)("plus-outlined"),p=(0,o.up)("a-button"),f=(0,o.up)("a-card");return(0,o.wg)(),(0,o.j4)(f,{bordered:!1,title:"成员管理"},{default:E((()=>[(0,o.Wm)(c,{pagination:!1,columns:e.columns,"data-source":e.state.dataSource,loading:e.state.loading},(0,o.Nv)({operation:E((({record:a})=>[a.editable?((0,o.wg)(),(0,o.j4)(o.HY,{key:0},[a.isNew?((0,o.wg)(),(0,o.j4)("span",H,[(0,o.Wm)("a",{onClick:t=>e.saveRow(a)},"添加",8,["onClick"]),(0,o.Wm)(u,{type:"vertical"}),(0,o.Wm)(i,{title:"是否要删除此行？",onConfirm:t=>e.handleRemove(a.key)},{default:E((()=>[L])),_:2},1032,["onConfirm"])])):((0,o.wg)(),(0,o.j4)("span",T,[(0,o.Wm)("a",{onClick:t=>e.saveRow(a)},"保存",8,["onClick"]),(0,o.Wm)(u,{type:"vertical"}),(0,o.Wm)("a",{onClick:t=>e.handleCancel(a.key)},"取消",8,["onClick"])]))],64)):((0,o.wg)(),(0,o.j4)("span",z,[(0,o.Wm)("a",{onClick:t=>e.toggleEdit(a.key)},"编辑",8,["onClick"]),(0,o.Wm)(u,{type:"vertical"}),(0,o.Wm)(i,{title:"是否要删除此行？","ok-text":e.t("confirm.ok"),"cancel-text":e.t("confirm.cancel"),onConfirm:t=>e.handleRemove(a.key)},{default:E((()=>[M])),_:2},1032,["ok-text","cancel-text","onConfirm"])]))])),_:2},[(0,o.Ko)(["name","workId","department"],((a,t)=>({name:a,fn:E((({text:n,record:r})=>[r.editable?((0,o.wg)(),(0,o.j4)(s,{key:a,style:{margin:"-5px 0"},value:n,placeholder:e.columns[t].title,onChange:t=>e.handleChange(t.target.value,r.key,a)},null,8,["value","placeholder","onChange"])):((0,o.wg)(),(0,o.j4)(o.HY,{key:1},[(0,o.Uk)((0,l.zw)(n),1)],64))]))})))]),1032,["columns","data-source","loading"]),(0,o.Wm)(p,{style:{width:"100%","margin-top":"16px","margin-bottom":"8px"},type:"dashed",onClick:e.handleNewMember},{default:E((()=>[(0,o.Wm)(m),O])),_:1},8,["onClick"])])),_:1})}));t(71784);var V=t(61446);const Y=[{title:"成员姓名",dataIndex:"name",key:"name",width:"20%",slots:{customRender:"name"}},{title:"工号",dataIndex:"workId",key:"workId",width:"20%",slots:{customRender:"workId"}},{title:"所属部门",dataIndex:"department",key:"department",width:"40%",slots:{customRender:"department"}},{title:"操作",key:"action",slots:{customRender:"operation"}}],B=[{key:"1",name:"小明",workId:"001",editable:!1,department:"行政部"},{key:"2",name:"李莉",workId:"002",editable:!1,department:"IT部"},{key:"3",name:"王小帅",workId:"003",editable:!1,department:"财务部"}];var K=(0,o.aZ)({name:"MemberList",setup(){const{t:e}=(0,f.QT)(),a=(0,m.qj)({loading:!1,dataSource:B});return{t:e,state:a,columns:Y,handleSubmit:function(e){e.preventDefault()},handleNewMember:function(){const e=a.dataSource.length,t={key:0===e?"1":(parseInt(a.dataSource[e-1].key)+1).toString(),name:"",workId:"",department:"",editable:!0,isNew:!0};a.dataSource.push(t)},handleChange:function(e,t,o){const l=[...a.dataSource],n=l.find((e=>t===e.key));n&&(n[o]=e,a.dataSource=l)},toggleEdit:function(e){const t=a.dataSource.find((a=>a.key===e))||{key:"-1"};t&&(t._originalData={...t},t.editable=!t.editable)},saveRow:function(e){a.loading=!0;const{key:t,name:o,workId:l,department:n}=e;if(!o||!l||!n)return a.loading=!1,void V.Z.error("请填写完整成员信息。");new Promise((e=>{setTimeout((()=>{e({loop:!1})}),800)})).then((()=>{const e=a.dataSource.find((e=>e.key===t));e&&(e.editable=!1,e.isNew=!1,V.Z.success("保存成功。")),a.loading=!1}))},handleRemove:function(e){a.dataSource=a.dataSource.filter((a=>a.key!==e))},handleCancel:function(e){const t=a.dataSource.find((a=>a.key===e));t&&(Object.assign(t,{...t._originalData}),t._originalData=void 0)}}}});K.render=P,K.__scopeId="data-v-2dca397d";var Q=K;const X={name:"仓库名",url:"仓库域名",owner:"仓库管理员",approver:"审批人",dateRange:"生效日期",type:"仓库类型",name2:"任务名",url2:"任务描述",owner2:"执行人",approver2:"责任人",dateRange2:"生效日期",type2:"任务类型"};var $=(0,o.aZ)({name:"AdvanceForm",components:{RepositoryForm:I,TaskForm:N,MemberList:Q,FooterToolbar:v.Sc},setup(){const{t:e}=(0,f.QT)(),a=(0,m.qj)({errors:[]}),t=(0,m.iH)(null),o=(0,m.iH)(null);return{t:e,state:a,repositoryForm:t,taskForm:o,handleErrorClick:function(e){const a=document.querySelector(`[data-validate-id=${e}]`);a&&(0,p.Z)(a,{scrollMode:"if-needed",block:"center"})},handleSubmit:async function(e){try{await Promise.all([t.value?.validate(),o.value?.validate()])}catch(e){!function(e){a.errors=Object.keys((0,m.IU)(e)).map((a=>({key:a,message:e[a].help,fieldLabel:X[a]})))}(Object.assign({},t.value?.validateInfos,o.value?.validateInfos))}}}}});$.render=c,$.__scopeId="data-v-2ae63532";var A=$}}]);