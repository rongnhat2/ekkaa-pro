<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

use App\Repositories\Manager\OrderRepository;
use App\Models\Order;
use App\Models\OrderDetail;

use App\Repositories\Manager\ProductRepository;
use App\Models\Product;

use App\Repositories\Manager\VoucherRepository;
use App\Models\Voucher;

use Carbon\Carbon;
use Session;
use Hash;
use DB;

class OrderController extends Controller
{

    protected $order;
    protected $voucher;

    public function __construct(Order $order, OrderDetail $order_detail, Product $product, Voucher $voucher){
        $this->order             = new OrderRepository($order);
        $this->order_detail      = new OrderRepository($order_detail);

        $this->product           = new ProductRepository($product);
        $this->voucher             = new VoucherRepository($voucher);
    }
    public function get(Request $request, $id){
        $data = $this->order_detail->get_sub_order($id);
        return $this->order_detail->send_response(200, $data, null);
    }
    public function create(Request $request){


        list( $user_id, $token) = explode('$', $request->cookie('_token_'), 2);
        $data_login     = $request->data_login;

        $data_item      = json_decode($request->data_item)->data;
        $data_quantity  = explode("-",$request->data_quantity);
        $data_prices    = $request->data_prices;
        
        $data_username  = $request->data_username;
        $data_address   = $request->data_address;
        $data_telephone = $request->data_telephone;
        $data_email     = $request->data_email;
        $data_payment   = $request->data_payment;

        $data_order_create = [
            "customer_id"           => $user_id,
            "status_customer"       => $data_login,
            "subtotal"              => $data_prices,
            "discount"              => 0,
            
            "total"                 => $data_prices,
            "username"              => $data_username,
            "email"                 => $data_email,
            "address"               => $data_address,
            "telephone"             => $data_telephone,
            "payment"               => $data_payment,
        ];

        if ($request->data_voucher != 0) {
            $voucher = $this->voucher->get_one($request->data_voucher); 
            if ($voucher) {
                $data_order_create["coupon"] = $voucher[0]->discount;
            }
        }
        $order_create = $this->order->create($data_order_create);

        foreach ($data_item as $key => $value) {
            $item = json_decode($value);
            $item_id = $item->id;
            $item_size = $item->size;
            $item_color = $item->color;

            $size_item =  DB::table('product_detail')
                ->select("product_detail.*", "color.name as color_name", "size.name as size_name")
                ->leftjoin("color", "color.id", "=", "color_id")
                ->leftjoin("size", "size.id", "=", "size_id")
                ->where([
                    ["product_detail.product_id", "=", $item_id],
                    ["size.name", "=", $item_size],
                    ["color.name", "=", $item_color]
                ])
                ->first(); 

            $item_qty = $item->qty;
            $item = $this->product->get_one($item_id); 
            
            if ($item[0]->discount == 0) {
                $total_price = $data_quantity[$key] * $item[0]->prices;
            }else{
                $total_price = $data_quantity[$key] * ($item[0]->prices - ($item[0]->prices / 100 * $item[0]->discount)) ;
            }
            $data_detail = [
                "order_id"      => $order_create->id,
                "product_id"    => $size_item->id,
                "quantity"      => $item_qty,
                "discount"      => $item[0]->discount,
                "price"         => $item[0]->prices,
                "total_price"   => $total_price,
            ];
            $this->order_detail->create($data_detail);
        }

        return $order_create;
    }
}
