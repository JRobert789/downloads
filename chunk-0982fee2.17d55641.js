(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0982fee2"],{"2d36":function(e,t,a){"use strict";a.r(t);var n=(a("b680"),a("d81d"),a("b0c0"),a("159b"),a("b64b"),a("d3b7"),a("a9e3"),a("caad"),a("3d01")),s=a("ce26"),o={name:"orderManage",data:function(){var e=this.$utils.getTodayArr();return{dateoptions:{disabledDate:function(e){var t=new Date(e),a=new Date;return t>a||t<a-7776e6}},loading:!1,fm:{beginTime:e[0],endTime:e[1],username:"",status:'""',orderNo:"",totalGoodsAmountMin:null,totalGoodsAmountMax:null,commissionMin:null,commissionMax:null,page:1,size:20,desc:"createTime"},dateRangeValue:[new Date,new Date],totalElements:0,showAddNotice:!1,statusDic:{1:this.$t("orderManege.progress"),2:this.$t("orderManege.completed"),3:this.$t("orderManege.cancelled")},statusList:[{value:'""',label:this.$t("orderManege.all")},{value:"2",label:this.$t("orderManege.completed")},{value:"3",label:this.$t("orderManege.cancelled")}],columns:[{type:"selection",width:60,align:"center"},{title:this.$t("orderManege.username"),slot:"username"},{title:this.$t("orderManege.orderNumber"),key:"orderNo"},{title:this.$t("orderManege.orderAmount"),key:"totalGoodsAmount",render:function(e,t){return e("span",(+t.row.totalGoodsAmount/100).toFixed(2))}},{title:this.$t("orderManege.quantity"),key:"goodsNumber"},{title:this.$t("orderManege.commission"),key:"commission",render:function(e,t){return e("span",(+t.row.commission/100).toFixed(2))}},{title:this.$t("orderManege.productName"),key:"goodsTitle",render:function(e,t){return e("div",[e("span",{style:{display:"inline-block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},domProps:{title:t.row.goodsTitle}},t.row.goodsTitle)])}},{title:this.$t("orderManege.productPicture"),slot:"goodsImage"},{title:this.$t("orderManege.status"),slot:"status"},{title:this.$t("orderManege.creationTime"),key:"createTime"},{title:this.$t("orderManege.completeTime"),key:"completeTime"}],dataList:[],tabList:[]}},components:{Nav:n.a},mounted:function(){this.tabs=this.getChildRoutes("/orderManage/index").map((function(e){return{path:e.frontPath,name:e.name}}))},methods:{del:function(){this.fm={beginTime:"",endDate:"",username:"",status:'""',orderNo:"",totalGoodsAmountMin:null,totalGoodsAmountMax:null,commissionMin:null,commissionMax:null,page:1,size:20},this.clearDate(),this.dateRangeValue=["",""]},showStatus:function(e){return this.statusDic[e]},selectHandle:function(e){this.tabList=e},refresh:function(){location.reload()},setTimeRange:function(e){if(this.fm.beginTime=Object(s.formatDate)(e[0],"YYYY-MM-DD")+" 00:00:00",this.fm.endTime=Object(s.formatDate)(e[1],"YYYY-MM-DD")+" 23:59:59",new Date(e[1]).getTime()-new Date(e[0]).getTime()>5184e6)return this.$Message.info("范围不可超过2个月"),this.clearDate(),void(this.dateRangeValue=["",""])},query:function(e){var t=this;1==e&&(this.fm.page=1);var a={};if(Object.keys(this.fm).forEach((function(e){a[e]=t.fm[e]})),a.totalGoodsAmountMin&&(a.totalGoodsAmountMin=(100*a.totalGoodsAmountMin).toFixed(0)),a.totalGoodsAmountMax&&(a.totalGoodsAmountMax=(100*a.totalGoodsAmountMax).toFixed(0)),a.commissionMin&&(a.commissionMin=(100*a.commissionMin).toFixed(0)),a.commissionMax&&(a.commissionMax=(100*a.commissionMax).toFixed(0)),!a.username)return this.$Message.error(this.$t("inputUserNameTip"));this.loading=!0,this.$get("/trade/orderHis/tob/page",a).then((function(e){t.dataList=e.content.map((function(e){return Object.assign(e,{goodsImage:t.$formatImageUrl(e.goodsImage)})})),t.totalElements=Number(e.totalElements)})).catch((function(e){t.$Message.error(e.message)})).finally((function(){t.loading=!1}))},handleRevert:function(e){var t=this;if(1==e.status)return new Promise((function(){t.$Modal.confirm({title:t.$t("orderManege.errMsg2"),content:t.$t("orderManege.errMsg3"),onOk:function(){t.$post("/trade/order/tob/batchCancelOrder",{orderIds:[e.id]},{formatway:"repeat"}).then((function(){t.$Message.success(t.$t("operateSuccess")),t.query()})).catch((function(e){t.$Message.error(e.message)})).finally((function(){t.loading=!1}))}})}));this.$Message.info(this.$t("orderManege.errMsg1"))},muilteOp:function(){var e=this;if(this.tabList.length){var t=[],a=[];if(this.tabList.map((function(e){t.push(e.id),a.push(e.status)})),!a.includes(2))return new Promise((function(){e.$Modal.confirm({title:e.$t("orderManege.errMsg2"),content:e.$t("orderManege.errMsg7"),onOk:function(){e.loading=!0,e.$post("/trade/order/tob/batchCancelOrder",{orderIds:t},{formatway:"repeat"}).then((function(){e.$Message.success(e.$t("operateSuccess")),e.query()})).catch((function(t){e.$Message.error(t.message)})).finally((function(){e.loading=!1}))}})}));this.$Message.info(this.$t("orderManege.errMsg9"))}else this.$Message.info(this.$t("orderManege.errMsg4"))},pageSizeChange:function(e){this.fm.size=e,this.fm.page=1,this.query()},clearDate:function(){this.fm.beginTime="",this.fm.endTime=""},exportExcel:function(e){var t=this,a={};"all"==e?Object.assign(a,this.fm,{exportType:1}):Object.assign(a,this.fm,{exportType:2}),this.$download("/trade/order/tob/exportOrder",a).then((function(){})).catch((function(e){t.$Message.error(e.message)})).finally((function(){t.loading=!1}))}}},r=o,i=(a("39e2"),a("2877")),l=Object(i.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"orderManage"},[a("Nav",{attrs:{nav:[{path:"/historyOrderManage/index",name:e.nowpagetitle}]}}),a("div",{staticClass:"innerWrap"},[e._v(" "+e._s(e._f("lang")("orderManege.status"))+" "),a("Select",{staticClass:"m-r-20 width-120",model:{value:e.fm.status,callback:function(t){e.$set(e.fm,"status",t)},expression:"fm.status"}},e._l(e.statusList,(function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1),e._v(" "+e._s(e._f("lang")("orderManege.account"))),a("Input",{staticClass:"m-r-20 width-120",attrs:{type:"text",clearable:"",placeholder:e.$t("orderManege.fuzzyQuery")},model:{value:e.fm.username,callback:function(t){e.$set(e.fm,"username","string"==typeof t?t.trim():t)},expression:"fm.username"}}),e._v(" "+e._s(e._f("lang")("orderManege.orderNumber"))),a("Input",{staticClass:"m-r-20 width-120",attrs:{type:"text",clearable:"",placeholder:e.$t("orderManege.fuzzyQuery")},model:{value:e.fm.orderNo,callback:function(t){e.$set(e.fm,"orderNo","string"==typeof t?t.trim():t)},expression:"fm.orderNo"}}),e._v(" "+e._s(e._f("lang")("orderManege.orderAmount"))),a("InputNumber",{staticClass:"width-120",attrs:{max:999999999},model:{value:e.fm.totalGoodsAmountMin,callback:function(t){e.$set(e.fm,"totalGoodsAmountMin","string"==typeof t?t.trim():t)},expression:"fm.totalGoodsAmountMin"}}),e._v("~"),a("InputNumber",{staticClass:"m-r-20 width-120",attrs:{max:999999999},model:{value:e.fm.totalGoodsAmountMax,callback:function(t){e.$set(e.fm,"totalGoodsAmountMax","string"==typeof t?t.trim():t)},expression:"fm.totalGoodsAmountMax"}}),e._v(" "+e._s(e._f("lang")("orderManege.commission"))),a("InputNumber",{staticClass:"width-120",attrs:{max:999999999},model:{value:e.fm.commissionMin,callback:function(t){e.$set(e.fm,"commissionMin","string"==typeof t?t.trim():t)},expression:"fm.commissionMin"}}),e._v("~"),a("InputNumber",{staticClass:"m-r-20 width-120",attrs:{max:999999999},model:{value:e.fm.commissionMax,callback:function(t){e.$set(e.fm,"commissionMax","string"==typeof t?t.trim():t)},expression:"fm.commissionMax"}}),e._v(" "+e._s(e._f("lang")("orderManege.completeTime"))),a("DatePicker",{staticStyle:{width:"220px","margin-right":"10px"},attrs:{options:e.dateoptions,type:"daterange"},on:{"on-change":e.setTimeRange,"on-clear":e.clearDate},model:{value:e.dateRangeValue,callback:function(t){e.dateRangeValue=t},expression:"dateRangeValue"}}),a("Button",{staticClass:"m-r-20",attrs:{type:"primary",icon:"md-search"},on:{click:function(t){return e.query(1)}}},[e._v(e._s(e._f("lang")("orderManege.query")))]),a("p",{staticClass:"m-t-10"}),a("Button",{staticClass:"m-r-20",attrs:{type:"primary"},on:{click:e.del}},[e._v(e._s(e._f("lang")("orderManege.clear")))]),a("Button",{staticClass:"m-r-20",attrs:{type:"primary"},on:{click:e.refresh}},[e._v(e._s(e._f("lang")("orderManege.refresh")))]),a("Table",{ref:"selection",staticClass:"m-t-20",attrs:{columns:e.columns,data:e.dataList},on:{"on-selection-change":e.selectHandle},scopedSlots:e._u([{key:"username",fn:function(t){var n=t.row;return[e._v(" "+e._s(n.username)+" "),2==n.userType?a("span",{staticStyle:{color:"red"}},[e._v("["+e._s(e._f("lang")("orderManege.test"))+"]")]):e._e()]}},{key:"goodsImage",fn:function(e){var t=e.row;return[a("img",{staticClass:"goodsImage_img",attrs:{src:t.goodsImage}})]}},{key:"status",fn:function(t){var a=t.row;return[e._v(" "+e._s(e.showStatus(a.status))+" ")]}},{key:"action",fn:function(t){var n=t.row;return[a("div",{directives:[{name:"permission",rawName:"v-permission",value:[e.$route.path,"revoke"],expression:"[$route.path, 'revoke']"}],staticClass:"td-cell"},[1==n.status?a("Button",{attrs:{type:"warning"},on:{click:function(t){return e.handleRevert(n)}}},[e._v(e._s(e._f("lang")("orderManege.revoke")))]):e._e()],1)]}}])}),e.loading?a("Spin",{attrs:{size:"large",fix:""}}):e._e(),a("m-page",{attrs:{total:e.totalElements,pageSize:e.fm.size,pageSizeOpts:[20,30,50,100,500]},on:{"on-change":e.query,"on-page-size-change":e.pageSizeChange},model:{value:e.fm.page,callback:function(t){e.$set(e.fm,"page",t)},expression:"fm.page"}})],1)],1)}),[],!1,null,null,null);t.default=l.exports},"39e2":function(e,t,a){"use strict";a("e8b0")},e8b0:function(e,t,a){}}]);