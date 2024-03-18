(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-75045c1c"],{"38d3":function(t,e,a){},"3cb7":function(t,e,a){"use strict";a("f05a")},e4ee:function(t,e,a){"use strict";a.r(e);var r=(a("159b"),a("99af"),a("a4d3"),a("e01a"),a("d3b7"),a("25f0"),a("a9e3"),a("b680"),a("d81d"),a("a434"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Drawer",{attrs:{width:"720"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},[t.loading?a("Spin",{attrs:{fix:""}}):t._e(),a("Form",{ref:"form",attrs:{model:t.form,"label-width":200,rules:t.rule}},[a("FormItem",{attrs:{label:t.$t("roomManage.name"),prop:"name"}},[a("Input",{staticClass:"width-300",attrs:{maxlength:"20"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("FormItem",{attrs:{label:t.$t("roomManage.pic"),prop:"logoUrl"}},[a("upload",{ref:"upRef1",attrs:{list:t.upList1},on:{"upload-remove":t.uploadRemove1,"upload-success":t.uploadSuccess1},model:{value:t.form.logoUrl,callback:function(e){t.$set(t.form,"logoUrl",e)},expression:"form.logoUrl"}})],1),a("FormItem",{attrs:{label:t.$t("roomManage.level"),prop:"minLevelLimit"}},[t._v(" lv."),a("InputNumber",{staticClass:"width-100",attrs:{min:1,max:99999},model:{value:t.form.minLevelLimit,callback:function(e){t.$set(t.form,"minLevelLimit",e)},expression:"form.minLevelLimit"}}),t._v("~"),a("InputNumber",{staticClass:"width-100",attrs:{min:1,max:99999},model:{value:t.form.maxLevelLimit,callback:function(e){t.$set(t.form,"maxLevelLimit",e)},expression:"form.maxLevelLimit"}})],1),a("FormItem",{attrs:{label:t.$t("roomManage.balance"),prop:"minBalanceLimit"}},[a("InputNumber",{staticClass:"width-100",attrs:{min:0,max:9999999999.99},model:{value:t.form.minBalanceLimit,callback:function(e){t.$set(t.form,"minBalanceLimit",e)},expression:"form.minBalanceLimit"}}),t._v("~"),a("InputNumber",{staticClass:"width-100",attrs:{min:0,max:9999999999.99},model:{value:t.form.maxBalanceLimit,callback:function(e){t.$set(t.form,"maxBalanceLimit",e)},expression:"form.maxBalanceLimit"}})],1),a("FormItem",{attrs:{label:t.$t("roomManage.maxOrderAmount"),prop:"maxOrderAmount"}},[a("InputNumber",{staticClass:"width-300",attrs:{min:0,max:9999999999.99},model:{value:t.form.maxOrderAmount,callback:function(e){t.$set(t.form,"maxOrderAmount",e)},expression:"form.maxOrderAmount"}})],1),a("FormItem",{attrs:{label:t.$t("roomManage.minOrderAmount"),prop:"minOrderAmount"}},[a("InputNumber",{staticClass:"width-300",attrs:{min:0,max:9999999999.99},model:{value:t.form.minOrderAmount,callback:function(e){t.$set(t.form,"minOrderAmount",e)},expression:"form.minOrderAmount"}}),a("div",[t._v(t._s(t._f("lang")("roomManage.editTips")))])],1),a("FormItem",{attrs:{label:t.$t("grabSet.grabSet"),prop:"probabilityAmountList"}},[t._l(t.form.probabilityAmountList,(function(e,r){return a("div",{key:r,staticStyle:{"margin-bottom":"20px","margin-top":"2px",display:"flex","flex-direction":"column"}},[a("div",{staticStyle:{"margin-bottom":"16px"}},[t._v(" "+t._s(t.$t("grabSet.triggerProbability"))+" "),a("Input",{staticStyle:{width:"100px","margin-right":"2px"},attrs:{type:"number"},on:{"on-blur":function(a){e.ratio=t.zzNumber(e.ratio)}},model:{value:e.ratio,callback:function(a){t.$set(e,"ratio",a)},expression:"item.ratio"}}),t._v("% ")],1),a("div",[t._v(" "+t._s(t.$t("grabSet.matchOrderBalance"))+" "),a("Input",{staticStyle:{width:"100px","margin-right":"2px"},attrs:{type:"number"},on:{"on-blur":function(a){e.minBalancePercent=t.zzNumber(e.minBalancePercent)}},model:{value:e.minBalancePercent,callback:function(a){t.$set(e,"minBalancePercent",a)},expression:"item.minBalancePercent"}}),t._v("%~ "),a("Input",{staticStyle:{width:"100px","margin-right":"2px"},attrs:{type:"number"},on:{"on-blur":function(a){e.maxBalancePercent=t.zzNumber(e.maxBalancePercent)}},model:{value:e.maxBalancePercent,callback:function(a){t.$set(e,"maxBalancePercent",a)},expression:"item.maxBalancePercent"}}),t._v("% "),r>0?a("Icon",{staticStyle:{"margin-left":"5px","vertical-align":"middle"},attrs:{type:"ios-trash",size:"30",color:"red"},on:{click:function(e){return t.deleteRule(r)}}}):t._e()],1)])})),t.form.probabilityAmountList&&t.form.probabilityAmountList.length<2?a("Button",{attrs:{type:"primary"},on:{click:t.addRule}},[t._v(t._s(t.$t("grabSet.addConditions")))]):t._e()],2),a("FormItem",{attrs:{label:t.$t("roomManage.order_quantity"),prop:"dailyOrders"}},[a("InputNumber",{staticClass:"width-300",attrs:{max:99999},model:{value:t.form.dailyOrders,callback:function(e){t.$set(t.form,"dailyOrders",e)},expression:"form.dailyOrders"}})],1),a("FormItem",{attrs:{label:t.$t("roomManage.commission_rate"),prop:"commissionRate"}},[a("InputNumber",{staticClass:"width-300",attrs:{max:99999.999},model:{value:t.form.commissionRate,callback:function(e){t.$set(t.form,"commissionRate",e)},expression:"form.commissionRate"}}),t._v("% ")],1),a("FormItem",{attrs:{label:t.$t("roomManage.unlockReward"),prop:"unlockReward"}},[a("InputNumber",{staticClass:"width-300",attrs:{max:99999999.99},model:{value:t.form.unlockReward,callback:function(e){t.$set(t.form,"unlockReward",e)},expression:"form.unlockReward"}}),a("div",[t._v(t._s(t._f("lang")("roomManage.editTips2"))+" "),a("span",{staticStyle:{color:"red"}},[t._v(t._s(t._f("lang")("roomManage.editTips3")))])])],1),a("FormItem",{attrs:{label:t.$t("roomManage.exclusive_logo"),prop:"flagUrl"}},[a("upload",{ref:"upRef2",attrs:{list:t.upList2},on:{"upload-remove":t.uploadRemove2,"upload-success":t.uploadSuccess2},model:{value:t.form.flagUrl,callback:function(e){t.$set(t.form,"flagUrl",e)},expression:"form.flagUrl"}})],1),a("FormItem",{attrs:{label:t.$t("roomManage.loadUrl"),prop:"flagUrl"}},[a("upload",{ref:"upRef3",attrs:{list:t.upList3},on:{"upload-remove":t.uploadRemove3,"upload-success":t.uploadSuccess3},model:{value:t.form.loadUrl,callback:function(e){t.$set(t.form,"loadUrl",e)},expression:"form.loadUrl"}})],1),a("FormItem",{attrs:{label:t.$t("roomManage.illustrate"),prop:"description"}},[a("Input",{staticClass:"width-300",attrs:{maxlength:"30"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),a("FormItem",{attrs:{label:t.$t("roomManage.state"),prop:"status"}},[a("i-switch",{attrs:{"true-value":1,"false-value":0,size:"large"},on:{"on-change":t.handleChangeStatus},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v(t._s(t._f("lang")("roomManage.open")))]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v(t._s(t._f("lang")("roomManage.close")))])])],1),a("FormItem",{staticClass:"m-b-20",attrs:{label:""}},[a("Button",{staticStyle:{"margin-right":"8px"},attrs:{type:"primary"},on:{click:function(e){return t.handleConfirm()}}},[t._v(t._s(t._f("lang")("confirm"))+" ")]),a("Button",{on:{click:function(e){t.value2=!1}}},[t._v(t._s(t._f("lang")("cancel"))+" ")])],1)],1)],1)}),o=a("1da1"),n=(a("96cf"),a("4d63"),a("ac1f"),a("466d"),a("5319"),a("b64b"),a("9dac")),i={props:{value:{default:!1,type:Boolean},item:{default:null,type:Object},type:{default:"",type:String}},data:function(){var t=this,e=function(e,a,r){new RegExp("^(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){0,2})?$").test(a)?r():r(new Error(t.$t("roomManage.roomToast14")))};return{upList1:[],upList2:[],upList3:[],form:{},rule:{name:[{type:"string",required:!0,message:this.$t("roomManage.roomToast4"),trigger:"blur"}],dailyOrders:[{required:!0,message:this.$t("roomManage.roomToast10"),trigger:"blur",pattern:/^\+?[1-9]\d*$/}],minLevelLimit:[{required:!0,validator:function(e,a,r){new RegExp("^[0-9]+$").test(a)?r():r(new Error(t.$t("roomManage.roomToast8")))},trigger:"blur"}],minBalanceLimit:[{required:!0,validator:function(e,a,r){new RegExp("^(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){0,2})?$").test(a)?r():r(new Error(t.$t("roomManage.roomToast9")))},trigger:"blur"}],maxOrderAmount:[{required:!0,validator:e,trigger:"blur"}],minOrderAmount:[{required:!0,validator:e,trigger:"blur"}],unlockReward:[{required:!0,pattern:new RegExp("^(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){0,2})?$"),message:this.$t("roomManage.roomToast16"),trigger:"blur"}],commissionRate:[{type:"number",validator:function(e,a,r){new RegExp("^(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){0,3})?$").test(a)?r():r(new Error(t.$t("roomManage.commissionRateErrTip")))},required:!0,trigger:"blur"}],probabilityAmountList:[{required:!0}]},loading:!1}},mounted:function(){},methods:{change:function(){},zzNumber:function(t){if(t){var e=(t=String(t)).match(/^\d*(\.?\d{0,2})/g)[0];return"."===e.charAt(0)?e.replace(/./,""):"0"===e.charAt(0)&&"."!==e.charAt(1)&&e.length>=2?parseFloat(e):Number(e)}},handleSumbit:function(){var t=this,e=this.form.probabilityAmountList;return new Promise((function(a,r){"add"==t.drawerType&&""==t.form.userName&&r(t.$t("grabSet.pleaseEnterUserName")),e.map((function(e){""!=e.ratio&&null!=e.ratio&&null!=e.ratio||r(t.$t("grabSet.pleaseEnterTriggerProbability")),""!=e.minBalancePercent&&null!=e.minBalancePercent&&null!=e.minBalancePercent||r(t.$t("grabSet.pleaseEnterMinimumBalance")),""!=e.maxBalancePercent&&null!=e.maxBalancePercent&&null!=e.maxBalancePercent||r(t.$t("grabSet.pleaseEnterTheMaximumBalance")),(Number(e.ratio)>100||Number(e.ratio)<.01)&&r(t.$t("grabSet.triggerProbabilityRangePercentTips")),(Number(e.minBalancePercent)>100||Number(e.minBalancePercent)<.01)&&r(t.$t("grabSet.theMinimumBalancePercentTips")),(Number(e.maxBalancePercent)>100||Number(e.maxBalancePercent)<.01)&&r(t.$t("grabSet.theMaximumBalancePercentTips")),Number(e.maxBalancePercent)<=Number(e.minBalancePercent)&&r(t.$t("grabSet.valueBalanceEqualTips"))}));var o=e.reduce((function(t,e){return t+Number(e.ratio)}),0);o>100&&r(t.$t("grabSet.totalTriggerProbabilityPercentTips")),a()}))},handleConfirm:function(){var t=this;"edit"==this.type?this.$refs.form.validate(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.handleSumbit().then((function(){if(a){var e=new RegExp("^[0-9]+$"),r=new RegExp("^(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){0,2})?$");if(!e.test(t.form.maxLevelLimit))return void t.$Message.error(t.$t("roomManage.roomToast12"));if(!r.test(t.form.maxBalanceLimit))return void t.$Message.error(t.$t("roomManage.roomToast13"));if(!r.test(t.form.maxOrderAmount))return void t.$Message.error(t.$t("roomManage.roomToast14"));if(0!=t.form.maxOrderAmount&&t.form.minOrderAmount>=t.form.maxOrderAmount)return void t.$Message.error(t.$t("roomManage.roomToast15"));var o={};Object.keys(t.form).forEach((function(e){o[e]=t.form[e]})),o.minBalanceLimit=(100*o.minBalanceLimit).toFixed(0)||0,o.maxBalanceLimit=(100*o.maxBalanceLimit).toFixed(0)||0,o.maxOrderAmount=(100*o.maxOrderAmount).toFixed(0)||0,o.minOrderAmount=(100*o.minOrderAmount).toFixed(0)||0,o.commissionRate=(1e3*o.commissionRate).toFixed(0)||0,o.unlockReward=(100*o.unlockReward).toFixed(0)||0,o.probabilityAmountList.forEach((function(t){t.maxBalancePercent=Number(100*t.maxBalancePercent),t.minBalancePercent=Number(100*t.minBalancePercent),t.ratio=Number(100*t.ratio)})),delete o.formatLogoUrl,delete o.formatFlagUrl,t.$post("/trade/room/tob/update",o,{"Content-type":"application/json;charset=UTF-8"}).then((function(){t.$Message.success(t.$t("operateSuccess")),t.$emit("onSuccess"),t.value2=!1})).catch((function(e){t.$Message.error(e.message)})).finally((function(){t.loading=!1}))}})).catch((function(e){t.$Message.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):this.$refs.form.validate(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.handleSumbit().then((function(){if(a){var e=new RegExp("^[0-9]+$"),r=new RegExp("^(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){0,2})?$");if(!e.test(t.form.maxLevelLimit))return void t.$Message.error(t.$t("roomManage.roomToast12"));if(!r.test(t.form.maxBalanceLimit))return void t.$Message.error(t.$t("roomManage.roomToast13"));if(!r.test(t.form.maxOrderAmount))return void t.$Message.error(t.$t("roomManage.roomToast14"));if(0!=t.form.maxOrderAmount&&t.form.minOrderAmount>=t.form.maxOrderAmount)return void t.$Message.error(t.$t("roomManage.roomToast15"));var o={};Object.keys(t.form).forEach((function(e){o[e]=t.form[e]})),o.minBalanceLimit=(100*o.minBalanceLimit).toFixed(0)||0,o.maxBalanceLimit=(100*o.maxBalanceLimit).toFixed(0)||0,o.maxOrderAmount=(100*o.maxOrderAmount).toFixed(0)||0,o.minOrderAmount=(100*o.minOrderAmount).toFixed(0)||0,o.commissionRate=(1e3*o.commissionRate).toFixed(0)||0,o.unlockReward=(100*o.unlockReward).toFixed(0)||0,o.probabilityAmountList.forEach((function(t){t.maxBalancePercent=Number(100*t.maxBalancePercent),t.minBalancePercent=Number(100*t.minBalancePercent),t.ratio=Number(100*t.ratio)})),t.$post("/trade/room/tob/add",o,{"Content-type":"application/json;charset=UTF-8"}).then((function(){t.$Message.success(t.$t("operateSuccess")),t.$emit("onSuccess"),t.value2=!1})).catch((function(e){t.$Message.error(e.message)})).finally((function(){}))}})).catch((function(e){t.$Message.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},uploadRemove1:function(){this.form.logoUrl=""},uploadSuccess1:function(t){this.form.logoUrl=t.path},uploadRemove2:function(){this.form.flagUrl=""},uploadSuccess2:function(t){this.form.flagUrl=t.path},uploadRemove3:function(){this.form.loadUrl=""},uploadSuccess3:function(t){this.form.loadUrl=t.path},handleChangeStatus:function(t){this.form.status=t},deleteRule:function(t){this.form.probabilityAmountList.splice(t,1),this.$forceUpdate()},addRule:function(){this.form.probabilityAmountList.push({ratio:null,minBalancePercent:null,maxBalancePercent:null}),this.$forceUpdate()}},watch:{value:function(t){t&&(this.$refs.form.resetFields(),"add"==this.type?(this.form={minLevelLimit:null,maxLevelLimit:null,dailyOrders:null,minBalanceLimit:null,maxBalanceLimit:null,commissionRate:null,maxOrderAmount:null,minOrderAmount:null,unlockReward:null,status:0,probabilityAmountList:[{ratio:null,minBalancePercent:null,maxBalancePercent:null}]},this.$refs.upRef1.handleRemove(),this.$refs.upRef2.handleRemove(),this.$refs.upRef3.handleRemove()):(this.form=JSON.parse(JSON.stringify(this.item)),this.form.commissionRate=+this.item.commissionRate,this.form.logoUrl?(this.upList1.length=0,this.upList1.push({name:"pic",url:this.$formatImageUrl(this.form.logoUrl)})):this.$refs.upRef1.handleRemove(),this.form.flagUrl?(this.upList2.length=0,this.upList2.push({name:"pic",url:this.$formatImageUrl(this.form.flagUrl)})):this.$refs.upRef2.handleRemove(),this.form.loadUrl?(this.upList3.length=0,this.upList3.push({name:"pic",url:this.$formatImageUrl(this.form.loadUrl)})):this.$refs.upRef3.handleRemove()))}},computed:{value2:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},components:{upload:n.a}},s=i,l=(a("f424"),a("2877")),m={data:function(){var t=this;return{form:{date:""},loading:!1,modal1:"",modal2:"",editItem:{},statusList:[{value:"0",label:this.$t("roomManage.all")},{value:"1",label:this.$t("roomManage.on")},{value:"2",label:this.$t("roomManage.off")}],columns:[{title:this.$t("roomManage.number"),key:"id"},{title:this.$t("roomManage.name"),key:"name"},{title:this.$t("roomManage.pic"),slot:"logoUrl"},{title:this.$t("roomManage.level"),slot:"minLevelLimit"},{title:this.$t("roomManage.balance"),slot:"minBalanceLimit"},{title:this.$t("roomManage.maxOrderAmount"),key:"maxOrderAmount"},{title:this.$t("roomManage.minOrderAmount"),key:"minOrderAmount"},{title:this.$t("grabSet.grabSet"),key:"probabilityAmountList",width:180,render:function(e,a){var r=a.row.probabilityAmountList,o=[];return r.forEach((function(a,r){var n="".concat(r+1,". ").concat(t.$t("grabSet.triggerProbability")," ").concat(a.ratio,"%, ").concat(t.$t("grabSet.matchOrderBalance")," ").concat(a.minBalancePercent,"% ~ ").concat(a.maxBalancePercent,"%");o.push(e("span",{style:{display:"inline-block",width:"100%"}},"".concat(n)))})),e("div",o)}},{title:this.$t("roomManage.order_quantity"),key:"dailyOrders"},{title:this.$t("roomManage.commission_rate")+"%",key:"commissionRate"},{title:this.$t("roomManage.unlockReward"),slot:"unlockReward"},{title:this.$t("roomManage.illustrate"),key:"description",render:function(t,e){return t("div",[t("span",{style:{display:"inline-block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},domProps:{title:e.row.description}},e.row.description)])}},{title:this.$t("roomManage.state"),key:"status",slot:"status"},{title:this.$t("roomManage.exclusive_logo"),slot:"flagUrl"},{title:this.$t("roomManage.operate"),key:"operation",slot:"action",width:150}],dataList:[],totalElements:0,editRoom:!1,editType:"",sortList:[]}},mounted:function(){this.query()},methods:{toDecimal2NoZero:function(t){return(Math.round(1e3*t)/1e3).toString()},handleBeforeChange:function(){var t=this;return new Promise((function(e){t.$Modal.confirm({title:t.$t("roomManage.confrimToggle"),content:t.$t("roomManage.confrimToggleContent"),onOk:function(){e()}})}))},query:function(){var t=this;this.loading=!0,this.$get("/trade/room/tob/list",{}).then((function(e){e.forEach((function(t){t.probabilityAmountList.forEach((function(t){t.maxBalancePercent=Number((t.maxBalancePercent/100).toFixed(2)),t.minBalancePercent=Number((t.minBalancePercent/100).toFixed(2)),t.ratio=Number((t.ratio/100).toFixed(2))}))})),t.dataList=(e||[]).map((function(e){return Object.assign({},e,{commissionRate:t.toDecimal2NoZero((e.commissionRate/1e3).toFixed(4)),minBalanceLimit:e.minBalanceLimit/100,maxBalanceLimit:e.maxBalanceLimit/100,maxOrderAmount:e.maxOrderAmount/100,minOrderAmount:e.minOrderAmount/100,unlockReward:e.unlockReward/100,formatLogoUrl:t.$formatImageUrl(e.logoUrl),formatFlagUrl:t.$formatImageUrl(e.flagUrl)})}))})).catch((function(e){t.$Message.error(e.message)})).finally((function(){t.loading=!1}))},handleAdd:function(){this.editType="add",this.editRoom=!0},handleEdit:function(t){this.editType="edit",this.editRoom=!0,this.editItem=JSON.parse(JSON.stringify(t))},handleCb:function(){this.query()},handleDel:function(t){var e=this;return new Promise((function(){e.$Modal.confirm({title:e.$t("roomManage.confrimToggle2"),content:e.$t("roomManage.confrimToggleContent6"),onOk:function(){e.loading=!0,e.$post("/trade/room/tob/delete",{id:t.id}).then((function(){e.$Message.success(e.$t("operateSuccess")),e.query()})).catch((function(t){e.$Message.error(t.message)})).finally((function(){e.loading=!1}))}})}))},handleChangeStatus:function(t){var e=this;this.loading=!0,this.$post("/trade/room/tob/updateStatus",{roomIds:t.id,status:t.status}).then((function(){e.$Message.success(e.$t("operateSuccess")),e.query()})).catch((function(t){e.$Message.error(t.message)})).finally((function(){e.loading=!1}))},handleUp:function(t,e){var a=this;this.loading=!0,this.sortList=[],this.dataList.map((function(t){a.sortList.push(t.id)})),this.sortList.splice(e,1),this.sortList.splice(e-1,0,t.id);var r=this.sortList;this.$post("/trade/room/tob/changeSort",{roomIds:r},{formatway:"repeat"}).then((function(){a.query()})).catch((function(t){a.$Message.error(t.message)})).finally((function(){a.loading=!1}))}},components:{editRoom:Object(l.a)(s,r,[],!1,null,null,null).exports}},c=m,u=(a("3cb7"),Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("Spin",{attrs:{fix:""}}):t._e(),t.pageauthoritys.add?a("Button",{staticClass:"m-r-10",attrs:{type:"primary",icon:"md-add"},on:{click:t.handleAdd}},[t._v(t._s(t._f("lang")("roomManage.add")))]):t._e(),a("Table",{staticClass:"m-t-20",attrs:{columns:t.columns,data:t.dataList},scopedSlots:t._u([{key:"minLevelLimit",fn:function(e){var r=e.row;return[a("div",{staticClass:"td-cell"},[t._v("lv"+t._s(r.minLevelLimit)+"~"+t._s(r.maxLevelLimit))])]}},{key:"logoUrl",fn:function(e){var r=e.row;return[r.logoUrl?a("img",{staticClass:"img",attrs:{alt:t.$t("roomManage.none"),onerror:"this.classList.add('error');",src:r.formatLogoUrl}}):a("span",[t._v("-")])]}},{key:"flagUrl",fn:function(e){var r=e.row;return[r.flagUrl?a("img",{staticClass:"img",attrs:{alt:t.$t("roomManage.none"),onerror:"this.classList.add('error');",src:r.formatFlagUrl}}):a("span",[t._v("-")])]}},{key:"unlockReward",fn:function(e){var a=e.row;return[t._v(" "+t._s(a.unlockReward)+" ")]}},{key:"minBalanceLimit",fn:function(e){var r=e.row;return[a("div",{staticClass:"td-cell"},[t._v(t._s(t._f("tofix")(r.minBalanceLimit,2))+"~"+t._s(t._f("tofix")(r.maxBalanceLimit,2)))])]}},{key:"description",fn:function(e){var r=e.row;return[r.description?a("div",{staticClass:"td-cell ellipsis"},[t._v(t._s(r.description))]):a("span",[t._v("-")])]}},{key:"status",fn:function(e){var r=e.row;return[a("i-switch",{attrs:{disabled:!t.pageauthoritys.update,"before-change":t.handleBeforeChange,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.handleChangeStatus(r)}},model:{value:r.status,callback:function(e){t.$set(r,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v(t._s(t._f("lang")("roomManage.open")))]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v(t._s(t._f("lang")("roomManage.close")))])])]}},{key:"action",fn:function(e){var r=e.row,o=e.index;return[t.pageauthoritys.update?a("Button",{staticClass:"m-r-5",attrs:{icon:"ios-cog"},on:{click:function(e){return t.handleEdit(r)}}}):t._e(),t.pageauthoritys.delete?a("Button",{staticClass:"m-r-5",attrs:{icon:"ios-trash"},on:{click:function(e){return t.handleDel(r)}}}):t._e(),t.pageauthoritys.update?a("Button",{attrs:{icon:"ios-arrow-up"},on:{click:function(e){return t.handleUp(r,o)}}}):t._e()]}}])}),a("editRoom",{attrs:{item:t.editItem,type:t.editType},on:{onSuccess:t.handleCb},model:{value:t.editRoom,callback:function(e){t.editRoom=e},expression:"editRoom"}})],1)}),[],!1,null,"3ebc36a8",null));e.default=u.exports},f05a:function(t,e,a){},f424:function(t,e,a){"use strict";a("38d3")}}]);