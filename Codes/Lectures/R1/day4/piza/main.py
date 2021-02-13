# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
input_line = input()
input_taxi_data = input_line
taxi_kind_num, init_distance = input_taxi_data.split(' ')
# print(taxi_kind_num, distance)

taxi_kind_num = int(taxi_kind_num)
menu = 4

taxies_menu = [[0 for i in range(menu)] for j in range(int(taxi_kind_num))]

for i in range(taxi_kind_num):
        input_taxi_menu = input()
        taxies_menu[i][0], taxies_menu[i][1], taxies_menu[i][2], taxies_menu[i][3] = input_taxi_menu.split(' ')

min_fee, max_fee, distance = 1000000, 0, 0
for i in range(taxi_kind_num):
    distance = int(init_distance)
    while distance > 0:
        if distance == int(init_distance):
            fee = int(taxies_menu[i][1])
            distance -= int(taxies_menu[i][0])
        else:
             distance -= int(taxies_menu[i][2])
             fee += int(taxies_menu[i][3])
    print(fee)
    if min_fee > fee:
        min_fee = fee
    if max_fee < fee:
        max_fee = fee

print(min_fee, max_fee)