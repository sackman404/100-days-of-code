from typing import List


def gnome_sort(numbers: List[int]) -> List[int]:
    reverse_flag = False
    num_len = len(numbers)
    start = 0

    for i in range(num_len-1):
        if numbers[i] > numbers[i+1]:
            numbers[i], numbers[i+1] = numbers[i+1], numbers[i]
            print(numbers)
            reverse_flag = True

        if reverse_flag:
            for j in range(i, start, -1):
                if numbers[j-1] > numbers[j]:
                    numbers[j], numbers[j-1] = numbers[j-1], numbers[j]
                    reverse_flag = False
        
    return numbers

if __name__ == '__main__':
    import random
    numbers = [random.randint(0, 1000) for i in range(10)]
    print(numbers)
    print(gnome_sort(numbers))
