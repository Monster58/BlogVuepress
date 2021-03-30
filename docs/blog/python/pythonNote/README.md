---
title: Python
lang: zh-CN
---

> Python学习笔记

## 面向对象高级编程

### `__slots__`限制类的属性

```python
class Student(object):
  __slots__ = ('name','age')
# 用tuple定义允许绑定的属性名称
```

> 对子类无效，除非在子类中也定义`__slots__`

### `@property`装饰器

> 把方法变成属性调用，用于检查参数、设为只读属性

#### 检查参数

```python
class Student(object):
  @property
  def score(self):
    return self._score
  @score.setter
  def score(self,value):
    if not isinstance(value,int):
      raise TypeError('score must be an integer!')
    if value < 0 or value > 100
      raise ValueError('score must between 0 ~ 100!')
    self._score = value
```

#### 只读属性

```python
# 只定义getter方法，不定义setter方法就会变成只读属性
```

### 多重继承

> 在设计类的继承关系时，通常，主线都是单一继承下来的，例如，`Ostrich`继承自`Bird`。但是，如果需要“混入”额外的功能，通过多重继承就可以实现，比如，让`Ostrich`除了继承自`Bird`外，再同时继承`Runnable`。这种设计通常称之为MixIn。
>
> 这样一来，我们不需要复杂而庞大的继承链，只要选择组合不同的类的功能，就可以快速构造出所需的子类。

```python
class Dog(Mammal, RunnableMixIn, CarnivorousMixIn):
    pass
```

> 传入多个类即可实现继承关系

### 定制类

- `__str__`  定制`print`打印信息

- `__repr__`  xi

- `__iter__` 

  如果一个类想被用于`for ... in`循环，类似list或tuple那样，就必须实现一个`__iter__()`方法，该方法返回一个迭代对象，然后，Python的for循环就会不断调用该迭代对象的`__next__()`方法拿到循环的下一个值，直到遇到`StopIteration`错误时退出循环。

  我们以斐波那契数列为例，写一个Fib类，可以作用于for循环：

  ```python
  class Fib(object):
      def __init__(self):
          self.a, self.b = 0, 1 # 初始化两个计数器a，b
  
      def __iter__(self):
          return self # 实例本身就是迭代对象，故返回自己
  
      def __next__(self):
          self.a, self.b = self.b, self.a + self.b # 计算下一个值
          if self.a > 100000: # 退出循环的条件
              raise StopIteration()
          return self.a # 返回下一个值
  
  >>> for n in Fib():
  ...     print(n)
  ...
  1
  1
  2
  3
  5
  ...
  46368
  75025
  ```

- `__getitem__`
- `__getattr__`
- `__call__`
- 