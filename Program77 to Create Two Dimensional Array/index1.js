const array = [
    [
        1, 4, 5
    ],
    [
        6,, 8, 9
    ]
]

function myFunc(x, y) {
    let arr = []

    for (let i = 0; i < x; i++) {

        arr[i] = []

    }

    for (let i = 0; i < x; i++) {

        for (let j = 0; j < y; j++) {

            arr[i][j] = j
        }

    }

    return arr

}

const a = 2;
const b = 3;

console.log(myFunc(a, b))