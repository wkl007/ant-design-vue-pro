(self.webpackChunkant_design_vue_pro=self.webpackChunkant_design_vue_pro||[]).push([[685],{13796:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(81278),a=r(95107),u=r(80707),o=function(){function e(){(0,n.Z)(this,e)}return(0,a.Z)(e,null,[{key:"login",value:function(e){return u.Z.request({url:"/login/account",method:"post",data:e})}},{key:"getUserInfo",value:function(){return u.Z.request({url:"/currentUser",method:"get"})}},{key:"logout",value:function(){return u.Z.request({url:"/logout",method:"post"})}},{key:"register",value:function(e){return u.Z.request({url:"/register",method:"post",data:e})}}]),e}()},8397:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return B}});var n=r(66252),a=r(3577),u=(0,n.HX)("data-v-39e1223d");(0,n.dD)("data-v-39e1223d");var o={class:"main register"},s=(0,n.Wm)("h3",null,"注册",-1),l={style:{width:"240px"}},i=(0,n.Wm)("div",{style:{"margin-top":"10px"}},[(0,n.Wm)("span",null,"请至少输入 6 个字符。建议输入字母、数字、特殊字符组合。")],-1),c=(0,n.Uk)("+86"),d=(0,n.Uk)("+87"),p=(0,n.Uk)(" 注册 "),f=(0,n.Uk)(" 使用已有账户登录 ");(0,n.Cn)();var m,v=u((function(e,t,r,m,v,g){var h=(0,n.up)("a-input"),w=(0,n.up)("a-form-item"),W=(0,n.up)("a-progress"),k=(0,n.up)("a-input-password"),_=(0,n.up)("a-popover"),b=(0,n.up)("a-select-option"),Z=(0,n.up)("a-select"),y=(0,n.up)("mail-outlined"),C=(0,n.up)("a-col"),L=(0,n.up)("a-button"),q=(0,n.up)("a-row"),x=(0,n.up)("router-link"),I=(0,n.up)("a-form");return(0,n.wg)(),(0,n.j4)("div",o,[s,(0,n.Wm)(I,{layout:"vertical",model:e.form,onSubmit:e.handleSubmit},{default:u((function(){return[(0,n.Wm)(w,e.validateInfos.email,{default:u((function(){return[(0,n.Wm)(h,{size:"large",placeholder:"邮箱",value:e.form.email,"onUpdate:value":t[1]||(t[1]=function(t){return e.form.email=t})},null,8,["value"])]})),_:1},16),(0,n.Wm)(_,{placement:"rightTop",trigger:"focus","get-popup-container":function(e){return e.parentElement},visible:e.passwordLevelChecked,"onUpdate:visible":t[4]||(t[4]=function(t){return e.passwordLevelChecked=t})},{content:u((function(){return[(0,n.Wm)("div",l,[(0,n.Wm)("div",{class:e.passwordLevelClass}," 强度："+(0,a.zw)(e.passwordLevelName),3),(0,n.Wm)(W,{percent:e.percent,"show-info":!1,"stroke-color":e.passwordLevelColor},null,8,["percent","stroke-color"]),i])]})),default:u((function(){return[(0,n.Wm)(w,e.validateInfos.password,{default:u((function(){return[(0,n.Wm)(k,{size:"large",placeholder:"至少6位密码，区分大小写",value:e.form.password,"onUpdate:value":t[2]||(t[2]=function(t){return e.form.password=t}),onFocus:t[3]||(t[3]=function(t){return e.passwordLevelChecked=!0})},null,8,["value"])]})),_:1},16)]})),_:1},8,["get-popup-container","visible"]),(0,n.Wm)(w,e.validateInfos.confirmPassword,{default:u((function(){return[(0,n.Wm)(k,{size:"large",placeholder:"确认密码",value:e.form.confirmPassword,"onUpdate:value":t[5]||(t[5]=function(t){return e.form.confirmPassword=t})},null,8,["value"])]})),_:1},16),(0,n.Wm)(w,e.validateInfos.mobile,{default:u((function(){return[(0,n.Wm)(h,{size:"large",placeholder:"11 位手机号",value:e.form.mobile,"onUpdate:value":t[6]||(t[6]=function(t){return e.form.mobile=t})},{addonBefore:u((function(){return[(0,n.Wm)(Z,{size:"large","default-value":"+86"},{default:u((function(){return[(0,n.Wm)(b,{value:"+86"},{default:u((function(){return[c]})),_:1}),(0,n.Wm)(b,{value:"+87"},{default:u((function(){return[d]})),_:1})]})),_:1})]})),_:1},8,["value"])]})),_:1},16),(0,n.Wm)(q,{gutter:16},{default:u((function(){return[(0,n.Wm)(C,{span:16},{default:u((function(){return[(0,n.Wm)(w,e.validateInfos.captcha,{default:u((function(){return[(0,n.Wm)(h,{size:"large",placeholder:"验证码",value:e.form.captcha,"onUpdate:value":t[7]||(t[7]=function(t){return e.form.captcha=t})},{prefix:u((function(){return[(0,n.Wm)(y,{class:"prefix-icon"})]})),_:1},8,["value"])]})),_:1},16)]})),_:1}),(0,n.Wm)(C,{span:8},{default:u((function(){return[(0,n.Wm)(L,{size:"large",block:"",onClick:e.getCaptcha},{default:u((function(){return[(0,n.Uk)((0,a.zw)(e.smsSendBtn?"".concat(e.time," s"):"获取验证码"),1)]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),(0,n.Wm)(w,null,{default:u((function(){return[(0,n.Wm)(L,{size:"large",type:"primary",loading:e.registerBtn,disabled:e.registerBtn,"html-type":"submit",style:{width:"50%"}},{default:u((function(){return[p]})),_:1},8,["loading","disabled"]),(0,n.Wm)(x,{class:"login",to:"/user/login",style:{float:"right","line-height":"40px"}},{default:u((function(){return[f]})),_:1})]})),_:1})]})),_:1},8,["model","onSubmit"])])})),g=(r(923),r(70473)),h=(r(71784),r(61446)),w=r(13782),W=r(37171),k=(r(35666),r(41539),r(73210),r(2262)),_=r(55518),b=r(42119),Z=r(13796),y=r(81278),C=r(95107),L=r(80707),q=function(){function e(){(0,y.Z)(this,e)}return(0,C.Z)(e,null,[{key:"getSmsCaptcha",value:function(e){return L.Z.request({url:"/message/sms",method:"get",params:e})}}]),e}(),x={0:"低",1:"低",2:"中",3:"强"},I={0:"error",1:"error",2:"warning",3:"success"},U={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},z=(0,n.aZ)({name:"Register",setup:function(){var e=(0,b.tv)(),t=(0,k.qj)({time:60,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000",registerBtn:!1}),r=(0,k.qj)({email:"",password:"",confirmPassword:"",mobile:"",captcha:""}),a=(0,k.qj)({email:[{required:!0,type:"email",message:"请输入邮箱地址"}],password:[{required:!0,message:"至少6位密码，区分大小写"},{validator:function(e,r){return new Promise((function(e,n){var a=0;/[0-9]/.test(r)&&a++,/[a-zA-Z]/.test(r)&&a++,/[^0-9a-zA-Z_]/.test(r)&&a++,t.passwordLevel=a,t.percent=30*a,a>=2?(a>=3&&(t.percent=100),e(null)):(0===a&&(t.percent=10),n(new Error("密码强度不够")))}))}}],confirmPassword:[{required:!0,message:"至少6位密码，区分大小写"},{validator:function(e,t){return new Promise((function(e,n){var a=r.password;t||n(new Error("请输入密码")),t&&a&&t.trim()!==a.trim()&&n(new Error("两次密码不一致")),e(null)}))}}],mobile:[{required:!0,message:"请输入正确的手机号",pattern:/^1[3456789]\d{9}$/}],captcha:[{required:!0,message:"请输入验证码"}]}),u=(0,_.cI)(r,a),o=u.validateInfos,s=u.validate;function l(){return(l=(0,W.Z)(regeneratorRuntime.mark((function e(r){var n,a,u,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r.preventDefault(),e.next=4,s("mobile");case 4:return n=e.sent,a=n.mobile,m=setInterval((function(){t.time--<=0&&(t.time=60,t.smsSendBtn=!1,clearInterval(m))}),1e3),u=h.Z.loading("验证码发送中...",0),e.next=10,q.getSmsCaptcha({mobile:a});case 10:o=e.sent,l=o.captcha,setTimeout(u,3e3),g.Z.success({message:"提示",description:"验证码获取成功，您的验证码为：".concat(l),duration:8}),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(0),h.Z.destroy(),clearInterval(m),t.time=60,t.smsSendBtn=!1;case 22:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function i(){return(i=(0,W.Z)(regeneratorRuntime.mark((function r(n){var a,u,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n.preventDefault(),t.registerBtn=!0,r.next=5,s();case 5:return a=r.sent,r.next=8,Z.Z.register(a);case 8:return u=r.sent,o=u.data.email,h.Z.info("注册成功"),r.next=13,e.push({path:"/user/registerResult",query:{email:o}});case 13:r.next=18;break;case 15:r.prev=15,r.t0=r.catch(0),t.registerBtn=!1;case 18:case"end":return r.stop()}}),r,null,[[0,15]])})))).apply(this,arguments)}return(0,w.Z)((0,w.Z)({},(0,k.BK)(t)),{},{form:r,validateInfos:o,passwordLevelClass:(0,n.Fl)((function(){return I[t.passwordLevel]})),passwordLevelName:(0,n.Fl)((function(){return x[t.passwordLevel]})),passwordLevelColor:(0,n.Fl)((function(){return U[t.passwordLevel]})),getCaptcha:function(e){return l.apply(this,arguments)},handleSubmit:function(e){return i.apply(this,arguments)}})}});z.render=v,z.__scopeId="data-v-39e1223d";var B=z}}]);