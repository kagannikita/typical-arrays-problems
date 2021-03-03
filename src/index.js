
exports.min = function min (array) {
    if ( array != null && array.length != null && array.length > 0){
        return Math.min(...array)
    }
        return 0
}

exports.max = function max (array) {
    if ( array != null && array.length != null && array.length > 0){
        return Math.max(...array)
    }
    return 0
}

exports.avg = function avg (array) {
    if ( array != null && array.length != null && array.length > 0) {
        const numbers = (accumulator, currentValue) => accumulator + currentValue;
        return array.reduce(numbers) / array.length;
    }
    return 0
}
