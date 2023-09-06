"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[701],{2886:(t,e,s)=>{s.d(e,{Z:()=>o});var i=s(3645),a=s.n(i)()((function(t){return t[1]}));a.push([t.id,".image_preview[data-v-70925d96]{margin-top:5px}",""]);const o=a},701:(t,e,s)=>{s.r(e),s.d(e,{default:()=>v});var i=s(1585),a=s(9669),o=s.n(a);const r={props:["record"],data:function(){return{isLoading:!1,id:this.record?this.record.id:null,title:this.record?this.record.title:null,from_time:this.record?this.record.from_time:null,to_time:this.record?this.record.to_time:null,last_order_time:this.record?this.record.last_order_time:null,status:this.record?this.record.status:1}},computed:{modal_title:function(){var t=this.id?"Edit":"Add";return t+=" Time Slot"}},methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},saveRecord:function(){var t=this,e=this;this.isLoading=!0;var s=new FormData;this.id&&s.append("id",this.id),s.append("title",this.title),s.append("from_time",this.from_time),s.append("to_time",this.to_time),s.append("to_time",this.to_time),s.append("last_order_time",this.last_order_time),s.append("status",this.status);var i=this.$apiUrl+"/time_slots/save";this.id&&(i=this.$apiUrl+"/time_slots/update"),o().post(i,s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(s){var i=s.data;console.log("Response:"),console.log(i),1===i.status?(t.$eventBus.$emit("TimeSlotsSaved",i.message),t.hideModal()):(e.showError(i.message),e.isLoading=!1)})).catch((function(s){e.isLoading=!1,s.request.statusText?t.showError(s.request.statusText):s.message?t.showError(s.message):t.showError(__("something_went_wrong"))}))}},mounted:function(){this.showModal()}};var l=s(3379),n=s.n(l),c=s(2886),d={insert:"head",singleton:!1};n()(c.Z,d);c.Z.locals;var m=s(1900);const _=(0,m.Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{ref:"my-modal",attrs:{title:t.modal_title,"no-fade":"",static:""},on:{hidden:function(e){return t.$emit("modalClose")}}},[s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{variant:"primary",disabled:t.isLoading},on:{click:function(e){return t.$refs.dummy_submit.click()}}},[t._v("\n         Save\n         "),t.isLoading?s("b-spinner",{attrs:{small:"",label:"Spinning"}}):t._e()],1),t._v(" "),s("b-button",{attrs:{variant:"secondary"},on:{click:t.hideModal}},[t._v("Cancel")])],1),t._v(" "),s("form",{ref:"my-form",on:{submit:function(e){return e.preventDefault(),t.saveRecord.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Title")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:"Morning 9AM to 12PM"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("From Time "),s("small",[t._v("(24 hrs format)")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.from_time,expression:"from_time"}],staticClass:"form-control",attrs:{type:"time",required:""},domProps:{value:t.from_time},on:{input:function(e){e.target.composing||(t.from_time=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("To Time "),s("small",[t._v("(24 hrs format)")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.to_time,expression:"to_time"}],staticClass:"form-control",attrs:{type:"time",required:""},domProps:{value:t.to_time},on:{input:function(e){e.target.composing||(t.to_time=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Last Order Time "),s("small",[t._v("(24 hrs format)")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.last_order_time,expression:"last_order_time"}],staticClass:"form-control",attrs:{type:"time",required:""},domProps:{value:t.last_order_time},on:{input:function(e){e.target.composing||(t.last_order_time=e.target.value)}}})]),t._v(" "),t.id?s("div",{staticClass:"form-group"},[s("label",[t._v("Status")]),t._v(" "),s("div",{staticClass:"col-md-9 text-left mt-1"},[s("b-form-radio-group",{attrs:{options:[{text:" Deactivated",value:0},{text:" Activated",value:1}],buttons:"","button-variant":"outline-primary",required:""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1)]):t._e()]),t._v(" "),s("button",{ref:"dummy_submit",staticStyle:{display:"none"}})])])}),[],!1,null,"70925d96",null).exports,u={components:{VuejsDatatableFactory:i.dc,"app-edit-record":_},data:function(){return{fields:[{key:"id",label:"ID",sortable:!0,sortDirection:"desc"},{key:"title",label:"Title",sortable:!0,sortDirection:"desc",class:"text-center"},{key:"from_time",label:"From Time",sortable:!0,sortDirection:"desc",class:"text-center"},{key:"to_time",label:"To Time",sortable:!0,sortDirection:"desc",class:"text-center"},{key:"last_order_time",label:"Last Order Time",sortable:!0,sortDirection:"desc",class:"text-center"},{key:"status",label:"Status",sortable:!0,sortDirection:"desc",class:"text-center"},{key:"actions",label:"Actions"}],totalRows:1,currentPage:1,perPage:this.$perPage,pageOptions:this.$pageOptions,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],page:1,time_slots:[],isLoading:!1,sectionStyle:"style_1",max_visible_categories:12,max_col_in_single_row:3,edit_record:null,is_time_slots_enabled:!1,delivery_starts_from:"",allowed_days:1,timeSlot_settingsObject:{},timeSlot_settings:{}}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){this.totalRows=this.time_slots.length},created:function(){var t=this;this.$eventBus.$on("TimeSlotsSaved",(function(e){t.showMessage("success",e),t.getTimeSlots()})),this.getTimeSlots(),this.getTimeSlotsSettings()},methods:{getTimeSlots:function(){var t=this;this.isLoading=!0,axios.get(this.$apiUrl+"/time_slots").then((function(e){t.isLoading=!1;var s=e.data;t.time_slots=s.data,console.log("time_slots =>",t.time_slots),t.totalRows=t.time_slots.length}))},deleteTimeSlots:function(t,e){var s=this;this.$swal.fire({title:"Are you Sure?",text:"You want be able to revert this",confirmButtonText:"Yes, Sure",cancelButtonText:"Cancel",icon:"warning",showCancelButton:!0,confirmButtonColor:"#37a279",cancelButtonColor:"#d33"}).then((function(i){if(i.value){s.isLoading=!0;var a={id:e};axios.post(s.$apiUrl+"/time_slots/delete",a).then((function(e){s.isLoading=!1;var i=e.data;s.time_slots.splice(t,1),s.showMessage("success",i.message)}))}}))},getTimeSlotsSettings:function(){var t=this;axios.get(this.$apiUrl+"/time_slots/getTimeSlotsSettings").then((function(e){var s=e.data.data;t.timeSlot_settingsObject=s.timeSlot_settingsObject,t.timeSlot_settings=e.data.data.timeSlot_settings,t.timeSlot_settings.map((function(e,s){"false"===e.value||"true"===e.value?t.timeSlot_settingsObject[e.variable]="false"!==e.value:t.timeSlot_settingsObject[e.variable]=e.value}))}))},addTimeSlotsSettings:function(){var t=this;this.isLoading=!0;var e=this.timeSlot_settingsObject,s=new FormData;for(var i in e)s.append(i,e[i]);console.log("timeSlot_settingsObject",e),console.log("formData",s),axios.post(this.$apiUrl+"/time_slots/saveTimeSlotsSettings",s).then((function(e){var s=e.data;1===s.status?(t.getTimeSlotsSettings(),t.isLoading=!1,t.showMessage("success",s.message)):(t.isLoading=!1,t.showError(s.message))}))}}};const v=(0,m.Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-heading"},[s("div",{staticClass:"row"},[t._m(0),t._v(" "),s("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[s("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/dashboard"}},[t._v(t._s(t.__("dashboard")))])],1),t._v(" "),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Manage Time Slots")])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-12 order-md-1 order-last"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",[t._v("Time Slot Config")]),t._v(" "),s("span",{staticClass:"pull-right"},[t.$can("time_slot_create")?s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.edit_record=!0}}},[t._v("Add New Time Slot")]):t._e()])]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"box-body"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"time_slots_is_enabled"}},[t._v("Enable / Disable Time Slots")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.timeSlot_settingsObject.time_slots_is_enabled,expression:"timeSlot_settingsObject.time_slots_is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",required:"",id:"time_slots_is_enabled"},domProps:{value:0,checked:Array.isArray(t.timeSlot_settingsObject.time_slots_is_enabled)?t._i(t.timeSlot_settingsObject.time_slots_is_enabled,0)>-1:t.timeSlot_settingsObject.time_slots_is_enabled},on:{change:function(e){var s=t.timeSlot_settingsObject.time_slots_is_enabled,i=e.target,a=!!i.checked;if(Array.isArray(s)){var o=t._i(s,0);i.checked?o<0&&t.$set(t.timeSlot_settingsObject,"time_slots_is_enabled",s.concat([0])):o>-1&&t.$set(t.timeSlot_settingsObject,"time_slots_is_enabled",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.timeSlot_settingsObject,"time_slots_is_enabled",a)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Delivery Starts From?")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.timeSlot_settingsObject.time_slots_delivery_starts_from,expression:"timeSlot_settingsObject.time_slots_delivery_starts_from"}],staticClass:"form-control form-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.timeSlot_settingsObject,"time_slots_delivery_starts_from",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Select starts from day")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("Today")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Tomorrow")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Third Day")]),t._v(" "),s("option",{attrs:{value:"4"}},[t._v("Fourth Day")]),t._v(" "),s("option",{attrs:{value:"5"}},[t._v("Fifth Day")]),t._v(" "),s("option",{attrs:{value:"6"}},[t._v("Sixth Day")]),t._v(" "),s("option",{attrs:{value:"7"}},[t._v("Seventh Day")])]),t._v(" "),s("br")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("How many Days you want to allow?")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.timeSlot_settingsObject.time_slots_allowed_days,expression:"timeSlot_settingsObject.time_slots_allowed_days"}],staticClass:"form-control form-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.timeSlot_settingsObject,"time_slots_allowed_days",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Select allowed days")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("1")]),t._v(" "),s("option",{attrs:{value:"7",selected:""}},[t._v("7")]),t._v(" "),s("option",{attrs:{value:"15"}},[t._v("15")]),t._v(" "),s("option",{attrs:{value:"30"}},[t._v("30")])]),t._v(" "),s("br")]),t._v(" "),s("div",{staticClass:"box-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.isLoading},on:{click:t.addTimeSlotsSettings}},[t._v("Add "),t.isLoading?s("b-spinner",{attrs:{small:"",label:"Spinning"}}):t._e()],1)])])]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("b-row",{staticClass:"mb-2"},[s("b-col",{attrs:{md:"3","offset-md":"8"}},[s("h6",{staticClass:"box-title"},[t._v("Search")]),t._v(" "),s("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t._v(" "),s("b-col",{staticClass:"text-center",attrs:{md:"1"}},[s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-primary btn_refresh",attrs:{title:t.__("refresh")},on:{click:function(e){return t.getTimeSlots()}}},[s("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])])],1),t._v(" "),s("b-table",{attrs:{items:t.time_slots,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,bordered:!0,busy:t.isLoading,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-black my-2"},[s("b-spinner",{staticClass:"align-middle"}),t._v(" "),s("strong",[t._v(t._s(t.__("loading"))+"...")])],1)]},proxy:!0},{key:"cell(status)",fn:function(e){return[1==e.item.status?s("span",{staticClass:"badge bg-success"},[t._v("Active")]):t._e(),t._v(" "),0==e.item.status?s("span",{staticClass:"badge bg-danger"},[t._v("Deactive")]):t._e()]}},{key:"cell(actions)",fn:function(e){return[t.$can("time_slot_update")?s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-primary",attrs:{title:t.__("edit")},on:{click:function(s){t.edit_record=e.item}}},[s("i",{staticClass:"fa fa-pencil"})]):t._e(),t._v(" "),t.$can("time_slot_delete")?s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-danger",attrs:{title:t.__("delete")},on:{click:function(s){return t.deleteTimeSlots(e.index,e.item.id)}}},[s("i",{staticClass:"fa fa-trash"})]):t._e()]}}])}),t._v(" "),s("b-row",[s("b-col",{staticClass:"my-1",attrs:{md:"2"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:t.__("per_page"),"label-for":"per-page-select","label-align-sm":"right","label-size":"sm"}},[s("b-form-select",{staticClass:"form-control form-select",attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"4","offset-md":"6"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)])])])])])]),t._v(" "),t.edit_record?s("app-edit-record",{attrs:{record:t.edit_record},on:{modalClose:function(e){t.edit_record=null}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[s("h3",[t._v("Manage Time Slots")])])}],!1,null,null,null).exports}}]);