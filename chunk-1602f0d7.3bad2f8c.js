(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1602f0d7"],{"405c":function(e,a,n){},"6bba":function(e,a,n){"use strict";var t=n("b6f9"),o={name:"regionPhone",props:{value:String},data:function(){return{region:t}},computed:{value2:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{comBg:function(e){return{backgroundPosition:e}}}},i=o,l=(n("bb5c"),n("2877")),p=Object(l.a)(i,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"regionPhone"},[n("Select",{staticStyle:{width:"80px"},attrs:{filterable:"",clearable:"",placeholder:e.$t("region")},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}},e._l(e.region,(function(a,t){return n("Option",{key:t,attrs:{value:a.code,label:a.code}},[n("span",{staticClass:"region_icon",style:e.comBg(a&&a.flag)}),n("span",[e._v(" "+e._s(a.code)+" "+e._s(a.name)+" ")])])})),1)],1)}),[],!1,null,null,null);a.a=p.exports},"6c40":function(e,a,n){"use strict";n.r(a);var t=n("5530"),o=(n("d3b7"),n("d81d"),n("159b"),n("2f62")),i=n("6bba"),l={data:function(){return{loading:!1,value:!1,showTestModal:!1,opType:null,title:"",showValid:null,moneyForm:{smsType:null,accessKey:null,secret:null,monthLimit:null,dayLimit:null,enable:1},testForm:{id:null,phonePrefix:"",phone:""},ruleValidate:{smsType:[{required:!0,type:"string",message:this.$t("activeConfiguration.requireTips"),trigger:"change"}],accessKey:[{required:!1,message:this.$t("activeConfiguration.requireTips"),trigger:"change"}],secret:[{required:!1,message:this.$t("activeConfiguration.requireTips"),trigger:"change"}],dayLimit:[{required:!0,type:"number",message:this.$t("activeConfiguration.requireTips"),trigger:"change"}],monthLimit:[{required:!0,type:"number",message:this.$t("activeConfiguration.requireTips"),trigger:"change"}]},testRuleValidate:{phone:[{required:!0,message:this.$t("activeConfiguration.requireTips"),trigger:"blur"}]},pageNum:1,pageSize:20,totalElements:9999,pageSizeArray:[20,30,50],columns:[{title:this.$t("siteConfig.smsPlatform"),key:"smsType"},{title:this.$t("siteConfig.dailyQuantity"),key:"lastDayNumber"},{title:this.$t("siteConfig.dailyCanQuantity"),key:"dayLimit",width:280},{title:this.$t("siteConfig.monthQuantity"),key:"lastMonthNumber"},{title:this.$t("siteConfig.monthCanQuantity"),key:"monthLimit",width:280},{title:this.$t("event.status"),slot:"enable"},{title:this.$t("event.operation"),slot:"operation",width:280}],dataList:[],platform:[]}},computed:{},methods:Object(t.a)(Object(t.a)({},Object(o.b)("user",["getNoMd5PublicKey"])),{},{pageSizeChange:function(e){this.pageSize=e},queryPlatform:function(){var e=this;this.$get("/platform/keyValue/tob/findByDictCode",{dictCode:"SMS_CONFIG"}).then((function(a){e.platform=a})).catch((function(a){e.$Message.error(a.message)})).finally((function(){e.loading=!1}))},showSmsKey:function(e){var a="";return this.platform.map((function(n){n.dictValue!=e||(a=n.dictKey)})),a},query:function(){var e=this;this.loading=!0,this.$get("/platform/sms/tob/search").then((function(a){e.dataList=a,e.dataList.forEach((function(e){var a=e.enable?1:0;e.enable=a}))})).catch((function(a){e.$Message.error(a.message)})).finally((function(){e.loading=!1}))},handleBeforeDelete:function(e){var a=this;return new Promise((function(){a.$Modal.confirm({title:a.$t("siteConfig.warmtipsTitle"),content:a.$t("siteConfig.smsDelTip"),onOk:function(){a.handleDelete(e)}})}))},handleBeforeChange:function(){var e=this;return new Promise((function(a){e.$Modal.confirm({title:e.$t("event.toggle"),content:e.$t("event.confirmToggle"),onOk:function(){a()}})}))},enableSwitch:function(e,a){var n=this,t={id:e,enable:Boolean(a)};this.$post("/platform/sms/tob/enable",t,{"Content-type":"application/json"}).then((function(){n.$Message.success(n.$t("success")),n.query()})).catch((function(e){n.$Message.error(e.message)})).finally((function(){n.loading=!1}))},handleEdit:function(e){this.title=this.$t("edit"),this.moneyForm=JSON.parse(JSON.stringify(e)),this.opType="edit",this.value=!0,this.showValid=!1},handleAdd:function(){this.$refs.moneyForm.resetFields(),this.title=this.$t("grabSet.new"),this.opType="add",this.value=!0,this.showValid=!0},close:function(){this.$refs.moneyForm.resetFields(),this.value=!1},closeTestModal:function(){this.showTestModal=!1,this.$refs.testForm.resetFields()},handleDelete:function(e){var a=this;this.$post("/platform/sms/tob/delete",{id:e},{"Content-type":"application/json"}).then((function(){a.$Message.success(a.$t("success")),a.query()})).catch((function(e){a.$Message.error(e.message)})).finally((function(){a.loading=!1}))},handleTest:function(e){this.$refs.testForm.resetFields(),this.showTestModal=!0,this.testForm.id=e},submitPublicKey:function(){var e=this,a=this.moneyForm,n=a.smsType,t=a.accessKey,o=a.secret,i=a.dayLimit,l=a.monthLimit,p=a.enable,s=a.id;i>l?this.$Message.error(this.$t("siteConfig.smsSetTip")):this.getNoMd5PublicKey().then((function(a){var c=a(t),r=a(o),m={smsType:e.showSmsKey(n),accessKey:c,secret:r,dayLimit:i,monthLimit:l,enable:Boolean(p)};"edit"==e.opType&&(delete m.smsType,m.id=s);var d="add"==e.opType?"/platform/sms/tob/create":"/platform/sms/tob/update";e.$post(d,m,{"Content-type":"application/json"}).then((function(){e.$Message.success(e.$t("success")),e.value=!1,e.query()})).catch((function(a){e.$Message.error(a.message)})).finally((function(){e.loading=!1}))})).catch((function(a){e.$Message.error(a.message)}))},submitTest:function(){var e=this;this.$refs.testForm.validate((function(a){if(a){var n=e.testForm,t={id:n.id,areaCode:n.phonePrefix,phone:n.phone};e.$get("/platform/sms/tob/test",t).then((function(){e.$Message.success(e.$t("success")),e.showTestModal=!1,e.query()})).catch((function(a){e.$Message.error(a.message)})).finally((function(){e.loading=!1}))}}))},submit:function(){var e=this;this.$refs.moneyForm.validate((function(a){if(a){var n=e.moneyForm,t=n.accessKey,o=n.secret,i=n.dayLimit,l=n.monthLimit,p=n.enable,s=n.id;if("add"==e.opType&&!t&&!o)return void e.$Message.error(e.$t("siteConfig.smsSetKeyAndSecretTip"));if(!t&&o)return void e.$Message.error(e.$t("siteConfig.smsSetKeyTip"));if(t&&!o)return void e.$Message.error(e.$t("siteConfig.smsSetSecretTip"));if("add"==e.opType)return void e.submitPublicKey();if("edit"==e.opType&&t&&o)return void e.submitPublicKey();if(i>l)return void e.$Message.error(e.$t("siteConfig.smsSetTip"));var c={id:s,dayLimit:i,monthLimit:l,enable:Boolean(p)};e.$post("/platform/sms/tob/update",c,{"Content-type":"application/json"}).then((function(){e.$Message.success(e.$t("success")),e.value=!1,e.query()})).catch((function(a){e.$Message.error(a.message)})).finally((function(){e.loading=!1}))}}))}}),components:{region:i.a},mounted:function(){this.queryPlatform(),this.query()}},p=l,s=(n("77f4"),n("2877")),c=Object(s.a)(p,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"SMS-send-configuration"},[e.loading?n("Spin",{attrs:{fix:""}}):e._e(),n("Button",{staticClass:"addBtn",attrs:{size:"small",type:"primary"},on:{click:e.handleAdd}},[e._v(e._s(e.$t("grabSet.new")))]),n("Table",{staticStyle:{"margin-top":"30px"},attrs:{border:"",columns:e.columns,data:e.dataList},scopedSlots:e._u([{key:"enable",fn:function(a){var t=a.row;return[n("i-switch",{attrs:{size:"large","before-change":e.handleBeforeChange,trueValue:1,falseValue:0},on:{"on-change":function(a){return e.enableSwitch(t.id,t.enable)}},model:{value:t.enable,callback:function(a){e.$set(t,"enable",a)},expression:"row.enable"}},[n("span",{attrs:{slot:"open"},slot:"open"},[e._v(e._s(e.$t("enabled")))]),n("span",{attrs:{slot:"close"},slot:"close"},[e._v(e._s(e.$t("disabled")))])])]}},{key:"operation",fn:function(a){var t=a.row;return[n("div",{staticClass:"operation-btn-group"},[n("Button",{staticStyle:{"margin-left":"20px"},attrs:{size:"small",type:"primary"},on:{click:function(a){return e.handleEdit(t)}}},[e._v(e._s(e.$t("edit")))]),n("Button",{staticStyle:{"margin-left":"20px"},attrs:{size:"small",type:"error"},on:{click:function(a){return e.handleBeforeDelete(t.id)}}},[e._v(e._s(e.$t("delete")))]),n("Button",{staticStyle:{"margin-left":"20px"},attrs:{size:"small",type:"warning"},on:{click:function(a){return e.handleTest(t.id)}}},[e._v(e._s(e.$t("test")))])],1)]}}])}),n("Modal",{attrs:{title:e.title,"mask-closable":!1,closable:!1},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},[[n("Form",{ref:"moneyForm",attrs:{"label-width":140,model:e.moneyForm,rules:e.ruleValidate}},[n("FormItem",{attrs:{label:e.$t("rechargeAddressQuery.platform")+":",prop:"smsType"}},[n("Select",{staticStyle:{width:"200px"},attrs:{disabled:e.moneyForm.smsType&&"edit"==e.opType},model:{value:e.moneyForm.smsType,callback:function(a){e.$set(e.moneyForm,"smsType",a)},expression:"moneyForm.smsType"}},e._l(e.platform,(function(a,t){return n("Option",{key:t,attrs:{value:a.dictValue}},[e._v(e._s(a.dictValue))])})),1)],1),n("FormItem",{class:{validKey:e.showValid},attrs:{label:"Access Key：",prop:"accessKey"}},[e.showValid?n("span",{staticClass:"dot"},[e._v("*")]):e._e(),n("Input",{staticStyle:{width:"240px"},model:{value:e.moneyForm.accessKey,callback:function(a){e.$set(e.moneyForm,"accessKey",a)},expression:"moneyForm.accessKey"}})],1),n("FormItem",{class:{validKey2:e.showValid},attrs:{label:"Secret：",prop:"secret"}},[e.showValid?n("span",{staticClass:"dot"},[e._v("*")]):e._e(),n("Input",{staticStyle:{width:"240px"},model:{value:e.moneyForm.secret,callback:function(a){e.$set(e.moneyForm,"secret",a)},expression:"moneyForm.secret"}})],1),n("FormItem",{attrs:{label:e.$t("siteConfig.dailySMSLimit")+":",prop:"dayLimit"}},[n("InputNumber",{staticStyle:{width:"240px"},model:{value:e.moneyForm.dayLimit,callback:function(a){e.$set(e.moneyForm,"dayLimit",a)},expression:"moneyForm.dayLimit"}})],1),n("FormItem",{attrs:{label:e.$t("siteConfig.monthlySMSLimit")+":",prop:"monthLimit"}},[n("InputNumber",{staticStyle:{width:"240px"},model:{value:e.moneyForm.monthLimit,callback:function(a){e.$set(e.moneyForm,"monthLimit",a)},expression:"moneyForm.monthLimit"}})],1),n("FormItem",{attrs:{label:e.$t("event.status")+":",prop:"enable"}},[n("RadioGroup",{attrs:{"true-value":1,"false-value":0},model:{value:e.moneyForm.enable,callback:function(a){e.$set(e.moneyForm,"enable",a)},expression:"moneyForm.enable"}},[n("Radio",{attrs:{label:1}},[e._v(e._s(e.$t("videoconfig.open")))]),n("Radio",{attrs:{label:0}},[e._v(e._s(e.$t("videoconfig.close")))])],1)],1)],1)],n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"text"},on:{click:function(a){return e.close()}}},[e._v(e._s(e.$t("cancel")))]),n("Button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v(e._s(e.$t("confirm")))])],1)],2),n("Modal",{attrs:{title:e.$t("test"),"mask-closable":!1,closable:!1},model:{value:e.showTestModal,callback:function(a){e.showTestModal=a},expression:"showTestModal"}},[[n("Form",{ref:"testForm",attrs:{"label-width":140,model:e.testForm,rules:e.testRuleValidate}},[n("FormItem",{attrs:{label:e.$t("proxy.mobilephone"),prop:"phone"}},[n("Row",[n("region",{model:{value:e.testForm.phonePrefix,callback:function(a){e.$set(e.testForm,"phonePrefix",a)},expression:"testForm.phonePrefix"}}),n("i-col",{staticStyle:{"margin-left":"10px"},attrs:{span:"13"}},[n("Input",{attrs:{type:"text"},model:{value:e.testForm.phone,callback:function(a){e.$set(e.testForm,"phone",a)},expression:"testForm.phone"}})],1)],1)],1),n("p",{staticClass:"example"},[n("span",[e._v(e._s(e.$t("siteConfig.smsExample"))+" Your verification code is 0000.")])])],1)],n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"text"},on:{click:function(a){return e.closeTestModal()}}},[e._v(e._s(e.$t("cancel")))]),n("Button",{attrs:{type:"primary"},on:{click:e.submitTest}},[e._v(e._s(e.$t("confirm")))])],1)],2)],1)}),[],!1,null,null,null);a.default=c.exports},7399:function(e,a,n){},"77f4":function(e,a,n){"use strict";n("405c")},b6f9:function(e){e.exports=JSON.parse('[{"name":"Afghanistan (‫افغانستان‬‎)","code":"+93","flag":"-32px 0px"},{"name":"Albania (Shqipëri)","code":"+355","flag":"-80px 0px"},{"name":"Algeria (‫الجزائر‬‎)","code":"+213","flag":"-112px -33px"},{"name":"American Samoa","code":"+1684","flag":"-160px 0px"},{"name":"Andorra","code":"+376","flag":"0px 0px"},{"name":"Angola","code":"+244","flag":"-128px 0px"},{"name":"Anguilla","code":"+1264","flag":"-64px 0px"},{"name":"Antigua and Barbuda","code":"+1268","flag":"-48px 0px"},{"name":"Argentina","code":"+54","flag":"-144px 0px"},{"name":"Armenia (Հայաստան)","code":"+374","flag":"-96px 0px"},{"name":"Aruba","code":"+297","flag":"-208px 0px"},{"name":"Ascension Island","code":"+290","flag":"-96px 0px"},{"name":"Australia","code":"+61","flag":"-192px 0px"},{"name":"Austria (Österreich)","code":"+43","flag":"-176px 0px"},{"name":"Azerbaijan (Azərbaycan)","code":"+994","flag":"-240px 0px"},{"name":"Bahrain (‫البحرين‬‎)","code":"+973","flag":"-80px -11px"},{"name":"Bangladesh (বাংলাদেশ)","code":"+880","flag":"-16px -11px"},{"name":"Barbados","code":"+1246","flag":"0px -11px"},{"name":"Belarus (Беларусь)","code":"+375","flag":"-256px -11px"},{"name":"Belgium (België)","code":"+32","flag":"-32px -11px"},{"name":"Belize","code":"+501","flag":"0px -22px"},{"name":"Benin (Bénin)","code":"+229","flag":"-112px -11px"},{"name":"Bermuda","code":"+1441","flag":"-128px -11px"},{"name":"Bhutan (འབྲུག)","code":"+975","flag":"-208px -11px"},{"name":"Bolivia","code":"+591","flag":"-160px -11px"},{"name":"Bosnia and Herzegovina (Босна и Херцеговина)","code":"+387","flag":"-256px 0px"},{"name":"Botswana","code":"+267","flag":"-240px -11px"},{"name":"Brazil (Brasil)","code":"+55","flag":"-176px -11px"},{"name":"British Indian Ocean Territory","code":"+246","flag":"-80px -66px"},{"name":"British Virgin Islands","code":"+1284","flag":"-96px -154px"},{"name":"Brunei Darussalam","code":"+673","flag":"-144px -11px"},{"name":"Bulgaria (България)","code":"+359","flag":"-64px -11px"},{"name":"Burkina Faso","code":"+226","flag":"-48px -11px"},{"name":"Burundi (Uburundi)","code":"+257","flag":"-96px -11px"},{"name":"Cambodia (កម្ពុជា)","code":"+855","flag":"0px -77px"},{"name":"Cameroon (Cameroun)","code":"+237","flag":"-160px -22px"},{"name":"Canada","code":"+1","flag":"-16px -22px"},{"name":"Cape Verde (Kabu Verdi)","code":"+238","flag":"-240px -22px"},{"name":"Caribbean Netherlands","code":"+599","flag":"0% 0%"},{"name":"Cayman Islands","code":"+1345","flag":"-128px -77px"},{"name":"Central African Republic (République centrafricaine)","code":"+236","flag":"-64px -22px"},{"name":"Chad (Tchad)","code":"+235","flag":"-240px -132px"},{"name":"Chile","code":"+56","flag":"-144px -22px"},{"name":"Colombia","code":"+57","flag":"-192px -22px"},{"name":"Comoros (‫جزر القمر‬‎)","code":"+269","flag":"-32px -77px"},{"name":"Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","code":"+243","flag":"-48px -22px"},{"name":"Congo (Republic) (Congo-Brazzaville)","code":"+242","flag":"-80px -22px"},{"name":"Cook Islands","code":"+682","flag":"-128px -22px"},{"name":"Costa Rica","code":"+506","flag":"-208px -22px"},{"name":"Côte d’Ivoire","code":"+225","flag":"-112px -22px"},{"name":"Croatia (Hrvatska)","code":"+385","flag":"-192px -55px"},{"name":"Cuba","code":"+53","flag":"-224px -22px"},{"name":"Curaçao","code":"+599","flag":"-256px -22px"},{"name":"Cyprus (Κύπρος)","code":"+357","flag":"0px -33px"},{"name":"Czech Republic (Česká republika)","code":"+420","flag":"-16px -33px"},{"name":"Denmark (Danmark)","code":"+45","flag":"-64px -33px"},{"name":"Djibouti","code":"+253","flag":"-48px -33px"},{"name":"Dominica","code":"+1767","flag":"-80px -33px"},{"name":"Dominican Republic (República Dominicana)","code":"+1","flag":"-96px -33px"},{"name":"Ecuador","code":"+593","flag":"-128px -33px"},{"name":"Egypt (‫مصر‬‎)","code":"+20","flag":"-160px -33px"},{"name":"El Salvador","code":"+503","flag":"-160px -132px"},{"name":"Equatorial Guinea (Guinea Ecuatorial)","code":"+240","flag":"-32px -55px"},{"name":"Eritrea","code":"+291","flag":"-208px -33px"},{"name":"Estonia (Eesti)","code":"+372","flag":"-144px -33px"},{"name":"Ethiopia","code":"+251","flag":"-240px -33px"},{"name":"Falkland Islands (Islas Malvinas)","code":"+500","flag":"-32px -44px"},{"name":"Faroe Islands (Føroyar)","code":"+298","flag":"-64px -44px"},{"name":"Fiji","code":"+679","flag":"-16px -44px"},{"name":"Finland (Suomi)","code":"+358","flag":"0px -44px"},{"name":"France","code":"+33","flag":"-80px -44px"},{"name":"French Guiana (Guyane française)","code":"+594","flag":"-160px -44px"},{"name":"French Polynesia (Polynésie française)","code":"+689","flag":"-112px -110px"},{"name":"Gabon","code":"+241","flag":"-96px -44px"},{"name":"Georgia (საქართველო)","code":"+995","flag":"-144px -44px"},{"name":"Germany (Deutschland)","code":"+49","flag":"-32px -33px"},{"name":"Ghana (Gaana)","code":"+233","flag":"-208px -44px"},{"name":"Gibraltar","code":"+350","flag":"-224px -44px"},{"name":"Greece (Ελλάδα)","code":"+30","flag":"-48px -55px"},{"name":"Greenland (Kalaallit Nunaat)","code":"+299","flag":"-240px -44px"},{"name":"Grenada","code":"+1473","flag":"-128px -44px"},{"name":"Guadeloupe","code":"+590","flag":"-16px -55px"},{"name":"Guam","code":"+1671","flag":"-96px -55px"},{"name":"Guatemala","code":"+502","flag":"-80px -55px"},{"name":"Guernsey","code":"+1481","flag":"-192px -44px"},{"name":"Guinea (Guinée)","code":"+224","flag":"0px -55px"},{"name":"Guinea-Bissau (Guiné Bissau)","code":"+245","flag":"-112px -55px"},{"name":"Guyana","code":"+592","flag":"-128px -55px"},{"name":"Haiti","code":"+509","flag":"-208px -55px"},{"name":"Honduras","code":"+504","flag":"-176px -55px"},{"name":"Hungary (Magyarország)","code":"+36","flag":"-224px -55px"},{"name":"Iceland (Ísland)","code":"+354","flag":"-128px -66px"},{"name":"India (भारत)","code":"+91","flag":"-64px -66px"},{"name":"Indonesia","code":"+62","flag":"-256px -55px"},{"name":"Iran (‫ایران‬‎)","code":"+98","flag":"-112px -66px"},{"name":"Iraq (‫العراق‬‎)","code":"+964","flag":"-96px -66px"},{"name":"Ireland","code":"+353","flag":"0px -66px"},{"name":"Isle of Man","code":"+44","flag":"-48px -66px"},{"name":"Israel (‫ישראל‬‎)","code":"+972","flag":"-16px -66px"},{"name":"Italy (Italia)","code":"+39","flag":"-144px -66px"},{"name":"Jamaica","code":"+1876","flag":"-192px -66px"},{"name":"Japan (にほんこく)","code":"+81","flag":"-224px -66px"},{"name":"Jersey","code":"+44","flag":"-176px -66px"},{"name":"Jordan (‫الأردن‬‎)","code":"+962","flag":"-208px -66px"},{"name":"Kazakhstan (Казахстан)","code":"+7","flag":"-144px -77px"},{"name":"Kenya","code":"+254","flag":"-240px -66px"},{"name":"Kiribati","code":"+686","flag":"-16px -77px"},{"name":"Kosovo","code":"+383","flag":"-208px -154px"},{"name":"Kuwait (‫الكويت‬‎)","code":"+965","flag":"-112px -77px"},{"name":"Kyrgyzstan (Кыргызстан)","code":"+996","flag":"-256px -66px"},{"name":"Laos (ລາວ)","code":"+856","flag":"-160px -77px"},{"name":"Latvia (Latvija)","code":"+371","flag":"-32px -88px"},{"name":"Lebanon (‫لبنان‬‎)","code":"+961","flag":"-176px -77px"},{"name":"Lesotho","code":"+266","flag":"-256px -77px"},{"name":"Liberia","code":"+231","flag":"-240px -77px"},{"name":"Libya (‫ليبيا‬‎)","code":"+218","flag":"-48px -88px"},{"name":"Liechtenstein","code":"+423","flag":"-208px -77px"},{"name":"Lithuania (Lietuva)","code":"+370","flag":"0px -88px"},{"name":"Luxembourg","code":"+352","flag":"-16px -88px"},{"name":"Macedonia (FYROM) (Македонија)","code":"+389","flag":"-160px -88px"},{"name":"Madagascar (Madagasikara)","code":"+261","flag":"-128px -88px"},{"name":"Malawi","code":"+265","flag":"-80px -99px"},{"name":"Malaysia","code":"+60","flag":"-112px -99px"},{"name":"Maldives","code":"+960","flag":"-64px -99px"},{"name":"Mali","code":"+223","flag":"-176px -88px"},{"name":"Malta","code":"+356","flag":"-32px -99px"},{"name":"Marshall Islands","code":"+692","flag":"-144px -88px"},{"name":"Martinique","code":"+596","flag":"-256px -88px"},{"name":"Mauritania (‫موريتانيا‬‎)","code":"+222","flag":"0px -99px"},{"name":"Mauritius (Moris)","code":"+230","flag":"-48px -99px"},{"name":"Mayotte","code":"+262","flag":"-240px -154px"},{"name":"Mexico (México)","code":"+52","flag":"-96px -99px"},{"name":"Micronesia","code":"+691","flag":"-48px -44px"},{"name":"Moldova (Republica Moldova)","code":"+373","flag":"-96px -88px"},{"name":"Monaco","code":"+377","flag":"-80px -88px"},{"name":"Mongolia (Монгол)","code":"+976","flag":"-208px -88px"},{"name":"Montenegro (Crna Gora)","code":"+382","flag":"-112px -88px"},{"name":"Montserrat","code":"+1664","flag":"-16px -99px"},{"name":"Morocco (‫المغرب‬‎)","code":"+212","flag":"-64px -88px"},{"name":"Mozambique (Moçambique)","code":"+258","flag":"-128px -99px"},{"name":"Myanmar (Burma) (မြန်မာ)","code":"+95","flag":"-192px -88px"},{"name":"Namibia (Namibië)","code":"+264","flag":"-144px -99px"},{"name":"Nauru","code":"+674","flag":"-16px -110px"},{"name":"Nepal (नेपाल)","code":"+977","flag":"0px -110px"},{"name":"Netherlands (Nederland)","code":"+31","flag":"-240px -99px"},{"name":"New Caledonia (Nouvelle-Calédonie)","code":"+687","flag":"-160px -99px"},{"name":"New Zealand","code":"+64","flag":"-48px -110px"},{"name":"Nicaragua","code":"+505","flag":"-224px -99px"},{"name":"Niger (Nijar)","code":"+227","flag":"-176px -99px"},{"name":"Nigeria","code":"+234","flag":"-208px -99px"},{"name":"Niue","code":"+683","flag":"-32px -110px"},{"name":"Norfolk Island","code":"+672","flag":"-192px -99px"},{"name":"North Korea (조선민주주의인민공화국)","code":"+850","flag":"-64px -77px"},{"name":"Northern Mariana Islands","code":"+1670","flag":"-240px -88px"},{"name":"Norway (Norge)","code":"+47","flag":"-256px -99px"},{"name":"Oman (‫عُمان‬‎)","code":"+968","flag":"-64px -110px"},{"name":"Pakistan (‫پاکستان‬‎)","code":"+92","flag":"-160px -110px"},{"name":"Palau","code":"+680","flag":"0px -121px"},{"name":"Palestine (‫فلسطين‬‎)","code":"+970","flag":"-240px -110px"},{"name":"Panama (Panamá)","code":"+507","flag":"-80px -110px"},{"name":"Papua New Guinea","code":"+675","flag":"-128px -110px"},{"name":"Paraguay","code":"+595","flag":"-16px -121px"},{"name":"Peru (Perú)","code":"+51","flag":"-96px -110px"},{"name":"Philippines","code":"+63","flag":"-144px -110px"},{"name":"Poland (Polska)","code":"+48","flag":"-176px -110px"},{"name":"Portugal","code":"+351","flag":"-256px -110px"},{"name":"Puerto Rico","code":"+1","flag":"-224px -110px"},{"name":"Qatar (‫قطر‬‎)","code":"+974","flag":"-32px -121px"},{"name":"Réunion (La Réunion)","code":"+262","flag":"-48px -121px"},{"name":"Romania (România)","code":"+40","flag":"-64px -121px"},{"name":"Russia (Россия)","code":"+7","flag":"-96px -121px"},{"name":"Rwanda","code":"+250","flag":"-112px -121px"},{"name":"Saint Helena","code":"+290","flag":"-240px -121px"},{"name":"Saint Kitts and Nevis","code":"+1869","flag":"-48px -77px"},{"name":"Saint Lucia","code":"+1758","flag":"-192px -77px"},{"name":"Saint Martin (Saint-Martin)","code":"+590","flag":"0% 0%"},{"name":"Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","code":"+508","flag":"-192px -110px"},{"name":"Saint Vincent and the Grenadines","code":"+1784","flag":"-64px -154px"},{"name":"Samoa","code":"+685","flag":"-192px -154px"},{"name":"San Marino","code":"+378","flag":"-48px -132px"},{"name":"São Tomé and Príncipe (São Tomé e Príncipe)","code":"+239","flag":"-144px -132px"},{"name":"Saudi Arabia (‫المملكة العربية السعودية‬‎)","code":"+966","flag":"-128px -121px"},{"name":"Senegal (Sénégal)","code":"+221","flag":"-64px -132px"},{"name":"Serbia (Србија)","code":"+381","flag":"-80px -121px"},{"name":"Seychelles","code":"+248","flag":"-160px -121px"},{"name":"Sierra Leone","code":"+232","flag":"-32px -132px"},{"name":"Singapore","code":"+65","flag":"-224px -121px"},{"name":"Sint Maarten","code":"+1721","flag":"-176px -132px"},{"name":"Slovakia (Slovensko)","code":"+421","flag":"-16px -132px"},{"name":"Slovenia (Slovenija)","code":"+386","flag":"-256px -121px"},{"name":"Solomon Islands","code":"+677","flag":"-144px -121px"},{"name":"Somalia (Soomaaliya)","code":"+252","flag":"-80px -132px"},{"name":"South Africa","code":"+27","flag":"-256px -154px"},{"name":"South Korea (대한민국)","code":"+82","flag":"-80px -77px"},{"name":"South Sudan (‫جنوب السودان‬‎)","code":"+211","flag":"-128px -132px"},{"name":"Spain (España)","code":"+34","flag":"-224px -33px"},{"name":"Sri Lanka (ශ්‍රී ලංකාව)","code":"+94","flag":"-224px -77px"},{"name":"Sudan (‫السودان‬‎)","code":"+249","flag":"-192px -121px"},{"name":"Suriname","code":"+597","flag":"-112px -132px"},{"name":"Svalbard and Jan Mayen","code":"+47","flag":"0px -132px"},{"name":"Swaziland","code":"+268","flag":"-208px -132px"},{"name":"Sweden (Sverige)","code":"+46","flag":"-208px -121px"},{"name":"Switzerland (Schweiz)","code":"+41","flag":"-96px -22px"},{"name":"Syria (‫سوريا‬‎)","code":"+963","flag":"-192px -132px"},{"name":"Tajikistan","code":"+992","flag":"-48px -143px"},{"name":"Tanzania","code":"+255","flag":"-208px -143px"},{"name":"Thailand (ไทย)","code":"+66","flag":"-16px -143px"},{"name":"The Bahamas","code":"+1242","flag":"-192px -11px"},{"name":"The Gambia","code":"+220","flag":"-256px -44px"},{"name":"Timor-Leste","code":"+670","flag":"-80px -143px"},{"name":"Togo","code":"+228","flag":"0px -143px"},{"name":"Tokelau","code":"+690","flag":"-64px -143px"},{"name":"Tonga","code":"+676","flag":"-128px -143px"},{"name":"Trinidad and Tobago","code":"+1868","flag":"-160px -143px"},{"name":"Tunisia (‫تونس‬‎)","code":"+216","flag":"-112px -143px"},{"name":"Turkey (Türkiye)","code":"+90","flag":"-144px -143px"},{"name":"Turkmenistan","code":"+993","flag":"-96px -143px"},{"name":"Turks and Caicos Islands","code":"+1649","flag":"-224px -132px"},{"name":"Tuvalu","code":"+688","flag":"-176px -143px"},{"name":"United States","code":"+1","flag":"0px -154px"},{"name":"United Kingdom","code":"+44","flag":"-112px -44px"},{"name":"U.S. Virgin Islands","code":"+1340","flag":"-112px -154px"},{"name":"Uganda","code":"+256","flag":"-240px -143px"},{"name":"Ukraine (Україна)","code":"+380","flag":"-224px -143px"},{"name":"United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","code":"+971","flag":"-16px 0px"},{"name":"Uruguay","code":"+598","flag":"-16px -154px"},{"name":"Uzbekistan (Oʻzbekiston)","code":"+998","flag":"-32px -154px"},{"name":"Vanuatu","code":"+678","flag":"-144px -154px"},{"name":"Vatican City (Città del Vaticano)","code":"+379","flag":"-48px -154px"},{"name":"Venezuela","code":"+58","flag":"-80px -154px"},{"name":"Vietnam (Việt Nam)","code":"+84","flag":"-128px -154px"},{"name":"Wallis and Futuna","code":"+681","flag":"-176px -154px"},{"name":"Yemen (‫اليمن‬‎)","code":"+967","flag":"-224px -154px"},{"name":"Zambia","code":"+260","flag":"-16px -165px"},{"name":"Zimbabwe","code":"+263","flag":"-32px -165px"},{"name":"Åland Islands","code":"+358","flag":"-224px 0px"}]')},bb5c:function(e,a,n){"use strict";n("7399")}}]);