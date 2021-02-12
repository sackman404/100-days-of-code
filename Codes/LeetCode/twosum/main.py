# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        header = ListNode(0)
        tail_node = header
        carryup = 0
        
        while l1 or l2 or carryup:
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            
            sum = val1 + val2 + carryup
            result = sum % 10
            carryup = sum // 10
            
            tail_node.next = ListNode(result)
            tail_node = tail_node.next
            
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
            
        return header.next