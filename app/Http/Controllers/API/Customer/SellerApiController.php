<?php

namespace App\Http\Controllers\API\Customer;

use App\Models\Seller;
use Illuminate\Http\Request;
use App\Helpers\CommonHelper;
use App\Http\Controllers\Controller;

class SellerApiController extends Controller
{
    public function fetchSellers(Request $request){
        $filterStatus = $request->filterStatus;
        $sellers = Seller::apply($request);
        if(isset($filterStatus) && $filterStatus != ""){
            $sellers = $sellers->where("status",$filterStatus);
        }
        return CommonHelper::responseWithData($sellers, count($sellers));
    }

}