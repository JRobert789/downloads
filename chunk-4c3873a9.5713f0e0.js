(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4c3873a9"],{a89a:function(i,t,e){},cf60:function(i,t,e){"use strict";e.r(t);var s=(e("d3b7"),e("a9e3"),e("4d63"),e("ac1f"),e("25f0"),e("159b"),e("b64b"),e("b680"),{data:function(){return{loading:!1,form:{}}},methods:{query:function(){var i=this;this.loading=!0,this.$get("/platform/userFrontSetting/tob/queryUserFrontSetting").then((function(t){i.form=t,i.form.awardLimit/=100,i.form.ipLimit=Number(t.ipLimit),i.form.deviceLimit=Number(t.deviceLimit)})).catch((function(t){i.$Message.error(t.message)})).finally((function(){i.loading=!1}))},handleSave:function(){var i=this,t=new RegExp("^(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){0,2})?$"),e=new RegExp("^[0-9]+$");if(e.test(this.form.bankCardLimit))if(t.test(this.form.awardLimit))if(e.test(this.form.ipLimit))if(e.test(this.form.deviceLimit)){var s={};Object.keys(this.form).forEach((function(t){s[t]=i.form[t]})),s.awardLimit=(100*s.awardLimit).toFixed(0),this.loading=!0,this.$post("/platform/userFrontSetting/tob/updateUserFrontSetting",s).then((function(){i.$Message.success(i.$t("changeSuccess"))})).catch((function(t){i.$Message.error(t.message)})).finally((function(){i.query(),i.loading=!1}))}else this.$Message.info(this.$t("siteConfig.loginVadidate4"));else this.$Message.info(this.$t("siteConfig.loginVadidate3"));else this.$Message.info(this.$t("siteConfig.loginVadidate2"));else this.$Message.info(this.$t("siteConfig.loginVadidate1"))}},mounted:function(){this.query()},components:{}}),a=s,n=(e("e98f"),e("2877")),o=Object(n.a)(a,(function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"login_config"},[i.loading?e("Spin",{attrs:{fix:""}}):i._e(),e("div",{staticClass:"formWarp"},[e("div",{staticClass:"formItem"},[e("span",[i._v(i._s(i._f("lang")("siteConfig.bandSet")))]),i._v(" "+i._s(i._f("lang")("siteConfig.bankCardLimit"))+" "),e("InputNumber",{staticClass:"width-120",attrs:{min:1,max:10},model:{value:i.form.bankCardLimit,callback:function(t){i.$set(i.form,"bankCardLimit",t)},expression:"form.bankCardLimit"}}),i._v(" "+i._s(i._f("lang")("siteConfig.zhang"))+" ")],1),e("div",{staticClass:"formItem"},[e("span",[i._v(i._s(i._f("lang")("siteConfig.awardInfo")))]),i._v(" "+i._s(i._f("lang")("siteConfig.awardAbove"))+" "),e("InputNumber",{staticClass:"width-120",attrs:{precision:2,"active-change":!1,min:.01},model:{value:i.form.awardLimit,callback:function(t){i.$set(i.form,"awardLimit",t)},expression:"form.awardLimit"}}),i._v(i._s(i.$currency)+" ")],1),e("div",{staticClass:"formItem"},[e("span",[i._v(i._s(i._f("lang")("siteConfig.isRegisterLimit")))]),e("RadioGroup",{attrs:{"true-value":1,"false-value":0},model:{value:i.form.ip,callback:function(t){i.$set(i.form,"ip",t)},expression:"form.ip"}},[e("Radio",{attrs:{label:1}},[i._v(i._s(i._f("lang")("siteConfig.open")))]),e("Radio",{attrs:{label:0}},[i._v(i._s(i._f("lang")("siteConfig.close")))])],1)],1),e("div",{staticClass:"formItem"},[e("span",[i._v(i._s(i._f("lang")("siteConfig.ipLimit")))]),e("InputNumber",{staticClass:"width-120",attrs:{"active-change":!1,min:1},model:{value:i.form.ipLimit,callback:function(t){i.$set(i.form,"ipLimit",t)},expression:"form.ipLimit"}}),i._v(" "+i._s(i._f("lang")("siteConfig.accountStatistics"))+" ")],1),e("div",{staticClass:"formItem"},[e("span",[i._v(i._s(i._f("lang")("siteConfig.deviceLimit")))]),e("InputNumber",{staticClass:"width-120",attrs:{"active-change":!1,min:1},model:{value:i.form.deviceLimit,callback:function(t){i.$set(i.form,"deviceLimit",t)},expression:"form.deviceLimit"}}),i._v(" "+i._s(i._f("lang")("siteConfig.accountStatistics"))+" ")],1),e("div",{staticClass:"formItem"},[e("span"),e("Button",{attrs:{type:"primary",disabled:!i.pageauthoritys.save},on:{click:i.handleSave}},[i._v(i._s(i._f("lang")("siteConfig.save")))])],1)])],1)}),[],!1,null,null,null);t.default=o.exports},e98f:function(i,t,e){"use strict";e("a89a")}}]);