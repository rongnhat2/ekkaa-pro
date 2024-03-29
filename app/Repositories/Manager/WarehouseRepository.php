<?php

namespace App\Repositories\Manager;

use Illuminate\Database\Eloquent\Model;
use App\Repositories\BaseRepository;
use App\Repositories\RepositoryInterface;
use Session;
use Hash;
use DB;

class WarehouseRepository extends BaseRepository implements RepositoryInterface
{
    protected $model;

    public function __construct(Model $model){
        $this->model = $model;
    } 
    public function get_item_all(){
        $sql = "SELECT warehouse.*, product.name as product_name, size.name as size_name, color.name as color_name, product_detail.*
                FROM warehouse
                LEFT JOIN product_detail
                ON product_detail.id = warehouse.product_id
                LEFT JOIN product
                ON product.id = product_detail.product_id
                LEFT JOIN size
                ON size.id = product_detail.size_id
                LEFT JOIN color
                ON color.id = product_detail.color_id";
        return DB::select($sql);
    }
    public function get_history_all(){
        $sql_getall =   "SELECT warehouse_history.id, 
                                admin.email, 
                                sum(quantity) as quantities, 
                                sum(price) as prices, 
                                warehouse_history.created_at
                            FROM warehouse_history_detail
                            LEFT JOIN warehouse_history
                            ON warehouse_history.id = warehouse_history_detail.warehouse_history_id
                            LEFT JOIN admin
                            ON admin.id = warehouse_history.manager_id
                            GROUP BY warehouse_history_detail.warehouse_history_id, 
                                    warehouse_history.id, 
                                    admin.email, 
                                    warehouse_history.created_at
                            ORDER BY warehouse_history.created_at DESC";
        return DB::select($sql_getall);
    }
    public function get_ware_one($id){
        $sql = "SELECT warehouse_history_detail.* , product.name as product_name, size.name as size_name, color.name as color_name, product_detail.*
                    FROM warehouse_history_detail 
                    LEFT JOIN product_detail
                    ON product_detail.id = warehouse_history_detail.product_id
                    LEFT JOIN product
                    ON product.id = product_detail.product_id
                    LEFT JOIN size
                    ON size.id = product_detail.size_id
                    LEFT JOIN color
                    ON color.id = product_detail.color_id
                    WHERE warehouse_history_id = ".$id;
        return DB::select($sql);

    }

    public function get_history_detail($id){
        $sql_getall =   "SELECT *
                            FROM warehouse_history_detail
                            WHERE warehouse_history_id = ".$id;
        return DB::select($sql_getall);
    }

    public function warehouse_get_item($item_id){
        $sql_checkitem = "SELECT * FROM warehouse WHERE product_id = ".$item_id;
        return DB::select($sql_checkitem);
    }

    public function update_item($item_id, $quantity){
        $sql_checkitem = "UPDATE warehouse
                            SET quantity =".$quantity."
                            WHERE product_id = ".$item_id;
        DB::select($sql_checkitem);
    }

    public function update_item_ship($item_id, $quantity){
        $sql_checkitem = "UPDATE warehouse
                            SET pending =".$quantity."
                            WHERE product_id = ".$item_id;
        DB::select($sql_checkitem);
    }

}
