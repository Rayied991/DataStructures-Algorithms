let arr = [1, 1, 2, 2, 2, 3, 3];

// Using Set to remove duplicates
// let uniqueArr = [...new Set(arr)];

// console.log(uniqueArr); 
// Output: [1, 2, 3]
//brute force:
//T.c:O(nlogn+n)
//s.c:O(n)

let i=0;
for(let j=1;j<arr.length;j++){
    if(arr[j]!==arr[i]){
        //give front position
        arr[i+1]=arr[j];
        i++;

    }
}

console.log(arr.slice(0,i+1));
console.log(arr.slice(0,i+1).length);
