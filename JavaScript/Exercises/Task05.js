var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('We are all going to die');
    }, 1000);
});

promise.then(function success(data) {
    console.log(data + ' 1');
}, function error(data) {
    console.error(data + ' 1');
});

promise.then(function success(data) {
    console.log(data + ' 2');
}, function error(data) {
    console.error(data + ' 2');
});

promise.then(function success(data) {
    console.log(data + ' 3');
}, function error(data) {
    console.error(data + ' 3');
});

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hello world 1');
        resolve('hello world 2');
        resolve('hello world 3');
        resolve('hello world 4');
    }, 2000);
});

promise.then(function success(data) {
    console.log(data);
});