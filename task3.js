//  ЗАДАЧА 3
const path1 = "fruit.red.apple";
const obj1 = {
    fruit: {
        red: {
            apple: "яблочко"
        }
    }
};

const path2 = "fruit.yellow.peach";
const obj2 = {
    fruit: {
        yellow: {
            banana: "бананчик"
        }
    }
};

function get(path, obj) {
    const arr = path.split(".");
    let res = obj;

    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            return;
        }
        res = res[arr[i]];
        console.log(res);
    }

    return res;
}

console.log(get(path1, obj1));

/////////////////////////////////////////////////////////////////////////////