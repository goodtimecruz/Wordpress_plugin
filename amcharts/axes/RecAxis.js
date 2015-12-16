AmCharts.RecAxis = AmCharts.Class({

    construct: function (axis) {
        var _this = this;
        var chart = axis.chart;
        var t = axis.axisThickness;
        var c = axis.axisColor;
        var a = axis.axisAlpha;
        var l = axis.tickLength;
        var o = axis.offset;
        var dx = axis.dx;
        var dy = axis.dy;

        var vx = axis.viX;
        var vy = axis.viY;
        var vh = axis.viH;
        var vw = axis.viW;

        var x;
        var y;
        var container = chart.container;

        // POSITION CONTAINERS
        // HORIZONTAL
        var line;

        if (axis.orientation == "H") {
            line = AmCharts.line(container, [0, vw], [0, 0], c, a, t);

            _this.axisWidth = axis.width;

            // BOTTOM
            if (axis.position == "bottom") {
                y = t / 2 + o + vh + vy - 1;
                x = vx;
            }
            // TOP
            else {
                y = -t / 2 - o + vy + dy;
                x = dx + vx;
            }
        }
        // VERTICAL
        else {
            _this.axisWidth = axis.height;

            // RIGHT
            if (axis.position == "right") {
                line = AmCharts.line(container, [0, 0, -dx], [0, vh, vh - dy], c, a, t);
                y = vy + dy;
                x = t / 2 + o + dx + vw + vx - 1;
            }
            // LEFT
            else {
                line = AmCharts.line(container, [0, 0], [0, vh], c, a, t);
                y = vy;
                x = -t / 2 - o + vx;
            }
        }
        line.translate(x, y);
        chart.axesSet.push(line);
        _this.set = line;
    }

});