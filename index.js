// map 
let arr = [1, 2 , 3, 4, 5 ]
let newArr = arr.map((a , b)=> {return a*2});
console.log(newArr);

let arr2 = ["hello","world"]
let newArr2 = arr2.map(x=> x.toUpperCase());
console.log(newArr2);

// filter
let arr3 = [1,2,3,4,5];
let newArr3 = arr3.filter((x1,)=>{ return (x1%2==0)});
console.log(newArr3);


let arr4 = ["hello", "world", "abc", "welcome", "to", "javascript"];
let newArr4= arr4.filter(a1 => (a1.length>=5));
console.log(newArr4);

// let arr = ["hello", "world", "welcome", "to The" ,"Js"];
// let res = arr.filter(myfunction);

// function myfnction(val){
//     val = val.includes("o");
//     return val;
// }
// console.log(res)

// foreach
let arr5 = [1,2,3,4,5];
arr5.forEach((x2) => {console.log(x2)});

let arr6 = ["hello", "world"];
arr6.forEach((b) => {console.log(b + "!")})

// let arr7 = ["hello", "world" , "welcome" , "to " ,"js "];
// arr7.forEach(myFunction);

// function myFunction(val, idx, arr){
//     console.log(val, idx, arr)
// }

// every 
// Check if all numbers in an array are positive: [1, 2, 3, 4, 5]
let positive = [1, 2, 3, 4, 5];
positive.every((ele)=>{console.log(ele >0)});

// Check if all strings in an array are longer than 5 characters: ["hello", "world", "abc"] → false
// Method 1
let characters= ["hello", "world", "abc"];
characters.every((ele)=>{console.log(ele.length > 5)});


// Method 2
let character = ["hello", "world", "abc"];
let check = character.every(myFunction)
function myFunction(ele){
    ele.length > 5;
}
console.log(check)

// Check if any number in an array is even: [1, 2, 3, 4, 5] → true
let even = [1, 2, 3, 4, 5];
even.some((ele)=>{console.log(ele%2==0)});


// Check if any string in an array contains "x": ["hello", "world", "max"]
let contains = ["hello", "world", "max"];
contains.some((ele)=>{console.log(ele.includes("x"))});

// Find the first even number in an array: [1, 2, 3, 4, 5] -2 
let evenNumber = [1, 2, 3, 4, 5];
let res = evenNumber.find((ele)=>{
   ele = (ele%2==0);
   return ele
})
console.log(res)

// Find the first string in an array that contains "x": ["hello", "world", "max"] → "max"
let str = ["hello", "world", "max"];
let res1 = str.find((ele)=>{
   ele = (ele.includes("x"));
   return ele
})
console.log(res1);

// Find the index of the first even number in an array: [1, 2, 3, 4, 5]
let array = [1, 2, 3, 4, 5];
let res2 = array.findIndex((ele)=>{
   ele = (ele%2==0)
   return ele
})
console.log(res2)



// Find the index of the first string in an array that contains "x": ["hello", "world", "max"] → 2
let array1 = ["hello", "world", "max"];
let res3 = array1.findIndex((ele)=>{
   ele = (ele.includes("x"));
   return ele
})
console.log(res3);

