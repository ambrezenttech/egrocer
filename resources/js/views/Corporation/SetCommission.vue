<template>
    <div>
        <div class="page-heading">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>Commission</h3>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-12 order-md-1 order-last">
                <form ref="my-form" @submit.prevent="saveRecord">
                    <div class="card">
 
                        <div class="card-body">
                          
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <div class="form-group">
                                        <label
                                            >Commission %
                                            <i class="text-danger">*</i></label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="setting.commission"
                                            placeholder="Enter commission."
                                        />
                                    </div>
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
</template>


<script>
import axios from "axios";
import Auth from '../../Auth.js';
export default {
    data : function(){
        return {
            isLoading: false,
          
            setting : {
                commission: "0",
            }
        };
    },
    created: function () {
        this.getCorporationData();
    },
    methods: {
        getCorporationData: function (){
            this.isLoading = true
            axios.get(this.$apiUrl + '/corporation/')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                }).catch(error => {
                this.isLoading = false;
                if (error?.request?.statusText) {
                    this.showError(error.request.statusText);
                }else if (error.message) {
                    this.showError(error.message);
                } else {
                    this.showError(__('something_went_wrong'));
                }
            });
        },
        saveRecord: function(){
            let vm = this;
            this.isLoading = true;
            axios.post(this.$apiUrl + '/corporation/set_commision', this.setting).then(res => {
                let data = res.data;
                vm.isLoading = false;
                if (data.status === 1) {
                    //vm.showSuccess(data.message);
                    vm.showMessage("success", data.message);
                }else{
                    vm.showError(data.message); 
                }
            }).catch(error => {
                vm.isLoading = false;
                if (error.request.statusText) {
                    this.showError(error.request.statusText);
                }else if (error.message) {
                    this.showError(error.message);
                } else {
                    this.showError(__('something_went_wrong'));
                }
            });
        }
    },
};
</script>
