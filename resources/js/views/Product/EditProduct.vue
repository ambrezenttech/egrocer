<template>
    <div>
        <div class="page-heading">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>{{ __('add_product') }}</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/dashboard">{{ __('dashboard') }}</router-link></li>
                            <li class="breadcrumb-item" aria-current="page"><router-link to="/manage_products">{{ __('manage_products') }}</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <template v-if="id">
                                    {{ __('edit') }}
                                </template>
                                <template v-else>
                                    {{ __('create') }}
                                </template>
                                {{ __('product') }}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-12 order-md-1 order-last">
                    <form ref="my-form" @submit.prevent="saveRecord" @keydown.enter="$event.preventDefault()">
                        <div class="card">
                            <div class="card-header">
                                <h4><template v-if="id">{{ __('edit') }}</template><template v-else>{{ __('create') }}</template> {{ __('product') }}</h4>
                                <span class="pull-right">
                                    <template v-if="$roleSeller == login_user.role.name">
                                         <router-link to="/seller/manage_products" class="btn btn-primary" v-b-tooltip.hover title="Manage Product">{{ __('manage_products') }}</router-link>
                                    </template>
                                    <template v-else>
                                        <router-link to="/manage_products" class="btn btn-primary" v-b-tooltip.hover title="Manage Product">{{ __('manage_products') }}</router-link>
                                    </template>
                                </span>
                            </div>
                            <div class="card-body">

                                <label><span class="text-danger text-xs">*</span> {{__('required_fields')}}</label>
                                <div class="divider"><div class="divider-text">{{__('add_product_form')}}</div></div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <label>{{ __('product_name') }}</label>
                                        <i class="text-danger">*</i>
                                        <input type="text" :disabled="login_user.role_id==1 ? false : true" class="form-control" :placeholder="__('enter_product_name')" v-model="name" v-on:keyup="createSlug">
                                    </div>
                                    <div class="col-md-6">
                                        <label>{{ __('slug') }}</label>
                                        <i class="text-danger">*</i>
                                        <input type="text" :disabled="login_user.role_id==1 ? false : true" class="form-control" :placeholder="__('enter_product_slug')" v-model="slug">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="tax_id" class="control-label">{{ __('tax') }}</label>
                                        <select id="tax_id" :disabled="login_user.role_id==1 ? false : true" name="tax_id" class="form-control form-select"
                                                v-model="tax_id">
                                            <option value="0">Select Tax</option>
                                            <option v-for="tax in taxes" :value="tax.id">{{ tax.title }}</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="tags" class="control-label" >{{ __('tags') }}  ( {{__('these_tags_help_you_in_search_result')}} )</label>
                                            <b-form-tags
                                                input-id="tags"
                                                v-model="tags"
                                                tag-variant="primary"
                                                separator=" ,;"
                                                :placeholder="__('enter_product_tag')"
                                                :disabled="login_user.role_id==1 ? false : true"
                                                no-add-on-enter
                                            ></b-form-tags>

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>{{ __('brands') }}</label>
                                            <multiselect v-model="brand"
                                                         :options="brands"
                                                         :placeholder="__('select_and_search_brands')"
                                                         label="name"
                                                         :disabled="login_user.role_id==1? false : true"
                                                         track-by="name" required>
                                                <template slot="singleLabel" slot-scope="props">
                                                    <span class="option__desc">
                                                        <span class="option__title">{{ props.option.name }}</span>
                                                    </span>
                                                </template>
                                                <template slot="option" slot-scope="props">
                                                    <div class="option__desc">
                                                        <span class="option__small">
                                                            <img style="height: 25px; " class="option__image" :src="props.option.image_url" alt="Brand Logo">
                                                        </span>
                                                        <span class="option__title">{{ props.option.name }}</span>
                                                    </div>
                                                </template>
                                            </multiselect>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>{{ __('description') }} </label>
                                            <editor
                                                :placeholder="__('enter_product_description')"
                                                v-model="description"
                                                :api-key="this.$editorKey"
                                                :disabled="login_user.role_id==1 ? false : true"
                                                :init="{
                                                    height:400,
                                                    plugins: this.$editorPlugins ,
                                                    toolbar: this.$editorToolbar,
                                                    font_size_formats: this.$editorFont_size_formats,
                                                   }"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>{{ __('main_image')}} <i class="text-danger">*</i></label>
                                            <input :disabled="login_user.role_id==1 ? false : true" type="file" name="image" accept="image/*" ref="file_image" v-on:change="fileImage" class="file-input">

                                            <div :disabled="login_user.role_id==1 ? false : true" class="file-input-div bg-gray-100" @click="$refs.file_image.click()" @drop="dropFile" @dragover="$dragoverFile" @dragleave="$dragleaveFile" >
                                                <template v-if="main_image_name == ''" :disabled="login_user.role_id==1 ? false : true">
                                                    <label><i class="fa fa-cloud-upload fa-2x"></i></label>
                                                    <label>{{ __('drop_files_here_or_click_to_upload') }}</label>
                                                </template>
                                                <template v-else>
                                                    <label>Selected file name:- {{ main_image_name }}</label>
                                                </template>
                                            </div>
                                            <span class="text text-primary"> *Please choose square image of larger than 350px*350px &amp; smaller than 550px*550px.</span>

                                            <div class="row" v-if="main_image_path">
                                                <div class="col-md-4">
                                                    <img class="custom-image" :src="main_image_path" title='Main Image' alt='Main Image'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h4>Product Variant</h4>
                            </div>
                            <div class="card-body">
                                <div class="col-md-12">
                                    <div class="row"> <div class="col-md-4">
                                        <div class="form-group">
                                            <label>{{ __('price') }} ( {{ $currency }} )</label> <i class="text-danger">*</i>
                                            <input :disabled="login_user.role_id==1?true:false" type="number" step="any" min="0" class="form-control" placeholder="0.00"
                                                    v-model="price">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>{{__('discounted_price')}} ( {{ $currency }} )</label>
                                            <input :disabled="login_user.role_id==1?true:false" type="number" step="any" min="0" class="form-control" placeholder="0.00"
                                                    v-model="discounted_price">
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="card">
                            <div class="card-header">
                                <h4>{{__('product_settings')}}</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>{{ __('category') }} <i class="text-danger">*</i></label>

                                            <select class="form-control form-select" v-model="category_id"
                                                    v-html="categoryOptions" :disabled="login_user.role_id==1 ? false : true">
                                            </select>
                                        </div>
                                    </div>
                              

                                    <div class="col-md-4">
                                        <div class="row">
                                            <div class="col-md-5">
                                                <div class="form-group">
                                                    <label>{{ __('is_returnable') }}</label><br>
                                                    <b-form-radio-group
                                                        v-model="return_status"
                                                        :options="[
                                                                { text: ' No', 'value': 0 },
                                                                { text: ' Yes', 'value': 1 },
                                                            ]"
                                                        buttons
                                                        button-variant="outline-primary"
                                                        required
                                                        :disabled="login_user.role_id==1 ? false : true"
                                                    ></b-form-radio-group>
                                                </div>
                                            </div>
                                            <div class="col-md-7" id="return_day" v-if="return_status == 1">
                                                <div class="form-group">
                                                    <label for="return_day">{{ __('max_return_days') }} </label>
                                                    <input type="number" step="any" min="0" class="form-control" :placeholder="__('number_of_days_to_return')" v-model="return_days">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-5">
                                                <div class="form-group">
                                                    <label>{{ __('is_cancelable') }}</label><br>
                                                    <b-form-radio-group
                                                        v-model="cancelable_status"
                                                        :options="[
                                                                        { text: ' No', 'value': 0 },
                                                                        { text: ' Yes', 'value': 1 },
                                                                    ]"
                                                        buttons
                                                        button-variant="outline-primary"
                                                        :disabled="login_user.role_id==1 ? false : true"
                                                    ></b-form-radio-group>
                                                </div>
                                            </div>
                                            <div class="col-md-7" id="till-status" v-if="cancelable_status===1">
                                        <div class="form-group">
                                            <label for="till_status">{{ __('till_which_status') }} </label> <i class="text-danger">*</i>
                                            <br>
                                            <select id="till_status" class="form-control form-select" v-model="till_status">
                                                <option value="">{{ __('select_order_statue') }}</option>
                                                <option v-for="status in order_status" :value="status.id">{{ status.status }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>{{__('is_cod_allowed')}}</label><br>
                                                    <b-form-radio-group
                                                        v-model="cod_allowed_status"
                                                        :options="[
                                                                { text: ' No', 'value': 0 },
                                                                { text: ' Yes', 'value': 1 },
                                                            ]"
                                                        buttons
                                                        :disabled="login_user.role_id==1 ? false : true"
                                                        button-variant="outline-primary"
                                                    ></b-form-radio-group>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>{{ __('tax_included_in_prices') }} </label><br>
                                                    <b-form-radio-group
                                                        v-model="tax_included_in_price"
                                                        :options="[
                                                                { text: ' No', 'value': 0 },
                                                                { text: ' Yes', 'value': 1 },
                                                            ]"
                                                        buttons
                                                        :disabled="login_user.role_id==1 ? false : true"
                                                        button-variant="outline-primary"
                                                    ></b-form-radio-group>
                                                </div>
                                            </div>
                                            <!-- <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>{{ __('total_allowed_quantity') }}  </label>
                                                    <input type="number" :disabled="login_user.role_id==1 ? false : true" min="0" class="form-control" v-model="max_allowed_quantity">
                                                    <span class="text text-primary">{{ __('keep_blank_if_no_such_limit') }}</span>
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <template v-if="this.$roleSeller == login_user.role.name">
                                            <input type="hidden" v-model="is_approved" value="0" :disabled="login_user.role_id==1 ? false : true">
                                        </template>
                                        <template v-else>
                                            <div class="form-group">
                                                <label class="control-label">{{ __('product_status') }}</label><br>
                                                <div id="status" class="btn-group">
                                                    <label class="btn btn-primary" data-toggle-class="btn-primary"
                                                           data-toggle-passive-class="btn-default">
                                                        <input type="radio" v-model="is_approved" :disabled="login_user.role_id==1 ? false : true" value="1"> Approved
                                                    </label>
                                                    <label class="btn btn-danger" data-toggle-class="btn-danger"
                                                           data-toggle-passive-class="btn-default">
                                                        <input type="radio" v-model="is_approved" :disabled="login_user.role_id==1 ? false : true" value="2">
                                                        Not-Approved
                                                    </label>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <b-button type="submit"  @keydown.enter.native="saveRecord" variant="primary" :disabled="isLoading"> {{ __('save') }}
                                    <b-spinner v-if="isLoading" small label="Spinning"></b-spinner>
                                </b-button>
                                <button type="reset" class="btn btn-danger">{{ __('clear') }}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import InputTag from 'vue-input-tag';
import axios from "axios";
import Multiselect from 'vue-multiselect';
import Editor from '@tinymce/tinymce-vue';
import Auth from '../../Auth.js';
export default {
    // register the component
    components: { InputTag, Multiselect, 'editor': Editor },
    data: function () {
        return {
            login_user: Auth.user,
            isLoading:false,
            isCommon:false,

            name: '',
            slug: '',
            seller_id: 0,
            tags:[],
            brand:null,
            tax_id: 0,
            type: 'packet',
            category_id: '',
            product_type: '',
            manufacturer: '',
            made_in: '',

            return_status: 0,
            return_days: 0,
            cancelable_status: 0,
            till_status: "",
            cod_allowed_status: 0,
            max_allowed_quantity: 0,
            description: '',
            is_approved: 1,
            loose_stock: 0,
            loose_stock_unit_id: "",
            status: 1,
            is_unlimited_stock:0,
            tax_included_in_price:0,
            pincode_ids_exc: null,

            sellers: null,
            taxes: null,
            units: [],
            brands: [],
            countries: [],

            categories: null,
            order_status: null,

            inputs: [{'name': '','packet_status':'','packet_stock_unit_id':''}],

            image: null,
            main_image_path:"",
            main_image_name:"",


            other_images: null,
            images:[],
            variantImages : {},
            id: null,
            record: null,
            categoryOptions: "<option value=\"\">--Select Category--</option>",
            deleteImageIds:[],
            loggedUser: Auth.user,
        }
    },
    created: function () {
        this.id = this.$route.params.id;
        this.getCategories();
        // this.getSellers();
        // this.getTaxes();
        // this.getUnits();
        // this.getBrands();
        this.getCountries();
        this.getOrderStatus();
        if(this.$roleSeller == this.login_user.role.name){
            this.seller_id = this.login_user.seller.id;
            this.is_approved = 0;
            this.getSellerCategories();
        }
        if (this.id) {
            this.getProduct();
        }
    },
    methods: {
        createSlug(){
            if (this.name !== ""){
                this.slug = this.name.toLowerCase()
                    .replace(/[^\w ]+/g, '')
                    .replace(/ +/g, '-');
            }
        },
       
     
        dropFile(event) {
            event.preventDefault();
            this.$refs.file_image.files = event.dataTransfer.files;
            this.fileImage(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },

        fileImage() {
            this.image = this.$refs.file_image.files[0];
            this.main_image_path = URL.createObjectURL(this.image);
            this.main_image_name = this.image.name;
        },
     
        removeOtherImage(index){
            this.images.splice(index, 1);
        },

        otherImage() {
            this.images = [];
            for (var i = 0; i < this.$refs.file_other_images.files.length; i++) {
                let image = {};
                let file = this.$refs.file_other_images.files[i];
                image.url = URL.createObjectURL(file);
                image.name = file.name;
                this.images.push(image);
            }
        },


        getSellerCategories(){
            if (this.seller_id !== 0 && this.seller_id !== ""){
                this.isLoading = true;
                let param = {
                    "seller_id": this.seller_id
                }

                /*axios.get(this.$apiUrl + '/categories/seller_categories',{
                    params: param
                }).then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.categories = data.data
                });*/

                axios.get(this.$apiUrl + '/categories/seller_categories',{
                    params: param
                }).then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    //this.categories = data.data
                    this.categoryOptions = `<option value="">--Select Category--</option>` + data
                    //console.log("categories : ", this.categoryOptions);
                });
            }
        },
        getCategories() {
            this.isLoading = true
            //axios.get(this.$apiUrl + '/categories')
            axios.get(this.$apiUrl + '/categories/options')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    //this.categories = data.data
                    this.categoryOptions = `<option value="">--Select Category--</option>` + data
                    //console.log("categories : ", this.categoryOptions);
                });
        },
        getSellers() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/sellers')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.sellers = data.data
                    //console.log("sellers : ", this.sellers);
                });
        },
        getTaxes() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/products/taxes')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.taxes = data.data
                    //console.log("taxes : ", this.taxes);
                });
        },
        getUnits() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/units/get')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.units = data.data
                    //console.log("units : ", this.units);
                });
        },
        getBrands() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/products/brands/get')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.brands = data.data
                    // console.log("brands : ", this.brands);
                });
        },
        getCountries() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/countries')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.countries = data.data
                    //console.log("countries : ", this.countries);
                });
        },

        getOrderStatus() {
            this.isLoading = true
                axios.get(this.$apiUrl + '/order_statuses').then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.order_status = data.data
                    //console.log("order_status =>",this.order_status);
                });
        },

        getProduct() {
            this.isLoading = true;

            axios.get(this.$apiUrl + '/products/edit/' + this.id)
                .then((response) => {
                    let data = response.data;
                    if (data.status === 1) {
                        //console.log("data=>",response.data);
                        this.record = data.data
                        this.isCommon = this.record.is_common==1?true:false;
                        console.log(this.record.is_common)

                        //Fill Data
                        this.name = this.record.name;
                        this.slug = this.record.slug;
                        this.seller_id = this.record.seller_id;
                        this.getSellerCategories();

                        if(this.record.tags) {
                            this.tags = this.record.tags.split(",");
                        }

                        this.tax_id = this.record.tax_id;

                        this.brand = this.brands.find((item) => {
                            return item.id === this.record.brand_id;
                        });

                        this.type = this.record.type;

                        this.category_id = this.record.category_id;

                        this.product_type = this.record.indicator ?? "";
                        this.manufacturer = this.record.manufacturer;


                        this.made_in = this.countries.find((item) => {
                            return item.id == this.record.made_in;
                        });

                        this.tax_included_in_price = this.record.tax_included_in_price;

                        this.return_status = this.record.return_status;
                        this.return_days = this.record.return_days;
                        this.cancelable_status = this.record.cancelable_status;

                        this.till_status = this.record.till_status;
                        this.cod_allowed_status = this.record.cod_allowed;
                        this.max_allowed_quantity = this.record.total_allowed_quantity;
                        this.description = this.record.description;
                        this.is_approved = this.record.is_approved;

                        this.status = this.record.status;
                        this.is_unlimited_stock = this.record.is_unlimited_stock;
                        this.main_image_path = this.$storageUrl + this.record.image;
                        this.other_images = this.record.images;

                        let vm = this;
                        
                     
                        //console.log('input array');
                        //console.log(this.inputs);

                    
                    } else {
                        this.showError(data.message);
                        setTimeout(() => {
                            this.$router.back();
                        }, 1000);
                    }
                }).catch(error => {
                this.isLoading = false;
                if (error.request.statusText) {
                    this.showError(error.request.statusText);
                }else if (error.message) {
                    this.showError(error.message);
                } else {
                    this.showError("Something went wrong!");
                }
            });
        },

        saveRecord: function () {
            this.isLoading = true;
            let vm = this;
            let formData = new FormData();
            if (this.id) {
                formData.append('id', this.id);
                formData.append('deleteImageIds', JSON.stringify(this.deleteImageIds));
            }
            formData.append('name', this.name);
            formData.append('slug', this.slug);
            formData.append('seller_id', this.seller_id);

            formData.append('price', this.price ?? 0);
            formData.append('discounted_price', this.discounted_price ?? 0 );
            formData.append('tags', this.tags);
            formData.append('tax_id', this.tax_id);
            formData.append('brand_id', this.brand ? this.brand.id : 0);
            formData.append('description', this.description);
            formData.append('type', this.type);
            formData.append('is_unlimited_stock', this.is_unlimited_stock);

            formData.append('status', (this.status != undefined) ? this.status : 0);

            formData.append('category_id', this.category_id);
            formData.append('product_type', this.product_type);
            formData.append('shipping_type', this.shipping_type);

            formData.append('pincode_ids_exc', this.pincode_ids_exc);

            formData.append('return_status', this.return_status);
            formData.append('return_days', this.return_days);
            formData.append('cancelable_status', this.cancelable_status);
            formData.append('till_status', this.till_status);
            formData.append('cod_allowed_status', this.cod_allowed_status);
            formData.append('max_allowed_quantity', this.max_allowed_quantity);

            formData.append('is_approved', this.is_approved);
            formData.append('is_common', this.isCommon?1:0);
            formData.append('tax_included_in_price', this.tax_included_in_price);
            formData.append('image', this.image);
            // Other Images
         
            let url = this.$apiUrl + '/products/save';
            if (this.id) {
                url = this.$apiUrl + '/products/update';
            }

            axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                let data = res.data;

                if (data.status === 1) {
                    //this.showSuccess(data.message);
                    this.showMessage("success", data.message);
                    setTimeout(
                        function () {
                            vm.$swal.close();
                            vm.isLoading = false;
                            console.log("loggedUser : ",vm.loggedUser)
                            if(vm.loggedUser?.role?.name==="Seller"){
                                vm.$router.push({path: '/seller/manage_products'});
                            }else{
                                vm.$router.push({path: '/manage_products'});
                            }
                            //vm.$router.push({path: '/manage_products'});

                        }, 2000);
                } else {
                    vm.showError(data.message);
                    vm.isLoading = false;
                }
            }).catch(error => {
                vm.isLoading = false;
                this.showError("Something went wrong!");
            });
        },
        deleteImage(index, id, productImage, key = ""){
            this.$swal.fire({
                title: "Are you Sure?",
                text: "You want be able to revert this",
                confirmButtonText: "Yes, Sure",
                cancelButtonText: "Cancel",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#37a279',
                cancelButtonColor: '#d33',
            }).then(result => {
                if (result.value) {
                    this.deleteImageIds.push(id);
                    if(productImage){
                        this.other_images.splice(index, 1);
                    }else{
                        if(this.type === 'packet' ){
                            this.inputs[key].images.splice(index, 1);
                        }else{
                            this.inputs[key].loose_images.splice(index, 1);
                        }
                    }
                    //console.log("this.deleteImageIds =>", this.deleteImageIds);
                }
            });
        },
        changeUnits: function () {
            console.log('changes');
            /*if(this.type === 'packet' ){
                for(let i=0; i< this.inputs.length;i++) {
                    console.log('changes i: ' + i);
                    if(i>0) {
                        this.inputs[i].packet_measurement_unit_id = this.inputs[0].packet_measurement_unit_id;
                    }
                    console.log('changes after: ' + this.inputs[i].packet_measurement_unit_id);
                }

            }*/
        }
    },

};
</script>
<style scoped>
@import "../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css";
</style>