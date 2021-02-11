from typing import List
import random

def cooktail_sort(numbers: List[int]) -> List[int]:
    len_numbers = len(numbers)
    swapped = True
    start = 0
    end = len_numbers - 1
    while swapped:
        swapped = False
        for i in range(start, end):
            if numbers[i] > numbers[i+1]:
                numbers[i], numbers[i+1] = numbers[i+1], numbers[i]
                swapped = True
        
        if not swapped:
            break

        swapped = False
        end = end - 1
        for i in range(end-1, start-1, -1):
            if numbers[i+1] < numbers[i]:
                numbers[i+1], numbers[i] = numbers[i], numbers[i+1]
                swapped = True

        start = start + 1

    return numbers


if __name__ == '__main__':
    numbers = [random.randint(0, 1000) for i in range(5)]
    print(numbers)
    print(cooktail_sort(numbers))