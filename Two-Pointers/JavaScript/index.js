/**
 * 2 Pointer Approach :
 * for example if we want to reverse an array:[1,2,3] => [3,2,1]
 * we can use 2 pointer approach
 * step-1:set start=0, end=n-1
 * step-2:while(st<end) //loop will run till start<end
 * step-3:swap(arr[start],arr[end])
 * step-4:start++, end--;
 * step-5:end
 */
const reverseArray=(arr,length)=>{
    let start=0;
    let end=length-1;
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--;
    }
    return arr;

}

const arr=[4,2,7,8,1,2];
const length=arr.length;
const res1=reverseArray(arr,length);
console.log(res1);

//Time Complexity:O(n)
//Space Complexity:O(1)