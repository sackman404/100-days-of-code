from typing import List


def shell_sort(numbers: List[int]) -> List[int]:
    """
    Shell Sort
    Big O Nation is follow:
    Ave: Depends on gap sequence, Best: O(nlogn), Worest:O(n^2)
    Stable: Yes
    """

    num_len = len(numbers)
    gap = num_len // 2

    while gap != 1:
        if gap > 1:
            gap = gap // 2 if gap // 2 > 0 else 1

        for i in range(gap, num_len):
            for j in range(i, 0, -gap):
                if numbers[j] < numbers[j-gap]:
                    numbers[j], numbers[j-gap] = numbers[j-gap], numbers[j]

    return numbers


        
if __name__ == '__main__':
    # need_help = input('Do you need help? >> [y/n]')
    # if need_help == 'y':
    #     help(shell_sort)

    import random
    numbers = [random.randint(0, 100) for i in range(10)]
    print('First Numbers: ', numbers)
    print('After Sort: ', shell_sort(numbers))