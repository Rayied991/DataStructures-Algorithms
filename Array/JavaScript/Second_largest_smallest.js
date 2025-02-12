//Second largest/smallest element in an array

// bruteforce
// const SecondLargest=(arr,n)=>{
//     let largest=arr[n-1];
//     let second=0;
//     for(let i=n-2;i>=0;i--){
//         if(arr[i]!==largest){
//             second=arr[i];
//             break;

//         }
//     }
//     return largest;
// }

// let arr=[1,2,4,5,7,7];
// let arr2=arr.sort();
// console.log(arr2);
// console.log(SecondLargest(arr2,arr2.length-1));
//O(nlogn+n)
//better

// const SecondLargest=(arr,n)=>{
//         let largest=arr[0];
//         let second=-1;
//         for(let i=0;i<n;i++){
//             if(arr[i]>largest ){
//                 largest=arr[i];


//             }
//         }
//         for(let i=1;i<n;i++){
//             if(arr[i]>second && arr[i]!=largest ){
//                 second=arr[i];
//             }
//         }
//         return second;
//     }
//     let arr=[1,2,4,5,7,7];
// console.log(SecondLargest(arr,arr.length-1));
//T.C=O(N+N)=2N
//optimal
const SecondLargest=(arr,n)=>{
    let largest=arr[0];
    let second=Number.NEGATIVE_INFINITY;
    for(let i=1;i<n;i++){
        if(arr[i]>largest ){
            second=largest;
            largest=arr[i];


        }
    }
    return {second,largest};
}
const secondSmallest=(arr,n)=>{
    let smallest=arr[0];
    let second=Number.POSITIVE_INFINITY;
    for(let i=1;i<n;i++){
        if(arr[i]<smallest ){
            second=smallest;
            smallest=arr[i];
        }
        else if(arr[i]!=smallest && arr[i]<second){
            second=arr[i];
        }
    }
    return {second,smallest};
}
let arr=[1,2,4,5,7,7];
console.log(SecondLargest(arr,arr.length-1));
console.log(secondSmallest(arr,arr.length-1));

//T.C->O(N)