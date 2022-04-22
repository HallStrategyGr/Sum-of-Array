// const sum = [1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10].reduce(add, 0);

// function numSum();
//   return accumulator + a;
// }

// console.log(sum); // 6

// --------------------------------------

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);

// --------------------------
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;

function sumOfArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const res = sumOfArray(arr)

    console.log(`Sum is ${res}`)
