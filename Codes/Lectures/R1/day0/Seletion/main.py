from typing import List

def select_sort(numbers: List[int]) -> List[int]:
    numbers_len = len(numbers)
    for i in range(numbers_len):
        min_idx = i
        for j in range(i+1, numbers_len):
            if numbers[min_idx] > numbers[j]:
                min_idx = j
        numbers[i], numbers[min_idx] = numbers[min_idx], numbers[i]

    return numbers


if __name__ == '__main__':
    import random
    numbers = [random.randint(0, 1000) for i in range(10)]
    print(numbers)
    print(select_sort(numbers))