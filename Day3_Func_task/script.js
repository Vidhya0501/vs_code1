//1.Print odd numbers in an array

//Function - odd

// let arr=[1,2,3];
// let r=[];
// function odd(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             r.push(arr[i]);
//         }
//     }
//     return r;
// }
// console.log(odd(arr));

//Anonymous odd

// let arr=[1,2,3,7,8,9];
// let r=[];
// let o=function (arr)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]%2!=0){
//             r.push(arr[i]);
//         }
//     }
//     return r;
// }
// console.log(o(arr));

//IIFE - odd

// let arr=[1,2,3,89,90];
// let r=[];
// (function odd(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             r.push(arr[i]);
//         }
//     }
//     console.log(r);
// })(arr);

//Arrow - odd

// let arr=[1,2,3,76,43];
// let r=[];
// const o=(arr) => {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             r.push(arr[i]);
//         }
//     }
//     return r;
// }
// console.log(o(arr));

//********************************************

//2. Convert all the strings to title caps in a string array 

//Function - Title caps

// function toTcase(str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(' ');
// }
// console.log(toTcase("hi all! "));

//Anonymous - Title caps

// let t= function (str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(' ');
// }
// console.log(t("hi all! "));

//IIFE - Title caps

// (function (str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//  console.log(str.join(' '));
// }) (" hi all! ");

//Arrow function - Title caps

// const t=  (str) => {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(' ');
// }
// console. log(t(" hi all"));

//************************************************************************ 


//3. Sum of all numbers in an array   

//Function - sum

// function s(arr)
// {
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(s([1,2,3]));

//Anonymous - sum

// let a=function (arr)
// {
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(a([1,2,3,4]));

// IIFE - sum

// (function s(arr)
// {
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     console.log(sum);
// })([1,2,3]);

// Arrow function - sum

// const a=(arr) =>
// {
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(a([1,2,3,9]));

//****************************************************************************** 

// 4. Return all the palindromes in an array 

//Function - Palindrome

// function checkPali(str) { 
//      const arr = str.split('');
//      const reversearr=arr.reverse();
//      const reverseStr = reversearr.join(''); 
//      if(str == reverseStr) {
//          console.log('It is a palindrome'); 
//         } 
//         else 
//         { 
//             console.log('It is not a palindrome'); 
//         } } 
//          const string = prompt('Enter a string: '); 
//          checkPali(string); 

//Anonymous - Palindrome

// let p=function (str) { 
//     const arr = str.split('');
//     const reversearr=arr.reverse();
//     const reverseStr = reversearr.join(''); 
//     if(str == reverseStr) {
//         console.log('It is a palindrome'); 
//        } 
//        else 
//        { 
//            console.log('It is not a palindrome'); 
//        } } 
//         const string = prompt('Enter a string: '); 
//         p(string); 

//IIFE - Palindrome

// let s="121";
// (function (str) { 
//     const arr = str.split('');
//     const reversearr=arr.reverse();
//     const reverseStr = reversearr.join(''); 
//     if(str == reverseStr) {
//         console.log('It is a palindrome'); 
//        } 
//        else 
//        { 
//            console.log('It is not a palindrome'); 
//        } } )(s); 

//Arrow - Palindrome

    // const p=(str) => { 
    //     const arr = str.split('');
    //     const reversearr=arr.reverse();
    //     const reverseStr = reversearr.join(''); 
    //     if(str == reverseStr) {
    //         console.log('It is a palindrome'); 
    //        } 
    //        else 
    //        { 
    //            console.log('It is not a palindrome'); 
    //        } } 
    //         const string = prompt('Enter a string: '); 
    //         p(string); 
    