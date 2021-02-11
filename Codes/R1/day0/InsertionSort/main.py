from typing import List


def insertion_sort(numbers: List[int]) -> List[int]:
    num_len = len(numbers)
    start = 0
    
    for i in range(num_len):
        tmp = numbers[i]
        index = i
        for j in range(i, start-1, -1):
            if tmp < numbers[j]:
                numbers[index] = numbers[j]
                index = j
        numbers[index] = tmp
    return numbers

if __name__ == '__main__':
    import random
    numbers = [random.randint(0, 1000) for i in range(10)]
    print('First Numbers: ', numbers)
    print('After Sort: ', insertion_sort(numbers))