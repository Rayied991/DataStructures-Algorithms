
function PairSumOptimized(nums,target){//O(n)
    let n=nums.length;
    let i=0,j=n-1;
    while(i<j){
        let pairSum=nums[i]+nums[j];
        if(pairSum>target)
        {
            j--;
        }
        else if(pairSum<target){
            i++;
        }
        else{
            return [i,j];
        }
    }
}
function PairSumBrute(nums,target){//O(n^2)
    let n=nums.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(nums[i]+nums[j]==target){
                    return [i,j];
            }
        }
    }
}
let nums=[2,7,11,15];

const target=13;
console.log(PairSumBrute(nums,target));

//Time Complexity=o(n^2)

console.log(PairSumOptimized(nums,26));
console.log(PairSumOptimized(nums,22));

//Time Complexity=O(n)