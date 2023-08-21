//print numbers from 10 to 1 using while loop
// let n=10
// function print_num(v){
// while(n>0){
//     console.log(n)
//     n--
// }}
// print_num(n)

//********************************************* 

//sum of positive numbers using while loop

//let num=parseInt(prompt(`Enter number:`))
// let num=3
// function sum_pos(n){
//     let sum=0
//     while(n>0){
//         sum+=n
//         n--

//     }
//     return sum
// }
// console.log(`result=${sum_pos(num)}`)

// //********************************************* 

//print numbers from 1 to 5 using do...while

// let n=1
// function pn(n){
//     do{
//         console.log(n)
//         n++
//     }while(n<=5)
// }
// pn(n)

//********************************************* 

//Math methods

// console.log(Math.floor(14.1))
// console.log(Math.floor(-5.6))
// console.log(Math.ceil(-8.0))
// console.log(Math.ceil(3.1))
// console.log(Math.abs(-50))
// console.log(Math.abs(9))
// console.log(Math.round(7.8))
// console.log(Math.round(6.2))
// console.log(Math.sqrt(4))
// console.log(Math.cbrt(6))

//********************************************* 

//Date Methods

// const a=new Date()
// console.log(a.toDateString())
// console.log(a.getDate())
// console.log(a.getTime())
// //const c=new Date()
// a.setDate(12)
// console.log(a)
// a.setFullYear(2020,1,21)
// console.log(a)

//Extract Array of string values from array of object
// const books = [
//     {
//         author:"Paulo",
//         books:["The Alchemist",'Eleven Minutes']
//     },
//     {
//         author:"John Green",
//         books:['The Fault in our Stars']
//     },
//     {
//         author:"James Alen",
//         books:['The Way Of Peace','As you Think']
//     }
// ];
// // const result = books.reduce((acc,curr)=>{
// //     return [...acc,...curr.author];
// // },[])
// // console.log(result);
//  const result1=books.map(b=>b.author);
//  console.log(result1);

// finding duplicates in an array

// const arr2 = [1,2,3,4,4,5,5,3,2,1,8,9,9,12]
// // using filter and indexof
// function dup(arr){
//   return arr.filter((ele,index)=>
//     arr.indexOf(ele) != index
//   )
// }
// console.log(dup([1,2,3,4,4,5,5,3,2,1,8,9,9,12]))
// // // using set
// // function dup(arr){
// //       return [...new Set(arr)]
// //     }
// //     console.log(dup([1,2,3,4,4,5,5,3,2,1,8,9,9,12]))