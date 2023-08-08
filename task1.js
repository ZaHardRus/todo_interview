//ЗАДАЧА 1
console.log("start");

setTimeout(() => {
    console.log(1);
    Promise.resolve().then(() => {
        console.log(2);
    });
}, 0);

setTimeout(() => {
    console.log(3);
}, 0);

Promise.resolve().then(() => {
    console.log(4);
});

queueMicrotask(() => {
    console.log(5);
});
Promise.resolve().then(() => {
    console.log(6);
});

console.log("end");

/////////////////////////////////////////////////////////////////////////////