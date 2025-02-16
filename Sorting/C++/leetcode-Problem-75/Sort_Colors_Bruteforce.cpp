
#include<iostream>
#include<vector>
#include<bits/stdc++.h>
//Bruteforce:O(nlogn) S.C:O(1)
using namespace std;
void printArray(vector<int> &arr,int n)
{
    for(int i=0; i<n; i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}
int main(){
    vector<int> arr={2,0,2,1,1,0};
    vector<int> arr1={2,0,1};
    sort(arr.begin(),arr.end());
    sort(arr1.begin(),arr1.end());
    int n=arr.size();
    int n1=arr1.size();
    printArray(arr,n);
    printArray(arr1,n1);
    return 0;
}
