const array2 = [
    1,
    7,
    2,
    6,
    4,
    3,
    6,
    3,
    7
];
function myFunc1(arr2) {
    let flag = [];
    for (let i = arr2.length; i >= arr2.length; --i) {
        if (arr2.length != 0) {
            let val1 = arr2.shift();
            let val2 = arr2.shift();
            if (val1 === undefined) {
                val1 = null
            } else if (val2 === undefined) {
                val2 = null
            }
            flag.push(val1, val2)
            console.log(flag)
            flag = []
        }
    }
}
const returnval = myFunc1(array2);

// By slice()

const array1 = [
    1,
    4,
    8,
    3,
    90,
    2,
    4
];

function myFunc1(arr1) {

    let arr2 = 0;

    for (let i = 0; i < arr1.length; i++) {
        let chunk = i;
        arr2 = arr1.slice(chunk + i, chunk + i + 2)
        if (arr2.length === 0) {
            break
        }

        console.log(arr2);

        arr2 = 0;
    }

}

myFunc1(array1)

// By splice()

const array3 = [
    6,
    2,
    7,
    3,
    7,
    4,
    3,
    8
]

function myFunc2(arr) {

    let arr3 = 0;
    let arr4 = [...arr]
    for (let i = 0; i < arr4.length; i++) {

        const elements = arr.splice(i - i, 2);

        arr3 = elements;
        if (arr3.length === 0) {
            break
        }
        console.log(arr3);

        arr3 = 0;
    }

}

myFunc2(array3)
