#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    void sortColors(vector<int>& nums)
    {
        int n = nums.size();
        int mid = 0, high = n - 1, low = 0;
        while (mid <= high)
        {
            if (nums[mid] == 0)    // 0s
            {
                swap(nums[low], nums[mid]);
                mid++;
                low++;
            }
            else if (nums[mid] == 1)      // 1s
            {
                mid++;
            }
            else      // 2s
            {
                swap(nums[high], nums[mid]);
                high--;
            }
        }
    }
};

int main()
{
    vector<int> nums = {2, 0, 2, 1, 1, 0};  // Sample input
    Solution sol;
    sol.sortColors(nums);

    // Print sorted array
    for (int num : nums)
    {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
//S.C:O(1)
//T.C:O(n):single pass(special)
