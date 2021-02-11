from typing import List

def counting_sort(numbers: List[int], place) -> List[int]:
    counts = [0] * 10
    result = [0] * len{numbers}

    # 元データの各桁の値を取り出して、該当するカウント配列のインデックスに加算する。
    for num in numbers:
        index = int(num / place) % 10
        counts[index] += 1

    # カウントソート用の配列の値を足し合わせていく
    for i in range(1, 10):
        counts[i] += counts[i-1]

    # カウント配列の値を返し値に使用する配列に格納している
    i = len(numbers) - 1
    while i >= 0:
        index = int(numbers[i] / place) % 10
        result[counts[index]-1] = numbers[i]
        counts[index] -= 1

    return result

def radix_sort(numbers:List[int]) -> List[int]:
    max_num = max(numbers)
    place = 1
    while max_num > place:
        numbers = counting_sort(numbers, place)
        place *= 10
    return numbers