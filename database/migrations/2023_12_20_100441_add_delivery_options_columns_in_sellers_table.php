<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDeliveryOptionsColumnsInSellersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sellers', function (Blueprint $table) {

            $table->integer('delivery_method')->nullable()->default(0);
            $table->tinyInteger('shop_own_free_enabled')->default(0);
            $table->tinyInteger('shop_own_paid_enabled')->default(0);
            $table->integer('shop_own_free_upToKm')->nullable()->default(0);
            $table->integer('shop_own_paid_perKm')->nullable()->default(0);


            $table->tinyInteger('quick_delivery_enabled')->default(0);
            $table->tinyInteger('quick_delivery_free_enabled')->default(0);
            $table->tinyInteger('quick_delivery_paid_enabled')->default(0);
            $table->integer('quick_delivery_free_upToKm')->nullable()->default(0);
            $table->integer('quick_delivery_paid_perKm')->nullable()->default(0);

            $table->tinyInteger('schedule_delivery_enabled')->default(0);
            $table->tinyInteger('schedule_delivery_free_enabled')->default(0);
            $table->tinyInteger('schedule_delivery_paid_enabled')->default(0);
            $table->integer('schedule_delivery_free_upToKm')->nullable()->default(0);
            $table->integer('schedule_delivery_paid_perKm')->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sellers', function (Blueprint $table) {
            $table->dropColumn('delivery_method');
            $table->dropColumn('shop_own_free_enabled');
            $table->dropColumn('shop_own_paid_enabled');
            $table->dropColumn('shop_own_free_upToKm');
            $table->dropColumn('shop_own_paid_perKm');

            $table->dropColumn('quick_delivery_enabled');
            $table->dropColumn('quick_delivery_free_enabled');
            $table->dropColumn('quick_delivery_paid_enabled');
            $table->dropColumn('quick_delivery_free_upToKm');
            $table->dropColumn('quick_delivery_paid_perKm');

            $table->dropColumn('schedule_delivery_enabled');
            $table->dropColumn('schedule_delivery_free_enabled');
            $table->dropColumn('schedule_delivery_paid_enabled');
            $table->dropColumn('schedule_delivery_free_upToKm');
            $table->dropColumn('schedule_delivery_paid_perKm');
        });
    }
}
