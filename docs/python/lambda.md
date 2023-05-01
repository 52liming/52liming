---
sidebar_label: Lambda
---

Python 中的 lambda 表达式是一种匿名函数，它可以在不使用 def 或命名函数的情况下创建一个简单的函数。

lambda 表达式的语法如下：

```python
lambda arguments: expression
```

其中：

- arguments：为函数的参数，可以是任意数量的参数，用逗号隔开。
- expression：为函数的表达式。

例如：

```python
# 定义一个简单的 lambda 函数
add = lambda x, y: x + y
print(add(2, 3))  # 输出 5
```

上面的代码定义了一个接受两个参数的 lambda 函数 add，它的表达式为 x + y，返回两个参数相加的结果。

lambda 表达式可以用在许多场景中，例如：

1. 作为参数传递给函数

```python
# 使用 lambda 函数作为参数传递给 sorted 函数
words = ['banana', 'apple', 'orange', 'watermelon']
sorted_words = sorted(words, key=lambda x: len(x))
print(sorted_words)  # 输出 ['apple', 'banana', 'orange', 'watermelon']
```

上面的代码使用 lambda 表达式作为 sorted 函数的 key 参数，按照字符串长度进行排序。

2. 作为返回值返回

```python
# 定义一个返回 lambda 函数的函数
def make_adder(n):
    return lambda x: x + n

# 创建两个 lambda 函数
add5 = make_adder(5)
add10 = make_adder(10)

print(add5(2))  # 输出 7
print(add10(2))  # 输出 12
```

上面的代码定义了一个返回 lambda 函数的函数 make_adder，它的参数 n 用于创建一个新的 lambda 函数，新的 lambda 函数接受一个参数 x，返回 x + n 的结果。

lambda 表达式可以使代码更简洁，但也需要谨慎使用，因为它们通常会使代码难以理解。