// == : Loose Equality
// === : Strict Equality
console.log("5 == 5:",5 == 5); // true
console.log("5 == '5':",5 == '5'); // true
console.log("5 === '5':",5 === '5'); // false

console.log("\\t == 0:",'\t' == 0); // true
console.log("\\n == 0:",'\n' == 0); // true
console.log("\\t == \\n:",'\t' == '\n'); // false
console.log("\\t == +\\n:",'\t' == +'\n'); // true

console.log("[] == 0: ",[] == 0); // true
console.log("\\t == []: ",'\t' == +[]); // true
console.log("\\t == 0: ",'\t' == 0); // true

console.log("'' == []:", '' == []); // true
console.log("0 == []:", 0 == []); // true
console.log("0 == '':", 0 == ''); // true

console.log("5/0:",5/0);
console.log("-5/0:",-5/0);
console.log("5/Infinity:",5/Infinity);
console.log("5/'Hello'",5/'Hello');