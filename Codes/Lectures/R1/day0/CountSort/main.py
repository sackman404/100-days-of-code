from typing import List

def counting_sort(numbers: List[int]) -> List[int]:
    max_index = max(numbers) + 1
    count_array = [0 for _ in range(max_index)]

    for i in numbers:
        count_array[i] += 1

    count_array_len = len(count_array)
    for i in range(count_array_len - 1):
        count_array[i+1] += count_array[i]

    result = [0 for _ in range(len(numbers))]
    for i in reversed(numbers):
        index = count_array[i]
        result[index-1] = i
        count_array[i] -= 1
    
    return result 



if __name__ == '__main__':
    import random
    nums = [random.randint(0, 30) for i in range(10)]
    print(nums)
    counting_sort(nums)
    print(counting_sort(nums))


    