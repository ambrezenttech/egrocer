"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8956],{8956:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var s=a(9669),r=a.n(s);const o={data:function(){return{isLoading:!1,categories:[],products:[],popup_enabled:0,popup_always_show_home:0,popup_type:"default",popup_type_id:"",image:"",image_url:"",popup_url:""}},created:function(){this.getCategories(),this.getProducts(),this.getPopupData()},methods:{getPopupData:function(){var e=this;r().get(this.$apiUrl+"/popup").then((function(t){var a,s,r;t.data.data&&(e.record=t.data.data,e.popup_enabled=null!==(a=e.record.popup_enabled)&&void 0!==a?a:0,e.popup_always_show_home=null!==(s=e.record.popup_always_show_home)&&void 0!==s?s:0,e.popup_type=e.record.popup_type,e.popup_type_id=e.record.popup_type_id,e.popup_url=e.record.popup_url,e.image_url=null!==(r=e.record.popup_image)&&void 0!==r?r:"",console.log("this.record =>",e.record),e.record.map((function(t,a){"0"===t.value||"1"===t.value?e.firebase[t.variable]="0"===t.value?0:1:e.firebase[t.variable]=t.value})))})).catch((function(t){t.request.statusText?e.showError(t.request.statusText):t.message?e.showError(t.message):e.showError(__("something_went_wrong"))}))},dropFile:function(e){e.preventDefault(),this.$refs.file_image.files=e.dataTransfer.files,this.handleFileUpload(),e.currentTarget.classList.add("bg-gray-100"),e.currentTarget.classList.remove("bg-green-300")},handleFileUpload:function(){this.image=this.$refs.file_image.files[0],this.image_url=URL.createObjectURL(this.image)},getCategories:function(){var e=this;this.isLoading=!0,r().get(this.$apiUrl+"/categories/active").then((function(t){e.isLoading=!1,e.categories=t.data.data})).catch((function(t){t.request.statusText?e.showError(t.request.statusText):t.message?e.showError(t.message):e.showError(__("something_went_wrong")),e.isLoading=!1}))},getProducts:function(){var e=this;this.isLoading=!0,r().get(this.$apiUrl+"/products/active").then((function(t){e.isLoading=!1,e.products=t.data.data})).catch((function(t){t.request.statusText?e.showError(t.request.statusText):t.message?e.showError(t.message):e.showError(__("something_went_wrong")),e.isLoading=!1}))},saveRecord:function(){var e=this;this.isLoading=!0;var t=new FormData;t.append("popup_enabled",this.popup_enabled),t.append("popup_always_show_home",this.popup_always_show_home),t.append("popup_type",this.popup_type),t.append("popup_type_id",this.popup_type_id),t.append("popup_image",this.image),t.append("popup_url",this.popup_url);var a=this.$apiUrl+"/popup/save",s=this;r().post(a,t).then((function(t){var a=t.data;1===a.status?(e.showMessage("success",a.message),setTimeout((function(){s.$swal.close(),s.$router.push({path:"/popup"}),s.getPopupData(),s.isLoading=!1}),1e3)):(s.showError(a.message),s.isLoading=!1)})).catch((function(t){t.request.statusText?e.showError(t.request.statusText):t.message?e.showError(t.message):e.showError(__("something_went_wrong")),s.isLoading=!1}))}}};const i=(0,a(1900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-heading"},[a("div",{staticClass:"page-title"},[a("div",{staticClass:"row"},[e._m(0),e._v(" "),a("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[a("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/dashboard"}},[e._v(e._s(e.__("dashboard")))])],1),e._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v("Popup Offer")])])])])])])]),e._v(" "),a("section",{staticClass:"section"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 order-md-1 order-last"},[a("form",{attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.saveRecord.apply(null,arguments)}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h4",{staticClass:"card-title"},[e._v("Popup Offer & Keys")]),e._v(" "),a("span",{staticClass:"pull-right"},[a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-primary btn_refresh",attrs:{type:"button",title:e.__("refresh")},on:{click:function(t){return e.getPopupData()}}},[a("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])])]),e._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"form-group col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[e._v("Popup Offer Enabled (ON /OFF) ")]),a("br"),e._v(" "),a("b-form-radio-group",{attrs:{options:[{text:" ON",value:1},{text:" OFF",value:0}],buttons:"","button-variant":"outline-primary",required:""},model:{value:e.popup_enabled,callback:function(t){e.popup_enabled=t},expression:"popup_enabled"}})],1)]),e._v(" "),a("div",{staticClass:"form-group col-md-4"},[a("label",[e._v("Type")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.popup_type,expression:"popup_type"}],staticClass:"form-control form-select",attrs:{required:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.popup_type=t.target.multiple?a:a[0]},function(t){e.popup_type_id=""}]}},[a("option",{attrs:{value:"default"}},[e._v("Default")]),e._v(" "),a("option",{attrs:{value:"category"}},[e._v("Category")]),e._v(" "),a("option",{attrs:{value:"product"}},[e._v("Product")]),e._v(" "),a("option",{attrs:{value:"popup_url"}},[e._v("Popup Url")])])]),e._v(" "),a("div",{staticClass:"col-md-12"},["category"==e.popup_type?a("div",{staticClass:"form-group"},[a("label",[e._v("Category")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.popup_type_id,expression:"popup_type_id"}],staticClass:"form-control form-select",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.popup_type_id=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select Category")]),e._v(" "),e._l(e.categories,(function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)]):e._e(),e._v(" "),"product"==e.popup_type?a("div",{staticClass:"form-group"},[a("label",[e._v("Products")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.popup_type_id,expression:"popup_type_id"}],staticClass:"form-control form-select",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.popup_type_id=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select Procduct")]),e._v(" "),e._l(e.products,(function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)]):e._e(),e._v(" "),"popup_url"==e.popup_type?a("div",{staticClass:"form-group"},[a("label",[e._v("Link")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.popup_url,expression:"popup_url"}],staticClass:"form-control",attrs:{type:"url",placeholder:"Enter Link"},domProps:{value:e.popup_url},on:{input:function(t){t.target.composing||(e.popup_url=t.target.value)}}})]):e._e()]),e._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Image")]),e._v(" "),a("p",{staticClass:"text-muted"},[e._v("Please choose square image of larger than 500px*500px.")]),e._v(" "),a("input",{ref:"file_image",staticClass:"file-input",attrs:{type:"file",name:"slider_image",accept:"image/*"},on:{change:e.handleFileUpload}}),e._v(" "),a("div",{staticClass:"file-input-div bg-gray-100",on:{click:function(t){return e.$refs.file_image.click()},drop:e.dropFile,dragover:e.$dragoverFile,dragleave:e.$dragleaveFile}},[e.image&&""!==e.image.name?[a("label",[e._v("Selected file name:- "+e._s(e.image.name))])]:[e._m(1),e._v(" "),a("label",[e._v(e._s(e.__("drop_files_here_or_click_to_upload")))])]],2),e._v(" "),e.image_url?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"img-thumbnail custom-image",attrs:{src:e.image_url,title:"Popup Offer Image",alt:"Popup Offer Image"}})])]):e._e()])])])]),e._v(" "),a("div",{staticClass:"card-footer"},[a("b-button",{attrs:{type:"submit",variant:"primary",disabled:e.isLoading}},[e._v("Save\n                            "),e.isLoading?a("b-spinner",{attrs:{small:"",label:"Spinning"}}):e._e()],1)],1)])])])])])])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[a("h3",[e._v("Popup Offer")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("i",{staticClass:"fa fa-cloud-upload fa-2x"})])}],!1,null,null,null).exports}}]);