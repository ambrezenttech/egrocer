<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddServicesColumnInSellersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sellers', function (Blueprint $table) {
            $table->tinyInteger('fold')->default(0);
            $table->tinyInteger('hanger')->default(0);
            $table->tinyInteger('individual')->default(0);
            $table->tinyInteger('mixed')->default(0);
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
            $table->dropColumn('fold');
            $table->dropColumn('hanger');
            $table->dropColumn('individual');
            $table->dropColumn('mixed');
        });
    }
}
