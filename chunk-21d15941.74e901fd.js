(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-21d15941"],{"5cfb":function(e,t,a){"use strict";a("a4df")},"8abf":function(e,t,a){},a4df:function(e,t,a){},a80d:function(e,t,a){"use strict";a("8abf")},d677:function(e,t,a){"use strict";a.r(t);var r=a("5530"),o=(a("d3b7"),a("159b"),a("ac1f"),a("841c"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Drawer",{attrs:{title:e.title,width:"720","mask-closable":!1},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},[a("div",{staticClass:"relative"},[a("Form",{ref:"drawerform",attrs:{model:e.drawerform,rules:e.rules,"label-width":140}},[a("FormItem",{staticStyle:{"padding-bottom":"10px"},attrs:{label:e.tfn("accountName"),prop:"userName"}},[a("Input",{attrs:{type:"text",disabled:Boolean(e.detail),placeholder:e.tfn("accountNameTip")},model:{value:e.drawerform.userName,callback:function(t){e.$set(e.drawerform,"userName",t)},expression:"drawerform.userName"}})],1),a("FormItem",{staticStyle:{"margin-bottom":"36px"},attrs:{label:e.tfn("password"),prop:"userPwd"}},[a("Input",{attrs:{type:"password",placeholder:e.tfn("passwordTip")},model:{value:e.drawerform.userPwd,callback:function(t){e.$set(e.drawerform,"userPwd",t)},expression:"drawerform.userPwd"}})],1),a("FormItem",{attrs:{label:e.tfn("confirmPassword"),prop:"password2"}},[a("Input",{attrs:{type:"password",placeholder:e.tfn("sameAsLoginPassword")},model:{value:e.drawerform.password2,callback:function(t){e.$set(e.drawerform,"password2",t)},expression:"drawerform.password2"}})],1),e.detail?e._e():a("FormItem",{attrs:{label:e.tfn("roleAuthorization"),prop:"roleMap"}},[a("Select",{model:{value:e.drawerform.roleId,callback:function(t){e.$set(e.drawerform,"roleId",t)},expression:"drawerform.roleId"}},e._l(e.roleMap,(function(t,r){return a("Option",{key:r,attrs:{value:r}},[e._v(e._s(t))])})),1)],1),a("FormItem",{attrs:{label:e.tfn("whetherToEnable"),prop:"isEnable"}},[a("RadioGroup",{attrs:{"true-value":1,"false-value":0},model:{value:e.drawerform.isEnable,callback:function(t){e.$set(e.drawerform,"isEnable",t)},expression:"drawerform.isEnable"}},[a("Radio",{attrs:{label:1}},[e._v(e._s(e._f("lang")("enabled")))]),a("Radio",{attrs:{label:0}},[e._v(e._s(e._f("lang")("disabled")))])],1)],1),a("FormItem",{attrs:{label:e.tfn("staffDescription"),prop:"remark"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.drawerform.remark,callback:function(t){e.$set(e.drawerform,"remark",t)},expression:"drawerform.remark"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.save()}}},[e._v(e._s(e._f("lang")("confirm")))]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.$emit("input",!1)}}},[e._v(e._s(e._f("lang")("cancel")))])],1)],1),e.loading?a("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)])}),s=(a("99af"),a("b64b"),a("2f62")),n={props:{value:{default:!1,type:Boolean},detail:{default:null,type:Object},roleMap:{default:function(){},type:Object}},data:function(){var e=this;return{drawerform:{userName:"",userPwd:"",password2:"",roleId:"",isEnable:1,remark:""},loading:!1,rules:{userName:[{required:!0,validator:function(t,a,r){a&&/^[a-z0-9A-Z]{6,12}$/.test(a)&&/^[^<>]+$/.test(a)?setTimeout((function(){e.detail?r():e.$post("/sys/sysUser/tob/existLoginName",{userName:a}).then((function(){r()})).catch((function(e){r(new Error(e.message))}))}),400):r(new Error(e.tfn("accountNameTip")))},trigger:"blur"}],userPwd:[{required:!0,validator:function(t,a,r){e.detail&&r();""!==a&&/^[a-zA-Z](?=.*\d)(?=.*[0-9a-zA-Z])(.{7,11})$/.test(a)&&/^[^<>]+$/.test(a)&&!/(\w)\1{2,}/.test(a)?(""!==e.drawerform.password2&&e.$refs.drawerform.validateField("password2"),r()):r(new Error(e.tfn("passwordTip")))},trigger:"blur"}],password2:[{required:!0,validator:function(t,a,r){e.detail&&r(),a?a!==e.drawerform.userPwd?r(new Error(e.tfn("passwordTip2"))):r():r(new Error(e.tfn("passwordTip3")))},trigger:"blur"}]}}},methods:Object(r.a)(Object(r.a)({},Object(s.b)("user",["getPublicKey"])),{},{tfn:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.$t("systemManager.".concat(e),t)},save:function(){var e=this;this.$refs.drawerform.validate((function(t){if(t){e.loading=!0;var a=Object.assign({},e.drawerform);e.getPublicKey().then((function(t){""===e.drawerform.userPwd?delete a.userPwd:a.userPwd=t(e.drawerform.userPwd),e.$post(e.detail?"/sys/sysUser/tob/updateSysUser":"/sys/sysUser/tob/saveSysUser",a).then((function(){e.$Message.success(e.$t("opSuccess")),e.$emit("save")})).catch((function(t){e.$Message.error(t.message)})).finally((function(){e.loading=!1}))}))}}))},queryEditUser:function(e){var t=this;this.$get("/sys/sysUser/tob/getSysUserById",{id:e}).then((function(e){t.drawerform.userName=e.userName,t.drawerform.remark=e.remark,t.drawerform.roleId=e.roleId,t.drawerform.id=e.id,e.isEnable?t.drawerform.isEnable=1:t.drawerform.isEnable=0})).catch((function(e){t.$Message.error(e.message)}))}}),computed:{title:function(){var e=this.tfn("staffManagement"),t=this.tfn(this.detail?"editStaff":"addNewStaff");return"".concat(e,"-").concat(t)},value2:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},watch:{value:function(){this.value?this.detail?this.queryEditUser(this.detail.id):this.drawerform.roleId=Object.keys(this.roleMap)[0]:this.$refs.drawerform.resetFields()}}},i=n,l=(a("5cfb"),a("2877")),u=Object(l.a)(i,o,[],!1,null,null,null).exports,c={props:{value:{default:!1,type:Boolean},detail:{default:null,type:Object},roleMap:{default:function(){},type:Object}},data:function(){return{formModal:{roleId:""},showSpin:!1}},methods:{saveRole:function(){var e=this;this.$refs.formModal.validate((function(t){t&&(e.showSpin=!0,e.$post("/sys/sysUser/tob/saveUserRole",Object(r.a)(Object(r.a)({},e.formModal),{},{userId:e.detail.id})).then((function(){e.$Message.success(e.$t("changeSuccess")),e.$emit("input",!1)})).catch((function(t){e.$Message.error(t.message)})).finally((function(){e.showSpin=!1})))}))},query:function(e){var t=this;this.showSpin=!0,this.$post("/sys/sysUser/tob/queryUserRole",{userId:e}).then((function(e){t.formModal.roleId=e.roleId})).finally((function(){t.showSpin=!1}))}},watch:{value:function(){this.value||this.$refs.formModal.resetFields()}},computed:{value2:{get:function(){return this.detail&&this.query(this.detail.id),this.value},set:function(e){this.$emit("input",e)}}}},d=c,f=Object(l.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{attrs:{title:e.$t("systemManager.setUp")},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},[a("Form",{ref:"formModal",attrs:{model:e.formModal,"label-width":160}},[a("FormItem",{attrs:{label:e.$t("systemManager.changeRoleIdentity"),prop:"roleId"}},[a("Select",{model:{value:e.formModal.roleId,callback:function(t){e.$set(e.formModal,"roleId",t)},expression:"formModal.roleId"}},e._l(e.roleMap,(function(t,r){return a("Option",{key:r,attrs:{value:r}},[e._v(e._s(t))])})),1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"text"},on:{click:function(t){return e.$emit("input",!1)}}},[e._v(e._s(e._f("lang")("cancel")))]),a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.saveRole()}}},[e._v(e._s(e._f("lang")("systemManager.authorization")))])],1),e.showSpin?a("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)}),[],!1,null,null,null),m=f.exports,p={data:function(){var e=this;return{showDrawer:!1,modalDetail:null,showModal:!1,detail:null,roleMap:{},columns:[{title:this.tfn("accountName"),key:"userName"},{title:this.$t("status"),key:"isEnable",count:function(t){return e.$t(t?"enabled":"disabled")}},{title:this.tfn("allowIp"),key:"allowIp"},{title:this.$t("remark"),key:"remark"},{title:this.$t("createTime"),key:"createTime"},{title:this.$t("operation"),key:"operation",slot:"operation"}],dataList:[],form:{loginName:""},pageNum:1,pageSize:20,total:0,showSpin:!1}},methods:Object(r.a)(Object(r.a)({},Object(s.b)("site",["setBindGA"])),{},{tfn:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.$t("systemManager.".concat(e),t)},query:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.showSpin=!0,this.$post("/sys/sysUser/tob/findSysUserByPage",{number:t,size:this.pageSize,userName:this.form.loginName}).then((function(t){var a=t.totalElements,r=t.content;e.dataList=r,e.total=+a})).catch((function(t){e.dataList=[],e.total=0,e.pageNum=1,e.$Message.error(t.message)})).finally((function(){e.showSpin=!1}))},getroleMap:function(){var e=this;this.showSpin=!0,this.$post("/sys/role/tob/findRoleByPage",{size:100}).then((function(t){t.content.forEach((function(t){e.roleMap[t.id]=t.roleName}))})).catch((function(t){e.$Message.error(t.message)})).finally((function(){e.showSpin=!1}))},unBindGA:function(e,t,a){var r=this;this.$post("/sys/sysUser/tob/unBindGA",{userName:e,code:a}).then((function(){r.$Message.success(r.$t("unbindSuccessTip")),r.query(),r.userInfo.userName===e&&r.setBindGA(!1)})).catch((function(e){r.$Message.error(e.message)}))},untie:function(e){var t=this;this.baseInfo.isBindGA?this.$Modal.confirm({title:this.$t("tips"),content:this.tfn("unbindGoogVerificationTip",{name:e.userName}),onOk:function(){setTimeout((function(){var a="";t.$Modal.confirm({render:function(e){var r=e("Input",{props:{value:a,autofocus:!0,placeholder:t.$t("pleaseEnterGoogleVerificationCode")},on:{input:function(e){a=e}}});return e("div",{},[e("div",t.$t("pleaseEnterGoogleVerificationCode")),r])},onOk:function(){t.unBindGA(e.userName,"",a)}})}),500)}}):this.$Message.error(this.$t("bindGoogleVerificationTip"))},add:function(){this.showDrawer=!0,this.detail=null},edit:function(e){this.showDrawer=!0,this.detail=e},changeRole:function(e){this.showModal=!0,this.modalDetail=e},search:function(){this.query(),this.pageNum=1},del:function(e){var t=this;this.$post("/sys/sysUser/tob/deleteSysUser",{id:e}).then((function(){t.$Message.success(t.$t("deleteSuccess")),t.query()})).catch((function(e){t.$Message.error(e.message)}))},pageSizeChange:function(e){this.pageSize=e,this.query()},save:function(){this.search(),this.showDrawer=!1}}),components:{drawer:u,modal:m},computed:Object(r.a)({},Object(s.e)("site",["userInfo","baseInfo"])),mounted:function(){this.getroleMap(),this.query()}},h=p,w=(a("a80d"),Object(l.a)(h,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Form",{ref:"formInline",attrs:{model:e.form,inline:""}},[a("FormItem",{attrs:{label:e.tfn("accountName"),"label-width":70}},[a("Input",{attrs:{type:"text"},model:{value:e.form.loginName,callback:function(t){e.$set(e.form,"loginName",t)},expression:"form.loginName"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary",icon:"md-search"},on:{click:function(t){return e.search()}}},[e._v(e._s(e._f("lang")("query")))])],1),a("FormItem",[e.pageauthoritys.save?a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:function(t){return e.add()}}},[e._v(e._s(e.tfn("addNewStaff")))]):e._e()],1)],1),a("m-table",{attrs:{border:"",columns:e.columns,data:e.dataList},scopedSlots:e._u([{key:"remark",fn:function(t){var r=t.row;return[a("Poptip",{attrs:{content:r.remark,title:e.$t("remark"),placement:"right"}},[a("Icon",{staticClass:"department-remark",attrs:{type:"ios-information-circle"}})],1)]}},{key:"operation",fn:function(t){var r=t.row;return[a("div",{staticClass:"operation-btn-group"},[r.isKey&&e.pageauthoritys.unBindGA?a("Tooltip",{attrs:{content:e.tfn("unbind"),placement:"top"}},[a("Button",{attrs:{size:"small",icon:"md-infinite"},on:{click:function(t){return e.untie(r)}}})],1):e._e(),e.pageauthoritys.update?a("Tooltip",{attrs:{content:e.tfn("modifyStaffInformation"),placement:"top"}},[a("Button",{attrs:{size:"small",icon:"md-create"},on:{click:function(t){return e.edit(r)}}})],1):e._e(),e.pageauthoritys.saveUserRole?a("Tooltip",{attrs:{content:e.tfn("changeRoleIdentity"),placement:"top"}},[a("Button",{attrs:{size:"small",icon:"md-cog"},on:{click:function(t){return e.changeRole(r)}}})],1):e._e(),e.pageauthoritys.delete?a("Poptip",{attrs:{confirm:"",title:e.$t("deleteTip")},on:{"on-ok":function(t){return e.del(r.id)}}},[a("Button",{attrs:{size:"small",icon:"md-trash"}})],1):e._e()],1)]}}])}),a("m-page",{attrs:{pageSize:e.pageSize,total:e.total,pageSizeOpts:[20,30,50]},on:{"on-change":e.query,"on-page-size-change":e.pageSizeChange},model:{value:e.pageNum,callback:function(t){e.pageNum=t},expression:"pageNum"}}),e.showSpin?a("Spin",{attrs:{size:"large",fix:""}}):e._e(),a("drawer",{attrs:{detail:e.detail,roleMap:e.roleMap},on:{save:function(t){return e.save()}},model:{value:e.showDrawer,callback:function(t){e.showDrawer=t},expression:"showDrawer"}}),a("modal",{attrs:{detail:e.modalDetail,roleMap:e.roleMap},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}})],1)}),[],!1,null,null,null));t.default=w.exports}}]);