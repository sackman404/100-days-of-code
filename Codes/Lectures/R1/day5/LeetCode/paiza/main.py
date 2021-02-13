def convert_multiple_vocab(vocablaries):
    es_group = {'s', 'sh', 'ch', 'o', 'x'}
    ves_group = {'f', 'fe'}
    ies_group = {'a', 'i', 'u', 'e', 'o'}
    for voca in vocablaries:
        split_tail_one = {voca[-1:]}
        split_tail_two = {voca[-2:]}
        print(split_tail_one)
        print(split_tail_two)
        if split_tail_two <= es_group or split_tail_one <= es_group:
            voca = voca + 'es'
            print(voca)
        elif split_tail_two <= ves_group or split_tail_one <= ves_group:
            if voca[-1:] == 'f':
                word = voca[:-1] + 'ves'
                print(word)
            elif voca[-2:] == 'fe':
                word = voca[:-2] + 'ves'
                print(word)
        elif voca[-1:] == 'y' and ({voca[-2:-1]} <= ies_group ) == False:
                word = voca[:-2] + 'ies'
                print(word)
        else:
            word = voca + 's'
            print(word)

if __name__ == '__main__':
    vocablaries = []
    numbers = int(input())
    for i in range(numbers):
        vacab = input()
        vocablaries.append(vacab)
    convert_multiple_vocab(vocablaries)
