"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6702],{350:(t,e,a)=>{a.d(e,{Z:()=>i});var s=a(3645),r=a.n(s)()((function(t){return t[1]}));r.push([t.id,"",""]);const i=r},6702:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var s=a(9669),r=a.n(s);const i={props:["record"],data:function(){return{isLoading:!1,withdrawalRequest:{id:this.record?this.record.id:null,status:this.record?this.record.status:""}}},computed:{modal_title:function(){var t=this.withdrawalRequest.id?"Edit":"Add";return t+=" Withdrawal Request"}},methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},saveRecord:function(){var t=this,e=this;this.isLoading=!0;var a=this.withdrawalRequest,s=new FormData;for(var i in a)s.append(i,a[i]);var n=this.$apiUrl+"/withdrawal_requests/save";this.withdrawalRequest.id&&(n=this.$apiUrl+"/withdrawal_requests/update"),r().post(n,s).then((function(a){var s=a.data;1===s.status?(t.$eventBus.$emit("withdrawalRequestSaved",s.message),t.hideModal()):(e.showError(s.message),e.isLoading=!1)})).catch((function(a){e.isLoading=!1,a.request.statusText?t.showError(a.request.statusText):a.message?t.showError(a.message):t.showError("Something went wrong!")}))}},mounted:function(){this.showModal()}};var n=a(3379),l=a.n(n),o=a(350),c={insert:"head",singleton:!1};l()(o.Z,c);o.Z.locals;var d=a(1900);const u={components:{"app-edit-record":(0,d.Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"my-modal",attrs:{title:t.modal_title,"no-fade":"",static:""},on:{hidden:function(e){return t.$emit("modalClose")}}},[a("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("b-button",{attrs:{variant:"primary",disabled:t.isLoading},on:{click:function(e){return t.$refs.dummy_submit.click()}}},[t._v("Save\n            "),t.isLoading?a("b-spinner",{attrs:{small:"",label:"Spinning"}}):t._e()],1),t._v(" "),a("b-button",{attrs:{variant:"secondary"},on:{click:t.hideModal}},[t._v("Cancel")])],1),t._v(" "),a("form",{ref:"my-form",on:{submit:function(e){return e.preventDefault(),t.saveRecord.apply(null,arguments)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"status"}},[t._v("Status")]),a("br"),t._v(" "),a("div",{staticClass:"btn-group",attrs:{id:"status"}},[a("label",{staticClass:"btn btn-warning",attrs:{"data-toggle-class":"btn-warning","data-toggle-passive-class":"btn-default"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.withdrawalRequest.status,expression:"withdrawalRequest.status"}],staticClass:"form-check-input",attrs:{type:"radio",value:"0"},domProps:{checked:t._q(t.withdrawalRequest.status,"0")},on:{change:function(e){return t.$set(t.withdrawalRequest,"status","0")}}}),t._v(" Pending\n                        ")]),t._v(" "),a("label",{staticClass:"btn btn-success",attrs:{"data-toggle-class":"btn-success","data-toggle-passive-class":"btn-default"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.withdrawalRequest.status,expression:"withdrawalRequest.status"}],staticClass:"form-check-input",attrs:{type:"radio",value:"1"},domProps:{checked:t._q(t.withdrawalRequest.status,"1")},on:{change:function(e){return t.$set(t.withdrawalRequest,"status","1")}}}),t._v(" Approved\n                        ")]),t._v(" "),a("label",{staticClass:"btn btn-danger",attrs:{"data-toggle-class":"btn-danger","data-toggle-passive-class":"btn-default"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.withdrawalRequest.status,expression:"withdrawalRequest.status"}],staticClass:"form-check-input",attrs:{type:"radio",value:"2"},domProps:{checked:t._q(t.withdrawalRequest.status,"2")},on:{change:function(e){return t.$set(t.withdrawalRequest,"status","2")}}}),t._v(" Rejected\n                        ")])])])])]),t._v(" "),a("button",{ref:"dummy_submit",staticStyle:{display:"none"}})])])}),[],!1,null,"7c23a06c",null).exports},data:function(){return{fields:[{key:"id",label:"ID",sortable:!0,sortDirection:"desc"},{key:"type",label:"Type",sortable:!0,class:"text-center"},{key:"name",label:"Name",sortable:!0,class:"text-center"},{key:"amount",label:"Amount",sortable:!0,class:"text-center"},{key:"balance",label:"Balance",sortable:!0,class:"text-center"},{key:"message",label:"Message",sortable:!0,class:"text-center"},{key:"status",label:"Status",sortable:!0,class:"text-center"},{key:"created_at",label:"Date Created",sortable:!0,class:"text-center"},{key:"actions",label:"Action"}],totalRows:1,currentPage:1,perPage:this.$perPage,pageOptions:this.$pageOptions,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],page:1,isLoading:!1,sectionStyle:"style_1",max_visible_units:12,max_col_in_single_row:3,create_new:null,edit_record:null,withdrawalRequests:[]}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){this.totalRows=this.withdrawalRequests.length},created:function(){var t=this;this.$eventBus.$on("withdrawalRequestSaved",(function(e){t.showMessage("success",e),t.getWithdrawalRequests(),t.create_new=null})),this.getWithdrawalRequests()},methods:{getWithdrawalRequests:function(){var t=this;this.isLoading=!0,axios.get(this.$apiUrl+"/withdrawal_requests").then((function(e){t.withdrawalRequests=e.data.data,t.totalRows=t.withdrawalRequests.length,t.isLoading=!1}))},deleteWithdrawalRequests:function(t,e){var a=this;this.$swal.fire({title:"Are you Sure?",text:"You want be able to revert this",confirmButtonText:"Yes, Sure",cancelButtonText:"Cancel",icon:"warning",showCancelButton:!0,confirmButtonColor:"#37a279",cancelButtonColor:"#d33"}).then((function(s){if(s.value){a.isLoading=!0;var r={id:e};axios.post(a.$apiUrl+"/withdrawal_requests/delete",r).then((function(e){a.isLoading=!1,a.withdrawalRequests.splice(t,1),a.showSuccess(e.data.message)}))}}))},hideModal:function(){this.create_new=!1,this.edit_record=!1}}};const h=(0,d.Z)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-heading"},[a("div",{staticClass:"page-title"},[a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[a("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/dashboard"}},[t._v(t._s(t.__("dashboard")))])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Withdrawal Requests")])])])])])]),t._v(" "),a("section",{staticClass:"section"},[a("div",{staticClass:"card"},[t._m(1),t._v(" "),a("div",{staticClass:"card-body"},[a("b-row",{staticClass:"mb-2"},[a("b-col",{attrs:{md:"3","offset-md":"8"}},[a("h6",{staticClass:"box-title"},[t._v(t._s(t.__("search")))]),t._v(" "),a("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:t.__("search")},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t._v(" "),a("b-col",{staticClass:"text-center",attrs:{md:"1"}},[a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-primary btn_refresh",attrs:{title:t.__("refresh")},on:{click:function(e){return t.getWithdrawalRequests()}}},[a("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])])],1),t._v(" "),a("b-table",{attrs:{items:t.withdrawalRequests,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,bordered:!0,busy:t.isLoading,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-black my-2"},[a("b-spinner",{staticClass:"align-middle"}),t._v(" "),a("strong",[t._v(t._s(t.__("loading"))+"...")])],1)]},proxy:!0},{key:"head(amount)",fn:function(e){return[t._v("\n                            "+t._s("Amount ("+t.$currency+")")+"\n                        ")]}},{key:"head(balance)",fn:function(e){return[t._v("\n                            "+t._s("Balance ("+t.$currency+")")+"\n                        ")]}},{key:"cell(status)",fn:function(e){return[0===e.item.status?a("span",{staticClass:"badge bg-warning"},[t._v("Pending")]):1===e.item.status?a("span",{staticClass:"badge bg-success"},[t._v("Approved")]):2===e.item.status?a("span",{staticClass:"badge bg-danger"},[t._v("Cancelled")]):a("span",{staticClass:"badge bg-danger"},[t._v("Undefine")])]}},{key:"cell(created_at)",fn:function(e){return[t._v("\n                            "+t._s(new Date(e.item.created_at).toLocaleString())+"\n                        ")]}},{key:"cell(actions)",fn:function(e){return[t.$can("withdrawal_request_update")?a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-primary",attrs:{title:t.__("edit")},on:{click:function(a){t.edit_record=e.item}}},[a("i",{staticClass:"fa fa-pencil"})]):t._e(),t._v(" "),t.$can("withdrawal_request_delete")?a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-danger",attrs:{title:t.__("delete")},on:{click:function(a){return t.deleteWithdrawalRequests(e.index,e.item.id)}}},[a("i",{staticClass:"fa fa-trash"})]):t._e()]}}])}),t._v(" "),a("b-row",[a("b-col",{staticClass:"my-1",attrs:{md:"2"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:t.__("per_page"),"label-for":"per-page-select","label-align-sm":"right","label-size":"sm"}},[a("b-form-select",{staticClass:"form-control form-select",attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),a("b-col",{staticClass:"my-1",attrs:{md:"4","offset-md":"6"}},[a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)])])]),t._v(" "),t.create_new||t.edit_record?a("app-edit-record",{attrs:{record:t.edit_record},on:{modalClose:function(e){return t.hideModal()}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[a("h3",[t._v("Withdrawal Requests")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("h4",{staticClass:"card-title"},[t._v("Withdrawal Requests")])])}],!1,null,null,null).exports}}]);