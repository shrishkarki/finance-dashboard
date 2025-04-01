

const areaChartOptions = {
    series: [
        {
            name: 'Balance',
            data: [4500, 6000, 8000, 10000, 11000, 10000, 9000],
        },
        {
            name: 'Expenses',
            data: [12000, 10000, 9000, 12000, 18000, 20000, 18000],
        },
    ],
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    colors: ['#F8CD70', '#4745A4'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
        width:2,
        colors: ['#F9BA33', '#4745A4'],
    },
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    markers: {
        size: 0,
    },
    xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], 
        labels: {
            style: {
                colors: '#999999',
                fontSize: '14px'
            },

        },

        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false 
        }
    },
    yaxis: {
        min: 0,
        max: 20000,
        tickAmount: 4,
        labels: {
            formatter: function (value) {
                return value / 1000 + 'k';
            },
            style: {
                colors: '#999999',
                fontSize: '14px'
            }
        }
        ,
  
    },
    grid: {
        borderColor: '#EBEBEB',
        strokeDashArray: 12,
        yaxis: {
            lines: {
                show: true
            }
        },
        xaxis: {
            lines: {
                show: false
            }

        }
    },
    legend: {
        show: false, 
    },

    tooltip: {
        shared: true,
        intersect: false,
    },
};

const areaChart = new ApexCharts(
    document.querySelector('#chart__display'),
    areaChartOptions
);
areaChart.render();






