---
sidebar_label: 推导式
---

# 推导式(解析式)

Python 推导式是一种快速创建数据结构的方式，可以用简洁的语法创建列表、集合、字典等数据类型。

Python 支持三种推导式：列表推导式、集合推导式和字典推导式。

## 1. 列表推导式

列表推导式用于创建列表。它的语法为：

```python
[expression for item in iterable if condition]
```

其中：

- expression：对 item 执行的操作或表达式。
- item：从 iterable 中取出的元素。
- iterable：可迭代对象，如列表、元组、集合、字典等。
- condition：可选的条件，只有满足条件的 item 才会被加入到列表中。如果没有条件，则可以省略 if 语句。

例如：

```python
# 创建一个包含 0 到 9 的整数的列表
numbers = [x for x in range(10)]
print(numbers)

# 创建一个包含 1 到 10 的平方数的列表
squares = [x**2 for x in range(1, 11)]
print(squares)

# 创建一个包含字符串列表中长度大于等于 5 的字符串的列表
words = ["apple", "banana", "cherry", "date", "elderberry"]
long_words = [word for word in words if len(word) >= 5]
print(long_words)

# 创建一个包含两个列表中元素的所有组合的列表
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
combinations = [(x, y) for x in list1 for y in list2]
print(combinations)
```

## 2. 集合推导式

集合推导式用于创建集合。它的语法和列表推导式类似，只是用大括号 {} 来表示集合。例如：

```python
# 创建一个包含 0 到 9 的整数的集合
numbers = {x for x in range(10)}
print(numbers)

# 创建一个包含字符串列表中长度大于等于 5 的字符串的集合
words = ["apple", "banana", "cherry", "date", "elderberry"]
long_words = {word for word in words if len(word) >= 5}
print(long_words)
```

## 3. 字典推导式

字典推导式用于创建字典。它的语法为：

```python
{key_expression: value_expression for item in iterable if condition}
```

其中：

- key_expression：对 item 中键执行的操作或表达式。
- value_expression：对 item 中值执行的操作或表达式。
- item：从 iterable 中取出的元素。
- iterable：可迭代对象，如列表、元组、集合、字典等。
- condition：可选的条件，只有满足条件的 item 才会被加入到字典中。如果没有条件，则可以省略 if 语句。

例如：

```python
# 创建一个包含字符串列表中字符串和字符串长度的字典
words = ["apple", "banana", "cherry", "date", "elderberry"]
word_dict = {word: len(word) for word in words}
print(word_dict)
```

以上就是 Python 推导式的用法。它们可以使代码更简洁、更易读，同时提高代码的性能。