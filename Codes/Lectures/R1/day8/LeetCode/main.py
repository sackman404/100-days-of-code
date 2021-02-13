class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_len = len(nums)
        for i in range(nums_len):
            for j in range(nums_len):
                if ( target - nums[i] == nums[j] ) and (i != j):
                    return [i, j]
                