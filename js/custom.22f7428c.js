"use strict";(self.webpackChunkant_design_vue_pro=self.webpackChunkant_design_vue_pro||[]).push([[289],{32593:function(e,l,r){r.r(l),r.d(l,{default:function(){return h}});var n=r(66252),t=r(3577);const o=(0,n._)("a",null,"风格配色",-1),a=(0,n._)("span",null,"整体风格配色设置",-1),c=(0,n._)("a",null,"主题色",-1),u=(0,n.Uk)(" 页面风格配色： ");var i=r(2262),s=r(80894);const d={dark:"暗色",light:"白色",realDark:"暗黑模式"},k=[{key:"薄暮",color:"#f5222d"},{key:"火山",color:"#fa541c"},{key:"日暮",color:"#faad14"},{key:"明青",color:"#13c2c2"},{key:"极光绿",color:"#52c41a"},{key:"拂晓蓝（默认）",color:"#1890ff"},{key:"极客蓝",color:"#2f54eb"},{key:"酱紫",color:"#722ed1"}];function f(e){return d[e]}function m(e){const l=k.find((l=>l.color===e));return l&&l.key}var p=(0,n.aZ)({name:"Custom",setup(){const e=(0,s.oR)();return{navTheme:(0,i.Fl)((()=>e.getters.navTheme)),primaryColor:(0,i.Fl)((()=>e.getters.primaryColor)),themeFilter:f,colorFilter:m}}});p.render=function(e,l,r,i,s,d){const k=(0,n.up)("a-list-item-meta"),f=(0,n.up)("a-switch"),m=(0,n.up)("a-list-item"),p=(0,n.up)("a-list");return(0,n.wg)(),(0,n.j4)(p,{"item-layout":"horizontal"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{actions:(0,n.w5)((()=>[(0,n.Wm)(f,{checkedChildren:"暗色",unCheckedChildren:"白色",disabled:!0,checked:"dark"===e.navTheme},null,8,["checked"])])),default:(0,n.w5)((()=>[(0,n.Wm)(k,null,{title:(0,n.w5)((()=>[o])),description:(0,n.w5)((()=>[a])),_:1})])),_:1}),(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(k,null,{title:(0,n.w5)((()=>[c])),description:(0,n.w5)((()=>[(0,n._)("span",null,[u,(0,n._)("a",null,(0,t.zw)(e.colorFilter(e.primaryColor)),1)])])),_:1})])),_:1})])),_:1})};var h=p}}]);