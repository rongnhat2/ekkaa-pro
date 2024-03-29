const Api = {
    Image: {},
    Category: {},
    Trademark: {},
    Product: {},
    Warehouse: {},
    Order: {},
    Statistic: {},
    Voucher: {},
    Shipper: {},
    Size: {},
    Color: {},

};
(() => {
    $.ajaxSetup({
        headers: { 
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content'),
        },
        crossDomain: true
    });
})();


//Category
(() => {
    Api.Category.GetAll = () => $.ajax({
        url: `/apip/category/get`,
        method: 'GET',
    });
    Api.Category.Store = (data) => $.ajax({
        url: `/apip/category/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Category.getOne = (id) => $.ajax({
        url: `/apip/category/get-one/${id}`,
        method: 'GET',
    });
    Api.Category.Update = (data) => $.ajax({
        url: `/apip/category/update`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Category.Delete = (id) => $.ajax({
        url: `/apip/category/delete/${id}`,
        method: 'GET',
    });
})();

//Size
(() => {
    Api.Size.GetAll = () => $.ajax({
        url: `/apip/size/get`,
        method: 'GET',
    });
    Api.Size.Store = (data) => $.ajax({
        url: `/apip/size/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Size.getOne = (id) => $.ajax({
        url: `/apip/size/get-one/${id}`,
        method: 'GET',
    });
    Api.Size.Update = (data) => $.ajax({
        url: `/apip/size/update`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Size.Delete = (id) => $.ajax({
        url: `/apip/size/delete/${id}`,
        method: 'GET',
    });
})();

//Color
(() => {
    Api.Color.GetAll = () => $.ajax({
        url: `/apip/color/get`,
        method: 'GET',
    });
    Api.Color.Store = (data) => $.ajax({
        url: `/apip/color/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Color.getOne = (id) => $.ajax({
        url: `/apip/color/get-one/${id}`,
        method: 'GET',
    });
    Api.Color.Update = (data) => $.ajax({
        url: `/apip/color/update`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Color.Delete = (id) => $.ajax({
        url: `/apip/color/delete/${id}`,
        method: 'GET',
    });
})();

//Shipper
(() => {
    Api.Shipper.GetAll = () => $.ajax({
        url: `/apip/shipper/get`,
        method: 'GET',
    });
    Api.Shipper.Store = (data) => $.ajax({
        url: `/apip/shipper/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Shipper.getOne = (id) => $.ajax({
        url: `/apip/shipper/get-one/${id}`,
        method: 'GET',
    });
    Api.Shipper.Update = (data) => $.ajax({
        url: `/apip/shipper/update`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Shipper.Delete = (id) => $.ajax({
        url: `/apip/shipper/delete/${id}`,
        method: 'GET',
    });
})();

//Trademark
(() => {
    Api.Trademark.GetAll = () => $.ajax({
        url: `/apip/trademark/get`,
        method: 'GET',
    });
    Api.Trademark.Store = (data) => $.ajax({
        url: `/apip/trademark/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Trademark.getOne = (id) => $.ajax({
        url: `/apip/trademark/get-one/${id}`,
        method: 'GET',
    });
    Api.Trademark.Update = (data) => $.ajax({
        url: `/apip/trademark/update`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Trademark.Delete = (id) => $.ajax({
        url: `/apip/trademark/delete/${id}`,
        method: 'GET',
    });
})();

//Voucher
(() => {
    Api.Voucher.GetAll = () => $.ajax({
        url: `/apip/voucher/get`,
        method: 'GET',
    });
    Api.Voucher.Store = (data) => $.ajax({
        url: `/apip/voucher/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    }); 
    Api.Voucher.Delete = (id) => $.ajax({
        url: `/apip/voucher/delete/${id}`,
        method: 'GET',
    });
})();

//Product
(() => {
    Api.Product.GetAll = () => $.ajax({
        url: `/apip/product/get`,
        method: 'GET',
    });
    Api.Product.GetAllSize = () => $.ajax({
        url: `/apip/product/get-all-size`,
        method: 'GET',
    });

    Api.Product.GetFree = () => $.ajax({
        url: `/apip/product/getfree`,
        method: 'GET',
    }); 
    Api.Product.CreateDetail = (data) => $.ajax({
        url: `/apip/product/createDetail`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    }); 

    Api.Product.getSize = (id) => $.ajax({
        url: `/apip/product/get-size`,
        method: 'GET',
        dataType: 'json',
        data: {
            id: id ?? '',
        }
    }); 
    Api.Product.DeleteColor = (id) => $.ajax({
        url: `/apip/product/delete-color/${id}`,
        method: 'GET',
    });

    Api.Product.GetDiscount = () => $.ajax({
        url: `/apip/product/get-discount`,
        method: 'GET',
    });

    Api.Product.Store = (data) => $.ajax({
        url: `/apip/product/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    
    Api.Product.getOne = (id) => $.ajax({
        url: `/apip/product/get-one/${id}`,
        method: 'GET',
    });
    Api.Product.Update = (data) => $.ajax({
        url: `/apip/product/update`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Product.UpdateDiscount = (data) => $.ajax({
        url: `/apip/product/update-discount`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Product.DeleteDiscount = (id) => $.ajax({
        url: `/apip/product/delete-discount/${id}`,
        method: 'GET',
    });
    Api.Product.Delete = (id) => $.ajax({
        url: `/apip/product/delete/${id}`,
        method: 'GET',
    });
    Api.Product.Trending = (id) => $.ajax({
        url: `/apip/product/update-trending`,
        method: 'PUT',
        dataType: 'json',
        data: {
            id: id ?? '',
        }
    });
    
})();

//Order
(() => {
    Api.Order.GetAll = (id) => $.ajax({
        url: `/apip/order/get`,
        method: 'GET',
        dataType: 'json',
        data: {
            id: id ?? '',
        }
    });
    Api.Order.GetOne = (id) => $.ajax({
        url: `/apip/order/get-one`,
        method: 'GET',
        dataType: 'json',
        data: {
            id: id ?? '',
        }
    });
    Api.Order.Update = (data) => $.ajax({
        url: `/apip/order/update`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
})();

// Image
(() => {
    Api.Image.Create = (data) => $.ajax({
        url: `/apip/post-image`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
})();

// Warehouse
(() => {
    Api.Warehouse.GetDataItem = () => $.ajax({
        url: `/apip/warehouse/get-item`,
        method: 'GET',
    });
    Api.Warehouse.GetDataHistory = () => $.ajax({
        url: `/apip/warehouse/get-history`,
        method: 'GET',
    }); 
    Api.Warehouse.Store = (data) => $.ajax({
        url: `/apip/warehouse/store`,
        method: 'POST',
        data: data,
        contentType: false,
        processData: false,
    });
    Api.Warehouse.getOne = (id) => $.ajax({
        url: `/apip/warehouse/get-ware-one/${id}`,
        method: 'GET',
    });
})();

// Statistic
(() => {
    Api.Statistic.getTotal = () => $.ajax({
        url: `/apip/statistic/get-total`,
        method: 'GET',
    });
    Api.Statistic.getBestSale = () => $.ajax({
        url: `/apip/statistic/get-best-sale`,
        method: 'GET',
    });
    Api.Statistic.getCustomerBuy = () => $.ajax({
        url: `/apip/statistic/get-customer`,
        method: 'GET',
    });
})();

