(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-773c1636"],{"106c":function(t,e,n){},"40d6":function(t,e,n){"use strict";n("7870")},7870:function(t,e,n){},b361:function(t,e,n){"use strict";n.r(e);var i=(n("d3b7"),n("ac1f"),n("5319"),n("fb6a"),n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("Spin",{attrs:{size:"large",fix:""}}):t._e(),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.editHandler()}}},[t._v(t._s(t.fn("addAgentLine")))])],1),n("ul",{staticClass:"rewards"},t._l(t.proxyLines,(function(e){return n("li",{key:e.id},[n("div",{domProps:{innerHTML:t._s(e.text)}}),n("div",{staticClass:"btns"},[n("Icon",{attrs:{type:"ios-create-outline",size:"30"},on:{click:function(n){return t.editHandler(e)}}}),n("Poptip",{attrs:{confirm:"",title:t.$t("deleteTip")},on:{"on-ok":function(n){return t.deleteHandler(e)}}},[n("Icon",{attrs:{type:"ios-trash-outline",size:"30"}})],1)],1)])})),0),n("AddModal",{on:{refresh:t.refreshHandler},model:{value:t.editItem,callback:function(e){t.editItem=e},expression:"editItem"}})],1)}),s=n("1da1"),a=(n("96cf"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{title:t.title,width:"800","mask-closable":!1},model:{value:t.isModalShow,callback:function(e){t.isModalShow=e},expression:"isModalShow"}},[t.loading?n("Spin",{attrs:{size:"large",fix:""}}):t._e(),n("div",{staticClass:"contain"},[n("Input",{staticStyle:{width:"120px"},attrs:{placeholder:t.$t("registrationRewards.account")},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "+t._s(t.$t("registrationRewards.agentLineRegistrationTip1"))+" "),n("InputNumber",{staticStyle:{width:"120px"},attrs:{min:t.min,max:t.max,parser:t.parserHandler,placeholder:t.$t("registrationRewards.rewardAmount")},model:{value:t.giveAmount,callback:function(e){t.giveAmount=e},expression:"giveAmount"}}),t._v(" "+t._s(t.$t("registrationRewards.registrationReceiveTip2"))+" ")],1),n("div",{staticClass:"btns",attrs:{slot:"footer"},slot:"footer"},[n("Button",{on:{click:t.closeHandler}},[t._v(t._s(t.$t("cancel")))]),n("Button",{attrs:{type:"primary"},on:{click:t.submitHandler}},[t._v(t._s(t.$t("save")))])],1)],1)}),r={name:"AddModal",props:{value:{type:[Object,null],default:null}},data:function(){return{username:"",min:0,max:99999999.99,giveAmount:null,loading:!1}},methods:{submitHandler:function(){var t=this;if(!this.loading){if(!this.username)return this.$Message.error(this.$t("roomManage.accountIsQequired"));if(!this.giveAmount)return this.$Message.error(this.$t("registrationRewards.rewardIsQequired"));this.loading=!0;var e={username:this.username,giveAmount:100*this.giveAmount},n="/activity/registerReward/tob/addProxy";this.isEdit&&(e.id=this.value.id,n="/activity/registerReward/tob/updateProxy"),this.$post(n,e).then((function(){t.$Message.success(t.$t("operateSuccess")),t.$emit("refresh"),t.isModalShow=!1})).catch((function(e){t.$Message.error(e.message)})).finally((function(){t.loading=!1}))}},resetHandler:function(){this.username="",this.giveAmount=null},closeHandler:function(){this.isModalShow=!1},parserHandler:function(t){return t?t.replace(/\.\d+$/,(function(t){return t&&t.length>3?t.slice(0,3):t})):t}},computed:{isEdit:function(){var t=this.value&&this.value.id;return Boolean(t)},title:function(){return this.$t(this.isEdit?"registrationRewards.editAgentLine":"registrationRewards.addAgentLine")},isModalShow:{get:function(){return Boolean(this.value)},set:function(){this.$emit("input",null)}}},watch:{isModalShow:function(t){if(t){var e=this.value,n=e.giveAmount,i=e.username;(n=Number(n)||null)&&(n=this.$utils.toYuan(n)),this.giveAmount=n,this.username=i||""}else this.resetHandler()}}},o=r,u=(n("e8c0"),n("2877")),c={name:"AgentLine",data:function(){return{editItem:null,proxyLines:[],loading:!0}},components:{AddModal:Object(u.a)(o,a,[],!1,null,"676c9b6a",null).exports},mounted:function(){var t=this;this.getAllProxyLine().finally((function(){t.loading=!1}))},methods:{fn:function(t){return this.$t("registrationRewards.".concat(t))},refreshHandler:function(){var t=this;this.loading=!0,this.getAllProxyLine().finally((function(){t.loading=!1}))},deleteHandler:function(t){var e=this;return Object(s.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.loading){n.next=2;break}return n.abrupt("return");case 2:return e.loading=!0,n.prev=3,n.next=6,e.$post("/activity/registerReward/tob/delProxy",{id:t.id});case 6:return e.$Message.success(e.$t("operateSuccess")),n.next=9,e.getAllProxyLine();case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),e.$Message.error(n.t0.message);case 14:return n.prev=14,e.loading=!1,n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[3,11,14,17]])})))()},editHandler:function(t){t||(t={}),this.editItem=t},wrapSpan:function(t){return"<b> ".concat(t," </b>")},getAllProxyLine:function(){var t=this;return this.$get("/activity/registerReward/tob/allProxy").then((function(e){t.proxyLines=(e||[]).map((function(e){return Object.assign(e,{text:t.$t("registrationRewards.agentLineRegistrationTip",{name:t.wrapSpan(e.username),reward:t.wrapSpan(t.$utils.toYuan(e.giveAmount))})})}))})).catch((function(e){t.$Message.error(e.message)}))}}},l=c,d={name:"registrationRewards-config",data:function(){return{configType:0,status:0,min:0,max:99999999.99,giveAmount:null,typeList:[{value:0,text:this.fn("allUsers")},{value:1,text:this.fn("agentLine")}],loading:!1,proxyLines:[]}},components:{AgentLine:(n("ceaf"),Object(u.a)(l,i,[],!1,null,"269f7b33",null)).exports},computed:{isAgentLine:function(){return 1===this.configType}},mounted:function(){this.getConfig()},methods:{changeConfigType:function(t){var e=this;this.loading||(this.loading=!0,this.updateConfigHandler({configType:t}).catch((function(t){e.$Message.error(t.message)})).finally((function(){e.loading=!1})))},fn:function(t){return this.$t("registrationRewards.".concat(t))},parserHandler:function(t){return t?t.replace(/\.\d+$/,(function(t){return t&&t.length>3?t.slice(0,3):t})):t},submitHandler:function(){var t=this;this.loading||(this.loading=!0,this.updateConfigHandler({}).then((function(){t.$Message.success(t.$t("operateSuccess"))})).catch((function(e){t.$Message.error(e.message)})).finally((function(){t.loading=!1})))},getConfig:function(){var t=this;this.loading=!0,this.$get("/activity/registerReward/tob/getConfig").then((function(e){var n=e||{},i=n.configType,s=n.status,a=n.giveAmount;t.configType=i,t.status=s,t.giveAmount=Number(t.$utils.toYuan(a))||null})).catch((function(e){t.$Message.error(e.message)})).finally((function(){t.loading=!1}))},updateConfigHandler:function(t){var e={configType:this.configType,status:this.status,giveAmount:100*Number(this.giveAmount)};return this.$post("/activity/registerReward/tob/updateConfig",Object.assign(e,t))},switchHandler:function(){var t=this,e=this.status;if(!this.loading)return this.loading=!0,this.updateConfigHandler({status:[1,0][e]}).then((function(){return t.$Message.success(t.$t("operateSuccess")),Promise.resolve()})).catch((function(e){return t.$Message.error(e.message),Promise.reject()})).finally((function(){t.loading=!1}))}}},f=d,g=(n("40d6"),Object(u.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"config"},[t.loading?n("Spin",{attrs:{size:"large",fix:""}}):t._e(),n("Form",[n("FormItem",[n("div",{staticClass:"title"},[n("h1",[t._v(" "+t._s(t.fn("configuration"))+" ")]),n("div",[t._v(" "+t._s(t.fn("switchTitle"))+" "),n("i-switch",{attrs:{"true-value":1,"false-value":0,"before-change":t.switchHandler},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1)])]),n("FormItem",[n("RadioGroup",{on:{"on-change":t.changeConfigType},model:{value:t.configType,callback:function(e){t.configType=e},expression:"configType"}},t._l(t.typeList,(function(e){return n("Radio",{key:e.value,attrs:{label:e.value}},[t._v(" "+t._s(e.text)+" ")])})),1)],1),t.isAgentLine?[n("AgentLine")]:[n("FormItem",[t._v(" "+t._s(t.fn("registrationReceiveTip1"))+" "),n("InputNumber",{staticStyle:{width:"120px"},attrs:{min:t.min,max:t.max,parser:t.parserHandler},model:{value:t.giveAmount,callback:function(e){t.giveAmount=e},expression:"giveAmount"}}),t._v(" "+t._s(t.fn("reward"))+" ")],1),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:t.submitHandler}},[t._v(" "+t._s(t.$t("save"))+" ")])],1)]],2)],1)}),[],!1,null,"fc98c312",null));e.default=g.exports},ceaf:function(t,e,n){"use strict";n("106c")},e8c0:function(t,e,n){"use strict";n("f426")},f426:function(t,e,n){}}]);