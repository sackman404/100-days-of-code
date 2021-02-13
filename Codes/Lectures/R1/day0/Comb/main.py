from typing import List

def comb_sort(numbers: List[int]) -> List[int]:
    # list_len = len(numbers)
    len_numbers = len(numbers)
    # gap = list_len / 1.3
    gap = len_numbers
    swapped = True

    while gap != 1 or swapped:
        gap = int(gap / 1.3)
        if gap < 1:
            gap = 1

        swapped = False
        
        for i in range(0, len_numbers - gap):
            if numbers[i] > numbers[i+gap]:
                numbers[i], numbers[i+gap] = numbers[i+gap], numbers[i]
                swapped = True

    return numbers

    #     swapped = False
    #     start = 0
    #     # end = list_len - 1
    #     for i in range(start, end):
    #         gap = int(gap)
    #         print(gap, numbers)
    #         if (i + gap) >= end + 1:
    #             break  
    #         elif numbers[i] > numbers[i+gap]:
    #             numbers[i], numbers[i+gap] = numbers[i+gap], numbers[i]
    #             swapped = True
    #     gap = gap / 1.3 if int(gap / 1.3) > 0 else 1

    #     if gap == 1 and not swapped:
    #         return numbers

    # return numbers

if __name__ == '__main__':
    import random
    numbers = [random.randint(0, 100) for i in range(10)]
    print(numbers)
    print(comb_sort(numbers))
