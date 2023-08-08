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

const a = new Promise((res,rej)=>{
    console.log(4)
    res(5)
})

queueMicrotask(() => {
    console.log(6);
});

Promise.resolve().then(() => {
    console.log(7);
});

console.log("end");

/////////////////////////////////////////////////////////////////////////////