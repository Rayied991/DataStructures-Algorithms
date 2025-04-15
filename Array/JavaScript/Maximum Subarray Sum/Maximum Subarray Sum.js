const bruteForce=(arr,n)=>{
    let maxSum=0;
    for(let st=0;st<n;st++){
        let currSum=0;
    for(let end=st;end<n;end++){
        currSum+=arr[end];
        maxSum=Math.max(maxSum,currSum);   
    }
}
return maxSum;
}


const KadanesAlgorithm=(arr,n)=>{

    let maxSum=0,currSum=0;
    for(let i=0;i<n;i++){
        currSum+=arr[i];
        maxSum=Math.max(currSum,maxSum);
        if(currSum<0){
            currSum=0;
        }

    }
    return maxSum;

}
let n=5;
let arr=[1,2,3,4,5];

console.log("BruteForce Approach:");
const brute=bruteForce(arr,n);
console.log("Maximum Subarray sum:",brute);
//Time Complexity: O(n^2)
//Space Complexity: O(1)
console.log("Kadane's Algorithm:");
const optimized=KadanesAlgorithm(arr,n);
console.log("Maximum Subarray sum:",optimized);
//Time Complexity: O(n)
//Space Complexity: O(1)
