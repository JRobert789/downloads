(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6ba877a6"],{"438a":function(t,e,i){"use strict";i("c17c")},c17c:function(t,e,i){},cdf3:function(t,e,i){"use strict";i.r(e);var n=i("5530"),s=(i("d81d"),i("7db0"),i("d3b7"),i("2f62")),a={name:"videoconfig",data:function(){return{dataList:[],show:!1,editObj:{},musicList:[],selectedMusic:"",loading:!1}},methods:{listen:function(t){var e=this.$refs[t][0];e.paused?e.play():e.pause()},confirm:function(){this.selectedMusic!==this.editObj.remark&&(this.editObj.changeto=this.selectedMusic),this.show=!1},edit:function(t){this.editObj=t,this.selectedMusic=t.remark,this.show=!0},getData:function(){var t=this;this.$get("/platform/config/tob/queryMusicRecordInfo").then((function(e){t.dataList=e.map((function(t){return t.isEnable=Boolean(t.isEnable),t}))}))},getMusics:function(){var t=this;this.$get("/platform/config/tob/queryModalInfo").then((function(e){t.musicList=e})).catch((function(e){t.$Message.error(e.message)}))},getmusicpath:function(t){var e=this.musicList.find((function(e){return e.remark===t}));return e?e.dictValue:""},confirmEdit:function(){var t=this,e=this.dataList.reduce((function(e,i){return e.id.push(i.id),e.isEnable.push(+i.isEnable+""),e.remark.push(i.changeto||""),e.setKey.push(i.setKey),e.setName.push(i.changeto?i.setName:""),e.setValue.push(t.getmusicpath(i.changeto)),e}),{id:[],isEnable:[],remark:[],setKey:[],setName:[],setValue:[]});this.loading||(this.loading=!0,this.$post("/platform/config/tob/editMusic",[e],{"Content-type":"application/json;charset=UTF-8"}).then((function(){t.getData(),t.$Message.success(t.$t("changeSuccess"))})).catch((function(e){t.$Message.error(e.message)})).finally((function(){t.loading=!1})))}},computed:Object(n.a)({},Object(s.c)("site",["imgServer"])),mounted:function(){this.getData(),this.getMusics()}},o=a,c=(i("438a"),i("2877")),r=Object(c.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"videoconfig"},[t.loading?i("Spin",{attrs:{fix:""}}):t._e(),i("table",{staticClass:"cmtable"},[i("tr",[i("th",[t._v(t._s(t._f("lang")("videoconfig.promptSoundName")))]),i("th",[t._v(t._s(t._f("lang")("videoconfig.currentPromptSound")))]),i("th",[t._v(t._s(t._f("lang")("videoconfig.set")))]),i("th",[t._v(t._s(t._f("lang")("videoconfig.enableSound")))])]),t._l(t.dataList,(function(e,n){return i("tr",{key:n},[i("td",[t._v(t._s(t._f("lang")("videoconfig."+e.setKey)))]),i("td",[t._v(t._s(t.$t("videoconfig.promptSound",{num:e.remark.substring(3,e.remark.length)})))]),i("td",[i("Button",{attrs:{type:"primary"},on:{click:function(i){return t.edit(e)}}},[t._v(t._s(t._f("lang")("videoconfig.set")))]),e.changeto?[t._v(" "+t._s(e.changeto)+" ")]:t._e()],2),i("td",[i("i-switch",{attrs:{size:"large"},model:{value:e.isEnable,callback:function(i){t.$set(e,"isEnable",i)},expression:"item.isEnable"}},[i("span",{attrs:{slot:"open"},slot:"open"},[t._v(t._s(t._f("lang")("videoconfig.open")))]),i("span",{attrs:{slot:"close"},slot:"close"},[t._v(t._s(t._f("lang")("videoconfig.close")))])])],1)])}))],2),i("div",{staticStyle:{"margin-top":"20px","text-align":"center"}},[i("Button",{attrs:{type:"primary",disabled:!t.pageauthoritys.save},on:{click:t.confirmEdit}},[t._v(t._s(t._f("lang")("confirm")))])],1),i("Drawer",{attrs:{width:"600",title:t.$t("videoconfig.modifyThePromptToneOf",{name:t.$t("videoconfig."+t.editObj.setKey)})},on:{"on-close":function(e){t.editObj={}}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("table",{staticClass:"cmtable"},[i("tr",[i("th",[t._v(t._s(t._f("lang")("videoconfig.promptSoundName")))]),i("th",[t._v(t._s(t._f("lang")("videoconfig.audition")))])]),t._l(t.musicList,(function(e,n){return i("tr",{key:n},[i("td",[i("label",{attrs:{for:e.dictKey}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedMusic,expression:"selectedMusic"}],attrs:{id:e.dictKey,type:"radio",name:"aaa"},domProps:{value:e.remark,checked:t._q(t.selectedMusic,e.remark)},on:{change:function(i){t.selectedMusic=e.remark}}}),t._v(" "+t._s(t.$t("videoconfig.promptSound",{num:e.remark.substring(3,e.remark.length)}))+" ")])]),i("td",[i("Button",{attrs:{type:"primary"},on:{click:function(i){return t.listen(e.dictKey)}}},[t._v(t._s(t._f("lang")("videoconfig.audition")))]),i("audio",{ref:e.dictKey,refInFor:!0,staticStyle:{display:"none"},attrs:{src:""+t.imgServer+e.dictValue.substr(1)}},[t._v(" "+t._s(t._f("lang")("videoconfig.notSupportAudio"))+" ")])],1)])}))],2),i("div",{staticClass:"drawerbottom",staticStyle:{"margin-top":"20px"}},[i("Button",{staticStyle:{"margin-right":"8px"},on:{click:function(e){t.show=!1}}},[t._v(t._s(t._f("lang")("cancel")))]),i("Button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v(t._s(t._f("lang")("confirm")))])],1)])],1)}),[],!1,null,null,null);e.default=r.exports}}]);