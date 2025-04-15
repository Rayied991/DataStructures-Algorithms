function bruteForce(arr,n){
        for(let st=0;st<n;st++){
        for(let end=st;end<n;end++){
            let subset="";
            for(let i=st;i<=end;i++){
                subset+=arr[i]+" ";
               
            }
            console.log(subset.trim());
            
            
        }
    }
  
}
let n=5;
let arr=[1,2,3,4,5];

bruteForce(arr,n);
//Time Complexity: O(n^3)
//Space Complexity: O(1)