var _ = {
    map: function(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = callback(arr[i]);
        }
        console.log(arr);
    },
    reduce: function(arr, callback, memo) {
        var result = 0;

        for (var i = 0; i < arr.length; i++) {
            result += callback(arr[i], memo);

        }
        console.log(result);

    },

    find: function(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i]) == true) {
                console.log(arr[i]);
                break;
            }
        }
    },
    filter: function(arr, callback) {
        var result = []
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i]) == true) {
                result.push(arr[i]);
            }
        }
        console.log(result);

    },
    reject: function(arr, callback) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i]) != true) {
                result.push(arr[i]);
            }
        }
        console.log(result);

    }

}
var filter1 = _.filter([2, 3, 4, 5, 5, 6, 6, 6, 6, 4, 7], function(num) {
    return num % 2 == 0;
});
var find1 = _.find([2, 3, 3, 4, 5, 6, 5, 3, 2, 2, 1], function(num) {
    return num > 4;
});
var reject1 = _.reject([2, 3, 4, 5, 5, 6, 6, 6, 6, 4, 7], function(num) {
    return num % 2 == 0;
});
var map1 = _.map([2, 3, 4, 5, 5, 6, 6, 6, 6, 4, 7], function(num) {
    return num * 3;
});
var reduce1 = _.reduce([2, 3, 4, 5, 5, 6, 6, 6, 6, 4, 7], function(num, memo) {
    if (num == 6) {
        return num + memo;
    } else {
        return 0;
    }
}, 0);