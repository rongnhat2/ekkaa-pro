<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'product';
    protected $fillable = ['category_id', 'trademark_id', 'name', 'slug', 'images', 'banner', 'metadata', 'description', 'detail', 'prices', 'discount', 'discount_time', 'trending', 'status', 'created_at', 'updated_at'];
}
