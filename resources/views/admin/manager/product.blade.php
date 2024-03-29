@extends('admin.layout')
@section('title', 'Sản phẩm')

@section('css')
    <link href="{{ asset('manager/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css') }}" rel="stylesheet">
@endsection()


@section('body')

<div class="page-content">
    <div class="container-fluid">
        <div class="main-body">
            <div class="main-tab on-show" tab-name="Main">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <h4 class="m-b-0">Sản phẩm</h4>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div class="align-justify-center">
                                    <a href="#" class="btn btn-default btn-sm flex-right main-tab-control" atr="Create">Sản phẩm<i class="fas fa-plus m-l-5"></i></a> 
                                </div>
                            </div>
                        </div>
                        <div class="m-t-25">
                            <table id="data-table" class="table"> </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-tab" tab-name="Create" id="tab-create">
                <div class="error-log"></div>
                <div class="page-header no-gutters has-tab">
                    <div class="d-md-flex m-b-15 align-items-center justify-content-between">
                        <div class="media align-items-center m-b-15">
                            <div class="m-l-15">
                                <h4 class="m-b-0" valid-appended="name-append"></h4>
                            </div>
                        </div>
                        <div class="m-b-15">
                            <button class="btn btn-primary push-data" atr="Create">
                                <i class="anticon anticon-save"></i>
                                <span>Lưu lại</span>
                            </button>
                            <button class="btn btn-defaul m-l-5 main-tab-close">
                                <span>Hủy</span>
                            </button>
                        </div>
                    </div>
                    <ul class="nav nav-tabs" >
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#product-edit-basic">Thông tin cơ bản</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#product-edit-option">Thông tin bổ sung</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#product-edit-description">Mô tả</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content m-t-15">
                    <div class="tab-pane fade show active" id="product-edit-basic" >
                        <div class="card">
                            <div class="card-body">
                                <input type="hidden" class="product-id">
                                <div class="form-group">
                                    <label class="font-weight-semibold" for="productName">Tên sản phẩm</label>
                                    <input type="text" class="form-control product-name name-append" valid-append="name-append" valid-data="valid-text" id="productName" placeholder="Tên sản phẩm" value="" >
                                    <div class="valid-data"></div>
                                </div>
                                <div class="form-group">
                                    <label class="font-weight-semibold" for="productPrice">Đơn giá</label>
                                    <input type="text" class="form-control product-prices" valid-data="valid-number" id="productPrice" placeholder="Đơn giá" value="">
                                    <div class="valid-data"></div>
                                </div>
                                <div class="form-group">
                                    <label class="font-weight-semibold" for="productCategory">Danh mục</label>
                                    <select class="custom-select product-category" id="productCategory">

                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="font-weight-semibold" for="productTrademark">Thương hiệu</label>
                                    <select class="custom-select product-trademark" id="productTrademark">

                                    </select>
                                </div>
                                <div class="form-group image-select-group">
                                    <div class="form-header">
                                        <label>Hình ảnh * </label>
                                        <label class="image-select" for="image_list"><i class="fas fa-upload m-r-10"></i>Chọn ảnh</label>
                                        <input type="file" class="form-control image-upload-label product-images" id="image_list" name="image_list[]" required="" accept="image/*" multiple="">
                                    </div>
                                    <div class="form-preview multi-upload">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="product-edit-option">
                        <div class="card">
                            <div class="card-body">
                                {{-- <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div class="form-group">
                                            <label class="font-weight-semibold">Size</label>
                                            <div class="metadata-render size-list" data-name="size">
                                                
                                            </div>
                                            <div class="row">
                                                <div class="col-md-9 col-lg-9 col-xl-9">
                                                    <input type="text" class="form-control metadata-value product-size" value="">
                                                </div>
                                                <div class="col-md-3 col-lg-3 col-xl-3">
                                                    <button class="btn btn-primary metadata-create" atr="Size">Thêm size</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div class="form-group">
                                            <label class="font-weight-semibold">Color</label>
                                            <div class="metadata-render color-list" data-name="color">
                                                
                                            </div>
                                            <div class="row">
                                                <div class="col-md-9 col-lg-9 col-xl-9">
                                                    <input type="color" class="form-control metadata-value product-color " value="">
                                                </div>
                                                <div class="col-md-3 col-lg-3 col-xl-3">
                                                    <button class="btn btn-primary metadata-create" atr="Color">Thêm màu</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> --}}
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div class="form-group image-select-group">   
                                            <div class="form-header">
                                                <label>Banner * ( 1920 x 768 )</label>
                                                <label class="image-select" for="avatar"><i class="fas fa-upload m-r-10"></i>Chọn ảnh</label> 
                                            </div>
                                            <input type="file" id="avatar" class="image-input product-banner" style="display: none;">
                                            <div class="image-wrapper form-preview data-banner"> </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div class="form-group">
                                            <label class="font-weight-semibold" for="productColors">Mô tả ngắn</label>
                                            <textarea name="" class="form-control product-description" rows="10"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="product-edit-description">
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group summernote">
                                    <textarea class="form-control product-detail " name="detail" placeholder="Mô tả đầy đủ" rows="4" required=""></textarea>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-tab" tab-name="Size" id="tab-size">
                <div class="error-log"></div> 
                <div class="tab-content m-t-15"> 
                    <div class="card col-md-6 offset-3">
                        <div class="card-body">
                            <input type="hidden" class="product-id">
                            <h4>Tạo bản sao</h4>
                            <div class="row">
                                <div class="form-group col-6">
                                    <label class="font-weight-semibold" for="productTrademark">Size</label>
                                    <select class="custom-select data-size" id="productTrademark">

                                    </select>
                                </div>
                                <div class="form-group col-6">
                                    <label class="font-weight-semibold" for="productTrademark">Màu</label>
                                    <select class="custom-select data-color" id="productTrademark">

                                    </select>
                                </div>
                            </div>
                            <div class="m-t-15 m-b-15 d-flex justify-content-center">
                                <button class="btn btn-primary push-data" atr="CreateSize">
                                    <i class="anticon anticon-save"></i>
                                    <span>Thêm phân loại</span>
                                </button>
                                <button class="btn btn-defaul m-l-5 main-tab-close">
                                    <span>Hủy</span>
                                </button>
                            </div>
                            <table class="size-table">
                                <tr>
                                    <th>Size</th>
                                    <th>Màu</th>
                                    <th>Xóa</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<style>
table.size-table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table.size-table td, 
table.size-table th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
 
</style>

@endsection()


@section('sub_layout')

<div class="modal modal-right fade quick-view show" id="modal-delete">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header justify-content-between align-items-center">
                <h5 class="modal-title"> </h5>
            </div>
            <div class="modal-body scrollable ps-container ps-theme-default">
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default close-modal m-r-10" ></button>
                <button type="button" class="btn btn-primary push-modal" atr="Push"></button>
            </div>
        </div>
    </div>            
</div>


@endsection()

@section('js')
    
    <script src="{{ asset('manager/assets/js/page/product.js') }}"></script>

@endsection()