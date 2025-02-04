#include<iostream>
using namespace std;
void ReverseArr(int arr[],int n)
{
    int start=0,last=n-1;
    while(start<last)
    {
        swap(arr[start],arr[last]);
        start++;
        last--;
    }


}

int main()
{
    int arr[]= {4,2,7,8,1,2};
    int n=6;
    ReverseArr(arr,n);
    for(int i=0; i<n; i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    return 0;
}
