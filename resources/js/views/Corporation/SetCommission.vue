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
                                            v-model="commission"
                                            placeholder="Enter commission."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
