const View = {
    render_total(data){
        $(".data-turnover").html(`${View.formatNumber(data.turnover[0].total)} đ`)
        $(".data-item_sell").html(`${View.formatNumber(data.item_sell[0].total)} `)
        $(".data-order_time").html(`${View.formatNumber(data.order_time[0].total)}  `)
        $(".data-customer_buy").html(`${View.formatNumber(data.customer_buy.length)}  `)
    },
    render_sale(data){
        data.map(v => {
            var image           = v.images.split(",")[0];
            $(".sale-list")
                .append(`<tr>
                            <td>${v.product_id}</td>
                            <td>
                                <div class="media align-items-center">
                                    <div class="avatar avatar-image rounded">
                                        <img src="/${image}" alt="" style="width: 100px">
                                    </div>
                                    <div class="m-l-10">
                                        <span>${v.name}</span>
                                    </div>
                                </div>
                            </td>
                            <td>${v.total}</td>
                            <td>${v.quantity}</td>
                        </tr>`)
        })
    },
    donut(data_customer){
        var customer_new = []
        var customer_back = []
        data_customer.customer_new.map( v => {
            if (v.total > 1) customer_back.push(v) 
                else customer_new.push(v) 
        })
        $(".data-customer_new").html(customer_new.length)
        $(".data-customer_back").html(customer_back.length)
        $(".data-customer_free").html(data_customer.customer_free.length)
        const donutChart = document.getElementById("donut-chart");
        const donutCtx = donutChart.getContext('2d');
        donutChart.height = 492;
        const donutData = {
            labels: ["Mới", "Quay lại", "Khác"],
                datasets: [
                {
                    fill: true,
                    backgroundColor: ["#05c9a7", "#886cff", "#ffc107"],
                    pointBackgroundColor : ["#05c9a7", "#886cff", "#ffc107"],
                    data: [customer_new.length, customer_back.length, data_customer.customer_free.length]
                }
            ]
        };
        const donutConfig = new Chart(donutCtx, {
            type: 'doughnut',
            data: donutData,
            options: {
                maintainAspectRatio: false,
                hover: {mode: null},
                cutoutPercentage: 45
            }
        });
    },
    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
};
(() => {

    function init(){
        get_total()
        var t = $("#barChart").get(0).getContext("2d");
            new Chart(t, { 
                type: "bar", 
                data: { 
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
                         "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], 
                    datasets: [ 
                        { label: "", data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59, 80, 81, 56, 89, 40, 65, 59, 80, 81, 56, 89, 40, 65, 59, 89, 40, 65, 59], backgroundColor: "#f8ac5a" }
                    ]
                }, 
                options: { 
                    responsive: !0, 
                    maintainAspectRatio: !0, 
                    scales: { 
                        yAxes: [
                            { 
                                display: !1, 
                                gridLines: { 
                                    drawBorder: !1 
                                }, 
                                ticks: { 
                                    fontColor: "#686868" 
                                } 
                            }
                        ], 
                        xAxes: [
                            { 
                                ticks: { 
                                    fontColor: "#686868" 
                                }, 
                                gridLines: { 
                                    display: !1, 
                                    drawBorder: !1 
                                } 
                            }
                        ] 
                    }, 
                    elements: { 
                        point: { 
                            radius: 0 
                        } 
                    } 
                } 
            })

    }
    function get_total(){
        Api.Statistic.getTotal().done(res => { View.render_total(res) })
        Api.Statistic.getBestSale().done(res => { View.render_sale(res) })
        Api.Statistic.getCustomerBuy().done(res => { 
            View.donut(res)
          })
    }

    init();
})();