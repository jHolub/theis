
function ploting(data, id) {

    document.getElementById(id).innerHTML = "";

    $.jqplot(id, [data], {
        title: 'Drawdown in time',
        grid: {
            drawGridLines: true,
            backgroundColor: "white",
            gridLineColor: 'whitesmoke',
            gridLineWidth: 1,
            borderWidth: 0.1,
            shadow: false
        },
        seriesDefaults: {
            markerOptions: {
                size: 7,
                shadow: false
            },
            shadow: false
        },
        highlighter: {
            sizeAdjust: 10,
            tooltipLocation: 'n',
            tooltipAxes: 'y',
            useAxesFormatters: false,
            showTooltip: true,
            tooltipFade: true
        },
        cursor: {
            show: true,
            tooltipLocation: 'se',
            zoom: false,
            dblClickReset: true,
            showVerticalLine: true,
            showHorizontalLine: true,
            fontSize: '13px'
        },
        legend: {
            show: true,
            location: 'en'
        },
        series: [
            {label: 'Pumping test', isDragable: false, color: "black", lineWidth: 2, markerOptions: {size: 2, shadow: false}, shadow: false},
        ],
        axes: {
            xaxis: {
                label: "r [m]",
                max: 1100,
                min: -1100,
                //ticks: [0.01,0.1,1, 10, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000, 50000000, 100000000, 500000000, 1000000000],
                tickOptions: {
                 //   formatString: '%.1e'                           //http://perldoc.perl.org/functions/sprintf.html                      
                },
                //renderer: $.jqplot.LogAxisRenderer
            },
            yaxis: {
                min: -5,
                max: 1,
                ticks: [-5,-4,-3,-2,-1,0,1], 
                label: "s [m]",
                tickOptions: {
                    fontSize: '12px',
                   // formatString: '%.1f'                           //http://perldoc.perl.org/functions/sprintf.html                      
                }
            }
        }
    });
}

