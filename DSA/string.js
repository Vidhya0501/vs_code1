// let S="I am john cena cena john";
// let a=S.split(" ");
// for(i=0;i<=a.length-1;i++){
//     for(j=0;j<=a.length-1;j++){
//         if(a[i]==a[j]){
//             a[i]=a[j]="";
//         }
//     }  
// }

// console.log(a.join(" "));

function num(n){
    if (n!=0)
    { 
    console.log(n);
    num(n-1);
    }
}

// function num(n){
//     if (n==0) return;
//     console.log(n);
//     num(n-1);
    
// }
// num(3);