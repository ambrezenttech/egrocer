<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSellerProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seller_products', function (Blueprint $table) {
            $table->id();
            $table->integer('seller_id')->nullable()->default(null);
            $table->integer('product_id')->nullable()->default(null);
            $table->integer('product_variant_id')->nullable()->default(null);
            $table->float('price', 11, 2)->nullable()->default(null);
            $table->float('discounted_price', 11, 2)->default(0)->nullable()->default(null);
            $table->tinyInteger('enabled')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seller_products');
    }
}
