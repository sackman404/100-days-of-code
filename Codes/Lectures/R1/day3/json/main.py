import json


j = {
    "employee":
    [
        {'id': 111, "name": "Mike"},
        {"id": 222, "name": "Nancy"}
    ]
}

print(j)
# print(json.dumps(j))


# with open('test.json', 'w') as f:
#     json.dump(j, f)

# with open('test.json', 'r') as f:
#     print(json.load(f))

a = json.dumps(j)
print(json.loads(a))