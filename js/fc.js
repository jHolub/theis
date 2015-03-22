
function factorial(num) {
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
        return (num * factorial(num - 1));
    }
}

function well_fce(u) {

    suma = 0;

    for (n = 2; n < 20; n++) {

        if (n % 2 == 0) {
            suma = suma - (Math.pow(u, n) / (factorial(n) * n));
        } else {
            suma = suma + (Math.pow(u, n) / (factorial(n) * n));
        }
    }

    W = -0.577216 - Math.log(u) + u + suma;

    return W;

}

function TheisDrawDown() {

    r = parseFloat($("#Radius").val());
    S = $("#Storativity").val();
    T = $("#Transmissivity").val(); 
    Q = $("#Recharge").val();  
// time [s]    
    t = new Array(
            parseInt($("#time").val())*60,
            parseInt($("#time").val())*600,
            parseInt($("#time").val())*6000
                    );

    $("#resultTabBody").empty();

    for (i = 0; i < t.length; i++) {

        u = ((r * r) * S) / (4 * T * t[i]);

        s = (Q / (4 * Math.PI * T)) * well_fce(u);

        $("#resultTabBody").append("<tr><td>" + Number((t[i] / 60).toFixed(1)) + "</td><td>" + Number((s).toFixed(3)) + "</td></tr>");
    }
}

function TheisFce(t, r) {

    S = $("#Storativity").val();
    T = $("#Transmissivity").val(); 
    Q = $("#Recharge").val();  

    u = ((r * r) * S) / (4 * T * t);

    s = (Q / (4 * Math.PI * T)) * well_fce(u);

    return s;
}

function drawPlot() {
    data = new Array();
    i = 0;
    t = $("#time").val() * 60;
    stopSolving = false;

    for (r = -1; r > -401; r = r - 3) {
        if (stopSolving == false) {
            s = TheisFce(t, r) * (-1);
            data[i] = [r, s];
        } else {
            data[i] = [r, 0]
        }

        if (Math.abs(s) < 0.0001) {
            stopSolving = true;
        }
        i++;
    }

    stopSolving = false;
    for (r = 1; r < 401; r = r + 3) {
        if (stopSolving == false) {
            s = TheisFce(t, r) * (-1);
            data[i] = [r, s];
        } else {
            data[i] = [r, 0]
        }

        if (Math.abs(s) < 0.0001) {
            stopSolving = true;
        }
        i++;
    }
    ploting(data, 'graph');
}

function animation() {

    end = parseInt($("#end").val());
    step = parseInt($("#step").val());

        setTimeout(function() {
            $("#time").val(parseInt($("#time").val()) + step);
            drawPlot();
            if(parseInt($("#time").val()) + step < end) {
                animation();    
            };
        }, 70);
        
    
}
