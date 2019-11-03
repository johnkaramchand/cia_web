function y(point1, point2) {
    var lineObj = {
        gradient: (point1.y - point2.y) / (point1.x - point2.x)
    }, parts;

    lineObj.yIntercept = point1.y - lineObj.gradient * point1.x;
    lineObj.toString = function () {
        if (Math.abs(lineObj.gradient) === Infinity) {
            return 'x = ' + point1.x;
        }
        else {
            parts = [];

            if (lineObj.gradient !== 0) {
                parts.push(lineObj.gradient + 'x');
            }

            if (lineObj.yIntercept !== 0) {
                parts.push(lineObj.yIntercept);
            }

            return  parts.join(' + ');
        }
    };

    return lineObj;
}