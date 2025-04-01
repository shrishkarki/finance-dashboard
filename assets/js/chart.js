var options = {
    series: [
        {
            name: "Upper Layer",
            // data: [12000, 15000, 9000, 17000, 14000, 21000, 18000]
        },
        {
            name: "Lower Layer",
            // data: [5000, 7000, 4000, 10000, 9000, 12000, 11000]
        }
    ],
    chart: {
        type: 'area',
        height: 350,
        background: '#121212'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        labels: {
            style: {
                colors: 'white'
            }
        }
    },
    yaxis: {
        show: true,
        showAlways: false,
        showForNullSeries: true,
        seriesName: undefined,
        opposite: false,
        reversed: false,
        logarithmic: false,
        logBase: 10,
        tickAmount: 6, // Ensures 6 ticks
        min: 0,
        max: 20000,
        tickPositions: [0, 1000, 5000, 10000, 15000, 20000], // Hardcoded tick values
        stepSize: undefined,
        forceNiceScale: false,
        floating: false,
        decimalsInFloat: undefined,
        labels: {
            show: true,
            showDuplicates: false,
            align: 'right',
            minWidth: 0,
            maxWidth: 160,
            style: {
                colors: [],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label',
            },
            offsetX: 0,
            offsetY: 0,
            rotate: 0,
            formatter: (value) => {
                if (value === 0) return '0K';
                if (value === 1000) return 'K';
                return value / 1000 + 'K';
            },
        },
        axisBorder: {
            show: true,
            color: '#78909C',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#78909C',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        title: {
            text: undefined,
            rotate: -90,
            offsetX: 0,
            offsetY: 0,
            style: {
                color: undefined,
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-title',
            },
        },
        crosshairs: {
            show: true,
            position: 'back',
            stroke: {
                color: '#b6b6b6',
                width: 1,
                dashArray: 0,
            },
        },
        tooltip: {
            enabled: true,
            offsetX: 0,
        },
    }
    ,
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.8,
            stops: [0, 100]
        }
    },
    colors: ['#3838BA', '#FFC266'],
    grid: {
        borderColor: 'rgba(255, 255, 255, 0.3)'
    },
    legend: {
        show: false
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();