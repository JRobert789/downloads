(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f89954f2"],{"8ec6":function(e,t,n){},9892:function(e,t,n){"use strict";n("8ec6")},"9b12":function(e,t,n){"use strict";n.r(t);var a={data:function(){return{loading:!0,lotDate:{}}},methods:{getDate:function(){var e=this;this.$get("/platform/siteSetting/tob/getSiteSetting").then((function(t){e.lotDate=t?Object.assign({oneOrderHighMoney:"",oneDayOrderMaxNum:""},t,{oneOrderMaxMoney:+t.oneOrderMaxMoney/100||"",oneDayOrderMaxNum:+t.oneDayOrderMaxNum||"",oneOrderMaxCommission:+t.oneOrderMaxCommission/100||""}):{oneOrderMaxMoney:"",oneDayOrderMaxNum:"",oneOrderMaxCommission:""}})).catch((function(t){e.$Message.error(t.message)})).finally((function(){e.loading=!1}))},save:function(){var e=this;this.loading=!0;var t=(100*+this.lotDate.oneOrderMaxMoney).toFixed(0),n=(100*+this.lotDate.oneOrderMaxCommission).toFixed(0);this.$post("/platform/siteSetting/tob/saveSiteSetting",{oneOrderMaxMoney:t,oneOrderMaxCommission:n,oneDayOrderMaxNum:this.lotDate.oneDayOrderMaxNum}).then((function(){e.$Message.success(e.$t("success"))})).catch((function(t){e.$Message.error(t.message)})).finally((function(){e.loading=!1}))}},mounted:function(){this.getDate()},components:{Nav:(n("d3b7"),n("b680"),n("3d01")).a}},o=a,i=(n("9892"),n("2877")),r=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lotSiteSettingWarp"},[n("Nav",{attrs:{nav:[{path:"/populationSetting",name:e.nowpagetitle}]}}),n("div",{staticClass:"lotSiteSetting"},[n("table",{staticClass:"cmtable"},[n("tr",[n("td",[e._v(e._s(e._f("lang")("riskManagement.maximumOrderAmount")))]),n("td",[n("InputNumber",{staticClass:"NoBoder",attrs:{min:0,max:999999999,precision:0,placeholder:e.$t("riskManagement.enterAPositiveInteger")},model:{value:e.lotDate.oneOrderMaxMoney,callback:function(t){e.$set(e.lotDate,"oneOrderMaxMoney",t)},expression:"lotDate.oneOrderMaxMoney"}})],1),n("td",[e._v(e._s(e._f("lang")("riskManagement.maximumOrderQuantity")))]),n("td",[n("InputNumber",{staticClass:"NoBoder",attrs:{min:0,max:99999,precision:0,placeholder:e.$t("riskManagement.enterAPositiveInteger")},model:{value:e.lotDate.oneDayOrderMaxNum,callback:function(t){e.$set(e.lotDate,"oneDayOrderMaxNum",t)},expression:"lotDate.oneDayOrderMaxNum"}})],1)]),n("tr",[n("td",[e._v(e._s(e._f("lang")("riskManagement.maximumCommissionAmount")))]),n("td",[n("InputNumber",{staticClass:"NoBoder",attrs:{min:0,max:999999999,precision:0,placeholder:e.$t("riskManagement.enterAPositiveInteger")},model:{value:e.lotDate.oneOrderMaxCommission,callback:function(t){e.$set(e.lotDate,"oneOrderMaxCommission",t)},expression:"lotDate.oneOrderMaxCommission"}})],1)])]),n("div",{staticStyle:{"text-align":"center",margin:"10px 0"}},[n("Button",{attrs:{type:"primary",disabled:!e.pageauthoritys.save},on:{click:e.save}},[e._v(e._s(e._f("lang")("confirm")))])],1)])],1)}),[],!1,null,null,null);t.default=r.exports}}]);