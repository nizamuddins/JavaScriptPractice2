const array1 = [2, 3, 4, 5];
const array2 = [2, 3, 4, 5];

function myFunc(arr1, arr2) {
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
        console.log('The two arrays are similar')
    } else {
        console.log('The tow arrays are differnt')
    }
}
myFunc(array1, array2)


// By forloop

function myFunc1(arr1, arr2) {
    let flag = 0;

    if (arr1.length !== arr2.length) {
        return "The two arrays are different";
    } else {

        for (let i = 0; i < arr1.length && arr2.length; i++) {
            if (arr1[i] !== arr2[i] || arr1.indexOf(arr1[i]) !== arr2.indexOf(arr2[i])) {
                flag = 1;
                break
            }

        }
    }

    if (flag === 0) {

        return 'The two arrays are similar'
    } else {
        return 'The tow arrays are differnt';
    }

}
const returnval = myFunc1(array1, array2);
console.log(returnval)