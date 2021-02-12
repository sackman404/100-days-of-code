class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_length = 0
        words = []
        for i in s:
            if not i in words:
                words.append(i)

                print(words)
            else:
                words = []
                words.append(i)
        
            if max_length < len(words):
                max_length = len(words)
           
        return max_length

s = 'dvdf'
sol = Solution()
sol.lengthOfLongestSubstring(s)