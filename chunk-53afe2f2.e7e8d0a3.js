(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-53afe2f2"],{6211:function(e,t,a){},7476:function(e,t,a){"use strict";a("6211")},f9f5:function(e,t,a){"use strict";a.r(t);var s=a("5530"),r=a("3835"),n=(a("d3b7"),a("ac1f"),a("5319"),a("1276"),a("3d01")),i={props:{value:{default:!1,type:Boolean},DarwId:{default:"",type:Object}},data:function(){return{formItem:{userName:"",linkType:0,domainUrl:"",referCode:""},isProxy:1,darwList:[],domainUrl:""}},methods:{getDetailUser:function(){var e=this;this.$get("/user/tob/getDomain").then((function(t){e.darwList=t}))},handleSave:function(){var e=this;this.$post("/user/refer/tob/updateUserRefer",{id:this.DarwId.id,linkType:this.formItem.linkType,domainUrl:this.formItem.domainUrl,domainUrl1:this.formItem.domainUrl}).then((function(){e.$Message.success("添加成功"),e.value2=!1})).catch((function(t){e.$Message.error(t.message)})).finally((function(){}))}},computed:{value2:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},watch:{DarwId:function(e){""!==e&&(this.formItem.userName=e.userName,this.getDetailUser())}}},o=i,l=a("2877"),u=Object(l.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Drawer",{attrs:{width:"700",title:"编辑推广链接"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},[a("Form",{attrs:{model:e.formItem,"label-width":150}},[a("FormItem",{attrs:{label:"所属代理商",prop:"name"}},[a("Input",{staticStyle:{width:"120px"},attrs:{disabled:""},model:{value:e.formItem.userName,callback:function(t){e.$set(e.formItem,"userName",t)},expression:"formItem.userName"}})],1),a("FormItem",{attrs:{label:"账号类型",prop:"name"}},[a("RadioGroup",{attrs:{"true-value":1,"false-value":0},model:{value:e.isProxy,callback:function(t){e.isProxy=t},expression:"isProxy"}},[a("Radio",{attrs:{label:1}},[e._v("代理")])],1),a("p",[e._v("前台通过该推广链接注册的账户类型（用户角色）。")])],1),a("FormItem",{attrs:{label:"链接类型",prop:"name"}},[a("RadioGroup",{attrs:{"true-value":1,"false-value":0},model:{value:e.formItem.linkType,callback:function(t){e.$set(e.formItem,"linkType",t)},expression:"formItem.linkType"}},[a("Radio",{attrs:{label:0}},[e._v("站内")]),a("Radio",{attrs:{label:1}},[e._v("代理链接")])],1)],1),e.formItem.linkType?a("FormItem",{attrs:{label:"自定地址",prop:"name"}},[a("Input",{staticStyle:{width:"200px"},model:{value:e.formItem.domainUrl,callback:function(t){e.$set(e.formItem,"domainUrl",t)},expression:"formItem.domainUrl"}}),a("p",[e._v("自定地址格式：http://www.xxx.com , https://www.xxx.com")])],1):a("FormItem",{attrs:{label:"本站地址",prop:"name"}},[a("Select",{staticStyle:{width:"200px","margin-right":"8px"},model:{value:e.formItem.domainUrl,callback:function(t){e.$set(e.formItem,"domainUrl",t)},expression:"formItem.domainUrl"}},e._l(e.darwList,(function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])})),1)],1),a("FormItem",{attrs:{label:"推广码",prop:"name"}},[a("Input",{staticStyle:{width:"120px","margin-right":"10px"},attrs:{disabled:""},model:{value:e.DarwId.referCode,callback:function(t){e.$set(e.DarwId,"referCode",t)},expression:"DarwId.referCode"}}),a("span",[e._v("格式：6位数字与字母组合")])],1),a("FormItem",[a("Button",{staticStyle:{"margin-right":"8px"},attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("确定")]),a("Button",{on:{click:function(t){e.value2=!1}}},[e._v("取消")])],1)],1)],1)}),[],!1,null,null,null),c=u.exports,m=a("2909"),h=(a("99af"),a("a630"),a("3ca3"),a("d36b")),d=([{key:"all",name:"全部层级"}].concat(Object(m.a)(Array.from({length:17},(function(e,t){return{key:t+1+"",name:"第".concat(t+1,"层")}})))),[{key:"all",name:"全部等级"}].concat(Object(m.a)(Array.from({length:10},(function(e,t){return{key:t+"",name:"第".concat(t,"级")}})))),{shortcuts:[{text:h.a.t("Today"),value:function(){var e=new Date;e.setHours(0),e.setMinutes(0),e.setSeconds(0);var t=new Date;return t.setHours(23),t.setMinutes(59),t.setSeconds(59),[new Date(e),t]}},{text:h.a.t("Yesterday"),value:function(){var e=new Date;e.setTime(e.getTime()-864e5),e.setHours(0),e.setMinutes(0),e.setSeconds(0);var t=new Date(e);return t.setHours(23),t.setMinutes(59),t.setSeconds(59),[e,t]}},{text:h.a.t("Thisweek"),value:function(){var e=new Date,t=e.getDay()||7,a=new Date(e-864e5*(t-1));a.setHours(0),a.setMinutes(0),a.setSeconds(0);var s=new Date;return s.setHours(23),s.setMinutes(59),s.setSeconds(59),[a,s]}},{text:h.a.t("Lastweek"),value:function(){var e=new Date,t=e.getDay()||7,a=864e5,s=new Date(e-t*a),r=new Date(e-(t+6)*a);return r.setHours(0),r.setMinutes(0),r.setSeconds(0),s.setHours(23),s.setMinutes(59),s.setSeconds(59),[r,s]}},{text:h.a.t("Thismonth"),value:function(){var e=new Date;e.setDate(1);var t=new Date(e);t.setHours(0),t.setMinutes(0),t.setSeconds(0);var a=new Date;return a.setHours(23),a.setMinutes(59),a.setSeconds(59),[t,a]}},{text:h.a.t("Lastmonth"),value:function(){var e,t,a=new Date;return a.setDate(0),(e=new Date(a)).setHours(23),e.setMinutes(59),e.setSeconds(59),a.setDate(1),(t=new Date(a)).setHours(0),t.setMinutes(0),t.setSeconds(0),[t,e]}},{text:h.a.t("Nearlysevendays"),value:function(){var e=new Date,t=new Date;return t.setHours(0),t.setMinutes(0),t.setSeconds(0),e.setHours(23),e.setMinutes(59),e.setSeconds(59),t.setTime(t.getTime()-5184e5),[t,e]}},{text:h.a.t("Nearlythrtydays"),value:function(){var e=new Date,t=new Date;return t.setHours(0),t.setMinutes(0),t.setSeconds(0),e.setHours(23),e.setMinutes(59),e.setSeconds(59),t.setTime(t.getTime()-25056e5),[t,e]}}],disabledDate:function(e){return e&&e.valueOf()>Date.now()}}),p={data:function(){return{loading:!1,showDarw:!1,DarwId:{},show:!1,showUrl:"",referCode:"",userName:"",startRebate:null,endRebate:null,dateoptions:d,OrderTime:[null,null],data:[null,null],showDatePick:!1,pageObj:{page:1,limit:10,total:0},urlList:[],isUse:!1}},methods:{changeUserGroup:function(e){var t=this;this.loading=!0,this.$post("/user/refer/tob/updateUserRefer",{id:e.id,userGroup:1===e.userGroup?1:0,referCode:e.referCode}).then((function(){t.$Message.success(t.$t("changeSuccess"))})).catch((function(e){t.$Message.error(e.message)})).finally((function(){t.getUrlList(!0),t.loading=!1}))},handleCopy:function(e){this.$utils.copy(e),this.$Message.success(this.$t("copySuccessfully"))},clearChoose:function(){this.referCode="",this.userName="",this.startRebate=null,this.endRebate=null,this.OrderTime=[null,null]},getUrlList:function(e){var t=this;this.loading=!0,this.$get("/user/refer/tob/getUserReferTable",{page:this.pageObj.page,limit:this.pageObj.limit,userName:this.userName,referCode:this.referCode,startTime:this.showDatePick?this.$utils.formatDate(this.OrderTime[0],"YYYY-MM-DD hh:mm:ss"):"",endTime:this.showDatePick?this.$utils.formatDate(this.OrderTime[1],"YYYY-MM-DD hh:mm:ss"):""}).then((function(e){t.urlList=e.content,t.pageObj.total=+e.totalElements||0})).catch((function(e){t.$Message.error(e.message)})).finally((function(){e||(t.loading=!1)}))},pageChange:function(e){this.pageObj.page=e,this.getUrlList()},pageSizeChange:function(e){this.pageObj.limit=e,this.getUrlList()},clearDate:function(){this.OrderTime=[null,null]},change:function(e,t){var a=Object(r.a)(e,2),s=a[0],n=a[1],i=this.$utils.formatDate(this.data[0])||"1990-01-01 00:00:00",o=this.$utils.formatDate(this.data[1])||"1990-01-01 23:59:59";"date"===t&&(this.OrderTime=[s.replace("00:00:00",i.split(" ")[1]),n.replace("00:00:00",o.split(" ")[1])]),this.date=this.OrderTime},handleChange:function(e){this.showDarw=!0,this.DarwId=e},handlePause:function(e){var t,a=this,r=this;t={render:function(t){return[t("Checkbox",{props:{value:a.isUse},on:{input:function(e){a.isUse=e}}}),t("span",{},r.$t("proxy.pleaseTips1",{type:0===e.isEnable?a.$t("generalizeUrl.Using"):a.$t("generalizeUrl.Deactivate"),user:e.userName}))]}},this.$Modal.confirm(Object(s.a)(Object(s.a)({title:this.$t("Tips"),content:"".concat(this.$t("proxy.Areyousure"))},t),{},{onOk:function(){a.loading=!0,a.$post("/user/refer/tob/updateUserRefer",{id:e.id,isEnable:0===e.isEnable?1:0,referCode:e.referCode,type:a.isUse?1:0}).then((function(){a.$Message.success(a.$t("changeSuccess")),a.getUrlList(!0)})).catch((function(e){a.$Message.error(e.message)})).finally((function(){a.loading=!1}))}})),this.isUse=!1}},mounted:function(){this.getUrlList()},components:{Nav:n.a,changeList:c},watch:{showDarw:function(e){e||this.getUrlList()}}},g=p,f=(a("7476"),Object(l.a)(g,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"generalizeUrlWarp"},[e.loading?a("Spin",{attrs:{fix:""}}):e._e(),a("Nav",{attrs:{nav:[{path:"/generalizeUrl",name:e.nowpagetitle}]}}),a("div",{staticClass:"generalizeUrl"},[a("div",{staticClass:"chooseList"},[a("Button",[e._v(e._s(e.$t("generalizeUrl.referCode")))]),a("Input",{staticStyle:{width:"120px","margin-right":"8px"},model:{value:e.referCode,callback:function(t){e.referCode=t},expression:"referCode"}}),a("Button",[e._v(e._s(e.$t("generalizeUrl.InuserName")))]),a("Input",{staticStyle:{width:"120px","margin-right":"8px"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e.showDatePick?[a("DatePicker",{staticStyle:{width:"330px","margin-left":"8px"},attrs:{options:e.dateoptions,type:"datetimerange"},on:{"on-change":e.change,"on-clear":e.clearDate},model:{value:e.OrderTime,callback:function(t){e.OrderTime=t},expression:"OrderTime"}})]:e._e(),a("h3",{staticStyle:{height:"8px"}}),a("Button",{staticStyle:{"margin-right":"8px"},attrs:{type:"primary",icon:"ios-search"},on:{click:function(t){e.pageObj.page=1,e.getUrlList()}}},[e._v(e._s(e.$t("generalizeUrl.search")))]),a("Button",{staticStyle:{"margin-right":"8px"},attrs:{type:"primary"},on:{click:function(t){e.showDatePick=!e.showDatePick}}},[e._v(e._s(e.$t("generalizeUrl.high")))]),a("Button",{staticStyle:{"margin-right":"8px"},attrs:{type:"primary"},on:{click:e.clearChoose}},[e._v(e._s(e.$t("generalizeUrl.cleanSearch")))])],2),a("table",{staticClass:"cmtable"},[a("tr",{staticStyle:{"text-align":"left"}},[a("th",{attrs:{rowspan:"2"}},[e._v(e._s(e.$t("generalizeUrl.generalizeTable1")))]),a("th",{attrs:{rowspan:"2"}},[e._v(e._s(e.$t("generalizeUrl.generalizeTable2")))]),a("th",{attrs:{rowspan:"2"}},[e._v(e._s(e.$t("generalizeUrl.generalizeTable3")))]),a("th",{attrs:{rowspan:"2"}},[e._v(e._s(e.$t("generalizeUrl.generalizeTable4")))]),a("th",{attrs:{rowspan:"2"}},[e._v(e._s(e.$t("generalizeUrl.generalizeTable7")))]),a("th",{attrs:{rowspan:"2"}},[e._v(e._s(e.$t("generalizeUrl.generalizeTable5")))]),a("th",{attrs:{rowspan:"2"}},[e._v(e._s(e.$t("generalizeUrl.generalizeTable6")))])]),a("tr"),e.urlList.length?e._l(e.urlList,(function(t,s){return a("tr",{key:s},[a("td",[e._v(e._s(t.createTime))]),a("td",[e._v(" "+e._s("default"===t.userName?"厅主":t.userName)+" "),2===t.isDemo?a("span",{staticStyle:{color:"red"}},[e._v("[测试账号]")]):e._e()]),a("td",[e._v(e._s(0===t.isProxy?"玩家":e.$t("generalizeUrl.agent")))]),a("td",[e._v(e._s(t.referCode))]),a("td",[a("i-switch",{attrs:{"true-value":1,"false-value":0},on:{"on-change":function(a){return e.changeUserGroup(t)}},model:{value:t.userGroup,callback:function(a){e.$set(t,"userGroup",a)},expression:"i.userGroup"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v(e._s(e._f("lang")("siteConfig.yes")))]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v(e._s(e._f("lang")("siteConfig.no")))])])],1),a("td",[e._v(e._s(1===t.isEnable?e.$t("generalizeUrl.Using"):e.$t("generalizeUrl.Deactivate")))]),a("td",[e.pageauthoritys.update?[t.isEnable?a("Button",{staticStyle:{"margin-right":"8px"},attrs:{title:e.$t("generalizeUrl.Using"),icon:"ios-pause"},on:{click:function(a){return e.handlePause(t)}}}):a("Button",{staticStyle:{"margin-right":"8px"},attrs:{title:e.$t("generalizeUrl.Deactivate"),icon:"ios-play"},on:{click:function(a){return e.handlePause(t)}}})]:e._e()],2)])})):[a("tr",[a("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"15"}},[e._v(e._s(e.$t("Nodata")))])])]],2),a("div",{staticClass:"bottom"},[a("div",{staticClass:"static"},[e._v(e._s(e._f("lang")("pageDate",{total:e.pageObj.total,page:e.pageObj.page,allpage:Math.ceil(e.pageObj.total/e.pageObj.limit)})))]),a("Page",{staticStyle:{float:"right"},attrs:{current:e.pageObj.page,"page-size":e.pageObj.limit,total:e.pageObj.total,"show-sizer":"","show-elevator":"","page-size-opts":[10,20,50,100]},on:{"on-change":e.pageChange,"on-page-size-change":e.pageSizeChange}})],1),a("Modal",{attrs:{title:"推广地址"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("a",{attrs:{href:e.showUrl,target:"_blank"}},[e._v(e._s(e.showUrl))]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.show=!1}}},[e._v("关闭")])],1)]),a("changeList",{attrs:{DarwId:e.DarwId},model:{value:e.showDarw,callback:function(t){e.showDarw=t},expression:"showDarw"}})],1)],1)}),[],!1,null,null,null));t.default=f.exports}}]);