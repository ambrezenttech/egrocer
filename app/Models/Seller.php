<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Seller extends Model
{
    //use HasFactory,SoftDeletes;
    use HasFactory;
    protected $hidden = [];
    //protected $appends = ['logo_url'];
    protected $appends = ['logo_url','national_identity_card_url','address_proof_url'];

    public static $statusRegistered = 0;
    public static $statusActive = 1;
    public static $statusRejected = 2;
    public static $statusDeactivated = 3;
    public static $statusRemoved = 7;

    public static $Registered = "Registered";
    public static $Active = "Active";
    public static $Rejected = "Rejected";
    public static $Deactivated = "Deactivated";
    public static $Removed = "Removed";



    public function getLogoUrlAttribute(){
        if($this->logo){
            $logo_url = asset('storage/'.$this->logo);
            return $logo_url;
        }
        return $this->logo;
    }

    public function getNationalIdentityCardUrlAttribute(){
        if($this->national_identity_card){
            $national_identity_card_url = asset('storage/'.$this->national_identity_card);
            return $national_identity_card_url;
        }
        return $this->national_identity_card;
    }

    public function getAddressProofUrlAttribute(){
        if($this->address_proof){
            $address_proof_url = asset('storage/'.$this->address_proof);
            return $address_proof_url;
        }
        return $this->address_proof;
    }

    public function admin(){
        return $this->belongsTo(Admin::class,'admin_id','id');
    }

    public function sellerProducts(){

        return $this->hasMany(SellerProduct::class,'seller_id','id');
    }
        
    public static function apply(Request $filters)
    {
        $seller = (new Seller)->newQuery();;

        if ($filters->has('lat') && $filters->has('long')) {
            $latitude = $filters->lat;
            $longitude = $filters->long;
            $seller = DB::table('sellers')
                ->select(
                    'sellers.*',
                    DB::raw('(6371 * acos(cos(radians(' . $latitude . ')) * cos(radians(latitude)) * cos(radians(`longitude`) - radians(' . $longitude . ')) + sin(radians(' . $latitude . ')) * sin(radians(latitude)))) AS distance')
                )
                ->orderBy('distance', 'asc');
        }

        // Search for a seller based on their name.
        if ($filters->has('name')) {
            $seller->where('name', 'like', '%' .  $filters->name . '%');
        }
        if ($filters->has('quick_delivery')) {
            $seller->where('quick_delivery_enabled', $filters->quick_delivery);
        }

        if ($filters->has('schedule_delivery')) {
            $seller->where('schedule_delivery_enabled', $filters->schedule_delivery);
        }

        if ($filters->has('mixed')) {
            $seller->where('mixed', $filters->mixed);
        }

        if ($filters->has('fold')) {
            $seller->where('fold', $filters->fold);
        }

        if ($filters->has('hanger')) {
            $seller->where('hanger', $filters->hanger);
        }

        if ($filters->has('individual')) {
            $seller->where('individual', $filters->individual);
        }

        if ($filters->has('fold')) {
            $seller->where('fold', $filters->input('fold'));
        }

        

        // Get the results and return them.
        return $seller->orderBy('id', 'DESC')->get();
    }
}
