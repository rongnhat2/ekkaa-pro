<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

use App\Repositories\Manager\ColorRepository;
use App\Models\Color;
use Carbon\Carbon;
use Session;
use Hash;
use DB;

class ColorController extends Controller
{
    protected $color;

    public function __construct(Color $color){
        $this->color             = new ColorRepository($color);
    }
    
    public function index(){
        return view("admin.manager.color");
    }

    public function get(){
        $data = $this->color->get_all();
        return $this->color->send_response(201, $data, null);
    }

    public function get_one($id){
        $data = $this->color->get_one($id);
        return $this->color->send_response(200, $data, null);
    }

    public function store(Request $request){
        $data = [
            "name"      => $request->data_name,
            "hex"      => $request->data_hex,
        ];
        $data_return = $this->color->create($data);
        return $this->color->send_response(201, null, null);
    }

    public function update(Request $request){
        $id                 = $request->data_id;
        $data_update   = [
            "name"      => $request->data_name,
            "hex"      => $request->data_hex,
        ];
        $this->color->update($data_update, $id);
        return $this->color->send_response(200, null, null);
    }

    public function delete($id){
        $data = $this->color->delete($id);
        return $this->color->send_response(200, "Delete successful", null);
    }
}
