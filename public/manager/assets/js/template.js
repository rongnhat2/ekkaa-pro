const Template = {
    Category: {
        Create(){
            return `<div class="error-log"></div>
                    <div class="form-group">
                        <label for="name">Tên danh mục</label>
                        <input type="text" class="form-control data-name" id="name" placeholder="Tên danh mục">
                    </div>`
        },
        Update(){
            return `<input type="hidden" class="form-control data-id" required="">
                    <div class="error-log"></div>
                    <div class="form-group">
                        <label for="name">Tên danh mục</label>
                        <input type="text" class="form-control data-name" id="name" placeholder="Tên danh mục">
                    </div>`
        },
        Delete(){
            return `<div class="wrapper d-flex justify-center"><img src="/manager/images_global/funny.gif" alt=""></div>`
        }
    },
    Size: {
        Create(){
            return `<div class="error-log"></div>
                    <div class="form-group">
                        <label for="name">Tên kích thước</label>
                        <input type="text" class="form-control data-name" id="name" placeholder="Tên kích thước">
                    </div>`
        },
        Update(){
            return `<input type="hidden" class="form-control data-id" required="">
                    <div class="error-log"></div>
                    <div class="form-group">
                        <label for="name">Tên kích thước</label>
                        <input type="text" class="form-control data-name" id="name" placeholder="Tên kích thước">
                    </div>`
        },
        Delete(){
            return `<div class="wrapper d-flex justify-center"><img src="/manager/images_global/funny.gif" alt=""></div>`
        }
    },
    Color: {
        Create(){
            return `<div class="error-log"></div>
                    <div class="form-group">
                        <label for="name">Tên kích thước</label>
                        <input type="text" class="form-control data-name" id="name" placeholder="Tên kích thước">
                    </div>
                    <div class="form-group">
                        <label for="name">Chọn màu</label>
                        <input type="color" class="form-control data-hex" id="color"  >
                    </div>`
        },
        Update(){
            return `<input type="hidden" class="form-control data-id" required="">
                    <div class="error-log"></div>
                    <div class="form-group">
                        <label for="name">Tên kích thước</label>
                        <input type="text" class="form-control data-name" id="name" placeholder="Tên kích thước">
                    </div>
                    <div class="form-group">
                        <label for="name">Chọn màu</label>
                        <input type="color" class="form-control data-hex" id="color"  >
                    </div>`
        },
        Delete(){
            return `<div class="wrapper d-flex justify-center"><img src="/manager/images_global/funny.gif" alt=""></div>`
        }
    },
    Trademark: {
        Create(){
            return `<div class="error-log"></div>
                    <div class="form-group">
                        <label for="name">Tên thương hiện</label>
                        <input type="text" class="form-control data-name" id="name" placeholder="Tên thương hiện">
                    </div>`
        },
        Update(){
            return `<input type="hidden" class="form-control data-id" required="">
                    <div class="error-log"></div>
                    <div class="form-group">
                        <label for="name">Tên thương hiện</label>
                        <input type="text" class="form-control data-name" id="name" placeholder="Tên thương hiện">
                    </div>`
        },
        Delete(){
            return `<div class="wrapper d-flex justify-center"><img src="/manager/images_global/funny.gif" alt=""></div>`
        }
    },
    Shipper: {
        Create(){
            return `<div class="error-log"></div>
                    <div class="form-group">
                        <label for="name">Tên shipper</label>
                        <input type="text" class="form-control data-name" id="name" placeholder="Tên shipper">
                    </div>
                    <div class="form-group">
                        <label for="name">Địa chỉ</label>
                        <input type="text" class="form-control data-address" id="address" placeholder="Địa chỉ">
                    </div>
                    <div class="form-group">
                        <label for="name">Số điện thoại</label>
                        <input type="text" class="form-control data-phone" id="phone" placeholder="Số điện thoại">
                    </div>`
        },
        Update(){
            return `<input type="hidden" class="form-control data-id" required="">
                    <div class="error-log"></div>
                    <div class="form-group">
                        <label for="name">Tên shipper</label>
                        <input type="text" class="form-control data-name" id="name" placeholder="Tên shipper">
                    </div>
                    <div class="form-group">
                        <label for="name">Địa chỉ</label>
                        <input type="text" class="form-control data-address" id="address" placeholder="Địa chỉ">
                    </div>
                    <div class="form-group">
                        <label for="name">Số điện thoại</label>
                        <input type="text" class="form-control data-phone" id="phone" placeholder="Số điện thoại">
                    </div>`
        },
        Delete(){
            return `<div class="wrapper d-flex justify-center"><img src="/manager/images_global/funny.gif" alt=""></div>`
        }
    },
    Product: {
        Delete(){
            return `<div class="wrapper d-flex justify-center"><img src="/manager/images_global/funny.gif" alt=""></div>`
        }
    },
    Discount: {
        Create(){
            return `<div class="error-log"></div>
                    <div class="form-group">
                        <label for="name">Sản phẩm</label>
                        <select class="form-control data-product" name="" id=""></select>
                    </div>
                    <div class="form-group">
                        <label for="name">Giá gốc</label>
                        <input type="text" class="form-control prices-defaul" value="" disabled>
                    </div>
                    <div class="form-group">
                        <label for="name">Giảm giá</label>
                        <input type="text" class="form-control data-discount" id="name" placeholder="Nhập số">
                    </div>
                    <div class="form-group">
                        <label for="name">Thời gian đến</label>
                        <input type="date" class="form-control data-time" id="name" placeholder="Nhập số">
                    </div>`
        },
        Delete(){
            return `<div class="wrapper d-flex justify-center"><img src="/manager/images_global/funny.gif" alt=""></div>`
        }
    },
    Voucher: {
        Create(){
            return `<div class="error-log"></div> 
                    <div class="form-group">
                        <label for="name">Mã voucher</label>
                        <input type="text" class="form-control data-name" value="" disabled>
                        <button type="button" class="waves-effect waves-teal btn-flat btn btn-primary w-100 m-t-10 random-action" atr="random">Ngẫu nhiên</button>
                    </div>
                    <div class="form-group">
                        <label for="name">Giảm tổng giá</label>
                        <input type="text" class="form-control data-discount" id="name" placeholder="%">
                    </div>
                    <div class="form-group">
                        <label for="name">Thời gian đến</label>
                        <input type="date" class="form-control data-time" id="name" placeholder="Nhập số">
                    </div>`
        },
        Delete(){
            return `<div class="wrapper d-flex justify-center"><img src="/manager/images_global/funny.gif" alt=""></div>`
        }
    },
	Order: {
		Update(){
			return `<div class="container">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-md-7">
                                        <div class="d-md-flex align-items-center">
                                            <div class="text-center text-sm-left ">
                                                <div class="avatar avatar-image" style="width: 150px; height:150px">
                                                    <img src="assets/images/avatars/thumb-3.jpg" alt="">
                                                </div>
                                            </div>
                                            <div class="text-center text-sm-left m-v-15 p-l-30">
                                                <h2 class="m-b-5 customer-name"></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="row">
                                            <div class="d-md-block d-none border-left col-1"></div>
                                            <div class="col">
                                                <ul class="list-unstyled m-t-10">
                                                    <li class="row">
                                                        <p class="col-sm-4 col-4 font-weight-semibold text-dark m-b-5">
                                                            <i class="m-r-10 text-primary anticon anticon-mail"></i>
                                                            <span>Email: </span> 
                                                        </p>
                                                        <p class="col font-weight-semibold customer-email"> </p>
                                                    </li>
                                                    <li class="row">
                                                        <p class="col-sm-4 col-4 font-weight-semibold text-dark m-b-5">
                                                            <i class="m-r-10 text-primary anticon anticon-phone"></i>
                                                            <span>Điện thoại: </span> 
                                                        </p>
                                                        <p class="col font-weight-semibold customer-telephone"></p>
                                                    </li>
                                                    <li class="row">
                                                        <p class="col-sm-4 col-5 font-weight-semibold text-dark m-b-5">
                                                            <i class="m-r-10 text-primary anticon anticon-compass"></i>
                                                            <span>Địa chỉ: </span> 
                                                        </p>
                                                        <p class="col font-weight-semibold customer-address"></p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-9">
                                <div class="card">
                                    <div class="card-body ">
										<table class="table table-bordered">
									    	<thead>
									      		<tr>
											        <th>Mã</th>
											        <th>Tên sản phẩm</th>
											        <th>Số lượng</th>
											        <th>Đơn giá</th>
											        <th>Giảm giá</th>
											        <th>Thành tiền</th>
											        <th>Kho</th>
											        <th>Yêu cầu</th>
									      		</tr>
									    	</thead>
										    <tbody class="data-list"> 
										    </tbody>
									  	</table>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <select name="" id="" class="form-control order-status">
                                            <option value="0">Chờ xử lí</option>
                                            <option value="1">Chưa hoàn thiện</option>
                                            <option value="2">Đã hoàn thiện</option>
                                            <option value="3">Đang giao hàng</option>
                                            <option value="4">Đã giao hàng</option>
                                            <option value="5">Hoàn trả</option>
                                        </select>
                                    </div>
                                    <div class="card-body shipper-wrapper">
                                        <p>Chọn shipper</p>    
                                        <select name="" id="" class="form-control order-shipper">

                                        </select>
                                    </div>
                                    <div class="card-body shipper-data">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
		}
	},
    Warehouse: {
        Create(){
            return `<div class="warehouse-modal">
                        <div class="item-list"> </div>
                        <button type="button" class="btn btn-success item-create" atr="Item Create">Tạo mới</button>
                    </div>`
        },
        Update(){
            return `<table class="table table-bordered sub-warehouse">
                        <thead>
                          <tr>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá nhập</th>
                            <th>Thành tiền</th>
                          </tr>
                        </thead>
                        <tbody> 
                        </tbody>
                      </table>`
        },

    },
    
}