import sqlite3

# conn = sqlite3.connect('test_sqlite.db')
conn = sqlite3.connect(':memmory')

curs = conn.cursor()

curs.execute(
    'CREATE TABLE persons(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING)')
conn.commit()

curs.execute(
    'INSERT INTO persons(name) values("Mike")'
)
conn.commit()

curs.execute(
    'INSERT INTO persons(name) values("Nancy")'
)
curs.execute(
    'INSERT INTO persons(name) values("Jun")'
)
conn.commit()

curs.execute('UPDATE persons set name = "Michel" where name = "Mike"')
conn.commit()

curs.execute('DELETE FROM persons WHERE name = "Michel"')
conn.commit()

curs.execute(
    'SELECT * from persons;'
)
print(curs.fetchall())

curs.close()
conn.close()