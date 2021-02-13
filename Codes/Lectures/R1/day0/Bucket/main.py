from typing import List

def bucket_sort(numbers: List[int]) -> List[int]:
    num_len = len(numbers)
    bucket_array = [[] for _ in range(num_len)]

    for i in range(num_len):
        bucket_index = numbers[i] // num_len

        if bucket_index == num_len:
            bucket_index = 9
        
        bucket_array[bucket_index].append(numbers[i])

    for i in range(num_len):
        insertion_sort(bucket_array[i])

    result = []
    for i in range(num_len):
        result += bucket_array[i]

    return result


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
    numbers = [random.randint(0, 10000) for i in range(10000)]
    bucket_sort(numbers)
    # print(numbers)
    print(bucket_sort(numbers))