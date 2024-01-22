let str = "Hello learning strings!";
console.log(str);
// for(let i = 0 ; i < str.length ; i++){
//     console.log(str[i])
// }

let indx = str.indexOf("Learning");
console.log(indx);

let arr = str.split(' ');
console.log(arr);

let str1 = arr.join('-');
console.log(str1);

let file = 'http://localhost:3333/file.mp4';
arr = file.split('/');
console.log(arr);
let fileName = arr.pop();
console.log(fileName);

let fileExtension = fileName.split('.').pop();
console.log(fileExtension);