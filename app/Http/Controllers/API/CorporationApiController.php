<?php

namespace App\Http\Controllers\API;

use App\Models\Setting;
use Illuminate\Http\Request;
use App\Helpers\CommonHelper;
use App\Models\OrderStatusList;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CorporationApiController extends Controller
{
    public function index()
    {
        $user_id = auth()->user()->id;
        $user_type = 1;
        $setting = CommonHelper::getMailSetting($user_type,$user_id);
        $setting = $setting->makeHidden(['user_id','user_type','created_at','updated_at']);
        return CommonHelper::responseWithData($setting);
    }
   
    public function setCommision(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'commission' => 'required|integer',
        ]);
        if ($validator->fails()) {
            return CommonHelper::responseError($validator->errors()->first());
        }
        $setting = new Setting();
        $setting->variable = 'corporation_commission';
        $setting->value = $request->commission;
        $setting->save();
        return CommonHelper::responseSuccess("Settings Saved Successfully!");
    }
}
