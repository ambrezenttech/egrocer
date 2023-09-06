"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1254],{8674:(t,e,a)=>{a.d(e,{Z:()=>i});var s=a(3645),r=a.n(s)()((function(t){return t[1]}));r.push([t.id,".image_preview[data-v-28d77ea9]{margin-top:5px}",""]);const i=r},1254:(t,e,a)=>{a.r(e),a.d(e,{default:()=>_});var s=a(9669),r=a.n(s);const i={props:["record","categories"],data:function(){return{isLoading:!1,image:null,id:this.record?this.record.id:null,name:this.record?this.record.name:null,subtitle:this.record?this.record.subtitle:null,image_url:this.record?this.record.image_url:null,status:this.record?this.record.status:1,parent_id:this.record?this.record.parent_id:0}},computed:{modal_title:function(){return this.id?__("edit_category"):__("add_category")}},methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},dropFile:function(t){t.preventDefault(),this.$refs.file_image.files=t.dataTransfer.files,this.handleFileUpload(),t.currentTarget.classList.add("bg-gray-100"),t.currentTarget.classList.remove("bg-green-300")},handleFileUpload:function(){this.image=this.$refs.file_image.files[0],this.image_url=URL.createObjectURL(this.image)},saveRecord:function(){var t=this,e=this;this.isLoading=!0;var a=new FormData;this.id&&a.append("id",this.id),a.append("name",this.name),a.append("subtitle",this.subtitle),a.append("image",this.image),a.append("status",this.status),a.append("parent_id",this.parent_id);var s=this.$apiUrl+"/categories/save";this.id&&(s=this.$apiUrl+"/categories/update"),r().post(s,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){var a=t.data;console.log("Response:"),console.log(a),1===a.status?(console.log("Response : Success"),e.$eventBus.$emit("categorySaved",a.message),e.hideModal(),e.$router.push({path:"/manage_categories"})):(e.showError(a.message),e.isLoading=!1)})).catch((function(a){e.isLoading=!1,a.request.statusText?t.showError(a.request.statusText):a.message?t.showError(a.message):t.showError(__("something_went_wrong"))}))}},mounted:function(){this.showModal()}};var o=a(3379),l=a.n(o),n=a(8674),c={insert:"head",singleton:!1};l()(n.Z,c);n.Z.locals;var d=a(1900);const u={components:{"app-edit-record":(0,d.Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"my-modal",attrs:{title:t.modal_title,scrollable:"","no-close-on-backdrop":"","no-fade":"",static:""},on:{hidden:function(e){return t.$emit("modalClose")}}},[a("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("b-button",{attrs:{variant:"primary",disabled:t.isLoading},on:{click:function(e){return t.$refs.dummy_submit.click()}}},[t._v(t._s(t.__("save"))+"\n                "),t.isLoading?a("b-spinner",{attrs:{small:"",label:"Spinning"}}):t._e()],1),t._v(" "),a("b-button",{attrs:{variant:"secondary"},on:{click:t.hideModal}},[t._v(t._s(t.__("cancel")))])],1),t._v(" "),a("form",{ref:"my-form",on:{submit:function(e){return e.preventDefault(),t.saveRecord.apply(null,arguments)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.__("parent_category")))]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.parent_id,expression:"parent_id"}],staticClass:"form-control form-select",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.parent_id=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0"}},[t._v(t._s(t.__("main_category")))]),t._v(" "),t._l(t.categories,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.__("category_name")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:t.__("enter_category_name")},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.__("category_subtitle")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.subtitle,expression:"subtitle"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:t.__("enter_category_subtitle")},domProps:{value:t.subtitle},on:{input:function(e){e.target.composing||(t.subtitle=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.__("image")))]),t._v(" "),a("p",{staticClass:"text-muted"},[t._v("Please choose square image of larger than 350px*350px & smaller than 550px*550px.")]),t._v(" "),a("input",{ref:"file_image",staticClass:"file-input",attrs:{type:"file",name:"category_image",accept:"image/*"},on:{change:t.handleFileUpload}}),t._v(" "),a("div",{staticClass:"file-input-div bg-gray-100",on:{click:function(e){return t.$refs.file_image.click()},drop:t.dropFile,dragover:t.$dragoverFile,dragleave:t.$dragleaveFile}},[t.image&&""!==t.image.name?[a("label",[t._v("Selected file name:- "+t._s(t.image.name))])]:[a("label",[a("i",{staticClass:"fa fa-cloud-upload fa-2x"})]),t._v(" "),a("label",[t._v(t._s(t.__("drop_files_here_or_click_to_upload")))])]],2),t._v(" "),t.image_url?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"custom-image",attrs:{src:t.image_url,title:"Category Image",alt:"Category Image"}})])]):t._e()]),t._v(" "),t.id?a("div",{staticClass:"form-group"},[a("label",[t._v("Status")]),t._v(" "),a("div",{staticClass:"col-md-9 text-left mt-1"},[a("b-form-radio-group",{attrs:{options:[{text:" Deactivated",value:0},{text:" Activated",value:1}],buttons:"","button-variant":"outline-primary",required:""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1)]):t._e()]),t._v(" "),a("button",{ref:"dummy_submit",staticStyle:{display:"none"}})])])}),[],!1,null,"28d77ea9",null).exports},data:function(){return{fields:[{key:"id",label:__("id"),class:"text-center",sortable:!0,sortDirection:"desc"},{key:"parent_id",label:__("parent_id"),class:"text-center",sortable:!0,sortDirection:"desc"},{key:"name",label:__("name"),class:"text-center",sortable:!0},{key:"subtitle",label:__("subtitle"),class:"text-center",sortable:!0},{key:"image",label:__("image"),class:"text-center"},{key:"status",label:__("status"),class:"text-center"},{key:"actions",label:__("actions"),class:"text-center"}],totalRows:1,currentPage:1,perPage:this.$perPage,pageOptions:this.$pageOptions,sortBy:"id",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],page:1,categories:[],isLoading:!1,sectionStyle:"style_1",max_visible_categories:12,max_col_in_single_row:3,create_new:null,edit_record:null,settingModalShow:!1}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){this.totalRows=this.categories.length},watch:{$route:function(t,e){this.showCreateModal()}},created:function(){var t=this;this.showCreateModal(),this.$eventBus.$on("categorySaved",(function(e){t.showMessage("success",e),t.getCategories(),t.create_new=null})),this.getCategories()},methods:{getCategories:function(){var t=this;this.isLoading=!0,axios.get(this.$apiUrl+"/categories").then((function(e){t.isLoading=!1;var a=e.data;t.categories=a.data,t.totalRows=t.categories.length}))},deleteCategory:function(t,e){var a=this;this.$swal.fire({title:"Are you Sure?",text:"You want be able to revert this",confirmButtonText:"Yes, Sure",cancelButtonText:"Cancel",icon:"warning",showCancelButton:!0,confirmButtonColor:"#37a279",cancelButtonColor:"#d33"}).then((function(s){if(s.value){a.isLoading=!0;var r={id:e};axios.post(a.$apiUrl+"/categories/delete",r).then((function(e){a.isLoading=!1;var s=e.data;a.categories.splice(t,1),a.showSuccess(s.message)}))}}))},showCreateModal:function(){this.$route.params.create&&(this.create_new=!0)},hideModal:function(){this.create_new=!1,this.edit_record=!1,this.$router.push({path:"/manage_categories"})}}};const _=(0,d.Z)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-heading"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[a("h3",[t._v(t._s(t.__("manage_categories")))])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[a("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/dashboard"}},[t._v(t._s(t.__("dashboard")))])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.__("manage_categories")))])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 order-md-1 order-last"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h4",[t._v(t._s(t.__("categories")))]),t._v(" "),a("span",{staticClass:"pull-right"},[t.$can("category_create")?a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-primary",attrs:{title:t.__("add_new_category")},on:{click:function(e){t.create_new=!0}}},[t._v(t._s(t.__("add_category")))]):t._e()])]),t._v(" "),a("div",{staticClass:"card-body"},[a("b-row",{staticClass:"mb-2"},[a("b-col",{attrs:{md:"3","offset-md":"8"}},[a("h6",{staticClass:"box-title"},[t._v(t._s(t.__("search")))]),t._v(" "),a("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:t.__("search")},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t._v(" "),a("b-col",{staticClass:"text-center",attrs:{md:"1"}},[a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-primary btn_refresh",attrs:{title:t.__("refresh")},on:{click:function(e){return t.getCategories()}}},[a("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])])],1),t._v(" "),a("b-table",{attrs:{items:t.categories,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,bordered:!0,busy:t.isLoading,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-black my-2"},[a("b-spinner",{staticClass:"align-middle"}),t._v(" "),a("strong",[t._v(t._s(t.__("loading"))+"...")])],1)]},proxy:!0},{key:"cell(image)",fn:function(t){return[a("img",{attrs:{src:t.item.image_url,height:"50"}})]}},{key:"cell(status)",fn:function(e){return[1==e.item.status?a("span",{staticClass:"badge bg-success"},[t._v("Activated")]):t._e(),t._v(" "),0==e.item.status?a("span",{staticClass:"badge bg-danger"},[t._v("Deactivated")]):t._e()]}},{key:"cell(actions)",fn:function(e){return[t.$can("category_update")?a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-primary",attrs:{title:t.__("edit")},on:{click:function(a){t.edit_record=e.item}}},[a("i",{staticClass:"fa fa-pencil"})]):t._e(),t._v(" "),t.$can("category_delete")?a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-danger",attrs:{title:t.__("delete")},on:{click:function(a){return t.deleteCategory(e.index,e.item.id)}}},[a("i",{staticClass:"fa fa-trash"})]):t._e()]}}])}),t._v(" "),a("b-row",[a("b-col",{staticClass:"my-1",attrs:{md:"2"}},[a("label",[a("b-form-group",{staticClass:"mb-0",attrs:{label:t.__("per_page"),"label-for":"per-page-select","label-align-sm":"right","label-size":"sm"}},[a("b-form-select",{staticClass:"form-control form-select",attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1)]),t._v(" "),a("b-col",{staticClass:"my-1",attrs:{md:"4","offset-md":"6"}},[a("label",[t._v("Total Records :- "+t._s(t.totalRows)+" ")]),t._v(" "),a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)])])])]),t._v(" "),t.create_new||t.edit_record?a("app-edit-record",{attrs:{record:t.edit_record,categories:t.categories},on:{modalClose:function(e){return t.hideModal()}}}):t._e()],1)}),[],!1,null,null,null).exports}}]);