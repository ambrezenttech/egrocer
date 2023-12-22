<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SellerProduct extends Model
{
    use HasFactory;
    public $timestamps = false;


    public function seller(){
        return $this->belongsTo(Seller::class,'seller_id','id');
    }


    public function product(){
        return $this->belongsTo(Product::class,'product_id','id');
    }

}
