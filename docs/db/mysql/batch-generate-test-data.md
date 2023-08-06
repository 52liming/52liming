---
sidebar_label: 批量生成测试数据 
---
# 批量生成测试数据

在进行数据库测试时, 我们可能需要先准备大量测试数据，
最常见的方法大多是通过存储过程生成，或者利用脚本生成数据然后导入数据库

> PS: Navicat 也带有数据生成功能，可以快速生成测试数据

## Faker
由于我想生成一些看起来真实的随机数据，然后发现了[Faker](https://github.com/joke2k/faker)可以满足我的需求,
可以生成姓名、职业、日期、地址、IP等常见信息，而且支持自定义生成数据，同时支持不同语言
例如：

| id | name   | position       | age | hire_date   | phone       | city   |
|----|------|----------|---|--------|-----------|------|
| 1  | 王桂香 | 生产主管     | 35 | 2020-09-12 | 15119698428 | 洋市   |
| 2  | 莫丹   | 财务分析员   | 58 | 2015-03-25 | 13042531043 | 佛山县 |
| 3  | 王凤兰 | 店员/营业员 | 47 | 2014-08-15 | 18156912390 | 香港县 |

* 标准支持参考文档 [Standard Providers](https://faker.readthedocs.io/en/stable/providers.html)

### 参考
```python
# 使用中文
fake = Faker("zh_CN")
```
```python
# 自定义 Provider
class AddressProvider(BaseProvider):
    def province(self):
        return '湖北省'

fake.add_provider(AddressProvider)
print(fake.province()) # 湖北省
```
```python
# 自定义 dynamic provider
myDyProvider = DynamicProvider(
     provider_name="my_dy",
     elements=["dr.", "doctor", "nurse", "surgeon", "clerk"],
)

fake.add_provider(myDyProvider)
for _ in range(10):
		print(fake.my_dy())
```


### MyCookBook
我本地使用pymysql保存到docker数据库测试保存10W数据大概十几分钟

```shell
pip install Faker
pip install pymysql
```

```python
import time
from faker import Faker
import pymysql

# connect to MySQL database
connection = pymysql.connect(host='127.0.0.1',
                             user='root',
                             password='123456',
                             database='test')

cursor = connection.cursor()

# create table for employees
create_table_query = """CREATE TABLE IF NOT EXISTS employees(
                            id INT PRIMARY KEY AUTO_INCREMENT,
                            name VARCHAR(255),
                            position VARCHAR(255),
                            age INT,
                            hire_date DATE,
                            phone VARCHAR(20),
                            city VARCHAR(255)
                        )"""
cursor.execute(create_table_query)

# use faker to generate employee data
fake = Faker('zh_CN')

start_time = time.time()

for i in range(1000000):
    name = fake.name()
    position = fake.job()
    age = fake.random_int(min=18, max=60)
    hire_date = fake.date_between(start_date='-20y', end_date='today')
    phone = fake.phone_number()
    city = fake.city()

    # insert employee data into table
    insert_query = f"INSERT INTO employees (name, position, age, hire_date, phone, city) VALUES ('{name}', '{position}', '{age}', '{hire_date}', '{phone}', '{city}')"
    cursor.execute(insert_query)

connection.commit()

cursor.close()
connection.close()

end_time = time.time()
time_taken = end_time - start_time
print(f"Task completed in {int(time_taken)} seconds.")
```