(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-eb0b4aa4"],{"3b9f":function(t,e,a){"use strict";a.r(e);var n=(a("b680"),a("d3b7"),a("fb6a"),{data:function(){return{withdrawNo:"",userName:"",status:"all",minMoney:null,maxMoney:null,time:this.$utils.getTodayArr(),excelIng:!1,statusList:{},typeList:{201:this.tfn("manuallyProposed"),205:this.tfn("repeatWithdrawal"),206:this.tfn("incorrectDepositOfCompanyFunds"),207:this.tfn("playerNegativeRecharge"),214:this.tfn("manuallyApplyForWithdrawal"),208:this.tfn("other")},columns:[{title:this.tfn("accountName"),slot:"user"},{title:this.tfn("rechargeAmount"),slot:"money"},{title:this.$t("status"),slot:"status"},{title:this.$t("time"),slot:"time"}],dataList:[],totalElements:0,pageNum:1,pageSize:20,showSpin:!1,userType:"-1",summationList:[{title:this.tfn("subtotalOfWithdrawalAmount"),value:"0.00"},{title:this.tfn("totalOfWithdrawalAmount"),value:"0.00"}]}},methods:{tfn:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.$t("systemManager.".concat(t),e)},sum:function(t){var e=0;return e+=+t.depositMoney||0,e+=+t.depositDiscount||0,e+=+t.otherDiscount||0},query:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.showSpin=!0;var a=this.minMoney,n=this.maxMoney,s=this.userName,i=this.status,r=this.time,l=this.pageSize,o=this.withdrawNo,u={startTime:this.$utils.formatDate(r[0],"YYYY-MM-DD")+" 00:00:00",endTime:this.$utils.formatDate(r[1],"YYYY-MM-DD")+" 23:59:59",page:e,size:l};a&&(u.minMoney=(100*a).toFixed()),n&&(u.maxMoney=(100*n).toFixed()),o&&(u.withdrawNo=o),"all"!==i&&(u.subTradeType=i),s&&(u.userAccountName=s),+this.userType>=0&&(u.isDemo=+this.userType),this.$get("/withdraw/order/tob/queryManualPage",u,{"Content-type":"application/json;charset=UTF-8"}).then((function(e){var a=e||{},n=a.totalElements,s=a.content,i=a.page;t.dataList=s,t.totalElements=+n,t.pageNum=+i||1})).catch((function(e){t.dataList=[],t.totalElements=0,t.pageNum=1,t.$Message.error(e.message)})).finally((function(){t.showSpin=!1}))},search:function(){this.pageNum=1,this.query()},clear:function(){this.withdrawNo="",this.userName="",this.status="all",this.minMoney=null,this.maxMoney=null},pageSizeChange:function(t){this.pageSize=t,this.query()}},mounted:function(){this.query()},filters:{time:function(t){return t.slice(0,19)},toFixed:function(t){return((t=t||0)/100).toFixed(2)}}}),s=n,i=(a("e2d4"),a("2877")),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outmanager"},[a("Form",{attrs:{inline:""}},[a("FormItem",[a("Select",{staticClass:"select",model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[a("Option",{attrs:{value:"all"}},[t._v(t._s(t._f("lang")("all")))]),a("Option",{attrs:{value:"205"}},[t._v(t._s(t.tfn("repeatWithdrawal")))]),a("Option",{attrs:{value:"206"}},[t._v(t._s(t.tfn("incorrectDepositOfCompanyFunds")))]),a("Option",{attrs:{value:"214"}},[t._v(t._s(t.tfn("manuallyApplyForWithdrawal")))]),a("Option",{attrs:{value:"208"}},[t._v(t._s(t.tfn("other")))])],1)],1),a("FormItem",{attrs:{label:t.tfn("withdrawalOrder"),"label-width":70}},[a("Input",{attrs:{placeholder:t.tfn("withdrawalOrder")},model:{value:t.withdrawNo,callback:function(e){t.withdrawNo=e},expression:"withdrawNo"}})],1),a("FormItem",{attrs:{label:t.tfn("withdrawalAccount"),"label-width":70}},[a("Input",{attrs:{placeholder:t.tfn("withdrawalAccount")},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}},[a("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:t.userType,callback:function(e){t.userType=e},expression:"userType"}},[a("Option",{attrs:{value:"-1"}},[t._v(t._s(t._f("lang")("all")))]),a("Option",{attrs:{value:"0"}},[t._v(t._s(t._f("lang")("official")))]),a("Option",{attrs:{value:"2"}},[t._v(t._s(t._f("lang")("test")))])],1)],1)],1),a("FormItem",{attrs:{label:t.tfn("withdrawalAmount"),"label-width":70}},[a("InputNumber",{attrs:{min:0,placeholder:t.tfn("minimumAmount")},model:{value:t.minMoney,callback:function(e){t.minMoney=e},expression:"minMoney"}})],1),a("FormItem",[a("span",[t._v("-")])]),a("FormItem",[a("InputNumber",{attrs:{min:0,placeholder:t.tfn("maximumAmount")},model:{value:t.maxMoney,callback:function(e){t.maxMoney=e},expression:"maxMoney"}})],1),a("FormItem",[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"daterange"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary",icon:"md-search"},on:{click:function(e){return t.search()}}},[t._v(t._s(t._f("lang")("search")))])],1),a("FormItem",[a("Button",{on:{click:function(e){return t.clear()}}},[t._v(t._s(t._f("lang")("clearSearch")))])],1)],1),a("m-table",{attrs:{columns:t.columns,data:t.dataList,size:"small"},scopedSlots:t._u([{key:"user",fn:function(e){var n=e.row;return[a("ul",[a("li",[a("span",[t._v(t._s(t._f("lang")("withdrawalOrder")))]),t._v(t._s(n.withdrawNo))]),a("li",[a("span",[t._v(t._s(t.tfn("accountName")))]),a("span",{staticClass:"name"},[t._v(t._s(n.userName))]),a("Button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.$utils.copy(n.userName)}}},[t._v(t._s(t._f("lang")("copy")))]),2==+n.isDemo?a("span",{staticStyle:{color:"red"}},[t._v("【"+t._s(t._f("lang")("test"))+"】")]):t._e()],1),a("li",[a("span",[t._v(t._s(t.tfn("directAgent")))]),t._v(t._s(n.highUserName))])])]}},{key:"money",fn:function(e){var n=e.row;return[a("ul",[a("li",[a("span",[t._v(t._s(t.tfn("withdrawalAmount")))]),t._v(t._s(t._f("toFixed")(n.factMoney)))])])]}},{key:"status",fn:function(e){var n=e.row;return[a("ul",[a("li",[a("span",[t._v(t._s(t.tfn("withdrawalType")))]),t._v(t._s(t.typeList[n.subTradeType]))]),a("li",{staticClass:"remark"},[a("span",[t._v(t._s(t._f("lang")("remark")))]),n.remark.length>10?a("Poptip",{attrs:{title:t.$t("remark"),placement:"right"}},[a("div",{staticClass:"text"},[t._v(t._s(n.remark))]),a("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(n.remark)+" ")])]):a("div",[t._v(t._s(n.remark))])],1)])]}},{key:"time",fn:function(e){var n=e.row;return[a("ul",[a("li",[a("span",[t._v(t._s(t._f("lang")("operation")))]),t._v(t._s(t._f("time")(n.createTime)))]),a("li",[a("span",[t._v(t._s(t._f("lang")("operator")))]),t._v(t._s(n.applyerName))])])]}}])}),t.showSpin?a("Spin",{attrs:{size:"large",fix:""}}):t._e(),a("m-page",{attrs:{total:t.totalElements,pageSizeOpts:[10,20,50,100,500],pageSize:t.pageSize},on:{"on-change":t.query,"on-page-size-change":t.pageSizeChange},model:{value:t.pageNum,callback:function(e){t.pageNum=e},expression:"pageNum"}})],1)}),[],!1,null,null,null);e.default=r.exports},b907:function(t,e,a){},e2d4:function(t,e,a){"use strict";a("b907")}}]);