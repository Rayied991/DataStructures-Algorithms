const MajorityElementBrute=(nums,n)=>{
   for(let val of nums){
    let freq=0;
    for(let el of nums){
        if(el == val)
        {
            freq++;
        }
    }
    if(freq>n/2){
        return val;
    }

   }
   return -1;
}
const MajorityElementOptimized=(nums,n)=>{
    //sort the array
    nums.sort();
    let freq=1,ans=nums[0];
    for(let i=1;i<n;i++)
    {
        if(nums[i]==nums[i-1]){
            freq++;
        }
        else{
            freq=1,ans=nums[i];
        }
        if(freq>n/2){
            return ans;
        }
    }
   
    return ans;

}
const MooresVoting=(nums,n)=>{
    let freq=0;
    let ans=0;
    for(let i=0;i<n;i++){
        if(freq==0){
            ans=nums[i];
        }
        if(freq==nums[i]){freq++;}
        else{freq--;}
    }
    let count=0;
    for(let val of nums){
        if(val==ans){
            count++;
        }
    }
    if(count>n/2){return ans;}
    else{return -1;}
    return ans;
}
//way-2 for bruteforce
// const MajorityElementBrute=(nums,n)=>{
//     for(let i=0;i<n;i++){
//      let freq=0;
//      for(let j=0;j<n;j++){
//          if(nums[j] == nums[i])
//          {
//              freq++;
//          }
//      }
//      if(freq>n/2){
//          return nums[i];
//      }
 
//     }
//     return -1;
//  }
 
let nums=[1,2,2,1,1];
let n=nums.length;

console.log(MajorityElementBrute(nums,n));

//Time Complexity=O(n^2)
console.log(MajorityElementOptimized(nums,n));
//Time Complexity=O(nlogn)
//Space Complexity=O(1)
console.log(MooresVoting(nums,n));
//Time Complexity=O(n)
//Space Complexity=O(1)
//Moore's Voting Algorithm
