# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        seek_node_first = head
        seek_node_second = head
        
        while seek_node_first and seek_node_second:
            seek_node_first = seek_node_first.next
            
            if seek_node_second.next == None:
                return False
            
            seek_node_second = seek_node_second.next.next
            if seek_node_first == seek_node_second:
                return True
        
        return False
        