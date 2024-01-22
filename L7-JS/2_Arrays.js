let arr = [1,2,3,'Hello',true];
console.log(arr);
// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// for(let val of arr){
//     console.log(val);
// }

// let i = 0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }
// Array is actually doubly linked list
arr.push("Hello world");
arr.shift(); // To delete at front
arr.unshift("Coding Blocks"); // To insert at front
console.log(arr);
arr[10] = 'I am 10th Value';
console.log(arr);
