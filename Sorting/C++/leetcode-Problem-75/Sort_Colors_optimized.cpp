#include<iostream>
#include<vector>
#include<bits/stdc++.h>
//optimized:O(nlogn) S.C:O(1)
using namespace std;
void Sorting(vector<int> &arr,int n)
{
    int countZero=0,countOne=0,countTwo=0;
    //O(n)
    for(int i=0; i<n; i++)
    {
        if(arr[i]==0) countZero++;
        else if(arr[i]==1) countOne++;
        else
        {
            countTwo++;
        }

    }
    //O(n)
    int idx=0;
    for(int i=0; i<countZero; i++)
    {
        arr[idx++]=0;

    }
    for(int i=0; i<countOne; i++)
    {
        arr[idx++]=1;

    }
    for(int i=0; i<countTwo; i++)
    {
        arr[idx++]=2;

    }
}
void printArray(vector<int> &arr,int n)
{
    for(int i=0; i<n; i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}
int main()
{
    vector<int> arr= {2,0,2,1,1,0};
    vector<int> arr1= {2,0,1};
    int n=arr.size();
    int n1=arr1.size();
    Sorting(arr,n);
    Sorting(arr1,n1);
    printArray(arr,n);
    printArray(arr1,n1);
    return 0;
}
