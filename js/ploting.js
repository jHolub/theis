
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
            fill: true,
            markerOptions: {
                size: 7,
                shadow: false
            },
            shadow: false
        },
        highlighter: {
            sizeAdjust: 10,
            tooltipLocation: 'ne',
            tooltipAxes: 'y',
            useAxesFormatters: false,
            showTooltip: true,
            tooltipFade: true
        },
        cursor: {
            show: true,
            tooltipLocation: 'ne',
            zoom: false,
            dblClickReset: true,
            showVerticalLine: true,
            showHorizontalLine: true,
            fontSize: '14px'
        },
        legend: {
            show: false,
            location: 'ne'
        },
        series: [
            {label: 'Pumping test', isDragable: false, color: "rgba(0,0,255,0.3)", lineWidth: 1, markerOptions: {size: 2, shadow: false}, shadow: false},
        ],
        axes: {
            xaxis: {
                label: "r [m]",
                max: 1100,
                min: -1100,
                ticks: [-1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000],
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

